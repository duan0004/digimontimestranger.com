import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Link from 'next/link';
import { Gamepad2, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Boss Strategies - Coming Soon',
  description: 'Detailed boss battle strategies for Digimon Time Stranger coming soon.',
  url: '/guides/boss-strategies',
});

export default function BossStrategiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900 mx-auto mb-6">
          <Gamepad2 className="w-10 h-10 text-primary-600 dark:text-primary-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Boss Battle Strategies
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Coming Soon
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          We're working hard on this comprehensive boss strategies guide. Check back soon!
        </p>
        <Link
          href="/guides"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Guides
        </Link>
      </div>
    </div>
  );
}
