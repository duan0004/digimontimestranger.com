'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface GoogleAdsenseProps {
  publisherId?: string;
}

export default function GoogleAdsense({ publisherId = 'ca-pub-XXXXXXXXXXXXXXXX' }: GoogleAdsenseProps) {
  // Only load in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  responsive?: boolean;
  className?: string;
}

export function AdUnit({
  slot,
  format = 'auto',
  responsive = true,
  className = ''
}: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  // Only show in production
  if (process.env.NODE_ENV !== 'production') {
    return (
      <div className={`bg-gray-200 dark:bg-gray-700 p-4 text-center text-sm text-gray-600 dark:text-gray-400 ${className}`}>
        [Ad Placeholder - Production Only]
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: 'block' }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive.toString()}
    />
  );
}
