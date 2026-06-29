import JsonLd from "@/components/ui/JsonLd";
import { fetchReviews } from "@/data/reviewData";
import HeroSection from "@/components/sections/HeroSection";
import WhyTravellersSection from "@/components/sections/WhyTravellersSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import VisaAssistanceSection from "@/components/sections/VisaAssistanceSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import DocumentsSection from "@/components/sections/DocumentsSection";
import WhoCanApplySection from "@/components/sections/WhoCanApplySection";
import ProcessingTimesSection from "@/components/sections/ProcessingTimesSection";
import RejectionReasonsSection from "@/components/sections/RejectionReasonsSection";
import ReviewCards from "@/components/sections/ReviewCards";
import FaqSection from "@/components/sections/FaqSection";
import BlogSection from "@/components/sections/BlogSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata = {
  title: "Visa Consultants in India | Tourist & Business Visa Assistance — Smotvisa",
  description:
    "Smotvisa helps Indian travellers get tourist and business visas with expertly prepared documents, application review and appointment support. Schengen, UK, USA, Dubai, Singapore & more.",

  keywords: [
    "visa consultants in India",
    "tourist visa assistance",
    "business visa assistance",
    "Schengen visa consultants",
    "UK visa assistance",
    "USA visitor visa",
    "Dubai visa agents",
    "visa documentation support",
  ],

  alternates: {
    canonical: "https://smotvisa.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "SmotVisa Team" }],
  publisher: "SmotVisa",

  openGraph: {
    title: "Visa Consultants in India | Tourist & Business Visa Assistance — Smotvisa",
    description:
      "Tourist and business visa assistance for Indian travellers — expertly prepared documents, application review and appointment support for Schengen, UK, USA, Dubai, Singapore and 50+ countries.",
    url: "https://smotvisa.com",
    siteName: "SmotVisa",
    images: ["/images/visa-services-MHOtW-3U.webp"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Visa Consultants in India | Tourist & Business Visa Assistance — Smotvisa",
    description:
      "Tourist and business visa assistance for Indian travellers — documents prepared, reviewed and submission supported. Schengen, UK, USA, Dubai, Singapore & more.",
    images: ["/images/visa-services-MHOtW-3U.webp"],
  },
};

export default async function Home() {
  const reviews = await fetchReviews();
  const reviewCount = reviews.length;
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount).toFixed(1);

  return (
    <>
      {/* Preload LCP hero image so browser discovers it before JS runs */}
      <link rel="preload" as="image" href="/images/thailand-tour.webp" fetchPriority="high" />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "SmotVisa",
        "url": "https://smotvisa.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://smotvisa.com/visa?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SmotVisa",
        "url": "https://smotvisa.com",
        "image": "https://smotvisa.com/images/visa-services-MHOtW-3U.webp",
        "description": "Trusted visa consultants in India for US, UK, Canada, Schengen and 50+ countries.",
        "telephone": "+91-8879822338",
        "email": "info@smotvisa.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": avgRating,
          "reviewCount": reviewCount,
          "bestRating": "5",
          "worstRating": "1"
        }
      }} />
      <HeroSection />
      <WhyTravellersSection />
      <AboutSection />
      <WhyChooseSection />
      <VisaAssistanceSection />
      <DestinationsSection />
      <HowItWorksSection />
      <DocumentsSection />
      <WhoCanApplySection />
      <ProcessingTimesSection />
      <RejectionReasonsSection />
      <ReviewCards />
      <FaqSection />
      <BlogSection />
      <FinalCtaSection />
    </>
  );
}
