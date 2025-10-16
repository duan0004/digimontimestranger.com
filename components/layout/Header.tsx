'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import GlobalSearch from '@/components/search/GlobalSearch';
import LanguageSwitcher from './LanguageSwitcher';
import type { Locale } from '@/i18n';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const params = useParams();
  const locale = (params.locale as Locale) || 'en';
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');

  const navigation = [
    { name: t('home'), href: '/' },
    { name: 'Dex', href: '/dex' },
    { name: t('walkthrough'), href: '/walkthrough' },
    { name: t('digidex'), href: '/digidex' },
    { name: t('database'), href: '/database' },
    { name: t('guides'), href: '/guides' },
    { name: t('tools'), href: '/tools/team-builder' },
    { name: t('community'), href: '/community' },
  ];

  // Helper to create locale-aware links
  const getLocalizedHref = (href: string) => {
    return `/${locale}${href}`;
  };

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={getLocalizedHref('/')} className="flex items-center space-x-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Digimon Time Stranger"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold gradient-text">
                  {t('siteTitle')}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {t('siteSubtitle')}
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={getLocalizedHref(item.href)}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switcher, Search & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>{tCommon('search')}</span>
              <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-1 text-xs bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>

            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="space-y-1 mb-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={getLocalizedHref(item.href)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="px-3 border-t border-gray-200 dark:border-gray-800 pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>

      {/* Global Search Modal */}
      <GlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
