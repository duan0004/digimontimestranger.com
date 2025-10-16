import { Metadata } from 'next';

export interface GenerateMetadataOptions {
  title: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  path?: string;
  url?: string;
  noindex?: boolean;
}

export function generateMetadata(options: GenerateMetadataOptions): Metadata {
  const { title, description = '', keywords = [], ogImage, path = '', noindex = false } = options;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digimontimestranger.com';
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    keywords,
    ...(noindex && { robots: { index: false, follow: false } }),
    openGraph: {
      title,
      description,
      url,
      siteName: 'Digimon Time Stranger Guide',
      type: 'website',
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

export interface DigimonSEO {
  slug: string;
  name_en?: string;
  name_ja?: string;
  stage?: string;
  stage_en?: string;
  attribute?: string;
  main_image?: string;
  evolves_from?: string[];
  evolves_to?: string[];
}

export function generateDigimonMetadata(digimon: DigimonSEO): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digimontimestranger.com';
  const name = digimon.name_en || digimon.name_ja || digimon.slug;
  const displayName = digimon.name_ja
    ? `${digimon.name_en || digimon.slug} (${digimon.name_ja})`
    : (digimon.name_en || digimon.slug);

  const title = `${displayName} - Time Stranger Dex`;
  const stage = digimon.stage_en || digimon.stage || 'Unknown';
  const attribute = digimon.attribute || 'Unknown';

  const evolutions = [];
  if (digimon.evolves_from && digimon.evolves_from.length > 0) {
    evolutions.push(`Evolves from ${digimon.evolves_from.slice(0, 3).join(', ')}`);
  }
  if (digimon.evolves_to && digimon.evolves_to.length > 0) {
    evolutions.push(`Evolves to ${digimon.evolves_to.slice(0, 3).join(', ')}`);
  }

  const evolutionText = evolutions.length > 0 ? evolutions.join('. ') : 'No evolution data available';
  const description = `${displayName} details, evolution paths and data. Stage: ${stage}, Attribute: ${attribute}. ${evolutionText}.`;

  return {
    title,
    description,
    keywords: [name, digimon.name_en, digimon.name_ja, 'Digimon', 'Time Stranger', stage, attribute].filter(Boolean) as string[],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${baseUrl}/dex/${digimon.slug}`,
      siteName: 'Time Stranger Dex',
      images: digimon.main_image ? [{
        url: digimon.main_image,
        width: 384,
        height: 384,
        alt: displayName,
      }] : [],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: digimon.main_image ? [digimon.main_image] : [],
    },
  };
}

export function generateListMetadata(): Metadata {
  return {
    title: 'Time Stranger Digimon Dex - Complete Database',
    description: 'Complete Digimon Time Stranger database with 840+ Digimon, detailed information, evolution paths, attributes and locations. Search, filter and plan evolution paths.',
    keywords: ['Digimon', 'Time Stranger', 'Dex', 'Evolution', 'Database', 'Guide'],
    openGraph: {
      title: 'Time Stranger Digimon Dex',
      description: '840+ Complete Digimon data, evolution paths, attribute search',
      type: 'website',
      siteName: 'Time Stranger Dex',
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
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

export function generateItemListSchema(items: Array<{ name: string; url: string; image?: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: item.name,
        url: item.url,
        ...(item.image && { image: item.image }),
      },
    })),
  };
}
