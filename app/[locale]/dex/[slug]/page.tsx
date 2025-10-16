import EvolutionGraph from "../components/EvolutionGraph";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { buildEvolutionGraphData, shouldShowEvolutionGraph } from "./evolutionHelpers";
import { generateDigimonMetadata } from "@/lib/seo";
import { generateDigimonJSONLD, generateBreadcrumbJSONLD } from "@/lib/jsonld";
import { Metadata } from "next";
import { headers } from 'next/headers';
import { getTranslations, getLocale } from 'next-intl/server';
import {
  createDigimonLookup,
  resolveRelations as mapRelations,
  getLocalizedDigimonName
} from "@/lib/digimonLookup";

async function fetchDetail(baseUrl: string, slug: string) {
  const res = await fetch(`${new URL(`/api/digimon/${slug}`, baseUrl).toString()}`, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  return res.json();
}

async function fetchDigimonList(baseUrl: string) {
  try {
    const res = await fetch(`${new URL('/api_data/digimon_list.json', baseUrl).toString()}`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to load digimon list:", error);
    return [];
  }
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const h = await headers();
  const proto = h.get('x-forwarded-proto') || 'http';
  const host = h.get('host') || 'localhost:3000';
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL && process.env.NEXT_PUBLIC_BASE_URL.trim().length > 0)
    ? process.env.NEXT_PUBLIC_BASE_URL
    : `${proto}://${host}`;
  const data = await fetchDetail(baseUrl, slug);
  if (!data) {
    return {
      title: "数码兽未找到 - Time Stranger Dex",
      description: "未能找到该数码兽的信息"
    };
  }
  return generateDigimonMetadata(data.digimon);
}

export default async function DexDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const h = await headers();
  const proto = h.get('x-forwarded-proto') || 'http';
  const host = h.get('host') || 'localhost:3000';
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL && process.env.NEXT_PUBLIC_BASE_URL.trim().length > 0)
    ? process.env.NEXT_PUBLIC_BASE_URL
    : `${proto}://${host}`;
  const detailPromise = fetchDetail(baseUrl, slug);
  const listPromise = fetchDigimonList(baseUrl);
  const [data, digimonList] = await Promise.all([detailPromise, listPromise]);
  const t = await getTranslations();
  const locale = await getLocale();
  if (!data) return <div className="p-4 text-center">{t('common.notFound') || 'Not found'}</div>;

  const { digimon, meta } = data;
  const digimonLookup = createDigimonLookup(digimonList);
  const resolvedEvolvesFrom = mapRelations(digimon.evolves_from, digimonLookup);
  const resolvedEvolvesTo = mapRelations(digimon.evolves_to, digimonLookup);
  const currentName = getLocalizedDigimonName(digimon, locale);

  const normalizeStageKey = (raw?: string, en?: string, ja?: string) => {
    const v = (en || raw || ja || '').toLowerCase();
    if (!v) return '';
    if (v.includes('in-training ii') || v.includes('幼年期ii') || v.includes('幼年期2')) return 'inTrainingII';
    if (v.includes('in-training i') || v.includes('幼年期i') || v.includes('幼年期1')) return 'inTrainingI';
    if (v.includes('rookie') || v.includes('成長期') || v.includes('成长期')) return 'rookie';
    if (v.includes('champion') || v.includes('成熟期')) return 'champion';
    if (v.includes('ultimate') || v.includes('完全体')) return 'ultimate';
    if (v.includes('mega+') || v.includes('超究極体') || v.includes('超究极体')) return 'megaPlus';
    if (v.includes('mega') || v.includes('究極体') || v.includes('究极体')) return 'mega';
    if (v.includes('armor') || v.includes('装甲体')) return 'armor';
    if (v.includes('hybrid') || v.includes('混合体')) return 'hybrid';
    return '';
  };

  const normalizeAttrKey = (raw?: string) => {
    const v = (raw || '').toLowerCase();
    if (!v) return '';
    if (v.includes('vaccine') || v.includes('ワクチン') || v.includes('疫苗')) return 'vaccine';
    if (v.includes('virus') || v.includes('ウイルス') || v.includes('病毒')) return 'virus';
    if (v.includes('data') || v.includes('データ') || v.includes('数据')) return 'data';
    if (v.includes('free') || v.includes('フリー') || v.includes('自由')) return 'free';
    if (v.includes('variable') || v.includes('ヴァリアブル') || v.includes('可变')) return 'variable';
    return '';
  };

  // 构建进化网络节点和边（简化版本 - 仅显示直接进化关系）
  const evolvesFrom = digimon.evolves_from || [];
  const evolvesTo = digimon.evolves_to || [];

  // 生成结构化数据
  const jsonLd = generateDigimonJSONLD(digimon);
  const breadcrumbLd = generateBreadcrumbJSONLD(
    digimon.slug,
    digimon.name_en || digimon.name_ja || digimon.slug
  );

  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <main className="max-w-6xl mx-auto p-4 space-y-6 sm:space-y-8">
      {/* 返回按钮 */}
      <Link href={`/${locale}/dex`} className="text-blue-600 hover:underline text-sm sm:text-base">
        ← {t('nav.dex')}
      </Link>

      {/* 主信息卡片 */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
          {/* 左侧：图片 */}
          <div className="flex justify-center items-center bg-gray-100 rounded-lg p-4 relative min-h-[220px] sm:min-h-[320px] md:min-h-[384px]">
            {digimon.main_image ? (
              <SafeImage
                src={digimon.main_image}
                fallbackSrc={digimon.main_image_fallback}
                alt={digimon.name_en || digimon.name_ja || digimon.slug}
                width={384}
                height={384}
                className="object-contain"
                priority
              />
            ) : (
              <div className="text-gray-400 text-center">
                <p>{t('common.loading')}</p>
                <p className="text-sm mt-2">{digimon.slug}</p>
              </div>
            )}
          </div>

          {/* 右侧：信息 */}
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold">
                {currentName || digimon.slug}
              </h1>
              {meta.hasBothNames && (
                <p className="text-lg sm:text-xl text-gray-700">
                  {digimon.name_ja}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <div className="space-y-1">
                <span className="font-semibold text-gray-600 block">{t('common.stage')}:</span>
                <span className="text-gray-900 block">
                  {(() => { const key = normalizeStageKey(digimon.stage, digimon.stage_en, digimon.stage_ja); return key ? t(`stages.${key}`) : (digimon.stage_en || digimon.stage || digimon.stage_ja || '-') })()}
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-gray-600 block">{t('common.attribute')}:</span>
                <span className="text-gray-900 block">
                  {(() => { const ak = normalizeAttrKey(digimon.attribute); return ak ? t(`attributes.${ak}`) : (digimon.attribute || '-') })()}
                </span>
              </div>
              {digimon.personality && (
                <div className="sm:col-span-2 space-y-1">
                  <span className="font-semibold text-gray-600 block">{t('common.personality') || 'Personality'}:</span>
                  <span className="text-gray-900">{digimon.personality}</span>
                </div>
              )}
            </div>

            {/* 数据来源标签 */}
            <div className="flex flex-wrap gap-2">
              {digimon.sources?.map((source: string) => (
                <span
                  key={source}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {source}
                </span>
              ))}
              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  meta.confidence >= 0.8
                    ? 'bg-green-100 text-green-800'
                    : meta.confidence >= 0.5
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {t('dex.confidence', { value: Math.round(meta.confidence * 100) })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 进化条件 */}
      {digimon.evolution_conditions && (
        <div className="bg-blue-50 rounded-lg p-4 sm:p-5">
          <h2 className="font-semibold text-lg sm:text-xl mb-3">{t('dex.evolutionConditions') || 'Evolution Conditions'}</h2>
          <p className="text-gray-700 leading-relaxed">{digimon.evolution_conditions}</p>
        </div>
      )}

      {/* 进化链 */}
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {/* 可进化自 */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-5">
          <h2 className="font-semibold text-lg mb-3">{t('dex.evolvesFrom')}</h2>
          {resolvedEvolvesFrom.length > 0 ? (
            <div className="space-y-2">
              {resolvedEvolvesFrom.map(({ raw, match }, index) => {
                const key = match?.slug ?? `${raw}-${index}`;
                const label = match ? getLocalizedDigimonName(match, locale) || match.slug : raw;
                return match ? (
                  <Link
                    key={key}
                    href={`/${locale}/dex/${match.slug}`}
                    className="block px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 transition text-blue-600 text-sm sm:text-base"
                  >
                    {label}
                  </Link>
                ) : (
                  <div
                    key={key}
                    className="px-3 py-2 bg-gray-100 rounded text-sm sm:text-base"
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">{t('dex.noData')}</p>
          )}
        </div>

        {/* 可进化为 */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-5">
          <h2 className="font-semibold text-lg mb-3">{t('dex.evolvesTo')}</h2>
          {resolvedEvolvesTo.length > 0 ? (
            <div className="space-y-2">
              {resolvedEvolvesTo.map(({ raw, match }, index) => {
                const key = match?.slug ?? `${raw}-${index}`;
                const label = match ? getLocalizedDigimonName(match, locale) || match.slug : raw;
                return match ? (
                  <Link
                    key={key}
                    href={`/${locale}/dex/${match.slug}`}
                    className="block px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 transition text-blue-600 text-sm sm:text-base"
                  >
                    {label}
                  </Link>
                ) : (
                  <div
                    key={key}
                    className="px-3 py-2 bg-gray-100 rounded text-sm sm:text-base"
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">{t('dex.noData')}</p>
          )}
        </div>
      </div>

      {/* 进化网络图可视化 */}
      {shouldShowEvolutionGraph(evolvesFrom, evolvesTo) && (
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">{t('dex.graphTitle')}</h2>
          <EvolutionGraph
            {...buildEvolutionGraphData(
              digimon.slug,
              digimon.name_en || digimon.name_ja || digimon.slug,
              digimon.stage,
              digimon.attribute,
              evolvesFrom,
              evolvesTo
            )}
          />
          <div className="mt-4 text-sm text-gray-500 leading-relaxed">
            <p>💡 {t('dex.graphHint')}</p>
          </div>
        </div>
      )}

      {/* 数据来源链接 */}
      {(digimon.detail_url_en || digimon.detail_url_ja) && (
        <div className="bg-gray-50 rounded-lg p-4 sm:p-5 space-y-3">
          <h2 className="font-semibold text-lg">{t('dex.sources')}</h2>
        <div className="flex flex-wrap gap-4 text-sm sm:text-base">
          {digimon.detail_url_en && (
            <a
              href={digimon.detail_url_en}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
                <span>🇬🇧 Game8 (EN)</span>
                <span className="text-xs">↗</span>
              </a>
            )}
            {digimon.detail_url_ja && (
              <a
                href={digimon.detail_url_ja}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>🇯🇵 AppMedia (JP)</span>
                <span className="text-xs">↗</span>
              </a>
            )}
          </div>
          <p className="text-xs sm:text-sm text-gray-500">{t('dex.sourcesHint') || ''}</p>
        </div>
      )}
    </main>
    </>
  );
}
