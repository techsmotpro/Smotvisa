import PageHeader from "@/components/ui/PageHeader";
import ContactClient from "@/components/contact/ContactClient";
import { offices } from "@/data/officeData";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ branchId?: string[] }> }): Promise<Metadata> {
    const { branchId: branchIdArray } = await params;
    const branchId = branchIdArray ? branchIdArray[0] : undefined;

    if (branchId) {
        const office = offices.find(o => o.id === branchId);
        if (office) {
            return {
                title: `${office.name} Branch Contact | SMOT VISA`,
                description: `Get in touch with our ${office.name} branch. Expert visa and travel consultants ready to assist you.`,
                keywords: [
                    `${office.name} visa agents`,
                    `${office.name} travel agency`,
                    "SMOT VISA branch",
                    "contact SMOT VISA",
                    "visa consultants"
                ],
                alternates: {
                    canonical: `https://smotvisa.com/contact/${branchId}`,
                },
                robots: {
                    index: true,
                    follow: true,
                },
                authors: [{ name: "SMOT VISA Team" }],
                publisher: "SMOT VISA",
                openGraph: {
                    title: `${office.name} Branch Contact | SMOT VISA`,
                    description: `Get in touch with our ${office.name} branch. Expert visa and travel consultants ready to assist you.`,
                    url: `https://smotvisa.com/contact/${branchId}`,
                    siteName: "SMOT VISA",
                    images: ["/images/hero-travel-CJWf8Tv1.jpg"],
                    type: "website",
                },
                twitter: {
                    card: "summary_large_image",
                    title: `${office.name} Branch Contact | SMOT VISA`,
                    description: `Get in touch with our ${office.name} branch. Expert visa and travel consultants ready to assist you.`,
                    images: ["/images/hero-travel-CJWf8Tv1.jpg"],
                }
            };
        }
    }

    return {
        title: "Contact Our Experts | SMOT VISA",
        description: "Connect with India's leading visa and travel consultants. We provide personalized support for all your international journeys.",
        keywords: [
            "contact SMOT VISA",
            "visa consultants India",
            "travel agency contact",
            "SMOT VISA phone number",
            "visa assistance India"
        ],
        alternates: {
            canonical: "https://smotvisa.com/contact",
        },
        robots: {
            index: true,
            follow: true,
        },
        authors: [{ name: "SMOT VISA Team" }],
        publisher: "SMOT VISA",
        openGraph: {
            title: "Contact Our Experts | SMOT VISA",
            description: "Connect with India's leading visa and travel consultants. We provide personalized support for all your international journeys.",
            url: "https://smotvisa.com/contact",
            siteName: "SMOT VISA",
            images: ["/images/hero-travel-CJWf8Tv1.jpg"],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Contact Our Experts | SMOT VISA",
            description: "Connect with India's leading visa and travel consultants. We provide personalized support for all your international journeys.",
            images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        }
    };
}

export async function generateStaticParams() {
    return [
        { branchId: [] }, // Root /contact
        ...offices.map((office) => ({
            branchId: [office.id],
        })),
    ];
}

export default async function ContactPage({ params }: { params: Promise<{ branchId?: string[] }> }) {
    const { branchId: branchIdArray } = await params;
    const branchId = branchIdArray ? branchIdArray[0] : undefined;

    return (
        <main className="bg-background min-h-screen">
            <PageHeader
                title="Contact Our Experts"
                description="Connect with India's leading visa and travel consultants. We provide personalized support for all your international journeys."
                breadcrumbs={[{ label: "Contact Us" }]}
            />

            <ContactClient offices={offices} initialBranchId={branchId} />
        </main>
    );
}
