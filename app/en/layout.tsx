// app/en/layout.tsx
import type { Metadata } from "next";
import { TranslationProvider } from "@/components/translation-provider"; // Verified path
import messages from "@/messages/en.json"; // Verified path
import "@/app/globals.css"; // Assuming global styles should apply

export const metadata: Metadata = {
  title: "Recharge Retreat - English Pages",
  description: "Information about Recharge Retreat in English.",
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <TranslationProvider locale="en" messages={messages}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
