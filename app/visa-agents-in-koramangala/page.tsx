import PageHeader from "@/components/ui/PageHeader";
import { Star, ArrowRight, Clock, Briefcase, Globe2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Agents in Koramangala Bangalore | SmotVisa",
    description: "SmotVisa prepares urgent business & tourist visa files for Koramangala USA, Schengen, UK, Singapore, Japan. Same-day review, honest timelines.",
    keywords: [
        "visa agents in Koramangala",
        "visa agents in Koramangala Bangalore",
        "Koramangala visa consultants",
        "urgent business visa Bangalore",
        "business visa Koramangala",
        "fast visa processing Koramangala",
        "SmotVisa Koramangala"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agents-in-koramangala",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Visa Agents in Koramangala Bangalore | SmotVisa",
        description: "Urgent business and tourist visa files prepared for Koramangala: USA, Schengen, UK, Singapore and Japan. Same-day review and honest timelines.",
        url: "https://smotvisa.com/visa-agents-in-koramangala",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Koramangala Bangalore | SmotVisa",
        description: "Urgent business and tourist visa files prepared for Koramangala. Same-day review, honest timelines.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const destinations = [
    "Schengen Countries", "UK", "USA", "Canada", "Australia",
    "Japan", "Singapore", "UAE & Dubai", "Thailand", "Vietnam",
    "Malaysia", "Sri Lanka", "Turkey", "New Zealand"
];

export default function VisaServicesInKoramangala() {
    const bangaloreOffice = offices.find(o => o.id === "cv-raman-nagar-bangalore");

    return (
        <main className="bg-background">
            {bangaloreOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agents-in-koramangala",
                        "name": "SmotVisa Koramangala",
                        "description": "SmotVisa provides urgent business and tourist visa assistance for Koramangala, Bangalore: same-day document review, appointment monitoring, cover letters and honest timelines.",
                        "url": "https://smotvisa.com/visa-agents-in-koramangala",
                        "telephone": bangaloreOffice.phone[0],
                        "email": bangaloreOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": bangaloreOffice.address,
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Koramangala, Bangalore" },
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
                        "@type": "Service",
                        "serviceType": "Business and Tourist Visa Assistance",
                        "provider": { "@type": "LocalBusiness", "name": "SmotVisa", "@id": "https://smotvisa.com/visa-agents-in-koramangala" },
                        "areaServed": { "@type": "Place", "name": "Koramangala, Bangalore" },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Visa Assistance Services",
                            "itemListElement": destinations.map(d => ({
                                "@type": "Offer",
                                "itemOffered": { "@type": "Service", "name": `${d} Visa Assistance` }
                            }))
                        }
                    }} />
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smotvisa.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Visa Agents in Bangalore", "item": "https://smotvisa.com/visa-agents-in-bangalore" },
                            { "@type": "ListItem", "position": 3, "name": "Koramangala", "item": "https://smotvisa.com/visa-agents-in-koramangala" }
                        ]
                    }} />
                </>
            )}

            <PageHeader
                title="Visa Agents in Koramangala, Bangalore"
                description="Our Koramangala practice is built around one discipline: realistic speed."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "Koramangala" }
                ]}
            />

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                        <Star className="h-4 w-4 text-secondary fill-secondary" />
                        <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Tourist &amp; Business Visas</span>
                    </div>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        Koramangala&rsquo;s visa needs usually arrive with a deadline attached a conference in five weeks, a
                        client meeting confirmed late, an event invitation that can&rsquo;t wait. SmotVisa is a Bangalore visa
                        consultancy for tourist and business visas, and our Koramangala practice is built around one
                        discipline: realistic speed. We tell you on day one whether your timeline is achievable, and if it is,
                        we make every day count.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <Clock className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                Urgent Business Visas, Managed Properly
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            Different destinations have different fast paths, and knowing them is the job. Dubai and most
                            Southeast Asian e-visas can be approved in days. Singapore business visas move quickly with
                            correct documentation. Schengen and UK timelines depend on appointment availability at the
                            Bangalore centres, which we monitor daily for cancellations and early slots. US business visa
                            interviews carry the longest waits, which is why we advise frequent US travellers to apply before
                            a specific trip exists, so the long-validity visa is already in the passport when the invitation
                            lands.
                        </p>

                        <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-[2rem] border border-border">
                            <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shrink-0">
                                <AlertCircle className="h-6 w-6 text-secondary" />
                            </div>
                            <p className="font-body text-muted-foreground leading-relaxed">
                                When a timeline genuinely can&rsquo;t work, we say so before taking your money, and we&rsquo;ll
                                map the fastest realistic alternative instead.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Briefcase className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                Business Files That Hold Up Under Scrutiny
                            </h2>
                        </div>
                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            A business visa file is a chain of documents that must agree with each other: the overseas
                            invitation letter, your company&rsquo;s covering letter, registration and GST records, financial
                            statements, and an itinerary matching the stated purpose. We draft and cross-check every link.
                        </p>
                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            For self-employed applicants and business owners, we structure company and income evidence the way
                            each consulate expects, the area where self-prepared files most often fall short. US B1 applicants
                            get dedicated interview preparation.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-secondary rounded-[3rem] rotate-3 opacity-10" />
                        <div className="relative bg-card p-8 rounded-[3rem] border border-border shadow-elevated space-y-6">
                            <h3 className="text-2xl font-display font-bold text-foreground">
                                We tell you on day one whether your timeline is achievable.
                            </h3>
                            <Link href="/contact" className="w-full">
                                <Button className="w-full bg-primary text-primary-foreground py-8 rounded-2xl font-display font-bold text-lg shadow-gold group">
                                    Contact Our Team <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-secondary/5 to-background border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <Globe2 className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                Tourist Visas with the Same Rigour
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            Europe trips with friends, family holidays, honeymoon itineraries: we coordinate group
                            applications so every file tells the same story, arrange Schengen-compliant travel insurance,
                            draft honest and specific cover letters, and book biometric slots together.
                        </p>

                        <h3 className="text-xl font-display font-bold text-foreground">Full destination coverage</h3>
                        <div className="flex flex-wrap gap-3">
                            {destinations.map((d, i) => (
                                <span key={i} className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-display font-bold text-foreground hover:border-secondary transition-colors">
                                    {d}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl font-display font-bold text-foreground">Explore More from SmotVisa</h2>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-3">
                        <p className="font-body text-muted-foreground">
                            Go deeper with{" "}
                            <Link href="/visa" className="text-secondary font-bold hover:underline">business visa assistance</Link>{" "}and our{" "}
                            <Link href="/visa/us-visa-consultant" className="text-secondary font-bold hover:underline">USA Visa</Link>{" "}guide, or check current{" "}
                            <Link href="/blog/country-wise-tourist-visa-fees-processing-time-comparison" className="text-secondary font-bold hover:underline">visa processing times</Link>.
                        </p>
                    </div>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                        <h3 className="font-display font-bold text-foreground">Also serving</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "HSR Layout", href: "/visa-agents-in-hsr-layout" },
                                { label: "Indiranagar", href: "/visa-agents-in-indiranagar" },
                                { label: "BTM Layout", href: "/visa-agents-in-btm-layout" }
                            ].map((n, i) => (
                                <Link key={i} href={n.href} className="px-5 py-2.5 bg-secondary/10 rounded-full text-sm font-display font-bold text-secondary hover:bg-secondary/20 transition-colors">
                                    {n.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                        Visa Agents in Koramangala, Bangalore
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-secondary text-secondary-foreground font-display font-bold text-lg rounded-2xl hover:translate-y-[-2px] transition-all shadow-gold group">
                            Contact Us <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/visa" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-transparent border-2 border-primary text-primary font-display font-bold text-lg rounded-2xl hover:bg-primary/5 transition-all">
                            Visa Services
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
