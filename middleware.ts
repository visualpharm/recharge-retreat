import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';

const ORIGIN = 'https://recharge.com.ar';
const LOCALES = ['es', 'en', 'pt'];

const intl = createMiddleware({
  // A list of all locales that are supported
  locales: ['es', 'en', 'pt'],
  
  // Used when no locale matches
  defaultLocale: 'es'
});

/* Every page names itself as canonical and lists its language versions,
 * as an HTTP Link header (Google reads rel=canonical and hreflang there).
 * Redirects (e.g. / → /es) carry no header. */
export default function middleware(request: NextRequest) {
  const response = intl(request);
  if (response.headers.get('location')) return response;
  const path = request.nextUrl.pathname.replace(/\/$/, '') || '/';
  const [, first, ...rest] = path.split('/');
  if (!LOCALES.includes(first)) return response;
  const tail = rest.length ? `/${rest.join('/')}` : '';
  const links = [`<${ORIGIN}${path}>; rel="canonical"`]
    .concat(LOCALES.map((l) => `<${ORIGIN}/${l}${tail}>; rel="alternate"; hreflang="${l}"`))
    .concat(`<${ORIGIN}/es${tail}>; rel="alternate"; hreflang="x-default"`);
  response.headers.set('Link', links.join(', '));
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};