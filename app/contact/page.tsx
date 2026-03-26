import PageHeader from "@/components/ui/PageHeader";
import ContactListClient from "@/components/contact/ContactListClient";
import { offices } from "@/data/officeData";
import type { Metadata } from "next";

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
        title: "Contact Our Experts | SmotVisa",
        description: "Connect with India's leading visa and travel consultants. We provide personalized support for all your international journeys.",
        url: "https://smotvisa.com/contact",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Our Experts | SmotVisa",
        description: "Connect with India's leading visa and travel consultants. We provide personalized support for all your international journeys.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen">
            <PageHeader
                title="Contact Our Experts"
                description="Connect with India's leading visa and travel consultants. We provide personalized support for all your international journeys."
                breadcrumbs={[{ label: "Contact Us" }]}
            />

            <ContactListClient offices={offices} />
        </main>
    );
}