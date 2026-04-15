import { visaData } from "@/data/visaData";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import VisaDetailClient from "@/components/visa/VisaDetailClient";
import type { Metadata } from "next";

export function generateStaticParams() {
    return [
        { slug: "us-visa-consultant" },
        { slug: "uk-visa-consultant" },
        { slug: "canada-visa-consultant" },
        { slug: "australia-visa-consultant" },
        { slug: "uae-visa-consultant" },
        { slug: "schengen-visa-consultant" },
    ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const id = slug.replace("-visa-consultant", "");
    const visa = (visaData as any)[id];

    if (!visa) {
        return {
            title: "Visa Information Not Found | SmotVisa",
            description: "Sorry, we couldn't find information for this destination."
        };
    }

    // Set specific metadata for US, UK, Canada, Australia, UAE, and Schengen
    let metaTitle = `${visa.name} Visa Services ${visa.flag || ""} | SmotVisa`;
    let metaDescription = visa.description;
    
    if (id === "us") {
        metaTitle = "Get your USA visa approval within days of applying. Our service ensures you get your visa on time through helping you in the application process and reliable support.";
        metaDescription = "Looking for a reliable US Visa Consultant? Get expert guidance for tourist, student, and work visas. Increase your chances of approval with professional visa assistance.";
    } else if (id === "uk") {
        metaTitle = "Best UK Visa Consultant for Fast & Successful Approval | SmotVisa";
        metaDescription = "Apply for a UK tourist or business visa with SmotVisa. We our UK visa consultant provide expert guidance, document verification, and end-to-end visa application support.";
    } else if (id === "canada") {
        metaTitle = "Best Canada Visa Consultant service in India | Smotvisa";
        metaDescription = "Apply for Canada Business, Tourist visa, visitor visa with the help of experienced Canada visa consultants. Get step-by-step support today.";
    } else if (id === "australia") {
        metaTitle = "Trusted Australian Visa Consultant for Business & Tourist Visas in India | SmotVisa";
        metaDescription = "Apply for Australia Tourist or Business Visa with SmotVisa. Get expert guidance, document verification, and end-to-end visa application support.";
    } else if (id === "uae") {
        metaTitle = "Best Dubai Visa Consultant | Expert Dubai Visa Agency | SmotVisa";
        metaDescription = "We are Professional Dubai visa consultant offering tourist and business visa services across India. Get yours quick visa approval and hassle-free travel to the UAE from Smotvisa.";
    } else if (id === "schengen") {
        metaTitle = "Best Schengen Visa Consultant in India | SmotVisa";
        metaDescription = "Looking for a reliable Schengen visa consultant in India? SmotVisa offers expert assistance for Schengen tourist and business visas with complete documentation support and smooth visa processing.";
    }

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: [
            `${visa.name} visa`,
            "visa services India",
            `${visa.name} visa requirements`,
            `${visa.name} visa processing`,
            "SmotVisa"
        ],

        alternates: {
            canonical: `https://smotvisa.com/visa/${slug}`,
        },

        robots: {
            index: true,
            follow: true,
        },

        authors: [{ name: "SmotVisa Team" }],
        publisher: "SmotVisa",

        openGraph: {
            title: metaTitle,
            description: metaDescription,
            url: `https://smotvisa.com/visa/${slug}`,
            siteName: "SmotVisa",
            images: [visa.image || "/images/visa-services-MHOtW-3U.jpg"],
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: metaTitle,
            description: metaDescription,
            images: [visa.image || "/images/visa-services-MHOtW-3U.jpg"],
        }
    };
}

export default async function VisaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const id = slug.replace("-visa-consultant", "");
    const visa = (visaData as any)[id];

    if (!visa) {
        return (
            <div className="py-20 text-center container mx-auto px-4">
                <h2 className="text-3xl font-display font-bold mb-4 text-foreground">Visa Information Not Found</h2>
                <p className="text-muted-foreground mb-8">Sorry, we couldn't find information for this destination.</p>
                <Link href="/" className="text-secondary font-semibold hover:underline">Return to Home</Link>
            </div>
        );
    }

    // Set specific H1 for US, UK, Canada, Australia, UAE, and Schengen
    let pageTitle = `${visa.name} Visa Services ${visa.flag || ""}`;
    
    if (id === "us") {
        pageTitle = "US Tourist & Business Visa Services";
    } else if (id === "uk") {
        pageTitle = "UK Tourist & Business Visa Services";
    } else if (id === "canada") {
        pageTitle = "Canada Tourist & Business Visa Services";
    } else if (id === "australia") {
        pageTitle = "Australia Tourist & Business Visa Services";
    } else if (id === "uae") {
        pageTitle = "UAE Tourist Visa Services";
    } else if (id === "schengen") {
        pageTitle = "Schengen Visa Services";
    }

    return (
        <main className="bg-background">
            <PageHeader
                title={pageTitle}
                description={visa.description}
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: visa.name }
                ]}
            />

            <VisaDetailClient visa={visa} id={id} />
        </main>
    );
}