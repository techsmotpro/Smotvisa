import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import JsonLd from "@/components/ui/JsonLd";
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

    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": `https://smotvisa.com/contact/pune/visa-agents-in-shivaji-nagar`,
                "name": "SmotVisa Shivaji Nagar",
                "description": office.description,
                "url": "https://smotvisa.com/contact/pune/visa-agents-in-shivaji-nagar",
                "telephone": office.phone[0],
                "email": office.email,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": office.address,
                    "addressLocality": "Pune",
                    "addressRegion": "Maharashtra",
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
                    { "@type": "ListItem", "position": 3, "name": "Pune", "item": "https://smotvisa.com/contact/pune/visa-agents-in-shivaji-nagar" }
                ]
            }} />
            <OfficeDetailClient office={office} />
        </>
    );
}