import PageHeader from "@/components/ui/PageHeader";
import { Star, ArrowRight, Users, CalendarDays, Plane } from "lucide-react";
import Link from "next/link";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Agents in Sarjapur Road Bangalore | SmotVisa",
    description: "School-holiday trips, grandparents included  SmotVisa manages complete family visa files for Sarjapur Road. Schengen, Dubai, Australia & more, on one checklist.",
    keywords: [
        "visa agents in Sarjapur Road",
        "visa agents in Sarjapur Road Bangalore",
        "Sarjapur Road visa consultants",
        "family visa assistance Bangalore",
        "school holiday visa applications",
        "group visa application Bangalore",
        "SmotVisa Sarjapur Road"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agents-in-sarjapur-road",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Visa Agents in Sarjapur Road Bangalore | SmotVisa",
        description: "School-holiday trips, grandparents included. SmotVisa manages complete family visa files for Sarjapur Road: Schengen, Dubai, Australia and more, on one checklist.",
        url: "https://smotvisa.com/visa-agents-in-sarjapur-road",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Sarjapur Road Bangalore | SmotVisa",
        description: "Complete family visa files for Sarjapur Road, managed on one coordinated checklist.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const eVisaDestinations = ["Dubai", "Thailand", "Vietnam", "Malaysia", "Sri Lanka"];

export default function VisaServicesInSarjapurRoad() {
    const bangaloreOffice = offices.find(o => o.id === "cv-raman-nagar-bangalore");

    return (
        <main className="bg-background">
            {bangaloreOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agents-in-sarjapur-road",
                        "name": "SmotVisa Sarjapur Road",
                        "description": "SmotVisa provides tourist and business visa assistance for Sarjapur Road, Bangalore, with deep practice in coordinated family and group visa applications.",
                        "url": "https://smotvisa.com/visa-agents-in-sarjapur-road",
                        "telephone": bangaloreOffice.phone[0],
                        "email": bangaloreOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": bangaloreOffice.address,
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Sarjapur Road, Bangalore" },
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
                        "serviceType": "Family and Group Visa Assistance",
                        "provider": { "@id": "https://smotvisa.com/visa-agents-in-sarjapur-road" },
                        "areaServed": { "@type": "Place", "name": "Sarjapur Road, Bangalore" },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Visa Assistance Services",
                            "itemListElement": ["Schengen", "United Kingdom", ...eVisaDestinations].map(d => ({
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
                            { "@type": "ListItem", "position": 3, "name": "Sarjapur Road", "item": "https://smotvisa.com/visa-agents-in-sarjapur-road" }
                        ]
                    }} />
                </>
            )}

            <PageHeader
                title="Visa Agents in Sarjapur Road, Bangalore"
                description="Deep practice in family files, where one weak application can hold up an entire trip."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "Sarjapur Road" }
                ]}
            />

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                        <Star className="h-4 w-4 text-secondary fill-secondary" />
                        <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Tourist &amp; Business Visas</span>
                    </div>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        When Sarjapur Road travels, it usually travels as a family: two working parents, children, and often
                        grandparents, all needing visas approved for the same school-holiday window. Group applications are a
                        different visa discipline from individual ones, and they&rsquo;re SmotVisa&rsquo;s specialty on this
                        corridor. We&rsquo;re a Bangalore visa consultancy for tourist and business visas, with deep practice
                        in family files where one weak application can hold up an entire trip.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <Users className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                A Family File Is One Story, Told Several Times
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            Consulates read a family&rsquo;s applications as a set, and inconsistencies between them are what
                            cause trouble: itineraries that don&rsquo;t match because they were booked separately, a child
                            missing a school NOC, a grandparent whose insurance doesn&rsquo;t meet the age-specific minimum, a
                            consent letter nobody knew was required for a parent travelling alone with children.
                        </p>

                        <div className="p-8 bg-card rounded-[2.5rem] border border-border shadow-card">
                            <p className="font-body text-muted-foreground leading-relaxed">
                                Our method removes that risk: one coordinated project per family. Each member gets an
                                individual checklist, cross-checked against the others. Children&rsquo;s documents, school
                                NOCs, birth certificates, notarised consent letters, are handled in full. Grandparents&rsquo;
                                pension income and age-appropriate insurance are documented properly. Biometric appointments
                                are booked together so the family makes one trip to the centre, and a single consultant tracks
                                every passport until all of them are home.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-3">
                        <CalendarDays className="h-7 w-7 text-secondary" />
                        <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                            Timed to the School Calendar
                        </h2>
                    </div>

                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        Family travel follows the school year: summer vacation, Dasara break, December holidays, and consulate
                        appointment availability tightens before every one of them. Our standing advice for family Schengen
                        and UK applications is to start 6 to 8 weeks ahead, earlier for summer. Tell us your school&rsquo;s
                        holiday dates and we&rsquo;ll work the timeline backward for you, including buffer for any consulate
                        queries.
                    </p>

                    <div className="p-8 bg-card rounded-[2.5rem] border border-border shadow-card space-y-4">
                        <div className="flex items-center gap-3">
                            <Plane className="h-6 w-6 text-secondary" />
                            <h3 className="text-xl font-display font-bold text-foreground">
                                For quick getaways between breaks
                            </h3>
                        </div>
                        <p className="font-body text-muted-foreground leading-relaxed">
                            We process Dubai, Thailand, Vietnam, Malaysia and Sri Lanka e-visas online within days. And for the
                            corridor&rsquo;s working professionals, we prepare complete business visa files, invitation
                            letters, employer letters, financials and itineraries, with same-day document turnaround.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            {eVisaDestinations.map((d, i) => (
                                <span key={i} className="px-4 py-2 bg-secondary/10 rounded-full text-xs font-display font-bold text-secondary">
                                    {d}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-secondary/5 to-background border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h2 className="text-3xl font-display font-bold text-foreground">Plan Your Family Trip</h2>

                        <div className="p-6 bg-card rounded-[2rem] border border-border space-y-3">
                            <p className="font-body text-muted-foreground">
                                Start with our{" "}
                                <Link href="/visa/schengen-visa-consultant" className="text-secondary font-bold hover:underline">Schengen Visa</Link>,{" "}
                                <Link href="/visa/uae-visa-consultant" className="text-secondary font-bold hover:underline">Dubai Visa</Link>{" "}and{" "}
                                <Link href="/visa/australia-visa-consultant" className="text-secondary font-bold hover:underline">Australia Visa</Link>{" "}
                                pages.
                            </p>
                        </div>

                        <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                            <h3 className="font-display font-bold text-foreground">Also serving</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { label: "Bellandur", href: "/visa-agents-in-bellandur" },
                                    { label: "HSR Layout", href: "/visa-agents-in-hsr-layout" },
                                    { label: "Whitefield", href: "/visa-agents-in-whitefield" }
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
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                        Visa Agents in Sarjapur Road, Bangalore
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
