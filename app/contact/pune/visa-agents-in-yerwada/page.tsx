import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visa Agents in Yerwada, Pune | SmotVisa",
    description: "Expert visa consultants in Yerwada, Pune. Get professional visa assistance for all countries at SmotVisa Yerwada office.",
    keywords: [
        "visa agents in Yerwada",
        "visa consultants Yerwada",
        "Yerwada visa services",
        "SmotVisa Yerwada",
        "visa agents Pune"
    ],
    alternates: {
        canonical: "https://smotvisa.com/contact/pune/visa-agents-in-yerwada",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Visa Agents in Yerwada, Pune | SmotVisa",
        description: "Expert visa consultants in Yerwada, Pune. Get professional visa assistance for all countries at SmotVisa Yerwada office.",
        url: "https://smotvisa.com/contact/pune/visa-agents-in-yerwada",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Yerwada, Pune | SmotVisa",
        description: "Expert visa consultants in Yerwada, Pune. Get professional visa assistance for all countries at SmotVisa Yerwada office.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function YerwadaPunePage() {
    const office = offices.find(o => o.id === "yerwada-pune");
    
    if (!office) {
        return null;
    }

    return <OfficeDetailClient office={office} />;
}