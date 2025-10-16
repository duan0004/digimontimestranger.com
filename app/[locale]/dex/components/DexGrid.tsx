"use client";
import React from "react";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import FavoriteButton from "@/app/components/FavoriteButton";
import { useLocale, useTranslations } from "next-intl";

export default function DexGrid({
  items
}: {
  items: {
    slug: string;
    name: string;
    name_en?: string;
    name_ja?: string;
    stage?: string;
    stage_en?: string;
    stage_ja?: string;
    attribute?: string;
    main_image?: string;
    main_image_fallback?: string;
  }[];
}) {
  const locale = useLocale();
  const t = useTranslations();

  const getDisplayName = (it: any) => {
    if (locale === 'en') return it.name_en || it.name || it.name_ja || it.slug;
    if (locale === 'ja') return it.name_ja || it.name || it.name_en || it.slug;
    return it.name || it.name_ja || it.name_en || it.slug;
  };

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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {items.map((it) => (
        <div
          key={it.slug}
          className="bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all relative"
        >
        <Link
          href={`/dex/${it.slug}`}
          className="block p-4 flex flex-col items-center gap-3"
        >
          {/* 收藏按钮 */}
          <div className="absolute top-2 right-2 z-10">
            <FavoriteButton slug={it.slug} />
          </div>

          {/* 图片区域 */}
          <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden relative flex items-center justify-center">
            {it.main_image ? (
              <SafeImage
                src={it.main_image}
                fallbackSrc={it.main_image_fallback}
                alt={getDisplayName(it)}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                className="object-contain"
                loading="lazy"
              />
            ) : (
              <div className="text-gray-400 text-center text-sm">
                <div>{t('common.image')}</div>
                <div>{t('common.loading')}</div>
              </div>
            )}
          </div>

          {/* 名称 */}
          <div className="text-center w-full space-y-1">
            <div className="text-base font-semibold text-gray-900 truncate">{getDisplayName(it)}</div>
            {it.name_en && it.name_ja && (
              <div className="text-xs text-gray-600 truncate">
                {it.name_ja}
              </div>
            )}
          </div>

          {/* 阶段和属性 */}
          <div className="text-xs text-gray-500 text-center">
            {(() => {
              const sk = normalizeStageKey(it.stage, it.stage_en, it.stage_ja);
              const stageText = sk ? t(`stages.${sk}`) : (it.stage_en || it.stage || it.stage_ja || '?');
              return <span>{stageText}</span>;
            })()}
            {it.attribute && (
              <>
                <span className="mx-1">·</span>
                <span>{(() => { const ak = normalizeAttrKey(it.attribute); return ak ? t(`attributes.${ak}`) : it.attribute; })()}</span>
              </>
            )}
          </div>
        </Link>
        </div>
      ))}
    </div>
  );
}
