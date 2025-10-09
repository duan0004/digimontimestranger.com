import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { Heart, Users, Zap, Github } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return generateSEO({
    title: t('title'),
    description: t('description'),
    keywords: ['about', 'team', 'mission', 'contact'],
    url: `/${locale}/about`,
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-blue-100">
            {t('description')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Mission */}
          <section className="mb-12">
            <div className="card p-8 bg-gradient-to-br from-blue-50 to-primary-50 dark:from-blue-900/20 dark:to-primary-900/20 border-2 border-primary-200 dark:border-primary-800">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                We&apos;re passionate Digimon fans dedicated to creating the most comprehensive and user-friendly strategy guide for <strong>Digimon Story: Time Stranger</strong>. Our goal is to help Tamers of all skill levels master the game through detailed guides, interactive tools, and up-to-date information.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Whether you&apos;re a newcomer to the Digimon World or a veteran Tamer, we&apos;re here to support your journey through Time Stranger with quality content, accurate data, and helpful resources.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Interactive Tools
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Team Builder, Evolution Tree visualizer, and stat calculators to optimize your gameplay
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 mx-auto mb-4">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Complete Guides
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  In-depth strategy guides covering starters, evolution, team building, and more
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900 mx-auto mb-4">
                  <Heart className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Digidex Database
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Comprehensive database with 400+ Digimon, stats, skills, and evolution paths
                </p>
              </div>
            </div>
          </section>

          {/* Technology */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Built with Modern Technology
            </h2>
            <div className="card p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Digimon Time Stranger Guide is built using cutting-edge web technologies to ensure fast loading times, smooth interactions, and an excellent user experience across all devices.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <ul className="space-y-2">
                    <li>✓ <strong>Next.js 15</strong> - Modern React framework</li>
                    <li>✓ <strong>TypeScript</strong> - Type-safe code</li>
                    <li>✓ <strong>Tailwind CSS</strong> - Beautiful responsive design</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>✓ <strong>SEO Optimized</strong> - Fast search rankings</li>
                    <li>✓ <strong>Mobile First</strong> - Perfect on all devices</li>
                    <li>✓ <strong>Dark Mode</strong> - Eye-friendly reading</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Disclaimer
            </h2>
            <div className="card p-6 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-200 dark:border-yellow-800">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Digimon Time Stranger Guide</strong> is an unofficial fan-made website created by fans, for fans.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Digimon and all related properties are trademarks and copyrights of <strong>Bandai Namco Entertainment Inc.</strong> We are not affiliated with, endorsed by, or sponsored by Bandai Namco Entertainment. All game content, artwork, and trademarks belong to their respective owners.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <div className="card p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Have suggestions, found an error, or want to contribute? We&apos;d love to hear from you!
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 dark:text-white">GitHub</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Report issues or contribute on our GitHub repository
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Links */}
          <section>
            <div className="card p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                📚 Explore More
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href={`/${locale}/guides`} className="text-primary-600 dark:text-primary-400 hover:underline">
                  → Browse All Guides
                </Link>
                <Link href={`/${locale}/tools/team-builder`} className="text-primary-600 dark:text-primary-400 hover:underline">
                  → Try Team Builder
                </Link>
                <Link href={`/${locale}/digidex`} className="text-primary-600 dark:text-primary-400 hover:underline">
                  → Explore Digidex
                </Link>
                <Link href={`/${locale}/evolution`} className="text-primary-600 dark:text-primary-400 hover:underline">
                  → View Evolution Tree
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
