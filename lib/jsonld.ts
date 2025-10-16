import { DigimonSEO } from './seo';

export interface DigimonJSONLD {
  '@context': string;
  '@type': string;
  name: string;
  alternateName?: string;
  description: string;
  image?: string;
  url: string;
  mainEntityOfPage?: {
    '@type': string;
    '@id': string;
  };
  additionalProperty?: Array<{
    '@type': string;
    name: string;
    value: string;
  }>;
}

export function generateDigimonJSONLD(digimon: DigimonSEO): DigimonJSONLD {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = `${baseUrl}/dex/${digimon.slug}`;
  const name = digimon.name_en || digimon.slug;
  const alternateName = digimon.name_ja;

  const stage = digimon.stage_en || digimon.stage || '未知';
  const attribute = digimon.attribute || '未知';

  const evolutions = [];
  if (digimon.evolves_from && digimon.evolves_from.length > 0) {
    evolutions.push(`可从${digimon.evolves_from.slice(0, 3).join('、')}等进化而来`);
  }
  if (digimon.evolves_to && digimon.evolves_to.length > 0) {
    evolutions.push(`可进化为${digimon.evolves_to.slice(0, 3).join('、')}等`);
  }

  const evolutionText = evolutions.length > 0 ? evolutions.join('，') : '暂无进化数据';
  const description = `${name}的详细信息。阶段：${stage}，属性：${attribute}。${evolutionText}。`;

  const additionalProperty: Array<{ '@type': string; name: string; value: string }> = [
    {
      '@type': 'PropertyValue',
      name: 'Stage',
      value: stage,
    },
    {
      '@type': 'PropertyValue',
      name: 'Attribute',
      value: attribute,
    },
  ];

  if (digimon.evolves_from && digimon.evolves_from.length > 0) {
    additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'Evolves From',
      value: digimon.evolves_from.join(', '),
    });
  }

  if (digimon.evolves_to && digimon.evolves_to.length > 0) {
    additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'Evolves To',
      value: digimon.evolves_to.join(', '),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    name,
    ...(alternateName && { alternateName }),
    description,
    ...(digimon.main_image && { image: digimon.main_image }),
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    additionalProperty,
  };
}

export function generateBreadcrumbJSONLD(slug: string, name: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '数码兽图鉴',
        item: `${baseUrl}/dex`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name,
        item: `${baseUrl}/dex/${slug}`,
      },
    ],
  };
}
