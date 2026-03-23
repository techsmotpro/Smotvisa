import PageHeader from "@/components/ui/PageHeader";
import VisaClient from "@/components/visa/VisaClient";

export const metadata = {
  title: "Global Visa Destinations | Visa Services for 50+ Countries",
  description: "Explore visa requirements and processing details for over 50+ countries worldwide. Your journey starts here.",

  keywords: [
    "visa services India",
    "global visa destinations",
    "visa requirements",
    "visa processing",
    "US visa",
    "UK visa",
    "Canada visa",
    "Australia visa",
    "Schengen visa",
    "SmotVisa"
  ],

  alternates: {
    canonical: "https://smotvisa.com/visa",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "SmotVisa Team" }],
  publisher: "SmotVisa",

  openGraph: {
    title: "Global Visa Destinations | Visa Services for 50+ Countries",
    description: "Explore visa requirements and processing details for over 50+ countries worldwide. Your journey starts here.",
    url: "https://smotvisa.com/visa",
    siteName: "SmotVisa",
    images: ["/images/visa-services-MHOtW-3U.jpg"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Global Visa Destinations | Visa Services for 50+ Countries",
    description: "Explore visa requirements and processing details for over 50+ countries worldwide. Your journey starts here.",
  }
};

const destinations = [
    {
        id: "uae",
        name: "United Arab Emirates",
        flag: "🇦🇪",
        image: "/images/dubai-DCaS6AeM.jpg",
        category: "Middle East",
        visaType: "Tourist / Business Visa",
        processing: "3-5 Days",
        price: "$89",
    },
    {
        id: "uk",
        name: "United Kingdom",
        flag: "🇬🇧",
        image: "/images/london-DVffmt_1.jpg",
        category: "Europe",
        visaType: "Standard Visitor Visa",
        processing: "15-20 Days",
        price: "$199",
    },
    {
        id: "us",
        name: "United States",
        flag: "🇺🇸",
        image: "/images/us-DVU4VGkG.webp",
        category: "America",
        visaType: "B1/B2 Visitor Visa",
        processing: "Appointment Based",
        price: "$249",
    },
    {
        id: "schengen",
        name: "Schengen (Europe)",
        flag: "🇪🇺",
        image: "/images/visa-services-MHOtW-3U.jpg",
        category: "Europe",
        visaType: "Schengen Visa",
        processing: "10-15 Days",
        price: "$179",
    },
];

const moreCountries = [
    { id: "canada", name: "Canada", flag: "🇨🇦", category: "America" },
    { id: "australia", name: "Australia", flag: "🇦🇺", category: "Oceania" },
    { id: "kuwait", name: "Kuwait", flag: "🇰🇼", category: "Middle East" },
    { id: "saudi", name: "Saudi Arabia", flag: "🇸🇦", category: "Middle East" },
    { id: "malaysia", name: "Malaysia", flag: "🇲🇾", category: "Asia" },
    { id: "singapore", name: "Singapore", flag: "🇸🇬", category: "Asia" },
    { id: "thailand", name: "Thailand", flag: "🇹🇭", category: "Asia" },
    { id: "turkey", name: "Turkey", flag: "🇹🇷", category: "Europe/Asia" },
    { id: "japan", name: "Japan", flag: "🇯🇵", category: "Asia" },
    { id: "france", name: "France", flag: "🇫🇷", category: "Europe" },
    { id: "germany", name: "Germany", flag: "🇩🇪", category: "Europe" },
    { id: "italy", name: "Italy", flag: "🇮🇹", category: "Europe" },
];

export default function DestinationsPage() {
    return (
        <main className="bg-background min-h-screen">
            <PageHeader
                title="Global Visa Destinations"
                description="Explore visa requirements and processing details for over 50+ countries worldwide. Your journey starts here."
                breadcrumbs={[{ label: "Visa Services" }]}
            />

            <VisaClient destinations={destinations} moreCountries={moreCountries} />
        </main>
    );
}
