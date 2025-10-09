import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin, Trophy, Star, AlertCircle, CheckCircle2, Lightbulb, Target } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Chapter 6: Steel Factory - Walkthrough',
  description: 'Complete walkthrough for Chapter 6 of Digimon Time Stranger including all missions, collectibles, and Machinedramon boss strategy.',
  url: '/walkthrough/chapter-6',
});

export default function Chapter6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/walkthrough/chapter-5"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous Chapter
          </Link>
          <Link
            href="/walkthrough/chapter-7"
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
              Chapter 6
            </span>
            <span className="px-3 py-1 bg-red-500 rounded-full text-sm font-bold">
              Hard
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Steel Factory</h1>
          <div className="flex items-center gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Machine City</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Boss: Machinedramon</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>9 Collectibles</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Steel Factory is the domain of Machinedramon, one of the fearsome Dark Masters. This mechanized nightmare is filled with deadly traps, security systems, and machine-type Digimon. You'll navigate through conveyor belts, automated defense systems, and industrial hazards as you push deeper into the heart of the factory. This chapter marks a significant difficulty spike - preparation is essential.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Recommended Level</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">42+</div>
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
            Part 1: Infiltrating the Steel Factory
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Arrival at Machine City</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your team arrives at the outskirts of Machine City. The landscape is dominated by metal structures, smokestacks, and the ominous Steel Factory looming in the distance. A cutscene reveals Machinedramon's surveillance network scanning the area.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Navigate the Outer Perimeter</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Move through the industrial wasteland toward the main factory entrance. Watch out for security cameras and laser grids.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Encounters:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Guardromon (Lv. 40), Tankmon (Lv. 41), Mekanorimon (Lv. 42)</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Disable the First Security Terminal</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Find and hack the security terminal to open the factory gates. You'll need to solve a circuit puzzle - connect the power nodes to the output terminals.
                </p>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Tip:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Machine-type Digimon are weak to Water and Thunder attacks. Adjust your team composition accordingly.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter the Factory Main Hall</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Once inside, you'll encounter the massive assembly lines and industrial machinery. Be careful of moving platforms and steam vents.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #1:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> DEF Chip A - On a conveyor belt in the northwestern corner of the main hall. Time your jump carefully.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #2:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Thunder Chip - Hidden in a supply crate near the eastern maintenance door.</span>
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
            Part 2: The Assembly Line Gauntlet
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Navigate the Conveyor Belt System</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Traverse a complex series of conveyor belts moving in different directions. You'll need to time your movements to avoid being crushed by hydraulic presses.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Warning:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Getting hit by a hydraulic press deals 1000 damage to your entire party. Watch the warning lights!</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Mini-Boss: Andromon</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  At the end of the assembly line, you'll face Andromon, the factory's chief security officer.
                </p>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mb-3">
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Level</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">43</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">HP</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">9,000</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Weaknesses</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded">Water</span>
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold rounded">Thunder</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Use special attacks to bypass his high defense. Keep HP above 50% to survive his Lightning Blade attack.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #3:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Machine Parts - Dropped by Andromon after the battle. Required for a side quest.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Access the Central Tower</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  After defeating Andromon, take the industrial elevator up to the Central Tower. Stock up on supplies from the vending machine here.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #4:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> ATK Chip A - Inside the control room on level 2 of the Central Tower.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #5:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Mega Recovery - On a ledge accessible by jumping from the elevator shaft midway through the ascent.</span>
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
            Part 3: The Core Chamber
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                8
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Reach the Factory Core</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The top of the Central Tower leads to the Factory Core - a massive energy reactor that powers the entire facility. The heat here is intense, and environmental damage ticks every few seconds.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                9
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Deactivate the Energy Barriers</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Three energy barriers block your path to Machinedramon's chamber. You need to destroy the power generators in each section.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Northern Generator - Protected by 2 Megidramon</li>
                  <li>Eastern Generator - Surrounded by laser grids</li>
                  <li>Southern Generator - Requires solving a power distribution puzzle</li>
                </ul>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mt-2 mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #6:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> INT Chip A - Behind the Northern Generator after defeating the guards.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-2">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #7:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> SPD Chip - In a chest near the Eastern Generator, behind the third laser grid.</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #8:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Revival Capsule - Reward for solving the Southern Generator puzzle.</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Prepare for Machinedramon</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  With all barriers down, you can access the final chamber. There's a save point here - use it! Make sure your team is fully healed and equipped.
                </p>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900 dark:text-yellow-300">Pre-Battle Checklist:</strong>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-1">
                        <li>Team at Level 42+ (Level 45+ highly recommended)</li>
                        <li>Stock at least 5 Mega Recovery and 3 Revival Capsules</li>
                        <li>Equip Water/Thunder attack chips</li>
                        <li>Have at least 2 Digimon with Water or Thunder special attacks</li>
                        <li>Defensive buffs or DEF+ items equipped</li>
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
            Part 4: Boss Battle - Machinedramon
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                11
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enter Machinedramon's Chamber</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  As you enter, a dramatic cutscene plays. Machinedramon, the mechanical dragon and Dark Master, awakens from standby mode. His massive form dominates the arena, bristling with weapons and armor. He recognizes you as threats and initiates battle protocols.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                B
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-xl">Machinedramon Battle Strategy</h3>

                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-3">
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Level</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">45</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">HP</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">12,000</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Attribute</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">Virus</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Type</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">Machine</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Weaknesses</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded">Water</span>
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold rounded">Thunder</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Resistances</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-bold rounded">Fire</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 text-xs font-bold rounded">Physical</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 text-xs font-bold rounded">Machine</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Main Attacks</div>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• <strong>Giga Cannon:</strong> Massive energy cannon (~280 damage to single target)</li>
                      <li>• <strong>Dragon Fire:</strong> Flame breath hitting 2-3 targets (~250 damage each)</li>
                      <li>• <strong>Infinity Hand:</strong> Mechanical arms attack twice (~200 damage each hit)</li>
                      <li>• <strong>Catastrophe Blast:</strong> Ultimate weapon discharge, AoE attack (~350 damage to all)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">Phase 1 (100-50% HP):</h4>
                  <div className="pl-4 border-l-2 border-gray-300 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Behavior:</strong> Rotates between Giga Cannon, Dragon Fire, and Infinity Hand. Focuses on single-target and small AoE attacks.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Strategy:</strong> Focus exclusively on Water and Thunder special attacks - physical attacks barely scratch his armor. Maintain HP above 60% at all times. If anyone drops below 50%, heal immediately. Spread your attacks across multiple Digimon to maintain consistent damage.
                    </p>
                  </div>

                  <h4 className="font-bold text-gray-900 dark:text-white">Phase 2 (50-0% HP):</h4>
                  <div className="pl-4 border-l-2 border-red-300 dark:border-red-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Behavior:</strong> Enters critical mode. Catastrophe Blast becomes available and will be used every 3-4 turns. Attack frequency increases dramatically.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Strategy:</strong> This is an extremely dangerous phase. ALL party members must maintain 70%+ HP minimum. When you see the charging animation, use defensive items or guard stance. After surviving Catastrophe Blast, immediately heal all party members. Continue using your strongest Water/Thunder attacks. Don't hold back - use your ultimate skills.
                    </p>
                    <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded mt-2">
                      <p className="text-sm text-red-900 dark:text-red-300">
                        <strong>Critical Warning:</strong> Catastrophe Blast can wipe your entire team if you're not prepared. Have Revival Capsules ready in case someone falls!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded mb-3">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-900 dark:text-blue-300">Recommended Team:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> MetalSeadramon (Water attacks, high DEF), Vikemon (Water/Ice tank), Plesiomon (Water support), or any Mega-level Digimon with Water/Thunder attributes.</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-green-900 dark:text-green-300">Victory Rewards:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Machine Parts, ATK Chip A, DEF Chip A, 8,000 EXP, 5,000 Bits</span>
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
            Part 5: Factory Shutdown
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                12
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Victory Cutscene</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  With Machinedramon defeated, his massive form collapses. The factory's power systems begin to fail, and emergency lights flash throughout the facility. Your team has dealt a major blow to the Dark Masters' forces.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                13
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Escape the Factory</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Make your way back through the facility as it begins to shut down. You have 5 minutes to escape before the self-destruct sequence completes.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-purple-900 dark:text-purple-300">Collectible #9:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Digital Processor - In Machinedramon's chamber after the battle, near his fallen form. Very rare crafting material!</span>
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
                  Congratulations on defeating Machinedramon! Two of the four Dark Masters have now fallen. Your team escapes the factory and regroups to plan the next assault. The path to Net Ocean opens up for Chapter 7.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="card p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter 6 Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Key Achievements:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Infiltrated the Steel Factory</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Defeated Andromon mini-boss</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Destroyed Machinedramon, second Dark Master</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Shut down the factory operations</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Collectibles Found:</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• DEF Chip A (Main Hall)</li>
                <li>• Thunder Chip (Main Hall)</li>
                <li>• Machine Parts (Andromon drop)</li>
                <li>• ATK Chip A (Central Tower)</li>
                <li>• Mega Recovery (Elevator shaft)</li>
                <li>• INT Chip A (Northern Generator)</li>
                <li>• SPD Chip (Eastern Generator)</li>
                <li>• Revival Capsule (Southern Generator)</li>
                <li>• Digital Processor (Boss chamber)</li>
              </ul>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-4">Next Chapter:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Descend into the Ocean Depths to face MetalSeadramon in Chapter 7.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Bottom */}
        <div className="flex items-center justify-between mt-8">
          <Link
            href="/walkthrough/chapter-5"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous: Chapter 5
          </Link>
          <Link
            href="/walkthrough/chapter-7"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Next: Chapter 7
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
