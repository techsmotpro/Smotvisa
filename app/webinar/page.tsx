import JsonLd from "@/components/ui/JsonLd";
import WebinarClient from "@/components/webinar/WebinarClient";

export const metadata = {
  title: "Free Live Webinar | Your Path to Spain Football Starts Here | SmotPro",
  description:
    "Join our free live webinar and discover how aspiring players can train in Spain, experience professional coaching, and explore real football career pathways. Hosted by Mr. Shaji Kandambeth, CEO of SmotPro India.",

  keywords: [
    "football webinar Spain",
    "Spain football academy",
    "football trials Spain",
    "Indian footballers Spain",
    "football career abroad",
    "SmotPro webinar",
    "Spanish football coaching",
    "football training Spain",
  ],

  alternates: {
    canonical: "https://smotvisa.com/webinar",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "SmotPro Team" }],
  publisher: "SmotPro",

  openGraph: {
    title: "Free Live Webinar | Your Path to Spain Football Starts Here",
    description:
      "Discover how aspiring players can train in Spain, experience professional coaching, and explore real football career pathways.",
    url: "https://smotvisa.com/webinar",
    siteName: "SmotPro",
    images: ["/images/hero-travel-CJWf8Tv1.webp"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Live Webinar | Your Path to Spain Football Starts Here",
    description:
      "Discover how aspiring players can train in Spain, experience professional coaching, and explore real football career pathways.",
    images: ["/images/hero-travel-CJWf8Tv1.webp"],
  },
};

export default function WebinarPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Your Path to Spain Football - Free Live Webinar",
          description:
            "Discover how aspiring players can train in Spain, experience professional coaching, and explore real football career pathways.",
          startDate: "2026-03-07T11:00:00+05:30",
          eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          organizer: {
            "@type": "Organization",
            name: "SmotPro India Pvt. Ltd.",
            url: "https://smotvisa.com",
          },
          performer: {
            "@type": "Person",
            name: "Shaji Kandambeth",
            jobTitle: "CEO",
            worksFor: { "@type": "Organization", name: "SmotPro India Pvt. Ltd." },
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://smotvisa.com/" },
            { "@type": "ListItem", position: 2, name: "Webinar", item: "https://smotvisa.com/webinar" },
          ],
        }}
      />
      <WebinarClient />
    </main>
  );
}