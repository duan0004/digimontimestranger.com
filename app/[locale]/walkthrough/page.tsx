import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { BookOpen, MapPin, Trophy, Clock, AlertTriangle, Star, ChevronRight } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Complete Walkthrough',
  description: 'Complete chapter-by-chapter walkthrough for Digimon Time Stranger with all missions, bosses, collectibles, and story choices.',
  url: '/walkthrough',
});

const chapters = [
  {
    chapter: 1,
    title: 'The Beginning',
    location: 'File Island',
    description: 'Your journey begins on File Island. Learn the basics and recruit your first partner Digimon.',
    difficulty: 'Easy',
    averageTime: '2-3 hours',
    mainBosses: ['Kuwagamon'],
    keyCollectibles: 3,
    status: 'available',
  },
  {
    chapter: 2,
    title: 'Dark Shadows',
    location: 'Infinity Mountain',
    description: 'Face the forces of darkness as Devimon threatens the Digital World.',
    difficulty: 'Easy',
    averageTime: '3-4 hours',
    mainBosses: ['Devimon'],
    keyCollectibles: 5,
    status: 'available',
  },
  {
    chapter: 3,
    title: 'Desert Kingdom',
    location: 'Server Desert',
    description: 'Navigate the treacherous desert and confront the self-proclaimed king.',
    difficulty: 'Medium',
    averageTime: '4-5 hours',
    mainBosses: ['Etemon'],
    keyCollectibles: 7,
    status: 'available',
  },
  {
    chapter: 4,
    title: 'Vampire\'s Lair',
    location: 'Geko Swamp',
    description: 'Enter the dark swamps and battle the vampire lord Myotismon.',
    difficulty: 'Medium',
    averageTime: '4-5 hours',
    mainBosses: ['Myotismon'],
    keyCollectibles: 6,
    status: 'available',
  },
  {
    chapter: 5,
    title: 'Dark Masters Rise',
    location: 'Spiral Mountain',
    description: 'The Dark Masters reveal themselves. Face Piedmon in a battle of illusions.',
    difficulty: 'Hard',
    averageTime: '5-6 hours',
    mainBosses: ['Piedmon'],
    keyCollectibles: 8,
    status: 'available',
  },
  {
    chapter: 6,
    title: 'Steel Factory',
    location: 'Machine City',
    description: 'Infiltrate Machinedramon\'s fortress and shut down the mechanical menace.',
    difficulty: 'Hard',
    averageTime: '5-6 hours',
    mainBosses: ['Machinedramon'],
    keyCollectibles: 9,
    status: 'available',
  },
  {
    chapter: 7,
    title: 'Ocean Depths',
    location: 'Net Ocean',
    description: 'Dive into the depths of the Net Ocean for an underwater adventure.',
    difficulty: 'Hard',
    averageTime: '4-5 hours',
    mainBosses: ['MetalSeadramon'],
    keyCollectibles: 7,
    status: 'available',
  },
  {
    chapter: 8,
    title: 'Sky High Battle',
    location: 'Cloud Continent',
    description: 'Soar through the skies and prepare for the final confrontation.',
    difficulty: 'Very Hard',
    averageTime: '5-7 hours',
    mainBosses: ['Puppetmon'],
    keyCollectibles: 10,
    status: 'available',
  },
  {
    chapter: 9,
    title: 'The Final Battle',
    location: 'Dark Area',
    description: 'The ultimate showdown against Apocalymon. The fate of both worlds hangs in the balance.',
    difficulty: 'Extreme',
    averageTime: '6-8 hours',
    mainBosses: ['Apocalymon'],
    keyCollectibles: 12,
    status: 'available',
  },
];

const difficultyColors: Record<string, string> = {
  Easy: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700',
  Medium: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700',
  Hard: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700',
  'Very Hard': 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700',
  Extreme: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700',
};

export default function WalkthroughPage() {
  const totalHours = chapters.reduce((sum, ch) => {
    const avg = ch.averageTime.split('-').map(t => parseInt(t))[0];
    return sum + avg;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
                Complete Walkthrough
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Chapter-by-chapter guide through the entire game
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="card p-4">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {chapters.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Chapters</div>
            </div>
            <div className="card p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {totalHours}+ hrs
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Playtime</div>
            </div>
            <div className="card p-4">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {chapters.reduce((sum, ch) => sum + ch.keyCollectibles, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Collectibles</div>
            </div>
            <div className="card p-4">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                {chapters.reduce((sum, ch) => sum + ch.mainBosses.length, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Boss Battles</div>
            </div>
          </div>
        </div>

        {/* Guide Features */}
        <div className="card p-6 mb-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            📖 What's Included in Each Chapter
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Step-by-step walkthrough</strong>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Detailed mission progression</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Boss strategies</strong>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tactics for every boss encounter</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Collectible locations</strong>
                  <p className="text-sm text-gray-600 dark:text-gray-400">All items, skills, and Digimon</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Story choices</strong>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Key decisions and consequences</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Team recommendations</strong>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Optimal Digimon for each area</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Side quests</strong>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Optional missions and rewards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chapters
          </h2>

          {chapters.map((chapter) => (
            <Link
              key={chapter.chapter}
              href={`/walkthrough/chapter-${chapter.chapter}`}
              className="block group"
            >
              <div className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Chapter Number */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{chapter.chapter}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1">
                            {chapter.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{chapter.location}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {chapter.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-3">
                        <div className={`px-3 py-1 text-xs font-bold border rounded-full ${difficultyColors[chapter.difficulty]}`}>
                          {chapter.difficulty}
                        </div>
                        <div className="px-3 py-1 text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {chapter.averageTime}
                        </div>
                        <div className="px-3 py-1 text-xs font-bold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full flex items-center gap-1">
                          <Trophy className="w-3 h-3" />
                          {chapter.mainBosses.join(', ')}
                        </div>
                        <div className="px-3 py-1 text-xs font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {chapter.keyCollectibles} Collectibles
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress bar effect */}
                <div className="h-1 bg-gray-200 dark:bg-gray-700">
                  <div className="h-full bg-gradient-to-r from-primary-600 to-primary-400 group-hover:w-full transition-all duration-500" style={{ width: '0%' }}></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-12 card p-6 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-2 border-orange-200 dark:border-orange-800">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                General Tips
              </h2>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>• <strong>Save frequently</strong> - Use save points before bosses and major decisions</p>
                <p>• <strong>Level grinding</strong> - If stuck, level up in previous areas for 2-3 levels</p>
                <p>• <strong>Item stock</strong> - Always carry revival items and HP recovery</p>
                <p>• <strong>Team diversity</strong> - Maintain a balanced team with different attributes</p>
                <p>• <strong>Missables</strong> - Items marked as "missable" cannot be obtained later!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
