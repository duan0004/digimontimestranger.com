import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Zap, TrendingUp } from 'lucide-react';
import { getDigimonBySlug, getAllDigimonSlugs, loadDigimonData } from '@/lib/data-loader';
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';

interface DigimonPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600; // Revalidate every hour (ISR)

// Generate static paths for all Digimon
export async function generateStaticParams() {
  const slugs = await getAllDigimonSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: DigimonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const digimon = await getDigimonBySlug(slug);

  if (!digimon) {
    return genMeta({
      title: 'Digimon Not Found',
      noindex: true,
    });
  }

  return genMeta({
    title: `${digimon.name} - Stats, Evolution & Locations Guide`,
    description: `Complete guide for ${digimon.name}: ${digimon.stage} stage ${digimon.attribute} ${digimon.element}-type Digimon. Stats, evolution paths, locations, skills, and team strategies.`,
    keywords: [
      digimon.name,
      `${digimon.name} evolution`,
      `${digimon.name} stats`,
      `${digimon.name} location`,
      `how to get ${digimon.name}`,
      `${digimon.name} skills`,
    ],
    url: `/digimon/${digimon.slug}`,
  });
}

export default async function DigimonPage({ params }: DigimonPageProps) {
  const { slug } = await params;
  const digimon = await getDigimonBySlug(slug);

  if (!digimon) {
    notFound();
  }

  // Load related Digimon for evolution paths
  const allDigimon = await loadDigimonData();

  // Breadcrumb JSON-LD
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Digidex', url: '/digidex' },
    { name: digimon.name, url: `/digimon/${digimon.slug}` },
  ]);

  // FAQ JSON-LD
  const faqSchema = generateFAQSchema([
    {
      question: `How do I get ${digimon.name}?`,
      answer: digimon.locations.length > 0
        ? `${digimon.name} can be found in: ${digimon.locations.join(', ')}. ${
            digimon.devolvesTo.length > 0
              ? `You can also devolve from ${digimon.devolvesTo.map((d) => d.targetName).join(', ')}.`
              : ''
          }`
        : `${digimon.name} can be obtained through evolution.`,
    },
    {
      question: `What does ${digimon.name} evolve into?`,
      answer: digimon.evolvesTo.length > 0
        ? `${digimon.name} evolves into: ${digimon.evolvesTo.map((e) => e.targetName).join(', ')}.`
        : `${digimon.name} is a final evolution form and does not evolve further.`,
    },
    {
      question: `What are ${digimon.name}'s best stats?`,
      answer: `${digimon.name} has ${digimon.baseStats.hp} HP, ${digimon.baseStats.atk} ATK, ${digimon.baseStats.def} DEF, ${digimon.baseStats.spAtk} SP.ATK, ${digimon.baseStats.spDef} SP.DEF, and ${digimon.baseStats.speed} SPEED at base level.`,
    },
  ]);

  const elementColors: Record<string, string> = {
    Fire: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 border-red-200 dark:border-red-800',
    Water: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    Plant: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-800',
    Earth: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    Wind: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
    Light: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
    Dark: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    Electric: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    Ice: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300 border-teal-200 dark:border-teal-800',
    Neutral: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumb */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                href="/"
                className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              >
                Home
              </Link>
              <span className="text-gray-400 dark:text-gray-600">/</span>
              <Link
                href="/digidex"
                className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              >
                Digidex
              </Link>
              <span className="text-gray-400 dark:text-gray-600">/</span>
              <span className="text-gray-900 dark:text-white font-medium">
                {digimon.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Card */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
              {/* Digimon Image */}
              <div className="w-full h-64 md:h-80 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-white/20 overflow-hidden relative">
                {digimon.imageUrl ? (
                  <Image
                    src={digimon.imageUrl}
                    alt={digimon.name}
                    width={300}
                    height={300}
                    className="object-contain"
                    unoptimized
                    priority
                  />
                ) : (
                  <div className="text-8xl md:text-9xl font-bold text-white/30">
                    {digimon.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {digimon.name}
                </h1>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm border border-white/30">
                    {digimon.stage}
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm border border-white/30">
                    {digimon.attribute}
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm border border-white/30">
                    {digimon.element}
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-accent-500 text-white">
                    Memory: {digimon.memory}
                  </span>
                </div>

                {digimon.notes && (
                  <p className="text-lg text-blue-100">{digimon.notes}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Stats */}
            <div className="lg:col-span-2 space-y-8">
              {/* Base Stats */}
              <div className="card p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Base Stats
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {Object.entries(digimon.baseStats).map(([stat, value]) => (
                    <div key={stat} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase">
                          {stat === 'hp' ? 'HP' : stat === 'atk' ? 'ATK' : stat === 'def' ? 'DEF' : stat === 'spAtk' ? 'SP.ATK' : stat === 'spDef' ? 'SP.DEF' : 'SPEED'}
                        </span>
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          {value}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
                          style={{ width: `${Math.min(100, (value / 150) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              {digimon.skills.length > 0 && (
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-primary-600" />
                    Skills
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {digimon.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg font-medium text-gray-900 dark:text-white"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Evolution Paths */}
              {digimon.evolvesTo.length > 0 && (
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    Evolves To
                  </h2>
                  <div className="space-y-3">
                    {digimon.evolvesTo.map((evo) => (
                      <Link
                        key={evo.target}
                        href={`/digimon/${evo.target}`}
                        className="block p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                            <span className="font-bold text-gray-900 dark:text-white">
                              {evo.targetName}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {evo.req.level && `Level ${evo.req.level}`}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Devolution Paths */}
              {digimon.devolvesTo.length > 0 && (
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Devolves From
                  </h2>
                  <div className="space-y-3">
                    {digimon.devolvesTo.map((devo) => (
                      <Link
                        key={devo.target}
                        href={`/digimon/${devo.target}`}
                        className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <ArrowRight className="w-5 h-5 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                          <span className="font-bold text-gray-900 dark:text-white">
                            {devo.targetName}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Locations & Related */}
            <div className="space-y-8">
              {/* Locations */}
              {digimon.locations.length > 0 && (
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    Locations
                  </h3>
                  <ul className="space-y-2">
                    {digimon.locations.map((location) => (
                      <li
                        key={location}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        {location}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quick Links */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <Link
                    href={`/how-to-get/${digimon.slug}`}
                    className="block px-4 py-2 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                  >
                    How to Get {digimon.name}
                  </Link>
                  <Link
                    href="/tools/team-builder"
                    className="block px-4 py-2 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                  >
                    Add to Team Builder
                  </Link>
                  <Link
                    href="/digidex"
                    className="block px-4 py-2 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                  >
                    Back to Digidex
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
