import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin, Trophy, Star, AlertCircle, CheckCircle2, Lightbulb, Target } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  return generateSEO({
    title: 'Chapter 4: ... - Walkthrough',
    description: 'Complete walkthrough for Chapter 4 of Digimon Time Stranger...',
    url: '/walkthrough/chapter-4',
  });
}

export default async function Chapter4Page() {
  const t = await getTranslations('walkthroughChapter');
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/walkthrough/chapter-3"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous Chapter
          </Link>
          <Link
            href="/walkthrough/chapter-5"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            Next Chapter
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Header */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-indigo-700 to-purple-900 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
              Chapter 4
            </span>
            <span className="px-3 py-1 bg-yellow-500 rounded-full text-sm font-bold">
              Medium
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Vampire's Lair</h1>
          <div className="flex items-center gap-4 text-indigo-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Geko Swamp</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Boss: Myotismon</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>6 Collectibles</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The murky Geko Swamp conceals the castle of Myotismon, a vampire Digimon who has been draining the life force from surrounding areas. Your quest leads you through treacherous swamplands, haunted forests, and finally into the vampire's gothic castle. This chapter features complex status management, draining attacks, and the importance of Light-element strategies. Prepare for one of the most atmospheric and challenging chapters yet.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Recommended Level</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">28+</div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Average Time</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">4-5 hrs</div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Difficulty</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">⭐⭐⭐</div>
            </div>
          </div>
        </div>

        {/* Walkthrough Sections */}

        {/* Part 1 */}
        <div className="card p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary-600" />
            Part 1: Into the Swamp
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Arrive at Geko Swamp</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The portal from Server Desert deposits you at the edge of a misty, ominous swamp. A weakened Digimon warns you about the darkness spreading from the castle.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Warning:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> The swamp drains 5% HP every 30 seconds of exploration. Find safe zones (marked by glowing mushrooms) to rest and recover.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Navigate the Poison Marshes</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Cross the treacherous marshlands by following the safe path of stone platforms. Stepping in the water triggers poison status and random encounters.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Encounters:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Raremon (Lv. 25), Nanimon (Lv. 26), Numemon (Lv. 25), Sukamon (Lv. 24) - mostly poison-type enemies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Find the Refugee Camp</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Hidden deep in the swamp, a small group of resistance Digimon have established a camp. They provide crucial information about Myotismon's castle defenses.
                </p>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Tip:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Stock up on Awakening items (for Sleep status) and Antidotes. The camp merchant has a limited supply - buy everything you can afford.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">{t('labels.collectible', { number: 1 })}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> INT Chip B - Quest reward from the camp leader for delivering medicine to a sick Digimon in the eastern marsh.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Cross the Haunted Forest</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Beyond the marsh lies a dark forest where ghost-type Digimon roam. The path splits into three routes, but only the middle path leads to the castle.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">{t('labels.collectible', { number: 2 })}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Revival Capsule - On the left forest path, in a hidden glade with a shrine. Brings one fallen Digimon back to life.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2 */}
        <div className="card p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary-600" />
            Part 2: Castle Infiltration
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Reach Castle Gates</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Myotismon's imposing gothic castle towers before you. The main gates are sealed, but a side entrance through the crypts offers a way in.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Mini-Boss:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> DemiDevimon Guards (x3, Lv. 27) defend the crypt entrance. They use status attacks frequently - keep antidotes ready.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                6
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Explore the Crypts</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The underground crypts are a maze of corridors and burial chambers. Solve the epitaph puzzle to unlock the passage to the castle proper.
                </p>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Puzzle Solution:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Read the four epitaphs and activate the tombstones in chronological order of death dates: 1742 → 1809 → 1865 → 1901.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">{t('labels.collectible', { number: 3 })}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Darkness Talisman - In a sarcophagus in the secret burial chamber. Reduces dark damage by 20%.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                7
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Navigate Castle Interior</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The castle is a labyrinth of halls, towers, and chambers. You must find three Sacred Seals to break the barrier protecting Myotismon's throne room.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-2">
                  <li><strong>Library Seal:</strong> East Wing - defeat Phantomon (Lv. 29) to claim it</li>
                  <li><strong>Chapel Seal:</strong> West Wing - solve the stained glass color puzzle</li>
                  <li><strong>Tower Seal:</strong> North Tower - climb while avoiding falling debris traps</li>
                </ul>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">{t('labels.collectible', { number: 4 })}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Holy Ring - In the Chapel after solving the puzzle. Provides immunity to vampire draining attacks.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                8
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Confront the Vampire Servants</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Before the throne room, you face Myotismon's elite servants in a gauntlet battle: Bakemon Knight (Lv. 30), followed by two Devidramon (Lv. 29).
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Strategy:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> These are consecutive battles with no healing in between. Manage your resources carefully. Light attacks work well on all three.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">{t('labels.collectible', { number: 5 })}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Mega HP Recovery - Dropped by Bakemon Knight upon defeat.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 3 - Boss Battle */}
        <div className="card p-6 mb-6 border-2 border-red-300 dark:border-red-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-red-600" />
            Part 3: Boss Battle - Myotismon
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                9
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter the Throne Room</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The massive throne room is shrouded in darkness. Myotismon emerges from the shadows, his cape billowing as he prepares for battle. A cutscene reveals his plan to drain the Digital World's energy.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                10
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Final Preparation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  This is one of the toughest battles yet. Make sure you're fully prepared before engaging.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">{t('labels.preparationChecklist')}</strong>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-1">
                        <li>Team at Level 28+ (Level 30 strongly recommended)</li>
                        <li>Stock 8+ Mega HP Recovery items</li>
                        <li>Bring 5+ Awakening items for Sleep status</li>
                        <li>Equip Holy Ring on your healer if you have it</li>
                        <li>CRITICAL: Light-type Digimon are essential (MagnaAngemon, Angewomon ideal)</li>
                        <li>Have at least 2 Revival Capsules ready</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                B
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-xl">Myotismon Battle Strategy</h3>

                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-3">
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">{t('battle.level')}</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">32</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">{t('battle.hp')}</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">8,000</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">{t('battle.weaknesses')}</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold rounded">Light</span>
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-bold rounded">Fire</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Resistances</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold rounded">Dark</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded">Poison</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">{t('battle.mainAttacks')}</div>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• <strong>Crimson Lightning:</strong> Powerful dark lightning (~220 damage)</li>
                      <li>• <strong>Nightmare Claw:</strong> Drains HP and heals Myotismon (~200 damage)</li>
                      <li>• <strong>Grizzly Wing:</strong> Bat swarm with Sleep status effect (~180 damage)</li>
                      <li>• <strong>Nightmare Wave:</strong> Ultimate dark wave attack all party (~280 damage, used when critical)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white">{t('battle.strategy')}</h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Phase 1 (100-70% HP):</strong> Myotismon cycles between Crimson Lightning and Nightmare Claw. The healing from Nightmare Claw makes this battle longer - focus on consistent Light-element damage. Keep all party HP above 50%. Use MagnaAngemon's Gate of Destiny or similar Light attacks.</li>
                    <li><strong>Phase 2 (70-40% HP):</strong> Grizzly Wing enters rotation. Sleep status is dangerous - sleeping Digimon can't act and are vulnerable. Wake them immediately with Awakening items. Don't let multiple party members sleep at once or you'll be overwhelmed.</li>
                    <li><strong>Phase 3 (40-0% HP):</strong> Desperate mode. Nightmare Wave becomes frequent and can devastate your party. Before each Nightmare Wave (he'll say "Taste my nightmare!"), heal EVERYONE to 60%+ HP minimum. Use defensive buffs if available. After surviving Nightmare Wave, heal again and counter-attack hard.</li>
                    <li><strong>Critical Tactics:</strong>
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li>Nightmare Claw can swing momentum by healing him 15-20% of damage dealt. Burst him down in Phase 3 to minimize healing</li>
                        <li>If you have Holy Ring equipped, that Digimon takes no damage from Nightmare Claw</li>
                        <li>WarGreymon or similar high-damage dealers should focus on raw damage</li>
                        <li>Keep a dedicated healer alive at all costs - Angewomon ideal</li>
                        <li>Don't be afraid to use Revival Capsules if your Light attacker falls</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded mt-3 mb-3">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Pro Tip:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> If you're struggling, retreat and level up to 30. This boss has a significant difficulty spike. Also, make sure your Light-type Digimon have evolved to Ultimate level (Angemon → MagnaAngemon).</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-green-900 dark:text-green-300">{t('labels.victoryRewards')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Darkness Mantle, INT Chip B, Revival Capsule, 3,000 EXP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 4 - Post Battle */}
        <div className="card p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary-600" />
            Part 4: Castle Liberation
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                11
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Break the Curse</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  With Myotismon defeated, his dark curse over Geko Swamp shatters. The perpetual night lifts, sunlight returns, and the drained energy flows back to the land. The swamp begins to heal.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                12
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Discover the Dark Masters' Plot</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  In Myotismon's study, you find correspondence revealing he was part of a larger organization: the Dark Masters. The next target is Spiral Mountain, where Piedmon commands.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">{t('labels.collectible', { number: 6 })}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Ancient Tablet Fragment #3 - In Myotismon's private chamber. The prophecy becomes clearer.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                13
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Return to Refugee Camp</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The swamp refugees celebrate your victory and offer gifts. They reveal a hidden portal to Spiral Mountain has opened in the chapel.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                ✓
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{t('labels.chapterComplete')}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Congratulations on vanquishing Myotismon! Prepare yourself for the greatest challenge yet - the Dark Masters await at Spiral Mountain in Chapter 5.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="card p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('summary.title', { number: 4 })}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t('labels.keyAchievements')}</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Navigated treacherous Geko Swamp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Infiltrated Myotismon's gothic castle</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Defeated the vampire lord Myotismon</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Uncovered Dark Masters conspiracy</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t('labels.collectiblesFound')}</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• INT Chip B (Camp quest reward)</li>
                <li>• Revival Capsule (Haunted Forest)</li>
                <li>• Darkness Talisman (Crypts)</li>
                <li>• Holy Ring (Chapel puzzle)</li>
                <li>• Mega HP Recovery (Bakemon Knight drop)</li>
                <li>• Ancient Tablet Fragment #3 (Story item)</li>
              </ul>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-4">{t('labels.nextChapter')}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Face the ultimate challenge at Spiral Mountain where Piedmon, master of the Dark Masters, awaits in Chapter 5.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Bottom */}
        <div className="flex items-center justify-between mt-8">
          <Link
            href="/walkthrough/chapter-3"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous: Chapter 3
          </Link>
          <Link
            href="/walkthrough/chapter-5"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Next: Chapter 5
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
