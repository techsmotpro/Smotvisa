import AboutSection from "@/components/sections/AboutSection";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "About SMOT VISA | Trusted Visa & Travel Experts",
  description: "Simplifying global travel with expert visa assistance and personalized support for over a decade.",

  keywords: [
    "about SMOT VISA",
    "visa experts India",
    "travel agency India",
    "SMOT VISA team",
    "visa services history"
  ],

  alternates: {
    canonical: "https://smotvisa.com/about",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "SMOT VISA Team" }],
  publisher: "SMOT VISA",

  openGraph: {
    title: "About SMOT VISA | Trusted Visa & Travel Experts",
    description: "Simplifying global travel with expert visa assistance and personalized support for over a decade.",
    url: "https://smotvisa.com/about",
    siteName: "SMOT VISA",
    images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About SMOT VISA | Trusted Visa & Travel Experts",
    description: "Simplifying global travel with expert visa assistance and personalized support for over a decade.",
    images: ["/images/hero-travel-CJWf8Tv1.jpg"],
  }
};

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