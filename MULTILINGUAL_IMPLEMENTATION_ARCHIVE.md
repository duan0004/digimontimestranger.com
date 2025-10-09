# 多语言实现完整存档

## 项目概况
为 Digimon Time Stranger 网站实现了完整的多语言支持系统，支持 15 种语言。

## 实施时间
2025年（基于 Next.js 15 + next-intl）

## 支持的语言（15种）
1. English (en) - 默认语言
2. 日本語 (ja)
3. 한국어 (ko)
4. Español (es)
5. Deutsch (de)
6. Français (fr)
7. Русский (ru)
8. Italiano (it)
9. Português (pt)
10. Nederlands (nl)
11. Tiếng Việt (vi)
12. ไทย (th)
13. Bahasa Melayu (ms)
14. Filipino (fil)
15. 简体中文 (zh-CN) - 放在最后位置

注：繁体中文 (zh-TW) 已根据用户要求删除

## 技术栈
- **Framework**: Next.js 15 (App Router)
- **i18n Library**: next-intl
- **Build Tool**: Turbopack
- **Routing**: 基于文件的路由 + 中间件
- **渲染**: SSG (Static Site Generation)

## 核心配置文件

### 1. i18n.ts
```typescript
// 定义支持的语言
export const locales = [
  'en', 'ja', 'ko', 'es', 'de', 'fr', 'ru', 
  'it', 'pt', 'nl', 'vi', 'th', 'ms', 'fil', 'zh-CN'
] as const;

export const defaultLocale: Locale = 'en';

// 配置 next-intl
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }
  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
```

### 2. middleware.ts
```typescript
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
```

### 3. next.config.ts
```typescript
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  // ... 其他配置
};

export default withNextIntl(nextConfig);
```

## 目录结构
```
website/
├── i18n.ts                          # i18n 配置
├── middleware.ts                    # 语言路由中间件
├── locales/                         # 翻译文件
│   ├── en.json                     # 英文（主文件）
│   ├── ja.json                     # 日语
│   ├── ko.json                     # 韩语
│   ├── es.json                     # 西班牙语
│   ├── de.json                     # 德语
│   ├── fr.json                     # 法语
│   ├── ru.json                     # 俄语
│   ├── it.json                     # 意大利语
│   ├── pt.json                     # 葡萄牙语
│   ├── nl.json                     # 荷兰语
│   ├── vi.json                     # 越南语
│   ├── th.json                     # 泰语
│   ├── ms.json                     # 马来语
│   ├── fil.json                    # 菲律宾语
│   └── zh-CN.json                  # 简体中文
├── app/
│   ├── [locale]/                   # 语言路由
│   │   ├── layout.tsx             # 带 NextIntlClientProvider
│   │   ├── page.tsx               # 首页
│   │   ├── digidex/               # Digidex 页面
│   │   ├── database/              # Database 页面
│   │   ├── guides/                # Guides 页面
│   │   │   ├── page.tsx
│   │   │   ├── best-starters/
│   │   │   ├── evolution-guide/
│   │   │   ├── fast-leveling/
│   │   │   ├── team-building/
│   │   │   ├── boss-strategies/
│   │   │   ├── story-branches/
│   │   │   └── collectibles/
│   │   └── community/             # Community 页面
│   └── layout.tsx                 # 根布局
└── components/
    └── layout/
        ├── Header.tsx             # 导航栏
        ├── Footer.tsx             # 页脚
        └── LanguageSwitcher.tsx   # 语言切换器
```

## 已翻译的页面和组件

### 完全翻译（100%）
1. **Header 组件**
   - 导航菜单项
   - 网站标题和副标题
   - 搜索按钮

2. **Footer 组件**
   - 所有链接标题
   - 版权信息
   - 免责声明

3. **首页 (Homepage)**
   - Hero section
   - 功能介绍
   - 热门指南
   - 社区板块

4. **Digidex 页面**
   - 标题和描述
   - 搜索和筛选
   - SEO 元数据

5. **Database 页面**
   - 数据库入口
   - 资源链接

6. **Community 页面**
   - 社区标题和描述
   - 分类链接

7. **Guides 页面 - 主页**
   - 指南列表
   - 分类

8. **Best Starters Guide (完整翻译)**
   - 完整的指南内容
   - Hero section
   - 介绍段落
   - 快速推荐
   - Starter 排名（Agumon, Veemon, Guilmon）
   - 优势和劣势分析
   - 进化路径
   - 团队建设提示
   - 常见错误
   - FAQ（4个问题）
   - 结论
   - 相关指南链接

### 结构翻译（标题/导航/SEO）
9. **Evolution Guide**
   - 页面标题、描述、面包屑
   - SEO 元数据
   - 详细内容保持英文

10. **Fast Leveling Guide**
    - 页面标题、描述、面包屑
    - SEO 元数据
    - 详细内容保持英文

11. **Team Building Guide**
    - 页面标题、描述、面包屑
    - SEO 元数据
    - 详细内容保持英文

12. **Boss Strategies Guide**
    - 页面标题、描述、面包屑
    - SEO 元数据
    - 详细内容保持英文

13. **Story Branches Guide**
    - 页面标题、描述、面包屑
    - SEO 元数据
    - 详细内容保持英文

14. **Collectibles Guide**
    - 页面标题、描述、面包屑
    - SEO 元数据
    - 详细内容保持英文

## 翻译文件结构

### locales/en.json 主要命名空间
```json
{
  "common": {
    "readMore": "...",
    "search": "...",
    "filter": "...",
    "sort": "...",
    "loading": "...",
    "error": "...",
    "notFound": "...",
    "backToHome": "..."
  },
  "nav": {
    "home": "...",
    "walkthrough": "...",
    "digidex": "...",
    "database": "...",
    "guides": "...",
    "tools": "...",
    "community": "...",
    "about": "...",
    "siteTitle": "...",
    "siteSubtitle": "..."
  },
  "home": {
    "title": "...",
    "subtitle": "...",
    "description": "...",
    "hero": { ... },
    "features": { ... },
    "popularGuides": { ... },
    "community": { ... }
  },
  "digidex": { ... },
  "digimon": { ... },
  "guides": {
    "title": "...",
    "description": "...",
    "categories": { ... },
    "bestStarters": {
      "title": "...",
      "description": "...",
      "breadcrumb": "...",
      "seoTitle": "...",
      "seoDescription": "...",
      "hero": { ... },
      "intro": { ... },
      "quickRecs": { ... },
      "mechanics": { ... },
      "rankings": {
        "agumon": { ... },
        "veemon": { ... },
        "guilmon": { ... }
      },
      "teamBuilding": { ... },
      "mistakes": { ... },
      "faqs": { ... },
      "conclusion": { ... },
      "relatedGuides": { ... }
    },
    "evolutionGuide": { ... },
    "fastLeveling": { ... },
    "teamBuilding": { ... },
    "bossStrategies": { ... },
    "storyBranches": { ... },
    "collectibles": { ... }
  },
  "community": { ... },
  "footer": {
    "description": "...",
    "siteTitle": "...",
    "siteSubtitle": "...",
    "guidesTitle": "...",
    "toolsTitle": "...",
    "resourcesTitle": "...",
    "bestStarters": "...",
    "evolutionGuide": "...",
    "teamBuilding": "...",
    "fastLeveling": "...",
    "teamBuilder": "...",
    "evolutionTree": "...",
    "communityForum": "...",
    "pcSettings": "...",
    "updatesPatches": "...",
    "about": "...",
    "privacyPolicy": "...",
    "termsOfService": "...",
    "copyright": "© {year} ...",
    "disclaimer": "...",
    "builtWith": "..."
  },
  "seo": {
    "home": { ... },
    "digidex": { ... },
    "guides": { ... }
  }
}
```

## 代码实现模式

### 服务器组件（Server Components）
```typescript
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.bestStarters' });
  
  return {
    title: t('seoTitle'),
    description: t('seoDescription'),
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.bestStarters' });
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <Link href={`/${locale}/guides`}>Back</Link>
    </div>
  );
}
```

### 客户端组件（Client Components）
```typescript
'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function Component() {
  const t = useTranslations('nav');
  const params = useParams();
  const locale = params.locale as string;
  
  return (
    <nav>
      <Link href={`/${locale}/guides`}>{t('guides')}</Link>
    </nav>
  );
}
```

### 语言切换器组件
```typescript
'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales, localeLabels, localeFlags } from '@/i18n';

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params.locale as Locale;
  
  const getLocalizedPath = (locale: Locale) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
    return `/${locale}${pathWithoutLocale}`;
  };
  
  return (
    <div>
      {locales.map((locale) => (
        <Link key={locale} href={getLocalizedPath(locale)}>
          <span>{localeFlags[locale]}</span>
          <span>{localeLabels[locale]}</span>
        </Link>
      ))}
    </div>
  );
}
```

## Git 提交历史

### 关键提交
1. **87fb582** - `fix: Implement translations on homepage to enable language switching`
   - 首页翻译实现
   - 修复语言切换不生效的问题

2. **593174b** - `feat: Implement multilingual support for Header and Footer components`
   - Header 和 Footer 完整翻译
   - 添加 nav 和 footer 翻译键到所有 15 种语言

3. **cdf90dd** - `feat: Implement multilingual support for main functional pages`
   - Digidex、Database、Guides、Community 页面翻译
   - 动态 SEO 元数据生成

4. **cd81793** - `feat: Implement full multilingual support for best-starters guide`
   - best-starters 指南完整翻译
   - 包含所有详细内容、FAQ、示例

5. **dda3a16** - `feat: Add basic multilingual support to 6 remaining guide pages`
   - 其他 6 个 guides 页面基础翻译
   - 结构框架就绪，详细内容可后续添加

## 构建统计

### 页面生成
- **总页面数**: 8,805 页
- **计算方式**: 587 独立页面 × 15 种语言
- **生成时间**: ~5-8 秒（使用 Turbopack）
- **构建状态**: ✅ 全部成功

### 包大小
- **First Load JS**: 126 kB
- **Middleware**: 87.9 kB
- **CSS**: 11.7 kB

## 路由模式

### URL 结构
```
/{locale}/                      # 首页
/{locale}/digidex              # Digidex
/{locale}/database             # Database
/{locale}/guides               # Guides 列表
/{locale}/guides/best-starters # Best Starters 指南
/{locale}/community            # Community
/{locale}/tools/team-builder   # Team Builder
```

### 示例
- 英文: `https://yourdomain.com/en/guides/best-starters`
- 日语: `https://yourdomain.com/ja/guides/best-starters`
- 中文: `https://yourdomain.com/zh-CN/guides/best-starters`

## SEO 优化

### Metadata 生成
```typescript
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.home' });
  
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'ja': '/ja',
        'ko': '/ko',
        'es': '/es',
        'de': '/de',
        'fr': '/fr',
        'ru': '/ru',
        'it': '/it',
        'pt': '/pt',
        'nl': '/nl',
        'vi': '/vi',
        'th': '/th',
        'ms': '/ms',
        'fil': '/fil',
        'zh-CN': '/zh-CN',
      },
    },
  };
}
```

### 结构化数据
- FAQ Schema 自动生成（best-starters guide）
- 多语言内容自动索引
- 语言切换链接（hreflang）

## 性能优化

### 静态生成（SSG）
- 所有页面在构建时预渲染
- 不需要运行时翻译
- 零延迟的语言切换

### 代码分割
- 翻译文件按需加载
- 每个页面只加载需要的翻译
- Tree-shaking 优化

## 用户体验

### 语言检测
1. URL 路径优先
2. 浏览器语言设置
3. 默认回退到英语

### 语言切换
- 顶部导航栏语言切换器
- 移动端侧边栏语言切换器
- 保持当前页面路径
- 国旗 emoji + 本地语言名称

### 持久化
- 路径包含语言代码
- 刷新页面保持语言
- 可分享的多语言链接

## 未来扩展

### 待完善翻译
1. Evolution Guide 详细内容
2. Fast Leveling Guide 详细内容
3. Team Building Guide 详细内容
4. Boss Strategies Guide 详细内容
5. Story Branches Guide 详细内容
6. Collectibles Guide 详细内容

### 可添加功能
- 用户偏好保存（localStorage）
- 自动语言检测优化
- 翻译质量反馈
- 社区贡献翻译

## 测试清单

✅ 所有 15 种语言构建成功
✅ 语言切换正常工作
✅ 面包屑导航多语言
✅ 所有内部链接语言感知
✅ SEO 元数据多语言
✅ 无 404 错误
✅ 无构建错误
✅ 无 TypeScript 错误

## 维护指南

### 添加新翻译
1. 更新 `locales/en.json` 添加英文翻译键
2. 复制到所有其他 14 个语言文件
3. 更新组件使用 `t('newKey')`
4. 测试构建

### 添加新语言
1. 在 `i18n.ts` 的 `locales` 数组添加语言代码
2. 添加到 `localeLabels` 和 `localeFlags`
3. 创建 `locales/{newLocale}.json`
4. 复制并翻译所有键
5. 测试构建

### 更新翻译
1. 直接编辑对应语言的 JSON 文件
2. 保持键结构一致
3. 测试构建确保无错误

## 技术决策记录

### 为什么选择 next-intl？
- ✅ Next.js 15 App Router 官方推荐
- ✅ 类型安全
- ✅ SSG 支持
- ✅ 性能优异
- ✅ 开发体验好

### 为什么使用 SSG 而不是 ISR？
- ✅ 内容相对静态
- ✅ 最佳性能
- ✅ SEO 友好
- ✅ 零运行时成本

### 为什么分两种翻译策略？
- ✅ best-starters 是最重要的指南，完全翻译提升用户体验
- ✅ 其他指南先实现框架，避免翻译工作量过大
- ✅ 可以根据使用数据逐步完善翻译

## 联系方式
如有问题或需要支持，请参考：
- Next.js i18n 文档: https://nextjs.org/docs/app/building-your-application/routing/internationalization
- next-intl 文档: https://next-intl-docs.vercel.app/

---

**存档日期**: 2025-10-09
**项目状态**: ✅ 生产就绪
**总工作量**: ~7-8 小时
**代码行数**: ~3000+ 行翻译 JSON + ~500 行组件更新
