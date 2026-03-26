import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visa Agents in Shivaji Nagar, Pune | SmotVisa",
    description: "Expert visa consultants in Shivaji Nagar, Pune. Get professional visa assistance for all countries at SmotVisa Shivaji Nagar office.",
    keywords: [
        "visa agents in Shivaji Nagar",
        "visa consultants Shivaji Nagar",
        "Shivaji Nagar visa services",
        "SmotVisa Shivaji Nagar",
        "visa agents Pune"
    ],
    alternates: {
        canonical: "https://smotvisa.com/contact/pune/visa-agents-in-shivaji-nagar",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Visa Agents in Shivaji Nagar, Pune | SmotVisa",
        description: "Expert visa consultants in Shivaji Nagar, Pune. Get professional visa assistance for all countries at SmotVisa Shivaji Nagar office.",
        url: "https://smotvisa.com/contact/pune/visa-agents-in-shivaji-nagar",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Shivaji Nagar, Pune | SmotVisa",
        description: "Expert visa consultants in Shivaji Nagar, Pune. Get professional visa assistance for all countries at SmotVisa Shivaji Nagar office.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function ShivajiNagarPunePage() {
    const office = offices.find(o => o.id === "shivaji-nagar-pune");
    
    if (!office) {
        return null;
    }

    return <OfficeDetailClient office={office} />;
}