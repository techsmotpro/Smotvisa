import PageHeader from "@/components/ui/PageHeader";
import { Star, ArrowRight, Clock, Briefcase, Globe2, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Agents in Marathahalli Bangalore | SmotVisa",
    description: "SmotVisa handles complete visa documentation for Marathahalli professionals Schengen, USA, UK, Dubai & Vietnam. Async process, same-day review, zero office visits.",
    keywords: [
        "visa agents in Marathahalli",
        "visa agents in Marathahalli Bangalore",
        "Marathahalli visa consultants",
        "business visa Marathahalli",
        "Schengen visa Marathahalli",
        "online visa assistance Bangalore",
        "SmotVisa Marathahalli"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agents-in-marathahalli",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Visa Agents in Marathahalli Bangalore | SmotVisa",
        description: "Complete visa documentation for Marathahalli professionals: Schengen, USA, UK, Dubai and Vietnam. Asynchronous process, same-day review, zero office visits.",
        url: "https://smotvisa.com/visa-agents-in-marathahalli",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Marathahalli Bangalore | SmotVisa",
        description: "Complete visa documentation for Marathahalli professionals. Async process, same-day review, zero office visits.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const deliverables = [
    "A free consultation",
    "A personalised checklist within hours",
    "Same-day document review",
    "Professionally drafted cover letters",
    "Appointment booking",
    "Application tracking until your passport is back",
    "A consultant on WhatsApp who answers when you ask where things stand"
];

const destinations = [
    "Schengen Countries", "UK", "Japan", "Singapore", "Australia",
    "Dubai", "Thailand", "Vietnam", "Malaysia", "Sri Lanka"
];

export default function VisaServicesInMarathahalli() {
    const bangaloreOffice = offices.find(o => o.id === "cv-raman-nagar-bangalore");

    return (
        <main className="bg-background">
            {bangaloreOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agents-in-marathahalli",
                        "name": "SmotVisa Marathahalli",
                        "description": "SmotVisa provides complete tourist and business visa assistance for Marathahalli, Bangalore: asynchronous document review, cover letters, appointment booking and tracking until decision.",
                        "url": "https://smotvisa.com/visa-agents-in-marathahalli",
                        "telephone": bangaloreOffice.phone[0],
                        "email": bangaloreOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": bangaloreOffice.address,
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Marathahalli, Bangalore" },
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
                        "provider": { "@type": "LocalBusiness", "name": "SmotVisa", "@id": "https://smotvisa.com/visa-agents-in-marathahalli" },
                        "areaServed": { "@type": "Place", "name": "Marathahalli, Bangalore" },
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
                            { "@type": "ListItem", "position": 3, "name": "Marathahalli", "item": "https://smotvisa.com/visa-agents-in-marathahalli" }
                        ]
                    }} />
                </>
            )}

            <PageHeader
                title="Visa Agents in Marathahalli, Bangalore"
                description="Complete tourist and business visa assistance, engineered for people who want the visa handled properly without giving up their evenings or their leave days."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "Marathahalli" }
                ]}
            />

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                        <Star className="h-4 w-4 text-secondary fill-secondary" />
                        <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Tourist &amp; Business Visas</span>
                    </div>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        Marathahalli&rsquo;s residents have full calendars and international travel plans, a combination that
                        makes visa paperwork the least welcome task of any trip. SmotVisa solves that. We&rsquo;re a Bangalore
                        visa consultancy providing complete tourist and business visa assistance, engineered for people who
                        want the visa handled properly without giving up their evenings or their leave days.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <Clock className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                A Visa Process That Fits Around Your Work
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            Our workflow is asynchronous by design. Share documents on WhatsApp or email at 11 pm; we return an
                            itemised review by the next morning: what&rsquo;s missing, what&rsquo;s weak, what needs
                            correcting. Calls are scheduled around your meetings, including early morning and late evening for
                            teams working US and Europe hours. We fill and verify your forms, draft your cover letter, arrange
                            compliant travel insurance where needed, and book your biometric appointment for the slot that
                            costs your week the least. One centre visit; everything else is remote.
                        </p>

                        <div className="flex items-start gap-4 p-6 bg-card rounded-[2rem] border border-border shadow-card">
                            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                                <Users className="h-6 w-6 text-secondary" />
                            </div>
                            <p className="font-body text-muted-foreground leading-relaxed">
                                For dual-income couples, we run joint applications through a single shared checklist, so the
                                same document set does double duty and nobody repeats work. Families get the same treatment
                                with children&rsquo;s documents handled in full.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-3">
                        <Briefcase className="h-7 w-7 text-secondary" />
                        <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                            Business and Leisure, Both Done Right
                        </h2>
                    </div>

                    <div className="p-8 bg-card rounded-[2.5rem] border border-border shadow-card space-y-4">
                        <h3 className="text-xl font-display font-bold text-foreground">For business travel</h3>
                        <p className="font-body text-muted-foreground leading-relaxed">
                            Client visits, conferences, workshops, we prepare the complete file: employer covering letters,
                            overseas invitation letters, financial documents and itineraries formatted to each
                            consulate&rsquo;s expectations. We give your HR the exact letter format consulates want, because
                            the generic template most companies issue rarely says what an officer needs to read. US B1
                            applicants get interview preparation included.
                        </p>
                    </div>

                    <div className="p-8 bg-card rounded-[2.5rem] border border-border shadow-card space-y-4">
                        <div className="flex items-center gap-3">
                            <Globe2 className="h-6 w-6 text-secondary" />
                            <h3 className="text-xl font-display font-bold text-foreground">For holidays</h3>
                        </div>
                        <p className="font-body text-muted-foreground leading-relaxed">
                            We cover the full map: Schengen countries and the UK for the big annual trip; Japan, Singapore and
                            Australia; and Dubai, Thailand, Vietnam, Malaysia and Sri Lanka e-visas for long weekends,
                            processed online in days.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            {destinations.map((d, i) => (
                                <span key={i} className="px-4 py-2 bg-secondary/10 rounded-full text-xs font-display font-bold text-secondary">
                                    {d}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        Every application, large or small, passes a pre-submission review where we cross-check dates,
                        finances, forms and annexures against each other, because consistency is what gets files approved.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-secondary/5 to-background border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                            What You Get, Concretely
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {deliverables.map((d, i) => (
                                <div key={i} className="flex items-start gap-3 p-5 bg-card rounded-[2rem] border border-border">
                                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                    <p className="text-sm font-body text-muted-foreground leading-relaxed">{d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl font-display font-bold text-foreground">Explore More from SmotVisa</h2>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-3">
                        <h3 className="font-display font-bold text-foreground">Planning ahead?</h3>
                        <p className="font-body text-muted-foreground">
                            Visit our{" "}
                            <Link href="/visa/schengen-visa-consultant" className="text-secondary font-bold hover:underline">Schengen Visa</Link>{" "}and{" "}
                            <Link href="/visa/uae-visa-consultant" className="text-secondary font-bold hover:underline">Dubai Visa</Link>{" "}
                            pages, or our{" "}
                            <Link href="/visa" className="text-secondary font-bold hover:underline">business visa assistance</Link>{" "}
                            for client-visit travel.
                        </p>
                    </div>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                        <h3 className="font-display font-bold text-foreground">We also serve</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "Whitefield", href: "/visa-agents-in-whitefield" },
                                { label: "Bellandur", href: "/visa-agents-in-bellandur" },
                                { label: "KR Puram", href: "/visa-agents-in-kr-puram" }
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
                        Visa Agents in Marathahalli, Bangalore
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
