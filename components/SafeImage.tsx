'use client'

import Image, { ImageProps } from 'next/image';
import { useState, useMemo } from 'react';
import { useMemo as useReactMemo } from 'react';
import { useTranslations } from 'next-intl';

type Props = Omit<ImageProps, 'src' | 'alt'> & {
  src?: string | null;
  alt?: string;
  fallbackSrc?: string | null;
  className?: string;
  useProxy?: boolean;
};

function shouldProxy(url: string) {
  try {
    const u = new URL(url);
    return (
      u.hostname.endsWith('game8.co') ||
      u.hostname.endsWith('game8.jp') ||
      u.hostname.endsWith('appmedia.jp')
    );
  } catch {
    return false;
  }
}

function toProxy(url: string) {
  const encoded = encodeURIComponent(url);
  return `/api/image-proxy?url=${encoded}`;
}

export default function SafeImage({ src, alt = '', fallbackSrc, className, width, height, useProxy = true, ...rest }: Props) {
  const [idx, setIdx] = useState(0);
  const t = useTranslations();

  const primaryRaw = useMemo(() => (typeof src === 'string' ? src : ''), [src]);
  const fallbackRaw = useMemo(() => (typeof fallbackSrc === 'string' ? fallbackSrc : ''), [fallbackSrc]);

  const candidates = useReactMemo(() => {
    const list: string[] = [];
    if (primaryRaw) list.push(primaryRaw);
    if (useProxy && primaryRaw && shouldProxy(primaryRaw)) list.push(toProxy(primaryRaw));
    if (fallbackRaw) list.push(fallbackRaw);
    if (useProxy && fallbackRaw && shouldProxy(fallbackRaw)) list.push(toProxy(fallbackRaw));
    return Array.from(new Set(list));
  }, [primaryRaw, fallbackRaw, useProxy]);

  const currentSrc = candidates[idx] || '';

  if (!currentSrc) {
    return (
      <div className="text-gray-400 text-center">
        <p>{t('common.loading')}</p>
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      unoptimized
      onError={() => {
        setIdx((prev) => (prev + 1 < candidates.length ? prev + 1 : prev));
      }}
      {...rest}
    />
  );
}
