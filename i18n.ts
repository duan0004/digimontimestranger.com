import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Define supported locales
export const locales = [
  'en',       // English
  'zh-CN',    // Simplified Chinese
  'zh-TW',    // Traditional Chinese
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
] as const;
export type Locale = (typeof locales)[number];

// Define default locale
export const defaultLocale: Locale = 'en';

// Locale labels in native language
export const localeLabels: Record<Locale, string> = {
  en: 'English',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
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
};

// Locale flags (emoji or icon identifiers)
export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  'zh-CN': '🇨🇳',
  'zh-TW': '🇹🇼',
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
};

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming locale parameter is valid
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
