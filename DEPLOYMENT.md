# Digimon Time Stranger - Production Deployment Guide

Complete deployment instructions for deploying to **digimontimestranger.com**.

## 🚀 Pre-Deployment Checklist

### 1. Environment Variables

Create a `.env.production` file in the root directory:

```bash
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google AdSense
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX

# Domain
NEXT_PUBLIC_SITE_URL=https://digimontimestranger.com
```

### 2. Update Configuration Files

**Update Analytics and AdSense IDs:**

- `components/analytics/GoogleAnalytics.tsx` - Replace `G-XXXXXXXXXX` with actual GA4 ID
- `components/ads/GoogleAdsense.tsx` - Replace `ca-pub-XXXXXXXXXXXXXXXX` with actual AdSense ID

**Update Domain in SEO files:**

- `lib/seo.ts` - Ensure base URL is `https://digimontimestranger.com`
- `app/sitemap.ts` - Verify baseUrl
- `app/robots.ts` - Verify sitemap URL

### 3. Content Completion

✅ **Completed:**
- Homepage with hero and featured content
- Digidex database (63 Digimon)
- Team Builder tool
- Evolution Tree visualizer
- Best Starters Guide
- Automatic artwork download system
- SEO infrastructure (sitemap, robots.txt)
- Analytics and AdSense integration

⏳ **Pending (Optional for v1.0):**
- Additional guide articles
- Expanded Digimon database (150+)
- Open Graph images
- Custom 404 page

## 📦 Deployment Options

### Option A: Vercel (Recommended)

Vercel is the easiest deployment option for Next.js applications.

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

#### Step 3: Deploy

```bash
# Test deployment
vercel

# Production deployment
vercel --prod
```

#### Step 4: Configure Domain

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Domains
4. Add `digimontimestranger.com`
5. Follow DNS configuration instructions from your domain registrar

#### Step 5: Environment Variables

1. In Vercel Dashboard → Settings → Environment Variables
2. Add all production environment variables:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID`
   - `NEXT_PUBLIC_SITE_URL`

### Option B: Your Own Hosting

If you have your own hosting, follow these steps:

#### Step 1: Build the Application

```bash
npm run build
```

This creates an optimized production build in `.next` directory.

#### Step 2: Test Production Build Locally

```bash
npm start
```

Visit `http://localhost:3000` to verify the build.

#### Step 3: Deploy Files

Upload these directories to your server:
- `.next/`
- `public/`
- `node_modules/` (or run `npm install --production` on server)
- `package.json`
- `package-lock.json`
- `next.config.mjs`

#### Step 4: Server Configuration

**For Node.js hosting:**

```bash
# Install PM2 for process management
npm install -g pm2

# Start the application
pm2 start npm --name "digimon-time-stranger" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

**For Nginx reverse proxy:**

```nginx
server {
    listen 80;
    server_name digimontimestranger.com www.digimontimestranger.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Option C: Docker Deployment

#### Step 1: Create Dockerfile

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

#### Step 2: Update next.config.mjs

```javascript
const nextConfig = {
  output: 'standalone',
  // ... other config
};
```

#### Step 3: Build and Run Docker Container

```bash
docker build -t digimon-time-stranger .
docker run -p 3000:3000 digimon-time-stranger
```

## 🔧 Post-Deployment Tasks

### 1. Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `digimontimestranger.com`
3. Verify ownership (DNS, HTML file, or Google Analytics)
4. Submit sitemap: `https://digimontimestranger.com/sitemap.xml`

### 2. Google Analytics 4 Setup

1. Create GA4 property at [Google Analytics](https://analytics.google.com)
2. Get Measurement ID (format: `G-XXXXXXXXXX`)
3. Update environment variables
4. Verify tracking is working using GA4 DebugView

### 3. Google AdSense Setup

1. Sign up at [Google AdSense](https://www.google.com/adsense)
2. Add your site and verify
3. Get Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`)
4. Update environment variables
5. Place ad units in desired locations using `<AdUnit />` component

### 4. SSL Certificate

Ensure HTTPS is enabled:
- **Vercel**: Automatic SSL via Let's Encrypt
- **Own Hosting**: Use Certbot for Let's Encrypt
  ```bash
  sudo certbot --nginx -d digimontimestranger.com -d www.digimontimestranger.com
  ```

### 5. Performance Optimization

```bash
# Test site speed
npm install -g lighthouse
lighthouse https://digimontimestranger.com --view
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### 6. Monitoring Setup

**Setup Error Tracking (Optional):**

```bash
npm install @sentry/nextjs
```

**Setup Uptime Monitoring:**
- [UptimeRobot](https://uptimerobot.com/)
- [Pingdom](https://www.pingdom.com/)

## 🎨 Content Updates

### Download Digimon Artwork

```bash
# Download all Digimon artwork
npm run download-artwork:all

# Download specific Digimon
npm run download-artwork agumon
```

### Add New Digimon

1. Edit `data/digimon.csv`
2. Add new row with all required fields
3. Run artwork downloader
4. Rebuild and redeploy

### Add New Guides

1. Create new guide in `app/guides/[guide-name]/page.tsx`
2. Follow existing guide structure
3. Add to sitemap
4. Update homepage featured guides

## 🔍 SEO Checklist

- [x] Sitemap.xml configured
- [x] Robots.txt configured
- [x] Meta tags on all pages
- [x] Open Graph tags
- [x] JSON-LD structured data
- [x] Google Search Console verification
- [x] Google Analytics tracking
- [ ] Submit to Bing Webmaster Tools
- [ ] Generate Open Graph images

## 📊 Analytics Goals

Setup these conversions in GA4:
1. Tool usage (Team Builder interactions)
2. Guide reading (scroll depth tracking)
3. Digimon page views
4. Search usage
5. External link clicks

## 🚨 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### 404 Errors

- Verify all dynamic routes have `generateStaticParams()`
- Check `data/digimon.csv` for correct slugs
- Ensure no broken internal links

### Performance Issues

- Enable Next.js Image Optimization
- Add appropriate caching headers
- Consider CDN for static assets
- Optimize Digimon artwork file sizes

## 📞 Support

For deployment issues, check:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- GitHub repository issues

---

## Quick Deploy Commands

```bash
# Full deployment workflow
npm install
npm run build
npm run download-artwork:all  # Download all artwork
npm start  # Test locally

# Deploy to Vercel
vercel --prod

# Or deploy to your server
scp -r .next public package*.json user@server:/path/to/app
ssh user@server 'cd /path/to/app && npm install --production && pm2 restart digimon-time-stranger'
```

## 🎉 Launch Checklist

Before going live:

- [ ] All environment variables set
- [ ] Domain DNS configured
- [ ] SSL certificate active
- [ ] Google Analytics tracking verified
- [ ] AdSense approved and active
- [ ] Sitemap submitted to Search Console
- [ ] All critical pages tested
- [ ] Mobile responsiveness verified
- [ ] Performance scores acceptable
- [ ] Social media accounts created
- [ ] Initial content complete

**Ready to launch! 🚀**
