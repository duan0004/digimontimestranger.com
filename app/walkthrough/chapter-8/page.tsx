import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin, Trophy, Star, AlertCircle, CheckCircle2, Lightbulb, Target } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Chapter 8: Sky High Battle - Walkthrough',
  description: 'Complete walkthrough for Chapter 8 of Digimon Time Stranger including all missions, collectibles, and Puppetmon boss strategy.',
  path: '/walkthrough/chapter-8',
});

export default function Chapter8Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/walkthrough/chapter-7"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous Chapter
          </Link>
          <Link
            href="/walkthrough/chapter-9"
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
              Chapter 8
            </span>
            <span className="px-3 py-1 bg-purple-500 rounded-full text-sm font-bold">
              Very Hard
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Sky High Battle</h1>
          <div className="flex items-center gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Cloud Continent</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Boss: Puppetmon</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>10 Collectibles</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Ascend to the floating Cloud Continent, a surreal realm suspended impossibly high above the Digital World. This chapter features vertigo-inducing platforming, aerial combat mechanics, and the most unpredictable boss yet. Puppetmon, the final Dark Master, rules this whimsical yet deadly domain. His forest mansion is filled with deadly traps, animated toys, and mind-bending illusions. This is the hardest chapter before the finale - only the strongest teams will prevail.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Recommended Level</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">48+</div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Average Time</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">5-7 hrs</div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Difficulty</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>

        {/* Walkthrough Sections */}

        {/* Part 1 */}
        <div className="card p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary-600" />
            Part 1: Ascending to the Clouds
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Reach the Sky Tower</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your team arrives at the base of Sky Tower, a massive structure that extends into the clouds. A cutscene reveals Puppetmon watching from above, laughing at your arrival. The tower is the only way to reach Cloud Continent.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Climb the Tower</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The tower interior is a vertical gauntlet of platforms, moving elevators, and wind currents. Time your jumps carefully to avoid falling.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Warning:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Falling deals 500 damage to your entire party and resets you to the last checkpoint. Watch for wind warnings!</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Battle on Floating Platforms</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Halfway up the tower, you emerge onto exterior platforms suspended in the air. Wind-type Digimon attack from all sides.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Encounters:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Airdramon (Lv. 46), Garudamon (Lv. 47), Phoenixmon (Lv. 48), Eaglemon (Lv. 48)</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded mt-2">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Tip:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Wind-type Digimon are weak to Ice attacks but resistant to Fire. Adjust your team accordingly.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Reach Cloud Continent</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  After a grueling climb, you finally step onto Cloud Continent. The ground is made of solid clouds, and the entire landscape is pastel-colored and dreamlike. In the distance, you can see Puppetmon's mansion.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #1:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Wind Chip - At the top of Sky Tower, in a chest near the exit.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #2:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> HP Chip SS - On a hidden platform to the left of the tower exit. Requires precise jumping.</span>
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
            Part 2: The Toy Forest
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter the Whimsical Woods</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Between you and the mansion lies a bizarre forest where the trees are toys, and everything has a childlike, unsettling quality. Puppetmon's influence has warped this area into his personal playground.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                6
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Navigate the Toy Maze</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The forest is a maze of oversized toys and candy-colored trees. The paths shift and change - markers you place will help track where you've been.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #3:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Magic Chip - Hidden inside a giant teddy bear in the northwestern section of the maze.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #4:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Mega Recovery - In a treasure chest at the center of the maze, guarded by two ToyAgumon.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Mini-Boss: MetalEtemon</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  At the maze exit, you encounter MetalEtemon, who has allied with Puppetmon. This upgraded version of Etemon is significantly more dangerous.
                </p>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mb-3">
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Level</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">49</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">HP</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">11,500</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Weaknesses</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded">Water</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold rounded">Magic</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    MetalEtemon has absurd defense. Use special attacks only. His "Banana Slip" can stun your entire party. His ultimate move "Heavy Metal Punch" deals massive damage - keep HP high!
                  </p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #5:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Chrome Metal Coating - Dropped by MetalEtemon. Ultra-rare crafting material.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Cross the Rainbow Bridge</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Beyond the forest lies a rainbow bridge leading to Puppetmon's mansion. It's deceptively peaceful - save your game at the checkpoint here.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #6:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Rainbow Shard - Underneath the bridge, on a cloud platform. Use it to craft prismatic equipment.</span>
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
            Part 3: Puppetmon's Mansion
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                9
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter the Mansion</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The mansion's exterior looks like a giant dollhouse. Inside, it's a twisted funhouse of illusions, trap doors, and animated furniture. Puppetmon's voice echoes through the halls, taunting you.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                10
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Navigate the Mansion Floors</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The mansion has three floors, each with unique challenges:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li><strong>First Floor:</strong> Mirror maze with illusion puzzles</li>
                  <li><strong>Second Floor:</strong> Gravity-defying rooms where walls become floors</li>
                  <li><strong>Third Floor:</strong> Puppet theater with animated toy enemies</li>
                </ul>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mt-2 mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #7:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> ATK Chip SS - First floor, behind a mirror that shows your reflection backwards.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #8:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> DEF Chip SS - Second floor, in an upside-down room's ceiling chest.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #9:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> INT Chip SS - Third floor, given by a friendly Monzaemon if you answer his riddles correctly.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                11
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Reach the Throne Room</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  At the top of the mansion, you find the throne room doors. A final save point is here. Stock up on items from the nearby vending machine.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Pre-Battle Checklist:</strong>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-1">
                        <li>Team at Level 48+ (Level 50+ highly recommended)</li>
                        <li>Stock 7+ Mega Recoveries and 4+ Revival Capsules</li>
                        <li>Equip status resistance accessories (Confusion/Sleep)</li>
                        <li>Bring diverse attack types - Puppetmon is unpredictable</li>
                        <li>Have Holy or Light attacks available</li>
                        <li>Full HP/MP on all party members</li>
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
            Part 4: Boss Battle - Puppetmon
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                12
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter the Throne Room</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The throne room is a massive toy box. Puppetmon sits on a throne made of giant building blocks, his wooden hammer resting beside him. He greets you with childish glee, excited to have new "playmates." But his eyes reveal malice - this is the last Dark Master, and he knows what's at stake. The battle begins with Puppetmon laughing maniacally!
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                B
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-xl">Puppetmon Battle Strategy</h3>

                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-3">
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Level</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">50</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">HP</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">15,000</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Attribute</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">Virus</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Type</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">Wizard/Puppet</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Weaknesses</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold rounded">Light</span>
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-bold rounded">Fire</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Resistances</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold rounded">Dark</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded">Wood</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Main Attacks</div>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• <strong>Flying Cross Cutter:</strong> Razor boomerang attack (~270 damage, hits 1-2 targets)</li>
                      <li>• <strong>Puppet Pummel:</strong> Summons puppet minions to attack (~250 damage to all)</li>
                      <li>• <strong>Trick or Treat:</strong> Inflicts random status effect (Confusion, Sleep, or Poison)</li>
                      <li>• <strong>Ending Snipe:</strong> Guaranteed critical hit sniper attack (~400 damage)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">Phase 1 (100-70% HP):</h4>
                  <div className="pl-4 border-l-2 border-gray-300 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Behavior:</strong> Playful but deadly. Uses Flying Cross Cutter frequently, alternating with Puppet Pummel. Moves erratically around the arena. Occasionally uses Trick or Treat to disrupt your strategy.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Strategy:</strong> Focus on Light and Fire attacks. Keep status cure items ready - Confusion is especially dangerous as confused allies attack each other. Maintain HP above 60%. Target Puppetmon consistently as he teleports around the battlefield. Don't waste time attacking his puppet summons - they respawn endlessly.
                    </p>
                  </div>

                  <h4 className="font-bold text-gray-900 dark:text-white">Phase 2 (70-40% HP):</h4>
                  <div className="pl-4 border-l-2 border-orange-300 dark:border-orange-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Behavior:</strong> Becomes frustrated and more aggressive. Starts using Ending Snipe more frequently. Puppet Pummel now summons stronger puppets that can attack independently. Trick or Treat affects 2 targets instead of 1.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Strategy:</strong> This phase is about survival and resource management. Ending Snipe WILL kill whoever it targets if they're below 70% HP - prioritize keeping everyone's HP high. When you see him aim his slingshot (Ending Snipe animation), immediately guard or use a defensive item on the targeted Digimon. Continue hammering with Light/Fire attacks. Clear status effects immediately.
                    </p>
                  </div>

                  <h4 className="font-bold text-gray-900 dark:text-white">Phase 3 (40-0% HP):</h4>
                  <div className="pl-4 border-l-2 border-red-300 dark:border-red-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Behavior:</strong> RAGE MODE. Puppetmon stops playing around. All attack damage increases by 50%. Uses Ending Snipe every 2-3 turns. Summons an army of puppets that won't disappear. The arena itself becomes hazardous with random toy attacks from the environment.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Strategy:</strong> THE ULTIMATE TEST! This is one of the hardest boss phases in the game. ALL party members need 75%+ HP at all times. Environmental attacks are random - you can't predict them. Focus EVERYTHING on Puppetmon - ignore the puppet army entirely. Use your absolute strongest attacks and ultimate skills. Don't be conservative with items - use Mega Recoveries liberally. If anyone falls, revive them IMMEDIATELY. The puppet army will overwhelm you if your damage dealers are down.
                    </p>
                    <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded mt-2">
                      <p className="text-sm text-red-900 dark:text-red-300">
                        <strong>Critical Warning:</strong> In Phase 3, Puppetmon can chain Ending Snipe + Environmental Attack on the same target, potentially killing them in one turn. Always keep Revival Capsules ready!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded mb-3">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Recommended Team:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Seraphimon (Holy/Light), MagnaAngemon (Light support), Phoenixmon (Fire + revival ability), or any Mega-level Digimon with Light/Fire ultimate attacks. Status resistance accessories are ESSENTIAL.</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-green-900 dark:text-green-300">Victory Rewards:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Puppet Parts, Magic Chip SS, Holy Chip A, 12,000 EXP, 8,000 Bits</span>
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
            Part 5: The Last Dark Master Falls
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                13
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Victory Cutscene</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Puppetmon collapses, his wooden body cracking. His playful demeanor fades as he realizes his defeat. The mansion begins to dissolve around you, the illusions fading. All four Dark Masters have been defeated. A longer cutscene plays, revealing that the true enemy is about to awaken...
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                14
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">The Dark Area Opens</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  With all four Dark Masters defeated, a rift in reality opens. The Dark Area - the realm of deleted data and the source of all chaos - is now accessible. This is where the final enemy awaits.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #10:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Wooden Crown - Puppetmon's crown, found in his throne after the battle. Legendary accessory that grants immunity to status effects.</span>
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
                  Congratulations on defeating Puppetmon and completing the Dark Masters saga! All four have fallen. But your journey isn't over - the true final boss awaits in the Dark Area. Prepare your team, stock up on supplies, and steel yourself for the ultimate battle in Chapter 9: The Final Battle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="card p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter 8 Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Key Achievements:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Ascended to Cloud Continent</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Defeated MetalEtemon mini-boss</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Conquered Puppetmon, final Dark Master</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Unlocked the Dark Area</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Collectibles Found:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• Wind Chip (Sky Tower top)</li>
                <li>• HP Chip SS (Tower exit)</li>
                <li>• Magic Chip (Toy Forest)</li>
                <li>• Mega Recovery (Maze center)</li>
                <li>• Chrome Metal Coating (MetalEtemon)</li>
                <li>• Rainbow Shard (Rainbow Bridge)</li>
                <li>• ATK Chip SS (Mansion 1F)</li>
                <li>• DEF Chip SS (Mansion 2F)</li>
                <li>• INT Chip SS (Mansion 3F)</li>
                <li>• Wooden Crown (Boss chamber)</li>
              </ul>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-4">Next Chapter:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Enter the Dark Area for the ultimate confrontation with Apocalymon in Chapter 9.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Bottom */}
        <div className="flex items-center justify-between mt-8">
          <Link
            href="/walkthrough/chapter-7"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous: Chapter 7
          </Link>
          <Link
            href="/walkthrough/chapter-9"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Final Chapter
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
