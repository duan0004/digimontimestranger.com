import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin, Trophy, Star, AlertCircle, CheckCircle2, Lightbulb, Target } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Chapter 5: Dark Masters Rise - Walkthrough',
  description: 'Complete walkthrough for Chapter 5 of Digimon Time Stranger including all missions, collectibles, and Piedmon boss strategies.',
  path: '/walkthrough/chapter-5',
});

export default function Chapter5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/walkthrough/chapter-4"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous Chapter
          </Link>
          <Link
            href="/walkthrough"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            All Chapters
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Header */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-red-600 to-black text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
              Chapter 5
            </span>
            <span className="px-3 py-1 bg-red-600 rounded-full text-sm font-bold">
              Hard
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Dark Masters Rise</h1>
          <div className="flex items-center gap-4 text-red-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Spiral Mountain</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Boss: Piedmon</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>8 Collectibles</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The twisted Spiral Mountain stands as the Dark Masters' fortress, a gravity-defying spire where reality itself bends. Piedmon, the most cunning and powerful of the Dark Masters, awaits at the summit. This chapter represents the peak challenge of the main story, featuring the toughest enemies, most complex puzzles, and a boss battle that will test everything you've learned. Prepare for an epic ascent through multiple zones, each more dangerous than the last, culminating in a legendary confrontation.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Recommended Level</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">36+</div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Average Time</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">5-6 hrs</div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Difficulty</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>

        {/* Walkthrough Sections */}

        {/* Part 1 */}
        <div className="card p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary-600" />
            Part 1: Base of Spiral Mountain
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Arrive at Dark Area</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The portal from Geko Swamp deposits you in a desolate wasteland. Spiral Mountain looms ahead, its impossible architecture defying physics. The sky swirls with chaotic energy.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Warning:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> This is the point of no return for Chapter 5. Make absolutely sure you're prepared. The game will warn you before entering.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Meet the Resistance Force</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  At the base camp, you reunite with allies from previous chapters: Leomon, the Oasis Village elder, and resistance members. They've all come to support the final assault. Stock up on supplies - this is your last chance.
                </p>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Critical Preparation:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Buy at least 10 Mega HP Recovery, 10 Mega MP Recovery, 5 Revival Capsules, and multiple stat-boosting items. This will be expensive but necessary.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Cross the Wasteland</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Navigate the corrupted wasteland leading to the mountain. The path is littered with powerful enemies.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Encounters:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Megadramon (Lv. 33), Giromon (Lv. 34), Skull Greymon (Lv. 35), LadyDevimon (Lv. 36) - all elite enemies!</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Defeat the Gate Guardians</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  At the mountain's base, four powerful guardians block entry. You must defeat them all in a gauntlet challenge: MetalGreymon (Virus), WereGarurumon (Black), SkullMeramon, and Phantomon.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #1:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Magic Chip A - Reward for defeating all four gate guardians.</span>
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
            Part 2: Ascending the Spiral
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter Spiral Mountain</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Inside, gravity shifts unpredictably. Paths spiral upward in impossible directions. The mountain has five distinct zones, each themed around a Dark Master's power.
                </p>
                <div className="grid md:grid-cols-2 gap-3 mt-3">
                  <div className="p-3 border-2 border-red-300 dark:border-red-700 rounded-lg">
                    <h4 className="font-bold text-red-900 dark:text-red-300 mb-1">Zone 1: Chaos Halls</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Shifting gravity, maze-like passages</p>
                  </div>
                  <div className="p-3 border-2 border-blue-300 dark:border-blue-700 rounded-lg">
                    <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-1">Zone 2: Illusion Gardens</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Mirrors, fake paths, visual tricks</p>
                  </div>
                  <div className="p-3 border-2 border-purple-300 dark:border-purple-700 rounded-lg">
                    <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-1">Zone 3: Void Chambers</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Darkness, limited visibility</p>
                  </div>
                  <div className="p-3 border-2 border-yellow-300 dark:border-yellow-700 rounded-lg">
                    <h4 className="font-bold text-yellow-900 dark:text-yellow-300 mb-1">Zone 4: Nightmare Spire</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Mental attacks, confusion zones</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                6
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Zone 1: Chaos Halls Challenge</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Navigate the shifting gravity by watching for visual cues - floating debris shows the gravity direction. Solve the cardinal door puzzle: activate the four elemental statues (Fire-North, Water-South, Wind-East, Earth-West) to unlock the exit.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #2:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> ATK Chip A - In a gravity-flipped room accessible only by walking on the ceiling.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Zone 2: Illusion Gardens Challenge</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The gardens are filled with mirrors creating fake paths. Use the True Sight ability (given by a friendly Digimon NPC) to reveal the real path. Defeat mini-boss Puppetmon illusion (Lv. 35) to proceed.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #3:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> DEF Chip A - Behind the central fountain, revealed only when using True Sight.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Strategy:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Puppetmon illusion creates copies. Attack the one that casts a shadow - the real one.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Zone 3: Void Chambers Challenge</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Pitch-black chambers where you can only see a few feet ahead. Find and light three Eternal Flames to illuminate the zone. Beware of Machinedramon patrols (Lv. 37) that can see in the dark.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #4:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> SPD Chip A - In the room with the second Eternal Flame, hidden in an alcove.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                9
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Zone 4: Nightmare Spire Challenge</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  A spiraling tower where mental attacks assault you. Equip mental resistance items. Climb while fighting waves of nightmarish enemies. At the top, face mini-boss MetalSeadramon (Lv. 38).
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #5:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Mega HP Recovery x3 - Treasure chest at Nightmare Spire's midpoint rest area.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #6:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Sacred Shield - Dropped by MetalSeadramon. Reduces all magic damage by 25%.</span>
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
            Part 3: Boss Battle - Piedmon
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                10
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Reach the Summit Arena</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  At Spiral Mountain's peak, a grand circus-themed arena awaits. Piedmon appears in a dramatic entrance, juggling magical swords. A cutscene reveals his role as the mastermind behind the Dark Masters.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                11
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Ultimate Preparation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  This is THE hardest boss in the main story. Do not proceed unless you are completely ready.
                </p>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-red-900 dark:text-red-300">CRITICAL Preparation Checklist:</strong>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-1">
                        <li>Team at Level 36+ MINIMUM (Level 38-40 strongly recommended)</li>
                        <li>Stock 15+ Mega HP Recovery items</li>
                        <li>Bring 10+ Mega MP Recovery items</li>
                        <li>Have 5+ Revival Capsules ready</li>
                        <li>Equip Sacred Shield on your strongest attacker</li>
                        <li>Bring INT defense buffs or items</li>
                        <li>ESSENTIAL: Multiple Mega-level Digimon with Holy/Light attacks</li>
                        <li>Recommended team: Seraphimon, Gallantmon, Ophanimon, or similar Holy-types</li>
                        <li>WARNING: Piedmon can REMOVE Digimon from battle - spread your power across the team!</li>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-xl">Piedmon Battle Strategy</h3>

                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-3">
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Level</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">40</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">HP</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">10,000</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Weaknesses</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold rounded">Light</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded">Holy</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Resistances</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold rounded">Dark</span>
                      <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs font-bold rounded">Magic</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Main Attacks</div>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• <strong>Trump Sword:</strong> Magical swords pierce defenses (~250 damage, ignores 50% defense)</li>
                      <li>• <strong>Ending Snipe:</strong> Precise magic with guaranteed critical (~220 base, ~330 critical)</li>
                      <li>• <strong>Clown Trick:</strong> Transforms one Digimon into keychain, removing from battle for 2-3 turns</li>
                      <li>• <strong>Masks Square:</strong> Ultimate magic attack all party (~300 damage, used below 30% HP)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white">Battle Strategy:</h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Phase 1 (100-60% HP):</strong> Piedmon alternates Trump Sword and Ending Snipe. His INT is extremely high, making magic attacks devastating. Keep INT defense buffed if possible. All party members should maintain 60%+ HP because critical hits from Ending Snipe can one-shot lower-level Digimon. Focus on Holy/Light attacks - Seraphimon's Seven Heavens or Gallantmon's Lightning Joust are ideal.</li>
                    <li><strong>Phase 2 (60-30% HP):</strong> Clown Trick enters the rotation - the MOST DANGEROUS mechanic. Piedmon will target your strongest Digimon and transform them into a keychain, removing them from battle temporarily (2-3 turns). This is why you CANNOT rely on a single damage dealer. Strategy:
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li>Spread offensive capability across your entire team</li>
                        <li>Have 2-3 strong attackers, not just one</li>
                        <li>When a Digimon is removed, the others must pick up the slack</li>
                        <li>Continue attacking aggressively - the removed Digimon will return</li>
                        <li>Use this turn to heal others if needed</li>
                      </ul>
                    </li>
                    <li><strong>Phase 3 (30-0% HP):</strong> CRITICAL PHASE. Masks Square becomes available - a devastating AoE that can wipe unprepared teams. Warning signs:
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li>Piedmon will say "Witness my final performance!"</li>
                        <li>You get one turn warning before Masks Square</li>
                        <li>Use that turn to: MAX HEAL everyone (70%+ HP minimum), apply defensive buffs, use Sacred Shield abilities</li>
                        <li>After Masks Square hits, immediately heal again</li>
                        <li>Between Masks Squares, go ALL-OUT offense to end the fight quickly</li>
                        <li>He'll use Clown Trick + Masks Square combo - be ready for chaos</li>
                      </ul>
                    </li>
                    <li><strong>Advanced Tactics:</strong>
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li>Trump Sword ignores defense - HP is more important than DEF here</li>
                        <li>Seraphimon is MVP if you have him (Holy damage + healing)</li>
                        <li>Keep at least one dedicated healer alive at all times</li>
                        <li>Don't hesitate to use Revival Capsules - this fight is about survival</li>
                        <li>If you have Ophanimon, her Eden's Javelin + healing makes her perfect</li>
                        <li>Gallantmon's Royal Saber (Holy) deals massive damage</li>
                        <li>Consider defensive rotation: one turn burst damage, next turn full heal</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded mt-3 mb-3">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Pro Tips:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> If struggling, grind to Level 38-40. This makes a huge difference. Also, make sure your Mega Digimon have their ultimate attacks learned. A balanced team beats a one-trick team here.</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-green-900 dark:text-green-300">Victory Rewards:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Clown Mask, Magic Chip A, Mega Recovery, 5,000 EXP, Achievement: "Master Strategist"</span>
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
            Part 4: Victory and Revelation
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                12
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Piedmon's Defeat</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  As Piedmon falls, Spiral Mountain begins to crumble. The Dark Masters' hold on the Digital World weakens significantly. An epic cutscene shows the mountain collapsing and light returning to the darkened areas.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                13
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">The Time Stranger Revelation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  In Piedmon's chamber, you find the final Ancient Tablet Fragment and a mysterious device. Combining all fragments reveals the complete Time Stranger prophecy - hinting at an even greater threat beyond the Dark Masters.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #7:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Ancient Tablet Fragment #4 (Final) - On Piedmon's throne. Story item.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                14
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Escape and Celebration</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Rush to escape the crumbling mountain. Your allies help clear the path. Return to the base camp where all your friends celebrate the victory over the Dark Masters.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #8:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Champion's Medal - Gift from the resistance leader. Commemorates your victory over the Dark Masters.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                ✓
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Chapter Complete!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Congratulations on defeating Piedmon and the Dark Masters! This marks the end of the main story arc, but the Time Stranger prophecy hints at more adventures ahead.
                </p>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Post-Game Content:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Additional chapters, secret bosses, and the true ending are now available. Check the post-game section for details!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="card p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter 5 Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Key Achievements:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Conquered all five zones of Spiral Mountain</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Defeated numerous elite mini-bosses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Vanquished Piedmon, master of Dark Masters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Uncovered the complete Time Stranger prophecy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Mastered advanced battle tactics</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Collectibles Found:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Magic Chip A (Gate Guardians reward)</li>
                <li>• ATK Chip A (Chaos Halls)</li>
                <li>• DEF Chip A (Illusion Gardens)</li>
                <li>• SPD Chip A (Void Chambers)</li>
                <li>• Mega HP Recovery x3 (Nightmare Spire)</li>
                <li>• Sacred Shield (MetalSeadramon drop)</li>
                <li>• Ancient Tablet Fragment #4 (Final story piece)</li>
                <li>• Champion's Medal (Victory commemoration)</li>
              </ul>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-4">What's Next:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Explore post-game content, face secret bosses, and discover the truth behind the Time Stranger phenomenon in the remaining chapters!
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Bottom */}
        <div className="flex items-center justify-between mt-8">
          <Link
            href="/walkthrough/chapter-4"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous: Chapter 4
          </Link>
          <Link
            href="/walkthrough"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to All Chapters
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
