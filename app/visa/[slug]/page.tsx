import { visaData } from "@/data/visaData";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import VisaDetailClient from "@/components/visa/VisaDetailClient";
import JsonLd from "@/components/ui/JsonLd";
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
        metaTitle = "Trusted US Visa Consultant for India | SmotVisa";
        metaDescription = "Apply for a US B1/B2 Tourist and Business visa with confidence. SmotVisa helps travellers with DS-160, interview prep & documentation. 99% success rate.";
    } else if (id === "uk") {
        metaTitle = "Expert UK Visa Visit Visa Consultant in India | SmotVisa";
        metaDescription = "Get expert help with your UK Standard Visitor visa for tourism or business. Online application, document checks & financial support from SmotVisa.";
    } else if (id === "canada") {
        metaTitle = "Canada Tourist Visa Consultant in India | SmotVisa";
        metaDescription = "Apply Canada tourist visa in India. Get expert assistance for Canada visitor visa, documentation, biometrics & fast processing. Trusted guidance by SmotVisa.";
    } else if (id === "australia") {
        metaTitle = "Trusted Australian Visa Consultant for Business & Tourist Visas in India | SmotVisa";
        metaDescription = "Apply for Australia Tourist or Business Visa with SmotVisa. Get expert guidance, document verification, and end-to-end visa application support.";
    } else if (id === "uae") {
        metaTitle = "Best Dubai Visa Consultant | Expert Dubai Visa Agency | SmotVisa";
        metaDescription = "We are Professional Dubai visa consultant offering tourist and business visa services across India. Get quick visa approval and hassle-free travel to the UAE from SmotVisa.";
    } else if (id === "schengen") {
        metaTitle = "Best Schengen Visa Consultant in India | SmotVisa";
        metaDescription = "Looking for a reliable Schengen visa consultant in India? SmotVisa offers expert assistance for Schengen tourist and business visas with complete documentation support and smooth visa processing.";
    }

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: id === "us"
            ? ["US visa consultant in India", "US B1/B2 visa consultant in India", "US tourist visa India", "US business visa India", "DS-160 form assistance", "US visa interview preparation", "B1 B2 visa India", "SmotVisa"]
            : id === "uk"
            ? ["UK visa consultant in India", "UK Standard Visitor visa", "UK tourist visa India", "UK business visa India", "VFS appointment UK", "SmotVisa"]
            : id === "canada"
            ? ["Canada tourist visa consultant in India", "Canada visitor visa India", "Canada TRV application", "Canada biometrics VFS", "IRCC visa India", "SmotVisa"]
            : [`${visa.name} visa`, `${visa.name} visa consultant`, `${visa.name} visa services`, "SmotVisa", "visa consultant India"],
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
            images: [visa.image || "/images/visa-services-MHOtW-3U.webp"],
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: metaTitle,
            description: metaDescription,
            images: [visa.image || "/images/visa-services-MHOtW-3U.webp"],
        }
    };
}

export default async function VisaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const id = slug.replace("-visa-consultant", "");
    const visa = (visaData as any)[id];

    if (!visa) {
        return (
            <div className="py-12 text-center container mx-auto px-4">
                <h2 className="text-3xl font-display font-bold mb-4 text-foreground">Visa Information Not Found</h2>
                <p className="text-muted-foreground mb-8">Sorry, we couldn't find information for this destination.</p>
                <Link href="/" className="text-secondary font-semibold hover:underline">Return to Home</Link>
            </div>
        );
    }

    // Set specific H1 for US, UK, Canada, Australia, UAE, and Schengen
    let pageTitle = `${visa.name} Visa Services ${visa.flag || ""}`;
    
    if (id === "us") {
        pageTitle = "Trusted US Visa Consultant for India";
    } else if (id === "uk") {
        pageTitle = "Expert UK Visa Visit Visa Consultant in India";
    } else if (id === "canada") {
        pageTitle = "Canada Tourist Visa in India";
    } else if (id === "australia") {
        pageTitle = "Australia Tourist & Business Visa Services";
    } else if (id === "uae") {
        pageTitle = "UAE Tourist Visa Services";
    } else if (id === "schengen") {
        pageTitle = "Schengen Visa Services";
    }

    return (
        <main className="bg-background">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smotvisa.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Visa Services", "item": "https://smotvisa.com/visa" },
                    { "@type": "ListItem", "position": 3, "name": visa.name, "item": `https://smotvisa.com/visa/${slug}` }
                ]
            }} />
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Service",
                "name": `${visa.name} Visa Services`,
                "description": visa.description,
                "provider": {
                    "@type": "Organization",
                    "name": "SmotVisa",
                    "url": "https://smotvisa.com"
                },
                "areaServed": "India",
                "serviceType": "Visa Consulting"
            }} />
            {visa.faqs && visa.faqs.length > 0 && (
                <JsonLd data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": visa.faqs.map((faq: { question: string; answer: string }) => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                }} />
            )}
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