import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visa Agents in Jaipur | SmotVisa",
    description: "Expert visa consultants in Jaipur. Get professional visa assistance for all countries at SmotVisa Jaipur office.",
    keywords: [
        "visa agents in Jaipur",
        "visa consultants Jaipur",
        "Jaipur visa services",
        "SmotVisa Jaipur",
        "visa agents Rajasthan"
    ],
    alternates: {
        canonical: "https://smotvisa.com/contact/jaipur/visa-agents-in-jaipur",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Visa Agents in Jaipur | SmotVisa",
        description: "Expert visa consultants in Jaipur. Get professional visa assistance for all countries at SmotVisa Jaipur office.",
        url: "https://smotvisa.com/contact/jaipur/visa-agents-in-jaipur",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Jaipur | SmotVisa",
        description: "Expert visa consultants in Jaipur. Get professional visa assistance for all countries at SmotVisa Jaipur office.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function JaipurPage() {
    const office = offices.find(o => o.id === "jaipur");
    
    if (!office) {
        return null;
    }

    return <OfficeDetailClient office={office} />;
}