import { offices } from "@/data/officeData";
import { notFound } from "next/navigation";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ officeId: string }> }): Promise<Metadata> {
    const { officeId } = await params;
    const office = offices.find((o) => o.id === officeId);

    if (!office) {
        return {
            title: "Office Not Found | SmotVisa",
            description: "Sorry, we couldn't find the requested office information."
        };
    }

    return {
        title: `${office.name} Branch | SmotVisa`,
        description: `Visit our ${office.name} branch for expert visa and travel assistance. We provide personalized support for all your international journeys.`,
        keywords: [
            `${office.name} visa agents`,
            `${office.name} travel agency`,
            `${office.name} branch`,
            "SmotVisa offices",
            "visa consultants"
        ],

        alternates: {
            canonical: `https://smotvisa.com/offices/${officeId}`,
        },

        robots: {
            index: true,
            follow: true,
        },

        authors: [{ name: "SmotVisa Team" }],
        publisher: "SmotVisa",

        openGraph: {
            title: `${office.name} Branch | SmotVisa`,
            description: `Visit our ${office.name} branch for expert visa and travel assistance. We provide personalized support for all your international journeys.`,
            url: `https://smotvisa.com/offices/${officeId}`,
            siteName: "SmotVisa",
            images: ["/images/hero-travel-CJWf8Tv1.jpg"],
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: `${office.name} Branch | SmotVisa`,
            description: `Visit our ${office.name} branch for expert visa and travel assistance. We provide personalized support for all your international journeys.`,
            images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        }
    };
}

export async function generateStaticParams() {
    return offices.map((office) => ({
        officeId: office.id,
    }));
}

export default async function OfficeDetailPage({ params }: { params: Promise<{ officeId: string }> }) {
    const { officeId } = await params;
    const office = offices.find((o) => o.id === officeId);

    if (!office) {
        return notFound();
    }

    return <OfficeDetailClient office={office} />;
}
