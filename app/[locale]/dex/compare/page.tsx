"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { useTranslations, useLocale } from "next-intl";
import {
  createDigimonLookup,
  resolveRelations as mapRelations,
  getLocalizedDigimonName,
  type DigimonLookup
} from "@/lib/digimonLookup";

interface Digimon {
  slug: string;
  name: string;
  name_en?: string;
  name_ja?: string;
  stage?: string;
  stage_en?: string;
  attribute?: string;
  main_image?: string;
  evolves_from?: string[];
  evolves_to?: string[];
  sources?: string[];
}

export default function ComparePage() {
  const t = useTranslations();
  const locale = useLocale();
  const [allDigimon, setAllDigimon] = useState<Digimon[]>([]);
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [compareData, setCompareData] = useState<Digimon[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // 加载数码兽列表
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/api_data/digimon_list.json");
        if (!res.ok) throw new Error("Failed to load");
        const data = await res.json();
        setAllDigimon(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load digimon list:", err);
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const digimonLookup = useMemo<DigimonLookup>(() => {
    return createDigimonLookup(allDigimon);
  }, [allDigimon]);

  // 加载已选择的数码兽详情
  useEffect(() => {
    if (selectedSlugs.length === 0) {
      setCompareData([]);
      return;
    }

    const loadDetails = async () => {
      try {
        const promises = selectedSlugs.map(slug =>
          fetch(`/api/digimon/${slug}`)
            .then(res => res.ok ? res.json() : null)
            .then(data => data?.digimon)
        );
        const results = await Promise.all(promises);
        setCompareData(results.filter(Boolean));
      } catch (err) {
        console.error("Failed to load details:", err);
      }
    };

    loadDetails();
  }, [selectedSlugs]);

  const handleSelect = (slug: string) => {
    if (selectedSlugs.includes(slug)) {
      setSelectedSlugs(selectedSlugs.filter(s => s !== slug));
    } else if (selectedSlugs.length < 5) {
      setSelectedSlugs([...selectedSlugs, slug]);
    } else {
      alert(t('compare.maxReached'));
    }
  };

  const clearSelection = () => {
    setSelectedSlugs([]);
    setCompareData([]);
  };

  const filteredDigimon = allDigimon.filter(d => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      d.name?.toLowerCase().includes(query) ||
      d.name_en?.toLowerCase().includes(query) ||
      d.name_ja?.toLowerCase().includes(query) ||
      d.slug?.toLowerCase().includes(query)
    );
  });

  const getDisplayName = useCallback(
    (d: { slug: string; name?: string; name_en?: string; name_ja?: string }) =>
      getLocalizedDigimonName(d, locale),
    [locale]
  );

  const resolveRelations = useCallback(
    (names?: string[]) => {
      return mapRelations(names, digimonLookup);
    },
    [digimonLookup]
  );

  const normStageKey = (d: any) => {
    const v = (d.stage_en || d.stage || '').toLowerCase();
    if (v.includes('in-training ii') || v.includes('幼年期ii')) return 'inTrainingII';
    if (v.includes('in-training i') || v.includes('幼年期i')) return 'inTrainingI';
    if (v.includes('rookie') || v.includes('成長期') || v.includes('成长期')) return 'rookie';
    if (v.includes('champion') || v.includes('成熟期')) return 'champion';
    if (v.includes('ultimate') || v.includes('完全体')) return 'ultimate';
    if (v.includes('mega+') || v.includes('超究極体') || v.includes('超究极体')) return 'megaPlus';
    if (v.includes('mega') || v.includes('究極体') || v.includes('究极体')) return 'mega';
    if (v.includes('armor') || v.includes('装甲体')) return 'armor';
    if (v.includes('hybrid') || v.includes('混合体')) return 'hybrid';
    return '';
  };

  const normAttrKey = (d: any) => {
    const v = (d.attribute || '').toLowerCase();
    if (v.includes('vaccine') || v.includes('ワクチン') || v.includes('疫苗')) return 'vaccine';
    if (v.includes('virus') || v.includes('ウイルス') || v.includes('病毒')) return 'virus';
    if (v.includes('data') || v.includes('データ') || v.includes('数据')) return 'data';
    if (v.includes('free') || v.includes('フリー') || v.includes('自由')) return 'free';
    if (v.includes('variable') || v.includes('ヴァリアブル') || v.includes('可变')) return 'variable';
    return '';
  };

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto p-4">
        <div className="text-center py-12">
          <p className="text-gray-600">{t('common.loading')}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto p-4 space-y-6 sm:space-y-8">
      {/* 返回按钮 */}
      <Link href={`/${locale}/dex`} className="text-blue-600 hover:underline text-sm sm:text-base">
        ← {t('nav.dex')}
      </Link>

      {/* 标题 */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{t('compare.title')}</h1>
          <p className="text-gray-600">
            {t('common.found')} <span className="font-semibold text-blue-600">{selectedSlugs.length}</span> / 5
          </p>
        </div>
        {selectedSlugs.length > 0 && (
          <button
            onClick={clearSelection}
            className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium text-sm w-full sm:w-auto"
          >
            {t('common.clear')}
          </button>
        )}
      </div>

      {/* 搜索框 */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t('common.searchPlaceholder')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 比较结果 */}
      {compareData.length >= 2 && (
        <>
        <div className="bg-white rounded-lg shadow overflow-x-auto hidden md:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  {t('common.attribute')}
                </th>
                {compareData.map((d) => (
                  <th key={d.slug} className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                    <Link href={`/${locale}/dex/${d.slug}`} className="hover:text-blue-600">
                      {getDisplayName(d)}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* 图片 */}
              <tr className="border-b">
                <td className="px-4 py-3 font-medium text-gray-700">{t('common.image')}</td>
                {compareData.map((d) => (
                  <td key={d.slug} className="px-4 py-3 text-center">
                    {d.main_image ? (
                      <div className="relative w-24 h-24 mx-auto">
                        <SafeImage
                          src={d.main_image}
                          fallbackSrc={(d as any).main_image_fallback}
                          alt={getDisplayName(d)}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 mx-auto bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">
                        无图片
                      </div>
                    )}
                  </td>
                ))}
              </tr>

              {/* 日文名 */}
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">{t('common.name')}</td>
                {compareData.map((d) => (
                  <td key={d.slug} className="px-4 py-3 text-center text-gray-900">
                    {getDisplayName(d)}
                  </td>
                ))}
              </tr>

              {/* 阶段 */}
              <tr className="border-b">
                <td className="px-4 py-3 font-medium text-gray-700">{t('common.stage')}</td>
                {compareData.map((d) => (
                  <td key={d.slug} className="px-4 py-3 text-center">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {(() => { const key = normStageKey(d); return key ? t(`stages.${key}`) : (d.stage_en || d.stage || '-'); })()}
                    </span>
                  </td>
                ))}
              </tr>

              {/* 属性 */}
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">{t('common.attribute')}</td>
                {compareData.map((d) => (
                  <td key={d.slug} className="px-4 py-3 text-center">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      {(() => { const key = normAttrKey(d); return key ? t(`attributes.${key}`) : (d.attribute || '-'); })()}
                    </span>
                  </td>
                ))}
              </tr>

              {/* 可进化自 */}
              <tr className="border-b">
                <td className="px-4 py-3 font-medium text-gray-700">{t('dex.evolvesFrom')}</td>
                {compareData.map((d) => (
                  <td key={d.slug} className="px-4 py-3 text-center text-sm">
                    {d.evolves_from && d.evolves_from.length > 0 ? (
                      <div className="space-y-1">
                        {resolveRelations(d.evolves_from).slice(0, 3).map(({ raw, match }, i) => {
                          const label = match ? getDisplayName(match) : raw;
                          const key = match?.slug ?? `${raw}-${i}`;
                          return match ? (
                            <div key={key}>
                              <Link href={`/${locale}/dex/${match.slug}`} className="text-blue-600 hover:underline">
                                {label}
                              </Link>
                            </div>
                          ) : (
                            <div key={key} className="text-gray-700">
                              {label}
                            </div>
                          );
                        })}
                        {d.evolves_from.length > 3 && (
                          <div className="text-gray-500">+{d.evolves_from.length - 3} more</div>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* 可进化为 */}
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">{t('dex.evolvesTo')}</td>
                {compareData.map((d) => (
                  <td key={d.slug} className="px-4 py-3 text-center text-sm">
                    {d.evolves_to && d.evolves_to.length > 0 ? (
                      <div className="space-y-1">
                        {resolveRelations(d.evolves_to).slice(0, 3).map(({ raw, match }, i) => {
                          const label = match ? getDisplayName(match) : raw;
                          const key = match?.slug ?? `${raw}-${i}`;
                          return match ? (
                            <div key={key}>
                              <Link href={`/${locale}/dex/${match.slug}`} className="text-blue-600 hover:underline">
                                {label}
                              </Link>
                            </div>
                          ) : (
                            <div key={key} className="text-gray-700">
                              {label}
                            </div>
                          );
                        })}
                        {d.evolves_to.length > 3 && (
                          <div className="text-gray-500">+{d.evolves_to.length - 3} more</div>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* 数据来源 */}
              <tr className="border-b">
                <td className="px-4 py-3 font-medium text-gray-700">{t('dex.sources')}</td>
                {compareData.map((d) => (
                  <td key={d.slug} className="px-4 py-3 text-center">
                    {d.sources && d.sources.length > 0 ? (
                      <div className="flex flex-wrap gap-1 justify-center">
                        {d.sources.map((source, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {source}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-y-4 md:hidden">
          {compareData.map((d) => (
            <div key={d.slug} className="bg-white rounded-lg shadow p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  {d.main_image ? (
                    <SafeImage
                      src={d.main_image}
                      fallbackSrc={(d as any).main_image_fallback}
                      alt={getDisplayName(d)}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-xs text-gray-400 flex items-center justify-center h-full">{t('common.image')}</span>
                  )}
                </div>
                <div className="flex-1">
                  <Link href={`/${locale}/dex/${d.slug}`} className="text-base font-semibold text-blue-600">
                    {getDisplayName(d)}
                  </Link>
                  <div className="text-xs text-gray-500 mt-1">
                    {(() => { const key = normStageKey(d); return key ? t(`stages.${key}`) : (d.stage_en || d.stage || '-'); })()}
                    {d.attribute && (
                      <>
                        <span className="mx-1">·</span>
                        <span>{(() => { const key = normAttrKey(d); return key ? t(`attributes.${key}`) : d.attribute; })()}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">{t('dex.evolvesFrom')}</span>
                  <div className="mt-1 space-y-1">
                    {resolveRelations(d.evolves_from).slice(0, 3).map(({ raw, match }, i) => {
                      const label = match ? getDisplayName(match) : raw;
                      const key = match?.slug ?? `${raw}-${i}`;
                      return match ? (
                        <Link key={key} href={`/${locale}/dex/${match.slug}`} className="block px-3 py-1.5 bg-gray-100 rounded text-blue-600">
                          {label}
                        </Link>
                      ) : (
                        <div key={key} className="px-3 py-1.5 bg-gray-100 rounded text-gray-700">
                          {label}
                        </div>
                      );
                    })}
                    {d.evolves_from && d.evolves_from.length > 3 && (
                      <div className="text-xs text-gray-500">{`+${d.evolves_from.length - 3}`}</div>
                    )}
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">{t('dex.evolvesTo')}</span>
                  <div className="mt-1 space-y-1">
                    {resolveRelations(d.evolves_to).slice(0, 3).map(({ raw, match }, i) => {
                      const label = match ? getDisplayName(match) : raw;
                      const key = match?.slug ?? `${raw}-${i}`;
                      return match ? (
                        <Link key={key} href={`/${locale}/dex/${match.slug}`} className="block px-3 py-1.5 bg-gray-100 rounded text-blue-600">
                          {label}
                        </Link>
                      ) : (
                        <div key={key} className="px-3 py-1.5 bg-gray-100 rounded text-gray-700">
                          {label}
                        </div>
                      );
                    })}
                    {d.evolves_to && d.evolves_to.length > 3 && (
                      <div className="text-xs text-gray-500">{`+${d.evolves_to.length - 3}`}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </>
      )}

      {/* 选择区域 */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">
            {compareData.length >= 2 ? t('compare.addMore') : t('compare.selectPrompt')}
          </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-h-[28rem] overflow-y-auto">
          {filteredDigimon.slice(0, 100).map((d) => {
            const isSelected = selectedSlugs.includes(d.slug);
            return (
              <button
                key={d.slug}
                onClick={() => handleSelect(d.slug)}
                className={`p-3 border rounded-lg text-sm transition ${
                  isSelected
                    ? "border-blue-500 bg-blue-50 text-blue-700 font-semibold"
                    : "border-gray-200 hover:border-blue-300 text-gray-700"
                }`}
              >
                {getDisplayName(d)}
              </button>
            );
          })}
        </div>
        {filteredDigimon.length > 100 && (
          <p className="text-sm text-gray-500 mt-3 text-center">
            显示前100个结果，使用搜索框缩小范围
          </p>
        )}
      </div>
    </main>
  );
}
