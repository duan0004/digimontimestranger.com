import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import { Play, Clock, TrendingUp, Users, Gamepad2, BookOpen, Target, Zap } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Video Guides & Tutorials - Complete Video Library',
  description: 'Watch comprehensive video guides and tutorials for Digimon Time Stranger. Learn strategies, mechanics, and tips through our curated video library.',
  url: '/videos',
});

interface Video {
  id: string;
  title: string;
  description: string;
  videoId: string;
  duration: string;
  category: 'beginner' | 'advanced' | 'boss' | 'evolution' | 'team-building' | 'speedrun';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  views?: string;
}

const videos: Video[] = [
  {
    id: 'getting-started',
    title: 'Getting Started Guide',
    description: 'Complete beginner guide covering the basics, starter selection, and early game strategies.',
    videoId: '2oQb1vYe1uQ',
    duration: '15:32',
    category: 'beginner',
    difficulty: 'Easy',
    views: '85K',
  },
  {
    id: 'evolution-basics',
    title: 'Evolution System Explained',
    description: 'Deep dive into evolution mechanics, requirements, and how to get the Digimon you want.',
    videoId: 'kxQBQJmX_MU',
    duration: '12:45',
    category: 'evolution',
    difficulty: 'Easy',
    views: '62K',
  },
  {
    id: 'team-building-101',
    title: 'Team Building Fundamentals',
    description: 'Learn how to build balanced teams with proper role distribution and element coverage.',
    videoId: 'uaLHMFZdCuE',
    duration: '18:20',
    category: 'team-building',
    difficulty: 'Medium',
    views: '48K',
  },
  {
    id: 'boss-rush-guide',
    title: 'Boss Rush Strategies',
    description: 'Comprehensive strategies for all major boss battles with recommended teams and tactics.',
    videoId: 'ILR81Az7MoQ',
    duration: '22:15',
    category: 'boss',
    difficulty: 'Medium',
    views: '71K',
  },
  {
    id: 'advanced-mechanics',
    title: 'Advanced Game Mechanics',
    description: 'Master advanced techniques like stat optimization, personality system, and hidden mechanics.',
    videoId: 'cPBLhpfaklc',
    duration: '25:40',
    category: 'advanced',
    difficulty: 'Hard',
    views: '34K',
  },
  {
    id: 'memory-management',
    title: 'Memory Management Mastery',
    description: 'Complete guide to memory costs, team optimization, and maximizing your party potential.',
    videoId: 'bFEu9XOLmg0',
    duration: '14:28',
    category: 'team-building',
    difficulty: 'Medium',
    views: '42K',
  },
  {
    id: 'mega-evolution-guide',
    title: 'Mega Evolution Complete Guide',
    description: 'Everything you need to know about mega evolution requirements and strategies.',
    videoId: 'JUuTkI1V774',
    duration: '16:55',
    category: 'evolution',
    difficulty: 'Medium',
    views: '56K',
  },
  {
    id: 'endgame-content',
    title: 'Endgame Content & Post-Game',
    description: 'Explore endgame content, post-game challenges, and hidden superbosses.',
    videoId: 'f55FFqi09vY',
    duration: '28:12',
    category: 'advanced',
    difficulty: 'Hard',
    views: '39K',
  },
  {
    id: 'competitive-builds',
    title: 'Top 10 Competitive Team Builds',
    description: 'The best team compositions for competitive play and difficult challenges.',
    videoId: '13m4Ylsv6A4',
    duration: '20:33',
    category: 'team-building',
    difficulty: 'Hard',
    views: '67K',
  },
  {
    id: 'speedrun-basics',
    title: 'Speedrun Route & Strategies',
    description: 'Learn speedrunning techniques and optimal routes for fast completion.',
    videoId: 'ICCFACvxF84',
    duration: '31:47',
    category: 'speedrun',
    difficulty: 'Hard',
    views: '28K',
  },
  {
    id: 'hidden-secrets',
    title: 'Hidden Secrets & Easter Eggs',
    description: 'Discover all hidden secrets, easter eggs, and rare Digimon locations.',
    videoId: 'JRCH0qPHYzo',
    duration: '17:25',
    category: 'advanced',
    difficulty: 'Medium',
    views: '52K',
  },
  {
    id: 'ultimate-boss-guide',
    title: 'Ultimate Boss Battle Compilation',
    description: 'All boss battles with optimal strategies, no damage runs, and commentary.',
    videoId: 'HRkN-3QM9Gk',
    duration: '45:18',
    category: 'boss',
    difficulty: 'Hard',
    views: '91K',
  },
];

const categories = [
  { id: 'all', name: 'All Videos', icon: Play, color: 'bg-blue-500' },
  { id: 'beginner', name: 'Beginner', icon: BookOpen, color: 'bg-green-500' },
  { id: 'evolution', name: 'Evolution', icon: TrendingUp, color: 'bg-purple-500' },
  { id: 'team-building', name: 'Team Building', icon: Users, color: 'bg-orange-500' },
  { id: 'boss', name: 'Boss Battles', icon: Target, color: 'bg-red-500' },
  { id: 'advanced', name: 'Advanced', icon: Zap, color: 'bg-yellow-500' },
  { id: 'speedrun', name: 'Speedrun', icon: Clock, color: 'bg-pink-500' },
];

function getDifficultyColor(difficulty: string) {
  const colors: Record<string, string> = {
    Easy: 'text-green-600 bg-green-50 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800',
    Medium: 'text-yellow-600 bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800',
    Hard: 'text-red-600 bg-red-50 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800',
  };
  return colors[difficulty] || colors.Medium;
}

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Video Guides & Tutorials</h1>
              <p className="text-blue-100 mt-2">Watch comprehensive guides to master every aspect of the game</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">12</div>
              <div className="text-sm text-blue-100">Video Guides</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">5+ hrs</div>
              <div className="text-sm text-blue-100">Total Content</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">675K+</div>
              <div className="text-sm text-blue-100">Total Views</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">6</div>
              <div className="text-sm text-blue-100">Categories</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="card p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {category.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {category.id === 'all' ? videos.length : videos.filter(v => v.category === category.id).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">All Video Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="card overflow-hidden group hover:shadow-xl transition-shadow">
                {/* Video Embed */}
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 text-xs font-bold rounded border ${getDifficultyColor(video.difficulty)}`}>
                      {video.difficulty}
                    </span>
                    <span className="px-2 py-1 text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded capitalize">
                      {video.category.replace('-', ' ')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {video.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{video.duration}</span>
                    </div>
                    {video.views && (
                      <div className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        <span>{video.views} views</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Categories Sections */}
        <div className="space-y-8">
          {/* Beginner Videos */}
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Beginner Guides</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Perfect for new players starting their journey</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {videos.filter(v => v.category === 'beginner').map((video) => (
                <div key={video.id} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <div className="relative w-40 h-24 bg-gray-900 rounded flex-shrink-0 overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 truncate">{video.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">{video.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Boss Battle Videos */}
          <div className="card p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Boss Battle Guides</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Master every boss encounter with detailed strategies</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {videos.filter(v => v.category === 'boss').map((video) => (
                <div key={video.id} className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                  <div className="relative w-40 h-24 bg-gray-900 rounded flex-shrink-0 overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 truncate">{video.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">{video.description}</p>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span>{video.duration}</span>
                      </div>
                      {video.views && (
                        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                          <Play className="w-3 h-3" />
                          <span>{video.views}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced & Speedrun */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-white">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Advanced Techniques</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">For experienced players</p>
                </div>
              </div>
              <div className="space-y-3">
                {videos.filter(v => v.category === 'advanced').slice(0, 2).map((video) => (
                  <div key={video.id} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{video.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-1">{video.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Speedrun Content</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Optimize your playtime</p>
                </div>
              </div>
              <div className="space-y-3">
                {videos.filter(v => v.category === 'speedrun').map((video) => (
                  <div key={video.id} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{video.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-1">{video.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="card p-8 mt-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want More Content?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our YouTube channel for weekly video guides, updates, and community highlights. Never miss new strategies and tips!
          </p>
          <a
            href="https://www.youtube.com/@DigimonTimeStranger"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
          >
            <Play className="w-5 h-5" />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
