'use client';

import { useEffect, useRef, useState } from 'react';

interface GiscusCommentsProps {
  category?: string;
  categoryId?: string;
  mapping?: 'url' | 'title' | 'og:title' | 'specific' | 'number' | 'pathname';
  term?: string;
  reactionsEnabled?: boolean;
  emitMetadata?: boolean;
  inputPosition?: 'top' | 'bottom';
  lang?: string;
  loading?: 'lazy' | 'eager';
}

export default function GiscusComments({
  category = 'General',
  categoryId = 'DIC_kwDOP9rmts4CwWJ5',
  mapping = 'pathname',
  term,
  reactionsEnabled = true,
  emitMetadata = false,
  inputPosition = 'bottom',
  lang = 'en',
  loading = 'lazy',
}: GiscusCommentsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Detect theme from DOM
  const isDark = typeof window !== 'undefined' &&
    (document.documentElement.classList.contains('dark') ||
     window.matchMedia('(prefers-color-scheme: dark)').matches);

  const giscusTheme = isDark ? 'dark' : 'light';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'duan0004/digimontimestranger.com');
    script.setAttribute('data-repo-id', 'R_kgDOP9rmtg');
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', mapping);
    if (term) script.setAttribute('data-term', term);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', reactionsEnabled ? '1' : '0');
    script.setAttribute('data-emit-metadata', emitMetadata ? '1' : '0');
    script.setAttribute('data-input-position', inputPosition);
    script.setAttribute('data-theme', giscusTheme);
    script.setAttribute('data-lang', lang);
    script.setAttribute('data-loading', loading);
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    ref.current.appendChild(script);
  }, [mounted, category, categoryId, mapping, term, reactionsEnabled, emitMetadata, inputPosition, giscusTheme, lang, loading]);

  // Update theme when it changes
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: giscusTheme } } },
      'https://giscus.app'
    );
  }, [giscusTheme]);

  return <div ref={ref} className="giscus-wrapper" />;
}
