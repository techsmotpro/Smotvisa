"use client";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import ReviewCards from "@/components/sections/ReviewCards";
import BlogSection from "@/components/sections/BlogSection";

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