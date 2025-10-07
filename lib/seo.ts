import { Metadata } from 'next';

const SITE_URL = 'https://digimontimestranger.com';
const SITE_NAME = 'Digimon Time Stranger Guide';
const SITE_DESCRIPTION =
  'Complete strategies, evolution guides, team building tools, and Digidex database for Digimon Story: Time Stranger. Master every evolution path and build the perfect team.';

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

/**
 * Generate Next.js metadata for pages
 */
export function generateMetadata(config: SEOConfig = {}): Metadata {
  const title = config.title
    ? `${config.title} | ${SITE_NAME}`
    : SITE_NAME;

  const description = config.description || SITE_DESCRIPTION;
  const url = config.url ? `${SITE_URL}${config.url}` : SITE_URL;
  const image = config.image || `${SITE_URL}/og-image.png`;

  const metadata: Metadata = {
    title,
    description,
    keywords: config.keywords,
    authors: [{ name: 'Digimon Time Stranger Guide Team' }],
    creator: 'Digimon Time Stranger Guide',
    publisher: 'Digimon Time Stranger Guide',
    robots: config.noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: config.type || 'website',
      ...(config.publishedTime && { publishedTime: config.publishedTime }),
      ...(config.modifiedTime && { modifiedTime: config.modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@DigimonGuides',
    },
    alternates: {
      canonical: url,
    },
  };

  return metadata;
}

/**
 * Generate JSON-LD structured data for VideoGame schema
 */
export function generateGameSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Digimon Story: Time Stranger',
    description: 'JRPG featuring Digimon collecting, evolution, and strategy battles',
    genre: ['JRPG', 'Role-Playing Game', 'Monster Collecting'],
    gamePlatform: ['PC', 'PlayStation', 'Nintendo Switch', 'Xbox'],
    operatingSystem: 'Windows, PlayStation 5, Nintendo Switch, Xbox Series X|S',
    applicationCategory: 'Game',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '59.99',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      ratingCount: '2500',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

/**
 * Generate JSON-LD structured data for BreadcrumbList
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate JSON-LD structured data for FAQPage
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate JSON-LD structured data for ItemList (Digidex)
 */
export function generateItemListSchema(
  items: { name: string; url: string; description?: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${item.url}`,
      description: item.description,
    })),
  };
}

/**
 * Generate JSON-LD structured data for Article (guides)
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  publishedDate: string;
  modifiedDate?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      '@type': 'Organization',
      name: article.author || SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

/**
 * Get the site URL
 */
export function getSiteUrl(): string {
  return SITE_URL;
}

/**
 * Get the site name
 */
export function getSiteName(): string {
  return SITE_NAME;
}
