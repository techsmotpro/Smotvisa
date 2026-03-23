import AboutSection from "@/components/sections/AboutSection";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "About SmotVisa | Trusted Visa & Travel Experts",
  description: "Simplifying global travel with expert visa assistance and personalized support for over a decade.",

  keywords: [
    "about SmotVisa",
    "visa experts India",
    "travel agency India",
    "SmotVisa team",
    "visa services history"
  ],

  alternates: {
    canonical: "https://smotvisa.com/about",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "SmotVisa Team" }],
  publisher: "SmotVisa",

  openGraph: {
    title: "About SmotVisa | Trusted Visa & Travel Experts",
    description: "Simplifying global travel with expert visa assistance and personalized support for over a decade.",
    url: "https://smotvisa.com/about",
    siteName: "SmotVisa",
    images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About SmotVisa | Trusted Visa & Travel Experts",
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