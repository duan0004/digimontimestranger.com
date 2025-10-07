import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Link from 'next/link';
import { Users, ArrowLeft, Sword, Shield, Heart, Sparkles, Zap, Target } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Team Building Guide - Build the Ultimate Team',
  description:
    'Master team composition in Digimon Story: Time Stranger. Learn role balance, synergy strategies, and how to build competitive teams.',
  keywords: [
    'team building',
    'team composition',
    'party setup',
    'synergy',
    'roles',
    'strategy',
  ],
  url: '/guides/team-building',
});

const teamRoles = [
  {
    role: 'Physical Attacker',
    icon: Sword,
    color: 'red',
    description: 'High ATK stat, deals heavy physical damage',
    keyStats: ['ATK', 'SPD', 'HP'],
    personalities: ['Brave', 'Zealous', 'Daring'],
    examples: ['Greymon', 'GeoGreymon', 'Tyrannomon'],
    tips: [
      'Focus on ATK-boosting personalities',
      'Equip physical damage accessories',
      'Prioritize SPD for first strikes',
    ],
  },
  {
    role: 'Magic Attacker',
    icon: Sparkles,
    color: 'purple',
    description: 'High INT stat, specializes in magical damage',
    keyStats: ['INT', 'SP', 'SPD'],
    personalities: ['Astute', 'Strategic', 'Enlightened'],
    examples: ['Wizardmon', 'MagnaAngemon', 'Lucemon'],
    tips: [
      'Build INT through Wisdom personalities',
      'Manage SP consumption carefully',
      'Exploit elemental weaknesses',
    ],
  },
  {
    role: 'Tank/Defender',
    icon: Shield,
    color: 'blue',
    description: 'High DEF/HP, absorbs damage for the team',
    keyStats: ['DEF', 'HP', 'SPI'],
    personalities: ['Compassionate', 'Sociable', 'Friendly'],
    examples: ['Guardromon', 'Tankmon', 'MetalMamemon'],
    tips: [
      'Max out DEF and HP stats',
      'Use defensive skills and buffs',
      'Position to protect weaker allies',
    ],
  },
  {
    role: 'Support/Healer',
    icon: Heart,
    color: 'pink',
    description: 'High SPI stat, heals and buffs allies',
    keyStats: ['SPI', 'INT', 'SP'],
    personalities: ['Devoted', 'Adoring', 'Tolerant'],
    examples: ['Angemon', 'Angewomon', 'Seraphimon'],
    tips: [
      'Prioritize SPI for better healing',
      'Learn both healing and buff skills',
      'Keep SP reserves for emergencies',
    ],
  },
  {
    role: 'Speed/Debuffer',
    icon: Zap,
    color: 'yellow',
    description: 'High SPD stat, controls battle flow with debuffs',
    keyStats: ['SPD', 'INT', 'ATK'],
    personalities: ['Zealous', 'Astute', 'Sly'],
    examples: ['Devimon', 'LadyDevimon', 'Beelzemon'],
    tips: [
      'Max SPD to act first every turn',
      'Apply debuffs before allies attack',
      'Interrupt enemy strategies',
    ],
  },
];

const teamCompositions = [
  {
    name: 'Balanced Team (Recommended)',
    composition: '2 Attackers + 1 Tank + 1 Support',
    strengths: ['Versatile', 'Handles most situations', 'Good for beginners'],
    weaknesses: ['Jack of all trades', 'May lack specialized power'],
    bestFor: 'Story mode, general exploration',
  },
  {
    name: 'Hyper Offense',
    composition: '3 Attackers + 1 Speed/Debuffer',
    strengths: ['Maximum damage output', 'Fast battles', 'Glass cannon power'],
    weaknesses: ['Low survivability', 'Risky against bosses'],
    bestFor: 'Grinding, quick farming, experienced players',
  },
  {
    name: 'Tank and Spank',
    composition: '2 Tanks + 1 Attacker + 1 Healer',
    strengths: ['Extremely durable', 'Safe strategy', 'Boss killer'],
    weaknesses: ['Slow battles', 'Lower damage output'],
    bestFor: 'Difficult bosses, defensive play',
  },
  {
    name: 'Magic Focus',
    composition: '2 Magic Attackers + 1 Support + 1 Tank',
    strengths: ['Exploits elemental weaknesses', 'High burst damage', 'Versatile elements'],
    weaknesses: ['SP management required', 'Weak to INT resisters'],
    bestFor: 'Elemental strategies, mixed content',
  },
];

const synergyTips = [
  {
    title: 'Elemental Coverage',
    description: 'Include Digimon with different elemental attacks',
    examples: [
      'Fire attacker (Greymon)',
      'Water attacker (Seadramon)',
      'Neutral option (Leomon)',
    ],
  },
  {
    title: 'Personality Synergy',
    description: 'Match personalities to maximize agent skill bonuses',
    examples: [
      'Full Valor team for +ATK bonuses',
      'Mixed Wisdom/Philanthropy for balanced support',
      'Amicability focus for defensive power',
    ],
  },
  {
    title: 'Evolution Stage Balance',
    description: 'Balance memory cost with team size',
    examples: [
      '2 Mega + 2 Ultimate (high power, 4 slots)',
      '1 Mega + 4 Champion (more versatility)',
      '6 Rookie (beginner strategy, more numbers)',
    ],
  },
  {
    title: 'Skill Diversity',
    description: 'Ensure team covers all necessary skill types',
    examples: [
      'At least 1 healing skill',
      'Mix of physical and magical damage',
      'Status effect coverage (buff/debuff)',
    ],
  },
];

export default function TeamBuildingGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Team Building Guide
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            Master team composition and synergy to dominate every battle
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Building Your Dream Team
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Team composition is one of the most important aspects of success in Digimon Story: Time Stranger.
            A well-balanced team with good synergy can overcome challenges that raw power alone cannot solve.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            This guide covers essential roles, team archetypes, synergy strategies, and practical tips
            for building teams that excel in any situation.
          </p>
        </div>

        {/* Team Roles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Essential Team Roles
          </h2>
          <div className="grid gap-6">
            {teamRoles.map((role) => {
              const Icon = role.icon;
              const colorClasses = {
                red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
                purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
                blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                pink: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800',
                yellow: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
              };

              return (
                <div
                  key={role.role}
                  className={`card p-6 border-2 ${colorClasses[role.color as keyof typeof colorClasses]}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-${role.color}-100 dark:bg-${role.color}-900`}>
                      <Icon className={`w-6 h-6 text-${role.color}-600 dark:text-${role.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {role.role}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {role.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        Key Stats:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {role.keyStats.map((stat) => (
                          <span
                            key={stat}
                            className="px-2 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        Best Personalities:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {role.personalities.map((personality) => (
                          <span
                            key={personality}
                            className="px-2 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded"
                          >
                            {personality}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                      Example Digimon:
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {role.examples.join(', ')}
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                      Tips:
                    </h4>
                    <ul className="space-y-1">
                      {role.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Compositions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Team Composition Archetypes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {teamCompositions.map((comp) => (
              <div
                key={comp.name}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {comp.name}
                </h3>
                <div className="mb-4 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <p className="font-semibold text-primary-900 dark:text-primary-100 text-sm">
                    {comp.composition}
                  </p>
                </div>

                <div className="mb-3">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2 text-sm">
                    ✓ Strengths:
                  </h4>
                  <ul className="space-y-1">
                    {comp.strengths.map((strength, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                        • {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-2 text-sm">
                    ✗ Weaknesses:
                  </h4>
                  <ul className="space-y-1">
                    {comp.weaknesses.map((weakness, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                        • {weakness}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Best For:</strong> {comp.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Synergy Strategies */}
        <div className="card p-6 mb-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Building Team Synergy
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {synergyTips.map((tip) => (
              <div key={tip.title}>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {tip.description}
                </p>
                <ul className="space-y-1">
                  {tip.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">→</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Tips */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🎯 Advanced Team Building Tips
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                1. Memory Management
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Your team memory limit determines party size. Higher evolution stages cost more memory.
              </p>
              <ul className="space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
                <li>• Early game: 4-6 Digimon (Rookie/Champion)</li>
                <li>• Mid game: 3-4 Digimon (Champion/Ultimate)</li>
                <li>• Late game: 2-3 Digimon (Ultimate/Mega)</li>
                <li>• Balance power vs. flexibility based on content</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                2. Agent Skills Optimization
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Build teams around matching personality types for maximum agent skill bonuses.
              </p>
              <ul className="space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
                <li>• Full Valor team: +ATK and +SPD bonuses</li>
                <li>• Full Amicability: +DEF and tankiness</li>
                <li>• Mixed teams sacrifice bonuses for flexibility</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                3. Situational Adjustments
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Adapt your team based on the challenge ahead.
              </p>
              <ul className="space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
                <li>• Boss battles: Add extra healer/tank</li>
                <li>• Grinding: Maximum damage, skip defense</li>
                <li>• Exploration: Balanced for unknown encounters</li>
                <li>• Elemental dungeons: Focus on super-effective types</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                4. Equipment and Skills
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Don't just rely on stats - skills and equipment matter.
              </p>
              <ul className="space-y-1 ml-4 text-sm text-gray-600 dark:text-gray-400">
                <li>• Ensure healers have healing skills equipped</li>
                <li>• Attackers need damage skills, not support</li>
                <li>• Use accessories to cover stat weaknesses</li>
                <li>• Swap skills based on upcoming content</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Example Teams */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            📝 Sample Team Builds
          </h2>

          <div className="space-y-6">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-200 dark:border-green-800">
              <h3 className="font-bold text-green-900 dark:text-green-100 mb-2">
                Beginner Balanced Team
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Composition:</strong> Greymon (ATK) + Garurumon (ATK) + Guardromon (Tank) + Angemon (Support)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Versatile team with physical damage, defense, and healing. Great for story progression and learning mechanics.
              </p>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-200 dark:border-red-800">
              <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">
                Late Game Powerhouse
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Composition:</strong> WarGreymon (Phys) + MagnaAngemon (Magic) + Seraphimon (Support/Magic)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                High-power Mega team with mixed damage types and emergency healing. Memory-efficient for late game.
              </p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                Boss Killer Team
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Composition:</strong> MetalGreymon (DPS) + Angewomon (Healer) + Mamemon (Tank) + LadyDevimon (Debuffer)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Durable team focused on surviving long boss battles. Debuffs and healing ensure consistency.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              💡 <strong>Tip:</strong> Use the <Link href="/tools/team-builder" className="text-primary-600 dark:text-primary-400 hover:underline">Team Builder Tool</Link> to
              plan and optimize your team composition before committing resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
