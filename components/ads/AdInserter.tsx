'use client';

import Script from 'next/script';

export function MiddleAd() {
  return (
    <div className="flex justify-center my-8">
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            atOptions = {
              'key' : '9ae30b8f4ec6c626aac913c8f219ccb8',
              'format' : 'iframe',
              'height' : 250,
              'width' : 300,
              'params' : {}
            };
          `,
        }}
      />
      <Script
        src="//www.highperformanceformat.com/9ae30b8f4ec6c626aac913c8f219ccb8/invoke.js"
        strategy="afterInteractive"
      />
    </div>
  );
}

export function BottomAd() {
  return (
    <div className="flex justify-center py-4">
      <Script
        src="//pl28048659.effectivegatecpm.com/f06818371c2ae1848d2c710bdf160a61/invoke.js"
        strategy="afterInteractive"
      />
      <div id="container-f06818371c2ae1848d2c710bdf160a61" />
    </div>
  );
}