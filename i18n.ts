import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Define supported locales
export const locales = ['en', 'zh-CN', 'zh-TW', 'ja', 'ko'] as const;
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
};

// Locale flags (emoji or icon identifiers)
export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  'zh-CN': '🇨🇳',
  'zh-TW': '🇹🇼',
  ja: '🇯🇵',
  ko: '🇰🇷',
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
