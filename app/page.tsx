import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import ReviewCards from "@/components/sections/ReviewCards";
import BlogSection from "@/components/sections/BlogSection";

export const metadata = {
  title: "Ultimate Visa and Travel Consultants in India | SmotVisa",
  description:
    "Experience expert visa assistance for US, UK, Canada, Singapore, Dubai, the leading visa and travel agency. Our expert team will handle all your visa and travel needs, ensuring a seamless and enjoyable trip.",

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
    title: "Ultimate Visa and Travel Consultants in India | SmotVisa",
    description: "Experience expert visa assistance for US, UK, Canada, Singapore, Dubai, the leading visa and travel agency. Our expert team will handle all your visa and travel needs, ensuring a seamless and enjoyable trip.",
    url: "https://smotvisa.com",
    siteName: "SmotVisa",
    images: ["/images/visa-services-MHOtW-3U.jpg"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ultimate Visa and Travel Consultants in India | SmotVisa",
    description: "Experience expert visa assistance for US, UK, Canada, Singapore, Dubai, the leading visa and travel agency. Our expert team will handle all your visa and travel needs, ensuring a seamless and enjoyable trip.",
  }
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <HowItWorksSection />
      <DestinationsSection />
      <ReviewCards />
      <BlogSection />
    </>
  );
}
