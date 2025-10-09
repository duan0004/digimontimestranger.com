import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin, Trophy, Star, AlertCircle, CheckCircle2, Lightbulb, Target } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Chapter 7: Ocean Depths - Walkthrough',
  description: 'Complete walkthrough for Chapter 7 of Digimon Time Stranger including all missions, collectibles, and MetalSeadramon boss strategy.',
  path: '/walkthrough/chapter-7',
});

export default function Chapter7Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/walkthrough/chapter-6"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous Chapter
          </Link>
          <Link
            href="/walkthrough/chapter-8"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            Next Chapter
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Header */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
              Chapter 7
            </span>
            <span className="px-3 py-1 bg-red-500 rounded-full text-sm font-bold">
              Hard
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Ocean Depths</h1>
          <div className="flex items-center gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Net Ocean</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Boss: MetalSeadramon</span>
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
            Descend into the mysterious Net Ocean, a vast underwater realm filled with ancient ruins and dangerous aquatic Digimon. This chapter introduces underwater exploration mechanics and environmental puzzles. MetalSeadramon, the third Dark Master, rules these depths with an iron fist. Navigate through sunken temples, treacherous trenches, and bioluminescent caverns as you hunt down this mechanical sea serpent.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Recommended Level</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">45+</div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Average Time</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">4-5 hrs</div>
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
            Part 1: Diving into Net Ocean
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Arrive at the Ocean Shore</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your team reaches the coastline of Net Ocean. A cutscene shows the vast expanse of digital water stretching to the horizon. You receive the Ocean Traversal program, allowing your Digimon to breathe and fight underwater.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter the Shallow Waters</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Dive into the ocean and explore the coral reef area. The water is crystal clear here, and colorful data-fish swim around you.
                </p>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Tip:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Thunder attacks are extremely effective underwater. Water-type Digimon are resistant to most attacks here.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Navigate the Coral Maze</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The coral formations create a natural maze. Follow the current markers (glowing jellyfish) to find the correct path.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Encounters:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Octomon (Lv. 43), Gesomon (Lv. 44), Shellmon (Lv. 44), Dolphmon (Lv. 45)</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Discover the Sunken Temple</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  At the center of the maze lies an ancient temple, partially buried in sand. This structure holds clues to MetalSeadramon's location.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #1:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Ocean Chip - Inside the temple's main chamber, in a treasure chest behind the altar.</span>
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
            Part 2: The Abyssal Trench
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Descend into Darkness</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The temple's floor contains a massive opening leading down into the Abyssal Trench. As you descend, the water becomes darker and colder. Bioluminescent creatures light your way.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Warning:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> The pressure increases at lower depths. Your team takes 50 damage every 30 seconds if not moving. Keep descending!</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Solve the Current Puzzle</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  At the bottom of the trench, you encounter a puzzle involving redirecting water currents. You must activate the correct flow gates to open the path forward.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Northern gate directs flow to Eastern chamber</li>
                  <li>Eastern gate must redirect to Southern chamber</li>
                  <li>Southern gate redirects back to center, opening the seal</li>
                </ul>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mt-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #2:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> HP Chip S - Hidden behind the Northern gate, accessible after solving the puzzle.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Mini-Boss: MarineDevimon</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  As you enter the deep cavern beyond the puzzle, MarineDevimon, one of MetalSeadramon's guardians, ambushes your team.
                </p>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mb-3">
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Level</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">46</div>
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
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold rounded">Holy</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    MarineDevimon uses dark tentacles and can inflict Poison status. Bring antidotes and focus on Light-based attacks. His Dark Deluge hits all party members for moderate damage.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #3:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Dark Essence - Dropped by MarineDevimon. Rare crafting material for dark-element equipment.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 3 */}
        <div className="card p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary-600" />
            Part 3: The Luminous Caverns
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                8
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter the Glowing Caves</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Beyond the trench lies a network of bioluminescent caverns. The walls glow with an eerie blue light, and the water here feels charged with energy. This is MetalSeadramon's territory.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                9
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Navigate the Cavern Network</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The caverns split into multiple paths. You'll need to explore each branch to find key items that unlock the final chamber.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #4:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Thunder Chip A - In the western cavern branch, guarded by two Whamon.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #5:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Mega MP Recovery - Eastern cavern, inside a giant clam shell.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #6:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Speed Chip A - Northern cavern, on a ledge above the water surface.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                10
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Unlock the Throne Chamber</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Once you've collected all three Aqua Keys from the cavern branches, you can unlock the massive sealed door leading to MetalSeadramon's throne room. A save point appears before the entrance.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Pre-Battle Checklist:</strong>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-1">
                        <li>Team at Level 45+ (Level 47+ recommended)</li>
                        <li>Stock 5+ Mega Recoveries and 3 Revival Capsules</li>
                        <li>Equip Thunder/Electric attack chips</li>
                        <li>Have Digimon with Thunder or Plant attacks ready</li>
                        <li>Cure all status effects and restore HP/MP to full</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boss Battle */}
        <div className="card p-6 mb-6 border-2 border-red-300 dark:border-red-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-red-600" />
            Part 4: Boss Battle - MetalSeadramon
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                11
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter the Throne Chamber</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You swim into a colossal underwater chamber. At the center, coiled around a throne made of coral and metal, is MetalSeadramon. The mechanical sea serpent's chrome body reflects the bioluminescent light as it stares you down with glowing red eyes. It rises from its throne, recognizing you as the ones who defeated Machinedramon. The battle begins!
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                B
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-xl">MetalSeadramon Battle Strategy</h3>

                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-3">
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Level</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">48</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">HP</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">13,500</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Attribute</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">Data</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Type</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">Aquatic/Machine</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Weaknesses</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold rounded">Thunder</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded">Plant</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Resistances</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded">Water</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded">Ice</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Main Attacks</div>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• <strong>River of Power:</strong> High-pressure water beam (~280 damage, single target)</li>
                      <li>• <strong>Ultimate Stream:</strong> Spiraling water blast hitting 2-3 targets (~250 damage each)</li>
                      <li>• <strong>Chrome Digizoid Bite:</strong> Mechanical bite attack with high critical chance (~300 damage)</li>
                      <li>• <strong>Poseidon Force:</strong> Ultimate tidal wave attack, hits all enemies (~350 damage to all)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">Phase 1 (100-60% HP):</h4>
                  <div className="pl-4 border-l-2 border-gray-300 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Behavior:</strong> Alternates between River of Power and Ultimate Stream. Moves quickly through the water, repositioning between attacks. Occasionally uses Chrome Digizoid Bite on the highest HP target.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Strategy:</strong> Focus on Thunder and Plant-based attacks - these are significantly more effective than other elements. Avoid using Water or Ice attacks entirely (they heal MetalSeadramon instead!). Maintain party HP above 60%. The bite attack can critical, so watch your tank's HP closely.
                    </p>
                  </div>

                  <h4 className="font-bold text-gray-900 dark:text-white">Phase 2 (60-30% HP):</h4>
                  <div className="pl-4 border-l-2 border-orange-300 dark:border-orange-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Behavior:</strong> Becomes more aggressive. Uses Chrome Digizoid Bite more frequently. Summons Water Vortex traps that deal 100 damage per turn if you're caught in them.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Strategy:</strong> Move your Digimon to avoid water vortex zones (shown by swirling blue indicators). Continue hammering with Thunder attacks. Keep all party members above 50% HP as the damage output increases significantly. Consider using defensive buffs to mitigate damage.
                    </p>
                  </div>

                  <h4 className="font-bold text-gray-900 dark:text-white">Phase 3 (30-0% HP):</h4>
                  <div className="pl-4 border-l-2 border-red-300 dark:border-red-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Behavior:</strong> Enraged state activated. Poseidon Force becomes available - a devastating tidal wave that hits your entire team. Will use this attack every 3-4 turns. Attack speed increases dramatically.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Strategy:</strong> CRITICAL PHASE! All party members need 65%+ HP minimum to survive Poseidon Force. When you see MetalSeadramon charging up (the water starts swirling around it), immediately switch to defensive stance or use protective items. After Poseidon Force hits, heal everyone immediately. Use your strongest Thunder ultimates and special attacks. If you have any Thunder-element Mega Digimon, this is the time to unleash everything!
                    </p>
                    <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded mt-2">
                      <p className="text-sm text-red-900 dark:text-red-300">
                        <strong>Critical Warning:</strong> Never use Water-based healing items or attacks - they will heal MetalSeadramon! Stick to neutral or Thunder-element strategies only.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded mb-3">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Recommended Team:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Thunder-type Mega Digimon like HerculesKabuterimon or MegaKabuterimon. Plant types like Rosemon are also excellent. Avoid all Water-type team members!</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-green-900 dark:text-green-300">Victory Rewards:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Chrome Digizoid Scale, Thunder Chip S, DEF Chip S, 9,500 EXP, 6,000 Bits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Battle */}
        <div className="card p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary-600" />
            Part 5: Rising from the Depths
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                12
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Victory Cutscene</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  MetalSeadramon's massive form goes limp and begins to sink into the abyss. The water around you calms as his control over Net Ocean fades. Your team has defeated the third Dark Master. A current begins pulling you upward toward the surface.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                13
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Return to the Surface</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Ride the current back up through the caverns. The water brightens as you ascend.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #7:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Ocean Pearl - In MetalSeadramon's throne after the battle. Extremely rare accessory that boosts Water resistance by 50%.</span>
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
                  Congratulations on defeating MetalSeadramon! Three Dark Masters have now fallen, with only one remaining. Your team emerges from the ocean and prepares for the next challenge. The path to Cloud Continent and the final Dark Master, Puppetmon, now opens.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="card p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter 7 Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Key Achievements:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Explored Net Ocean depths</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Defeated MarineDevimon mini-boss</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Conquered MetalSeadramon, third Dark Master</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Mastered underwater exploration</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Collectibles Found:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• Ocean Chip (Sunken Temple)</li>
                <li>• HP Chip S (Abyssal Trench)</li>
                <li>• Dark Essence (MarineDevimon drop)</li>
                <li>• Thunder Chip A (Western Cavern)</li>
                <li>• Mega MP Recovery (Eastern Cavern)</li>
                <li>• Speed Chip A (Northern Cavern)</li>
                <li>• Ocean Pearl (Boss chamber)</li>
              </ul>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-4">Next Chapter:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ascend to Cloud Continent to face the final Dark Master, Puppetmon, in Chapter 8.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Bottom */}
        <div className="flex items-center justify-between mt-8">
          <Link
            href="/walkthrough/chapter-6"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous: Chapter 6
          </Link>
          <Link
            href="/walkthrough/chapter-8"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Next: Chapter 8
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
