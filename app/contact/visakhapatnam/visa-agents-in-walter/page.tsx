import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visa Agents in Walter, Visakhapatnam | SmotVisa",
    description: "Expert visa consultants in Walter, Visakhapatnam. Get professional visa assistance for all countries at SmotVisa Visakhapatnam office.",
    keywords: [
        "visa agents in Walter",
        "visa consultants Walter",
        "Visakhapatnam visa services",
        "SmotVisa Visakhapatnam",
        "visa agents Visakhapatnam"
    ],
    alternates: {
        canonical: "https://smotvisa.com/contact/visakhapatnam/visa-agents-in-walter",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Visa Agents in Walter, Visakhapatnam | SmotVisa",
        description: "Expert visa consultants in Walter, Visakhapatnam. Get professional visa assistance for all countries at SmotVisa Visakhapatnam office.",
        url: "https://smotvisa.com/contact/visakhapatnam/visa-agents-in-walter",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Walter, Visakhapatnam | SmotVisa",
        description: "Expert visa consultants in Walter, Visakhapatnam. Get professional visa assistance for all countries at SmotVisa Visakhapatnam office.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function VisakhapatnamPage() {
    const office = offices.find(o => o.id === "walter-visakhapatnam");
    
    if (!office) {
        return null;
    }

    return <OfficeDetailClient office={office} />;
}