import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ArrowLeft, Activity, Shield, Zap, Brain, Heart, TrendingUp, Timer } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Stats Guide - Digimon Time Stranger',
  description:
    'Complete guide to Digimon stats in Time Stranger. Learn what each stat does, damage calculations, and how to build optimal teams.',
  keywords: [
    'stats',
    'HP',
    'ATK',
    'DEF',
    'INT',
    'SPI',
    'SPD',
    'damage calculation',
    'stat guide',
  ],
  url: '/database/stats',
});

const stats = [
  {
    name: 'HP',
    fullName: 'Health Points',
    icon: Heart,
    color: 'red',
    description: 'Determines how much damage a Digimon can take before fainting',
    mechanics: [
      'HP is depleted when taking damage from enemy attacks',
      'When HP reaches 0, the Digimon faints and cannot act',
      'Can be restored using healing items or recovery skills',
      'Max HP increases with level and personality bonuses',
    ],
    formula: 'Max HP = Base HP + (Level × Growth Rate) + Personality Bonus',
  },
  {
    name: 'SP',
    fullName: 'Skill Points',
    icon: Zap,
    color: 'blue',
    description: 'Required to use skills and special abilities',
    mechanics: [
      'Each skill consumes a specific amount of SP',
      'SP regenerates slowly during battle',
      'Can be restored using items or recovery skills',
      'Higher SP allows for more frequent skill usage',
    ],
    formula: 'Max SP = Base SP + (Level × Growth Rate) + Personality Bonus',
  },
  {
    name: 'ATK',
    fullName: 'Physical Attack',
    icon: Activity,
    color: 'orange',
    description: 'Affects how much physical damage is dealt to enemies',
    mechanics: [
      'Directly influences physical skill damage',
      'Higher ATK means more damage against enemies',
      'Can be boosted with buff skills and equipment',
      'Essential stat for physical attackers',
    ],
    formula: 'Physical Damage = (ATK × Skill Power) - Enemy DEF',
  },
  {
    name: 'DEF',
    fullName: 'Physical Defense',
    icon: Shield,
    color: 'green',
    description: 'Affects how much damage from enemy physical attacks is reduced',
    mechanics: [
      'Reduces incoming physical damage',
      'Higher DEF means better survivability against physical attacks',
      'Can be increased with defensive equipment and buffs',
      'Critical for tank and defensive roles',
    ],
    formula: 'Damage Taken = Max(Enemy Physical Damage - DEF, 1)',
  },
  {
    name: 'INT',
    fullName: 'Intelligence',
    icon: Brain,
    color: 'purple',
    description: 'Affects how much magic damage is dealt to enemies',
    mechanics: [
      'Determines magical and special skill damage',
      'Higher INT means stronger magical attacks',
      'Important for mage-type Digimon',
      'Can be enhanced with intelligence-boosting equipment',
    ],
    formula: 'Magic Damage = (INT × Skill Power) - Enemy SPI',
  },
  {
    name: 'SPI',
    fullName: 'Spirit',
    icon: TrendingUp,
    color: 'cyan',
    description: 'Affects how much damage from enemy magic attacks is reduced and how much HP recovery skills heal',
    mechanics: [
      'Reduces incoming magical damage',
      'Increases healing effectiveness',
      'Essential for support and healer roles',
      'Dual purpose makes it valuable for various builds',
    ],
    formula: 'Healing Amount = Base Heal × (1 + SPI/100)',
  },
  {
    name: 'SPD',
    fullName: 'Speed',
    icon: Timer,
    color: 'yellow',
    description: 'Affects turn order in battle',
    mechanics: [
      'Determines who acts first in combat',
      'Higher SPD means acting before enemies',
      'Can be the difference between victory and defeat',
      'Important for all team compositions',
    ],
    formula: 'Turn Order = SPD + Random Factor (±5%)',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  red: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    text: 'text-red-900 dark:text-red-100',
    border: 'border-red-200 dark:border-red-800',
    icon: 'text-red-600 dark:text-red-400',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    text: 'text-blue-900 dark:text-blue-100',
    border: 'border-blue-200 dark:border-blue-800',
    icon: 'text-blue-600 dark:text-blue-400',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    text: 'text-orange-900 dark:text-orange-100',
    border: 'border-orange-200 dark:border-orange-800',
    icon: 'text-orange-600 dark:text-orange-400',
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
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    text: 'text-cyan-900 dark:text-cyan-100',
    border: 'border-cyan-200 dark:border-cyan-800',
    icon: 'text-cyan-600 dark:text-cyan-400',
  },
  yellow: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    text: 'text-yellow-900 dark:text-yellow-100',
    border: 'border-yellow-200 dark:border-yellow-800',
    icon: 'text-yellow-600 dark:text-yellow-400',
  },
};

export default function StatsPage() {
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
            <Activity className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Stats Guide
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            Master the 7 core stats to build the ultimate team
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Understanding Stats
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Every Digimon has seven core stats that determine their effectiveness in battle. Understanding
            how each stat works is crucial for building a balanced and powerful team.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Stats are influenced by base values, level, personality, equipment, and various buffs and debuffs
            during combat.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const colors = colorClasses[stat.color];

            return (
              <div
                key={stat.name}
                className={`card p-6 border-2 ${colors.border} ${colors.bg}`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${colors.icon}`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${colors.text}`}>
                      {stat.name}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.fullName}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {stat.description}
                </p>

                {/* Mechanics */}
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Mechanics:
                  </h3>
                  <ul className="space-y-1">
                    {stat.mechanics.map((mechanic, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                        <span>{mechanic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formula */}
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    Formula:
                  </h3>
                  <code className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                    {stat.formula}
                  </code>
                </div>
              </div>
            );
          })}
        </div>

        {/* Damage Calculation Guide */}
        <div className="card p-6 mt-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ⚔️ Damage Calculation
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-semibold mb-2">Physical Damage:</h3>
              <code className="block bg-white dark:bg-gray-800 p-3 rounded text-sm">
                Damage = (ATK × Skill Multiplier × Element Bonus) - Enemy DEF
              </code>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Magic Damage:</h3>
              <code className="block bg-white dark:bg-gray-800 p-3 rounded text-sm">
                Damage = (INT × Skill Multiplier × Element Bonus) - Enemy SPI
              </code>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Critical Hit:</h3>
              <code className="block bg-white dark:bg-gray-800 p-3 rounded text-sm">
                Critical Damage = Normal Damage × 1.5
              </code>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Elemental Bonus:</h3>
              <ul className="text-sm space-y-1 mt-2">
                <li>• <strong>Super Effective:</strong> 150% damage</li>
                <li>• <strong>Neutral:</strong> 100% damage</li>
                <li>• <strong>Not Very Effective:</strong> 75% damage</li>
                <li>• <strong>No Effect:</strong> 50% damage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Building Tips */}
        <div className="card p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            💡 Team Building Tips
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Balanced Teams:</strong> Include a mix of physical attackers (ATK), magic users (INT), tanks (DEF/HP), and support (SPI)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Speed Matters:</strong> High SPD Digimon can disrupt enemies before they act</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Don&apos;t Neglect HP:</strong> Even high-damage Digimon need survivability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Personality Synergy:</strong> Match personalities to desired stat focus</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Equipment Boosts:</strong> Use attachments and items to cover stat weaknesses</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
