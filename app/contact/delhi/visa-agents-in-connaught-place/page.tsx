import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import JsonLd from "@/components/ui/JsonLd";
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

    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": `https://smotvisa.com/contact/delhi/visa-agents-in-connaught-place`,
                "name": "SmotVisa Connaught Place",
                "description": office.description,
                "url": "https://smotvisa.com/contact/delhi/visa-agents-in-connaught-place",
                "telephone": office.phone[0],
                "email": office.email,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": office.address,
                    "addressLocality": "Delhi",
                    "addressRegion": "Delhi",
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
                    { "@type": "ListItem", "position": 3, "name": "Delhi", "item": "https://smotvisa.com/contact/delhi/visa-agents-in-connaught-place" }
                ]
            }} />
            <OfficeDetailClient office={office} />
        </>
    );
}