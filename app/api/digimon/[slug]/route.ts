import { NextRequest, NextResponse } from "next/server";
export const revalidate = 3600;
import fs from 'fs';
import path from 'path';

// API数据路径
const API_DATA_DIR = path.join(process.cwd(), 'public', 'api_data');

/**
 * GET /api/digimon/[slug]
 *
 * 返回单个数码兽的完整详情，包括:
 * - 基础信息
 * - 进化链（evolves_from, evolves_to）
 * - 图片
 * - 数据来源
 */
export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;

    // 加载详情数据
    const detailFilePath = path.join(API_DATA_DIR, 'digimon', `${slug}.json`);

    // 检查文件是否存在
    if (!fs.existsSync(detailFilePath)) {
      return NextResponse.json(
        { error: "Digimon not found" },
        { status: 404 }
      );
    }

    const fileContent = fs.readFileSync(detailFilePath, 'utf-8');
    const digimon = JSON.parse(fileContent);

    // 返回完整数据
    const res = NextResponse.json({
      digimon,
      // 可以在这里添加额外的计算字段
      meta: {
        hasEnglishName: !!digimon.name_en,
        hasJapaneseName: !!digimon.name_ja,
        hasBothNames: !!(digimon.name_en && digimon.name_ja),
        hasEvolutionData: !!(digimon.evolves_from?.length || digimon.evolves_to?.length),
        sources: digimon.sources || [],
        confidence: digimon.confidence || 0,
        matchType: digimon.match_type || 'unknown'
      }
    });
    res.headers.set('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
    return res;

  } catch (error) {
    const { slug } = await params;
    console.error(`API Error for slug ${slug}:`, error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
