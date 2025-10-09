import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Shield, Award } from 'lucide-react';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.bestStarters' });

  return {
    title: t('seoTitle'),
    description: t('seoDescription'),
    alternates: {
      canonical: `/${locale}/guides/best-starters`,
      languages: {
        'en': '/en/guides/best-starters',
        'ja': '/ja/guides/best-starters',
        'es': '/es/guides/best-starters',
        'fr': '/fr/guides/best-starters',
        'de': '/de/guides/best-starters',
        'ko': '/ko/guides/best-starters',
        'zh-CN': '/zh-CN/guides/best-starters',
      },
    },
  };
}

async function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export default async function BestStartersGuidePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.bestStarters' });
  const navT = await getTranslations({ locale, namespace: 'nav' });

  const faqs = [
    {
      question: t('faqs.q1.question'),
      answer: t('faqs.q1.answer'),
    },
    {
      question: t('faqs.q2.question'),
      answer: t('faqs.q2.answer'),
    },
    {
      question: t('faqs.q3.question'),
      answer: t('faqs.q3.answer'),
    },
    {
      question: t('faqs.q4.question'),
      answer: t('faqs.q4.answer'),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(await generateFAQSchema(faqs)),
        }}
      />

      <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <Link href={`/${locale}/guides`} className="hover:text-white transition-colors">
                {navT('guides')}
              </Link>
              <ArrowRight className="w-4 h-4" />
              <span>{t('breadcrumb')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('hero.subtitle')}
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-200">
              <span>{t('hero.updated')}</span>
              <span>{t('hero.readTime')}</span>
              <span>{t('hero.author')}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {t('intro.paragraph1')}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {t('intro.paragraph2')}
              </p>
            </section>

            {/* Quick Summary */}
            <div className="card p-6 mb-12 bg-gradient-to-br from-blue-50 to-primary-50 dark:from-blue-900/20 dark:to-primary-900/20 border-2 border-primary-200 dark:border-primary-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary-600" />
                {t('quickRecs.title')}
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span>{t('quickRecs.bestOverall')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span>{t('quickRecs.bestSpeed')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>{t('quickRecs.bestDefense')}</span>
                </li>
              </ul>
            </div>

            {/* Understanding Starter Mechanics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('mechanics.title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t('mechanics.intro')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>{t('mechanics.statBonus')}</li>
                <li>{t('mechanics.abiGrowth')}</li>
                <li>{t('mechanics.bondMove')}</li>
                <li>{t('mechanics.memoryEfficiency')}</li>
              </ul>
            </section>

            {/* Top Starter Digimon */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('rankings.title')}
              </h2>

              {/* Rank 1: Agumon */}
              <div className="card p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 text-white rounded-full font-bold text-xl">
                    {t('rankings.agumon.rank')}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {t('rankings.agumon.name')}
                    </h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded">
                        {t('rankings.agumon.types.0')}
                      </span>
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                        {t('rankings.agumon.types.1')}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('rankings.agumon.description')}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t('rankings.agumon.strengthsTitle')}</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <li key={i}>{t(`rankings.agumon.strengths.${i}`)}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t('rankings.agumon.weaknessesTitle')}</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {[0, 1, 2].map((i) => (
                        <li key={i}>{t(`rankings.agumon.weaknesses.${i}`)}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Evolution Path:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    {t('rankings.agumon.evolutionPath')}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('rankings.agumon.evolutionTip')}
                  </p>
                </div>
              </div>

              {/* Rank 2: Veemon */}
              <div className="card p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-400 text-white rounded-full font-bold text-xl">
                    {t('rankings.veemon.rank')}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {t('rankings.veemon.name')}
                    </h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded">
                        {t('rankings.veemon.types.0')}
                      </span>
                      <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded">
                        {t('rankings.veemon.types.1')}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('rankings.veemon.description')}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t('rankings.veemon.strengthsTitle')}</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <li key={i}>{t(`rankings.veemon.strengths.${i}`)}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t('rankings.veemon.weaknessesTitle')}</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {[0, 1, 2, 3].map((i) => (
                        <li key={i}>{t(`rankings.veemon.weaknesses.${i}`)}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Recommended Evolution Path:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    {t('rankings.veemon.evolutionPath')}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('rankings.veemon.evolutionTip')}
                  </p>
                </div>
              </div>

              {/* Rank 3: Guilmon */}
              <div className="card p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full font-bold text-xl">
                    {t('rankings.guilmon.rank')}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {t('rankings.guilmon.name')}
                    </h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded">
                        {t('rankings.guilmon.types.0')}
                      </span>
                      <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded">
                        {t('rankings.guilmon.types.1')}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('rankings.guilmon.description')}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t('rankings.guilmon.strengthsTitle')}</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <li key={i}>{t(`rankings.guilmon.strengths.${i}`)}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t('rankings.guilmon.weaknessesTitle')}</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {[0, 1, 2, 3].map((i) => (
                        <li key={i}>{t(`rankings.guilmon.weaknesses.${i}`)}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Evolution Path:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    {t('rankings.guilmon.evolutionPath')}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('rankings.guilmon.evolutionTip')}
                  </p>
                </div>
              </div>
            </section>

            {/* Team Building Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('teamBuilding.title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t('teamBuilding.intro')}
              </p>

              <div className="space-y-4">
                <div className="card p-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">For Agumon Starters:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t('teamBuilding.agumonTip')}
                  </p>
                </div>

                <div className="card p-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">For Veemon Starters:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t('teamBuilding.veemonTip')}
                  </p>
                </div>

                <div className="card p-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">For Guilmon Starters:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t('teamBuilding.guilmonTip')}
                  </p>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('mistakes.title')}
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 dark:bg-red-900/20">
                  <h4 className="font-bold text-red-900 dark:text-red-300 mb-1">
                    {t('mistakes.evolvingEarly.title')}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t('mistakes.evolvingEarly.description')}
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 dark:bg-red-900/20">
                  <h4 className="font-bold text-red-900 dark:text-red-300 mb-1">
                    {t('mistakes.ignoringABI.title')}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t('mistakes.ignoringABI.description')}
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 dark:bg-red-900/20">
                  <h4 className="font-bold text-red-900 dark:text-red-300 mb-1">
                    {t('mistakes.overRelying.title')}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t('mistakes.overRelying.description')}
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('faqs.title')}
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="card p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('conclusion.title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t('conclusion.paragraph1')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t('conclusion.paragraph2')}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {t('conclusion.paragraph3')}
              </p>
            </section>

            {/* Related Guides */}
            <div className="card p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('relatedGuides.title')}
              </h3>
              <div className="space-y-2">
                <Link href={`/${locale}/guides/fast-leveling`} className="block text-primary-600 dark:text-primary-400 hover:underline">
                  {t('relatedGuides.fastLeveling')}
                </Link>
                <Link href={`/${locale}/guides/evolution-guide`} className="block text-primary-600 dark:text-primary-400 hover:underline">
                  {t('relatedGuides.evolutionGuide')}
                </Link>
                <Link href={`/${locale}/tools/team-builder`} className="block text-primary-600 dark:text-primary-400 hover:underline">
                  {t('relatedGuides.teamBuilder')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
