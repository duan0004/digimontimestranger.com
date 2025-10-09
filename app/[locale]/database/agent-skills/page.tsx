import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ArrowLeft, Users, TrendingUp, Shield, Zap, Brain } from 'lucide-react';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'database.agentSkills' });

  return generateSEO({
    title: t('title'),
    description: t('description'),
    url: '/database/agent-skills',
  });
}

const bondCategories = [
  {
    id: 'loyalty',
    name: 'Bonds of Loyalty',
    icon: Shield,
    color: 'blue',
    description: 'Focus on defensive and protective abilities',
    skills: [
      {
        name: 'Body Boost: HP',
        effect: 'Increases max HP by 5% per rank',
        requirement: 'Loyalty Bond Rank 1+',
      },
      {
        name: 'Body Boost: DEF',
        effect: 'Increases DEF by 5% per rank',
        requirement: 'Loyalty Bond Rank 2+',
      },
      {
        name: 'Steadfast Guard',
        effect: 'Reduces damage taken when defending by 10%',
        requirement: 'Loyalty Bond Rank 3+',
      },
      {
        name: 'Loyal Perfection',
        effect: 'Significantly boosts HP and DEF for Loyal personality Digimon',
        requirement: 'Loyalty Bond Rank 5',
      },
    ],
  },
  {
    id: 'valor',
    name: 'Bonds of Valor',
    icon: Zap,
    color: 'red',
    description: 'Enhances offensive and aggressive capabilities',
    skills: [
      {
        name: 'Body Boost: ATK',
        effect: 'Increases ATK by 5% per rank',
        requirement: 'Valor Bond Rank 1+',
      },
      {
        name: 'Body Boost: SPD',
        effect: 'Increases SPD by 5% per rank',
        requirement: 'Valor Bond Rank 2+',
      },
      {
        name: 'Extra Strike Mastery',
        effect: 'Increases Extra Strike damage by 20%',
        requirement: 'Valor Bond Rank 3+',
      },
      {
        name: 'Brave Perfection',
        effect: 'Significantly boosts ATK and SPD for Brave personality Digimon',
        requirement: 'Valor Bond Rank 5',
      },
    ],
  },
  {
    id: 'philanthropy',
    name: 'Bonds of Philanthropy',
    icon: Users,
    color: 'green',
    description: 'Supports healing and recovery abilities',
    skills: [
      {
        name: 'Body Boost: SPI',
        effect: 'Increases SPI by 5% per rank',
        requirement: 'Philanthropy Bond Rank 1+',
      },
      {
        name: 'Healing Boost',
        effect: 'Increases healing skill effectiveness by 15%',
        requirement: 'Philanthropy Bond Rank 2+',
      },
      {
        name: 'Passive Recovery',
        effect: 'Restores 3% HP at the start of each turn',
        requirement: 'Philanthropy Bond Rank 3+',
      },
      {
        name: 'Devoted Perfection',
        effect: 'Significantly boosts SPI and INT for Devoted personality Digimon',
        requirement: 'Philanthropy Bond Rank 5',
      },
    ],
  },
  {
    id: 'amicability',
    name: 'Bonds of Amicability',
    icon: TrendingUp,
    color: 'purple',
    description: 'Improves growth and training efficiency',
    skills: [
      {
        name: 'Study Boost',
        effect: 'Increases EXP gained in battle by 10%',
        requirement: 'Amicability Bond Rank 1+',
      },
      {
        name: 'Training Efficiency',
        effect: 'Reduces training time by 15%',
        requirement: 'Amicability Bond Rank 2+',
      },
      {
        name: 'Personality Development',
        effect: 'Increases chance of rare Personality Skills by 20%',
        requirement: 'Amicability Bond Rank 3+',
      },
      {
        name: 'Friendly Perfection',
        effect: 'Significantly boosts DEF and ATK for Friendly personality Digimon',
        requirement: 'Amicability Bond Rank 5',
      },
    ],
  },
  {
    id: 'wisdom',
    name: 'Bonds of Wisdom',
    icon: Brain,
    color: 'yellow',
    description: 'Enhances magical and special abilities',
    skills: [
      {
        name: 'Body Boost: INT',
        effect: 'Increases INT by 5% per rank',
        requirement: 'Wisdom Bond Rank 1+',
      },
      {
        name: 'SP Conservation',
        effect: 'Reduces SP cost of skills by 10%',
        requirement: 'Wisdom Bond Rank 2+',
      },
      {
        name: 'Digivolution Mastery',
        effect: 'Reduces stat requirements for Digivolution by 15%',
        requirement: 'Wisdom Bond Rank 3+',
      },
      {
        name: 'Astute Perfection',
        effect: 'Significantly boosts INT and SPD for Astute personality Digimon',
        requirement: 'Wisdom Bond Rank 5',
      },
    ],
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    text: 'text-blue-900 dark:text-blue-100',
    border: 'border-blue-200 dark:border-blue-800',
    icon: 'text-blue-600 dark:text-blue-400',
  },
  red: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    text: 'text-red-900 dark:text-red-100',
    border: 'border-red-200 dark:border-red-800',
    icon: 'text-red-600 dark:text-red-400',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    text: 'text-green-900 dark:text-green-100',
    border: 'border-green-200 dark:border-green-800',
    icon: 'text-green-600 dark:text-green-400',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    text: 'text-purple-900 dark:text-purple-100',
    border: 'border-purple-200 dark:border-purple-800',
    icon: 'text-purple-600 dark:text-purple-400',
  },
  yellow: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    text: 'text-yellow-900 dark:text-yellow-100',
    border: 'border-yellow-200 dark:border-yellow-800',
    icon: 'text-yellow-600 dark:text-yellow-400',
  },
};

export default async function AgentSkillsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'database.agentSkills' });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/database`}
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Database
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-12 h-12" />
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
        {/* Introduction */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About Agent Skills
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Agent Skills are special abilities that you unlock by building bonds with your Digimon.
            There are five main bond categories, each focusing on different aspects of Digimon development
            and combat strategy.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            As you increase your bond rank in each category, you&apos;ll unlock more powerful skills
            that can provide significant advantages in battle and training.
          </p>
        </div>

        {/* Bond Categories */}
        <div className="space-y-8">
          {bondCategories.map((category) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color];

            return (
              <div
                key={category.id}
                className={`card p-6 border-2 ${colors.border} ${colors.bg}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${colors.icon}`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${colors.text}`}>
                      {category.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="grid gap-4 md:grid-cols-2">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        {skill.effect}
                      </p>
                      <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded inline-block">
                        {skill.requirement}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tips Section */}
        <div className="card p-6 mt-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            💡 Tips for Building Bonds
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Focus on Synergy:</strong> Match bond types with your Digimon&apos;s personalities for maximum effectiveness</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Rank Up Strategically:</strong> Prioritize bonds that complement your team&apos;s playstyle</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Perfection Skills:</strong> Rank 5 perfection skills provide huge bonuses but require specific personalities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Balanced Approach:</strong> Don&apos;t neglect any bond category - each provides unique advantages</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
