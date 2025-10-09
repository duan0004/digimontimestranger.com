import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  MessageSquare,
  Users,
  TrendingUp,
  HelpCircle,
  BookOpen,
  Lightbulb,
  Trophy,
  Heart,
  Star,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Community Forum - Digimon Time Stranger',
  description:
    'Join the Digimon Time Stranger community! Share strategies, discuss team builds, ask questions, and connect with fellow Tamers.',
  keywords: [
    'community',
    'forum',
    'discussion',
    'strategies',
    'team builds',
    'help',
  ],
  url: '/community',
});

const categories = [
  {
    id: 'general',
    name: 'General Discussion',
    description: 'Chat about anything related to Digimon Time Stranger',
    icon: MessageSquare,
    color: 'blue',
    topics: 156,
    posts: 1234,
  },
  {
    id: 'strategies',
    name: 'Battle Strategies',
    description: 'Share and discuss battle tactics, boss strategies, and combat tips',
    icon: TrendingUp,
    color: 'red',
    topics: 89,
    posts: 756,
  },
  {
    id: 'team-builds',
    name: 'Team Building',
    description: 'Show off your team compositions and get feedback',
    icon: Users,
    color: 'green',
    topics: 124,
    posts: 892,
  },
  {
    id: 'questions',
    name: 'Questions & Help',
    description: 'Get help from the community and ask your questions',
    icon: HelpCircle,
    color: 'purple',
    topics: 201,
    posts: 1567,
  },
  {
    id: 'guides',
    name: 'Player Guides',
    description: 'Community-created guides and tutorials',
    icon: BookOpen,
    color: 'orange',
    topics: 45,
    posts: 321,
  },
  {
    id: 'showcase',
    name: 'Achievements & Showcase',
    description: 'Share your accomplishments, rare finds, and collections',
    icon: Trophy,
    color: 'yellow',
    topics: 78,
    posts: 456,
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
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-800',
  },
  yellow: {
    bg: 'bg-yellow-100 dark:bg-yellow-900',
    text: 'text-yellow-600 dark:text-yellow-400',
    border: 'border-yellow-200 dark:border-yellow-800',
  },
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Community Forum
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-6">
            Connect with fellow Tamers, share strategies, and get help from the community
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <Users className="w-4 h-4" />
              <span>2.5K+ Members</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <MessageSquare className="w-4 h-4" />
              <span>693 Topics</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <Heart className="w-4 h-4" />
              <span>5.2K Posts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Card */}
        <div className="card p-6 mb-8 bg-gradient-to-br from-blue-50 to-primary-50 dark:from-blue-900/20 dark:to-primary-900/20 border-2 border-primary-200 dark:border-primary-800">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-600 text-white flex-shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome to the Community!
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This forum is powered by <strong>GitHub Discussions</strong>, which means you can participate using your GitHub account. No registration required - just sign in with GitHub to start posting!
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>View all discussions without signing in</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Sign in with GitHub to post, comment, and react</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Support for Markdown, code blocks, and images</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Get notifications when someone replies to your posts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Discussion Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const colors = colorClasses[category.color];

              return (
                <Link
                  key={category.id}
                  href={`/community/${category.id}`}
                  className="card p-6 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${colors.bg} flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{category.topics} topics</span>
                      <span>{category.posts} posts</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="card p-6 bg-gray-50 dark:bg-gray-800/50">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Community Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Do:</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Be respectful and kind to other members</li>
                <li>Share helpful strategies and tips</li>
                <li>Ask questions and help others</li>
                <li>Use appropriate categories for your posts</li>
                <li>Search before posting duplicate topics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">❌ Don&apos;t:</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Post spam or promotional content</li>
                <li>Share cheats or exploits</li>
                <li>Use offensive or abusive language</li>
                <li>Share personal information</li>
                <li>Post off-topic content</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
