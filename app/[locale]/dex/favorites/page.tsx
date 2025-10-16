"use client";

import { useFavorites } from '@/contexts/FavoritesContext';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import DexGrid from '../components/DexGrid';
import { useTranslations, useLocale } from "next-intl";

export default function FavoritesPage() {
  const { favorites, clearFavorites, exportFavorites } = useFavorites();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const t = useTranslations("favorites");
  const common = useTranslations("common");
  const locale = useLocale();

  useEffect(() => {
    if (favorites.length === 0) {
      setLoading(false);
      setItems([]);
      return;
    }

    // 批量获取收藏的数码兽信息
    const fetchFavorites = async () => {
      setLoading(true);
      try {
        const promises = favorites.map(slug =>
          fetch(`/api/digimon/${slug}`)
            .then(res => res.ok ? res.json() : null)
            .then(data => data?.digimon)
        );
        const results = await Promise.all(promises);
        setItems(results.filter(Boolean));
      } catch (error) {
        console.error('Failed to fetch favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [favorites]);

  return (
    <main className="max-w-7xl mx-auto p-4 space-y-6 sm:space-y-8">
      {/* 标题和操作按钮 */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{t("title")}</h1>
          <p className="text-gray-600">
            {t("count", { count: favorites.length })}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 w-full md:w-auto">
          <Link
            href={`/${locale}/dex`}
            className="inline-flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium text-sm w-full sm:w-auto"
          >
            {t("backToDex")}
          </Link>
          {favorites.length > 0 && (
            <>
              <button
                onClick={exportFavorites}
                className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium text-sm w-full sm:w-auto"
              >
                {t("export")}
              </button>
              <button
                onClick={clearFavorites}
                className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium text-sm w-full sm:w-auto"
              >
                {t("clear")}
              </button>
            </>
          )}
        </div>
      </div>

      {/* 加载状态 */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">{common("loading")}</p>
        </div>
      )}

      {/* 空状态 */}
      {!loading && favorites.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h2 className="mt-4 text-xl font-semibold text-gray-900">{t("empty")}</h2>
          <p className="mt-2 text-gray-600">
            {t("emptyTip")}
          </p>
          <Link
            href={`/${locale}/dex`}
            className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            {t("backToDex")}
          </Link>
        </div>
      )}

      {/* 收藏列表 */}
      {!loading && items.length > 0 && (
        <DexGrid items={items} />
      )}
    </main>
  );
}
