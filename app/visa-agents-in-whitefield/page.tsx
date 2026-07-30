import PageHeader from "@/components/ui/PageHeader";
import { Star, ArrowRight, Briefcase, Users, Globe2, UsersRound } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Agents in Whitefield Bangalore | SmotVisa",
    description: "SmotVisa manages complete visa files for Whitefield business travel for professionals, family holiday visas for Schengen, USA, UK, Japan & more..",
    keywords: [
        "visa agents in Whitefield",
        "visa agents in Whitefield Bangalore",
        "Whitefield visa consultants",
        "business visa Whitefield",
        "family visa assistance Bangalore",
        "corporate travel visa Whitefield",
        "SmotVisa Whitefield"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agents-in-whitefield",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Visa Agents in Whitefield Bangalore | SmotVisa",
        description: "Complete visa files for Whitefield: business travel for professionals and family holiday visas for Schengen, USA, UK, Japan and more.",
        url: "https://smotvisa.com/visa-agents-in-whitefield",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Whitefield Bangalore | SmotVisa",
        description: "Complete visa files for Whitefield: business travel and family holiday visas, managed remotely.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const destinations = [
    "Schengen Countries", "UK", "USA", "Canada", "Australia",
    "Japan", "Singapore", "UAE & Dubai"
];

const eVisaDestinations = ["Thailand", "Vietnam", "Malaysia", "Sri Lanka", "Turkey"];

export default function VisaServicesInWhitefield() {
    const bangaloreOffice = offices.find(o => o.id === "cv-raman-nagar-bangalore");

    return (
        <main className="bg-background">
            {bangaloreOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agents-in-whitefield",
                        "name": "SmotVisa Whitefield",
                        "description": "SmotVisa provides complete tourist and business visa assistance for Whitefield, Bangalore: corporate travel files, coordinated family applications, appointment booking and tracking until decision.",
                        "url": "https://smotvisa.com/visa-agents-in-whitefield",
                        "telephone": bangaloreOffice.phone[0],
                        "email": bangaloreOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": bangaloreOffice.address,
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Whitefield, Bangalore" },
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
                        "serviceType": "Business and Family Visa Assistance",
                        "provider": { "@type": "LocalBusiness", "name": "SmotVisa", "@id": "https://smotvisa.com/visa-agents-in-whitefield" },
                        "areaServed": { "@type": "Place", "name": "Whitefield, Bangalore" },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Visa Assistance Services",
                            "itemListElement": [...destinations, ...eVisaDestinations].map(d => ({
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
                            { "@type": "ListItem", "position": 3, "name": "Whitefield", "item": "https://smotvisa.com/visa-agents-in-whitefield" }
                        ]
                    }} />
                </>
            )}

            <PageHeader
                title="Visa Agents in Whitefield, Bangalore"
                description="From single urgent business files to six-member family applications, all managed remotely with one organised point of contact."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "Whitefield" }
                ]}
            />

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                        <Star className="h-4 w-4 text-secondary fill-secondary" />
                        <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Tourist &amp; Business Visas</span>
                    </div>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        Whitefield travels in two modes: professionals flying out for business, and families flying out
                        together for holidays. SmotVisa serves both with equal depth. We&rsquo;re a Bangalore visa consultancy
                        providing complete tourist and business visa assistance, from single urgent business files to
                        six-member family applications, all managed remotely with one organised point of contact.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <Briefcase className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                Corporate Travel, Handled Properly
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            A business visa file must prove three things cleanly: who is inviting you, who is sending you, and
                            why you&rsquo;ll return. We prepare all three layers, overseas invitation letters, employer
                            covering letters, financial documents and meeting itineraries, formatted to the specific
                            consulate&rsquo;s requirements, whether the destination is the US, a Schengen country, the UK,
                            Japan or Singapore. US B1 applicants get structured interview preparation as standard.
                        </p>

                        <div className="flex items-start gap-4 p-6 bg-card rounded-[2rem] border border-border shadow-card">
                            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                                <UsersRound className="h-6 w-6 text-secondary" />
                            </div>
                            <p className="font-body text-muted-foreground leading-relaxed">
                                When colleagues travel together for the same project or event, we build their files as a
                                consistent set. Mismatched team applications are a pattern consulates notice, and coordinating
                                them from the start is far cheaper than explaining them later.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Users className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                Family Holidays Without the Paperwork Panic
                            </h2>
                        </div>
                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            Family applications are coordination problems: children&rsquo;s school NOCs and consent letters,
                            grandparents&rsquo; insurance meeting age-specific requirements, and multiple itineraries that must
                            match perfectly.
                        </p>
                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            We manage the whole set on one checklist: every member&rsquo;s documents cross-checked against the
                            others, biometric appointments booked together so the family makes one trip to the centre, and
                            every passport tracked until all of them are back.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-secondary rounded-[3rem] rotate-3 opacity-10" />
                        <div className="relative bg-card p-8 rounded-[3rem] border border-border shadow-elevated space-y-6">
                            <h3 className="text-2xl font-display font-bold text-foreground">
                                From single urgent business files to six-member family applications, all managed remotely with
                                one organised point of contact.
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
                            <h3 className="text-3xl font-display font-bold text-foreground">Destination coverage is complete</h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {destinations.map((d, i) => (
                                <span key={i} className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-display font-bold text-foreground hover:border-secondary transition-colors">
                                    {d}
                                </span>
                            ))}
                        </div>

                        <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                            <h4 className="font-display font-bold text-foreground">
                                Processed entirely online, usually within days
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {eVisaDestinations.map((d, i) => (
                                    <span key={i} className="px-4 py-2 bg-secondary/10 rounded-full text-xs font-display font-bold text-secondary">
                                        {d}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl font-display font-bold text-foreground">More from SmotVisa</h2>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-3">
                        <p className="font-body text-muted-foreground">
                            See our dedicated{" "}
                            <Link href="/visa/us-visa-consultant" className="text-secondary font-bold hover:underline">USA Visa</Link>{" "}and{" "}
                            <Link href="/visa/schengen-visa-consultant" className="text-secondary font-bold hover:underline">Schengen Visa</Link>{" "}
                            pages, plus{" "}
                            <Link href="/visa" className="text-secondary font-bold hover:underline">business visa assistance</Link>{" "}
                            for working professionals.
                        </p>
                    </div>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                        <h3 className="font-display font-bold text-foreground">We also assist travellers in</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "KR Puram", href: "/visa-agents-in-kr-puram" },
                                { label: "Marathahalli", href: "/visa-agents-in-marathahalli" },
                                { label: "Sarjapur Road", href: "/visa-agents-in-sarjapur-road" }
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
                        Visa Agents in Whitefield, Bangalore
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
