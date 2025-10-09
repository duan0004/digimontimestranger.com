import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import TeamBuilderClient from '@/components/tools/TeamBuilderClient';
import { loadDigimonData } from '@/lib/data-loader';

export const metadata: Metadata = generateMetadata({
  title: 'Team Builder Tool - Build Perfect Digimon Teams',
  description:
    'Create and optimize your perfect Digimon team with our interactive Team Builder. Analyze memory usage, element coverage, speed tiers, and role balance. Share teams with friends!',
  keywords: [
    'team builder',
    'Digimon team',
    'team composition',
    'memory calculator',
    'element coverage',
    'team optimizer',
  ],
  url: '/tools/team-builder',
});

export default async function TeamBuilderPage() {
  const allDigimon = await loadDigimonData();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Digimon Team Builder',
            description: 'Interactive team building tool for Digimon Story: Time Stranger',
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
              Team Builder
            </h1>
            <p className="text-xl text-blue-100">
              Build and optimize your perfect Digimon team
            </p>
          </div>
        </div>

        {/* Main Content */}
        <TeamBuilderClient allDigimon={allDigimon} />
      </div>
    </>
  );
}
