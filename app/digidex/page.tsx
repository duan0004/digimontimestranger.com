import { Metadata } from 'next';
import { generateMetadata, generateItemListSchema } from '@/lib/seo';
import { loadDigimonData } from '@/lib/data-loader';
import DigidexList from '@/components/digimon/DigidexList';

export const metadata: Metadata = generateMetadata({
  title: 'Complete Digidex Database',
  description:
    'Browse all 400+ Digimon in Time Stranger with detailed stats, evolution paths, locations, and skills. Filter by stage, attribute, element, and more.',
  keywords: [
    'Digidex',
    'Digimon database',
    'Digimon list',
    'all Digimon',
    'Digimon stats',
    'evolution database',
  ],
  url: '/digidex',
});

export const revalidate = 3600; // Revalidate every hour

export default async function DigidexPage() {
  const digimon = await loadDigimonData();

  // Generate JSON-LD for SEO
  const jsonLd = generateItemListSchema(
    digimon.slice(0, 50).map((d) => ({
      name: d.name,
      url: `/digimon/${d.slug}`,
      description: `${d.stage} ${d.attribute} ${d.element}-type Digimon`,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Digidex
            </h1>
            <p className="text-xl text-blue-100">
              Browse {digimon.length} Digimon with detailed stats, evolutions, and locations
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <DigidexList initialDigimon={digimon} />
        </div>
      </div>
    </>
  );
}
