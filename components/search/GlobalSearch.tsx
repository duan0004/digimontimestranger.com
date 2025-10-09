'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Loader2, ArrowRight } from 'lucide-react';
import Fuse from 'fuse.js';
import type { SearchItem } from '@/lib/search-data';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchIndex, setSearchIndex] = useState<SearchItem[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Load search index
  useEffect(() => {
    async function loadSearchIndex() {
      setIsLoading(true);
      try {
        const response = await fetch('/api/search-index');
        const data = await response.json() as SearchItem[];
        setSearchIndex(data);

        // Initialize Fuse.js
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

    if (isOpen && searchIndex.length === 0) {
      loadSearchIndex();
    }
  }, [isOpen, searchIndex.length]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Perform search
  useEffect(() => {
    if (!fuse || !query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const searchResults = fuse.search(query, { limit: 10 });
    setResults(searchResults.map((result) => result.item));
    setSelectedIndex(0);
  }, [query, fuse]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            navigateToResult(results[selectedIndex]);
          }
          break;
      }
    },
    [isOpen, results, selectedIndex, onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Auto-scroll selected item into view
  useEffect(() => {
    if (resultsRef.current) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth',
        });
      }
    }
  }, [selectedIndex]);

  const navigateToResult = (item: SearchItem) => {
    router.push(item.url);
    onClose();
    setQuery('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl mt-20 bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Digimon, guides, tools..."
            className="flex-1 bg-transparent text-lg outline-none text-gray-900 dark:text-white placeholder-gray-400"
          />
          {isLoading && <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />}
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Search Results */}
        <div
          ref={resultsRef}
          className="max-h-[60vh] overflow-y-auto"
        >
          {query.trim() && results.length === 0 && !isLoading && (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-lg font-medium">No results found</p>
              <p className="text-sm">Try searching for a different term</p>
            </div>
          )}

          {!query.trim() && (
            <div className="p-6">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                POPULAR SEARCHES
              </h3>
              <div className="space-y-2">
                {['Agumon', 'Evolution Guide', 'Team Builder', 'Boss Strategies', 'Skills Database'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    <Search className="w-4 h-4 inline mr-2 text-gray-400" />
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.length > 0 && (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {results.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => navigateToResult(item)}
                  className={`w-full px-4 py-3 text-left transition-colors ${
                    index === selectedIndex
                      ? 'bg-primary-50 dark:bg-primary-900/20'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-10 h-10 rounded object-cover flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-2 py-0.5 text-xs font-medium text-white rounded ${
                            categoryColors[item.category]
                          }`}
                        >
                          {categoryLabels[item.category]}
                        </span>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                        {item.description}
                      </p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {item.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 flex-shrink-0 ${
                        index === selectedIndex ? 'text-primary-600' : 'text-gray-400'
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs">
                  ↑↓
                </kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs">
                  Enter
                </kbd>
                Select
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs">
                  Esc
                </kbd>
                Close
              </span>
            </div>
            {results.length > 0 && (
              <span>{results.length} result{results.length !== 1 ? 's' : ''}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
