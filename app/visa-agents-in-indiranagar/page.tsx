import PageHeader from "@/components/ui/PageHeader";
import { Star, ArrowRight, Globe2, Route, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Agents in Indiranagar Bangalore | SmotVisa",
    description: "SmotVisa assists Indiranagar travellers with Schengen, UK, USA & Japan visas multi-entry planning, consulate selection & complete documentation. Free consultation.",
    keywords: [
        "visa agents in Indiranagar",
        "visa agents in Indiranagar Bangalore",
        "Indiranagar visa consultants",
        "multi entry visa Indiranagar",
        "Schengen visa Indiranagar",
        "business visa Indiranagar",
        "SmotVisa Indiranagar"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agents-in-indiranagar",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Visa Agents in Indiranagar Bangalore | SmotVisa",
        description: "Visa strategy for Indiranagar's frequent travellers: consulate selection, long-validity multi-entry planning and complete documentation for Schengen, UK, USA and Japan.",
        url: "https://smotvisa.com/visa-agents-in-indiranagar",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Indiranagar Bangalore | SmotVisa",
        description: "Visa strategy for Indiranagar's frequent travellers: consulate selection, multi-entry planning and complete documentation.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const destinations = [
    "Schengen Countries", "UK", "USA", "Canada", "Australia",
    "Japan", "Singapore", "UAE & Dubai", "Thailand", "Vietnam",
    "Malaysia", "Sri Lanka", "Turkey", "New Zealand"
];

export default function VisaServicesInIndiranagar() {
    const bangaloreOffice = offices.find(o => o.id === "cv-raman-nagar-bangalore");

    return (
        <main className="bg-background">
            {bangaloreOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agents-in-indiranagar",
                        "name": "SmotVisa Indiranagar",
                        "description": "SmotVisa provides tourist and business visa assistance for Indiranagar, Bangalore: consulate selection, long-validity multi-entry planning, documentation, appointment booking and file tracking.",
                        "url": "https://smotvisa.com/visa-agents-in-indiranagar",
                        "telephone": bangaloreOffice.phone[0],
                        "email": bangaloreOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": bangaloreOffice.address,
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Indiranagar, Bangalore" },
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
                        "serviceType": "Tourist and Business Visa Assistance",
                        "provider": { "@type": "LocalBusiness", "name": "SmotVisa", "@id": "https://smotvisa.com/visa-agents-in-indiranagar" },
                        "areaServed": { "@type": "Place", "name": "Indiranagar, Bangalore" },
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
                            { "@type": "ListItem", "position": 3, "name": "Indiranagar", "item": "https://smotvisa.com/visa-agents-in-indiranagar" }
                        ]
                    }} />
                </>
            )}

            <PageHeader
                title="Visa Agents in Indiranagar, Bangalore"
                description="Experienced travellers need more than form-filling: they need visa strategy."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "Indiranagar" }
                ]}
            />

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                        <Star className="h-4 w-4 text-secondary fill-secondary" />
                        <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Tourist &amp; Business Visas</span>
                    </div>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        Indiranagar&rsquo;s travellers are experienced, and experienced travellers need more than form-filling:
                        they need visa strategy. SmotVisa is a Bangalore visa consultancy for tourist and business visas, and
                        for frequent flyers we work at the level that actually matters: which consulate your Schengen file
                        should go through, how to build toward long-validity multi-entry visas, and how to keep every
                        application consistent with your travel history.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <Route className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground">Visa Strategy for Frequent Travellers</h2>
                        </div>

                        <div className="p-8 bg-card rounded-[2.5rem] border border-border shadow-card space-y-4">
                            <h3 className="text-xl font-display font-bold text-foreground">Where you apply matters</h3>
                            <p className="font-body text-muted-foreground leading-relaxed">
                                Schengen rules require you to apply through your main destination, and how you structure your
                                itinerary determines which consulate assesses your file, a legitimate planning decision most
                                travellers never consider. Operational details matter too: different Schengen countries use
                                different service providers in Bangalore, with slightly different document expectations, and we
                                know each one&rsquo;s preferences. Before we prepare anything, we look at your route, dates and
                                history and recommend the smartest compliant way to apply.
                            </p>
                        </div>

                        <div className="p-8 bg-card rounded-[2.5rem] border border-border shadow-card space-y-4">
                            <h3 className="text-xl font-display font-bold text-foreground">Your goal should be long-validity visas</h3>
                            <p className="font-body text-muted-foreground leading-relaxed">
                                If you travel abroad regularly, your goal should be long-validity visas: the UK issues visitor
                                visas of up to 2, 5 and 10 years; the US B1/B2 typically comes with ten-year validity;
                                Schengen&rsquo;s cascade system rewards clean, frequent travellers with progressively longer
                                multi-entry visas. We build your applications with that trajectory in mind, so each trip
                                strengthens the next application instead of starting from zero.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                Everything Handled, Door to Decision
                            </h2>
                        </div>
                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            A free consultation and honest assessment first. Then a personalised checklist, same-day document
                            review, verified forms, a cover letter written for your specific profile and itinerary, travel
                            insurance guidance that meets Schengen&rsquo;s &euro;30,000 requirement, appointment booking, and
                            tracking until your passport returns.
                        </p>
                        <div className="flex items-start gap-4 p-6 bg-card rounded-[2rem] border border-border">
                            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                                <Users className="h-6 w-6 text-secondary" />
                            </div>
                            <p className="text-sm font-body text-muted-foreground leading-relaxed">
                                Couples and families get coordinated applications prepared as one consistent set, with biometric
                                slots booked together.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-secondary rounded-[3rem] rotate-3 opacity-10" />
                        <div className="relative bg-card p-8 rounded-[3rem] border border-border shadow-elevated space-y-6">
                            <h3 className="text-2xl font-display font-bold text-foreground">
                                A free consultation and honest assessment first.
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
                            <h2 className="text-3xl font-display font-bold text-foreground">The Full Destination Map</h2>
                        </div>
                        <p className="font-body text-muted-foreground leading-relaxed">
                            For tourist and business purposes. Business travellers get complete documentation support:
                            invitation letters, company covering letters, financials and itineraries formatted to each
                            consulate&rsquo;s standard.
                        </p>
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
                    <h2 className="text-3xl font-display font-bold text-foreground">Useful Links Before You Apply</h2>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-3">
                        <p className="font-body text-muted-foreground">
                            Read our guides for{" "}
                            <Link href="/visa/schengen-visa-consultant" className="text-secondary font-bold hover:underline">Schengen</Link>,{" "}
                            <Link href="/visa/uk-visa-consultant" className="text-secondary font-bold hover:underline">UK</Link>{" "}and{" "}
                            <Link href="/visa/us-visa-consultant" className="text-secondary font-bold hover:underline">USA</Link>{" "}visas.
                        </p>
                    </div>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                        <h3 className="font-display font-bold text-foreground">We also serve nearby</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "Koramangala", href: "/visa-agents-in-koramangala" },
                                { label: "Marathahalli", href: "/visa-agents-in-marathahalli" }
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
                        Visa Agents in Indiranagar, Bangalore
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
