import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.grindosaur.com',
        pathname: '/img/games/digimon-story-time-stranger/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
