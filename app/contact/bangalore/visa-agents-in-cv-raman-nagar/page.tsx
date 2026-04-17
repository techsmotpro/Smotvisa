import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import JsonLd from "@/components/ui/JsonLd";
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

    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": `https://smotvisa.com/contact/bangalore/visa-agents-in-cv-raman-nagar`,
                "name": "SmotVisa CV Raman Nagar",
                "description": office.description,
                "url": "https://smotvisa.com/contact/bangalore/visa-agents-in-cv-raman-nagar",
                "telephone": office.phone[0],
                "email": office.email,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": office.address,
                    "addressLocality": "Bangalore",
                    "addressRegion": "Karnataka",
                    "addressCountry": "IN"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                },
                "sameAs": [
                    "https://www.facebook.com/smotvisa",
                    "https://www.instagram.com/smotvisa",
                    "https://www.linkedin.com/company/smotvisa"
                ]
            }} />
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smotvisa.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://smotvisa.com/contact" },
                    { "@type": "ListItem", "position": 3, "name": "Bangalore", "item": "https://smotvisa.com/contact/bangalore/visa-agents-in-cv-raman-nagar" }
                ]
            }} />
            <OfficeDetailClient office={office} />
        </>
    );
}