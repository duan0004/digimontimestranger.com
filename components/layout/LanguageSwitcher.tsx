'use client';

import { useState, useRef, useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { locales, localeLabels, localeFlags, type Locale } from '@/i18n';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const pathname = usePathname();

  const currentLocale = (params.locale as Locale) || 'en';

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Generate the path for a different locale
  const getLocalizedPath = (locale: Locale) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
    return `/${locale}${pathWithoutLocale}`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5" />
        <span className="text-xl">{localeFlags[currentLocale]}</span>
        <span className="hidden sm:inline font-medium">
          {localeLabels[currentLocale]}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Select Language
          </div>
          <div className="max-h-80 overflow-y-auto">
            {locales.map((locale) => (
              <Link
                key={locale}
                href={getLocalizedPath(locale)}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                  ${locale === currentLocale ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}
                `}
              >
                <span className="text-2xl">{localeFlags[locale]}</span>
                <span className="font-medium">{localeLabels[locale]}</span>
                {locale === currentLocale && (
                  <svg
                    className="w-5 h-5 ml-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
