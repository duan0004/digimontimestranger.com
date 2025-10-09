import { Metadata } from 'next';
import { generateMetadata as createMetadata, generateItemListSchema } from '@/lib/seo';
import { loadDigimonData } from '@/lib/data-loader';
import DigidexList from '@/components/digimon/DigidexList';
import { getTranslations } from 'next-intl/server';

export const revalidate = 3600; // Revalidate every hour

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.digidex' });

  return createMetadata({
    title: t('title'),
    description: t('description'),
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
}

export default async function DigidexPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'digidex' });
  const digimon = await loadDigimonData();

  // Generate JSON-LD for SEO
  const jsonLd = generateItemListSchema(
    digimon.slice(0, 50).map((d) => ({
      name: d.name,
      url: `/${locale}/digimon/${d.slug}`,
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
              {t('title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('description')}
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
