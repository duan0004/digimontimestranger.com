'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, SortAsc, Trophy } from 'lucide-react';
import BossCard from '@/components/boss/BossCard';
import { getAllBosses } from '@/lib/boss-data';
import type { Boss } from '@/lib/boss-data';

export default function BossesClient() {
  const allBosses = getAllBosses();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'level' | 'chapter' | 'name'>('chapter');

  // Get unique values for filters
  const difficulties = ['Easy', 'Medium', 'Hard', 'Very Hard', 'Extreme'];
  const chapters = Array.from(new Set(allBosses.map(b => b.chapter))).sort((a, b) => a - b);

  // Filter and sort bosses
  const filteredBosses = useMemo(() => {
    const filtered = allBosses.filter((boss) => {
      const matchesSearch =
        boss.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        boss.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        boss.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDifficulty =
        selectedDifficulty === 'all' || boss.difficulty === selectedDifficulty;

      const matchesChapter =
        selectedChapter === 'all' || boss.chapter === parseInt(selectedChapter);

      return matchesSearch && matchesDifficulty && matchesChapter;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'level':
          return a.level - b.level;
        case 'chapter':
          return a.chapter - b.chapter;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [allBosses, searchQuery, selectedDifficulty, selectedChapter, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
                Boss Database
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Complete strategies and information for all bosses
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="card p-4">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {allBosses.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Bosses</div>
            </div>
            <div className="card p-4">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {chapters.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Chapters</div>
            </div>
            <div className="card p-4">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {allBosses.filter(b => b.difficulty === 'Hard' || b.difficulty === 'Very Hard' || b.difficulty === 'Extreme').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Hard+ Bosses</div>
            </div>
            <div className="card p-4">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {allBosses.filter(b => b.difficulty === 'Extreme').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Extreme</div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bosses by name, location, or description..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Difficulty Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                >
                  <option value="all">All Difficulties</option>
                  {difficulties.map((diff) => (
                    <option key={diff} value={diff}>
                      {diff}
                    </option>
                  ))}
                </select>
              </div>

              {/* Chapter Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <select
                  value={selectedChapter}
                  onChange={(e) => setSelectedChapter(e.target.value)}
                  className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                >
                  <option value="all">All Chapters</option>
                  {chapters.map((ch) => (
                    <option key={ch} value={ch}>
                      Chapter {ch}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <SortAsc className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'level' | 'chapter' | 'name')}
                  className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                >
                  <option value="chapter">Sort by Chapter</option>
                  <option value="level">Sort by Level</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredBosses.length} of {allBosses.length} bosses
          </div>
        </div>

        {/* Bosses Grid */}
        {filteredBosses.length === 0 ? (
          <div className="text-center py-12">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-gray-400 opacity-50" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No bosses found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBosses.map((boss) => (
              <BossCard key={boss.id} boss={boss} />
            ))}
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-12 card p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Boss Battle Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                ⚔️ Before the Battle
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Check boss weaknesses and bring appropriate types</li>
                <li>• Ensure your team is at or above recommended level</li>
                <li>• Stock up on healing and revival items</li>
                <li>• Save your game before challenging difficult bosses</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                🛡️ During the Battle
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Watch HP thresholds for phase changes</li>
                <li>• Keep healer's SP above 50% for emergencies</li>
                <li>• Use stat buffs/debuffs for tough fights</li>
                <li>• Don't hesitate to use items - survival first!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
