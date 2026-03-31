import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visa Agents in Goregaon East, Mumbai | SmotVisa",
    description: "Expert visa consultants in Goregaon East, Mumbai. Get professional visa assistance for all countries at SmotVisa Goregaon East office.",
    keywords: [
        "visa agents in Goregaon East",
        "visa consultants Goregaon East",
        "Goregaon East visa services",
        "SmotVisa Goregaon East",
        "visa agents Mumbai"
    ],
    alternates: {
        canonical: "https://smotvisa.com/contact/mumbai/visa-agents-in-goregaon-east",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Visa Agents in Goregaon East, Mumbai | SmotVisa",
        description: "Expert visa consultants in Goregaon East, Mumbai. Get professional visa assistance for all countries at SmotVisa Goregaon East office.",
        url: "https://smotvisa.com/contact/mumbai/visa-agents-in-goregaon-east",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Goregaon East, Mumbai | SmotVisa",
        description: "Expert visa consultants in Goregaon East, Mumbai. Get professional visa assistance for all countries at SmotVisa Goregaon East office.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function GoregaonEastMumbaiPage() {
    const office = offices.find(o => o.id === "goregaon-east-mumbai");
    
    if (!office) {
        return null;
    }

    return <OfficeDetailClient office={office} />;
}