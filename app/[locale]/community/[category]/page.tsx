import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import GiscusComments from '@/components/community/GiscusComments';
import {
  MessageSquare,
  Users,
  TrendingUp,
  HelpCircle,
  BookOpen,
  Trophy,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';

interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  categoryId: string;
  guidelines: string[];
}

const categories: Record<string, CategoryInfo> = {
  general: {
    id: 'general',
    name: 'General Discussion',
    description: 'Chat about anything related to Digimon Time Stranger',
    icon: MessageSquare,
    color: 'blue',
    categoryId: 'DIC_kwDONX7Ues4Ckt_Q',
    guidelines: [
      'Share your general thoughts and experiences',
      'Discuss game updates and news',
      'Connect with other Tamers',
      'Keep discussions friendly and on-topic',
    ],
  },
  strategies: {
    id: 'strategies',
    name: 'Battle Strategies',
    description: 'Share and discuss battle tactics, boss strategies, and combat tips',
    icon: TrendingUp,
    color: 'red',
    categoryId: 'DIC_kwDONX7Ues4Ckt_R',
    guidelines: [
      'Share effective battle strategies',
      'Discuss boss fight tactics',
      'Analyze combat mechanics',
      'Help others improve their gameplay',
    ],
  },
  'team-builds': {
    id: 'team-builds',
    name: 'Team Building',
    description: 'Show off your team compositions and get feedback',
    icon: Users,
    color: 'green',
    categoryId: 'DIC_kwDONX7Ues4Ckt_S',
    guidelines: [
      'Share your team compositions',
      'Discuss synergies and combos',
      'Get feedback on your builds',
      'Suggest improvements for others',
    ],
  },
  questions: {
    id: 'questions',
    name: 'Questions & Help',
    description: 'Get help from the community and ask your questions',
    icon: HelpCircle,
    color: 'purple',
    categoryId: 'DIC_kwDONX7Ues4Ckt_T',
    guidelines: [
      'Ask clear and specific questions',
      'Search before asking duplicates',
      'Provide context and details',
      'Mark helpful answers',
    ],
  },
  guides: {
    id: 'guides',
    name: 'Player Guides',
    description: 'Community-created guides and tutorials',
    icon: BookOpen,
    color: 'orange',
    categoryId: 'DIC_kwDONX7Ues4Ckt_U',
    guidelines: [
      'Create comprehensive guides',
      'Use clear formatting and structure',
      'Include examples and screenshots',
      'Keep guides up-to-date',
    ],
  },
  showcase: {
    id: 'showcase',
    name: 'Achievements & Showcase',
    description: 'Share your accomplishments, rare finds, and collections',
    icon: Trophy,
    color: 'yellow',
    categoryId: 'DIC_kwDONX7Ues4Ckt_V',
    guidelines: [
      'Share your achievements and milestones',
      'Show off rare Digimon finds',
      'Display your collections',
      'Celebrate community successes',
    ],
  },
};

interface PageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = categories[params.category];

  if (!category) {
    return genMeta({
      title: 'Category Not Found',
      description: 'This category does not exist.',
      url: `/community/${params.category}`,
    });
  }

  return genMeta({
    title: `${category.name} - Community Forum`,
    description: category.description,
    keywords: ['community', 'forum', 'discussion', category.id],
    url: `/community/${params.category}`,
  });
}

export default function CategoryPage({ params }: PageProps) {
  const category = categories[params.category];

  if (!category) {
    notFound();
  }

  const Icon = category.icon;

  const colorClasses: Record<string, { bg: string; text: string }> = {
    blue: { bg: 'bg-blue-100 dark:bg-blue-900', text: 'text-blue-600 dark:text-blue-400' },
    red: { bg: 'bg-red-100 dark:bg-red-900', text: 'text-red-600 dark:text-red-400' },
    green: { bg: 'bg-green-100 dark:bg-green-900', text: 'text-green-600 dark:text-green-400' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-900', text: 'text-purple-600 dark:text-purple-400' },
    orange: { bg: 'bg-orange-100 dark:bg-orange-900', text: 'text-orange-600 dark:text-orange-400' },
    yellow: { bg: 'bg-yellow-100 dark:bg-yellow-900', text: 'text-yellow-600 dark:text-yellow-400' },
  };

  const colors = colorClasses[category.color];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Community
          </Link>
          <div className="flex items-center gap-4">
            <div className={`flex items-center justify-center w-16 h-16 rounded-xl ${colors.bg}`}>
              <Icon className={`w-8 h-8 ${colors.text}`} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {category.name}
              </h1>
              <p className="text-lg text-blue-100">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Guidelines Card */}
        <div className="card p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Category Guidelines
          </h2>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {category.guidelines.map((guideline, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>{guideline}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Info Box */}
        <div className="card p-4 mb-6 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-gray-700 dark:text-gray-300">
              <p className="mb-2">
                <strong>Sign in with GitHub</strong> to start a new discussion or reply to existing ones.
                Click the button below to open the discussion in GitHub.
              </p>
              <a
                href={`https://github.com/duan0004/digimontimestranger.com/discussions/categories/${category.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>

        {/* Discussions */}
        <div className="card p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Discussions
          </h2>
          <GiscusComments
            category={category.name}
            categoryId={category.categoryId}
            mapping="pathname"
            reactionsEnabled={true}
            inputPosition="top"
          />
        </div>
      </div>
    </div>
  );
}
