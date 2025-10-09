import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { Zap, ArrowLeft, TrendingUp, Target, Users, Brain, Shield, Clock, Award, AlertCircle, CheckCircle } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'guides.fastLeveling' });

  return generateSEOMetadata({
    title: t('seoTitle'),
    description: t('seoDescription'),
    keywords: [
      'fast leveling',
      'XP grinding',
      'experience guide',
      'leveling locations',
      'efficient leveling',
      'power leveling',
    ],
    url: `/${locale}/guides/fast-leveling`,
  });
}

const grindingLocations = [
  {
    phase: 'Early Game',
    level: 'Level 1-15',
    icon: '🌱',
    color: 'green',
    locations: [
      {
        name: 'Data Forest - East Path',
        levels: '1-8',
        xpRate: 'Low-Medium',
        highlights: [
          'Safe grinding for new players',
          'Kunemon and Mushroomon spawns',
          'Close to save point',
          'Good for breaking in starters',
        ],
      },
      {
        name: 'Circuit Plains',
        levels: '8-15',
        xpRate: 'Medium',
        highlights: [
          'First major grinding spot',
          'Guardromon battles give solid XP',
          'Multiple enemy types for variety',
          'Good item drop rates',
        ],
      },
      {
        name: 'Binary Cave - Upper Levels',
        levels: '10-15',
        xpRate: 'Medium-High',
        highlights: [
          'Slightly harder enemies, better XP',
          'Great for catching up underleveled Digimon',
          'Rare encounters worth bonus XP',
          'Material farming while leveling',
        ],
      },
    ],
  },
  {
    phase: 'Mid Game',
    level: 'Level 15-35',
    icon: '⚡',
    color: 'blue',
    locations: [
      {
        name: 'Chrome Wasteland',
        levels: '15-25',
        xpRate: 'High',
        highlights: [
          'Excellent XP per battle ratio',
          'MetalMamemon spawns for bonus XP',
          'Open area for quick battles',
          'Gold grinding opportunity',
        ],
      },
      {
        name: 'Digital Tower - Floors 5-10',
        levels: '20-30',
        xpRate: 'High',
        highlights: [
          'Consistent enemy spawns',
          'Best mid-game grinding spot',
          'Stack battles for XP chains',
          'Evolution items as bonus drops',
        ],
      },
      {
        name: 'Voltage Ruins',
        levels: '25-35',
        xpRate: 'Very High',
        highlights: [
          'Late mid-game power leveling',
          'Andromon groups for massive XP',
          'Prepare for Ultimate evolutions',
          'Skill inheritance materials',
        ],
      },
    ],
  },
  {
    phase: 'Late Game',
    level: 'Level 35-50+',
    icon: '🔥',
    color: 'red',
    locations: [
      {
        name: 'Server Desert - Deep Zone',
        levels: '35-45',
        xpRate: 'Very High',
        highlights: [
          'Premium late-game grinding',
          'MegaKabuterimon and WarGreymon spawns',
          'Rapid leveling for Mega evolutions',
          'Best pre-endgame location',
        ],
      },
      {
        name: 'Temporal Rift - All Floors',
        levels: '40-50',
        xpRate: 'Maximum',
        highlights: [
          'Highest XP rates in game',
          'Mega-level enemy encounters',
          'Perfect for final preparations',
          'Rare Digimon catching opportunity',
        ],
      },
      {
        name: 'Infinity Tower - Floors 20+',
        levels: '45-60',
        xpRate: 'Maximum',
        highlights: [
          'Endgame grinding paradise',
          'Stackable XP multipliers',
          'Level 99 grinding spot',
          'Ultimate challenge preparation',
        ],
      },
    ],
  },
];

const xpOptimizationTechniques = [
  {
    name: 'XP Chain Bonuses',
    icon: TrendingUp,
    description: 'Stack consecutive battles for multiplier bonuses',
    techniques: [
      'Win 3 battles in a row: +10% XP bonus',
      'Win 5 battles in a row: +25% XP bonus',
      'Win 10 battles in a row: +50% XP bonus',
      'Avoid fleeing to maintain chains',
      'Use healing items between battles',
    ],
  },
  {
    name: 'Support Bonus Multipliers',
    icon: Users,
    description: 'Utilize support Digimon for XP boosts',
    techniques: [
      'Digimon below party level get +50% XP',
      'Reserve party members get 50% of battle XP',
      'Rotate team to level multiple Digimon',
      'Use high-level carries for weak Digimon',
      'Switch in low-level Digimon before victory',
    ],
  },
  {
    name: 'Equipment XP Modifiers',
    icon: Award,
    description: 'Equip items that boost experience gains',
    techniques: [
      'Tactician\'s USB: +20% XP for holder',
      'Scholar\'s Chip: +15% XP to entire party',
      'Experience Patch: +10% XP, stackable',
      'Combine multiple XP items for max gain',
      'Farm these items early for long-term benefit',
    ],
  },
  {
    name: 'Agent Personality Bonuses',
    icon: Brain,
    description: 'Leverage personality XP modifiers',
    techniques: [
      'Certain personalities grant +5% XP',
      'Match personality to grinding session',
      'Wisdom personalities boost XP gains',
      'Build bonds with XP-boosting personalities',
      'Stack with other XP multipliers',
    ],
  },
];

const efficientStrategies = [
  {
    title: 'The Quick Battle Method',
    icon: Clock,
    color: 'purple',
    strategy: [
      'Focus on areas with fast-spawning enemies',
      'Use AOE attacks to clear battles in 1-2 turns',
      'Equip speed-boosting equipment for first strikes',
      'Skip battle animations in settings',
      'Create a dedicated speed-grinding team',
    ],
    bestFor: 'Players who want maximum battles per hour',
  },
  {
    title: 'The Elite Target Method',
    icon: Target,
    color: 'orange',
    strategy: [
      'Hunt down rare/elite spawns for bonus XP',
      'Learn spawn patterns and timings',
      'Use encounter-boosting items',
      'Focus quality over quantity',
      'Combine with XP chain bonuses',
    ],
    bestFor: 'Players who prefer strategic, high-value battles',
  },
  {
    title: 'The Overnight Training Method',
    icon: Shield,
    color: 'teal',
    strategy: [
      'Set up AutoBattle in safe grinding zones',
      'Equip healing and revival items',
      'Use tanky Digimon to survive long sessions',
      'Choose areas with consistent enemy levels',
      'Check back periodically to collect XP',
    ],
    bestFor: 'Players who want passive leveling progress',
  },
];

const recommendedGrinders = [
  {
    name: 'Angemon',
    role: 'Support Grinder',
    icon: '👼',
    why: [
      'Healing abilities keep team healthy',
      'Decent damage for consistent clears',
      'Low memory cost allows bigger team',
      'Available early in progression',
    ],
  },
  {
    name: 'Greymon',
    role: 'AOE Damage',
    icon: '🦖',
    why: [
      'Mega Flame hits multiple enemies',
      'High attack stat for quick kills',
      'Easy evolution path',
      'Solid bulk for survival',
    ],
  },
  {
    name: 'Gatomon',
    role: 'Speed Grinder',
    icon: '😺',
    why: [
      'High speed for first strikes',
      'Lightning Paw clears weak enemies',
      'Low memory, high efficiency',
      'Excellent for chain bonuses',
    ],
  },
  {
    name: 'MetalGreymon',
    role: 'Mid-Game Powerhouse',
    icon: '🤖',
    why: [
      'Giga Destroyer for massive AOE',
      'Can handle tougher grinding spots',
      'Fast battle clear times',
      'Good evolution into WarGreymon',
    ],
  },
  {
    name: 'Lillymon',
    role: 'Sustain Grinder',
    icon: '🌺',
    why: [
      'Healing Flower for team sustain',
      'Nature magic for elemental coverage',
      'Energy efficient long sessions',
      'Perfect for overnight grinding',
    ],
  },
  {
    name: 'MegaKabuterimon',
    role: 'Tank Grinder',
    icon: '🪲',
    why: [
      'Extreme defense for safe grinding',
      'Horn Buster for reliable damage',
      'Rarely needs healing',
      'Great for harder grinding zones',
    ],
  },
];

export default async function FastLevelingGuidePage({ params }: PageProps) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'guides.fastLeveling' });
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
            <Zap className="w-12 h-12" />
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
            Understanding Fast Leveling
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Efficient leveling in Digimon Story: Time Stranger isn't just about fighting more battles -
            it's about fighting the right battles in the right locations with the right strategies.
            This guide will teach you how to maximize your XP gains, minimize wasted time, and build
            a team that levels up rapidly.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Whether you're rushing to reach Mega stage, catching up underleveled Digimon, or preparing
            for endgame content, understanding XP mechanics and optimal grinding locations is crucial.
            The difference between efficient and inefficient leveling can save dozens of hours.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            This guide covers everything from early-game grinding spots to late-game power leveling
            techniques, complete with team compositions and XP multiplication strategies that work
            throughout your journey.
          </p>
        </div>

        {/* Best Grinding Locations by Game Stage */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Best Grinding Locations by Game Stage
          </h2>
          {grindingLocations.map((phase) => (
            <div key={phase.phase} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{phase.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {phase.phase}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {phase.level}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {phase.locations.map((location) => (
                  <div
                    key={location.name}
                    className={`card p-6 border-2 border-${phase.color}-200 dark:border-${phase.color}-800`}
                  >
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {location.name}
                      </h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          Levels {location.levels}
                        </span>
                        <span className={`font-semibold text-${phase.color}-600 dark:text-${phase.color}-400`}>
                          {location.xpRate} XP
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {location.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* XP Optimization Techniques */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            XP Optimization Techniques
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Raw grinding isn't enough. Use these techniques to multiply your XP gains and level
            significantly faster than standard play.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {xpOptimizationTechniques.map((technique) => {
              const Icon = technique.icon;
              return (
                <div
                  key={technique.name}
                  className="card p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {technique.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {technique.description}
                  </p>
                  <ul className="space-y-2">
                    {technique.techniques.map((tech, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Efficient Leveling Strategies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Efficient Leveling Strategies
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Different players have different playstyles. Choose the grinding method that matches
            your preferences and time availability.
          </p>
          <div className="space-y-6">
            {efficientStrategies.map((strategy) => {
              const Icon = strategy.icon;
              return (
                <div
                  key={strategy.title}
                  className={`card p-6 border-2 border-${strategy.color}-200 dark:border-${strategy.color}-800`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-${strategy.color}-100 dark:bg-${strategy.color}-900`}>
                      <Icon className={`w-6 h-6 text-${strategy.color}-600 dark:text-${strategy.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {strategy.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Best for: {strategy.bestFor}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-16">
                    {strategy.strategy.map((step, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary-600 dark:text-primary-400 font-bold">{index + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Memory Management for Grinding */}
        <div className="card p-6 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Memory Management for Grinding
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Balancing party size with Digimon power is crucial for efficient grinding. More party
            members mean more Digimon leveling simultaneously, but weaker individual members may
            slow down battles.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Early Game Memory Strategy
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Memory Available:</strong> 30-40</p>
                <p className="mb-2">Focus on a balanced party of 4-6 Digimon:</p>
                <ul className="space-y-1 ml-4">
                  <li>• 2-3 damage dealers (Rookie/Champion)</li>
                  <li>• 1 support/healer</li>
                  <li>• 1-2 rotating slots for leveling</li>
                  <li>• Keep 5-10 memory free for flexibility</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Late Game Memory Strategy
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Memory Available:</strong> 60-80+</p>
                <p className="mb-2">Optimize for power leveling:</p>
                <ul className="space-y-1 ml-4">
                  <li>• 2 max-level carry Digimon (40-50 memory)</li>
                  <li>• 3-4 Digimon being power-leveled</li>
                  <li>• Carries handle all combat</li>
                  <li>• Swap weak Digimon in before battle ends</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Pro Tip: The Support Swap Technique
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Keep 2-3 powerful Digimon in your active party and 3-4 underleveled Digimon in
              your support party. Support party members gain 50% XP without participating in
              battle. When support Digimon reach adequate levels, swap them into active rotation.
              This method allows leveling 6-7 Digimon simultaneously with minimal efficiency loss.
            </p>
          </div>
        </div>

        {/* Fast Team Leveling Tips */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Tips for Fast Team Leveling
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  Level Scaling Strategy
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Keep your team within 5 levels of each other for optimal balance:
                </p>
                <ul className="space-y-1 ml-6 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Digimon 5+ levels below party average get +50% XP</li>
                  <li>• Focus grinding on underleveled members</li>
                  <li>• Rotate team positions to spread XP</li>
                  <li>• Use XP boost items on weakest members</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  Support Party Exploitation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Maximize the support party XP system:
                </p>
                <ul className="space-y-1 ml-6 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Support members get 50% XP passively</li>
                  <li>• Perfect for newly caught Digimon</li>
                  <li>• Rotate every 5-10 battles</li>
                  <li>• No memory cost for support slots</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  Efficient Battle Flow
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Streamline your grinding sessions:
                </p>
                <ul className="space-y-1 ml-6 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Clear battles in 2 turns or less</li>
                  <li>• Use AOE skills to hit multiple targets</li>
                  <li>• Set skills to shortcuts for speed</li>
                  <li>• Enable fast battle animations</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  Evolution Timing
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Coordinate evolutions with grinding sessions:
                </p>
                <ul className="space-y-1 ml-6 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Evolve before major grinding sessions</li>
                  <li>• Higher stages gain more XP per battle</li>
                  <li>• Balance evolution cost vs grinding efficiency</li>
                  <li>• See <Link href={`/${locale}/guides/evolution-guide`} className="text-primary-600 dark:text-primary-400 hover:underline">Evolution Guide</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Digimon for Grinding */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Recommended Digimon for Grinding
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            These Digimon excel at grinding thanks to their abilities, stats, and efficiency.
            Build your grinding team around one or more of these powerhouses.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedGrinders.map((digimon) => (
              <div
                key={digimon.name}
                className="card p-6 border-2 border-primary-200 dark:border-primary-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{digimon.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {digimon.name}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400">
                      {digimon.role}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {digimon.why.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Power Leveling Techniques */}
        <div className="card p-6 mb-8 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-2 border-primary-200 dark:border-primary-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Advanced Power Leveling Techniques
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                The XP Multiplier Stack
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Combine multiple XP bonuses for exponential growth:
              </p>
              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-900 dark:text-white">
                      <th className="pb-2">Bonus Source</th>
                      <th className="pb-2">Multiplier</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr>
                      <td className="py-1">Base XP</td>
                      <td>1.0x</td>
                    </tr>
                    <tr>
                      <td className="py-1">10-Battle Chain</td>
                      <td>+0.5x</td>
                    </tr>
                    <tr>
                      <td className="py-1">Tactician's USB</td>
                      <td>+0.2x</td>
                    </tr>
                    <tr>
                      <td className="py-1">Scholar's Chip</td>
                      <td>+0.15x</td>
                    </tr>
                    <tr>
                      <td className="py-1">Underleveled Bonus</td>
                      <td>+0.5x</td>
                    </tr>
                    <tr>
                      <td className="py-1">Personality Bonus</td>
                      <td>+0.05x</td>
                    </tr>
                    <tr className="border-t-2 border-primary-300 dark:border-primary-700 font-bold text-gray-900 dark:text-white">
                      <td className="pt-2">Total Multiplier</td>
                      <td className="pt-2">2.4x XP!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                The Carry & Switch Method
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                The most efficient power leveling technique in the game:
              </p>
              <ol className="space-y-2 ml-6 text-sm text-gray-600 dark:text-gray-400">
                <li>1. Bring 1-2 max-level Mega Digimon as "carries"</li>
                <li>2. Fill remaining slots with low-level Digimon to level</li>
                <li>3. Carries handle 95% of combat damage</li>
                <li>4. Right before battle ends, switch in weak Digimon</li>
                <li>5. Weak Digimon get full XP despite not fighting</li>
                <li>6. Repeat in high-level grinding zones</li>
              </ol>
              <div className="mt-3 p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Result:</strong> Level Digimon from 1 to 30 in under 2 hours using this method
                  in Chrome Wasteland or Digital Tower.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                The Reserve Rotation System
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Maximize XP distribution across your entire roster:
              </p>
              <ul className="space-y-2 ml-6 text-sm text-gray-600 dark:text-gray-400">
                <li>• Keep 10-15 Digimon in active rotation</li>
                <li>• Every 10 battles, swap out leveled Digimon</li>
                <li>• Replace with lower-level Digimon from reserve</li>
                <li>• Maintain one consistent carry for stability</li>
                <li>• Track levels with in-game party manager</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Mistakes to Avoid */}
        <div className="card p-6 mb-8 border-2 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Common Leveling Mistakes to Avoid
            </h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 dark:text-orange-400 mt-1">⚠️</span>
              <div>
                <strong className="text-gray-900 dark:text-white">Grinding in Wrong Locations:</strong>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Using early-game grinding spots in late game wastes time. Always use the highest-level
                  area your team can handle efficiently. Even 5 levels difference in enemy level
                  doubles XP gains.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 dark:text-orange-400 mt-1">⚠️</span>
              <div>
                <strong className="text-gray-900 dark:text-white">Ignoring XP Multipliers:</strong>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Not using equipment, chains, and bonuses means you're earning 50-60% less XP than
                  possible. A few hours of setup farming XP items pays dividends for the entire game.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 dark:text-orange-400 mt-1">⚠️</span>
              <div>
                <strong className="text-gray-900 dark:text-white">Over-Leveling Everyone:</strong>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  You don't need every Digimon at max level. Focus on your core team of 6-8 Digimon
                  and leave others at moderate levels. Quality over quantity saves massive time.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 dark:text-orange-400 mt-1">⚠️</span>
              <div>
                <strong className="text-gray-900 dark:text-white">Neglecting Memory Management:</strong>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Trying to level too many high-memory Digimon at once results in slow battles and
                  poor efficiency. Optimize party composition for fast clear times, not maximum party size.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 dark:text-orange-400 mt-1">⚠️</span>
              <div>
                <strong className="text-gray-900 dark:text-white">Breaking XP Chains:</strong>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Fleeing battles or returning to town mid-session breaks your XP chain bonus. Stock up
                  on healing items and commit to 30-minute grinding sessions for maximum efficiency.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Quick Reference & Resources */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Quick Reference & Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Grinding Essentials</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>✓ Always use highest-level area you can clear</li>
                <li>✓ Stack XP multipliers for 2x+ gains</li>
                <li>✓ Maintain XP chains for bonus multipliers</li>
                <li>✓ Use carry + switch method for power leveling</li>
                <li>✓ Optimize for 2-turn or less battle clears</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Memory & Team Size</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>✓ Early: 4-6 Digimon balanced team</li>
                <li>✓ Mid: 3-5 Digimon power team</li>
                <li>✓ Late: 2 carries + 3-4 leveling targets</li>
                <li>✓ Use support party for passive XP</li>
                <li>✓ Keep 5-10 memory as buffer</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Related Guides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href={`/${locale}/guides/evolution-guide`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    → Evolution Guide
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/guides/team-building`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    → Team Building Guide
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/guides/best-starters`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    → Best Starters Guide
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/digidex`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    → Digidex Database
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/database/stats`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    → Stats & Mechanics
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">
              Final Tips for Maximum Efficiency
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              The fastest leveling combines all strategies: grind in optimal locations, stack every
              available XP multiplier, use the carry & switch method, maintain XP chains, and
              optimize your party for fast battle clears. With proper setup, you can level Digimon
              from 1-50 in just 2-3 hours.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Remember: efficient leveling is about working smarter, not harder. Invest time in
              getting XP boost equipment early and the entire game becomes significantly faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
