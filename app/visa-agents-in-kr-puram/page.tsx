import PageHeader from "@/components/ui/PageHeader";
import { Star, ArrowRight, Plane, ShieldCheck, Briefcase, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Agents in KR Puram Bangalore | SmotVisa",
    description: "SmotVisa makes first international trips simple for KR Puram Dubai, Thailand, Singapore e-visas in days. Clear guidance, honest pricing, full documentation support.",
    keywords: [
        "visa agents in KR Puram",
        "visa agents in KR Puram Bangalore",
        "KR Puram visa consultants",
        "first time traveller visa Bangalore",
        "Dubai e-visa KR Puram",
        "Thailand visa KR Puram",
        "SmotVisa KR Puram"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agents-in-kr-puram",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Visa Agents in KR Puram Bangalore | SmotVisa",
        description: "First international trips made simple for KR Puram: Dubai, Thailand and Singapore e-visas in days, with clear guidance and honest pricing.",
        url: "https://smotvisa.com/visa-agents-in-kr-puram",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in KR Puram Bangalore | SmotVisa",
        description: "First international trips made simple for KR Puram. Clear guidance, honest pricing, full documentation support.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const easyDestinations = [
    { name: "Thailand", note: "e-visa or visa-on-arrival" },
    { name: "Sri Lanka", note: "e-visa or visa-on-arrival" },
    { name: "Malaysia", note: "e-visa or visa-on-arrival" },
    { name: "Vietnam", note: "e-visa or visa-on-arrival" },
    { name: "Dubai", note: "processed online in about 3 to 5 working days" },
    { name: "Singapore", note: "a proper application, but no interview" }
];

const biggerDestinations = ["Europe", "UK", "USA", "Australia", "Canada", "Japan"];

export default function VisaServicesInKRPuram() {
    const bangaloreOffice = offices.find(o => o.id === "cv-raman-nagar-bangalore");

    return (
        <main className="bg-background">
            {bangaloreOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agents-in-kr-puram",
                        "name": "SmotVisa KR Puram",
                        "description": "SmotVisa provides tourist and business visa assistance for KR Puram, Bangalore, with a focus on first-time travellers: e-visas, complete documentation, honest pricing and clear timelines.",
                        "url": "https://smotvisa.com/visa-agents-in-kr-puram",
                        "telephone": bangaloreOffice.phone[0],
                        "email": bangaloreOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": bangaloreOffice.address,
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "KR Puram, Bangalore" },
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
                        "provider": { "@id": "https://smotvisa.com/visa-agents-in-kr-puram" },
                        "areaServed": { "@type": "Place", "name": "KR Puram, Bangalore" },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Visa Assistance Services",
                            "itemListElement": [...easyDestinations.map(d => d.name), ...biggerDestinations].map(d => ({
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
                            { "@type": "ListItem", "position": 3, "name": "KR Puram", "item": "https://smotvisa.com/visa-agents-in-kr-puram" }
                        ]
                    }} />
                </>
            )}

            <PageHeader
                title="Visa Agents in KR Puram, Bangalore"
                description="Treating first-time travellers with complete clarity: what your visa needs, what it costs, how long it takes, and nothing hidden."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "KR Puram" }
                ]}
            />

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                        <Star className="h-4 w-4 text-secondary fill-secondary" />
                        <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Tourist &amp; Business Visas</span>
                    </div>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        SmotVisa KR Puram is Bangalore visa consultancy for tourist and business visas, and we&rsquo;ve built
                        our service around treating first-time travellers with complete clarity: what your visa needs, what it
                        costs, how long it takes, and nothing hidden.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <Sparkles className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                Your First Visa Is Easier Than You Think
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            For an Indian passport holder, the most popular first destinations barely require paperwork at all.
                            Thailand, Sri Lanka, Malaysia and Vietnam run e-visa or visa-on-arrival systems. Dubai&rsquo;s
                            tourist visa is processed online in about 3 to 5 working days. Singapore needs a proper application
                            but no interview. No embassy visits, no biometrics for most of these, and no reason anyone should
                            charge you a fortune or hold your passport for weeks.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {easyDestinations.map((d, i) => (
                                <div key={i} className="p-5 bg-card rounded-[2rem] border border-border shadow-sm">
                                    <h3 className="font-display font-bold text-foreground mb-2">{d.name}</h3>
                                    <p className="text-xs font-body text-muted-foreground italic leading-relaxed">{d.note}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 bg-card rounded-[2.5rem] border border-border shadow-card">
                            <p className="font-body text-muted-foreground leading-relaxed">
                                What these simple applications do punish is small errors: a photo that fails specifications, a
                                passport scan with glare, a name typed differently from the passport. We verify every detail
                                before submission, file the application, track it, and deliver your approval on WhatsApp,
                                usually within days.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-3">
                        <Plane className="h-7 w-7 text-secondary" />
                        <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                            Ready for the Bigger Destinations
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {biggerDestinations.map((d, i) => (
                            <span key={i} className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-display font-bold text-foreground hover:border-secondary transition-colors">
                                {d}
                            </span>
                        ))}
                    </div>

                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        These need complete files, and this is where professional preparation pays for itself. We build the
                        whole application with you step by step: bank statements presented properly, employment proof, a cover
                        letter that explains your trip clearly, travel insurance for Schengen, verified forms, and a biometric
                        appointment booked at the Bangalore application centre for a day that suits you. Everything else,
                        consultation, document review, corrections, updates, happens over WhatsApp and phone at whatever hours
                        work for you.
                    </p>

                    <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-[2rem] border border-border">
                        <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shrink-0">
                            <ShieldCheck className="h-6 w-6 text-secondary" />
                        </div>
                        <p className="font-body text-muted-foreground leading-relaxed">
                            And a reassurance we give often: a blank passport does not disqualify you. It simply means your
                            documentation must work harder, and building files that work harder is our trade.
                        </p>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-card rounded-[2rem] border border-border">
                        <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                            <Briefcase className="h-6 w-6 text-secondary" />
                        </div>
                        <p className="font-body text-muted-foreground leading-relaxed">
                            For KR Puram&rsquo;s residents as professionals working the nearby tech corridors, we also prepare
                            business visa files, employer letters, invitation letters and itineraries, with same-day document
                            review.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-secondary/5 to-background border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h2 className="text-3xl font-display font-bold text-foreground">Start with These Guides</h2>

                        <div className="p-6 bg-card rounded-[2rem] border border-border space-y-3">
                            <h3 className="font-display font-bold text-foreground">First trip?</h3>
                            <p className="font-body text-muted-foreground">
                                Read our{" "}
                                <Link href="/visa/uae-visa-consultant" className="text-secondary font-bold hover:underline">Dubai Visa</Link>{" "}
                                page, and keep the{" "}
                                <Link href="/blog/visa-document-checklist-first-time-applicants-2026" className="text-secondary font-bold hover:underline">Visa Document Checklist</Link>{" "}
                                handy.
                            </p>
                        </div>

                        <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                            <h3 className="font-display font-bold text-foreground">We also help travellers in</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { label: "Whitefield", href: "/visa-agents-in-whitefield" },
                                    { label: "Marathahalli", href: "/visa-agents-in-marathahalli" }
                                ].map((n, i) => (
                                    <Link key={i} href={n.href} className="px-5 py-2.5 bg-secondary/10 rounded-full text-sm font-display font-bold text-secondary hover:bg-secondary/20 transition-colors">
                                        {n.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                        Visa Agents in KR Puram, Bangalore
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
