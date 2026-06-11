import PageHeader from "@/components/ui/PageHeader";
import JsonLd from "@/components/ui/JsonLd";
import AboutIntro from "@/components/sections/about/AboutIntro";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutMissionWork from "@/components/sections/about/AboutMissionWork";
import AboutWhatWeDo from "@/components/sections/about/AboutWhatWeDo";
import AboutScopePromise from "@/components/sections/about/AboutScopePromise";
import AboutFaq from "@/components/sections/about/AboutFaq";
import AboutCta from "@/components/sections/about/AboutCta";

export const metadata = {
  title: "About SmotVisa | Trusted Tourist & Business Visa Consultants in India",
  description:
    "Learn about SmotVisa — India's specialist tourist and business visa consultancy. Trusted since 2019, with a 98% success rate and 5,000+ successful visa applications across 50+ countries. Honest, expert visa assistance.",

  keywords: [
    "about SmotVisa",
    "trusted visa consultants in India",
    "visa assistance company India",
    "tourist visa experts",
    "business visa consultants",
    "visa documentation specialists",
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
    title: "About SmotVisa | Trusted Tourist & Business Visa Consultants in India",
    description:
      "India's specialist tourist and business visa consultancy — trusted since 2019, 98% success rate, 5,000+ successful applications across 50+ countries.",
    url: "https://smotvisa.com/about",
    siteName: "SmotVisa",
    images: ["/images/hero-travel-CJWf8Tv1.webp"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About SmotVisa | Trusted Tourist & Business Visa Consultants in India",
    description:
      "India's specialist tourist and business visa consultancy — trusted since 2019, 98% success rate, 5,000+ successful applications.",
    images: ["/images/hero-travel-CJWf8Tv1.webp"],
  },
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
        title="About SmotVisa"
        description="India's specialist tourist & business visa consultancy — trusted since 2019, with a 98% success rate across 50+ countries."
        breadcrumbs={[{ label: "About Us" }]}
      />
      <div className="bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-4 py-3 text-center">
          <p className="text-sm font-body font-semibold text-yellow-800">
            Disclaimer — We are a private visa consultancy and not affiliated with any embassy or government authority.
          </p>
        </div>
      </div>
      <AboutIntro />
      <AboutStory />
      <AboutMissionWork />
      <AboutWhatWeDo />
      <AboutScopePromise />
      <AboutFaq />
      <AboutCta />
    </main>
  );
}
