import { NextRequest, NextResponse } from "next/server";
export const revalidate = 3600;
import fs from 'fs';
import path from 'path';

// API数据路径
const API_DATA_DIR = path.join(process.cwd(), 'public', 'api_data');

// 内存缓存
let digimonListCache: any[] | null = null;
let byStageCache: Record<string, string[]> | null = null;
let byAttributeCache: Record<string, string[]> | null = null;

function loadDigimonList() {
  if (!digimonListCache) {
    const filePath = path.join(API_DATA_DIR, 'digimon_list.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    digimonListCache = JSON.parse(fileContent);
  }
  return digimonListCache;
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
 * GET /api/digimon
 *
 * 查询参数:
 * - q: 搜索关键词（名称）
 * - stage: 阶段筛选
 * - attribute: 属性筛选
 * - page: 页码（默认1）
 * - limit: 每页数量（默认50，最大200）
 * - sort: 排序方式（name, stage, confidence）
 * - order: 排序顺序（asc, desc）
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const q = (searchParams.get("q") || "").trim().toLowerCase();
    const stage = searchParams.get("stage");
    const attribute = searchParams.get("attribute") || searchParams.get("attr");
    const page = parseInt(searchParams.get("page") || '1', 10);
    const limit = Math.min(parseInt(searchParams.get("limit") || '50', 10), 200);
    const sort = searchParams.get("sort") || 'name';
    const order = searchParams.get("order") || 'asc';

    // 加载数据
    const digimonList = loadDigimonList() as any[];

    // 筛选
    let filtered: any[] = digimonList;

    // 按名称搜索
    if (q) {
      filtered = filtered.filter(item => {
        const nameEn = (item.name_en || '').toLowerCase();
        const nameJa = (item.name_ja || '').toLowerCase();
        const slug = (item.slug || '').toLowerCase();
        return nameEn.includes(q) || nameJa.includes(q) || slug.includes(q);
      });
    }

    // 按阶段筛选
    if (stage) {
      const byStage = loadByStage() as Record<string, string[]>;
      const slugsInStage = byStage[stage] || [];
      filtered = filtered.filter(item => slugsInStage.includes(item.slug));
    }

    // 按属性筛选
    if (attribute) {
      const byAttribute = loadByAttribute() as Record<string, string[]>;
      const slugsInAttribute = byAttribute[attribute] || [];
      filtered = filtered.filter(item => slugsInAttribute.includes(item.slug));
    }

    // 排序
    filtered.sort((a, b) => {
      let aValue, bValue;

      switch (sort) {
        case 'name':
          aValue = a.name || '';
          bValue = b.name || '';
          break;
        case 'stage':
          aValue = a.stage || '';
          bValue = b.stage || '';
          break;
        case 'confidence':
          aValue = a.confidence || 0;
          bValue = b.confidence || 0;
          break;
        default:
          aValue = a.name || '';
          bValue = b.name || '';
      }

      if (order === 'desc') {
        return aValue < bValue ? 1 : -1;
      } else {
        return aValue > bValue ? 1 : -1;
      }
    });

    // 分页
    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;
    const paginated = filtered.slice(offset, offset + limit);

    // 返回响应
    const res = NextResponse.json({
      items: paginated,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      },
      filters: {
        q: q || null,
        stage: stage || null,
        attribute: attribute || null
      },
      sort: {
        by: sort,
        order
      }
    });
    res.headers.set('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
    return res;

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
