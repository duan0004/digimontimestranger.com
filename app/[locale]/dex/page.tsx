import DexGrid from "./components/DexGrid";
import SearchAutocomplete from "./components/SearchAutocomplete";
import { generateListMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';

export const metadata: Metadata = generateListMetadata();

async function fetchList(baseUrl: string, q?: string, stage?: string, attribute?: string) {
  const url = new URL('/api/digimon', baseUrl);
  if (q) url.searchParams.set("q", q);
  if (stage) url.searchParams.set("stage", stage);
  if (attribute) url.searchParams.set("attribute", attribute);
  url.searchParams.set("limit", "100");

  const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
  if (!res.ok) return { items: [], meta: { total: 0 } };

  const data = await res.json();
  return data;
}

export default async function DexPage({
  searchParams,
  params
}: {
  searchParams?: Promise<{ q?: string; stage?: string; attribute?: string }>;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const searchParamsResolved = await searchParams;
  // 构建基址，优先使用环境变量，否则根据请求头推断
  const h = await headers();
  const proto = h.get('x-forwarded-proto') || 'http';
  const host = h.get('host') || 'localhost:3000';
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL && process.env.NEXT_PUBLIC_BASE_URL.trim().length > 0)
    ? process.env.NEXT_PUBLIC_BASE_URL
    : `${proto}://${host}`;

  const data = await fetchList(baseUrl, searchParamsResolved?.q, searchParamsResolved?.stage, searchParamsResolved?.attribute);
  const { items, meta } = data;

  const t = await getTranslations();

  return (
    <main className="max-w-7xl mx-auto p-4 space-y-6 sm:space-y-8">
      {/* 标题 */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{t('dex.title')}</h1>
          <p className="text-gray-600">
            {t('common.total')} <span className="font-semibold text-blue-600">{meta?.total || 0}</span> {t('common.digimon')}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 w-full md:w-auto">
          <a
            href={`/${locale}/dex/favorites`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition font-medium text-sm w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {t('nav.favorites')}
          </a>
          <a
            href={`/${locale}/dex/compare`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium text-sm w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {t('nav.compare')}
          </a>
          <a
            href={`/${locale}/dex/path-planner`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium text-sm w-full sm:w-auto"
          >
            🔍 {t('nav.pathPlanner')}
          </a>
        </div>
      </div>

      {/* 搜索和筛选栏 */}
      <form className="bg-white rounded-lg shadow-sm p-4 sm:p-6 space-y-4">
        {/* 搜索框 */}
        <div className="flex flex-col md:flex-row gap-3">
          <SearchAutocomplete
            initialValue={searchParamsResolved?.q || ""}
            stage={searchParamsResolved?.stage}
            attribute={searchParamsResolved?.attribute}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium w-full md:w-auto"
          >
            {t('common.search')}
          </button>
        </div>

        {/* 筛选器 */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('common.stage')}</label>
            <select
              name="stage"
              defaultValue={searchParamsResolved?.stage || ""}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{t('stages.all')}</option>
              <option value="In-Training I">{t('stages.inTrainingI')}</option>
              <option value="In-Training II">{t('stages.inTrainingII')}</option>
              <option value="Rookie">{t('stages.rookie')}</option>
              <option value="Champion">{t('stages.champion')}</option>
              <option value="Ultimate">{t('stages.ultimate')}</option>
              <option value="Mega">{t('stages.mega')}</option>
              <option value="Mega+">{t('stages.megaPlus')}</option>
              <option value="Armor">{t('stages.armor')}</option>
              <option value="Hybrid">{t('stages.hybrid')}</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('common.attribute')}</label>
            <select
              name="attribute"
              defaultValue={searchParamsResolved?.attribute || ""}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{t('attributes.all')}</option>
              <option value="Vaccine">{t('attributes.vaccine')}</option>
              <option value="Data">{t('attributes.data')}</option>
              <option value="Virus">{t('attributes.virus')}</option>
              <option value="Free">{t('attributes.free')}</option>
              <option value="Variable">{t('attributes.variable')}</option>
            </select>
          </div>
        </div>

        {/* 当前筛选标签和清除按钮 */}
        {(searchParamsResolved?.stage || searchParamsResolved?.attribute || searchParamsResolved?.q) && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t">
            <span className="text-sm text-gray-600">{t('common.currentFilters')}:</span>
            {searchParamsResolved?.q && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {t('filterLabels.search')}: {searchParamsResolved.q}
              </span>
            )}
            {searchParamsResolved?.stage && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {t('filterLabels.stage')}: {searchParamsResolved.stage}
              </span>
            )}
            {searchParamsResolved?.attribute && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                {t('filterLabels.attribute')}: {searchParamsResolved.attribute}
              </span>
            )}
            <a
              href={`/${locale}/dex`}
              className="ml-auto text-sm text-gray-600 hover:text-gray-900 underline"
            >
              {t('common.clearFilters')}
            </a>
          </div>
        )}
      </form>

      {/* 结果统计 */}
      {searchParamsResolved?.q && (
        <div className="text-sm text-gray-600">
          {t('common.found')} <span className="font-semibold">{items.length}</span> {t('common.results')}
        </div>
      )}

      {/* 图鉴网格 */}
      {items.length > 0 ? (
        <DexGrid items={items} />
      ) : (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">{t('common.noResults')}</p>
          <p className="text-sm mt-2">{t('common.tryOtherKeywords')}</p>
        </div>
      )}
    </main>
  );
}
