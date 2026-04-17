import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import JsonLd from "@/components/ui/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visa Agents in Ahmedabad | SmotVisa",
    description: "Expert visa consultants in Ahmedabad. Get professional visa assistance for all countries at SmotVisa Ahmedabad office.",
    keywords: [
        "visa agents in Ahmedabad",
        "visa consultants Ahmedabad",
        "Ahmedabad visa services",
        "SmotVisa Ahmedabad",
        "visa agents Gujarat"
    ],
    alternates: {
        canonical: "https://smotvisa.com/contact/ahmedabad/visa-agents-in-ahmedabad",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Visa Agents in Ahmedabad | SmotVisa",
        description: "Expert visa consultants in Ahmedabad. Get professional visa assistance for all countries at SmotVisa Ahmedabad office.",
        url: "https://smotvisa.com/contact/ahmedabad/visa-agents-in-ahmedabad",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Ahmedabad | SmotVisa",
        description: "Expert visa consultants in Ahmedabad. Get professional visa assistance for all countries at SmotVisa Ahmedabad office.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function AhmedabadPage() {
    const office = offices.find(o => o.id === "ahmedabad");
    
    if (!office) {
        return null;
    }

    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": `https://smotvisa.com/contact/ahmedabad/visa-agents-in-ahmedabad`,
                "name": "SmotVisa Ahmedabad",
                "description": office.description,
                "url": "https://smotvisa.com/contact/ahmedabad/visa-agents-in-ahmedabad",
                "telephone": office.phone[0],
                "email": office.email,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": office.address,
                    "addressLocality": "Ahmedabad",
                    "addressRegion": "Gujarat",
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
                    { "@type": "ListItem", "position": 3, "name": "Ahmedabad", "item": "https://smotvisa.com/contact/ahmedabad/visa-agents-in-ahmedabad" }
                ]
            }} />
            <OfficeDetailClient office={office} />
        </>
    );
}