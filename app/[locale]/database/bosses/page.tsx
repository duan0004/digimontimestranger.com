import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import BossesClient from './BossesClient';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'database.bosses' });

  return generateSEO({
    title: t('title'),
    description: t('description'),
    url: '/database/bosses',
  });
}

export default async function BossesPage({ params }: PageProps) {
  const { locale } = await params;
  return <BossesClient locale={locale} />;
}
