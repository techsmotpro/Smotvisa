import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/destinations',
        destination: '/visa',
        permanent: true,
      },
      {
        source: '/destinations/:id',
        destination: '/visa/:id-visa',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
