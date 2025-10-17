import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Define supported locales
export const locales = [
  'en',       // English
  'ja',       // Japanese
  'ko',       // Korean
  'es',       // Spanish
  'de',       // German
  'fr',       // French
  'ru',       // Russian
  'it',       // Italian
  'pt',       // Portuguese
  'nl',       // Dutch
  'vi',       // Vietnamese
  'th',       // Thai
  'ms',       // Malay
  'fil',      // Filipino
  'zh-CN',    // Simplified Chinese (moved to last)
] as const;
export type Locale = (typeof locales)[number];

// Define default locale
export const defaultLocale: Locale = 'en';

// Locale labels in native language
export const localeLabels: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  ko: '한국어',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  ru: 'Русский',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  vi: 'Tiếng Việt',
  th: 'ไทย',
  ms: 'Bahasa Melayu',
  fil: 'Filipino',
  'zh-CN': '简体中文',
};

// Locale flags (emoji or icon identifiers)
export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  ja: '🇯🇵',
  ko: '🇰🇷',
  es: '🇪🇸',
  de: '🇩🇪',
  fr: '🇫🇷',
  ru: '🇷🇺',
  it: '🇮🇹',
  pt: '🇵🇹',
  nl: '🇳🇱',
  vi: '🇻🇳',
  th: '🇹🇭',
  ms: '🇲🇾',
  fil: '🇵🇭',
  'zh-CN': '🇨🇳',
};

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming locale parameter is valid
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
