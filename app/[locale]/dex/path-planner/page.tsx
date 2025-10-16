"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { planPaths, Edge, Plan } from "../components/PathPlanner";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface Digimon {
  slug: string;
  name: string;
  stage?: string;
  attribute?: string;
}

export default function PathPlannerPage() {
  const t = useTranslations();
  const locale = useLocale();
  const params = useParams();
  const [digimonList, setDigimonList] = useState<Digimon[]>([]);
  const [evolutionEdges, setEvolutionEdges] = useState<Edge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [startSlug, setStartSlug] = useState("");
  const [goalSlug, setGoalSlug] = useState("");
  const [mode, setMode] = useState<"minSteps" | "minGate">("minSteps");
  const [maxPaths, setMaxPaths] = useState(5);
  const [result, setResult] = useState<Plan[] | null>(null);
  const [computing, setComputing] = useState(false);

  // Load data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load digimon list
        const listRes = await fetch("/api_data/digimon_list.json");
        if (!listRes.ok) throw new Error("Failed to load digimon list");
        const listData = await listRes.json();
        setDigimonList(listData);

        // Load evolution graph
        const graphRes = await fetch("/api_data/evolution_graph.json");
        if (!graphRes.ok) throw new Error("Failed to load evolution graph");
        const graphData = await graphRes.json();

        // Convert to Edge format
        const edges: Edge[] = graphData
          .filter((e: any) => e.from_slug && e.to_slug)
          .map((e: any) => ({
            from: e.from_slug,
            to: e.to_slug,
            weight: 1,
            conditions: {},
          }));

        setEvolutionEdges(edges);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load data:", err);
        setError(t("common.loading"));
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Handle path planning
  const handlePlan = () => {
    if (!startSlug || !goalSlug) {
      alert(t("planner.errors.selectBoth"));
      return;
    }

    if (startSlug === goalSlug) {
      alert(t("planner.errors.same"));
      return;
    }

    setComputing(true);
    setResult(null);

    // Use setTimeout to avoid blocking UI
    setTimeout(() => {
      try {
        const plans = planPaths(startSlug, goalSlug, evolutionEdges, mode, maxPaths);
        setResult(plans);
      } catch (err) {
        console.error("Path planning error:", err);
        alert(t("planner.planFailed"));
      } finally {
        setComputing(false);
      }
    }, 100);
  };

  // Get digimon name by slug
  const getDigimonName = (slug: string): string => {
    const digimon = digimonList.find((d) => d.slug === slug);
    if (!digimon) return slug;
    // locale-aware name selection
    if (locale === 'en') return (digimon as any).name_en || digimon.name || slug;
    if (locale === 'ja') return (digimon as any).name_ja || digimon.name || slug;
    return digimon.name || (digimon as any).name_ja || (digimon as any).name_en || slug;
  };

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto p-4">
        <div className="text-center py-12">
          <p className="text-gray-600">{t("common.loading")}</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-4xl mx-auto p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-4 space-y-6 sm:space-y-8">
      {/* 返回按钮 */}
      <Link href={`/${locale}/dex`} className="text-blue-600 hover:underline text-sm sm:text-base">
        ← {t("nav.dex")}
      </Link>

      {/* 标题 */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{t("planner.title")}</h1>
      </div>

      {/* 输入表单 */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          {/* 起始数码兽 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("planner.from")}
            </label>
            <select
              value={startSlug}
              onChange={(e) => setStartSlug(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- {t("planner.selectFrom")} --</option>
              {digimonList.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {getDigimonName(d.slug)} {d.stage && `(${d.stage})`}
                </option>
              ))}
            </select>
          </div>

          {/* 目标数码兽 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("planner.to")}
            </label>
            <select
              value={goalSlug}
              onChange={(e) => setGoalSlug(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- {t("planner.selectTo")} --</option>
              {digimonList.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {getDigimonName(d.slug)} {d.stage && `(${d.stage})`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 模式选择 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t("planner.mode")}</label>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <label className="flex items-center text-sm sm:text-base">
              <input
                type="radio"
                value="minSteps"
                checked={mode === "minSteps"}
                onChange={(e) => setMode(e.target.value as "minSteps")}
                className="mr-2"
              />
              <span className="text-gray-700">{t("planner.modeShortest")}</span>
            </label>
            <label className="flex items-center text-sm sm:text-base">
              <input
                type="radio"
                value="minGate"
                checked={mode === "minGate"}
                onChange={(e) => setMode(e.target.value as "minGate")}
                className="mr-2"
              />
              <span className="text-gray-700">{t("planner.modeEasiest")}</span>
            </label>
          </div>
        </div>

        {/* 最大路径数量 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t("common.results")}: {maxPaths}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={maxPaths}
            onChange={(e) => setMaxPaths(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>10</span>
          </div>
        </div>

        {/* 规划按钮 */}
        <button
          onClick={handlePlan}
          disabled={computing || !startSlug || !goalSlug}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {computing ? t("common.loading") : t("planner.calculate")}
        </button>
      </div>

      {/* 结果显示 */}
      {result !== null && (
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <h2 className="text-xl font-bold">{t("planner.path")}</h2>
            {result.length > 0 && (
              <span className="text-sm text-gray-600">
                {t("planner.foundPaths", { count: result.length })}
              </span>
            )}
          </div>

          {result.length === 0 ? (
            <div className="text-center py-8">
              <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-600 font-medium">{t("planner.noPath")}</p>
              <p className="text-sm text-gray-500 mt-2">
                {t("planner.noPath")}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {result.map((plan, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="font-semibold text-gray-900">
                      {t("planner.pathIndex", { index: index + 1 })}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                      <span>
                        {t("planner.modeShortest")}: <span className="font-semibold">{plan.steps}</span>
                      </span>
                      {mode === "minGate" && (
                        <span>
                          {t("planner.modeEasiest")}: <span className="font-semibold">{plan.score.toFixed(2)}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 路径可视化 */}
                  <div className="flex flex-wrap items-center gap-2">
                {plan.path.map((slug, i) => (
                  <React.Fragment key={i}>
                    <Link
                      href={`/${locale}/dex/${slug}`}
                      className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition font-medium"
                        >
                          {getDigimonName(slug)}
                        </Link>
                        {i < plan.path.length - 1 && (
                          <span className="text-gray-400 text-xl">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 说明 */}
      <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
        <h3 className="font-semibold mb-2">{t("planner.helpTitle")}</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>{t("planner.helpBulletShortest")}</li>
          <li>{t("planner.helpBulletEasiest")}</li>
          <li>{t("planner.helpBulletClick")}</li>
        </ul>
      </div>
    </main>
  );
}
