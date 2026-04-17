import PageHeader from "@/components/ui/PageHeader";
import { MapPin, CheckCircle2, Star, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Best Visa Agents in KR Puram | Expert Visa Consultants | SmotVisa",
    description: "Expert visa agents and consultants in KR Puram, Bangalore. SmotVisa provides expert assistance for US, UK, Canada, and Schengen visas for tech professionals and expatriates.",
    
    keywords: [
        "visa agents in KR Puram",
        "best visa agents KR Puram",
        "KR Puram visa consultants",
        "SmotVisa KR Puram",
        "KR Puram visa processing",
        "visa services in KR Puram",
        "visa consultants in KR Puram"
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
        title: "Best Visa Agents in KR Puram | Expert Visa Consultants | SmotVisa",
        description: "Expert visa agents and consultants in KR Puram, Bangalore. SmotVisa provides expert assistance for US, UK, Canada, and Schengen visas for tech professionals and expatriates.",
        url: "https://smotvisa.com/visa-agents-in-kr-puram",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Best Visa Agents in KR Puram | Expert Visa Consultants | SmotVisa",
        description: "Expert visa agents and consultants in KR Puram, Bangalore. SmotVisa provides expert assistance for US, UK, Canada, and Schengen visas for tech professionals and expatriates.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

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
                        "description": bangaloreOffice.description,
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
                title="Visa Agents in KR Puram"
                description="Expert visa agents for tech professionals and expatriates in KR Puram, Bangalore. SmotVisa is your trusted partner for premium travel consultancy."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "KR Puram" }
                ]}
            />

            <section className="py-24 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                            <Star className="h-4 w-4 text-secondary fill-secondary" />
                            <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Premium Visa Agents</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                            Expert Visa Agents for KR Puram's Tech Community.
                        </h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            Strategically located in KR Puram, SmotVisa provides specialized visa assistance tailored for the vibrant tech professionals and expatriate community in this growing IT hub of Bangalore.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "Tech Professional Specialization", desc: "Expert guidance for IT professionals seeking US, UK, Canada, and Schengen visas." },
                                { title: "Doorstep Services", desc: "Convenient document pickup & delivery across KR Puram and surrounding areas." },
                                { title: "24/7 IT Support", desc: "Dedicated case managers for every KR Puram client." },
                                { title: "High Success Rate", desc: "Proven track record with Bangalore's global workforce." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-5 w-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-foreground">{item.title}</h4>
                                        <p className="text-xs text-muted-foreground italic">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-secondary rounded-[3rem] rotate-3 opacity-10" />
                        <div className="relative bg-card p-10 rounded-[3rem] border border-border shadow-elevated space-y-8">
                            <h3 className="text-2xl font-display font-bold text-foreground">How We Can Help You</h3>
                            <div className="space-y-6">
                                <div className="p-6 bg-card rounded-2xl border border-border group hover:border-secondary transition-colors shadow-sm">
                                    <p className="text-sm font-body text-muted-foreground italic leading-relaxed mb-4">
                                        Our expert agents provide comprehensive visa assistance tailored for KR Puram residents. 
                                        Whether you're a tech professional, entrepreneur, or family traveler, we're here to assist you.
                                    </p>
                                </div>
                            </div>
                            <Link href="/contact" className="w-full">
                                <Button className="w-full bg-primary text-primary-foreground py-8 rounded-2xl font-display font-bold text-lg shadow-gold group">
                                    Contact Our Team <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl font-display font-bold text-foreground">Visa Agents & Services We Offer</h2>
                        <p className="text-muted-foreground italic tracking-wide">Specialized visa agents and solutions for KR Puram's diverse community.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: "US B1/B2 & H1B Visas", desc: "Specialized assistance for tech professionals seeking US work and business visas." },
                            { icon: Clock, title: "Express UK Processing", desc: "Priority services for leisure and business visitors to the United Kingdom." },
                            { icon: CheckCircle2, title: "Schengen Group Filings", desc: "Hassle-free group applications for corporate and family trips to Europe." }
                        ].map((s, i) => (
                            <div key={i} className="p-10 bg-card rounded-[2.5rem] shadow-card border border-border hover:shadow-elevated transition-all text-center">
                                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <s.icon className="h-8 w-8 text-secondary" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground mb-4">{s.title}</h3>
                                <p className="text-sm font-body text-muted-foreground italic leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="text-4xl md:text-7xl font-display font-bold text-foreground leading-tight">
                        Your Trusted Visa Agents in KR Puram.
                    </h2>
                    <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto italic leading-relaxed">
                        Don't let complex visa regulations stand in the way of your international career. Connect with our KR Puram experts today.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-secondary text-secondary-foreground font-display font-bold text-lg rounded-2xl hover:translate-y-[-2px] transition-all shadow-gold group">
                            Contact KR Puram Desk <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/visa-checker" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-transparent border-2 border-primary text-primary font-display font-bold text-lg rounded-2xl hover:bg-primary/5 transition-all">
                            Check Eligibility
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}