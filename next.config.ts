import type { NextConfig } from "next";

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

export default nextConfig;
