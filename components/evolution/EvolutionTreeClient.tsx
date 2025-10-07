'use client';

import { useState, useMemo } from 'react';
import { Search, GitBranch, ArrowRight, Info } from 'lucide-react';
import { Digimon } from '@/types/digimon';
import Link from 'next/link';

interface EvolutionTreeClientProps {
  allDigimon: Digimon[];
}

export default function EvolutionTreeClient({ allDigimon }: EvolutionTreeClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStage, setSelectedStage] = useState('all');
  const [selectedElement, setSelectedElement] = useState('all');
  const [viewMode, setViewMode] = useState<'list' | 'tree'>('list');

  // Group Digimon by evolution lines
  const evolutionLines = useMemo(() => {
    const lines: Map<string, Digimon[]> = new Map();
    const processed = new Set<string>();

    // Find all Fresh/In-Training Digimon as starting points
    const starters = allDigimon.filter(
      (d) => d.stage === 'Fresh' || d.stage === 'In-Training' ||
      (d.devolvesTo.length === 0 && d.stage === 'Rookie')
    );

    const buildLine = (digimon: Digimon, line: Digimon[] = []): Digimon[] => {
      if (processed.has(digimon.id)) return line;
      processed.add(digimon.id);

      const newLine = [...line, digimon];

      // Get all evolutions
      if (digimon.evolvesTo.length > 0) {
        const nextEvos = digimon.evolvesTo
          .map(evo => allDigimon.find(d => d.slug === evo.target))
          .filter(Boolean) as Digimon[];

        if (nextEvos.length > 0) {
          return buildLine(nextEvos[0], newLine);
        }
      }

      return newLine;
    };

    starters.forEach(starter => {
      const line = buildLine(starter);
      if (line.length > 0) {
        lines.set(starter.id, line);
      }
    });

    return Array.from(lines.values());
  }, [allDigimon]);

  // Filter Digimon
  const filteredDigimon = useMemo(() => {
    return allDigimon.filter((d) => {
      const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStage = selectedStage === 'all' || d.stage === selectedStage;
      const matchesElement = selectedElement === 'all' || d.element === selectedElement;
      return matchesSearch && matchesStage && matchesElement;
    });
  }, [allDigimon, searchQuery, selectedStage, selectedElement]);

  const stages = ['Rookie', 'Champion', 'Ultimate', 'Mega'];
  const elements = ['Fire', 'Water', 'Plant', 'Earth', 'Wind', 'Light', 'Dark', 'Electric', 'Ice', 'Neutral'];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Controls */}
      <div className="card p-6 mb-8">
        <div className="flex flex-col gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search Digimon..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Filters */}
          <div className="grid sm:grid-cols-3 gap-4">
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
                {elements.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                View Mode
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    viewMode === 'list'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  List
                </button>
                <button
                  onClick={() => setViewMode('tree')}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    viewMode === 'tree'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Tree
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {viewMode === 'list' ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              All Digimon ({filteredDigimon.length})
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDigimon.map((digimon) => (
              <div key={digimon.id} className="card p-4">
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-gray-400 dark:text-gray-600">
                      {digimon.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/digimon/${digimon.slug}`}
                      className="font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {digimon.name}
                    </Link>

                    <div className="flex gap-1 mt-1 flex-wrap">
                      <span className="text-xs px-2 py-0.5 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded">
                        {digimon.stage}
                      </span>
                      <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                        {digimon.element}
                      </span>
                    </div>

                    {/* Evolution Arrows */}
                    {digimon.evolvesTo.length > 0 && (
                      <div className="mt-2 flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                        <ArrowRight className="w-3 h-3" />
                        <span>
                          Evolves to {digimon.evolvesTo.length} form{digimon.evolvesTo.length > 1 ? 's' : ''}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDigimon.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                No Digimon found matching your filters
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-8">
          <div className="flex items-center gap-2 mb-4">
            <GitBranch className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Evolution Lines ({evolutionLines.length})
            </h2>
          </div>

          {evolutionLines.map((line, lineIndex) => (
            <div key={lineIndex} className="card p-6">
              <div className="flex items-center gap-4 overflow-x-auto pb-4">
                {line.map((digimon, index) => (
                  <div key={digimon.id} className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-center">
                      <Link href={`/digimon/${digimon.slug}`}>
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center mb-2 hover:ring-2 hover:ring-primary-500 transition-all cursor-pointer">
                          <span className="text-3xl font-bold text-gray-400 dark:text-gray-600">
                            {digimon.name.charAt(0)}
                          </span>
                        </div>
                      </Link>
                      <div className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                        {digimon.name}
                      </div>
                      <div className="text-xs px-2 py-0.5 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded inline-block">
                        {digimon.stage}
                      </div>
                    </div>

                    {index < line.length - 1 && (
                      <div className="flex flex-col items-center px-4">
                        <ArrowRight className="w-8 h-8 text-primary-600" />
                        {digimon.evolvesTo.length > 0 && digimon.evolvesTo[0].req.level && (
                          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Lv {digimon.evolvesTo[0].req.level}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {evolutionLines.length === 0 && (
            <div className="text-center py-12">
              <Info className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                No evolution lines available
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
