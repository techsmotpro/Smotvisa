import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visa Agents in CV Raman Nagar, Bangalore | SmotVisa",
    description: "Expert visa consultants in CV Raman Nagar, Bangalore. Get professional visa assistance for all countries at SmotVisa CV Raman Nagar office.",
    keywords: [
        "visa agents in CV Raman Nagar",
        "visa consultants CV Raman Nagar",
        "Bangalore visa services",
        "SmotVisa Bangalore",
        "visa agents Bangalore"
    ],
    alternates: {
        canonical: "https://smotvisa.com/contact/bangalore/visa-agents-in-cv-raman-nagar",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Visa Agents in CV Raman Nagar, Bangalore | SmotVisa",
        description: "Expert visa consultants in CV Raman Nagar, Bangalore. Get professional visa assistance for all countries at SmotVisa CV Raman Nagar office.",
        url: "https://smotvisa.com/contact/bangalore/visa-agents-in-cv-raman-nagar",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in CV Raman Nagar, Bangalore | SmotVisa",
        description: "Expert visa consultants in CV Raman Nagar, Bangalore. Get professional visa assistance for all countries at SmotVisa CV Raman Nagar office.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function CVRamanNagarBangalorePage() {
    const office = offices.find(o => o.id === "cv-raman-nagar-bangalore");
    
    if (!office) {
        return null;
    }

    return <OfficeDetailClient office={office} />;
}