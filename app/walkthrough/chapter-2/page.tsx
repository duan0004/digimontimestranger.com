import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin, Trophy, Star, AlertCircle, CheckCircle2, Lightbulb, Target } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Chapter 2: Dark Shadows - Walkthrough',
  description: 'Complete walkthrough for Chapter 2 of Digimon Time Stranger including all missions, collectibles, and Devimon boss strategies.',
  path: '/walkthrough/chapter-2',
});

export default function Chapter2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/walkthrough/chapter-1"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous Chapter
          </Link>
          <Link
            href="/walkthrough/chapter-3"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            Next Chapter
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Header */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
              Chapter 2
            </span>
            <span className="px-3 py-1 bg-green-500 rounded-full text-sm font-bold">
              Easy
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Dark Shadows</h1>
          <div className="flex items-center gap-4 text-purple-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Infinity Mountain</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Boss: Devimon</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>5 Collectibles</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Dark forces gather at Infinity Mountain where the fallen angel Devimon has been corrupting Digimon with his Dark Rings. Your mission is to ascend the treacherous mountain paths, free the corrupted Digimon, and confront Devimon in his fortress. This chapter introduces status effects and the importance of type advantages against Virus-type enemies.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Recommended Level</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Average Time</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">3-4 hrs</div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Difficulty</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">⭐⭐</div>
            </div>
          </div>
        </div>

        {/* Walkthrough Sections */}

        {/* Part 1 */}
        <div className="card p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary-600" />
            Part 1: Journey to Infinity Mountain
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Receive Mission from Elder</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The Village Elder warns you about dark energy emanating from Infinity Mountain. Accept the mission to investigate the source of corruption.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Travel North Through Dark Forest</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Navigate through the shadowy forest path leading to the mountain. Watch out for ambushes from corrupted Digimon.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Encounters:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> DemiDevimon (Lv. 12), Bakemon (Lv. 13), Dokugumon (Lv. 14)</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Encounter Corrupted Leomon</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  At the forest's edge, you'll find Leomon under the influence of a Dark Ring. This is a scripted mini-boss encounter.
                </p>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Strategy:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Leomon is weakened by the Dark Ring. Defeat him quickly to break the ring and free him. He'll join your cause afterward.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Reach Mountain Base Camp</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  After freeing Leomon, arrive at the base camp where refugee Digimon have gathered. Stock up on supplies here.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #1:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Defense Chip - Talk to the merchant Digimon and complete his fetch quest to receive this chip.</span>
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
            Part 2: Ascending Infinity Mountain
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Navigate the Mountain Paths</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  The mountain has three distinct paths - left (easy), center (medium), and right (hard). Each offers different rewards and encounters.
                </p>
                <div className="grid md:grid-cols-3 gap-3 mt-3">
                  <div className="p-3 border-2 border-green-300 dark:border-green-700 rounded-lg">
                    <h4 className="font-bold text-green-900 dark:text-green-300 mb-1">Left Path</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Easier battles, fewer items</p>
                  </div>
                  <div className="p-3 border-2 border-yellow-300 dark:border-yellow-700 rounded-lg">
                    <h4 className="font-bold text-yellow-900 dark:text-yellow-300 mb-1">Center Path</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Balanced difficulty, puzzles</p>
                  </div>
                  <div className="p-3 border-2 border-red-300 dark:border-red-700 rounded-lg">
                    <h4 className="font-bold text-red-900 dark:text-red-300 mb-1">Right Path</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Tough fights, best rewards</p>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded mt-3">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Recommendation:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Take the center path for a balance of experience and collectibles. The right path is only recommended if your team is level 16+.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Solve the Dark Crystal Puzzle</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  At the halfway point, you'll encounter five Dark Crystals blocking your path. You must destroy them in the correct order based on the ancient inscription nearby.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Puzzle Solution:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Destroy crystals in this order: Purple → Red → Blue → Green → Black. Wrong order triggers enemy ambush.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Clear the Corrupted Guardians</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Three guardian Digimon (Ogremon, Fugamon, and Hyogamon) block the path to Devimon's fortress. Defeat all three in consecutive battles.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #2:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> HP Chip B - Dropped by Ogremon after defeating him.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #3:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Large MP Recovery - Hidden treasure chest behind the frozen waterfall near Hyogamon's position.</span>
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
            Part 3: Boss Battle - Devimon
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                8
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter Devimon's Fortress</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The dark fortress awaits at the mountain peak. Inside, you'll witness a cutscene revealing Devimon's plans to corrupt the Digital World.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                9
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Prepare for Boss Battle</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Save at the shrine before the throne room. Stock up on Antidote items for Confusion status.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Preparation Checklist:</strong>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-1">
                        <li>Team at Level 15+ (recommended)</li>
                        <li>Stock 5+ Antidote/Clarity items for Confusion</li>
                        <li>Bring 3-4 Large HP Recovery items</li>
                        <li>Equip Vaccine-type Digimon if available</li>
                        <li>Light-element attacks are highly effective</li>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-xl">Devimon Battle Strategy</h3>

                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-3">
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Level</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">18</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">HP</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">4,500</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Weaknesses</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded">Vaccine</span>
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold rounded">Light</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Main Attacks</div>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• <strong>Death Claw:</strong> Physical dark attack (~180 damage)</li>
                      <li>• <strong>Evil Wing:</strong> Dark projectiles hitting all party (~200 damage)</li>
                      <li>• <strong>Touch of Evil:</strong> Inflicts Confusion status</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white">Battle Strategy:</h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Phase 1 (100-60% HP):</strong> Devimon alternates Death Claw and Evil Wing. Keep all party members above 50% HP. Use Light-type attacks for maximum damage.</li>
                    <li><strong>Phase 2 (60-30% HP):</strong> Touch of Evil becomes frequent. Immediately cure Confusion with Antidote items - confused allies attack their own team!</li>
                    <li><strong>Phase 3 (30-0% HP):</strong> Evil Wing spam begins. Heal after every Evil Wing. Use your strongest Vaccine and Light attacks to finish quickly.</li>
                    <li><strong>Key Strategy:</strong> Angemon or any Light-type Digimon are MVP here. If you have evolved Agumon to Greymon, use him as your tank.</li>
                  </ol>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded mt-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-green-900 dark:text-green-300">Victory Rewards:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Dark Ring, HP Chip B, Defense Chip, 1,200 EXP</span>
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
            Part 4: Liberation and Discovery
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                10
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Free the Corrupted Digimon</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  After defeating Devimon, his Dark Rings shatter. All corrupted Digimon on the mountain are freed and return to normal. Leomon thanks you for your help.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                11
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Discover the Ancient Prophecy</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  In Devimon's throne room, you find an ancient tablet describing the Time Stranger phenomenon and hint at a greater threat.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #4:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Ancient Tablet Fragment - Found on the throne. This is a key item for the story.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Optional: Explore the Secret Chamber</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Behind the throne, a hidden passage opens. This optional area contains tough enemies but valuable rewards.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #5:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Evolution Crystal - In the secret chamber's treasure room. Requires defeating the mini-boss SkullGreymon (Level 20).</span>
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
                  Congratulations on liberating Infinity Mountain! Return to base camp and speak to Leomon to unlock travel to Server Desert for Chapter 3.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="card p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter 2 Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Key Achievements:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Freed corrupted Leomon and guardians</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Defeated Champion-level boss Devimon</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Discovered Ancient Tablet Fragment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Learned about status effect management</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Collectibles Found:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Defense Chip (Base Camp)</li>
                <li>• HP Chip B (Ogremon drop)</li>
                <li>• Large MP Recovery (Hidden chest)</li>
                <li>• Ancient Tablet Fragment (Story item)</li>
                <li>• Evolution Crystal (Optional - Secret Chamber)</li>
              </ul>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-4">Next Chapter:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Journey to Server Desert where the self-proclaimed king Etemon awaits in Chapter 3.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Bottom */}
        <div className="flex items-center justify-between mt-8">
          <Link
            href="/walkthrough/chapter-1"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous: Chapter 1
          </Link>
          <Link
            href="/walkthrough/chapter-3"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Next: Chapter 3
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
