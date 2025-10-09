import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { ChevronLeft, Home, MapPin, Trophy, Star, AlertCircle, CheckCircle2, Lightbulb, Target, Skull, Zap } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Chapter 9: The Final Battle - Walkthrough',
  description: 'Complete walkthrough for the final chapter of Digimon Time Stranger including all missions, collectibles, and the epic Apocalymon boss battle.',
  path: '/walkthrough/chapter-9',
});

export default function Chapter9Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/walkthrough/chapter-8"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous Chapter
          </Link>
          <Link
            href="/walkthrough"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <Home className="w-5 h-5" />
            All Chapters
          </Link>
        </div>

        {/* Header */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-red-600 via-purple-600 to-black text-white border-2 border-yellow-400">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
              FINAL CHAPTER
            </span>
            <span className="px-3 py-1 bg-red-600 rounded-full text-sm font-bold animate-pulse">
              EXTREME
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">The Final Battle</h1>
          <div className="flex items-center gap-4 text-yellow-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Dark Area</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Boss: Apocalymon</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>12 Collectibles</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="card p-6 mb-8 border-2 border-red-200 dark:border-red-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Final Chapter Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            This is it - the culmination of your entire journey. The Dark Area beckons, a realm of pure chaos where deleted data takes form. Here dwells Apocalymon, an entity born from the accumulated despair of all deleted Digimon throughout history. This ancient being seeks to erase the Digital World entirely. With the four Dark Masters defeated, only you stand between Apocalymon and total annihilation. This chapter is the ultimate test of everything you've learned. Prepare for emotional farewells, intense battles, and a multi-phase boss fight that will push you to your absolute limits.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Recommended Level</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Average Time</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">6-8 hrs</div>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Difficulty</div>
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">⭐⭐⭐⭐⭐+</div>
            </div>
          </div>
        </div>

        {/* Walkthrough Sections */}

        {/* Part 1 */}
        <div className="card p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary-600" />
            Part 1: Into the Darkness
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">The Moment of Truth</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  An extended cutscene plays. Your team gathers at the rift to the Dark Area. Each of your partner Digimon speaks about the journey you've shared, the battles you've won, and their faith in you. It's an emotional moment - the game acknowledges how far you've come. Your team leader gives a rousing speech, and together, you step through the rift into darkness.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Arrive in the Dark Area</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  You emerge into a nightmarish landscape. The sky is a swirling vortex of red and black. The ground is made of fragmented data, constantly shifting and reforming. Ghostly shapes of deleted Digimon float past, their mournful cries echoing through the void.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Environmental Hazard:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> The Dark Area drains 100 HP from your entire party every minute. Keep moving forward to minimize damage!</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Navigate the Deletion Fields</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The first area is a wasteland of corrupted data. You must navigate through fields of deletion code that can instantly remove your Digimon from battle if touched.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Encounters:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> SkullGreymon (Lv. 49), MetalPhantomon (Lv. 50), Piedmon (Lv. 51), Daemon (Lv. 52)</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mt-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #1:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Dark Chip - In the northwest corner of the deletion fields, on a stable data platform.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Cross the Bridge of Memories</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  A bridge made of crystallized memories spans a bottomless chasm. As you cross, you see visions of your past battles - Kuwagamon, Devimon, all the way to Puppetmon. These memories strengthen your resolve.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #2:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Memory Fragment - Midway across the bridge. Grants permanent +50 HP to all Digimon when used.</span>
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
            Part 2: The Trials of Despair
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter the Trial Chambers</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Beyond the bridge lies a series of chambers where you must face your greatest fears. Each chamber tests a different aspect of your team - strength, wisdom, courage, and bonds.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                6
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Trial of Strength</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Face shadow versions of the four Dark Masters simultaneously in a gauntlet battle. You can heal between each fight, but the battles come in rapid succession.
                </p>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Tip:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> The shadow bosses have 50% HP of their original forms. Use the same strategies that worked before, but pace your items - you need resources for later!</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mt-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #3:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> ATK Chip MAX - Reward for completing the Trial of Strength.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Trial of Wisdom</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Solve a complex puzzle involving data streams and encryption keys. The puzzle changes based on your previous choices throughout the game.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #4:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> INT Chip MAX - Reward for completing the Trial of Wisdom.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Trial of Courage</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Walk through a corridor of your greatest failures - every time you fell in battle, every companion you lost. Apocalymon's voice whispers doubts. You must resist the despair.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #5:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> DEF Chip MAX - Reward for completing the Trial of Courage.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #6:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Courage Emblem - Hidden in the trial chamber. Secret collectible that appears if you never fled from battle during your playthrough.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Trial of Bonds</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The final trial. Your Digimon are separated from you, and you must call out to them. Their response depends on how much you've used them throughout your journey. A touching cutscene shows each partner Digimon breaking through the darkness to return to your side.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #7:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> SPD Chip MAX - Reward for completing the Trial of Bonds.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #8:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Bond Crystal - Appears during the trial. Allows one Digimon to revive automatically once during the final battle.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 3 */}
        <div className="card p-6 mb-6 border-2 border-purple-300 dark:border-purple-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary-600" />
            Part 3: The World's End
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                10
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Reach the Heart of Darkness</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Having passed all trials, you arrive at the center of the Dark Area. A massive floating platform suspended in the void. In the distance, you see it - Apocalymon's form, a grotesque sphere covered in twisted, pulsating cables and claws.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                11
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Final Preparations</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  A save point appears - the last one in the game. There's also a mysterious shop run by a ghostly Digimon who offers ultimate items at steep prices.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #9:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Ultimate Recovery - Can be purchased from the ghost shop for 10,000 Bits. Fully heals all HP/MP.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #10:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Phoenix Feather - Can be purchased for 15,000 Bits. Auto-revives entire party once per battle.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #11:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Infinity Chip - Can be purchased for 20,000 Bits. Boosts all stats by 20%.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                12
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Team Preparation Checklist</h3>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
                  <div className="flex items-start gap-2">
                    <Skull className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-red-900 dark:text-red-300">CRITICAL - Final Boss Preparation:</strong>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                        <li>Team MUST be Level 50+ (Level 53+ strongly recommended)</li>
                        <li>Stock 10+ Ultimate/Mega Recoveries</li>
                        <li>Stock 5+ Phoenix Feathers or Revival Capsules</li>
                        <li>Equip your absolute best stat chips and accessories</li>
                        <li>Bring 6 Digimon with diverse attack types (Holy, Fire, Water, Thunder, etc.)</li>
                        <li>Ensure all Digimon have learned their ultimate skills</li>
                        <li>Have status cure items (Apocalymon uses all status effects)</li>
                        <li>Consider equipping Bond Crystal from Trial of Bonds</li>
                        <li>Save multiple times - this is the point of no return</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Boss Battle */}
        <div className="card p-6 mb-6 border-4 border-red-500 dark:border-red-700 bg-gradient-to-br from-red-50 to-purple-50 dark:from-red-900/20 dark:to-purple-900/20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Skull className="w-8 h-8 text-red-600" />
            THE FINAL BATTLE - APOCALYMON
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                13
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">The Final Confrontation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You approach Apocalymon's form. A booming voice echoes: "I am the accumulation of all the Digimon who were deleted, who disappeared without a trace. I am their anger, their sorrow, their despair made manifest. If I cannot exist, then NOTHING will exist!"
                  <br /><br />
                  Your team responds with determination. This is it - the fate of the Digital World rests on this battle. Apocalymon transforms, revealing its true form - a nightmarish entity of chaos and destruction. The final battle begins!
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-2xl">Apocalymon Multi-Phase Battle</h3>

                <div className="bg-gradient-to-br from-red-100 to-purple-100 dark:from-red-900/30 dark:to-purple-900/30 p-4 rounded-lg mb-4 border-2 border-red-300 dark:border-red-700">
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Level</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">55</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Total HP</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">20,000</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Attribute</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">Unknown</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Type</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">Unidentified</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Weaknesses</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold rounded">Holy (Slightly Effective)</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Resistances</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 text-xs font-bold rounded">All Elements (Moderate)</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Ultimate Attacks</div>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• <strong>Grand Death Big Bang:</strong> Massive chaos explosion (~400 damage to all)</li>
                      <li>• <strong>Total Annihilation:</strong> Attempts to delete all targets (~350 damage to all, 30% instant death chance)</li>
                      <li>• <strong>Darkness Zone:</strong> Reduces all stats by 30% for 5 turns</li>
                      <li>• <strong>Ultimate Stream:</strong> Multi-hit energy barrage (~300 damage, random targets, 3-5 hits)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 mb-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-red-400 dark:border-red-600">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2 flex items-center gap-2">
                      <span className="px-2 py-1 bg-red-500 text-white rounded">PHASE 1</span>
                      100-75% HP: The Testing Phase
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Behavior:</strong> Apocalymon tests your strength. Uses Ultimate Stream and Total Annihilation alternately. Movement is slow but attacks hit hard. Will occasionally cast Darkness Zone to weaken your team.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Strategy:</strong> This is your warm-up phase. Learn the attack patterns and timing. Deal steady damage using your strongest attacks - don't hold back, but don't burn through all your items either. When Darkness Zone is cast, immediately use stat-boosting items or abilities to counteract it. Keep all party members above 70% HP. Use Holy attacks when available - they're slightly more effective than other elements.
                    </p>
                    <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm text-yellow-900 dark:text-yellow-300">
                      <strong>Key Tip:</strong> Total Annihilation's instant death effect can be resisted with high SPD stats. Keep your fastest Digimon healthy!
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-orange-400 dark:border-orange-600">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2 flex items-center gap-2">
                      <span className="px-2 py-1 bg-orange-500 text-white rounded">PHASE 2</span>
                      75-50% HP: The Darkness Intensifies
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Behavior:</strong> Apocalymon's form shifts, revealing more of its chaotic core. Attack frequency increases by 50%. Darkness Zone becomes a permanent debuff until you use special purification items or abilities. Starts chaining Ultimate Stream with other attacks.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Strategy:</strong> Resource management becomes critical here. The permanent Darkness Zone debuff means your stats are constantly reduced - you MUST use boosting items or have support Digimon cast buffs every few turns. Healing becomes paramount - keep everyone above 65% HP minimum. If you have Digimon with Holy Shield or Light Barrier abilities, use them to reduce damage from Grand Death Big Bang. Continue focusing fire on Apocalymon - spread attacks across your team to maintain damage even if someone gets taken out.
                    </p>
                    <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded text-sm text-orange-900 dark:text-orange-300">
                      <strong>Warning:</strong> Grand Death Big Bang starts appearing in this phase. Make sure ALL party members have 60%+ HP before each turn!
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-purple-400 dark:border-purple-600">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2 flex items-center gap-2">
                      <span className="px-2 py-1 bg-purple-500 text-white rounded">PHASE 3</span>
                      50-25% HP: Desperation and Fury
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Behavior:</strong> Apocalymon enters a berserk state. All attacks now deal 30% more damage. Uses Grand Death Big Bang every 3 turns. Ultimate Stream can hit 5-7 times instead of 3-5. Summons shadow clones of deleted Digimon to attack alongside it. The instant death chance on Total Annihilation increases to 50%.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Strategy:</strong> THIS IS THE BREAKING POINT. Many teams will fall here. You need to maintain 70%+ HP on ALL party members at all times. Use Ultimate/Mega Recovery items liberally - don't be stingy. If someone falls, revive them IMMEDIATELY - being down a party member here means almost certain defeat. Focus on survival first, damage second. Use defensive buffs before Grand Death Big Bang. The shadow clones can be ignored - they disappear after 2 turns or when Apocalymon takes enough damage. If you have the Bond Crystal equipped, this is when its auto-revive will save you.
                    </p>
                    <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded text-sm text-purple-900 dark:text-purple-300">
                      <strong>Critical:</strong> If your entire party gets wiped, Phoenix Feather will auto-revive everyone once. After that, it's game over!
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border-4 border-red-600 dark:border-red-800">
                    <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-2 flex items-center gap-2">
                      <span className="px-2 py-1 bg-red-600 text-white rounded animate-pulse">FINAL PHASE</span>
                      25-0% HP: THE END OF ALL THINGS
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Behavior:</strong> Apocalymon's true power unleashes. The battlefield cracks and fragments. Reality itself begins to break down. All previous attacks are now enhanced to their maximum potential. Introduces "Deletion Wave" - a new attack that can remove Digimon from battle for 3 turns. Uses Grand Death Big Bang AND Total Annihilation in combination. The instant death chance is now 70%.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Strategy:</strong> THE ULTIMATE CHALLENGE. This is peak difficulty. You need to deal maximum damage while maintaining perfect defense. Rotation is key - when Deletion Wave removes a Digimon, immediately switch in a reserve if you have one. ALL party members need 80%+ HP at all times. Use your strongest Ultimate abilities on cooldown. If you've been conserving your most powerful attacks or items, NOW is the time. Don't hold anything back.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      When Apocalymon reaches 10% HP, a cutscene triggers. Your Digimon gather their remaining strength. All your partner Digimon simultaneously mega-evolve (or power up if already Mega), their bonds with you granting them ultimate power. You gain a temporary "Miracle Mode" buff: +50% to all stats and attacks for 5 turns.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>THE FINAL PUSH:</strong> With Miracle Mode active, unleash EVERYTHING. Use every ultimate attack, every buff, every last ounce of power. Apocalymon will spam Grand Death Big Bang trying to take you down, but with your boosted stats and determination, you can withstand it. Keep attacking relentlessly. The music swells, your team's bond is stronger than ever, and with one final, united attack... Apocalymon falls!
                    </p>
                    <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded border-2 border-red-400 dark:border-red-700">
                      <p className="text-red-900 dark:text-red-300 font-bold text-center">
                        "This is it... the moment we've been fighting for. Let's end this together!"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded mb-3">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Recommended Final Team:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Your strongest 6 Mega-level Digimon. Prioritize those with Holy attacks: WarGreymon, MetalGarurumon, Phoenixmon, Seraphimon, Ophanimon, Imperialdramon. Ensure diverse attack coverage and at least 2 with healing or support abilities.</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-green-900 dark:text-green-300">Victory Rewards:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Chaos Shard, Supreme Chip, Legend Medal, 50,000 EXP, 25,000 Bits, Master Rank Title, New Game+ Unlocked</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ending */}
        <div className="card p-6 mb-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-2 border-yellow-400 dark:border-yellow-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            Epilogue: A New Beginning
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">
                14
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">The Final Cutscene</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Apocalymon disintegrates into streams of light, the data returning to the Digital World to be reborn. The Dark Area begins to collapse. Your team escapes just in time, emerging back in the Digital World. A long, emotional cutscene plays showing the aftermath of your victory. The Digital World is safe. Each of your partner Digimon says their farewells, promising to always be with you in spirit. The credits roll over scenes of the Digital World being rebuilt, now at peace.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">
                15
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Post-Credits Scene</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  After the credits, one final scene plays: You're back in the real world, but you still carry the Digivice. It glows faintly, and you hear the voices of your partners. The adventure may be over, but the bonds you formed will last forever. The screen fades to black with the message: "Thank you for playing. The Digital World will always need heroes like you."
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #12:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> True Hero's Medal - Automatically added to your inventory after beating Apocalymon. Proof of your ultimate victory.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Game Complete!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Congratulations! You've completed Digimon Time Stranger! You can now access New Game+ mode with special bonuses, extra content, and harder difficulty options. Thank you for this incredible journey!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="card p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-yellow-900/20 border-4 border-purple-400 dark:border-purple-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Final Chapter Complete - Journey's End
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Epic Achievements:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Conquered the Dark Area</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Passed all Four Trials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Defeated Apocalymon - The Ultimate Evil</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Saved the Digital World</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Completed the Ultimate RPG Journey</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">All Collectibles:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• Dark Chip (Deletion Fields)</li>
                <li>• Memory Fragment (Bridge of Memories)</li>
                <li>• ATK Chip MAX (Trial of Strength)</li>
                <li>• INT Chip MAX (Trial of Wisdom)</li>
                <li>• DEF Chip MAX (Trial of Courage)</li>
                <li>• Courage Emblem (Hidden Trial Reward)</li>
                <li>• SPD Chip MAX (Trial of Bonds)</li>
                <li>• Bond Crystal (Trial of Bonds)</li>
                <li>• Ultimate Recovery (Ghost Shop)</li>
                <li>• Phoenix Feather (Ghost Shop)</li>
                <li>• Infinity Chip (Ghost Shop)</li>
                <li>• True Hero's Medal (Victory Reward)</li>
              </ul>
              <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Unlocked Content:</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  New Game+ Mode, Master Rank Title, Bonus Dungeons, Secret Digimon Evolutions, Developer Commentary Mode
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/40 dark:to-pink-900/40 rounded-lg text-center">
            <p className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Thank you for completing this walkthrough!
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              You've experienced one of the most epic adventures in the Digital World. Your bond with your Digimon partners will last forever. Until we meet again, brave Tamer!
            </p>
          </div>
        </div>

        {/* Navigation Bottom */}
        <div className="flex items-center justify-between mt-8">
          <Link
            href="/walkthrough/chapter-8"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous: Chapter 8
          </Link>
          <Link
            href="/walkthrough"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Return to All Chapters
          </Link>
        </div>
      </div>
    </div>
  );
}
