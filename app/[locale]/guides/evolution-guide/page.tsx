import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { TrendingUp, ArrowLeft, AlertCircle, CheckCircle, Star, Zap, Shield, Brain } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'guides.evolutionGuide' });

  return generateSEOMetadata({
    title: t('seoTitle'),
    description: t('seoDescription'),
    keywords: [
      'evolution guide',
      'digivolution',
      'evolution requirements',
      'evolution mechanics',
      'digimon evolution',
    ],
    url: `/${locale}/guides/evolution-guide`,
  });
}

const evolutionStages = [
  {
    stage: 'Fresh',
    description: 'The earliest stage. Cannot participate in battles.',
    icon: '🥚',
    example: 'Botamon, Punimon',
  },
  {
    stage: 'In-Training',
    description: 'First playable stage. Limited combat abilities.',
    icon: '🐣',
    example: 'Koromon, Tsunomon',
  },
  {
    stage: 'Rookie',
    description: 'First true combat stage. Foundation of your team.',
    icon: '⭐',
    example: 'Agumon, Gabumon',
  },
  {
    stage: 'Champion',
    description: 'Mid-tier evolution. Significant power increase.',
    icon: '💪',
    example: 'Greymon, Garurumon',
  },
  {
    stage: 'Ultimate',
    description: 'High-tier evolution. Elite combat potential.',
    icon: '🔥',
    example: 'MetalGreymon, WereGarurumon',
  },
  {
    stage: 'Mega',
    description: 'Final evolution stage. Maximum power.',
    icon: '👑',
    example: 'WarGreymon, MetalGarurumon',
  },
];

const requirementTypes = [
  {
    name: 'Level',
    icon: TrendingUp,
    description: 'Minimum level required for evolution',
    tips: [
      'Most evolutions require level 6-15',
      'Higher stages need higher levels',
      'Level up through battles and training',
    ],
  },
  {
    name: 'Stats',
    icon: Star,
    description: 'Specific stat thresholds needed',
    tips: [
      'ATK, DEF, INT, SPI requirements vary',
      'Use personality bonuses to boost stats',
      'Equipment can help reach thresholds',
    ],
  },
  {
    name: 'Bond',
    icon: CheckCircle,
    description: 'Agent bond level with specific personalities',
    tips: [
      'Build bonds through battles and interactions',
      'Match personality types for faster progress',
      'Bond requirements range from 1-5',
    ],
  },
  {
    name: 'Items',
    icon: Zap,
    description: 'Special items may be required',
    tips: [
      'Some rare evolutions need specific items',
      'Items are usually found in dungeons',
      'Check the Digidex for item requirements',
    ],
  },
];

export default async function EvolutionGuidePage({ params }: PageProps) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'guides.evolutionGuide' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/guides`}
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {tNav('guides')}
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <TrendingUp className="w-12 h-12" />
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
            Understanding Evolution
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Evolution (Digivolution) is the core progression system in Digimon Story: Time Stranger.
            By meeting specific requirements, your Digimon can transform into more powerful forms,
            gaining increased stats, new skills, and enhanced abilities.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Unlike traditional level-based evolution, Time Stranger uses a flexible system where
            multiple factors determine evolution eligibility. Understanding these mechanics is crucial
            for building the strongest team.
          </p>
        </div>

        {/* Evolution Stages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Evolution Stages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evolutionStages.map((stage) => (
              <div
                key={stage.stage}
                className="card p-6 border-2 border-primary-200 dark:border-primary-800"
              >
                <div className="text-5xl mb-4">{stage.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {stage.stage}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {stage.description}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Examples:</strong> {stage.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Evolution Requirements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Evolution Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {requirementTypes.map((req) => {
              const Icon = req.icon;
              return (
                <div
                  key={req.name}
                  className="card p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {req.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {req.description}
                  </p>
                  <ul className="space-y-2">
                    {req.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Evolution Strategies */}
        <div className="card p-6 mb-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            💡 Evolution Strategies
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                1. Plan Your Evolution Path
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Use the <Link href={`/${locale}/evolution`} className="text-primary-600 dark:text-primary-400 hover:underline">Evolution Tree</Link> to
                visualize complete evolution paths before committing.
              </p>
              <ul className="space-y-1 ml-4">
                <li className="text-sm text-gray-600 dark:text-gray-400">• Some paths lead to stronger final forms</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">• Consider stat growth rates at each stage</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">• Plan around your team composition needs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                2. Optimize Evolution Timing
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Evolving at the right time maximizes stat gains and efficiency.
              </p>
              <ul className="space-y-1 ml-4">
                <li className="text-sm text-gray-600 dark:text-gray-400">• <strong>Early evolution:</strong> Faster power spike but lower max stats</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">• <strong>Delayed evolution:</strong> Higher max stats but slower progression</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">• <strong>Optimal:</strong> Evolve 2-3 levels after meeting requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                3. Use Personality Synergy
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Match personalities to desired evolution paths for faster progression.
              </p>
              <ul className="space-y-1 ml-4">
                <li className="text-sm text-gray-600 dark:text-gray-400">• Physical attackers: Brave, Zealous (Valor)</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">• Tanks: Compassionate, Sociable (Amicability)</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">• Mages: Astute, Strategic (Wisdom)</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">• Support: Devoted, Adoring (Philanthropy)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                4. Manage Memory Efficiently
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Higher evolution stages require more memory. Balance power with party size.
              </p>
              <ul className="space-y-1 ml-4">
                <li className="text-sm text-gray-600 dark:text-gray-400">• Rookie: 4-6 memory</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">• Champion: 8-12 memory</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">• Ultimate: 14-18 memory</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">• Mega: 20+ memory</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="card p-6 mb-8 border-2 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Common Mistakes to Avoid
            </h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 dark:text-orange-400 mt-1">⚠️</span>
              <div>
                <strong className="text-gray-900 dark:text-white">Evolving Too Early:</strong>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  While tempting, evolving immediately upon meeting requirements results in lower stat totals.
                  Wait 2-3 extra levels for better growth.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 dark:text-orange-400 mt-1">⚠️</span>
              <div>
                <strong className="text-gray-900 dark:text-white">Ignoring Bond Requirements:</strong>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Many powerful evolutions require specific bond levels. Build bonds consistently
                  rather than grinding them last minute.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 dark:text-orange-400 mt-1">⚠️</span>
              <div>
                <strong className="text-gray-900 dark:text-white">Not Planning Ahead:</strong>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Evolution paths can lock you out of certain forms. Use the Evolution Tree
                  to plan your entire path before committing.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 dark:text-orange-400 mt-1">⚠️</span>
              <div>
                <strong className="text-gray-900 dark:text-white">Neglecting Personality:</strong>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Personality affects stat growth significantly. Choose personalities that
                  complement your desired evolution path and role.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Quick Reference */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            📋 Quick Reference Guide
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">For Beginners</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>✓ Follow natural evolution paths first</li>
                <li>✓ Evolve 2-3 levels after meeting requirements</li>
                <li>✓ Focus on one evolution line per Digimon</li>
                <li>✓ Build bonds through story battles</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">For Advanced Players</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>✓ Min-max stat growth with delayed evolution</li>
                <li>✓ Use de-digivolution for stat bonuses</li>
                <li>✓ Plan multi-path evolutions</li>
                <li>✓ Optimize personality-evolution synergy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Essential Tools</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href={`/${locale}/digidex`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    → Digidex (Requirements)
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/evolution`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    → Evolution Tree
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/database/personalities`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    → Personalities Guide
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/database/stats`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    → Stats Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
