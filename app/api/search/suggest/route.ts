import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';
import Fuse from 'fuse.js';

// API数据路径
const API_DATA_DIR = path.join(process.cwd(), 'public', 'api_data');

// 内存缓存
let searchIndexCache: any[] | null = null;
let fuseInstance: Fuse<any> | null = null;

function loadSearchIndex() {
  if (!searchIndexCache) {
    const filePath = path.join(API_DATA_DIR, 'search_index.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(fileContent) as any[];
    searchIndexCache = parsed;

    // 初始化Fuse.js
    fuseInstance = new Fuse(parsed, {
      keys: [
        { name: 'name_en', weight: 2 },
        { name: 'name_ja', weight: 1.5 },
        { name: 'slug', weight: 1 },
      ],
      threshold: 0.4, // 0.0完全匹配，1.0匹配任何东西
      distance: 100,
      minMatchCharLength: 1,
      includeScore: true,
      ignoreLocation: true, // 不关心匹配位置
    });
  }
  return { searchIndex: searchIndexCache, fuse: fuseInstance };
}

/**
 * GET /api/search/suggest
 *
 * 搜索建议API，支持前缀匹配和模糊搜索
 *
 * 查询参数:
 * - q: 搜索关键词（必需）
 * - limit: 返回数量（默认10，最大50）
 * - lang: 语言偏好（en, ja, all）
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const q = searchParams.get('q')?.toLowerCase() || '';
    const limit = Math.min(parseInt(searchParams.get('limit') || '10', 10), 50);
    const lang = searchParams.get('lang') || 'all';

    // 验证查询参数
    if (!q || q.length < 1) {
      return NextResponse.json(
        { error: 'Query parameter "q" is required and must be at least 1 character' },
        { status: 400 }
      );
    }

    // 加载搜索索引
    const { fuse } = loadSearchIndex();

    if (!fuse) {
      return NextResponse.json({ error: 'Search index not initialized' }, { status: 500 });
    }

    // 使用Fuse.js进行模糊搜索
    const fuseResults = fuse.search(q);

    // 转换结果格式
    let results = fuseResults.map((result) => {
      const item = result.item;
      return {
        slug: item.slug,
        name_en: item.name_en,
        name_ja: item.name_ja,
        name: item.name_en || item.name_ja || item.slug,
        stage: item.stage,
        attribute: item.attribute,
        score: result.score || 0,
      };
    });

    // 语言过滤
    if (lang === 'en') {
      results = results.filter(r => r.name_en);
    } else if (lang === 'ja') {
      results = results.filter(r => r.name_ja);
    }

    // 限制数量
    const limited = results.slice(0, limit);

    return NextResponse.json({
      query: q,
      results: limited.map(({ score, ...rest }) => rest), // 移除score字段
      meta: {
        total: results.length,
        returned: limited.length,
        lang
      }
    });

  } catch (error) {
    console.error('Search API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
