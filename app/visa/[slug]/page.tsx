import { visaData } from "@/data/visaData";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import VisaDetailClient from "@/components/visa/VisaDetailClient";
import type { Metadata } from "next";

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

    // Set specific metadata for US, UK, and Canada
    let metaTitle = `${visa.name} Visa Services ${visa.flag || ""} | SmotVisa`;
    let metaDescription = visa.description;
    
    if (id === "us") {
        metaTitle = "Apply Online Tourist and Business US Visa | SmotVisa";
        metaDescription = "Apply for a US tourist or business visa with expert consultants. Includes documentation & interview prep.";
    } else if (id === "uk") {
        metaTitle = "Apply UK Tourist & Business Visa | SmotVisa";
        metaDescription = "Expert UK visa consultants offering document verification and complete application support.";
    } else if (id === "canada") {
        metaTitle = "Apply Canada Tourist & Business Visa | SmotVisa";
        metaDescription = "Get Canada visitor visa assistance with documentation, biometrics, and expert guidance.";
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

    // Set specific H1 for US, UK, and Canada
    let pageTitle = `${visa.name} Visa Services ${visa.flag || ""}`;
    
    if (id === "us") {
        pageTitle = "US Tourist & Business Visa Services";
    } else if (id === "uk") {
        pageTitle = "UK Tourist & Business Visa Services";
    } else if (id === "canada") {
        pageTitle = "Canada Tourist & Business Visa Services";
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
