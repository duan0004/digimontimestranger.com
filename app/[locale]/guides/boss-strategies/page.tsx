import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  Sword,
  ArrowLeft,
  Shield,
  Flame,
  Zap,
  Skull,
  Target,
  Heart,
  TrendingUp,
  AlertTriangle,
  Brain,
  Users,
  Package
} from 'lucide-react';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'guides.bossStrategies' });

  return generateSEOMetadata({
    title: t('seoTitle'),
    description: t('seoDescription'),
    keywords: [
      'boss strategies',
      'boss battles',
      'tactics',
      'counter strategies',
      'team composition',
      'boss guide',
      'difficult encounters',
    ],
    url: `/${locale}/guides/boss-strategies`,
  });
}

const bossTypes = [
  {
    type: 'Physical Powerhouse',
    icon: Sword,
    color: 'red',
    description: 'High ATK bosses with devastating physical attacks',
    characteristics: ['High ATK stat', 'Physical AoE attacks', 'Low SPD typically'],
    weaknesses: ['Defense buffs', 'Physical resistance', 'Speed debuffs'],
    counterStrategy: [
      'Stack DEF with tanks and defensive buffs',
      'Use DEF-boosting items before battle',
      'Physical damage reduction accessories',
      'Focus on outlasting rather than burst damage',
    ],
    recommendedTeam: '2 Tanks + 1 Healer + 1 Debuffer',
    examples: ['WarGreymon', 'MetalTyrannomon', 'Machinedramon'],
  },
  {
    type: 'Magic Nuker',
    icon: Flame,
    color: 'purple',
    description: 'High INT bosses with powerful magical attacks',
    characteristics: ['High INT stat', 'Elemental magic attacks', 'Medium-high SPD'],
    weaknesses: ['Spirit resistance', 'Elemental resistance', 'INT debuffs'],
    counterStrategy: [
      'Equip element-resistant accessories',
      'Use SPI-boosting strategies',
      'Apply INT debuffs early in battle',
      'Interrupt with fast attackers',
    ],
    recommendedTeam: '1 Tank + 2 Magic Attackers + 1 Support',
    examples: ['Piedmon', 'Myotismon', 'Beelzemon'],
  },
  {
    type: 'Speed Demon',
    icon: Zap,
    color: 'yellow',
    description: 'Extremely fast bosses that act multiple times',
    characteristics: ['Very high SPD', 'Multi-hit attacks', 'Can disrupt strategies'],
    weaknesses: ['SPD debuffs', 'Paralysis/stun', 'Counter-attacks'],
    counterStrategy: [
      'Priority: Apply SPD debuffs immediately',
      'Use paralysis or stun status effects',
      'Focus on survival over damage initially',
      'Counter-attack skills are effective',
    ],
    recommendedTeam: '1 Speed Debuffer + 2 Attackers + 1 Tank',
    examples: ['Rapidmon', 'MetalGarurumon', 'Diaboromon'],
  },
  {
    type: 'Tank Boss',
    icon: Shield,
    color: 'blue',
    description: 'High HP/DEF bosses with extreme durability',
    characteristics: ['Very high HP and DEF', 'Self-healing abilities', 'Long battles'],
    weaknesses: ['DEF-piercing attacks', 'Status effects', 'Sustained DPS'],
    counterStrategy: [
      'Use percentage-based damage skills',
      'Apply poison or burn for DoT damage',
      'DEF-ignoring attacks are crucial',
      'Manage SP carefully for long fights',
    ],
    recommendedTeam: '2 Magic Attackers + 1 Support + 1 Debuffer',
    examples: ['MetalEtemon', 'Puppetmon', 'Ebonwumon'],
  },
  {
    type: 'Status Inflictor',
    icon: Skull,
    color: 'green',
    description: 'Bosses that rely on debuffs and status effects',
    characteristics: ['Status effect spam', 'Debuff abilities', 'Control-focused'],
    weaknesses: ['Status immunity', 'Cleanse abilities', 'Prevention items'],
    counterStrategy: [
      'Equip status-prevention accessories',
      'Bring cleanse/dispel abilities',
      'Keep backup healer with recovery items',
      'Immunity buffs before major attacks',
    ],
    recommendedTeam: '2 Attackers + 1 Healer/Cleanser + 1 Tank',
    examples: ['Devimon', 'LadyDevimon', 'Daemon'],
  },
];

const phaseStrategies = [
  {
    phase: 'Phase 1: Opening (100-75% HP)',
    icon: Target,
    strategies: [
      {
        title: 'Apply Debuffs Early',
        description: 'Get ATK/DEF/SPD debuffs active before boss enters aggressive phases',
      },
      {
        title: 'Buff Your Team',
        description: 'Use buffs that last multiple turns early when damage is manageable',
      },
      {
        title: 'Save Resources',
        description: 'Don\'t burn all SP on big attacks - save for critical moments',
      },
      {
        title: 'Learn Attack Patterns',
        description: 'First phase usually has predictable patterns - memorize them',
      },
    ],
  },
  {
    phase: 'Phase 2: Mid Battle (75-40% HP)',
    icon: AlertTriangle,
    strategies: [
      {
        title: 'Maintain Debuffs',
        description: 'Reapply debuffs as they expire - never let them lapse',
      },
      {
        title: 'Increase Damage Output',
        description: 'Boss is vulnerable but not desperate - this is your DPS window',
      },
      {
        title: 'Heal Proactively',
        description: 'Don\'t let HP drop below 60% - bosses can chain attacks',
      },
      {
        title: 'Watch for Pattern Changes',
        description: 'Many bosses unlock new attacks around 50% HP',
      },
    ],
  },
  {
    phase: 'Phase 3: Desperation (40-0% HP)',
    icon: Flame,
    strategies: [
      {
        title: 'Prepare for Ultimate Attacks',
        description: 'Most bosses have desperation moves - save defensive cooldowns',
      },
      {
        title: 'Full Offense or Full Defense',
        description: 'Either burst them down fast or turtle and outlast',
      },
      {
        title: 'Keep Healers Alive',
        description: 'Protect support units at all costs during this phase',
      },
      {
        title: 'Have Revival Items Ready',
        description: 'Keep emergency revival items in quick slots',
      },
    ],
  },
];

const elementalCounters = [
  {
    element: 'Fire',
    strongAgainst: 'Nature',
    weakAgainst: 'Water',
    counterTip: 'Use Water-type Digimon and water-element attacks. Equip Fire-resistant accessories.',
    bestCounters: ['Seadramon', 'MegaSeadramon', 'MetalSeadramon'],
  },
  {
    element: 'Water',
    strongAgainst: 'Fire',
    weakAgainst: 'Electric',
    counterTip: 'Electric attacks deal massive damage. Bring Electric-type attackers and resistance gear.',
    bestCounters: ['Kabuterimon', 'MegaKabuterimon', 'HerculesKabuterimon'],
  },
  {
    element: 'Electric',
    strongAgainst: 'Water',
    weakAgainst: 'Earth',
    counterTip: 'Earth-type moves are super effective. Use ground-based Digimon and earth attacks.',
    bestCounters: ['Digmon', 'Ankylomon', 'Shakkoumon'],
  },
  {
    element: 'Nature',
    strongAgainst: 'Earth',
    weakAgainst: 'Fire',
    counterTip: 'Fire attacks burn through nature defenses. Bring fire-element Digimon.',
    bestCounters: ['Greymon', 'MetalGreymon', 'WarGreymon'],
  },
  {
    element: 'Light',
    strongAgainst: 'Dark',
    weakAgainst: 'Dark',
    counterTip: 'Light and Dark counter each other. Use high-INT magic attackers of opposite type.',
    bestCounters: ['Angemon', 'MagnaAngemon', 'Seraphimon'],
  },
  {
    element: 'Dark',
    strongAgainst: 'Light',
    weakAgainst: 'Light',
    counterTip: 'Light attacks purify dark bosses. Holy-type Digimon excel here.',
    bestCounters: ['Gatomon', 'Angewomon', 'Ophanimon'],
  },
];

const preparationChecklist = [
  {
    category: 'Team Preparation',
    icon: Users,
    items: [
      'Level your team to recommended level or higher',
      'Ensure evolution stages are appropriate (Ultimate+ for late bosses)',
      'Balance roles: DPS, Tank, Healer, Support',
      'Check elemental advantages - bring super-effective types',
      'Equip proper accessories for boss type',
      'Set optimal skill loadouts for the encounter',
    ],
  },
  {
    category: 'Item Preparation',
    icon: Package,
    items: [
      'Stock 10+ healing items (HP and SP recovery)',
      'Bring revival items (at least 3-5)',
      'Status cure items for specific boss mechanics',
      'Buff items (ATK/DEF/SPD boosters)',
      'Element-specific resistance items',
      'Emergency full-heal items for clutch moments',
    ],
  },
  {
    category: 'Knowledge Preparation',
    icon: Brain,
    items: [
      'Research boss attack patterns online or from first attempt',
      'Identify boss element and weaknesses',
      'Know when boss changes phases',
      'Understand which attacks can be defended/avoided',
      'Learn boss status effect immunities',
      'Check if boss has minions or special mechanics',
    ],
  },
];

const advancedTactics = [
  {
    title: 'Buff Stacking for Maximum Effect',
    description: 'Layer multiple buffs from different sources for multiplicative benefits. Combine agent skills, buff abilities, and items.',
    examples: [
      'Agent Skill ATK buff + Attack buff ability + ATK-boosting item',
      'DEF buff + defensive stance + shield accessory',
      'SPD buff + speed-boosting personality + quick-action item',
    ],
  },
  {
    title: 'Turn Order Manipulation',
    description: 'Control turn order to maximize efficiency and minimize boss actions per round.',
    examples: [
      'Use SPD debuffs to make boss act last',
      'SPD buffs on healers to heal before enemy attacks',
      'Fast debuffers apply debuffs before allies attack',
    ],
  },
  {
    title: 'Resource Management (SP)',
    description: 'SP is finite in boss fights. Plan your skill usage across the entire encounter.',
    examples: [
      'Use basic attacks when safe to conserve SP',
      'Big skills only during damage windows',
      'Keep 30% SP reserved for emergency healing',
      'SP restoration items at 25% SP threshold',
    ],
  },
  {
    title: 'Focus Fire Strategy',
    description: 'When boss has minions, decide between focusing boss or clearing adds first.',
    examples: [
      'Kill healers immediately - they prolong fights',
      'Ignore weak minions, focus boss if adds respawn',
      'AoE damage to clear groups quickly',
      'Single-target burst on priority targets',
    ],
  },
  {
    title: 'Sacrifice and Recovery',
    description: 'Sometimes sacrificing a unit strategically can turn the battle.',
    examples: [
      'Tank absorbs ultimate attack while DPS survives',
      'Let low-HP unit fall to save revival items',
      'Trade units to buy time for critical cooldowns',
      'Bait single-target attacks away from key units',
    ],
  },
  {
    title: 'Elemental Chain Attacks',
    description: 'Some bosses are weak to elemental combos. Coordinate element-based attacks.',
    examples: [
      'Apply water DoT, then use electric attack for bonus damage',
      'Fire attack to reduce DEF, then physical burst',
      'Status effect + exploiting weakened state',
    ],
  },
];

const bossSpecificTips = [
  {
    bossCategory: 'Story Bosses',
    tips: [
      'Designed for current progression level - don\'t over-prepare',
      'Usually have obvious elemental weaknesses',
      'Forgiving HP thresholds and attack patterns',
      'Good for learning boss mechanics',
    ],
  },
  {
    bossCategory: 'Optional Super Bosses',
    tips: [
      'Significantly overtuned - expect to be underleveled',
      'Require specific counter-strategies, not brute force',
      'Often have hidden mechanics or gimmicks',
      'May need multiple attempts to learn patterns',
      'Best rewards in the game for completing',
    ],
  },
  {
    bossCategory: 'Arena/Coliseum Bosses',
    tips: [
      'Balanced for competitive difficulty',
      'Time limits add pressure - optimize DPS',
      'Restrictions on items or team size',
      'Focus on efficient, fast strategies',
    ],
  },
  {
    bossCategory: 'Post-Game Bosses',
    tips: [
      'Expect Mega-level requirements',
      'Maximum stat optimization needed',
      'Perfect execution required - little room for error',
      'Test of complete game mastery',
    ],
  },
];

export default async function BossStrategiesPage({ params }: PageProps) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'guides.bossStrategies' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/guides`}
            className="inline-flex items-center gap-2 text-red-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {tNav('guides')}
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Sword className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('title')}
            </h1>
          </div>
          <p className="text-xl text-red-100">
            {t('description')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Mastering Boss Encounters
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Boss battles in Digimon Story: Time Stranger require more than just high stats and strong Digimon.
            Success comes from understanding boss patterns, proper preparation, strategic team composition,
            and adapting your tactics to each unique encounter.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            This comprehensive guide covers everything from general boss battle principles to specific
            counter-strategies for different boss types, phase management, elemental exploitation, and
            advanced tactics used by experienced players.
          </p>
        </div>

        {/* General Boss Principles */}
        <div className="card p-6 mb-12 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Universal Boss Battle Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Defense First, Offense Second
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                You can't deal damage if you're dead. Prioritize survival before burst damage.
              </p>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• Keep team HP above 60% at all times</li>
                <li>• Defensive buffs before offensive buffs</li>
                <li>• One strong healer is non-negotiable</li>
                <li>• Tank to absorb damage in emergencies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Know the Encounter
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Information is power. Learn boss mechanics before committing resources.
              </p>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• Scout with a throwaway team first</li>
                <li>• Note attack patterns and special moves</li>
                <li>• Identify elemental type and weaknesses</li>
                <li>• Check if boss summons minions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Debuffs Win Fights
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Debuffing the boss is often more valuable than buffing yourself.
              </p>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• ATK debuff reduces incoming damage by 30-50%</li>
                <li>• SPD debuff gives you more turns</li>
                <li>• DEF debuff increases your damage output</li>
                <li>• Maintain debuffs throughout the fight</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Exploit Elemental Advantages
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Super-effective damage can make or break boss encounters.
              </p>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• 1.5x-2x damage from super-effective hits</li>
                <li>• Build team around boss weakness</li>
                <li>• Resistance gear for boss element</li>
                <li>• Neutral damage if no clear advantage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Boss Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Boss Types and Counter Strategies
          </h2>
          <div className="grid gap-6">
            {bossTypes.map((boss) => {
              const Icon = boss.icon;
              const colorClasses = {
                red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
                purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
                yellow: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
                blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
              };

              return (
                <div
                  key={boss.type}
                  className={`card p-6 border-2 ${colorClasses[boss.color as keyof typeof colorClasses]}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-${boss.color}-100 dark:bg-${boss.color}-900`}>
                      <Icon className={`w-6 h-6 text-${boss.color}-600 dark:text-${boss.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {boss.type}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {boss.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        Characteristics:
                      </h4>
                      <ul className="space-y-1">
                        {boss.characteristics.map((char, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        Exploitable Weaknesses:
                      </h4>
                      <ul className="space-y-1">
                        {boss.weaknesses.map((weakness, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                            <span>{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        Example Bosses:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {boss.examples.map((example) => (
                          <span
                            key={example}
                            className="px-2 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Counter Strategy:
                    </h4>
                    <ul className="space-y-2">
                      {boss.counterStrategy.map((strategy, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="font-bold text-primary-600 dark:text-primary-400 mt-0.5">{index + 1}.</span>
                          <span>{strategy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong className="text-primary-600 dark:text-primary-400">Recommended Team:</strong> {boss.recommendedTeam}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phase Management */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Phase Management Strategies
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Most bosses have distinct phases that trigger at certain HP thresholds. Understanding and
            preparing for each phase is critical to victory.
          </p>

          <div className="space-y-6">
            {phaseStrategies.map((phase) => {
              const Icon = phase.icon;
              return (
                <div key={phase.phase} className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {phase.phase}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.strategies.map((strategy) => (
                      <div key={strategy.title} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                          {strategy.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {strategy.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Elemental Advantage Exploitation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Elemental Advantage Exploitation
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Elemental weaknesses can turn impossible fights into easy victories. Always identify
            boss element and build your team accordingly.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {elementalCounters.map((element) => (
              <div
                key={element.element}
                className="card p-5 border-2 border-primary-200 dark:border-primary-800"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {element.element} Bosses
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Strong vs {element.strongAgainst} | Weak vs {element.weakAgainst}
                  </div>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  {element.counterTip}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Best Counters:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {element.bestCounters.map((counter) => (
                      <span
                        key={counter}
                        className="px-2 py-1 text-xs font-semibold bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded"
                      >
                        {counter}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation Checklist */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Pre-Battle Preparation Checklist
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Never go into a boss fight unprepared. Use this comprehensive checklist to ensure
            you're ready for any encounter.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {preparationChecklist.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.category}
                  className="card p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">☑</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Advanced Tactics */}
        <div className="card p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Advanced Boss Battle Tactics
          </h2>
          <div className="space-y-6">
            {advancedTactics.map((tactic) => (
              <div key={tactic.title}>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {tactic.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {tactic.description}
                </p>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-1">
                    {tactic.examples.map((example, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary-600 dark:text-primary-400 mt-1">→</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Boss Category Specific Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Boss Category Specific Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {bossSpecificTips.map((category) => (
              <div
                key={category.bossCategory}
                className="card p-5"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.bossCategory}
                </h3>
                <ul className="space-y-2">
                  {category.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-primary-600 dark:text-primary-400 mt-1 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Common Attack Patterns */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Common Boss Attack Patterns and Counters
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                AoE Nuke (Area of Effect Super Attack)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Boss charges for one turn, then unleashes massive AoE damage to entire team.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Counter:</strong> Use defensive buffs/items during charge turn. Keep HP above 80% before attack.
                Consider using guard/defend actions with all units.
              </p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Multi-Target Chain
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Boss attacks 2-3 times in one turn, targeting different units each time.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Counter:</strong> Keep entire team's HP high (70%+). Tanks with taunt can intercept some attacks.
                Heal after chains complete, not between hits.
              </p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Self-Buff Rampage
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Boss buffs itself massively (ATK/SPD/DEF), then goes on offensive rampage.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Counter:</strong> Use dispel/cleanse abilities to remove buffs immediately. If unavailable,
                apply strong debuffs to counteract. Defensive stance until buffs expire.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Minion Summoning
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Boss summons adds/minions to assist in battle, potentially healing or buffing boss.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Counter:</strong> Use AoE attacks to clear minions quickly. Prioritize healer minions first.
                If minions respawn infinitely, focus boss and ignore adds.
              </p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Desperation Ultimate (Low HP)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                At low HP (usually sub-20%), boss uses ultimate attack that can wipe unprepared teams.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Counter:</strong> Save defensive cooldowns and items for this moment. Alternatively, burst boss
                from 30% to 0% to skip the attack entirely. Keep revival items ready.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Survival Tips */}
        <div className="card p-6 mb-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-300 dark:border-orange-800">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Emergency Survival Tips
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                When Things Go Wrong
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">!</span>
                  <span>Team HP below 40%: Stop attacking, focus on healing and defense</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">!</span>
                  <span>Healer dies: Use revival item immediately - don't wait</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">!</span>
                  <span>Out of SP: Switch to basic attacks and use SP recovery items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">!</span>
                  <span>Multiple units down: Consider retreating and coming back stronger</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Clutch Recovery Tactics
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <span>Use full-heal items on tank to buy time for team recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <span>Apply ATK debuff to boss to reduce incoming damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <span>Sacrifice low-HP unit to absorb attack meant for key unit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <span>Guard/defend with entire team for one turn to stabilize</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sample Boss Team Builds */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Sample Boss-Fighting Team Builds
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-200 dark:border-red-800">
              <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">
                Physical Boss Killer Team
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Composition:</strong> MetalGreymon (Physical DPS) + Angewomon (Healer/Support) +
                MetalMamemon (Tank with high DEF) + LadyDevimon (Debuffer)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong>Strategy:</strong> LadyDevimon applies ATK/DEF debuffs, MetalMamemon tanks damage,
                MetalGreymon deals sustained physical damage, Angewomon keeps team alive.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Best Against:</strong> Physical Powerhouse and Tank Boss types
              </p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
                Magic Burst Team
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Composition:</strong> MagnaAngemon (Magic DPS/Light) + Lucemon (Magic DPS/Light) +
                Seraphimon (Support/Backup DPS) + Tankmon (Physical Tank)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong>Strategy:</strong> Double magic DPS for massive burst damage, Seraphimon provides healing
                and buffs, Tankmon absorbs physical attacks while mages cast.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Best Against:</strong> Dark-element bosses and Magic Nuker types with low SPI
              </p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                Turtle/Tank Team (Ultimate Survival)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Composition:</strong> Guardromon (Main Tank) + Mamemon (Off-Tank with DPS) +
                Angemon (Primary Healer) + Wizardmon (Magic DPS/Debuffer)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong>Strategy:</strong> Extreme durability focus. Double tank absorbs all damage, Angemon focuses
                solely on healing, Wizardmon provides slow but safe damage.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Best Against:</strong> Speed Demon and Status Inflictor bosses, learning new boss patterns
              </p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-2 border-yellow-200 dark:border-yellow-800">
              <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">
                Speed Control Team
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Composition:</strong> Rapidmon (Speed/First Strike) + Beelzemon (Speed/Debuff) +
                WarGreymon (Heavy DPS) + MagnaAngemon (Support/DPS)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong>Strategy:</strong> Control turn order completely. Rapidmon and Beelzemon act first to apply
                SPD debuffs and set up, then heavy hitters finish before boss acts.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Best Against:</strong> Slow Tank Bosses, bosses with dangerous ultimate attacks
              </p>
            </div>
          </div>
        </div>

        {/* Final Tips */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Final Words of Wisdom
          </h2>

          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <strong className="text-primary-600 dark:text-primary-400">Patience is key:</strong> Boss fights
              can take 10-20+ minutes. Don't rush - slow and steady wins.
            </p>
            <p>
              <strong className="text-primary-600 dark:text-primary-400">Learn from failures:</strong> Every
              loss teaches you boss patterns. Use that knowledge to improve your strategy.
            </p>
            <p>
              <strong className="text-primary-600 dark:text-primary-400">Adapt mid-battle:</strong> If your
              strategy isn't working, don't be afraid to switch tactics during the fight.
            </p>
            <p>
              <strong className="text-primary-600 dark:text-primary-400">Preparation matters:</strong> 5 minutes
              of preparation can save you 30 minutes of struggling in combat.
            </p>
            <p>
              <strong className="text-primary-600 dark:text-primary-400">Know when to retreat:</strong> There's
              no shame in backing out and coming back stronger. Sometimes you're just not ready yet.
            </p>
          </div>

          <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border-2 border-primary-200 dark:border-primary-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Related Resources:</strong> Use the{' '}
              <Link href={`/${locale}/tools/team-builder`} className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Team Builder Tool
              </Link>{' '}
              to plan your boss-fighting teams, and check the{' '}
              <Link href={`/${locale}/digidex`} className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Digidex
              </Link>{' '}
              to find Digimon with the right stats and skills for your strategy. Also review{' '}
              <Link href={`/${locale}/guides/team-building`} className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                Team Building Guide
              </Link>{' '}
              for more composition tips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
