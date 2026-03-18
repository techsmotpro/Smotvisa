"use client";

import AboutSection from "@/components/sections/AboutSection";
import PageHeader from "@/components/ui/PageHeader";

export default function About() {
  return (
    <main>
      <PageHeader
        title="About Us"
        description="Simplifying global travel with expert visa assistance and personalized support for over a decade."
        breadcrumbs={[{ label: "About Us" }]}
      />
      <div className="bg-background">
        <AboutSection isFull={true} />
      </div>
    </main>
  );
}