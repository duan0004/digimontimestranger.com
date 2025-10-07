import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import EvolutionTreeClient from '@/components/evolution/EvolutionTreeClient';
import { loadDigimonData } from '@/lib/data-loader';

export const metadata: Metadata = generateMetadata({
  title: 'Evolution Tree - Complete Digimon Evolution Paths',
  description:
    'Interactive evolution tree showing all Digimon evolution paths in Time Stranger. Explore evolution requirements, branches, and find the perfect evolution route for your team.',
  keywords: [
    'evolution tree',
    'Digimon evolution',
    'evolution paths',
    'evolution guide',
    'digivolution',
    'evolution requirements',
  ],
  url: '/evolution',
});

export const revalidate = 3600; // Revalidate every hour

export default async function EvolutionPage() {
  const allDigimon = await loadDigimonData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Digimon Evolution Tree',
            description: 'Interactive evolution tree for Digimon Story: Time Stranger',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Evolution Tree
            </h1>
            <p className="text-xl text-blue-100">
              Explore all Digimon evolution paths and requirements
            </p>
          </div>
        </div>

        {/* Main Content */}
        <EvolutionTreeClient allDigimon={allDigimon} />
      </div>
    </>
  );
}
