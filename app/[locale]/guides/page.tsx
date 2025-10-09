import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Link from 'next/link';
import { BookOpen, Zap, Users, TrendingUp, Gamepad2, Settings, GitBranch, Package } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Strategy Guides - Complete Digimon Time Stranger Guides',
  description:
    'Browse all strategy guides for Digimon Story: Time Stranger. Learn team building, evolution paths, leveling routes, and advanced strategies.',
  keywords: [
    'Digimon guides',
    'strategy guides',
    'walkthrough',
    'tips and tricks',
    'game guide',
  ],
  url: '/guides',
});

const guides = [
  {
    title: 'Best Starter Digimon',
    description: 'Complete analysis of all starter choices with evolution paths and team synergy recommendations.',
    href: '/guides/best-starters',
    icon: BookOpen,
    status: 'available',
    readTime: '8 min',
  },
  {
    title: 'Evolution Guide',
    description: 'Master evolution mechanics, requirements, and optimal evolution timing for all Digimon.',
    href: '/guides/evolution-guide',
    icon: TrendingUp,
    status: 'available',
    readTime: '12 min',
  },
  {
    title: 'Team Building Strategies',
    description: 'Advanced team composition, role balance, and synergy strategies for competitive play.',
    href: '/guides/team-building',
    icon: Users,
    status: 'available',
    readTime: '10 min',
  },
  {
    title: 'Fast Leveling Routes',
    description: 'Efficient leveling paths, best grinding locations, and XP optimization techniques.',
    href: '/guides/fast-leveling',
    icon: Zap,
    status: 'available',
    readTime: '7 min',
  },
  {
    title: 'Story Branches & Endings',
    description: 'Navigate branching story paths, key decisions, and unlock all 5 endings with our comprehensive guide.',
    href: '/guides/story-branches',
    icon: GitBranch,
    status: 'available',
    readTime: '15 min',
  },
  {
    title: 'Boss Battle Strategies',
    description: 'Detailed strategies for every boss encounter with recommended teams and counter tactics.',
    href: '/guides/boss-strategies',
    icon: Gamepad2,
    status: 'available',
    readTime: '15 min',
  },
  {
    title: 'Collectibles Guide',
    description: 'Complete chapter-by-chapter list of all collectibles, Ancient Tablet Fragments, and missable items.',
    href: '/guides/collectibles',
    icon: Package,
    status: 'available',
    readTime: '20 min',
  },
  {
    title: 'PC & Steam Deck Settings',
    description: 'Optimize graphics, controls, and performance for the best PC and Steam Deck experience.',
    href: '/pc/steam-deck',
    icon: Settings,
    status: 'coming-soon',
    readTime: '5 min',
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Strategy Guides
          </h1>
          <p className="text-xl text-blue-100">
            Complete guides to master Digimon Story: Time Stranger
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.status === 'available' ? guide.href : '#'}
              className={`card p-6 hover:shadow-lg transition-all ${
                guide.status === 'coming-soon' ? 'opacity-75' : ''
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex-shrink-0">
                  <guide.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {guide.title}
                  </h3>
                  {guide.status === 'coming-soon' && (
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {guide.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>⏱️ {guide.readTime} read</span>
                {guide.status === 'available' && (
                  <span className="text-primary-600 dark:text-primary-400 font-medium">
                    Read now →
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="card p-6 mt-12 bg-gradient-to-br from-blue-50 to-primary-50 dark:from-blue-900/20 dark:to-primary-900/20 border-2 border-primary-200 dark:border-primary-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            📚 More Guides Coming Soon
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We&apos;re actively working on more comprehensive guides covering all aspects of Digimon Story: Time Stranger. Check back regularly for updates!
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Want to request a specific guide? Let us know through our feedback channels.
          </p>
        </div>
      </div>
    </div>
  );
}
