import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always show locale prefix in URL (e.g., /en, /zh-CN)
  localePrefix: 'always',
});

export const config = {
  // Match only internationalized pathnames
  // Skip paths that start with _next, api, favicon, etc.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
