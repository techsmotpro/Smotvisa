import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import JsonLd from "@/components/ui/JsonLd";
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

    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": `https://smotvisa.com/contact/visakhapatnam/visa-agents-in-walter`,
                "name": "SmotVisa Walter, Visakhapatnam",
                "description": office.description,
                "url": "https://smotvisa.com/contact/visakhapatnam/visa-agents-in-walter",
                "telephone": office.phone[0],
                "email": office.email,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": office.address,
                    "addressLocality": "Visakhapatnam",
                    "addressRegion": "Andhra Pradesh",
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
                    { "@type": "ListItem", "position": 3, "name": "Visakhapatnam", "item": "https://smotvisa.com/contact/visakhapatnam/visa-agents-in-walter" }
                ]
            }} />
            <OfficeDetailClient office={office} />
        </>
    );
}