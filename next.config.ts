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
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact/ahmedabad',
        destination: '/contact/ahmedabad/visa-agents-in-ahmedabad',
        permanent: true,
      },
      {
        source: '/visa-checklist-for-first-time-travelers-2026-complete-step-by-step-guide',
        destination: '/blog/visa-checklist-for-first-time-travelers-2026-complete-step-by-step-guide',
        permanent: true,
      },
      {
        source: '/name-mismatch-between-passport-tickets-will-you-be-stopped',
        destination: '/blog/name-mismatch-between-passport-tickets-will-you-be-stopped',
        permanent: true,
      },
      {
        source: '/how-to-check-ecr-ecnr-status-on-passport-online',
        destination: '/blog/how-to-check-ecr-ecnr-status-on-passport-online',
        permanent: true,
      },
      {
        source: '/visa/canada-visa',
        destination: '/visa/canada-visa-consultant',
        permanent: true,
      },
      {
        source: '/contact/delhi',
        destination: '/contact/delhi/visa-agents-in-connaught-place',
        permanent: true,
      },
      {
        source: '/contact/jaipur',
        destination: '/contact/jaipur/visa-agents-in-jaipur',
        permanent: true,
      },
      {
        source: '/get-a-quote',
        destination: '/reachout',
        permanent: true,
      },
      {
        source: '/contact/navi-mumbai',
        destination: '/contact/mumbai/visa-agents-in-goregaon-east',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
