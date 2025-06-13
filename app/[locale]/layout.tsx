import { TranslationProvider } from '@/components/translation-provider';

async function getMessagesForLocale(locale: string) {
  try {
    const messages = await import(`../../messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    // Fallback to Spanish if locale file doesn't exist
    const fallback = await import('../../messages/es.json');
    return fallback.default;
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessagesForLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <TranslationProvider locale={locale} messages={messages}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}