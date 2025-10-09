import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Heart, Zap, Shield, Brain, Wind, Trophy, MapPin, Target,
  Users, Sword, AlertTriangle, Gift, TrendingUp, ChevronLeft,
  CheckCircle, XCircle
} from 'lucide-react';
import { getBossById, getAllBossIds, getDifficultyColor, getAttributeColor } from '@/lib/boss-data';
import { generateMetadata as generateSEO } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';

interface BossPageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export async function generateStaticParams() {
  const bossIds = getAllBossIds();
  return bossIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }: BossPageProps): Promise<Metadata> {
  const { id } = await params;
  const boss = getBossById(id);

  if (!boss) {
    return generateSEO({
      title: 'Boss Not Found',
      description: 'The requested boss could not be found.',
      url: `/database/bosses/${id}`,
    });
  }

  return generateSEO({
    title: `${boss.name} - Boss Guide`,
    description: `Complete boss guide for ${boss.name}: strategies, weaknesses, recommended team, and phase breakdowns.`,
    url: `/database/bosses/${id}`,
  });
}

export default async function BossPage({ params }: BossPageProps) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: 'database.bosses' });
  const boss = getBossById(id);

  if (!boss) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Button */}
        <Link
          href={`/${locale}/database/bosses`}
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Boss Database
        </Link>

        {/* Boss Header */}
        <div className="card overflow-hidden mb-8">
          <div className="relative h-64 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-5xl font-bold text-white mb-2">{boss.name}</h1>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`px-3 py-1 text-sm font-bold border rounded-full ${getDifficultyColor(boss.difficulty)}`}>
                      {boss.difficulty}
                    </span>
                    <span className={`px-3 py-1 text-sm font-bold text-white rounded ${getAttributeColor(boss.attribute)}`}>
                      {boss.attribute}
                    </span>
                    <span className="px-3 py-1 text-sm font-bold bg-primary-600 text-white rounded-full">
                      Chapter {boss.chapter}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <TrendingUp className="w-5 h-5 text-accent-400" />
                  <span className="text-xl font-bold text-white">Lv. {boss.level}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{boss.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="card p-6 mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {boss.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Stats and Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Core Stats */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-primary-600" />
                Stats
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">{t('hp')}</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {boss.hp.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">SP</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {boss.sp}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Sword className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">ATK</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {boss.stats.atk}
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">DEF</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {boss.stats.def}
                    </div>
                  </div>

                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Brain className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">INT</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {boss.stats.int}
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Wind className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">SPD</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {boss.stats.spd}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weaknesses & Resistances */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-red-600" />
                {t('weaknesses')}
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {boss.weaknesses.map((weakness) => (
                  <span
                    key={weakness}
                    className="px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg font-medium flex items-center gap-1"
                  >
                    <XCircle className="w-4 h-4" />
                    {weakness}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                {t('resistances')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {boss.resistances.map((resistance) => (
                  <span
                    key={resistance}
                    className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg font-medium flex items-center gap-1"
                  >
                    <CheckCircle className="w-4 h-4" />
                    {resistance}
                  </span>
                ))}
              </div>
            </div>

            {/* Drops */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5 text-purple-600" />
                {t('rewards')}
              </h3>
              <ul className="space-y-2">
                {boss.drops.map((drop, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                    {drop}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Strategy and Skills */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Strategy */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                {t('strategy')}
              </h2>
              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>{t('level')}: {boss.recommendedLevel}+</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                  {boss.strategy}
                </p>
              </div>
            </div>

            {/* Recommended Team */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Recommended Team
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {boss.recommendedTeam.map((member, index) => (
                  <div
                    key={index}
                    className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
                  >
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {member}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Sword className="w-6 h-6 text-red-600" />
                Skills & Attacks
              </h3>
              <div className="space-y-4">
                {boss.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs font-bold rounded ${
                          skill.type === 'Physical' ? 'bg-red-500 text-white' :
                          skill.type === 'Special' ? 'bg-blue-500 text-white' :
                          'bg-purple-500 text-white'
                        }`}>
                          {skill.type}
                        </span>
                        {skill.power > 0 && (
                          <span className="px-2 py-1 text-xs font-bold bg-yellow-500 text-white rounded">
                            PWR: {skill.power}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Battle Phases */}
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Battle Phases
              </h3>
              <div className="space-y-4">
                {boss.phases.map((phase, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-primary-500 pl-4 py-2"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary-600 text-white text-sm font-bold rounded-full">
                        Phase {phase.phase}
                      </span>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        HP: {phase.hpThreshold}
                      </span>
                    </div>
                    <div className="mb-2">
                      <strong className="text-gray-900 dark:text-white">Behavior:</strong>
                      <p className="text-gray-700 dark:text-gray-300">{phase.behavior}</p>
                    </div>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Strategy:</strong>
                      <p className="text-gray-700 dark:text-gray-300">{phase.strategy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
