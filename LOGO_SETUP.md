# Logo 设置指南

## 📸 图片文件准备

你需要将提供的 logo 图片保存为以下文件：

### 1. 主 Logo 图片
将 logo 保存到：
```
public/logo.png
```
- 推荐尺寸：512x512px 或更大（正方形）
- 格式：PNG（带透明背景）
- 用途：网站 Header、页面展示

### 2. Favicon（浏览器标签页图标）
创建以下尺寸的 favicon：

```
app/favicon.ico       # 32x32px（必需）
app/icon.png         # 512x512px（可选，用于 PWA）
app/apple-icon.png   # 180x180px（可选，用于 iOS）
```

## 🛠️ 方法 1：使用在线工具生成 Favicon

1. 访问 https://realfavicongenerator.net/
2. 上传你的 logo.png
3. 下载生成的所有图标
4. 将文件放到对应位置

## 🛠️ 方法 2：使用命令行生成

如果你有 ImageMagick，可以运行：

```bash
# 从 logo.png 生成 favicon.ico
convert public/logo.png -resize 32x32 app/favicon.ico

# 生成 icon.png
cp public/logo.png app/icon.png

# 生成 apple-icon.png
convert public/logo.png -resize 180x180 app/apple-icon.png
```

## 📁 最终文件结构

```
website/
├── app/
│   ├── favicon.ico          # 浏览器标签页图标
│   ├── icon.png            # PWA 图标（可选）
│   └── apple-icon.png      # iOS 图标（可选）
└── public/
    └── logo.png            # 主 Logo
```

## ✅ 完成后

所有图片准备好后，我已经更新了代码：
- Header 组件已配置使用新 logo
- Layout 已配置 favicon
- 已添加 Open Graph 和 Twitter Card 图片元数据

只需保存图片文件，网站就会自动显示新 logo！

## 🔍 验证

保存图片后，检查：
1. 访问 http://localhost:3000 - Header 应显示新 logo
2. 查看浏览器标签页 - 应显示 favicon
3. 分享链接到社交媒体 - 应显示 logo 图片
