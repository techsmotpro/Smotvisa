import AboutSection from "@/components/sections/AboutSection";
import PageHeader from "@/components/ui/PageHeader";
import JsonLd from "@/components/ui/JsonLd";

export const metadata = {
  title: "Know About Us | SmotVisa",
  description: "Explore Smotvisa Team, Their Mission and Vision in travel domain. Get inspired to travel and learn how to make your dream trips a reality.",

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
    title: "About SmotVisa | Trusted Visa & Travel Consultants in India",
    description: "Explore SmotVisa Team, Their Mission and Vision in travel domain. Get inspired to travel and learn how to make your dream trips a reality.",
    url: "https://smotvisa.com/about",
    siteName: "SmotVisa",
    images: ["/images/hero-travel-CJWf8Tv1.webp"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About SmotVisa | Trusted Visa & Travel Consultants in India",
    description: "Explore SmotVisa Team, Their Mission and Vision in travel domain. Get inspired to travel and learn how to make your dream trips a reality.",
    images: ["/images/hero-travel-CJWf8Tv1.webp"],
  }
};

export default function About() {
  return (
    <main>
      <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smotvisa.com/" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://smotvisa.com/about" }
          ]
      }} />
      <PageHeader
        title="About Us"
        description="Simplifying global travel with expert visa assistance and personalized support for over a decade."
        breadcrumbs={[{ label: "About Us" }]}
      />
      <div className="bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-4 py-3 text-center">
          <p className="text-sm font-body font-semibold text-yellow-800">
            Disclaimer — We are a private visa consultancy and not affiliated with any embassy or government authority.
          </p>
        </div>
      </div>
      <div className="bg-background">
        <AboutSection isFull={true} />
      </div>
    </main>
  );
}