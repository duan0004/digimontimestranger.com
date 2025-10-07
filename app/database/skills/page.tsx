import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import { promises as fs } from 'fs';
import path from 'path';
import Papa from 'papaparse';
import Link from 'next/link';
import { Zap, Filter, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Skills Database - Digimon Time Stranger',
  description:
    'Complete skills database for Digimon Story: Time Stranger. Search and filter all attack skills, support skills, recovery skills, and special abilities.',
  keywords: [
    'skills',
    'abilities',
    'attacks',
    'magic',
    'support',
    'recovery',
    'database',
  ],
  url: '/database/skills',
});

interface Skill {
  id: string;
  name: string;
  type: string;
  element: string;
  damageType: string;
  target: string;
  power: string;
  spCost: string;
  accuracy: string;
  criticalRate: string;
  effect: string;
  description: string;
}

async function loadSkills(): Promise<Skill[]> {
  const filePath = path.join(process.cwd(), 'data', 'skills.csv');
  const fileContent = await fs.readFile(filePath, 'utf-8');

  return new Promise((resolve, reject) => {
    Papa.parse<Skill>(fileContent, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error: Error) => {
        reject(error);
      },
    });
  });
}

const typeColors: Record<string, string> = {
  attack: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
  buff: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
  debuff: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300',
  recovery: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
  status: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
  support: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
};

const elementColors: Record<string, string> = {
  fire: 'text-red-600 dark:text-red-400',
  water: 'text-blue-600 dark:text-blue-400',
  wind: 'text-green-600 dark:text-green-400',
  earth: 'text-yellow-600 dark:text-yellow-400',
  thunder: 'text-yellow-500 dark:text-yellow-300',
  ice: 'text-cyan-600 dark:text-cyan-400',
  light: 'text-amber-500 dark:text-amber-300',
  dark: 'text-purple-700 dark:text-purple-400',
  poison: 'text-purple-600 dark:text-purple-400',
  none: 'text-gray-600 dark:text-gray-400',
};

export default async function SkillsPage() {
  const skills = await loadSkills();

  // Group skills by type
  const skillsByType = skills.reduce((acc, skill) => {
    if (!acc[skill.type]) {
      acc[skill.type] = [];
    }
    acc[skill.type].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/database"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Database
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Zap className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Skills Database
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            Complete list of all skills and abilities in Digimon Story: Time Stranger
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <div className="bg-white/10 px-4 py-2 rounded-lg">
              <strong>{skills.length}</strong> Total Skills
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-lg">
              <strong>{Object.keys(skillsByType).length}</strong> Skill Types
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Skills by Type */}
        {Object.entries(skillsByType).map(([type, typeSkills]) => (
          <div key={type} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className={`inline-block px-3 py-1 rounded text-sm ${typeColors[type] || 'bg-gray-200'}`}>
                {type.charAt(0).toUpperCase() + type.slice(1)} Skills
              </span>
              <span className="text-lg text-gray-600 dark:text-gray-400">
                ({typeSkills.length})
              </span>
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {typeSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="card p-5 hover:shadow-lg transition-shadow"
                >
                  {/* Skill Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    {skill.element !== 'none' && (
                      <span className={`text-xs font-semibold uppercase ${elementColors[skill.element]}`}>
                        {skill.element}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {skill.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {skill.damageType !== 'none' && (
                      <div>
                        <span className="text-gray-500 dark:text-gray-500">Type:</span>
                        <span className="ml-1 font-semibold text-gray-900 dark:text-white capitalize">
                          {skill.damageType}
                        </span>
                      </div>
                    )}
                    <div>
                      <span className="text-gray-500 dark:text-gray-500">SP:</span>
                      <span className="ml-1 font-semibold text-primary-600 dark:text-primary-400">
                        {skill.spCost}
                      </span>
                    </div>
                    {skill.power !== '0' && (
                      <div>
                        <span className="text-gray-500 dark:text-gray-500">Power:</span>
                        <span className="ml-1 font-semibold text-gray-900 dark:text-white">
                          {skill.power}
                        </span>
                      </div>
                    )}
                    <div>
                      <span className="text-gray-500 dark:text-gray-500">Accuracy:</span>
                      <span className="ml-1 font-semibold text-gray-900 dark:text-white">
                        {skill.accuracy}%
                      </span>
                    </div>
                    {skill.criticalRate !== '0' && (
                      <div>
                        <span className="text-gray-500 dark:text-gray-500">Crit:</span>
                        <span className="ml-1 font-semibold text-gray-900 dark:text-white">
                          {skill.criticalRate}%
                        </span>
                      </div>
                    )}
                    <div className="col-span-2">
                      <span className="text-gray-500 dark:text-gray-500">Target:</span>
                      <span className="ml-1 font-semibold text-gray-900 dark:text-white capitalize">
                        {skill.target.replace('-', ' ')}
                      </span>
                    </div>
                  </div>

                  {/* Effect Badge */}
                  {skill.effect && (
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                        {skill.effect.replace(/-/g, ' ')}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
