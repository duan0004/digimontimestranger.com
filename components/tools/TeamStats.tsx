'use client';

import { TrendingUp, Zap } from 'lucide-react';
import { Element } from '@/types/digimon';

interface TeamStatsProps {
  stats: {
    memoryUsed: number;
    memoryCap: number;
    elements: Record<Element, number>;
    avgSpeed: number;
    teamSize: number;
  };
}

const elementColors: Record<Element, string> = {
  Fire: 'bg-red-500',
  Water: 'bg-blue-500',
  Plant: 'bg-green-500',
  Earth: 'bg-amber-600',
  Wind: 'bg-cyan-500',
  Light: 'bg-yellow-400',
  Dark: 'bg-purple-600',
  Electric: 'bg-indigo-500',
  Ice: 'bg-teal-500',
  Neutral: 'bg-gray-500',
};

export default function TeamStats({ stats }: TeamStatsProps) {
  const memoryPercentage = (stats.memoryUsed / stats.memoryCap) * 100;
  const isOverCapacity = stats.memoryUsed > stats.memoryCap;

  const speedTier =
    stats.avgSpeed >= 80
      ? { label: 'Fast', color: 'text-green-600 dark:text-green-400' }
      : stats.avgSpeed >= 60
      ? { label: 'Medium', color: 'text-yellow-600 dark:text-yellow-400' }
      : { label: 'Slow', color: 'text-red-600 dark:text-red-400' };

  const elementCoverage = Object.entries(stats.elements).filter(
    ([_, count]) => count > 0
  );

  return (
    <div className="space-y-6">
      {/* Memory Usage */}
      <div className="card p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Memory Usage
        </h3>
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-gray-400">Used</span>
            <span className={`font-semibold ${isOverCapacity ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-white'}`}>
              {stats.memoryUsed} / {stats.memoryCap}
            </span>
          </div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                isOverCapacity
                  ? 'bg-red-500'
                  : memoryPercentage > 80
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
              }`}
              style={{ width: `${Math.min(100, memoryPercentage)}%` }}
            ></div>
          </div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          {isOverCapacity
            ? '⚠️ Over capacity!'
            : memoryPercentage > 80
            ? 'Near capacity'
            : `${Math.round(100 - memoryPercentage)}% remaining`}
        </p>
      </div>

      {/* Speed Analysis */}
      <div className="card p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          Speed Analysis
        </h3>
        {stats.teamSize > 0 ? (
          <>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-400">Average Speed</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.avgSpeed}
              </span>
            </div>
            <div className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${speedTier.color} bg-opacity-10`}>
              {speedTier.label} Team
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
              {stats.avgSpeed >= 80
                ? 'Your team will often move first in battle'
                : stats.avgSpeed >= 60
                ? 'Balanced speed, good for most situations'
                : 'Consider adding faster Digimon'}
            </p>
          </>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Add Digimon to see speed analysis
          </p>
        )}
      </div>

      {/* Element Coverage */}
      <div className="card p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary-600" />
          Element Coverage
        </h3>
        {elementCoverage.length > 0 ? (
          <>
            <div className="space-y-3 mb-4">
              {elementCoverage.map(([element, count]) => (
                <div key={element}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">
                      {element}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {count}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${elementColors[element as Element]}`}
                      style={{ width: `${(count / stats.teamSize) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  Coverage
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {elementCoverage.length} / 10 Types
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {elementCoverage.length >= 5
                ? '✓ Great type coverage!'
                : elementCoverage.length >= 3
                ? 'Good coverage, consider diversifying'
                : 'Add more element types'}
            </p>
          </>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Add Digimon to see element coverage
          </p>
        )}
      </div>

      {/* Quick Tips */}
      <div className="card p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
          💡 Quick Tips
        </h3>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>• Aim for diverse element coverage</li>
          <li>• Balance offensive and defensive stats</li>
          <li>• Keep memory usage under cap</li>
          <li>• Mix speed tiers for flexibility</li>
        </ul>
      </div>
    </div>
  );
}
