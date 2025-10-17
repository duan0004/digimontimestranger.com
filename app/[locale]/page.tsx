'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { BookOpen, Users, TrendingUp, Target, Shield, Database, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('home');
  const params = useParams();
  const locale = params.locale as string;
  const tDatabase = useTranslations('database');

  const featuredCards = [
    {
      title: 'Complete Dex Database',
      description: '#1 Most comprehensive Digimon Story Time Stranger database with 400+ Digimon, evolution paths, stats & more',
      icon: BookOpen,
      href: `/${locale}/dex`,
      color: 'from-red-500 to-pink-600',
      badge: '#1',
    },
    {
      title: t('features.digidex.title'),
      description: t('features.digidex.description'),
      icon: Target,
      href: `/${locale}/guides/best-starters`,
      color: 'from-orange-500 to-red-600',
    },
    {
      title: t('features.guides.title'),
      description: t('features.guides.description'),
      icon: Users,
      href: `/${locale}/guides`,
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: t('features.evolution.title'),
      description: t('features.evolution.description'),
      icon: Shield,
      href: `/${locale}/tools/team-builder`,
      color: 'from-green-500 to-teal-600',
    },
    {
      title: t('features.bosses.title'),
      description: t('features.bosses.description'),
      icon: TrendingUp,
      href: `/${locale}/evolution`,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const quickLinks = [
    { title: t('popularGuides.evolutionGuide'), href: `/${locale}/guides/evolution-guide` },
    { title: t('popularGuides.teamBuilding'), href: `/${locale}/guides/team-building` },
    { title: t('popularGuides.storyBranches'), href: `/${locale}/guides/story-branches` },
  ];

  const stats = [
    { label: 'Digimon', value: '400+' },
    { label: 'Evolution Paths', value: '1000+' },
    { label: 'Guides', value: '50+' },
    { label: 'Updated', value: 'Daily' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-primary-600/90 animate-gradient"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-purple-900/30 animate-gradient-slow"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-yellow-400/90 via-orange-400/90 to-red-400/90 backdrop-blur-sm rounded-full border border-yellow-300/40 shadow-lg">
              <span className="text-2xl animate-pulse">🎉</span>
              <span className="text-sm font-bold text-white drop-shadow-md">
                SYSTEM UPDATE: #1 Most Complete Time Stranger Database!
              </span>
              <span className="text-xs px-2 py-0.5 bg-white/30 rounded-full font-bold text-white">NEW</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              {t('hero.title')}
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={`/${locale}/digidex`}
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
              >
                <BookOpen className="w-5 h-5" />
                {t('hero.cta')}
              </Link>
              <Link
                href={`/${locale}/tools/team-builder`}
                className="btn-accent inline-flex items-center gap-2 px-8 py-4 text-lg"
              >
                <Shield className="w-5 h-5" />
                Build Your Team
              </Link>
            </div>

            {/* Stats Banner */}
            <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-6 hover:scale-105 transition-transform"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 md:h-20"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="currentColor"
              className="text-white dark:text-gray-900"
            />
          </svg>
        </div>
      </section>

      {/* Mobile Database Quick Access */}
      <section className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-3">
            <Link
              href={`/${locale}/database`}
              className="card px-4 py-3 flex items-center gap-3"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow">
                <Database className="w-5 h-5" />
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  {tDatabase('title')}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                  {tDatabase('description')}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </Link>

            <Link
              href={`/${locale}/digidex`}
              className="card px-4 py-3 flex items-center gap-3"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow">
                <BookOpen className="w-5 h-5" />
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  {t('features.digidex.title')}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                  {t('features.digidex.description')}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cards Grid */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('features.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {featuredCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="card group relative overflow-hidden p-6 hover:shadow-2xl"
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} text-white`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      {card.badge && (
                        <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full shadow-md">
                          {card.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {card.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('popularGuides.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="card p-4 flex items-center justify-between group"
              >
                <span className="text-gray-900 dark:text-white font-medium">
                  {link.title}
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Guides Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Video Guides & Tutorials
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Watch comprehensive gameplay guides and tutorials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="card overflow-hidden group">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2oQb1vYe1uQ"
                  title="Digimon Time Stranger Guide 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 2 */}
            <div className="card overflow-hidden group">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/kxQBQJmX_MU"
                  title="Digimon Time Stranger Guide 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 3 */}
            <div className="card overflow-hidden group">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/uaLHMFZdCuE"
                  title="Digimon Time Stranger Guide 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 4 */}
            <div className="card overflow-hidden group">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ILR81Az7MoQ"
                  title="Digimon Time Stranger Guide 4"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 5 */}
            <div className="card overflow-hidden group">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/cPBLhpfaklc"
                  title="Digimon Time Stranger Guide 5"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 6 */}
            <div className="card overflow-hidden group">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/bFEu9XOLmg0"
                  title="Digimon Time Stranger Guide 6"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 7 */}
            <div className="card overflow-hidden group">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/JUuTkI1V774"
                  title="Digimon Time Stranger Guide 7"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 8 */}
            <div className="card overflow-hidden group">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/f55FFqi09vY"
                  title="Digimon Time Stranger Guide 8"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 9 */}
            <div className="card overflow-hidden group">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/13m4Ylsv6A4"
                  title="Digimon Time Stranger Guide 9"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 10 */}
            <div className="card overflow-hidden group">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ICCFACvxF84"
                  title="Digimon Time Stranger Guide 10"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 11 */}
            <div className="card overflow-hidden group">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/JRCH0qPHYzo"
                  title="Digimon Time Stranger Guide 11"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 12 */}
            <div className="card overflow-hidden group">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/HRkN-3QM9Gk"
                  title="Digimon Time Stranger Guide 12"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="card overflow-hidden bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  NEW
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('community.title')}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {t('community.description')}
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Share battle strategies and team builds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Get help from experienced players</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Discuss latest updates and patches</span>
                  </li>
                </ul>
                <Link
                  href={`/${locale}/community`}
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
                >
                  Visit Community Forum
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </Link>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="card p-4 bg-white dark:bg-gray-800">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">693+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Topics</div>
                  </div>
                  <div className="card p-4 bg-white dark:text-gray-800">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">2.5K+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Members</div>
                  </div>
                  <div className="card p-4 bg-white dark:bg-gray-800">
                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">5.2K+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Posts</div>
                  </div>
                  <div className="card p-4 bg-white dark:bg-gray-800">
                    <svg className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">98%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of Tamers using our guides to master the game
          </p>
          <Link
            href={`/${locale}/guides`}
            className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            View All Guides
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
