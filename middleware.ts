import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/request';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale,
  
  // Configure locale routing
  localePrefix: {
    mode: 'as-needed',
    prefixes: {
      'es': '/', // Spanish is the default, no prefix
      'en': '/en',
      'pt': '/pt'
    }
  }
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|pt)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};