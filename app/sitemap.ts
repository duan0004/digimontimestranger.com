import { MetadataRoute } from 'next';
import { loadDigimonData, getAllDigimonSlugs } from '@/lib/data-loader';
import { getAllBossIds } from '@/lib/boss-data';

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
    '/guides/evolution-guide',
    '/guides/team-building',
    '/guides/fast-leveling',
    '/guides/boss-strategies',
    '/walkthrough',
    '/walkthrough/chapter-1',
    '/walkthrough/chapter-2',
    '/walkthrough/chapter-3',
    '/walkthrough/chapter-4',
    '/walkthrough/chapter-5',
    '/walkthrough/chapter-6',
    '/walkthrough/chapter-7',
    '/walkthrough/chapter-8',
    '/walkthrough/chapter-9',
    '/updates',
    '/pc/steam-deck',
    '/community',
    '/database',
    '/database/bosses',
    '/about',
    '/search',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/privacy' || route === '/terms' ? 0.3 : route === '/search' ? 0.5 : route.startsWith('/walkthrough') ? 0.9 : 0.8,
  }));

  // Dynamic Digimon routes
  const slugs = await getAllDigimonSlugs();
  const digimonRoutes = slugs.map((slug) => ({
    url: `${baseUrl}/digimon/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic Boss routes
  const bossIds = getAllBossIds();
  const bossRoutes = bossIds.map((id) => ({
    url: `${baseUrl}/database/bosses/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...digimonRoutes, ...bossRoutes];
}
