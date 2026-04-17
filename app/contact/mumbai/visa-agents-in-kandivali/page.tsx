import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import JsonLd from "@/components/ui/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visa Agents in Kandivali, Mumbai | SmotVisa",
    description: "Expert visa consultants in Kandivali, Mumbai. Get professional visa assistance for all countries at SmotVisa Kandivali office.",
    keywords: [
        "visa agents in Kandivali",
        "visa consultants Kandivali",
        "Kandivali visa services",
        "SmotVisa Kandivali",
        "visa agents Mumbai"
    ],
    alternates: {
        canonical: "https://smotvisa.com/contact/mumbai/visa-agents-in-kandivali",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Visa Agents in Kandivali, Mumbai | SmotVisa",
        description: "Expert visa consultants in Kandivali, Mumbai. Get professional visa assistance for all countries at SmotVisa Kandivali office.",
        url: "https://smotvisa.com/contact/mumbai/visa-agents-in-kandivali",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Kandivali, Mumbai | SmotVisa",
        description: "Expert visa consultants in Kandivali, Mumbai. Get professional visa assistance for all countries at SmotVisa Kandivali office.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function KandivaliMumbaiPage() {
    const office = offices.find(o => o.id === "kandivali-mumbai");
    
    if (!office) {
        return null;
    }

    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": `https://smotvisa.com/contact/mumbai/visa-agents-in-kandivali`,
                "name": "SmotVisa Kandivali",
                "description": office.description,
                "url": "https://smotvisa.com/contact/mumbai/visa-agents-in-kandivali",
                "telephone": office.phone[0],
                "email": office.email,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": office.address,
                    "addressLocality": "Mumbai",
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
                    { "@type": "ListItem", "position": 3, "name": "Kandivali, Mumbai", "item": "https://smotvisa.com/contact/mumbai/visa-agents-in-kandivali" }
                ]
            }} />
            <OfficeDetailClient office={office} />
        </>
    );
}