import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visa Agents in Kandivali, Mumbai | SmotVisa",
    description: "Expert visa consultants in Kandivali, Mumbai. Get professional visa assistance for all countries at SmotVisa Kandivali office.",
    keywords: [
        "visa agents in Kandivali",
        "visa consultants Kandivali",
        "Kandivali visa services",
        "SmotVisa Kandivali",
        "visa agents Mumbai"
    ],
    alternates: {
        canonical: "https://smotvisa.com/contact/mumbai/visa-agents-in-kandivali",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Visa Agents in Kandivali, Mumbai | SmotVisa",
        description: "Expert visa consultants in Kandivali, Mumbai. Get professional visa assistance for all countries at SmotVisa Kandivali office.",
        url: "https://smotvisa.com/contact/mumbai/visa-agents-in-kandivali",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Kandivali, Mumbai | SmotVisa",
        description: "Expert visa consultants in Kandivali, Mumbai. Get professional visa assistance for all countries at SmotVisa Kandivali office.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function KandivaliMumbaiPage() {
    const office = offices.find(o => o.id === "kandivali-mumbai");
    
    if (!office) {
        return null;
    }

    return <OfficeDetailClient office={office} />;
}