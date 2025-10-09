import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin, Trophy, Star, AlertCircle, CheckCircle2, Lightbulb, Target } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Chapter 3: Desert Kingdom - Walkthrough',
  description: 'Complete walkthrough for Chapter 3 of Digimon Time Stranger including all missions, collectibles, and Etemon boss strategies.',
  url: '/walkthrough/chapter-3',
});

export default function Chapter3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/walkthrough/chapter-2"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous Chapter
          </Link>
          <Link
            href="/walkthrough/chapter-4"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            Next Chapter
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Header */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-amber-500 to-orange-700 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
              Chapter 3
            </span>
            <span className="px-3 py-1 bg-yellow-500 rounded-full text-sm font-bold">
              Medium
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Desert Kingdom</h1>
          <div className="flex items-center gap-4 text-amber-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Server Desert</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Boss: Etemon</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>7 Collectibles</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The vast Server Desert stretches before you, ruled by the eccentric and powerful Etemon who has enslaved the local Digimon population. Your mission is to cross the treacherous desert, liberate the oppressed settlements, solve ancient pyramid puzzles, and face Etemon in his colosseum. This chapter emphasizes the importance of special attacks over physical ones due to high enemy defenses.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Recommended Level</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">22+</div>
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
            Part 1: Desert Crossing
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter Server Desert</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Cross from Infinity Mountain into the scorching desert. You'll meet a traveling merchant who warns you about Etemon's tyranny.
                </p>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Tip:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Stock up on water supplies from the merchant. They restore HP slowly during exploration and prevent heat exhaustion.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Navigate the Sandstorm Maze</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  A massive sandstorm creates a maze-like area. Use landmarks (broken pillars, cacti formations) to navigate correctly.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Encounters:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Tyrannomon (Lv. 19), Monochromon (Lv. 20), Snimon (Lv. 21), Sandyanmamon (Lv. 22)</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Reach Oasis Village</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The first settlement, Oasis Village, has been occupied by Etemon's forces. Speak with the village elder who is hiding in the well.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #1:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Speed Chip - Hidden in a clay pot in the northwestern house. Break all pots to find it.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Defeat the Occupation Force</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Fight three waves of Etemon's minions (Gazimon troops) to liberate the village. Each wave has 3-4 enemies.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #2:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Water Talisman - Reward from the village elder after liberation. Reduces desert heat damage.</span>
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
            Part 2: The Ancient Pyramids
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Discover the Twin Pyramids</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Two massive pyramids stand in the desert's heart. The elder tells you that three sacred keys are needed to access Etemon's colosseum, hidden within these pyramids.
                </p>
                <div className="grid md:grid-cols-2 gap-3 mt-3">
                  <div className="p-3 border-2 border-blue-300 dark:border-blue-700 rounded-lg">
                    <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-1">Pyramid of Sun</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Fire-based puzzles and enemies</p>
                  </div>
                  <div className="p-3 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg">
                    <h4 className="font-bold text-cyan-900 dark:text-cyan-300 mb-1">Pyramid of Moon</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Water-based puzzles and enemies</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                6
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Pyramid of Sun - Trials</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Enter the sun pyramid first. Solve three trials:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-2">
                  <li><strong>Trial of Flames:</strong> Light four braziers in clockwise order starting from north</li>
                  <li><strong>Trial of Mirrors:</strong> Reflect sunlight to three receptors using moveable mirrors</li>
                  <li><strong>Trial of Combat:</strong> Defeat guardian Meramon (Lv. 23) to claim the Sun Key</li>
                </ul>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #3:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> HP Chip C - In the pyramid's treasure chamber after defeating Meramon.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Pyramid of Moon - Trials</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Now enter the moon pyramid for more challenging puzzles:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-2">
                  <li><strong>Trial of Tides:</strong> Step on floor tiles in pattern matching moon phases (New→Crescent→Half→Full)</li>
                  <li><strong>Trial of Ice:</strong> Push ice blocks to create a path across the frozen chamber</li>
                  <li><strong>Trial of Combat:</strong> Defeat guardian Seadramon (Lv. 24) to claim the Moon Key</li>
                </ul>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #4:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Ice Talisman - Behind the frozen waterfall on the third floor.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Strategy:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Bring Fire-type attacks for Seadramon. The ice puzzle can be reset by exiting and re-entering if you make a mistake.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Find the Hidden Sand Key</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The third key isn't in a pyramid. Return to Oasis Village and speak with the elder again. He reveals a secret underground tunnel beneath the well leading to the Sand Key.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Underground Challenge:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Navigate dark tunnels while avoiding Digmon (Lv. 22) encounters. Defeat mini-boss Tortomon (Lv. 25) for the Sand Key.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #5:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Mega MP Recovery - In a side chamber of the underground tunnel, guarded by two Drimogemon.</span>
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
            Part 3: Boss Battle - Etemon
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                9
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter the Desert Colosseum</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  With all three keys, unlock the massive colosseum gates. Etemon awaits on his concert stage, surrounded by an audience of enslaved Digimon.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                10
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Prepare for Epic Battle</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Save at the colosseum entrance. This is a challenging fight requiring proper preparation.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Preparation Checklist:</strong>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-1">
                        <li>Team at Level 22+ (minimum recommended)</li>
                        <li>Stock 6+ Large HP Recovery items</li>
                        <li>Bring Defense-boosting items or skills</li>
                        <li>Equip Water or Ice-type Digimon (Seadramon, Frigimon ideal)</li>
                        <li>CRITICAL: Bring special attackers - physical attacks are heavily resisted!</li>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-xl">Etemon Battle Strategy</h3>

                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-3">
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Level</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">25</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">HP</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">6,000</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Weaknesses</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded">Water</span>
                      <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-bold rounded">Ice</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Resistances</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 text-xs font-bold rounded">Physical Attacks</span>
                      <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-bold rounded">Earth</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Main Attacks</div>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• <strong>Dark Spirits:</strong> Random target dark energy (~190 damage)</li>
                      <li>• <strong>Monkey Kick:</strong> Physical attack (~210 damage, high accuracy)</li>
                      <li>• <strong>Concert Crush:</strong> Ultimate sound wave hitting all party (~250 damage, used at low HP)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white">Battle Strategy:</h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Phase 1 (100-50% HP):</strong> Etemon alternates Dark Spirits and Monkey Kick. His extremely high defense makes physical attacks nearly useless. Focus exclusively on Water and Ice special attacks. Keep party HP above 50%.</li>
                    <li><strong>Phase 2 (50-0% HP):</strong> Concert Crush becomes available and is devastating. Before he uses it, you'll see a "charging up" animation - use this turn to heal everyone to maximum or apply defensive buffs.</li>
                    <li><strong>Critical Strategy:</strong> Etemon's weakness to Water/Ice is significant. If you have Seadramon with Ice Blast or similar, use it every turn. Special attackers like Birdramon also work well.</li>
                    <li><strong>Defense is Key:</strong> Keep ALL party members above 60% HP minimum. Concert Crush can potentially wipe your team if you're not prepared. Use items liberally - this isn't the fight to conserve resources.</li>
                  </ol>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded mt-3 mb-3">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Pro Tip:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> If you evolved Gabumon to Garurumon (Ice attacks), he's your MVP. Alternatively, recruit Frigimon from earlier areas for ice damage.</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-green-900 dark:text-green-300">Victory Rewards:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Monkey Suit, Speed Chip, HP Chip C, 2,000 EXP</span>
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
            Part 4: Desert Liberation
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                11
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Free the Desert Digimon</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  With Etemon defeated, his control network collapses. All enslaved Digimon in the desert are freed. The colosseum audience celebrates your victory.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                12
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Discover the Network Connection</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Investigating Etemon's control room, you discover he was part of a larger network of evil forces. A map reveals the location of Geko Swamp, your next destination.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div class="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #6:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Ancient Tablet Fragment #2 - Found in Etemon's throne room, continues the prophecy.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Optional: Return to Pyramids</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  With Etemon defeated, previously locked chambers in both pyramids open, containing powerful equipment.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #7:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Desert Crown - In the Sun Pyramid's secret royal chamber. Boosts Special Attack by 15%.</span>
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
                <p className="text-gray-600 dark:text-gray-400">
                  Congratulations on liberating Server Desert! Return to Oasis Village and use the new portal to travel to Geko Swamp for Chapter 4.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="card p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter 3 Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Key Achievements:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Liberated Oasis Village and desert settlements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Conquered Sun and Moon pyramid trials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Defeated the self-proclaimed king Etemon</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Learned importance of special vs physical attacks</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Collectibles Found:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Speed Chip (Oasis Village)</li>
                <li>• Water Talisman (Village Elder reward)</li>
                <li>• HP Chip C (Sun Pyramid)</li>
                <li>• Ice Talisman (Moon Pyramid)</li>
                <li>• Mega MP Recovery (Underground tunnel)</li>
                <li>• Ancient Tablet Fragment #2 (Story item)</li>
                <li>• Desert Crown (Optional - Sun Pyramid secret chamber)</li>
              </ul>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-4">Next Chapter:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Journey to the mysterious Geko Swamp where the vampire lord Myotismon lurks in Chapter 4.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Bottom */}
        <div className="flex items-center justify-between mt-8">
          <Link
            href="/walkthrough/chapter-2"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous: Chapter 2
          </Link>
          <Link
            href="/walkthrough/chapter-4"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Next: Chapter 4
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
