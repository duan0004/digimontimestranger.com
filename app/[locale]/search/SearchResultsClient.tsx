'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, Loader2, ArrowRight, Filter } from 'lucide-react';
import Fuse from 'fuse.js';
import type { SearchItem } from '@/lib/search-data';

const categoryColors = {
  digimon: 'bg-blue-500',
  guide: 'bg-green-500',
  tool: 'bg-purple-500',
  database: 'bg-orange-500',
  page: 'bg-gray-500',
  boss: 'bg-red-500',
};

const categoryLabels = {
  digimon: 'Digimon',
  guide: 'Guide',
  tool: 'Tool',
  database: 'Database',
  page: 'Page',
  boss: 'Boss',
};

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchIndex, setSearchIndex] = useState<SearchItem[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Load search index
  useEffect(() => {
    async function loadSearchIndex() {
      setIsLoading(true);
      try {
        const response = await fetch('/api/search-index');
        const data = await response.json() as SearchItem[];
        setSearchIndex(data);

        const fuseInstance = new Fuse<SearchItem>(data, {
          keys: [
            { name: 'title', weight: 2 },
            { name: 'description', weight: 1 },
            { name: 'tags', weight: 1.5 },
          ],
          threshold: 0.3,
          includeScore: true,
          minMatchCharLength: 2,
        });
        setFuse(fuseInstance);
      } catch (error) {
        console.error('Error loading search index:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadSearchIndex();
  }, []);

  // Perform search
  useEffect(() => {
    if (!fuse || !query.trim()) {
      setResults([]);
      return;
    }

    const searchResults = fuse.search(query);
    let filteredResults = searchResults.map((result) => result.item);

    if (selectedCategory !== 'all') {
      filteredResults = filteredResults.filter(
        (item) => item.category === selectedCategory
      );
    }

    setResults(filteredResults);
  }, [query, fuse, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'digimon', label: 'Digimon' },
    { value: 'boss', label: 'Bosses' },
    { value: 'guide', label: 'Guides' },
    { value: 'tool', label: 'Tools' },
    { value: 'database', label: 'Database' },
    { value: 'page', label: 'Pages' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Search
          </h1>

          {/* Search Input */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Digimon, guides, tools, and more..."
                className="w-full pl-12 pr-4 py-4 text-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
              />
              {isLoading && (
                <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 animate-spin" />
              )}
            </div>
          </form>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1" />
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {query && (
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              {isLoading ? (
                'Searching...'
              ) : (
                <>
                  Found <strong>{results.length}</strong> result
                  {results.length !== 1 ? 's' : ''} for &quot;<strong>{query}</strong>&quot;
                </>
              )}
            </p>
          </div>
        )}

        {/* Search Results */}
        <div className="space-y-4">
          {!query && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Start searching
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Enter a search term to find Digimon, guides, tools, and more
              </p>
            </div>
          )}

          {query && results.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 mx-auto mb-4 text-gray-400 opacity-50" />
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                No results found
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}

          {results.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded object-cover flex-shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2 py-1 text-xs font-medium text-white rounded ${
                        categoryColors[item.category]
                      }`}
                    >
                      {categoryLabels[item.category]}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {item.description}
                  </p>
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SearchResultsClient() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
        </div>
      }
    >
      <SearchResultsContent />
    </Suspense>
  );
}
