import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generateMetadata as genMeta } from '@/lib/seo';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import GoogleAdsense from '@/components/ads/GoogleAdsense';
import { MiddleAd, BottomAd } from '@/components/ads/AdInserter';
import { locales, type Locale } from '@/i18n';
import { FavoritesProvider } from '@/contexts/FavoritesContext';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title: 'Digimon Time Stranger - Complete Strategy Guide & Digidex',
    description:
      'Master Digimon Story: Time Stranger with complete evolution guides, team building tools, strategies, and the ultimate Digidex database. 400+ Digimon, 1000+ evolution paths.',
    keywords: [
      'Digimon Time Stranger',
      'Digimon Story guide',
      'evolution guide',
      'team builder',
      'Digidex',
      'best starters',
      'JRPG guide',
      'Digimon evolution paths',
    ],
  });
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Load messages for the locale
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <FavoritesProvider>
        <div className="flex flex-col min-h-screen">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Digimon Time Stranger Guide',
                description:
                  'Complete strategies and database for Digimon Story: Time Stranger',
                url: 'https://digimontimestranger.com',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate:
                      'https://digimontimestranger.com/search?q={search_term_string}',
                  },
                  'query-input': 'required name=search_term_string',
                },
              }),
            }}
          />
          <GoogleAnalytics />
          <GoogleAdsense />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <MiddleAd />
          <BottomAd />
          <Footer />
        </div>
      </FavoritesProvider>
    </NextIntlClientProvider>
  );
}
