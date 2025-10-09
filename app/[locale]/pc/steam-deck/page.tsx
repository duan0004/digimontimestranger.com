import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import { Monitor, Gamepad2, Settings, Zap, Check } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'PC & Steam Deck Settings - Optimal Configuration Guide',
  description:
    'Complete guide for optimizing Digimon Story: Time Stranger on PC and Steam Deck. Graphics settings, control configurations, and performance tips.',
  keywords: [
    'PC settings',
    'Steam Deck',
    'graphics settings',
    'performance',
    'controls',
    'optimization',
  ],
  url: '/pc/steam-deck',
});

export default function PCSteamDeckPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            PC & Steam Deck Settings Guide
          </h1>
          <p className="text-xl text-blue-100">
            Optimize your gaming experience on PC and Steam Deck
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* System Requirements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Monitor className="w-8 h-8 text-primary-600" />
              System Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Minimum Requirements
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li><strong>OS:</strong> Windows 10 64-bit</li>
                  <li><strong>CPU:</strong> Intel Core i5-6600 / AMD Ryzen 5 1600</li>
                  <li><strong>RAM:</strong> 8 GB</li>
                  <li><strong>GPU:</strong> NVIDIA GTX 1060 / AMD RX 580</li>
                  <li><strong>Storage:</strong> 20 GB available space</li>
                  <li><strong>DirectX:</strong> Version 11</li>
                </ul>
              </div>

              <div className="card p-6 border-2 border-primary-300 dark:border-primary-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Recommended Requirements
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li><strong>OS:</strong> Windows 11 64-bit</li>
                  <li><strong>CPU:</strong> Intel Core i7-8700 / AMD Ryzen 7 2700X</li>
                  <li><strong>RAM:</strong> 16 GB</li>
                  <li><strong>GPU:</strong> NVIDIA RTX 2060 / AMD RX 5700</li>
                  <li><strong>Storage:</strong> 20 GB SSD space</li>
                  <li><strong>DirectX:</strong> Version 12</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Recommended Graphics Settings */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Settings className="w-8 h-8 text-primary-600" />
              Recommended Graphics Settings
            </h2>

            <div className="space-y-6">
              {/* High-End PC */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  🖥️ High-End PC (RTX 3070 / RX 6800 or better)
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>Resolution:</strong> 4K (3840x2160)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>Quality Preset:</strong> Ultra</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>Anti-Aliasing:</strong> TAA</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>Shadows:</strong> Ultra</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>Textures:</strong> Ultra</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>Effects:</strong> High</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>V-Sync:</strong> Off (Use G-Sync/FreeSync)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>FPS Cap:</strong> Unlimited</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>Expected Performance:</strong> 60+ FPS at 4K
                </p>
              </div>

              {/* Mid-Range PC */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  💻 Mid-Range PC (GTX 1660 Ti / RX 5600 XT)
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>Resolution:</strong> 1080p (1920x1080)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>Quality Preset:</strong> High</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>Anti-Aliasing:</strong> FXAA</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>Shadows:</strong> Medium</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>Textures:</strong> High</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>Effects:</strong> Medium</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>V-Sync:</strong> On</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>FPS Cap:</strong> 60</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>Expected Performance:</strong> 60 FPS at 1080p
                </p>
              </div>
            </div>
          </section>

          {/* Steam Deck Settings */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Gamepad2 className="w-8 h-8 text-primary-600" />
              Steam Deck Optimized Settings
            </h2>

            <div className="card p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-600">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Steam Deck Verified Settings
                  </h3>
                  <span className="text-sm text-green-700 dark:text-green-300">
                    ✓ Optimized for Steam Deck
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>Resolution:</strong> 1280x800 (Native)</li>
                    <li><strong>Quality Preset:</strong> Medium</li>
                    <li><strong>Anti-Aliasing:</strong> FXAA</li>
                    <li><strong>Shadows:</strong> Low</li>
                    <li><strong>Textures:</strong> Medium</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>Effects:</strong> Low</li>
                    <li><strong>V-Sync:</strong> On</li>
                    <li><strong>FPS Cap:</strong> 40 FPS (Battery) / 60 FPS (Plugged)</li>
                    <li><strong>FSR:</strong> Quality Mode</li>
                    <li><strong>TDP Limit:</strong> 12W</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  💡 Battery Life Tips:
                </h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Use 40 FPS cap for extended battery life (4-5 hours)</li>
                  <li>• Enable FSR for better performance without quality loss</li>
                  <li>• Lower screen brightness to 60% for optimal balance</li>
                  <li>• Use TDP limit of 10W for maximum battery duration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Control Settings */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-primary-600" />
              Control Settings
            </h2>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Recommended Controller Layout
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Movement & Camera</h4>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Left Stick:</strong> Character Movement</li>
                    <li>• <strong>Right Stick:</strong> Camera Control</li>
                    <li>• <strong>D-Pad:</strong> Quick Menu Navigation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Actions</h4>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• <strong>A/Cross:</strong> Confirm / Interact</li>
                    <li>• <strong>B/Circle:</strong> Cancel / Back</li>
                    <li>• <strong>X/Square:</strong> Menu</li>
                    <li>• <strong>Y/Triangle:</strong> Quick Digimon Info</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Common Issues & Fixes
            </h2>

            <div className="space-y-4">
              <div className="card p-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Low FPS / Stuttering
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  • Lower shadow quality to Medium or Low<br/>
                  • Disable V-Sync and cap FPS to 60<br/>
                  • Update graphics drivers<br/>
                  • Close background applications
                </p>
              </div>

              <div className="card p-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Controller Not Working
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  • Enable &quot;Steam Input&quot; in game properties<br/>
                  • Verify controller is detected in Steam Big Picture<br/>
                  • Try switching USB ports or using Bluetooth<br/>
                  • Restart Steam and the game
                </p>
              </div>

              <div className="card p-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Save File Issues
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  • Verify game files in Steam<br/>
                  • Check Windows User folder for corrupted saves<br/>
                  • Disable cloud saves temporarily<br/>
                  • Run game as Administrator
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
