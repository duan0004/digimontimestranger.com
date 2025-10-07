'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter } from 'lucide-react';
import { Digimon, Stage, Attribute, Element } from '@/types/digimon';

interface DigidexListProps {
  initialDigimon: Digimon[];
}

const stages: Stage[] = ['Fresh', 'In-Training', 'Rookie', 'Champion', 'Ultimate', 'Mega', 'Ultra'];
const attributes: Attribute[] = ['Vaccine', 'Virus', 'Data', 'Free'];
const elements: Element[] = [
  'Fire',
  'Water',
  'Plant',
  'Earth',
  'Wind',
  'Light',
  'Dark',
  'Electric',
  'Ice',
  'Neutral',
];

export default function DigidexList({ initialDigimon }: DigidexListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [selectedAttribute, setSelectedAttribute] = useState<string>('all');
  const [selectedElement, setSelectedElement] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'stage' | 'memory'>('name');

  // Filter and sort Digimon
  const filteredDigimon = useMemo(() => {
    const filtered = initialDigimon.filter((digimon) => {
      const matchesSearch = digimon.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesStage =
        selectedStage === 'all' || digimon.stage === selectedStage;
      const matchesAttribute =
        selectedAttribute === 'all' || digimon.attribute === selectedAttribute;
      const matchesElement =
        selectedElement === 'all' || digimon.element === selectedElement;

      return (
        matchesSearch && matchesStage && matchesAttribute && matchesElement
      );
    });

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'memory') {
        return a.memory - b.memory;
      } else {
        // stage
        const stageOrder = {
          Fresh: 0,
          'In-Training': 1,
          Rookie: 2,
          Champion: 3,
          Ultimate: 4,
          Mega: 5,
          Ultra: 6,
        };
        return stageOrder[a.stage] - stageOrder[b.stage];
      }
    });

    return filtered;
  }, [
    initialDigimon,
    searchQuery,
    selectedStage,
    selectedAttribute,
    selectedElement,
    sortBy,
  ]);

  const elementColors: Record<string, string> = {
    Fire: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    Water: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    Plant: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    Earth: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
    Wind: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300',
    Light: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    Dark: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    Electric:
      'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
    Ice: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300',
    Neutral: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  };

  return (
    <div>
      {/* Filters */}
      <div className="card p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Filters
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search by Name
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Digimon..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>

          {/* Stage Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Stage
            </label>
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            >
              <option value="all">All Stages</option>
              {stages.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </div>

          {/* Attribute Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Attribute
            </label>
            <select
              value={selectedAttribute}
              onChange={(e) => setSelectedAttribute(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            >
              <option value="all">All Attributes</option>
              {attributes.map((attr) => (
                <option key={attr} value={attr}>
                  {attr}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {/* Element Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Element
            </label>
            <select
              value={selectedElement}
              onChange={(e) => setSelectedElement(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            >
              <option value="all">All Elements</option>
              {elements.map((elem) => (
                <option key={elem} value={elem}>
                  {elem}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as 'name' | 'stage' | 'memory')
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            >
              <option value="name">Name</option>
              <option value="stage">Stage</option>
              <option value="memory">Memory Cost</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredDigimon.length} of {initialDigimon.length} Digimon
        </div>
      </div>

      {/* Digimon Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDigimon.map((digimon) => (
          <Link
            key={digimon.id}
            href={`/digimon/${digimon.slug}`}
            className="card p-5 hover:shadow-xl group"
          >
            {/* Placeholder Image Area */}
            <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-6xl font-bold text-gray-300 dark:text-gray-600">
                {digimon.name.charAt(0)}
              </div>
            </div>

            {/* Digimon Info */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {digimon.name}
            </h3>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                {digimon.stage}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                {digimon.attribute}
              </span>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  elementColors[digimon.element]
                }`}
              >
                {digimon.element}
              </span>
            </div>

            {/* Memory Cost */}
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold mr-1">Memory:</span>
              <span>{digimon.memory}</span>
            </div>

            {/* Quick Stats */}
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <div className="text-gray-500 dark:text-gray-400">HP</div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {digimon.baseStats.hp}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400">ATK</div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {digimon.baseStats.atk}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400">SPD</div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {digimon.baseStats.speed}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filteredDigimon.length === 0 && (
        <div className="card p-12 text-center">
          <div className="text-gray-400 dark:text-gray-600 mb-2">
            <Search className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No Digimon Found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your filters or search query
          </p>
        </div>
      )}
    </div>
  );
}
