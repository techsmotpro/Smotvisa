import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle2, Star, ShieldCheck, Clock, ArrowRight, Globe2, FileText, CalendarCheck, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Agents in HSR Layout Bangalore | SmotVisa",
    description: "SmotVisa provides complete visa assistance in HSR Layout for Schengen, USA, UK, Singapore, Dubai. Document preparation, appointment booking & cover letters.",
    keywords: [
        "visa agents in HSR Layout",
        "visa agents in HSR Layout Bangalore",
        "HSR Layout visa consultants",
        "tourist visa HSR Layout",
        "business visa HSR Layout",
        "SmotVisa HSR Layout",
        "visa services in HSR Layout"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agents-in-hsr-layout",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Visa Agents in HSR Layout Bangalore | SmotVisa",
        description: "Complete tourist and business visa assistance in HSR Layout for Schengen, USA, UK, Singapore and Dubai. Document preparation, appointment booking and cover letters.",
        url: "https://smotvisa.com/visa-agents-in-hsr-layout",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in HSR Layout Bangalore | SmotVisa",
        description: "Complete tourist and business visa assistance in HSR Layout for Schengen, USA, UK, Singapore and Dubai.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const processSteps = [
    { icon: CheckCircle2, title: "We confirm the right visa category for your trip" },
    { icon: FileText, title: "We prepare a document checklist specific to your destination and profile" },
    { icon: ShieldCheck, title: "We review every document you share" },
    { icon: FileText, title: "We fill and verify your application forms" },
    { icon: FileText, title: "We draft a professional cover letter" },
    { icon: CalendarCheck, title: "We book your appointment at the visa application centre" },
    { icon: Send, title: "We track your file until the decision arrives" }
];

const destinations = [
    "Schengen Countries", "UK", "USA", "Canada", "Australia",
    "Japan", "Singapore", "UAE & Dubai", "Thailand", "Vietnam",
    "Malaysia", "Sri Lanka", "Turkey", "New Zealand"
];

const eVisaDestinations = ["Dubai", "Thailand", "Vietnam", "Malaysia", "Sri Lanka", "Turkey"];

export default function VisaServicesInHSRLayout() {
    const bangaloreOffice = offices.find(o => o.id === "cv-raman-nagar-bangalore");

    return (
        <main className="bg-background">
            {bangaloreOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agents-in-hsr-layout",
                        "name": "SmotVisa HSR Layout",
                        "description": "SmotVisa provides complete tourist and business visa assistance for HSR Layout, Bangalore: eligibility checks, document preparation, cover letters, appointment booking and file tracking.",
                        "url": "https://smotvisa.com/visa-agents-in-hsr-layout",
                        "telephone": bangaloreOffice.phone[0],
                        "email": bangaloreOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": bangaloreOffice.address,
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "HSR Layout, Bangalore" },
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
                        "provider": { "@id": "https://smotvisa.com/visa-agents-in-hsr-layout" },
                        "areaServed": { "@type": "Place", "name": "HSR Layout, Bangalore" },
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
                            { "@type": "ListItem", "position": 3, "name": "HSR Layout", "item": "https://smotvisa.com/visa-agents-in-hsr-layout" }
                        ]
                    }} />
                </>
            )}

            <PageHeader
                title="Visa Agents in HSR Layout, Bangalore"
                description="SmotVisa handles the entire visa process for you: from the first eligibility check to the day your passport comes back."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "HSR Layout" }
                ]}
            />

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                        <Star className="h-4 w-4 text-secondary fill-secondary" />
                        <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Tourist &amp; Business Visas</span>
                    </div>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        If you live or work in HSR Layout and have an international trip coming up, SmotVisa handles the entire
                        visa process for you: from the first eligibility check to the day your passport comes back. We are a
                        Bangalore-based visa and travel documentation consultancy specialising in tourist and business visas,
                        and everything we do is built around one goal: your application should be approved the first time.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                        <h2 className="text-4xl font-display font-bold text-foreground">
                            Complete Visa Assistance for HSR Layout Residents
                        </h2>
                        <p className="text-muted-foreground italic tracking-wide">
                            Our service covers every step that decides an application&rsquo;s fate.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {processSteps.map((step, i) => (
                            <div key={i} className="p-6 bg-card rounded-[2.5rem] shadow-card border border-border hover:shadow-elevated transition-all">
                                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-5">
                                    <step.icon className="h-7 w-7 text-secondary" />
                                </div>
                                <h3 className="text-base font-display font-bold text-foreground leading-snug">{step.title}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto p-8 bg-card rounded-[2.5rem] border border-border shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                                <Clock className="h-6 w-6 text-secondary" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-display font-bold text-foreground">
                                    We process the complete e-visa without any centre visit
                                </h3>
                                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                                    For destinations with online systems, {eVisaDestinations.slice(0, -1).join(", ")} and{" "}
                                    {eVisaDestinations[eVisaDestinations.length - 1]}, we process the complete e-visa without
                                    any centre visit, usually within a few working days.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-3">
                        <Globe2 className="h-7 w-7 text-secondary" />
                        <h2 className="text-3xl font-display font-bold text-foreground">
                            Destinations We Handle for HSR Travellers
                        </h2>
                    </div>
                    <p className="text-muted-foreground font-body italic">
                        For both tourist and business travel.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {destinations.map((d, i) => (
                            <span key={i} className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-display font-bold text-foreground hover:border-secondary transition-colors">
                                {d}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-secondary/5 to-background border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                A Fully Online Process, Start to Finish
                            </h2>
                            <p className="text-lg font-body text-muted-foreground leading-relaxed">
                                You never need to visit an office. Consultations happen over phone or WhatsApp; documents move
                                over email; reviews and corrections come back the same day. Your only physical step is the
                                biometric appointment or interview the consulate itself requires, and we book that slot for the
                                date and time that suits you.
                            </p>
                            <p className="text-lg font-body text-muted-foreground leading-relaxed">
                                Most HSR clients complete their entire visa process without rearranging a single workday.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary rounded-[3rem] rotate-3 opacity-10" />
                            <div className="relative bg-card p-8 rounded-[3rem] border border-border shadow-elevated space-y-6">
                                <h3 className="text-2xl font-display font-bold text-foreground">
                                    You never need to visit an office.
                                </h3>
                                <Link href="/contact" className="w-full">
                                    <Button className="w-full bg-primary text-primary-foreground py-8 rounded-2xl font-display font-bold text-lg shadow-gold group">
                                        Contact Our Team <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl font-display font-bold text-foreground">Explore More from SmotVisa</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-card rounded-[2rem] border border-border space-y-3">
                            <h3 className="font-display font-bold text-foreground">Planning Europe?</h3>
                            <p className="text-sm font-body text-muted-foreground italic">
                                Start with our{" "}
                                <Link href="/visa/schengen-visa-consultant" className="text-secondary font-bold hover:underline">
                                    Schengen Visa Assistance
                                </Link>{" "}
                                guide, or explore{" "}
                                <Link href="/visa/us-visa-consultant" className="text-secondary font-bold hover:underline">
                                    USA visas
                                </Link>.
                            </p>
                        </div>

                        <div className="p-6 bg-card rounded-[2rem] border border-border space-y-3">
                            <h3 className="font-display font-bold text-foreground">Travelling for work?</h3>
                            <p className="text-sm font-body text-muted-foreground italic">
                                See our{" "}
                                <Link href="/visa" className="text-secondary font-bold hover:underline">
                                    business visa assistance
                                </Link>{" "}
                                and the{" "}
                                <Link href="/blog/visa-document-checklist-first-time-applicants-2026" className="text-secondary font-bold hover:underline">
                                    Visa Document Checklist
                                </Link>.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                        <h3 className="font-display font-bold text-foreground">We also serve nearby</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "Koramangala", href: "/visa-agents-in-koramangala" },
                                { label: "BTM Layout", href: "/visa-agents-in-btm-layout" },
                                { label: "Bellandur", href: "/visa-agents-in-bellandur" }
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
                        Visa Agents in HSR Layout, Bangalore
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
