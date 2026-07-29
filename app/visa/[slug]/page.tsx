import { visaData } from "@/data/visaData";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import VisaDetailClient from "@/components/visa/VisaDetailClient";
import VisaSidebarForm from "@/components/visa/VisaSidebarForm";
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
        metaTitle = "Tourist & Business US Visa Consultant in India | SmotVisa";
        metaDescription = "Apply for a US B1/B2 Tourist and Business visa with confidence. SmotVisa helps travellers with DS-160, interview prep & documentation. 99% success rate.";
    } else if (id === "uk") {
        metaTitle = "Expert UK Visit Visa Consultant in India | SmotVisa";
        metaDescription = "Apply for a UK Standard Visitor visa with confidence. SmotVisa helps Indian travellers with online application, financial documentation, VFS appointment & more. 99% success rate.";
    } else if (id === "canada") {
        metaTitle = "Best Canada Tourist Visa in India | SmotVisa";
        metaDescription = "Looking for a Canada visitor visa consultant in India? SmotVisa prepares your TRV application end to end — documents, purpose-of-travel letter, biometrics & more.";
    } else if (id === "australia") {
        metaTitle = "Tourist Australia Visa Assistance in India | SmotVisa";
        metaDescription = "Looking for Australia tourist visa for Indians? SmotVisa handles your Subclass 600 application end to end — ImmiAccount, documents, financial file & more.";
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
            ? ["US B1/B2 visa consultant in India", "US tourist visa India", "US business visa India", "DS-160 form assistance", "US visa interview preparation", "B1 B2 visa India", "SmotVisa"]
            : id === "uk"
            ? ["UK visit visa consultant in India", "UK visa consultant India", "UK Standard Visitor visa", "UK tourist visa India", "UK business visa India", "VFS appointment UK", "SmotVisa"]
            : id === "canada"
            ? ["Canada visitor visa consultant in India", "best Canada tourist visa in India", "Canada TRV application", "Canada visitor visa India", "Canada biometrics VFS", "IRCC visa India", "SmotVisa"]
            : id === "australia"
            ? ["Australia tourist visa for Indians", "tourist Australia visa assistance in India", "Subclass 600 visa India", "Australia visitor visa India", "ImmiAccount application India", "SmotVisa"]
            : id === "uae"
            ? ["Dubai visa consultant India", "UAE tourist visa for Indians", "Dubai tourist visa India", "Dubai business visa", "UAE visa assistance India", "SmotVisa"]
            : id === "schengen"
            ? ["Schengen visa consultant India", "Schengen tourist visa India", "Schengen visa assistance", "Europe visa consultant India", "Schengen visa documentation", "SmotVisa"]
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
            images: [
                id === "us" ? "/images/us-golden-gate.webp" :
                id === "uk" ? "/images/uk-phone-box-bigben.webp" :
                id === "australia" ? "/images/australia-tour.webp" :
                id === "uae" ? "/images/dubai-DCaS6AeM.webp" :
                id === "schengen" ? "/images/europe-tour.webp" :
                "/images/visa-services-MHOtW-3U.webp"
            ],
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: metaTitle,
            description: metaDescription,
            images: [
                id === "us" ? "/images/us-golden-gate.webp" :
                id === "uk" ? "/images/uk-phone-box-bigben.webp" :
                id === "australia" ? "/images/australia-tour.webp" :
                id === "uae" ? "/images/dubai-DCaS6AeM.webp" :
                id === "schengen" ? "/images/europe-tour.webp" :
                "/images/visa-services-MHOtW-3U.webp"
            ],
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
        pageTitle = "Expert UK Visit Visa Consultant in India";
    } else if (id === "canada") {
        pageTitle = "Best Canada Visa Consultant in India";
    } else if (id === "australia") {
        pageTitle = "Best Australia Visa Consultant in India";
    } else if (id === "uae") {
        pageTitle = "Trusted UAE (Dubai) Visa Consultant in India";
    } else if (id === "schengen") {
        pageTitle = "Expert Schengen Visa Consultant in India";
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
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: visa.name }
                ]}
                description={
                    id === "us" ? "At SmotVisa, every US application is different — whether you are attending a business meeting or conference, or finally taking that long-planned holiday, the US B1/B2 visa is your gateway. SmotVisa is here to assist from US visa documentation to plan your entire journey." :
                    id === "uk" ? "The UK is one of the first popular destinations for Indian travellers for a good long time. At SmotVisa, we as UK Visa Consultants in India take the guesswork out of it. We help you choose the right validity, complete the online form correctly, build a clean financial and supporting-document file, and book your VFS appointment — everything under one roof." :
                    id === "canada" ? "Canada is a dream destination for Indian travellers, whether it's the Rockies, Niagara, a family reunion or a business conference. The visitor visa, officially the Temporary Resident Visa (TRV), SmotVisa prepares your TRV application end to end. We help you complete the online form, build a convincing purpose-of-travel and financial file, and navigate the biometrics." :
                    id === "australia" ? "SmotVisa handles the details so you don't have to. We confirm the right stream, complete your ImmiAccount application accurately, and build a clean document file — all as a genuine short-term visitor for Australia visa." :
                    id === "uae" ? "Dubai and the wider UAE are among the most popular destinations especially for Indian travellers for shopping, family holidays, world-class attractions and fast-growing business links. The best part is how quick the visa process is. With minimal documents and processing often in just a few working days, a UAE tourist or business visit visa is one of the smoothest applications we handle." :
                    id === "schengen" ? "Why SmotVisa shines is because we consult the correct way to get a Schengen visa based on your eligibility, itinerary, arrange the required €30,000 travel insurance, build a clean document and finance file, and book your VFS or BLS appointment." :
                    undefined
                }
                bgImage={
                    id === "us" ? "/images/us-golden-gate.webp" :
                    id === "uk" ? "/images/uk-tour.webp" :
                    id === "canada" ? "/images/canada-hero.webp" :
                    id === "australia" ? "/images/australia-sydney-hero.webp" :
                    id === "uae" ? "/images/dubai-DCaS6AeM.webp" :
                    id === "schengen" ? "/images/europe-tour.webp" :
                    undefined
                }
            />

            <div className="bg-muted/20">
                <div className="container mx-auto px-4 max-w-7xl py-10">
                    <div className={`grid gap-8 items-start ${id === "uk" ? "lg:grid-cols-[340px_1fr]" : "lg:grid-cols-[1fr_340px]"}`}>
                        {/* Sticky sidebar */}
                        <div className={`lg:sticky lg:top-24 space-y-5 ${id === "uk" ? "order-1" : "order-1 lg:order-2"}`}>
                            <div className="rounded-2xl overflow-hidden shadow-sm border border-border">
                                <img
                                    src={
                                        id === "us" ? "/images/us-statue-of-liberty.webp" :
                                        id === "uk" ? "/images/uk-phone-box-bigben.webp" :
                                        id === "australia" ? "/images/australia-bridge-night.webp" :
                                        id === "uae" ? "/images/dubai-marina.webp" :
                                        id === "schengen" ? "/images/europe-amsterdam.webp" :
                                        "/images/visa-services-MHOtW-3U.webp"
                                    }
                                    alt={
                                        id === "us" ? "Statue of Liberty, New York — US Visa" :
                                        id === "uk" ? "Red phone box with Big Ben, London — UK Visa" :
                                        id === "australia" ? "Sydney Harbour Bridge at night — Australia Visa" :
                                        id === "uae" ? "Dubai Marina waterfront skyline — UAE Visa" :
                                        id === "schengen" ? "Amsterdam canal, Netherlands — Schengen Visa" :
                                        `${visa.name} visa`
                                    }
                                    width={400}
                                    height={420}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-[420px] object-cover"
                                />
                            </div>
                            <VisaSidebarForm visaName={visa.name} />
                            {id === "schengen" && (
                                <div className="rounded-2xl overflow-hidden shadow-sm border border-border">
                                    <img
                                        src="/images/europe-eiffel.webp"
                                        alt="Eiffel Tower, Paris, France — Schengen Visa"
                                        width={400}
                                        height={500}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-auto"
                                    />
                                </div>
                            )}
                            {id === "uae" && (
                                <div className="rounded-2xl overflow-hidden shadow-sm border border-border">
                                    <img
                                        src="/images/dubai-burj-al-arab.webp"
                                        alt="Burj Al Arab hotel at sunset, Dubai — UAE Visa"
                                        width={400}
                                        height={500}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-auto"
                                    />
                                </div>
                            )}
                            {id === "australia" && (
                                <div className="rounded-2xl overflow-hidden shadow-sm border border-border">
                                    <img
                                        src="/images/australia-twelve-apostles.webp"
                                        alt="Twelve Apostles, Great Ocean Road, Victoria — Australia Visa"
                                        width={400}
                                        height={500}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-auto"
                                    />
                                </div>
                            )}
                            {id === "canada" && (
                                <div className="rounded-2xl overflow-hidden shadow-sm border border-border">
                                    <img
                                        src="/images/canada-cn-tower.webp"
                                        alt="CN Tower, Toronto, Canada — Canada Visa"
                                        width={400}
                                        height={520}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-auto"
                                    />
                                </div>
                            )}
                            {id === "us" && (
                                <div className="rounded-2xl overflow-hidden shadow-sm border border-border">
                                    <img
                                        src="/images/us-flight.webp"
                                        alt="Airplane flying over New York City — US Visa"
                                        width={400}
                                        height={208}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-52 object-cover"
                                    />
                                </div>
                            )}
                            {id === "uk" && (
                                <>
                                    <div className="rounded-2xl overflow-hidden shadow-sm border border-border">
                                        <img
                                            src="/images/uk-london-eye.webp"
                                            alt="London Eye, London — UK Visa"
                                            width={400}
                                            height={208}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                        {/* Main content */}
                        <div className={`bg-white rounded-2xl border border-border/40 overflow-hidden ${id === "uk" ? "order-2" : "order-2 lg:order-1"}`}>
                            <VisaDetailClient visa={visa} id={id} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}