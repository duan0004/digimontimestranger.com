# Giscus 论坛设置指南

## 当前状态

✅ GitHub Discussions 已启用
⚠️ 仓库当前是私有的 - Giscus需要公开仓库

## 步骤 1: 将仓库设为公开

由于Giscus需要公开仓库才能工作，你需要：

### 方法 1: 通过GitHub CLI
```bash
gh repo edit duan0004/digimontimestranger.com --visibility public
```

### 方法 2: 通过GitHub网页界面
1. 访问 https://github.com/duan0004/digimontimestranger.com/settings
2. 滚动到最底部 "Danger Zone"
3. 点击 "Change repository visibility"
4. 选择 "Make public"
5. 输入仓库名称确认

## 步骤 2: 安装 Giscus App

1. 访问 https://github.com/apps/giscus
2. 点击 "Install"
3. 选择 "Only select repositories"
4. 选择 `digimontimestranger.com`
5. 点击 "Install"

## 步骤 3: 创建 Discussion 分类

运行以下命令创建论坛分类：

```bash
# 获取仓库 ID
gh api graphql -f query='
{
  repository(owner: "duan0004", name: "digimontimestranger.com") {
    id
    discussionCategories(first: 10) {
      nodes {
        id
        name
        emoji
      }
    }
  }
}'
```

然后创建6个分类：

```bash
# 1. General Discussion (综合讨论)
gh api graphql -f query='
mutation {
  createDiscussionCategory(
    input: {
      repositoryId: "YOUR_REPO_ID"
      name: "General Discussion"
      emoji: "💬"
    }
  ) {
    discussionCategory {
      id
      name
    }
  }
}'

# 2. Battle Strategies (战斗策略)
gh api graphql -f query='
mutation {
  createDiscussionCategory(
    input: {
      repositoryId: "YOUR_REPO_ID"
      name: "Battle Strategies"
      emoji: "⚔️"
    }
  ) {
    discussionCategory {
      id
      name
    }
  }
}'

# 3. Team Building (队伍构建)
gh api graphql -f query='
mutation {
  createDiscussionCategory(
    input: {
      repositoryId: "YOUR_REPO_ID"
      name: "Team Building"
      emoji: "🛡️"
    }
  ) {
    discussionCategory {
      id
      name
    }
  }
}'

# 4. Questions & Help (问答求助)
gh api graphql -f query='
mutation {
  createDiscussionCategory(
    input: {
      repositoryId: "YOUR_REPO_ID"
      name: "Questions & Help"
      emoji: "❓"
    }
  ) {
    discussionCategory {
      id
      name
    }
  }
}'

# 5. Player Guides (玩家指南)
gh api graphql -f query='
mutation {
  createDiscussionCategory(
    input: {
      repositoryId: "YOUR_REPO_ID"
      name: "Player Guides"
      emoji: "📚"
    }
  ) {
    discussionCategory {
      id
      name
    }
  }
}'

# 6. Achievements & Showcase (成就展示)
gh api graphql -f query='
mutation {
  createDiscussionCategory(
    input: {
      repositoryId: "YOUR_REPO_ID"
      name: "Achievements & Showcase"
      emoji: "🏆"
    }
  ) {
    discussionCategory {
      id
      name
    }
  }
}'
```

## 步骤 4: 配置 Giscus

1. 访问 https://giscus.app
2. 输入你的仓库: `duan0004/digimontimestranger.com`
3. 选择Discussion分类映射
4. 选择功能（建议启用 reactions 和 comments）
5. 选择主题（建议选择 "preferred_color_scheme"）

## 步骤 5: 更新代码中的配置

在 `components/community/GiscusComments.tsx` 中，你需要更新以下内容：

```typescript
// 从 Giscus 配置页面获取
data-repo="duan0004/digimontimestranger.com"
data-repo-id="YOUR_ACTUAL_REPO_ID"
data-category="General Discussion" // 或其他分类
data-category-id="YOUR_ACTUAL_CATEGORY_ID"
```

## 步骤 6: 验证设置

运行以下命令验证：

```bash
# 检查 Discussions 是否启用
gh repo view duan0004/digimontimestranger.com --json hasDiscussionsEnabled

# 检查仓库是否公开
gh repo view duan0004/digimontimestranger.com --json visibility

# 列出所有 Discussion 分类
gh api graphql -f query='
{
  repository(owner: "duan0004", name: "digimontimestranger.com") {
    discussionCategories(first: 10) {
      nodes {
        id
        name
        emoji
        description
      }
    }
  }
}'
```

## 故障排除

### Giscus 不显示
- 确认仓库是公开的
- 确认已安装 Giscus App
- 检查浏览器控制台是否有错误
- 确认 repo-id 和 category-id 正确

### 无法评论
- 需要用户使用 GitHub 账号登录
- 确认 Discussion 分类存在
- 检查 Giscus App 权限

### 评论不同步
- 刷新页面
- 检查 GitHub Discussions 是否有新评论
- 验证 category 映射是否正确

## 注意事项

⚠️ **重要**: 由于当前仓库是私有的，Giscus无法工作。必须先将仓库设为公开。

✅ Discussions 已启用

🔐 如果你想保持代码私有，可以考虑：
- 创建一个单独的公开仓库专门用于 Discussions
- 使用其他评论系统（如 Disqus, Utterances）
- 使用自建评论系统

## 获取当前配置信息

```bash
# 仓库基本信息
gh repo view duan0004/digimontimestranger.com

# 完整的 Discussions 信息
gh api graphql -f query='
{
  repository(owner: "duan0004", name: "digimontimestranger.com") {
    id
    name
    hasDiscussionsEnabled
    isPrivate
    url
    discussionCategories(first: 10) {
      nodes {
        id
        name
        emoji
        description
      }
    }
  }
}'
```

## 推荐配置

建议使用以下 Giscus 配置：

- **Language**: zh-CN (中文)
- **Lazy loading**: ✅ 启用
- **Input position**: Bottom (评论框在底部)
- **Theme**: preferred_color_scheme (跟随系统主题)
- **Reactions**: ✅ 启用
- **Metadata**: ✅ 启用

这样用户体验最佳！
