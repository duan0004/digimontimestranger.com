import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

// API数据路径
const API_DATA_DIR = path.join(process.cwd(), 'public', 'api_data');

// 内存缓存
let statsCache: any | null = null;
let byStageCache: Record<string, string[]> | null = null;
let byAttributeCache: Record<string, string[]> | null = null;

function loadStats() {
  if (!statsCache) {
    const filePath = path.join(API_DATA_DIR, 'stats.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    statsCache = JSON.parse(fileContent);
  }
  return statsCache;
}

function loadByStage() {
  if (!byStageCache) {
    const filePath = path.join(API_DATA_DIR, 'by_stage.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    byStageCache = JSON.parse(fileContent);
  }
  return byStageCache;
}

function loadByAttribute() {
  if (!byAttributeCache) {
    const filePath = path.join(API_DATA_DIR, 'by_attribute.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    byAttributeCache = JSON.parse(fileContent);
  }
  return byAttributeCache;
}

/**
 * GET /api/stats
 *
 * 返回数据库统计信息，包括:
 * - 总数码兽数量
 * - 按阶段分布
 * - 按属性分布
 * - 按数据来源分布
 * - 数据完整度
 */
export async function GET(_request: NextRequest) {
  try {
    // 加载统计数据
    const stats = loadStats();
    const byStage = loadByStage() as Record<string, string[]>;
    const byAttribute = loadByAttribute() as Record<string, string[]>;

    // 计算额外统计
    const stageList = Object.keys(byStage).map(stage => ({
      name: stage,
      count: byStage[stage].length
    })).sort((a, b) => b.count - a.count);

    const attributeList = Object.keys(byAttribute).map(attribute => ({
      name: attribute,
      count: byAttribute[attribute].length
    })).sort((a, b) => b.count - a.count);

    return NextResponse.json({
      overview: {
        total: stats.total,
        withEnglishName: stats.with_en_name,
        withJapaneseName: stats.with_ja_name,
        withBothNames: stats.with_both_names,
        bilingualRate: ((stats.with_both_names / stats.total) * 100).toFixed(1) + '%',
        withEvolutionData: stats.with_evolution_data,
        evolutionDataRate: ((stats.with_evolution_data / stats.total) * 100).toFixed(1) + '%'
      },
      sources: {
        game8_en: stats.by_source.game8_en,
        appmedia_jp: stats.by_source.appmedia_jp,
        both: stats.by_source.both
      },
      stages: {
        total: stageList.length,
        distribution: stageList
      },
      attributes: {
        total: attributeList.length,
        distribution: attributeList
      },
      dataQuality: {
        completenessScore: calculateCompletenessScore(stats),
        coverageRate: ((stats.by_source.both / stats.total) * 100).toFixed(1) + '%',
        recommendation: getRecommendation(stats)
      }
    });

  } catch (error) {
    console.error('Stats API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

/**
 * 计算数据完整性评分（0-100）
 */
function calculateCompletenessScore(stats: any): number {
  const bilingualRate = stats.with_both_names / stats.total;
  const evolutionRate = stats.with_evolution_data / stats.total;
  const coverageRate = stats.by_source.both / stats.total;

  // 加权评分
  const score = (
    bilingualRate * 40 +  // 双语对照权重40%
    evolutionRate * 30 +  // 进化数据权重30%
    coverageRate * 30     // 数据覆盖权重30%
  ) * 100;

  return Math.round(score);
}

/**
 * 根据统计数据给出改进建议
 */
function getRecommendation(stats: any): string {
  const bilingualRate = stats.with_both_names / stats.total;

  if (bilingualRate < 0.3) {
    return 'Data quality needs improvement: Consider enhancing bilingual name mapping';
  } else if (bilingualRate < 0.5) {
    return 'Data quality is moderate: Manual review recommended for better name mapping';
  } else if (bilingualRate < 0.7) {
    return 'Data quality is good: Minor improvements possible';
  } else {
    return 'Data quality is excellent: Ready for production use';
  }
}
