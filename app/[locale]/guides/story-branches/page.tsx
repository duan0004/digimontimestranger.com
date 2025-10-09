import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { GitBranch, AlertTriangle, Star, CheckCircle2, ArrowRight, Info, Trophy, Heart, Zap } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'guides.storyBranches' });

  return generateSEOMetadata({
    title: t('seoTitle'),
    description: t('seoDescription'),
    url: `/${locale}/guides/story-branches`,
  });
}

export default async function StoryBranchesPage({ params }: PageProps) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'guides.storyBranches' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">{t('title')}</h1>
              <p className="text-purple-100 mt-2">{t('description')}</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About Story Branches
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Digimon Time Stranger features a branching narrative where your choices throughout the game affect character relationships, available Digimon, story events, and ultimately which ending you receive. The game has <strong className="text-primary-600 dark:text-primary-400">5 different endings</strong> based on your decisions and actions.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Unique Endings</div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">12</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Major Decision Points</div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-200 dark:border-green-800">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Timeline Branches</div>
            </div>
          </div>
        </div>

        {/* Spoiler Warning */}
        <div className="card p-6 mb-8 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-700">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-300 mb-2">⚠️ Spoiler Warning</h3>
              <p className="text-yellow-800 dark:text-yellow-200">
                This guide contains major story spoilers, including plot points, character fates, and ending details. Only proceed if you've completed at least one playthrough or don't mind spoilers.
              </p>
            </div>
          </div>
        </div>

        {/* Five Endings Overview */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Trophy className="w-7 h-7 text-primary-600" />
            The Five Endings
          </h2>

          <div className="space-y-4">
            {/* True Ending */}
            <div className="p-5 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-2 border-yellow-400 dark:border-yellow-600 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-500" />
                  True Ending: "Digital Harmony"
                </h3>
                <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-sm font-bold rounded-full">★ CANON</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The best and canonical ending. Defeat Apocalymon while maintaining strong bonds with all partner Digimon. The Digital World is restored, and all Digimon partners can freely visit the human world.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Requirements:</div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Max Friendship (100) with all 3 starter partners
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Collect all 9 Ancient Tablet Fragments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Choose "Hope" dialogue in Chapter 9 final choice
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Complete all partner side quests (Chapters 5, 6, 7)
                  </li>
                </ul>
              </div>
            </div>

            {/* Good Ending */}
            <div className="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Heart className="w-6 h-6 text-blue-500" />
                  Good Ending: "Eternal Bonds"
                </h3>
                <span className="px-3 py-1 bg-blue-400 text-blue-900 text-sm font-bold rounded-full">GOOD</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Defeat Apocalymon but the Digital World gateway closes. Partner Digimon must return permanently to the Digital World, but your bonds remain strong across worlds.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Requirements:</div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    High Friendship (70+) with starter partners
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Collect at least 6 Ancient Tablet Fragments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Choose "Courage" or "Friendship" in Chapter 9
                  </li>
                </ul>
              </div>
            </div>

            {/* Neutral Ending */}
            <div className="p-5 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 border-2 border-gray-300 dark:border-gray-700 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Zap className="w-6 h-6 text-gray-500" />
                  Neutral Ending: "Uncertain Future"
                </h3>
                <span className="px-3 py-1 bg-gray-400 text-gray-900 text-sm font-bold rounded-full">NEUTRAL</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Defeat Apocalymon with medium bonds. The Digital World is saved but unstable. Some partner Digimon stay, others leave. The future remains uncertain.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Requirements:</div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Medium Friendship (40-69) with partners
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Collect 3-5 Ancient Tablet Fragments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Make mixed moral choices throughout
                  </li>
                </ul>
              </div>
            </div>

            {/* Bad Ending */}
            <div className="p-5 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                  Bad Ending: "Fractured Worlds"
                </h3>
                <span className="px-3 py-1 bg-orange-400 text-orange-900 text-sm font-bold rounded-full">BAD</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Defeat Apocalymon but with low bonds. Partner Digimon lose trust and refuse to maintain contact. Digital World and human world become permanently separated.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Requirements:</div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Low Friendship (below 40) with partners
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Collect fewer than 3 Tablet Fragments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Choose selfish dialogue options
                  </li>
                </ul>
              </div>
            </div>

            {/* Game Over Ending */}
            <div className="p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border-2 border-red-400 dark:border-red-700 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  Dark Ending: "Apocalypse Victorious"
                </h3>
                <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">GAME OVER</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Lose to Apocalymon in the final battle. Both Digital World and human world are consumed by darkness. Only available by intentionally losing the final fight.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Requirements:</div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Lose the final battle against Apocalymon
                  </li>
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-blue-600" />
                    Special cutscene unlocks "Bad End" gallery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Major Decision Points by Chapter */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <GitBranch className="w-7 h-7 text-primary-600" />
            Major Decision Points
          </h2>

          <div className="space-y-6">
            {/* Chapter 1 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Chapter 1: Starter Choice</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Your first major decision - affects team composition and ending requirements.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 space-y-3">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Choice: Which Digimon partner?</div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-gray-900 dark:text-white">Agumon:</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Best for balanced gameplay. Strong offensive evolution line. Easiest route to True Ending.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-gray-900 dark:text-white">Gabumon:</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Best for defensive gameplay. Ice attacks crucial for mid-game bosses. Adds unique friendship dialogue.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-gray-900 dark:text-white">Terriermon:</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Best for speed-based gameplay. Hardest difficulty but unlocks exclusive Chapter 6 scene. Most challenging True Ending path.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded text-sm">
                  <strong className="text-blue-900 dark:text-blue-300">Impact:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Starter choice affects approximately 30% of dialogue, changes recommended team builds, and determines difficulty of certain boss fights. All three can reach True Ending.</span>
                </div>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Chapter 2: Devimon's Offer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Before the final fight, Devimon offers you power to "save" the Digital World his way.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 space-y-3">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Choice: Accept or Refuse Devimon's power?</div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-green-900 dark:text-green-300">Refuse (Recommended):</strong>
                        <span className="text-gray-600 dark:text-gray-400"> +20 Friendship with all partners. Maintains trust. Required for True Ending.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-orange-900 dark:text-orange-300">Accept:</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Temporary stat boost for Devimon fight, but -30 Friendship. Partners question your judgment. Locks out True Ending.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded text-sm">
                  <strong className="text-red-900 dark:text-red-300">Critical:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Accepting locks you into Bad Ending path unless you complete redemption arc in Chapters 5-7.</span>
                </div>
              </div>
            </div>

            {/* Chapter 3 */}
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Chapter 3: Save the Enslaved</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                After defeating Etemon, you can choose to immediately pursue the next threat or help rebuild.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 space-y-3">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Choice: Help rebuild or move forward?</div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-green-900 dark:text-green-300">Help Rebuild (+2 hours):</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Unlock 3 side quests, gain Desert Crown equipment, +15 Friendship. Unlock Tylomon recruit.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-gray-900 dark:text-gray-300">Move Forward:</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Faster progression, no friendship change, miss optional content.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded text-sm">
                  <strong className="text-blue-900 dark:text-blue-300">Note:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> While not required for True Ending, helping rebuilds adds to ending quality and unlocks "Complete Guide" achievement.</span>
                </div>
              </div>
            </div>

            {/* Chapter 5 */}
            <div className="border-l-4 border-rose-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Chapter 5: The Sacrifice Choice</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Piedmon traps you in the Illusion Gardens and forces an impossible choice.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 space-y-3">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Choice: Who do you save?</div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-purple-900 dark:text-purple-300">Your Partner Digimon:</strong>
                        <span className="text-gray-600 dark:text-gray-400"> +25 Friendship with saved partner, but lose trust of others temporarily. Emotional scene.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-purple-900 dark:text-purple-300">The Civilian Digimon:</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Partners are briefly hurt but respect your selflessness. +10 Friendship with all partners.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-yellow-900 dark:text-yellow-300">Refuse the Choice (Hidden Option):</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Break the illusion by attacking Piedmon directly. Very difficult skill check. If successful: +30 Friendship, unlock secret scene. Required for True Ending.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded text-sm">
                  <strong className="text-yellow-900 dark:text-yellow-300">Secret Option:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> To unlock "Refuse the Choice", you must have found the "Mirror of Truth" collectible in the Spiral Mountain entrance. The option appears only if the item is in your inventory.</span>
                </div>
              </div>
            </div>

            {/* Chapter 6 */}
            <div className="border-l-4 border-slate-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Chapter 6: Machine Ethics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Discover Machinedramon's forces include reprogrammed good Digimon.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 space-y-3">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Choice: How to handle reprogrammed Digimon?</div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-green-900 dark:text-green-300">Find a Way to Save Them:</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Unlock lengthy side quest to create "Debug Program". Saves all machine Digimon. +20 Friendship. Takes 1-2 extra hours.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-orange-900 dark:text-orange-300">Destroy Them (Mercy Kill):</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Faster progression. -10 Friendship. Partners understand but are saddened. More resources for final chapters.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded text-sm">
                  <strong className="text-blue-900 dark:text-blue-300">Impact:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> Saving them is required for True Ending and adds 15 recruitable machine-type Digimon to post-game.</span>
                </div>
              </div>
            </div>

            {/* Chapter 9 - Final Choice */}
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Chapter 9: The Final Question</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                After defeating Apocalymon's first form, he asks you a philosophical question.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 space-y-3">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Question: "What gives you the right to fight for this world?"</div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-yellow-900 dark:text-yellow-300">"Hope for the Future":</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Unlocks True Ending if all requirements met. Partners gain ultimate evolution forms for Phase 2.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Heart className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-blue-900 dark:text-blue-300">"The Bonds We Share":</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Unlocks Good Ending if friendship is high. Powerful emotional scene.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-orange-900 dark:text-orange-300">"Courage to Act":</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Standard good ending. Straightforward battle continuation.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-gray-600 flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <strong className="text-gray-900 dark:text-gray-300">"Power to Defeat Evil":</strong>
                        <span className="text-gray-600 dark:text-gray-400"> Neutral or Bad ending depending on friendship level. Shows you may not have learned the true lesson.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded text-sm">
                  <strong className="text-purple-900 dark:text-purple-300">This is it:</strong>
                  <span className="text-gray-700 dark:text-gray-300"> This choice, combined with your friendship levels and completed side quests, determines your final ending.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Friendship System */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Heart className="w-7 h-7 text-pink-600" />
            Friendship & Trust System
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The hidden Friendship stat (0-100) with each partner Digimon is the most important factor for endings. You can check approximate levels in the Team menu (Hearts icon).
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-200 dark:border-green-800">
              <h3 className="font-bold text-green-900 dark:text-green-300 mb-3">Increase Friendship:</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Winning battles together (+1 per battle)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Choosing compassionate dialogue (+5 to +30)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Completing partner side quests (+15 to +25)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Camping and resting (+2 per rest)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Giving favorite food items (+3 each)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Evolving Digimon (+10 per evolution)</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-200 dark:border-red-800">
              <h3 className="font-bold text-red-900 dark:text-red-300 mb-3">Decrease Friendship:</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Letting partners faint (-5 per KO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Choosing selfish dialogue (-10 to -30)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Accepting dark power offers (-20 to -50)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Skipping partner dialogue (-3 each)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Losing boss battles (-10 per loss)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Not using partners in battle (-2 per benched battle)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
            <strong className="text-blue-900 dark:text-blue-300">Pro Tip:</strong>
            <span className="text-gray-700 dark:text-gray-300"> For True Ending, aim for 100 Friendship with all three starter partners by end of Chapter 8. This gives you buffer room for Chapter 9.</span>
          </div>
        </div>

        {/* Quick Reference Guide */}
        <div className="card p-6 mb-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Quick Reference: True Ending Checklist
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700 dark:text-gray-300">
                <strong>Chapter 1:</strong> Choose any starter (Agumon recommended for ease)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700 dark:text-gray-300">
                <strong>Chapter 2:</strong> Refuse Devimon's power offer
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700 dark:text-gray-300">
                <strong>Chapter 3:</strong> Help rebuild Oasis Village (optional but recommended)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700 dark:text-gray-300">
                <strong>Chapter 4:</strong> Find Myotismon's secret backstory in the castle library
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700 dark:text-gray-300">
                <strong>Chapter 5:</strong> Get Mirror of Truth, then refuse Piedmon's choice (hidden option)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700 dark:text-gray-300">
                <strong>Chapter 6:</strong> Complete Debug Program side quest to save machine Digimon
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700 dark:text-gray-300">
                <strong>Chapter 7:</strong> Complete all three partner side quests in underwater temple
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700 dark:text-gray-300">
                <strong>Chapter 8:</strong> Collect final Ancient Tablet Fragments (should have all 9)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700 dark:text-gray-300">
                <strong>Chapter 9:</strong> Choose "Hope for the Future" at Apocalymon's question
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700 dark:text-gray-300">
                <strong>Friendship:</strong> Maintain 100 Friendship with all three starter partners
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
            <div className="flex items-start gap-2">
              <Star className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-yellow-900 dark:text-yellow-300">Achievement:</strong>
                <span className="text-gray-700 dark:text-gray-300"> Getting the True Ending unlocks "Digital Harmony" achievement and New Game+ mode with additional features.</span>
              </div>
            </div>
          </div>
        </div>

        {/* New Game Plus */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Trophy className="w-7 h-7 text-primary-600" />
            New Game Plus Features
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            After completing any ending, you unlock New Game+ which carries over certain progress and adds new content.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Carries Over:</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Digidex completion</li>
                <li>• All unlocked Digimon</li>
                <li>• Equipment and items</li>
                <li>• Achievement progress</li>
                <li>• Gallery unlocks</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">New Content:</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Secret "Omega" difficulty mode</li>
                <li>• 20+ post-game recruitable Digimon</li>
                <li>• Hidden superboss encounters</li>
                <li>• Alternate character costumes</li>
                <li>• Extended epilogue scenes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
