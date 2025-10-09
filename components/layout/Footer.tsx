'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n';

export default function Footer() {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const getLocalizedHref = (href: string) => {
    return `/${locale}${href}`;
  };

  const footerLinks = {
    guides: [
      { name: t('bestStarters'), href: '/guides/best-starters' },
      { name: t('evolutionGuide'), href: '/guides/evolution-guide' },
      { name: t('teamBuilding'), href: '/guides/team-building' },
      { name: t('fastLeveling'), href: '/guides/fast-leveling' },
    ],
    tools: [
      { name: t('teamBuilder'), href: '/tools/team-builder' },
      { name: t('evolutionTree'), href: '/evolution' },
      { name: 'Digidex', href: '/digidex' },
      { name: 'Database', href: '/database' },
    ],
    resources: [
      { name: t('communityForum'), href: '/community' },
      { name: t('pcSettings'), href: '/pc/steam-deck' },
      { name: t('updatesPatches'), href: '/updates' },
      { name: t('about'), href: '/about' },
    ],
    legal: [
      { name: t('privacyPolicy'), href: '/privacy' },
      { name: t('termsOfService'), href: '/terms' },
    ],
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800">
                <span className="text-white font-bold text-xl">DTS</span>
              </div>
              <div>
                <div className="text-sm font-bold gradient-text">
                  {t('siteTitle')}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {t('siteSubtitle')}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('description')}
            </p>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {t('guidesTitle')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.name}>
                  <Link
                    href={getLocalizedHref(link.href)}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {t('toolsTitle')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link
                    href={getLocalizedHref(link.href)}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {t('resourcesTitle')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={getLocalizedHref(link.href)}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p className="mb-1">
                {t('copyright', { year: currentYear })}
              </p>
              <p className="text-xs mb-2">
                <strong>Disclaimer:</strong> {t('disclaimer')}
              </p>
              <div className="flex flex-wrap gap-3 text-xs">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={getLocalizedHref(link.href)}
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors underline"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{t('builtWith')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
