import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generateMetadata } from '@/lib/seo';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import GoogleAdsense from '@/components/ads/GoogleAdsense';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = generateMetadata({
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Digimon Guide" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

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
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
