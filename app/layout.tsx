import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generateMetadata } from '@/lib/seo';

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
