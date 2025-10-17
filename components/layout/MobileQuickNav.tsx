'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Search, Database, BookOpen, Target, Compass, Hammer } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n';

type MobileQuickNavProps = {
  onOpenSearch?: () => void;
};

export default function MobileQuickNav({ onOpenSearch }: MobileQuickNavProps) {
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const router = useRouter();
  const tNav = useTranslations('nav');
  const tCommon = useTranslations('common');
  const [query, setQuery] = useState('');

  const quickLinks = [
    {
      key: 'database',
      label: tNav('database'),
      href: '/database',
      icon: Database,
      accent: 'from-orange-500 to-rose-500',
    },
    {
      key: 'dex',
      label: 'Dex',
      href: '/dex',
      icon: BookOpen,
      accent: 'from-blue-500 to-indigo-500',
    },
    {
      key: 'digidex',
      label: tNav('digidex'),
      href: '/digidex',
      icon: Target,
      accent: 'from-cyan-500 to-sky-500',
    },
    {
      key: 'guides',
      label: tNav('guides'),
      href: '/guides',
      icon: Compass,
      accent: 'from-green-500 to-emerald-500',
    },
    {
      key: 'tools',
      label: tNav('tools'),
      href: '/tools/team-builder',
      icon: Hammer,
      accent: 'from-purple-500 to-fuchsia-500',
    },
  ];

  const getLocalizedHref = (href: string) => `/${locale}${href}`;

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();

    if (!trimmed) {
      onOpenSearch?.();
      return;
    }

    router.push(`/${locale}/search?q=${encodeURIComponent(trimmed)}`);
    setQuery('');
  };

  return (
    <div className="xl:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:dark:bg-gray-900/80">
      <div className="px-4 pb-4 pt-3 space-y-3">
        <form onSubmit={handleSearch} className="w-full">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={tCommon('searchPlaceholder')}
              className="flex-1 bg-transparent text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-3 py-1 rounded-md bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              {tCommon('search')}
            </button>
          </div>
        </form>

        <div className="flex items-center gap-2 overflow-x-auto">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.key}
                href={getLocalizedHref(link.href)}
                className="flex flex-col items-start justify-center min-w-[7.25rem] rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-3 shadow-sm hover:shadow-md transition-all"
              >
                <span className={`mb-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-br ${link.accent} text-white p-2 shadow`}>
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-tight">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
