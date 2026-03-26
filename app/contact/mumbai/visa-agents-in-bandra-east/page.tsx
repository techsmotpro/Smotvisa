import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visa Agents in Bandra East, Mumbai | SmotVisa",
    description: "Expert visa consultants in Bandra East, Mumbai. Get professional visa assistance for all countries at SmotVisa Bandra East office.",
    keywords: [
        "visa agents in Bandra East",
        "visa consultants Bandra East",
        "Bandra East visa services",
        "SmotVisa Bandra East",
        "visa agents Mumbai"
    ],
    alternates: {
        canonical: "https://smotvisa.com/contact/mumbai/visa-agents-in-bandra-east",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Visa Agents in Bandra East, Mumbai | SmotVisa",
        description: "Expert visa consultants in Bandra East, Mumbai. Get professional visa assistance for all countries at SmotVisa Bandra East office.",
        url: "https://smotvisa.com/contact/mumbai/visa-agents-in-bandra-east",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Bandra East, Mumbai | SmotVisa",
        description: "Expert visa consultants in Bandra East, Mumbai. Get professional visa assistance for all countries at SmotVisa Bandra East office.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function BandraEastMumbaiPage() {
    const office = offices.find(o => o.id === "bandra-east-mumbai");
    
    if (!office) {
        return null;
    }

    return <OfficeDetailClient office={office} />;
}