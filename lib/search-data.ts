import { loadDigimonData } from './data-loader';

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: 'digimon' | 'guide' | 'tool' | 'database' | 'page';
  url: string;
  tags?: string[];
  image?: string;
}

/**
 * Build comprehensive search index for the entire site
 */
export async function buildSearchIndex(): Promise<SearchItem[]> {
  const searchItems: SearchItem[] = [];

  // Load Digimon data
  try {
    const digimon = await loadDigimonData();

    digimon.forEach((mon) => {
      searchItems.push({
        id: `digimon-${mon.id}`,
        title: mon.name,
        description: mon.description || `${mon.stage} stage ${mon.attribute} type Digimon`,
        category: 'digimon',
        url: `/digimon/${mon.id}`,
        tags: [
          mon.stage,
          mon.attribute,
          mon.type,
          ...(mon.specialties || []),
        ].filter(Boolean),
        image: mon.image,
      });
    });
  } catch (error) {
    console.error('Error loading Digimon data for search:', error);
  }

  // Add guide pages
  const guides = [
    {
      id: 'guide-best-starters',
      title: 'Best Starters Guide',
      description: 'Discover the top Digimon to begin your journey and dominate early game',
      url: '/guides/best-starters',
      tags: ['beginner', 'starter', 'early game'],
    },
    {
      id: 'guide-evolution',
      title: 'Evolution Guide',
      description: 'Complete guide to evolution mechanics, stages, and requirements',
      url: '/guides/evolution-guide',
      tags: ['evolution', 'digivolution', 'requirements'],
    },
    {
      id: 'guide-team-building',
      title: 'Team Building Guide',
      description: 'Master team composition, roles, and synergies',
      url: '/guides/team-building',
      tags: ['team', 'party', 'composition', 'synergy'],
    },
    {
      id: 'guide-fast-leveling',
      title: 'Fast Leveling Guide',
      description: 'Efficient grinding locations and XP optimization strategies',
      url: '/guides/fast-leveling',
      tags: ['leveling', 'grinding', 'xp', 'experience'],
    },
    {
      id: 'guide-boss-strategies',
      title: 'Boss Strategies Guide',
      description: 'Comprehensive boss battle tactics and team recommendations',
      url: '/guides/boss-strategies',
      tags: ['boss', 'battle', 'strategy', 'tactics'],
    },
  ];

  guides.forEach((guide) => {
    searchItems.push({
      ...guide,
      category: 'guide',
    });
  });

  // Add tool pages
  const tools = [
    {
      id: 'tool-team-builder',
      title: 'Team Builder Tool',
      description: 'Build and optimize your perfect team with memory management and role analysis',
      url: '/tools/team-builder',
      tags: ['team', 'builder', 'planner', 'memory'],
    },
    {
      id: 'tool-evolution-tree',
      title: 'Evolution Tree',
      description: 'Interactive evolution tree showing all evolution paths',
      url: '/evolution',
      tags: ['evolution', 'tree', 'paths', 'digivolution'],
    },
  ];

  tools.forEach((tool) => {
    searchItems.push({
      ...tool,
      category: 'tool',
    });
  });

  // Add database pages
  const databases = [
    {
      id: 'db-digidex',
      title: 'Digidex',
      description: 'Complete Digimon database with stats, skills, and evolution paths',
      url: '/digidex',
      tags: ['database', 'digimon', 'stats'],
    },
    {
      id: 'db-skills',
      title: 'Skills Database',
      description: 'Complete database of all skills and abilities',
      url: '/database/skills',
      tags: ['skills', 'abilities', 'moves', 'attacks'],
    },
    {
      id: 'db-items',
      title: 'Items Database',
      description: 'Complete database of all items and equipment',
      url: '/database/items',
      tags: ['items', 'equipment', 'consumables'],
    },
    {
      id: 'db-stats',
      title: 'Stats Database',
      description: 'Understanding stats, attributes, and their effects',
      url: '/database/stats',
      tags: ['stats', 'attributes', 'parameters'],
    },
    {
      id: 'db-personalities',
      title: 'Personalities Database',
      description: 'Personality types and their effects on growth',
      url: '/database/personalities',
      tags: ['personality', 'nature', 'growth'],
    },
    {
      id: 'db-agent-skills',
      title: 'Agent Skills Database',
      description: 'Special agent skills and field abilities',
      url: '/database/agent-skills',
      tags: ['agent', 'field', 'skills', 'abilities'],
    },
  ];

  databases.forEach((db) => {
    searchItems.push({
      ...db,
      category: 'database',
    });
  });

  // Add other important pages
  const pages = [
    {
      id: 'page-home',
      title: 'Home',
      description: 'Digimon Time Stranger complete guide and database',
      url: '/',
      tags: ['home', 'main'],
    },
    {
      id: 'page-guides',
      title: 'All Guides',
      description: 'Browse all available guides and tutorials',
      url: '/guides',
      tags: ['guides', 'tutorials', 'help'],
    },
    {
      id: 'page-community',
      title: 'Community Forum',
      description: 'Join discussions, share strategies, and connect with other Tamers',
      url: '/community',
      tags: ['community', 'forum', 'discussion'],
    },
    {
      id: 'page-updates',
      title: 'Updates & Patches',
      description: 'Latest game updates, patches, and news',
      url: '/updates',
      tags: ['updates', 'patches', 'news', 'changelog'],
    },
    {
      id: 'page-pc-settings',
      title: 'PC & Steam Deck Settings',
      description: 'Optimize game settings for PC and Steam Deck',
      url: '/pc/steam-deck',
      tags: ['pc', 'steam deck', 'settings', 'optimization'],
    },
    {
      id: 'page-about',
      title: 'About',
      description: 'About this website and how to use it',
      url: '/about',
      tags: ['about', 'info'],
    },
  ];

  pages.forEach((page) => {
    searchItems.push({
      ...page,
      category: 'page',
    });
  });

  return searchItems;
}

/**
 * Get search index (can be used client-side or server-side)
 */
export async function getSearchIndex(): Promise<SearchItem[]> {
  return buildSearchIndex();
}
