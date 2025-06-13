import { getRequestConfig } from 'next-intl/server';

export const locales = ['es', 'en', 'pt'] as const;
export const defaultLocale = 'es' as const;

export default getRequestConfig(async ({ locale }) => {
  // Fallback to default locale if undefined
  const safeLocale = locale || defaultLocale;
  
  // Ensure the locale is valid
  const validLocale = locales.includes(safeLocale as any) ? safeLocale : defaultLocale;
  
  return {
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});