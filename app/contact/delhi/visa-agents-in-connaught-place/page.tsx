import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visa Agents in Connaught Place, Delhi | SmotVisa",
    description: "Expert visa consultants in Connaught Place, Delhi. Get professional visa assistance for all countries at SmotVisa Delhi office.",
    keywords: [
        "visa agents in Connaught Place",
        "visa consultants Connaught Place",
        "Delhi visa services",
        "SmotVisa Delhi",
        "visa agents Delhi"
    ],
    alternates: {
        canonical: "https://smotvisa.com/contact/delhi/visa-agents-in-connaught-place",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Visa Agents in Connaught Place, Delhi | SmotVisa",
        description: "Expert visa consultants in Connaught Place, Delhi. Get professional visa assistance for all countries at SmotVisa Delhi office.",
        url: "https://smotvisa.com/contact/delhi/visa-agents-in-connaught-place",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Connaught Place, Delhi | SmotVisa",
        description: "Expert visa consultants in Connaught Place, Delhi. Get professional visa assistance for all countries at SmotVisa Delhi office.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function DelhiPage() {
    const office = offices.find(o => o.id === "delhi");
    
    if (!office) {
        return null;
    }

    return <OfficeDetailClient office={office} />;
}