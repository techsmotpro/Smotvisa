import PageHeader from "@/components/ui/PageHeader";
import { Star, ArrowRight, Users, MessageSquare, HeartHandshake, Info, Globe2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Agents in Jayanagar Bangalore | SmotVisa",
    description: "SmotVisa helps Jayanagar families with visitor visas for USA, UK, Canada & Australia sponsorship coordination, senior-friendly process & interview preparation.",
    keywords: [
        "visa agents in Jayanagar",
        "visa agents in Jayanagar Bangalore",
        "Jayanagar visa consultants",
        "parents visitor visa Jayanagar",
        "senior citizen visa assistance Bangalore",
        "US visitor visa interview preparation",
        "SmotVisa Jayanagar"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agents-in-jayanagar",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Visa Agents in Jayanagar Bangalore | SmotVisa",
        description: "Parent and senior citizen visitor visas for the USA, UK, Canada and Australia: sponsorship coordination, senior-friendly process and interview preparation.",
        url: "https://smotvisa.com/visa-agents-in-jayanagar",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Jayanagar Bangalore | SmotVisa",
        description: "Parent and senior citizen visitor visas: sponsorship coordination, senior-friendly process and interview preparation.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

export default function VisaServicesInJayanagar() {
    const bangaloreOffice = offices.find(o => o.id === "cv-raman-nagar-bangalore");

    return (
        <main className="bg-background">
            {bangaloreOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agents-in-jayanagar",
                        "name": "SmotVisa Jayanagar",
                        "description": "SmotVisa provides tourist and business visa assistance for Jayanagar, Bangalore, specialising in parent and senior citizen visitor visas for the USA, UK, Canada and Australia.",
                        "url": "https://smotvisa.com/visa-agents-in-jayanagar",
                        "telephone": bangaloreOffice.phone[0],
                        "email": bangaloreOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": bangaloreOffice.address,
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Jayanagar, Bangalore" },
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
                        "serviceType": "Visitor Visa Assistance for Parents and Senior Citizens",
                        "provider": { "@type": "LocalBusiness", "name": "SmotVisa", "@id": "https://smotvisa.com/visa-agents-in-jayanagar" },
                        "areaServed": { "@type": "Place", "name": "Jayanagar, Bangalore" },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Visitor Visa Services",
                            "itemListElement": [
                                "USA Visitor Visa", "UK Visitor Visa", "Canada Visitor Visa", "Australia Visitor Visa",
                                "Schengen Visa", "Japan Visa", "Singapore Visa", "Dubai Visa",
                                "Thailand e-Visa", "Sri Lanka e-Visa", "Business Visa Documentation"
                            ].map(d => ({
                                "@type": "Offer",
                                "itemOffered": { "@type": "Service", "name": `${d} Assistance` }
                            }))
                        }
                    }} />
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smotvisa.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Visa Agents in Bangalore", "item": "https://smotvisa.com/visa-agents-in-bangalore" },
                            { "@type": "ListItem", "position": 3, "name": "Jayanagar", "item": "https://smotvisa.com/visa-agents-in-jayanagar" }
                        ]
                    }} />
                </>
            )}

            <PageHeader
                title="Visa Agents in Jayanagar, Bangalore"
                description="We manage the entire visitor visa journey, on both sides of the world."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "Jayanagar" }
                ]}
            />

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                        <Star className="h-4 w-4 text-secondary fill-secondary" />
                        <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Tourist &amp; Business Visas</span>
                    </div>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        The visa request we hear most from Jayanagar is a specific one: parents applying for visitor visas to
                        see their children settled in the US, UK, Canada or Australia. It&rsquo;s a specialised kind of
                        application, and it&rsquo;s the kind SmotVisa has refined most. We&rsquo;re a Bangalore visa
                        consultancy for tourist and business visas, and for Jayanagar families we manage the entire visitor
                        visa journey, on both sides of the world.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <Users className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                Parent and Senior Citizen Visitor Visas, End to End
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            A parent&rsquo;s visitor visa file has two halves prepared in two countries.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-card rounded-[2rem] border border-border shadow-card space-y-3">
                                <h3 className="font-display font-bold text-foreground">The India side</h3>
                                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                                    Proof of ties such as property and pension, financial documents, travel history and the
                                    application itself.
                                </p>
                            </div>
                            <div className="p-6 bg-card rounded-[2rem] border border-border shadow-card space-y-3">
                                <h3 className="font-display font-bold text-foreground">The overseas side</h3>
                                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                                    The sponsoring child&rsquo;s invitation letter, status documents and financial evidence.
                                </p>
                            </div>
                        </div>

                        <p className="font-body text-muted-foreground leading-relaxed">
                            The two halves must agree with each other completely, and coordinating them over long-distance
                            calls is where families struggle.
                        </p>

                        <div className="p-8 bg-card rounded-[2.5rem] border border-border shadow-card space-y-4">
                            <div className="flex items-center gap-3">
                                <MessageSquare className="h-6 w-6 text-secondary" />
                                <h3 className="text-xl font-display font-bold text-foreground">We manage both halves as one file</h3>
                            </div>
                            <p className="font-body text-muted-foreground leading-relaxed">
                                Your son or daughter abroad works with us directly over WhatsApp or email, across any time
                                zone; we tell them exactly which sponsorship documents to send and in what format. Meanwhile we
                                prepare the India-side file with your parents patiently, over the phone, in plain language, at
                                whatever pace suits them. Nobody in the family needs to decode a consulate website.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-3">
                        <HeartHandshake className="h-7 w-7 text-secondary" />
                        <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                            Interview Preparation for Senior Applicants
                        </h2>
                    </div>

                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        US visitor visa applications end with a consular interview, and for senior applicants facing their
                        first one, preparation makes all the difference. We conduct dedicated sessions covering the questions
                        officers ask, the order they ask them in, and how to answer naturally and truthfully. For the UK,
                        Canada and Australia, where decisions are made entirely on paper, we work the other way: the written
                        file must answer every question before it&rsquo;s asked, and we build it to do exactly that.
                    </p>

                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        We also handle the practical details that matter for older travellers: presenting pension and
                        retirement income correctly, arranging age-appropriate travel insurance that meets destination
                        requirements, and scheduling biometric appointments to minimise waiting.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-secondary/5 to-background border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <Globe2 className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                For the Rest of the Family&rsquo;s Travel
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            Beyond family visits, we manage Jayanagar&rsquo;s complete travel calendar: Schengen and UK
                            holidays, Japan, Singapore and Dubai trips, quick Thailand and Sri Lanka e-visas processed within
                            days, and business visa documentation for the neighbourhood&rsquo;s professionals and business
                            owners. Every application gets a personalised checklist, full document review, cover letter,
                            appointment booking and tracking until decision.
                        </p>

                        <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-[2rem] border border-border">
                            <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shrink-0">
                                <Info className="h-6 w-6 text-secondary" />
                            </div>
                            <p className="text-sm font-body text-muted-foreground leading-relaxed">
                                SmotVisa provides tourist and business visa assistance only: no immigration, PR or
                                work-related services, and we&rsquo;re upfront about that with every family.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl font-display font-bold text-foreground">Helpful Resources</h2>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-3">
                        <h3 className="font-display font-bold text-foreground">Applying for a family visit?</h3>
                        <p className="font-body text-muted-foreground">
                            See our{" "}
                            <Link href="/visa/us-visa-consultant" className="text-secondary font-bold hover:underline">USA Visa</Link>,{" "}
                            <Link href="/visa/uk-visa-consultant" className="text-secondary font-bold hover:underline">UK Visa</Link>{" "}and{" "}
                            <Link href="/visa/canada-visa-consultant" className="text-secondary font-bold hover:underline">Canada Visitor Visa</Link>{" "}
                            pages, and the{" "}
                            <Link href="/blog/visa-document-checklist-first-time-applicants-2026" className="text-secondary font-bold hover:underline">Visa Document Checklist</Link>{" "}
                            before you apply.
                        </p>
                    </div>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                        <h3 className="font-display font-bold text-foreground">We also serve neighbouring</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "JP Nagar", href: "/visa-agents-in-jp-nagar" },
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
                        Visa Agents in Jayanagar, Bangalore
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
