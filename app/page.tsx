import Link from 'next/link';
import { BookOpen, Zap, Users, TrendingUp, Target, Shield } from 'lucide-react';

const featuredCards = [
  {
    title: 'Best Starters Guide',
    description: 'Discover the top Digimon to begin your journey and dominate early game',
    icon: Target,
    href: '/guides/best-starters',
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'Personality System',
    description: 'Master personality mechanics and optimize your Digimon\'s growth',
    icon: Users,
    href: '/guides/personality-system',
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Team Builder Tool',
    description: 'Build perfect teams with memory, element coverage, and role analysis',
    icon: Shield,
    href: '/tools/team-builder',
    color: 'from-green-500 to-teal-600',
  },
  {
    title: 'Evolution Trees',
    description: 'Explore complete evolution paths for all 400+ Digimon',
    icon: TrendingUp,
    href: '/evolution',
    color: 'from-purple-500 to-pink-600',
  },
];

const quickLinks = [
  { title: 'Fast Leveling Routes', href: '/guides/fast-leveling' },
  { title: 'How to Get Veemon', href: '/how-to-get/veemon' },
  { title: 'Agumon → Greymon Evolution', href: '/evolve/agumon-greymon' },
  { title: 'PC & Steam Deck Settings', href: '/pc/steam-deck' },
  { title: 'Memory Management 101', href: '/guides/memory-management' },
  { title: 'Boss Strategies', href: '/guides/boss-strategies' },
];

const stats = [
  { label: 'Digimon', value: '400+' },
  { label: 'Evolution Paths', value: '1000+' },
  { label: 'Guides', value: '50+' },
  { label: 'Updated', value: 'Daily' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Zap className="w-4 h-4 text-accent-500" />
              <span className="text-sm font-medium">
                80k+ Peak Players • 92% Positive Reviews
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Master <span className="text-accent-500">Digimon Story:</span>
              <br />
              Time Stranger
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Complete strategies, evolution guides, and team building tools.
              Your ultimate companion for conquering the Digital World.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/digidex"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
              >
                <BookOpen className="w-5 h-5" />
                Browse Digidex
              </Link>
              <Link
                href="/tools/team-builder"
                className="btn-accent inline-flex items-center gap-2 px-8 py-4 text-lg"
              >
                <Shield className="w-5 h-5" />
                Build Your Team
              </Link>
            </div>

            {/* Stats Banner */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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

      {/* Featured Cards Grid */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Guides & Tools
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to become a master Tamer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} text-white mb-4`}
                    >
                      <Icon className="w-6 h-6" />
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
            Trending Guides
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
            href="/guides"
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
