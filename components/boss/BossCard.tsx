import Link from 'next/link';
import { Trophy, Heart, Zap, Shield, MapPin, TrendingUp } from 'lucide-react';
import type { Boss } from '@/lib/boss-data';
import { getDifficultyColor, getAttributeColor } from '@/lib/boss-data';

interface BossCardProps {
  boss: Boss;
}

export default function BossCard({ boss }: BossCardProps) {
  return (
    <Link
      href={`/database/bosses/${boss.id}`}
      className="block group"
    >
      <div className="card overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
        {/* Boss Image Header */}
        <div className="relative h-48 bg-gradient-to-br from-slate-900 to-slate-700 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

          {/* Difficulty Badge */}
          <div className="absolute top-3 right-3 z-20">
            <span className={`px-3 py-1 text-xs font-bold border rounded-full ${getDifficultyColor(boss.difficulty)}`}>
              {boss.difficulty}
            </span>
          </div>

          {/* Chapter Badge */}
          <div className="absolute top-3 left-3 z-20">
            <span className="px-3 py-1 text-xs font-bold bg-primary-600 text-white rounded-full">
              Chapter {boss.chapter}
            </span>
          </div>

          {/* Boss Level */}
          <div className="absolute bottom-3 left-3 z-20">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <TrendingUp className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-bold text-white">Lv. {boss.level}</span>
            </div>
          </div>
        </div>

        {/* Boss Info */}
        <div className="p-5">
          {/* Name and Attribute */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1">
                {boss.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{boss.location}</span>
              </div>
            </div>
            <div className={`px-2 py-1 text-xs font-bold text-white rounded ${getAttributeColor(boss.attribute)}`}>
              {boss.attribute}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {boss.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="text-center">
              <Heart className="w-4 h-4 mx-auto mb-1 text-red-500" />
              <div className="text-xs font-semibold text-gray-900 dark:text-white">
                {boss.hp.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">HP</div>
            </div>
            <div className="text-center">
              <Zap className="w-4 h-4 mx-auto mb-1 text-yellow-500" />
              <div className="text-xs font-semibold text-gray-900 dark:text-white">
                {boss.stats.atk}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">ATK</div>
            </div>
            <div className="text-center">
              <Shield className="w-4 h-4 mx-auto mb-1 text-blue-500" />
              <div className="text-xs font-semibold text-gray-900 dark:text-white">
                {boss.stats.def}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">DEF</div>
            </div>
            <div className="text-center">
              <Trophy className="w-4 h-4 mx-auto mb-1 text-purple-500" />
              <div className="text-xs font-semibold text-gray-900 dark:text-white">
                {boss.stats.int}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">INT</div>
            </div>
          </div>

          {/* Weaknesses */}
          <div className="mb-3">
            <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Weaknesses:
            </div>
            <div className="flex flex-wrap gap-1">
              {boss.weaknesses.map((weakness) => (
                <span
                  key={weakness}
                  className="px-2 py-0.5 text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded"
                >
                  {weakness}
                </span>
              ))}
            </div>
          </div>

          {/* Recommended Level */}
          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Recommended Level: <span className="font-bold text-primary-600 dark:text-primary-400">{boss.recommendedLevel}+</span>
            </div>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500 rounded-lg pointer-events-none transition-colors"></div>
      </div>
    </Link>
  );
}
