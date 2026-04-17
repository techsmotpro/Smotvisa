import PageHeader from "@/components/ui/PageHeader";
import { MapPin, CheckCircle2, Star, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Best Visa Agents in Indiranagar | Expert Visa Consultants | SmotVisa",
    description: "Expert visa agents and consultants in Indiranagar, Bangalore. SmotVisa provides specialized assistance for business visas, work permits, and family immigration for urban professionals.",
    
    keywords: [
        "visa agents in Indiranagar",
        "best visa agents Indiranagar",
        "Indiranagar visa consultants",
        "SmotVisa Indiranagar",
        "Indiranagar visa processing",
        "visa services in Indiranagar",
        "visa consultants in Indiranagar"
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
        title: "Best Visa Agents in Indiranagar | Expert Visa Consultants | SmotVisa",
        description: "Expert visa agents and consultants in Indiranagar, Bangalore. SmotVisa provides specialized assistance for business visas, work permits, and family immigration for urban professionals.",
        url: "https://smotvisa.com/visa-agents-in-indiranagar",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Best Visa Agents in Indiranagar | Expert Visa Consultants | SmotVisa",
        description: "Expert visa agents and consultants in Indiranagar, Bangalore. SmotVisa provides specialized assistance for business visas, work permits, and family immigration for urban professionals.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function VisaServicesInIndiranagar() {
    const indiranagarOffice = offices.find(o => o.id === "indiranagar-bangalore");
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
                        "description": bangaloreOffice.description,
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
                            { "@type": "ListItem", "position": 3, "name": "Indiranagar", "item": "https://smotvisa.com/visa-agents-in-indiranagar" }
                        ]
                    }} />
                </>
            )}
            <PageHeader
                title="Visa Agents in Indiranagar"
                description="Expert visa agents for urban professionals and corporate clientele in Indiranagar, Bangalore. SmotVisa is your trusted partner for business and corporate visa solutions."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "Indiranagar" }
                ]}
            />

            <section className="py-24 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                            <Star className="h-4 w-4 text-secondary fill-secondary" />
                            <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Corporate Visa Agents</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                            Premium Visa Agents for Indiranagar's Urban Professionals.
                        </h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            Located in the trendy Indiranagar area, SmotVisa provides premium visa agents tailored for the urban professionals and corporate clientele in this vibrant neighborhood. We specialize in business visas, work permits, and family immigration solutions.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "Corporate Visa Specialization", desc: "Expert assistance for business visas, work permits, and corporate travel solutions." },
                                { title: "Executive Consultation", desc: "Personalized one-on-one sessions for senior professionals and executives." },
                                { title: "Corporate Bulk Filings", desc: "Streamlined visa processing for entire teams and corporate groups." },
                                { title: "Priority Processing", desc: "Express visa services with dedicated case managers." }
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
                                        Our expert agents provide comprehensive visa assistance tailored for Indiranagar residents. 
                                        Whether you're a corporate professional, entrepreneur, or family traveler, we're here to assist you.
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
                        <p className="text-muted-foreground italic tracking-wide">Specialized visa agents and solutions for Indiranagar's corporate and professional community.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: "Business Visa Solutions", desc: "Comprehensive support for business visas across major global destinations." },
                            { icon: Clock, title: "Work Permit Processing", desc: "Expert guidance for work permit applications and employment visa procedures." },
                            { icon: CheckCircle2, title: "Family Immigration", desc: "Complete assistance for family reunification and dependent visa applications." }
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
                        Your Corporate Visa Agents in Indiranagar.
                    </h2>
                    <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto italic leading-relaxed">
                        Trust SmotVisa for all your corporate and professional visa needs in Indiranagar. Our expert team ensures seamless processing and personalized support.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-secondary text-secondary-foreground font-display font-bold text-lg rounded-2xl hover:translate-y-[-2px] transition-all shadow-gold group">
                            Contact Indiranagar Desk <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
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