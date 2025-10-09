import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin, Trophy, Star, AlertCircle, CheckCircle2, Lightbulb, Target } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Chapter 1: The Beginning - Walkthrough',
  description: 'Complete walkthrough for Chapter 1 of Digimon Time Stranger including all missions, collectibles, and boss strategies.',
  path: '/walkthrough/chapter-1',
});

export default function Chapter1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/walkthrough"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <ChevronLeft className="w-5 h-5" />
            All Chapters
          </Link>
          <Link
            href="/walkthrough/chapter-2"
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
              Chapter 1
            </span>
            <span className="px-3 py-1 bg-green-500 rounded-full text-sm font-bold">
              Easy
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">The Beginning</h1>
          <div className="flex items-center gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>File Island</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Boss: Kuwagamon</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>3 Collectibles</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Your adventure begins on File Island, where you'll learn the basics of the Digital World. This tutorial chapter introduces core mechanics including battling, evolution, and team management. You'll meet your first partner Digimon and face your first real challenge against Kuwagamon.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Recommended Level</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8+</div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Average Time</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">2-3 hrs</div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Difficulty</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">⭐</div>
            </div>
          </div>
        </div>

        {/* Walkthrough Sections */}

        {/* Part 1 */}
        <div className="card p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary-600" />
            Part 1: Arrival on File Island
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Watch the Opening Cutscene</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The story begins with your character being transported to the Digital World. Pay attention to the dialogue as it sets up the main plot.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Meet Agumon</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  After the cutscene, you'll meet Agumon who will become your first partner. This is a scripted encounter.
                </p>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Tip:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Agumon will be your main damage dealer early on. Focus on leveling him first.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Tutorial Battle: Wild Numemon</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Your first battle! Follow the on-screen prompts to learn basic combat mechanics.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Learn how to use basic attacks</li>
                  <li>Practice using skills (Agumon's Pepper Breath)</li>
                  <li>Understand turn order and speed stats</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Explore the Starting Area</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  After the battle, you're free to explore the immediate area.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #1:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> HP Chip A - Behind the large rock formation near the starting point.</span>
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
            Part 2: Journey to Village of Beginnings
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Head West to the Village</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Follow the path westward. You'll encounter wild Digimon along the way.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Encounters:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Koromon (Lv. 3), Tsunomon (Lv. 3), Tanemon (Lv. 4)</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Recruit Your Second Partner</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  At the fork in the road, you'll have a choice between three Digimon. This is your first major decision!
                </p>
                <div className="grid md:grid-cols-3 gap-3 mt-3">
                  <div className="p-3 border-2 border-blue-300 dark:border-blue-700 rounded-lg">
                    <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-1">Gabumon</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Ice attacks, high defense</p>
                  </div>
                  <div className="p-3 border-2 border-green-300 dark:border-green-700 rounded-lg">
                    <h4 className="font-bold text-green-900 dark:text-green-300 mb-1">Terriermon</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Wind attacks, high speed</p>
                  </div>
                  <div className="p-3 border-2 border-pink-300 dark:border-pink-700 rounded-lg">
                    <h4 className="font-bold text-pink-900 dark:text-pink-300 mb-1">Palmon</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Plant attacks, healing</p>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded mt-3">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Recommendation:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Gabumon pairs well with Agumon for type coverage. Palmon is great for beginners who need healing.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Arrive at Village of Beginnings</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Talk to the villagers to learn about the Digital World's current crisis.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #2:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Medium MP Recovery - Inside the house on the left, check the treasure chest.</span>
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
            Part 3: Boss Battle - Kuwagamon
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                8
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Head to Net Ocean</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The village elder will tell you about a disturbance at Net Ocean. Travel there to investigate.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                9
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Save Before the Boss</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  There's a save point right before the boss arena. Make sure to save and prepare your team!
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Preparation Checklist:</strong>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-1">
                        <li>Team at Level 8+ (recommended)</li>
                        <li>Stock 3-5 HP recovery items</li>
                        <li>Both Digimon have full HP and SP</li>
                        <li>Equip any stat-boosting items you found</li>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-xl">Kuwagamon Battle Strategy</h3>

                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-3">
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Level</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">10</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">HP</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">2,500</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Weaknesses</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded">Vaccine</span>
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-bold rounded">Fire</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Main Attacks</div>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• <strong>Scissor Arms:</strong> Physical attack (~150 damage)</li>
                      <li>• <strong>Power Guillotine:</strong> Heavy damage (~200), critical chance</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white">Battle Strategy:</h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Turn 1:</strong> Use Agumon's Pepper Breath (Fire attack). This is super effective.</li>
                    <li><strong>Turn 2-3:</strong> Continue attacking with both Digimon. Keep HP above 50%.</li>
                    <li><strong>When HP drops below 60%:</strong> Heal immediately. Kuwagamon will use Power Guillotine more frequently.</li>
                    <li><strong>Final phase:</strong> If low on HP, prioritize healing over attacking. Survival is key!</li>
                  </ol>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded mt-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-green-900 dark:text-green-300">Victory Rewards:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> HP Chip A, Offense Chip, Medium MP Recovery, 500 EXP</span>
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
            Part 4: Chapter Conclusion
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                10
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Return to the Village</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  After defeating Kuwagamon, return to the Village of Beginnings. The elder will congratulate you and provide important information about your next destination.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                11
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Optional: Explore and Train</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Before moving to Chapter 2, you can explore File Island further and level up your team.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #3:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Stat Chip - In the eastern forest area, defeat the optional mini-boss Shellmon to obtain this item.</span>
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
                  Congratulations on completing Chapter 1! When you're ready, speak to the elder to travel to Infinity Mountain for Chapter 2.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="card p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter 1 Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Key Achievements:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Met first partner Agumon</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Recruited second partner</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Defeated first boss Kuwagamon</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Learned basic combat mechanics</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Collectibles Found:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• HP Chip A (Starting area)</li>
                <li>• Medium MP Recovery (Village)</li>
                <li>• Stat Chip (Optional - Eastern Forest)</li>
              </ul>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-4">Next Chapter:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Head to Infinity Mountain to face the dark forces of Devimon in Chapter 2.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Bottom */}
        <div className="flex items-center justify-between mt-8">
          <Link
            href="/walkthrough"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            All Chapters
          </Link>
          <Link
            href="/walkthrough/chapter-2"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Next: Chapter 2
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
