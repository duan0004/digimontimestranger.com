import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export const runtime = 'nodejs';

export const revalidate = 3600;

const ALLOWED_HOSTS = new Set([
  'img.game8.co',
  'j-img.game8.co',
  'img.game8.jp',
  'appmedia.jp',
]);

const CACHE_DIR = path.join(process.cwd(), '.next', 'cache', 'image-proxy');
const TTL_MS = 3600 * 1000; // 1 hour

async function ensureCacheDir() {
  await fs.mkdir(CACHE_DIR, { recursive: true });
}

function keyFor(url: string) {
  return crypto.createHash('sha1').update(url).digest('hex');
}

async function readCached(key: string) {
  const dataPath = path.join(CACHE_DIR, key);
  const metaPath = dataPath + '.json';
  try {
    const stat = await fs.stat(dataPath);
    const buf = await fs.readFile(dataPath);
    let meta: any = {};
    try { meta = JSON.parse(await fs.readFile(metaPath, 'utf-8')); } catch {}
    const etag = `${stat.size}-${Math.floor(stat.mtimeMs)}`;
    return { buf, meta, stat, etag, dataPath, metaPath };
  } catch {
    return null;
  }
}

async function writeCache(key: string, buf: Buffer, contentType: string) {
  const dataPath = path.join(CACHE_DIR, key);
  const metaPath = dataPath + '.json';
  await fs.writeFile(dataPath, buf);
  await fs.writeFile(metaPath, JSON.stringify({ contentType, savedAt: Date.now() }));
}

export async function GET(req: NextRequest) {
  try {
    await ensureCacheDir();
    const { searchParams } = new URL(req.url);
    const target = searchParams.get('url');
    if (!target) {
      return NextResponse.json({ error: 'Missing url' }, { status: 400 });
    }

    let u: URL;
    try {
      u = new URL(target);
    } catch {
      return NextResponse.json({ error: 'Invalid url' }, { status: 400 });
    }

    if (!ALLOWED_HOSTS.has(u.hostname)) {
      return NextResponse.json({ error: 'Host not allowed' }, { status: 403 });
    }

    const headers: Record<string, string> = {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
      'Referer': u.hostname.endsWith('game8.co') || u.hostname.endsWith('game8.jp') ? 'https://game8.co/' : 'https://appmedia.jp/',
      'Cache-Control': 'no-cache',
    };

    const key = keyFor(u.toString());
    const cached = await readCached(key);

    // If cached and If-None-Match matches, return 304
    const ifNoneMatch = req.headers.get('if-none-match');
    if (cached && ifNoneMatch && ifNoneMatch === cached.etag) {
      return new NextResponse(null, { status: 304 });
    }

    // If cached and fresh, serve from cache
    if (cached && (Date.now() - cached.stat.mtimeMs) < TTL_MS) {
      const resHeaders = new Headers();
      resHeaders.set('Content-Type', cached.meta.contentType || 'image/webp');
      resHeaders.set('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
      resHeaders.set('ETag', cached.etag);
      return new NextResponse(new Uint8Array(cached.buf), { status: 200, headers: resHeaders });
    }

    // Fetch upstream
    let upstreamOk = false;
    let upstreamBuf: Buffer | null = null;
    let contentType = 'image/webp';
    try {
      const resp = await fetch(u.toString(), {
        method: 'GET',
        headers,
        redirect: 'follow',
        signal: AbortSignal.timeout(10000),
        cache: 'no-store',
      });
      if (resp.ok) {
        const ab = await resp.arrayBuffer();
        upstreamBuf = Buffer.from(ab);
        contentType = resp.headers.get('content-type') || contentType;
        upstreamOk = true;
      }
    } catch {}

    if (upstreamOk && upstreamBuf) {
      await writeCache(key, upstreamBuf, contentType);
      const etag = `${upstreamBuf.length}-${Date.now()}`;
      const resHeaders = new Headers();
      resHeaders.set('Content-Type', contentType);
      resHeaders.set('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
      resHeaders.set('ETag', etag);
      return new NextResponse(new Uint8Array(upstreamBuf), { status: 200, headers: resHeaders });
    }

    // Upstream failed: serve stale cache if available
    if (cached) {
      const resHeaders = new Headers();
      resHeaders.set('Content-Type', cached.meta.contentType || 'image/webp');
      resHeaders.set('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
      resHeaders.set('ETag', cached.etag);
      resHeaders.set('Warning', '110 - "Response is Stale"');
      return new NextResponse(new Uint8Array(cached.buf), { status: 200, headers: resHeaders });
    }

    return NextResponse.json({ error: 'Upstream failed' }, { status: 502 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'proxy error' }, { status: 500 });
  }
}
