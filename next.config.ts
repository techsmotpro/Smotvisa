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
      // New redirects for the 404 URLs
      {
        source: '/country-wise-tourist-visa-fees-processing-time-comparison',
        destination: '/visa',
        permanent: true,
      },
      {
        source: '/canada-federal-skilled-worker-program',
        destination: '/visa/canada-visa-consultant',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/reachout',
        permanent: true,
      },
      {
        source: '/our-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/wishlist-page',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tag/deport',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/contact/maharashtra-goregaon',
        destination: '/contact/mumbai/visa-agents-in-goregaon-east',
        permanent: true,
      },
      {
        source: '/contact/maharashtra-goregaon/',
        destination: '/contact/mumbai/visa-agents-in-goregaon-east',
        permanent: true,
      },
      {
        source: '/hotel-booking',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/state/maharashtra',
        destination: '/contact/mumbai/visa-agents-in-goregaon-east',
        permanent: true,
      },
      {
        source: '/top-reasons-for-australian-working-visa-rejection',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/contact/visakhapatnam',
        destination: '/contact/visakhapatnam/visa-agents-in-walter',
        permanent: true,
      },
      {
        source: '/contact/bangalore',
        destination: '/contact/bangalore/visa-agents-in-cv-raman-nagar',
        permanent: true,
      },
      {
        source: '/h1b-visa-process-complete-guide-for-indian-professionals',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/what-happens-if-i-lose-passport-abroad-during-travel',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/air-ticket-booking',
        destination: '/services/air-ticketing',
        permanent: true,
      },
      {
        source: '/blog-standard',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/tour-packages',
        destination: '/services/tours',
        permanent: true,
      },
      {
        source: '/category/uncategorized/page/2',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/contact/hyderabad',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/office/hyderabad',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/lets-travel-around-the-world',
        destination: '/services/tours',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/portfolio/palm-jumeirah',
        destination: '/services/tours',
        permanent: true,
      },
      {
        source: '/professional-expert-in-immigration',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/location/visakhapatnam',
        destination: '/contact/visakhapatnam/visa-agents-in-walter',
        permanent: true,
      },
      {
        source: '/location/delhi',
        destination: '/contact/delhi/visa-agents-in-connaught-place',
        permanent: true,
      },
      {
        source: '/immigration-expert-in-professional',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/portfolio/cambodia',
        destination: '/services/tours',
        permanent: true,
      },
      {
        source: '/services/private-journeys',
        destination: '/services/tours',
        permanent: true,
      },
      {
        source: '/hello-world',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/home-03',
        destination: '/',
        permanent: true,
      },
      {
        source: '/visa-agents-in-bangalore',
        destination: '/visa-agents-in-bangalore',
        permanent: true,
      },
      {
        source: '/office/ahmedabad',
        destination: '/contact/ahmedabad/visa-agents-in-ahmedabad',
        permanent: true,
      },
      {
        source: '/services/australia-visa',
        destination: '/visa/australia-visa-consultant',
        permanent: true,
      },
      {
        source: '/visa-agents-in-delhi',
        destination: '/contact/delhi/visa-agents-in-connaught-place',
        permanent: true,
      },
      {
        source: '/office',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services/passport-delivery',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/office/chennai',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/home-03-onepage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/asylum-and-refugees',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/vistro-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
