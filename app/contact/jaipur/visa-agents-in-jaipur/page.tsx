import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import JsonLd from "@/components/ui/JsonLd";
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

    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": `https://smotvisa.com/contact/jaipur/visa-agents-in-jaipur`,
                "name": "SmotVisa Jaipur",
                "description": office.description,
                "url": "https://smotvisa.com/contact/jaipur/visa-agents-in-jaipur",
                "telephone": office.phone[0],
                "email": office.email,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": office.address,
                    "addressLocality": "Jaipur",
                    "addressRegion": "Rajasthan",
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
                    { "@type": "ListItem", "position": 3, "name": "Jaipur", "item": "https://smotvisa.com/contact/jaipur/visa-agents-in-jaipur" }
                ]
            }} />
            <OfficeDetailClient office={office} />
        </>
    );
}