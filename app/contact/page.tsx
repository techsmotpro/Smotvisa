import PageHeader from "@/components/ui/PageHeader";
import dynamic from "next/dynamic";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import type { Metadata } from "next";

const ContactListClient = dynamic(() => import("@/components/contact/ContactFilterClient"));

export const metadata: Metadata = {
    title: "Contact Our Experts | SmotVisa",
    description: "Connect with India's leading visa and travel consultants. We provide personalized support for all your international journeys.",
    keywords: [
        "contact SmotVisa",
        "visa consultants India",
        "travel agency contact",
        "SmotVisa phone number",
        "visa assistance India"
    ],
    alternates: {
        canonical: "https://smotvisa.com/contact",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Contact SmotVisa | Visa Agents & Travel Consultants in India",
        description: "Connect with India's leading visa and travel consultants. We provide personalized support for all your international journeys.",
        url: "https://smotvisa.com/contact",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact SmotVisa | Visa Agents & Travel Consultants in India",
        description: "Connect with India's leading visa and travel consultants. We provide personalized support for all your international journeys.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smotvisa.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://smotvisa.com/contact" }
                ]
            }} />
            <PageHeader
                title="Contact Our Experts"
                description="Connect with India's leading visa and travel consultants. We provide personalized support for all your international journeys."
                breadcrumbs={[{ label: "Contact Us" }]}
            />

            <ContactListClient offices={offices} />
        </main>
    );
}