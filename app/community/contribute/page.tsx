import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import { Github, MessageSquare, BookOpen, Video, Bug, Lightbulb, Heart, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generateSEO({
  title: 'Contribute to the Community - Share Your Knowledge',
  description: 'Contribute guides, strategies, and improvements to the Digimon Time Stranger community. Learn how to submit content, report issues, and help other players.',
  url: '/community/contribute',
});

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Contribute to the Community</h1>
              <p className="text-green-100 mt-2">Help us build the best Digimon Time Stranger resource</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why Contribute?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            This website is built by and for the Digimon Time Stranger community. Your contributions help thousands of players discover strategies, overcome challenges, and enjoy the game more. Whether you're sharing a guide, reporting a bug, or suggesting improvements, every contribution matters!
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">2.5K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Community Members</div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">150+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Contributors</div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-200 dark:border-green-800">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">Open</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Source Project</div>
            </div>
          </div>
        </div>

        {/* Ways to Contribute */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ways to Contribute</h2>

          {/* GitHub Issues */}
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-900 dark:bg-gray-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Report Issues or Request Features</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Found a bug? Have an idea for improvement? Open an issue on GitHub to let us know!
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Bug Reports:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Incorrect information, broken links, display issues</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Feature Requests:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> New tools, guides, or functionality you'd like to see</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Content Updates:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> New game updates, patches, or balance changes</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://github.com/digimontimestranger/website/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  Open an Issue
                </a>
              </div>
            </div>
          </div>

          {/* Community Forum */}
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Share in Community Discussions</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Join discussions, answer questions, and share your strategies with other players in our forum.
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Answer Questions:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Help new players with gameplay questions</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Share Builds:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Post your best team compositions and strategies</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Start Discussions:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Create topics about game mechanics, lore, or updates</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/community"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Visit Forum
                </Link>
              </div>
            </div>
          </div>

          {/* Submit Guides */}
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Submit Written Guides</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Have expertise in a specific area? Write a guide to help the community!
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Strategy Guides:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Team building, evolution paths, boss strategies</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Character Guides:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Detailed analysis of specific Digimon</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Beginners Guides:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Help new players get started</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-4">
                  <strong className="text-purple-900 dark:text-purple-300">How to Submit:</strong>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1 ml-4">
                    <li>Write your guide in Markdown format</li>
                    <li>Create a GitHub pull request with your content</li>
                    <li>Our team will review and publish it</li>
                    <li>Your name will be credited as the author</li>
                  </ol>
                </div>
                <a
                  href="https://github.com/digimontimestranger/website/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  Guide Template
                </a>
              </div>
            </div>
          </div>

          {/* Video Content */}
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Video className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Submit Video Guides</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Created helpful video tutorials? We'd love to feature them in our video library!
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">YouTube Videos:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Gameplay guides, walkthroughs, tutorials</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Requirements:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Clear audio, accurate information, family-friendly content</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Featured:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Your video will be added to our video library with full credit</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://github.com/digimontimestranger/website/issues/new?template=video_submission.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <Video className="w-5 h-5" />
                  Submit Video
                </a>
              </div>
            </div>
          </div>

          {/* Data Corrections */}
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Bug className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Report Data Errors</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Found incorrect Digimon stats, evolution requirements, or other data? Help us keep information accurate!
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Stat Corrections:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> HP, Attack, Defense, Speed values</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Evolution Data:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Requirements, paths, or missing evolutions</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Content Errors:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Typos, outdated info, missing content</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://github.com/digimontimestranger/website/issues/new?template=data_correction.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  <Bug className="w-5 h-5" />
                  Report Error
                </a>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Share Ideas & Suggestions</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Have ideas for new features, tools, or improvements? We're always listening!
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">New Tools:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Calculators, planners, interactive features</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">UI Improvements:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Better navigation, design, or user experience</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Content Ideas:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> New guides, databases, or resources</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://github.com/digimontimestranger/website/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                >
                  <Lightbulb className="w-5 h-5" />
                  Share Idea
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Guidelines */}
        <div className="card p-6 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Contribution Guidelines
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong>Be Respectful:</strong> Treat all community members with kindness and respect</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong>Accuracy First:</strong> Ensure all information is tested and verified</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong>Credit Sources:</strong> Give credit when using others' strategies or data</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong>No Spoilers:</strong> Use spoiler warnings for story-related content</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong>Quality Content:</strong> Proofread and format your submissions properly</span>
            </div>
          </div>
        </div>

        {/* Recognition */}
        <div className="card p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🏆 Top Contributors Hall of Fame
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Outstanding contributors are featured here with our deepest gratitude!
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Your contributions help thousands of players enjoy the game. Thank you for being part of our community!
          </p>
        </div>
      </div>
    </div>
  );
}
