import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import SearchResultsClient from './SearchResultsClient';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'search' });

  return generateSEO({
    title: t('title'),
    description: t('description'),
    url: `/${locale}/search`,
  });
}

export default async function SearchPage({ params }: PageProps) {
  const { locale } = await params;

  return <SearchResultsClient locale={locale} />;
}
