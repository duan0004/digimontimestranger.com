import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ArrowLeft, Heart, Sword, Shield, Brain, TrendingUp, Award } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Personalities Database - Digimon Time Stranger',
  description:
    'Complete guide to Digimon personalities in Time Stranger. Learn which personality boosts which stats and how to optimize your team.',
  keywords: [
    'personalities',
    'personality types',
    'stat bonuses',
    'brave',
    'devoted',
    'compassionate',
    'astute',
  ],
  url: '/database/personalities',
});

const personalityCategories = [
  {
    category: 'Valor',
    icon: Sword,
    color: 'red',
    description: 'Attack-focused personalities',
    personalities: [
      { name: 'Brave', primary: 'ATK', secondary: 'SP', description: 'Focuses on physical attack and skill points' },
      { name: 'Zealous', primary: 'ATK', secondary: 'SPD', description: 'Balances attack power with speed' },
      { name: 'Daring', primary: 'ATK', secondary: 'DEF', description: 'Combines offense with defense' },
      { name: 'Reckless', primary: 'ATK', secondary: 'HP', description: 'Maximizes attack and survivability' },
    ],
  },
  {
    category: 'Philanthropy',
    icon: Heart,
    color: 'pink',
    description: 'Support-focused personalities',
    personalities: [
      { name: 'Adoring', primary: 'SPI', secondary: 'DEF', description: 'Enhances healing and defense' },
      { name: 'Devoted', primary: 'SPI', secondary: 'INT', description: 'Boosts magical and healing abilities' },
      { name: 'Tolerant', primary: 'SPI', secondary: 'SP', description: 'Increases support skill effectiveness' },
      { name: 'Overprotective', primary: 'SPI', secondary: 'HP', description: 'Prioritizes healing and health' },
    ],
  },
  {
    category: 'Amicability',
    icon: Shield,
    color: 'blue',
    description: 'Defense-focused personalities',
    personalities: [
      { name: 'Compassionate', primary: 'DEF', secondary: 'HP', description: 'Tank-oriented with high durability' },
      { name: 'Sociable', primary: 'DEF', secondary: 'SP', description: 'Defensive with skill versatility' },
      { name: 'Friendly', primary: 'DEF', secondary: 'ATK', description: 'Balanced defense and offense' },
      { name: 'Opportunistic', primary: 'DEF', secondary: 'SPI', description: 'Defensive with support capabilities' },
    ],
  },
  {
    category: 'Wisdom',
    icon: Brain,
    color: 'purple',
    description: 'Intelligence-focused personalities',
    personalities: [
      { name: 'Astute', primary: 'INT', secondary: 'SPD', description: 'Fast magical attacker' },
      { name: 'Strategic', primary: 'INT', secondary: 'SPI', description: 'Magical damage with support' },
      { name: 'Enlightened', primary: 'INT', secondary: 'SP', description: 'High magical output' },
      { name: 'Sly', primary: 'INT', secondary: 'HP', description: 'Durable magic user' },
    ],
  },
];

const statIcons: Record<string, string> = {
  'ATK': '⚔️',
  'DEF': '🛡️',
  'INT': '🔮',
  'SPI': '✨',
  'HP': '❤️',
  'SP': '💙',
  'SPD': '⚡',
};

const colorClasses: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  red: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    text: 'text-red-900 dark:text-red-100',
    border: 'border-red-200 dark:border-red-800',
    icon: 'text-red-600 dark:text-red-400',
  },
  pink: {
    bg: 'bg-pink-50 dark:bg-pink-900/20',
    text: 'text-pink-900 dark:text-pink-100',
    border: 'border-pink-200 dark:border-pink-800',
    icon: 'text-pink-600 dark:text-pink-400',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    text: 'text-blue-900 dark:text-blue-100',
    border: 'border-blue-200 dark:border-blue-800',
    icon: 'text-blue-600 dark:text-blue-400',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    text: 'text-purple-900 dark:text-purple-100',
    border: 'border-purple-200 dark:border-purple-800',
    icon: 'text-purple-600 dark:text-purple-400',
  },
};

export default function PersonalitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/database"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Database
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Personalities Database
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            Each personality provides unique stat growth bonuses
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Understanding Personalities
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Each Digimon has a personality that influences their stat growth. Personalities are divided
            into four main categories: Valor, Philanthropy, Amicability, and Wisdom. Each personality
            provides bonuses to two different stats.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            The <strong>primary stat</strong> receives a larger growth bonus, while the <strong>secondary stat</strong> gets
            a smaller bonus. Choosing the right personality for each Digimon is crucial for building
            an optimized team.
          </p>
        </div>

        {/* Personality Categories */}
        <div className="space-y-8">
          {personalityCategories.map((cat) => {
            const Icon = cat.icon;
            const colors = colorClasses[cat.color];

            return (
              <div
                key={cat.category}
                className={`card p-6 border-2 ${colors.border} ${colors.bg}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${colors.icon}`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${colors.text}`}>
                      {cat.category}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Personalities Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {cat.personalities.map((personality) => (
                    <div
                      key={personality.name}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                        {personality.name}
                      </h3>

                      {/* Stat Bonuses */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{statIcons[personality.primary]}</span>
                          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                            {personality.primary}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">(Primary)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{statIcons[personality.secondary]}</span>
                          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                            {personality.secondary}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">(Secondary)</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {personality.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stat Legend */}
        <div className="card p-6 mt-8 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            📊 Stat Legend
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(statIcons).map(([stat, icon]) => (
              <div key={stat} className="flex items-center gap-2">
                <span className="text-2xl">{icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {stat === 'ATK' && 'Attack'}
                  {stat === 'DEF' && 'Defense'}
                  {stat === 'INT' && 'Intelligence'}
                  {stat === 'SPI' && 'Spirit'}
                  {stat === 'HP' && 'Health Points'}
                  {stat === 'SP' && 'Skill Points'}
                  {stat === 'SPD' && 'Speed'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy Tips */}
        <div className="card p-6 mt-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            💡 Personality Strategy Tips
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Physical Attackers:</strong> Choose Valor personalities like Brave or Zealous for maximum damage output</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Healers/Support:</strong> Philanthropy personalities (especially Devoted) excel at recovery and buff skills</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Tanks:</strong> Amicability personalities like Compassionate provide the best defensive capabilities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Mages:</strong> Wisdom personalities (Astute or Enlightened) maximize magical damage potential</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Agent Skills:</strong> Perfection skills provide massive bonuses when personality matches your bond type</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
