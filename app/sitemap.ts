import { MetadataRoute } from 'next';
import { loadDigimonData, getAllDigimonSlugs } from '@/lib/data-loader';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://digimontimestranger.com';

  // Static routes
  const routes = [
    '',
    '/digidex',
    '/evolution',
    '/tools/team-builder',
    '/guides',
    '/guides/best-starters',
    '/updates',
    '/pc/steam-deck',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Digimon routes
  const slugs = await getAllDigimonSlugs();
  const digimonRoutes = slugs.map((slug) => ({
    url: `${baseUrl}/digimon/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...digimonRoutes];
}
