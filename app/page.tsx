import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import ReviewCards from "@/components/sections/ReviewCards";
import BlogSection from "@/components/sections/BlogSection";

export const metadata = {
  title: "SmotVisa | Visa and Travel Agency",
  description:
    "SmotVisa helps you travel hassle-free with expert visa processing for US, UK, Canada, Australia & 50+ countries.",

  keywords: [
    "visa services India",
    "US visa processing",
    "UK visa agency",
    "Canada visa help",
    "Australia visa consultants",
    "travel visa services",
    "SmotVisa"
  ],

  alternates: {
    canonical: "https://smotvisa.com/",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "SmotVisa Team" }],
  publisher: "SmotVisa",

  openGraph: {
    title: "SmotVisa | Visa and Travel Agency",
    description: "SmotVisa helps you travel hassle-free with expert visa processing for US, UK, Canada, Australia & 50+ countries.",
    url: "https://smotvisa.com",
    siteName: "SmotVisa",
    images: ["/images/visa-services-MHOtW-3U.jpg"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SmotVisa | Visa and Travel Agency",
    description: "SmotVisa helps you travel hassle-free with expert visa processing for US, UK, Canada, Australia & 50+ countries.",
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <HowItWorksSection />
      <DestinationsSection />
      <ReviewCards />
      <BlogSection />
    </main>
  );
}