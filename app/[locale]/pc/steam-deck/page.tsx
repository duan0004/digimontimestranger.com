import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import { Monitor, Gamepad2, Settings, Zap, Check } from 'lucide-react';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pc.steamDeck' });

  return generateSEO({
    title: t('seoTitle'),
    description: t('seoDescription'),
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
}

export default async function PCSteamDeckPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pc.steamDeck' });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-blue-100">
            {t('subtitle')}
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
              {t('systemRequirements.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('systemRequirements.minimum')}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li><strong>{t('systemRequirements.os')}</strong> Windows 10 64-bit</li>
                  <li><strong>{t('systemRequirements.cpu')}</strong> Intel Core i5-6600 / AMD Ryzen 5 1600</li>
                  <li><strong>{t('systemRequirements.ram')}</strong> 8 GB</li>
                  <li><strong>{t('systemRequirements.gpu')}</strong> NVIDIA GTX 1060 / AMD RX 580</li>
                  <li><strong>{t('systemRequirements.storage')}</strong> 20 GB available space</li>
                  <li><strong>{t('systemRequirements.directx')}</strong> Version 11</li>
                </ul>
              </div>

              <div className="card p-6 border-2 border-primary-300 dark:border-primary-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('systemRequirements.recommended')}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li><strong>{t('systemRequirements.os')}</strong> Windows 11 64-bit</li>
                  <li><strong>{t('systemRequirements.cpu')}</strong> Intel Core i7-8700 / AMD Ryzen 7 2700X</li>
                  <li><strong>{t('systemRequirements.ram')}</strong> 16 GB</li>
                  <li><strong>{t('systemRequirements.gpu')}</strong> NVIDIA RTX 2060 / AMD RX 5700</li>
                  <li><strong>{t('systemRequirements.storage')}</strong> 20 GB SSD space</li>
                  <li><strong>{t('systemRequirements.directx')}</strong> Version 12</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Recommended Graphics Settings */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Settings className="w-8 h-8 text-primary-600" />
              {t('graphics.title')}
            </h2>

            <div className="space-y-6">
              {/* High-End PC */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('graphics.highEnd')}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>{t('graphics.resolution')}</strong> 4K (3840x2160)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>{t('graphics.quality')}</strong> Ultra</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>{t('graphics.antiAliasing')}</strong> TAA</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>{t('graphics.shadows')}</strong> Ultra</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>{t('graphics.textures')}</strong> Ultra</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>{t('graphics.effects')}</strong> High</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>{t('graphics.vSync')}</strong> Off (Use G-Sync/FreeSync)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span><strong>{t('graphics.fpsCap')}</strong> Unlimited</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>{t('graphics.performance')}</strong> 60+ FPS at 4K
                </p>
              </div>

              {/* Mid-Range PC */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('graphics.midRange')}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>{t('graphics.resolution')}</strong> 1080p (1920x1080)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>{t('graphics.quality')}</strong> High</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>{t('graphics.antiAliasing')}</strong> FXAA</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>{t('graphics.shadows')}</strong> Medium</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>{t('graphics.textures')}</strong> High</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>{t('graphics.effects')}</strong> Medium</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>{t('graphics.vSync')}</strong> On</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span><strong>{t('graphics.fpsCap')}</strong> 60</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>{t('graphics.performance')}</strong> 60 FPS at 1080p
                </p>
              </div>
            </div>
          </section>

          {/* Steam Deck Settings */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Gamepad2 className="w-8 h-8 text-primary-600" />
              {t('steamDeckSettings.title')}
            </h2>

            <div className="card p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-600">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {t('steamDeckSettings.verified')}
                  </h3>
                  <span className="text-sm text-green-700 dark:text-green-300">
                    {t('steamDeckSettings.optimized')}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>{t('graphics.resolution')}</strong> 1280x800 (Native)</li>
                    <li><strong>{t('graphics.quality')}</strong> Medium</li>
                    <li><strong>{t('graphics.antiAliasing')}</strong> FXAA</li>
                    <li><strong>{t('graphics.shadows')}</strong> Low</li>
                    <li><strong>{t('graphics.textures')}</strong> Medium</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>{t('graphics.effects')}</strong> Low</li>
                    <li><strong>{t('graphics.vSync')}</strong> On</li>
                    <li><strong>{t('graphics.fpsCap')}</strong> 40 FPS (Battery) / 60 FPS (Plugged)</li>
                    <li><strong>{t('steamDeckSettings.fsr')}</strong> Quality Mode</li>
                    <li><strong>{t('steamDeckSettings.tdpLimit')}</strong> 12W</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {t('steamDeckSettings.batteryTitle')}
                </h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• {t('steamDeckSettings.tip1')}</li>
                  <li>• {t('steamDeckSettings.tip2')}</li>
                  <li>• {t('steamDeckSettings.tip3')}</li>
                  <li>• {t('steamDeckSettings.tip4')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Control Settings */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-primary-600" />
              {t('controls.title')}
            </h2>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('controls.recommended')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t('controls.movement')}</h4>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• <strong>{t('controls.leftStick')}</strong> {t('controls.characterMovement')}</li>
                    <li>• <strong>{t('controls.rightStick')}</strong> {t('controls.cameraControl')}</li>
                    <li>• <strong>{t('controls.dPad')}</strong> {t('controls.quickMenu')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t('controls.actions')}</h4>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• <strong>{t('controls.confirm')}</strong> {t('controls.confirmInteract')}</li>
                    <li>• <strong>{t('controls.cancel')}</strong> {t('controls.cancelBack')}</li>
                    <li>• <strong>{t('controls.menu')}</strong> {t('controls.menuLabel')}</li>
                    <li>• <strong>{t('controls.info')}</strong> {t('controls.quickInfo')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t('troubleshooting.title')}
            </h2>

            <div className="space-y-4">
              <div className="card p-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {t('troubleshooting.lowFps')}
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
                  {t('troubleshooting.controller')}
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
                  {t('troubleshooting.saves')}
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
