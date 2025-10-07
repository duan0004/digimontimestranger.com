import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import { Calendar, Download, Bug, Sparkles } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Updates & Patch Notes - Digimon Time Stranger',
  description:
    'Latest updates, patch notes, and news for Digimon Story: Time Stranger. Stay informed about game updates, fixes, and new content.',
  keywords: [
    'patch notes',
    'updates',
    'game updates',
    'bug fixes',
    'new features',
  ],
  url: '/updates',
});

const updates = [
  {
    version: '1.0.2',
    date: '2025-01-05',
    type: 'patch',
    changes: [
      { type: 'fix', text: 'Fixed memory calculation bug in team builder' },
      { type: 'fix', text: 'Corrected evolution requirements for Mega Digimon' },
      { type: 'improvement', text: 'Improved performance on low-end systems' },
    ],
  },
  {
    version: '1.0.1',
    date: '2025-01-03',
    type: 'hotfix',
    changes: [
      { type: 'fix', text: 'Fixed crash when opening Digidex on Steam Deck' },
      { type: 'fix', text: 'Resolved save file corruption issue' },
    ],
  },
  {
    version: '1.0.0',
    date: '2025-01-02',
    type: 'release',
    changes: [
      { type: 'new', text: '🎉 Official release of Digimon Story: Time Stranger!' },
      { type: 'new', text: 'Over 400 Digimon available' },
      { type: 'new', text: 'Complete story campaign with 30+ hours of gameplay' },
      { type: 'new', text: 'Team building and evolution systems' },
    ],
  },
];

const typeColors = {
  new: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
  fix: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
  improvement: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
};

const typeIcons = {
  release: Sparkles,
  patch: Download,
  hotfix: Bug,
};

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Updates & Patch Notes
          </h1>
          <p className="text-xl text-blue-100">
            Latest game updates and fixes for Digimon Story: Time Stranger
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {updates.map((update, index) => {
            const Icon = typeIcons[update.type];
            return (
              <div key={index} className="card p-6">
                {/* Version Header */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Version {update.version}
                      </h2>
                      <span className="px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full uppercase">
                        {update.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(update.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>
                </div>

                {/* Changes */}
                <ul className="space-y-2">
                  {update.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="flex items-start gap-3">
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${typeColors[change.type] || 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>
                        {change.type}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 flex-1">
                        {change.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="card p-6 mt-8 bg-gradient-to-br from-blue-50 to-primary-50 dark:from-blue-900/20 dark:to-primary-900/20 border-2 border-primary-200 dark:border-primary-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            📢 Stay Updated
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            This page is regularly updated with the latest patch notes and game updates.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            For official announcements, visit the <a href="https://www.bandainamcoent.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Bandai Namco website</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
