import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import { Github, MessageSquare, BookOpen, Video, Bug, Lightbulb, Heart, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contribute' });

  return generateSEO({
    title: t('title'),
    description: t('description'),
    url: '/community/contribute',
  });
}

export default async function ContributePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contribute' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">{t('header.title')}</h1>
              <p className="text-green-100 mt-2">{t('header.subtitle')}</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('intro.title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {t('intro.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{t('stats.communityMembers')}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.communityMembersLabel')}</div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">{t('stats.contributors')}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.contributorsLabel')}</div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-200 dark:border-green-800">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">{t('stats.openSource')}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.openSourceLabel')}</div>
            </div>
          </div>
        </div>

        {/* Ways to Contribute */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('waysTitle')}</h2>

          {/* GitHub Issues */}
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-900 dark:bg-gray-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('ways.github.title')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('ways.github.description')}
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.github.bugReportsLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.github.bugReportsText')}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.github.featureRequestsLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.github.featureRequestsText')}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.github.contentUpdatesLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.github.contentUpdatesText')}</span>
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
                  {t('ways.github.button')}
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('ways.forum.title')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('ways.forum.description')}
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.forum.answerQuestionsLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.forum.answerQuestionsText')}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.forum.shareBuildsLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.forum.shareBuildsText')}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.forum.startDiscussionsLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.forum.startDiscussionsText')}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/community"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  {t('ways.forum.button')}
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('ways.guides.title')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('ways.guides.description')}
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.guides.strategyGuidesLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.guides.strategyGuidesText')}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.guides.characterGuidesLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.guides.characterGuidesText')}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.guides.beginnerGuidesLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.guides.beginnerGuidesText')}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded mb-4">
                  <strong className="text-purple-900 dark:text-purple-300">{t('ways.guides.howToSubmitTitle')}</strong>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1 ml-4">
                    <li>{t('ways.guides.step1')}</li>
                    <li>{t('ways.guides.step2')}</li>
                    <li>{t('ways.guides.step3')}</li>
                    <li>{t('ways.guides.step4')}</li>
                  </ol>
                </div>
                <a
                  href="https://github.com/digimontimestranger/website/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  {t('ways.guides.button')}
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('ways.videos.title')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('ways.videos.description')}
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.videos.youtubeLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.videos.youtubeText')}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.videos.requirementsLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.videos.requirementsText')}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.videos.featuredLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.videos.featuredText')}</span>
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
                  {t('ways.videos.button')}
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('ways.dataErrors.title')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('ways.dataErrors.description')}
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.dataErrors.statCorrectionsLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.dataErrors.statCorrectionsText')}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.dataErrors.evolutionDataLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.dataErrors.evolutionDataText')}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.dataErrors.contentErrorsLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.dataErrors.contentErrorsText')}</span>
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
                  {t('ways.dataErrors.button')}
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('ways.suggestions.title')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('ways.suggestions.description')}
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.suggestions.newToolsLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.suggestions.newToolsText')}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.suggestions.uiImprovementsLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.suggestions.uiImprovementsText')}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">{t('ways.suggestions.contentIdeasLabel')}</strong>
                      <span className="text-gray-700 dark:text-gray-300"> {t('ways.suggestions.contentIdeasText')}</span>
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
                  {t('ways.suggestions.button')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Guidelines */}
        <div className="card p-6 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('guidelines.title')}
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{t('guidelines.beRespectful')}</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{t('guidelines.accuracyFirst')}</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{t('guidelines.creditSources')}</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{t('guidelines.noSpoilers')}</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{t('guidelines.qualityContent')}</span>
            </div>
          </div>
        </div>

        {/* Recognition */}
        <div className="card p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('recognition.title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {t('recognition.description')}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('recognition.thankYou')}
          </p>
        </div>
      </div>
    </div>
  );
}
