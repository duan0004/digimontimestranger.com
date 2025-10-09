import bossesData from '@/data/bosses.json';

export interface BossSkill {
  name: string;
  type: 'Physical' | 'Special' | 'Status';
  power: number;
  description: string;
}

export interface BossPhase {
  phase: number;
  hpThreshold: string;
  behavior: string;
  strategy: string;
}

export interface Boss {
  id: string;
  name: string;
  chapter: number;
  location: string;
  level: number;
  hp: number;
  sp: number;
  attribute: string;
  type: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard' | 'Extreme';
  image: string;
  description: string;
  stats: {
    atk: number;
    def: number;
    int: number;
    spd: number;
  };
  weaknesses: string[];
  resistances: string[];
  skills: BossSkill[];
  drops: string[];
  recommendedLevel: number;
  strategy: string;
  recommendedTeam: string[];
  phases: BossPhase[];
}

/**
 * Get all bosses
 */
export function getAllBosses(): Boss[] {
  return bossesData as Boss[];
}

/**
 * Get a single boss by ID
 */
export function getBossById(id: string): Boss | undefined {
  return bossesData.find((boss) => boss.id === id) as Boss | undefined;
}

/**
 * Get all boss IDs for static generation
 */
export function getAllBossIds(): string[] {
  return bossesData.map((boss) => boss.id);
}

/**
 * Get bosses by chapter
 */
export function getBossesByChapter(chapter: number): Boss[] {
  return bossesData.filter((boss) => boss.chapter === chapter) as Boss[];
}

/**
 * Get bosses by difficulty
 */
export function getBossesByDifficulty(difficulty: string): Boss[] {
  return bossesData.filter((boss) => boss.difficulty === difficulty) as Boss[];
}

/**
 * Get bosses sorted by level
 */
export function getBossesSortedByLevel(): Boss[] {
  return [...bossesData].sort((a, b) => a.level - b.level) as Boss[];
}

/**
 * Get difficulty color
 */
export function getDifficultyColor(difficulty: string): string {
  const colors: Record<string, string> = {
    Easy: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    Medium: 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    Hard: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
    'Very Hard': 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    Extreme: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
  };
  return colors[difficulty] || colors.Medium;
}

/**
 * Get attribute color
 */
export function getAttributeColor(attribute: string): string {
  const colors: Record<string, string> = {
    Vaccine: 'bg-blue-500',
    Virus: 'bg-purple-500',
    Data: 'bg-green-500',
    Free: 'bg-gray-500',
    Unknown: 'bg-slate-500',
  };
  return colors[attribute] || colors.Free;
}
