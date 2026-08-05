import PageHeader from "@/components/ui/PageHeader";
import { Star, ArrowRight, Laptop, Clock, Globe2, AlertCircle, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Agents in Electronic City Bangalore | SmotVisa",
    description: "SmotVisa brings complete visa assistance to Electronic City fully online process for USA, Schengen, UK, Singapore & Japan. Documentation to decision, from your desk.",
    keywords: [
        "visa agents in Electronic City",
        "visa agents in Electronic City Bangalore",
        "Electronic City visa consultants",
        "online visa assistance Electronic City",
        "business visa Electronic City",
        "remote visa service Bangalore",
        "SmotVisa Electronic City"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agents-in-electronic-city",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Visa Agents in Electronic City Bangalore | SmotVisa",
        description: "Complete visa assistance for Electronic City with a fully online process for USA, Schengen, UK, Singapore and Japan. Documentation to decision, from your desk.",
        url: "https://smotvisa.com/visa-agents-in-electronic-city",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Electronic City Bangalore | SmotVisa",
        description: "Complete visa assistance for Electronic City. Fully online process, documentation to decision, from your desk.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

export default function VisaServicesInElectronicCity() {
    const bangaloreOffice = offices.find(o => o.id === "cv-raman-nagar-bangalore");

    return (
        <main className="bg-background">
            {bangaloreOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agents-in-electronic-city",
                        "name": "SmotVisa Electronic City",
                        "description": "SmotVisa provides remote-first tourist and business visa assistance for Electronic City, Bangalore: free consultation, same-day document review, cover letters, appointment booking and tracking until decision.",
                        "url": "https://smotvisa.com/visa-agents-in-electronic-city",
                        "telephone": bangaloreOffice.phone[0],
                        "email": bangaloreOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": bangaloreOffice.address,
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Electronic City, Bangalore" },
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
                        "provider": { "@id": "https://smotvisa.com/visa-agents-in-electronic-city" },
                        "areaServed": { "@type": "Place", "name": "Electronic City, Bangalore" },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Visa Assistance Services",
                            "itemListElement": [
                                "Schengen", "United Kingdom", "USA", "Japan", "Singapore",
                                "Australia", "Canada", "Southeast Asia e-Visas"
                            ].map(d => ({
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
                            { "@type": "ListItem", "position": 3, "name": "Electronic City", "item": "https://smotvisa.com/visa-agents-in-electronic-city" }
                        ]
                    }} />
                </>
            )}

            <PageHeader
                title="Visa Agents in Electronic City, Bangalore"
                description="Complete tourist and business visa assistance where the only trip you make is the one the consulate itself requires."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "Electronic City" }
                ]}
            />

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                        <Star className="h-4 w-4 text-secondary fill-secondary" />
                        <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Tourist &amp; Business Visas</span>
                    </div>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        For Electronic City residents, the worst part of any visa process has always been the logistics: trips
                        into the city, office visits, queues. SmotVisa removes all of it. Our visa service was built
                        remote-first: complete tourist and business visa assistance where the only trip you make is the one the
                        consulate itself requires, and everything else happens from your desk.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <Laptop className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                The Whole Process, From Where You Are
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            It starts with a free consultation call, scheduled between your meetings. You receive a
                            destination-specific checklist on WhatsApp, and every document you upload gets a same-day review
                            with an itemised list of gaps and corrections. We fill and verify your forms, draft your cover
                            letter, arrange Schengen-compliant insurance where needed, and book your biometric appointment at
                            the Bangalore centre for the least disruptive slot. We track the application until your passport is
                            back in your hands.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-3">
                        <Clock className="h-7 w-7 text-secondary" />
                        <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                            Short-Notice Business Travel, Handled Calmly
                        </h2>
                    </div>

                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        Client meetings, project kickoffs and conferences often land with a few weeks&rsquo; notice, and
                        that&rsquo;s when files get rushed and refused. We keep short-notice applications moving without
                        cutting corners: employer letter formats your HR can return in a day, daily monitoring of appointment
                        availability for the earliest slots, evening interview-preparation calls for US applicants after your
                        workday, and honest triage.
                    </p>

                    <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-[2rem] border border-border">
                        <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shrink-0">
                            <AlertCircle className="h-6 w-6 text-secondary" />
                        </div>
                        <p className="font-body text-muted-foreground leading-relaxed">
                            If a timeline is genuinely unworkable, we tell you before you&rsquo;ve spent a rupee, and map the
                            fastest realistic alternative.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-secondary/5 to-background border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <Globe2 className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                Holidays Too, Of Course
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            The full leisure map is covered: Schengen and UK files prepared to consulate standards, Japan and
                            Singapore applications with their documentation-heavy checklists handled completely, Australia and
                            Canada visitor visas, and the quick Southeast Asia e-visas for long weekends. Couples and families
                            get coordinated applications on a single checklist with biometrics booked together.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                        Your Leave Is for the Trip, Not the Paperwork
                    </h2>
                    <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Don&rsquo;t spend a casual leave standing in queues. Message SmotVisa on WhatsApp and have your
                        checklist before your next meeting ends.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center pt-2">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-secondary text-secondary-foreground font-display font-bold text-lg rounded-2xl hover:translate-y-[-2px] transition-all shadow-gold group">
                            <MessageSquare className="h-6 w-6" /> Contact Electronic City Desk
                            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/visa" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-transparent border-2 border-primary text-primary font-display font-bold text-lg rounded-2xl hover:bg-primary/5 transition-all">
                            Check Eligibility
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h2 className="text-3xl font-display font-bold text-foreground">Useful Reading</h2>

                        <div className="p-6 bg-card rounded-[2rem] border border-border space-y-3">
                            <p className="font-body text-muted-foreground">
                                Explore our{" "}
                                <Link href="/visa/us-visa-consultant" className="text-secondary font-bold hover:underline">USA Visa</Link>{" "}and{" "}
                                <Link href="/visa/schengen-visa-consultant" className="text-secondary font-bold hover:underline">Schengen Visa</Link>{" "}
                                guides, and the{" "}
                                <Link href="/blog/visa-document-checklist-first-time-applicants-2026" className="text-secondary font-bold hover:underline">Visa Document Checklist</Link>{" "}
                                before you apply.
                            </p>
                        </div>

                        <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                            <h3 className="font-display font-bold text-foreground">Also serving</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { label: "BTM Layout", href: "/visa-agents-in-btm-layout" },
                                    { label: "HSR Layout", href: "/visa-agents-in-hsr-layout" }
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
        </main>
    );
}
