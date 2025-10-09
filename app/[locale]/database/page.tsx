import { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/seo';
import Link from 'next/link';
import { Database, Zap, Package, Users, TrendingUp, BookOpen, ArrowRight, Shield, Award, Activity, Trophy } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'database' });

  return createMetadata({
    title: `${t('title')} - Digimon Time Stranger`,
    description: t('description'),
    keywords: [
      'database',
      'digimon list',
      'skills',
      'items',
      'game data',
      'reference',
    ],
    url: '/database',
  });
}

const databases = [
  {
    id: 'digidex',
    name: 'Digidex',
    description: 'Complete Digimon encyclopedia with stats, skills, and evolution paths',
    icon: Users,
    color: 'blue',
    count: '63+',
    link: '/digidex',
  },
  {
    id: 'bosses',
    name: 'Boss Database',
    description: 'Complete boss guides with strategies, weaknesses, and recommended teams',
    icon: Trophy,
    color: 'red',
    count: '7',
    link: '/database/bosses',
  },
  {
    id: 'skills',
    name: 'Skills Database',
    description: 'All attack skills, support abilities, and special techniques',
    icon: Zap,
    color: 'yellow',
    count: '30+',
    link: '/database/skills',
  },
  {
    id: 'items',
    name: 'Items Database',
    description: 'Complete item catalog including consumables, equipment, and collectibles',
    icon: Package,
    color: 'green',
    count: '50+',
    link: '/database/items',
  },
  {
    id: 'evolution',
    name: 'Evolution Tree',
    description: 'Interactive evolution paths and digivolution requirements',
    icon: TrendingUp,
    color: 'purple',
    count: '100+',
    link: '/evolution',
  },
  {
    id: 'agent-skills',
    name: 'Agent Skills',
    description: 'Bond-based abilities and perfection skills for team enhancement',
    icon: Shield,
    color: 'cyan',
    count: '20+',
    link: '/database/agent-skills',
  },
  {
    id: 'personalities',
    name: 'Personalities',
    description: 'Personality types and their stat growth bonuses',
    icon: Award,
    color: 'pink',
    count: '16',
    link: '/database/personalities',
  },
  {
    id: 'stats',
    name: 'Stats Guide',
    description: 'Comprehensive guide to all stats, formulas, and damage calculations',
    icon: Activity,
    color: 'orange',
    count: '7',
    link: '/database/stats',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
  },
  red: {
    bg: 'bg-red-100 dark:bg-red-900',
    text: 'text-red-600 dark:text-red-400',
    border: 'border-red-200 dark:border-red-800',
  },
  yellow: {
    bg: 'bg-yellow-100 dark:bg-yellow-900',
    text: 'text-yellow-600 dark:text-yellow-400',
    border: 'border-yellow-200 dark:border-yellow-800',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
  },
  cyan: {
    bg: 'bg-cyan-100 dark:bg-cyan-900',
    text: 'text-cyan-600 dark:text-cyan-400',
    border: 'border-cyan-200 dark:border-cyan-800',
  },
  pink: {
    bg: 'bg-pink-100 dark:bg-pink-900',
    text: 'text-pink-600 dark:text-pink-400',
    border: 'border-pink-200 dark:border-pink-800',
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-800',
  },
};

export default async function DatabasePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'database' });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Database className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('title')}
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            {t('description')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Database Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {databases.map((db) => {
            const Icon = db.icon;
            const colors = colorClasses[db.color];

            return (
              <Link
                key={db.id}
                href={`/${locale}${db.link}`}
                className="card p-8 hover:shadow-xl transition-all duration-200 group"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex items-center justify-center w-16 h-16 rounded-xl ${colors.bg} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {db.name}
                      </h2>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {db.description}
                    </p>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-sm font-semibold ${colors.bg} ${colors.text}`}>
                      <span>{db.count} Entries</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="card p-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📊 Database Statistics
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                63+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Digimon Species
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
                30+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Unique Skills
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                50+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Items & Equipment
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                100+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Evolution Paths
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📚 Additional Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href={`/${locale}/guides`}
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900">
                  <BookOpen className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    Strategy Guides
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    In-depth guides for every aspect of the game
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href={`/${locale}/tools/team-builder`}
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900">
                  <Users className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    Team Builder Tool
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Plan and optimize your perfect team composition
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
