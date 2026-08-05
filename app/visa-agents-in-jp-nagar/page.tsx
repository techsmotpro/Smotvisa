import PageHeader from "@/components/ui/PageHeader";
import { Star, ArrowRight, ClipboardCheck, Users, Globe2 } from "lucide-react";
import Link from "next/link";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Agents in JP Nagar Bangalore | SmotVisa",
    description: "The VFS centre is minutes away but VFS only collects documents. SmotVisa prepares your complete file: Schengen, USA, UK & Canada visas. Free consultation.",
    keywords: [
        "visa agents in JP Nagar",
        "visa agents in JP Nagar Bangalore",
        "JP Nagar visa consultants",
        "VFS Global JP Nagar",
        "parent visitor visa JP Nagar",
        "document review before VFS appointment",
        "SmotVisa JP Nagar"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agents-in-jp-nagar",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Visa Agents in JP Nagar Bangalore | SmotVisa",
        description: "VFS collects documents; it doesn't prepare them. SmotVisa prepares your complete file for Schengen, USA, UK and Canada visas.",
        url: "https://smotvisa.com/visa-agents-in-jp-nagar",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in JP Nagar Bangalore | SmotVisa",
        description: "VFS collects documents; it doesn't prepare them. SmotVisa prepares your complete file.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const destinations = ["Schengen Countries", "UK", "USA", "Canada", "Australia", "Japan", "Singapore", "UAE & Dubai"];
const eVisaDestinations = ["Thailand", "Vietnam", "Malaysia", "Sri Lanka", "Turkey"];

export default function VisaServicesInJPNagar() {
    const bangaloreOffice = offices.find(o => o.id === "cv-raman-nagar-bangalore");

    return (
        <main className="bg-background">
            {bangaloreOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agents-in-jp-nagar",
                        "name": "SmotVisa JP Nagar",
                        "description": "SmotVisa provides complete tourist and business visa preparation for JP Nagar, Bangalore: document review, cover letters, form verification, VFS appointment booking and parent visitor visa coordination.",
                        "url": "https://smotvisa.com/visa-agents-in-jp-nagar",
                        "telephone": bangaloreOffice.phone[0],
                        "email": bangaloreOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": bangaloreOffice.address,
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "JP Nagar, Bangalore" },
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
                        "serviceType": "Tourist and Business Visa Preparation",
                        "provider": { "@id": "https://smotvisa.com/visa-agents-in-jp-nagar" },
                        "areaServed": { "@type": "Place", "name": "JP Nagar, Bangalore" },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Visa Preparation Services",
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
                            { "@type": "ListItem", "position": 3, "name": "JP Nagar", "item": "https://smotvisa.com/visa-agents-in-jp-nagar" }
                        ]
                    }} />
                </>
            )}

            <PageHeader
                title="Visa Agents in JP Nagar, Bangalore"
                description="VFS collects documents; it doesn't prepare them. SmotVisa does."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "JP Nagar" }
                ]}
            />

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                        <Star className="h-4 w-4 text-secondary fill-secondary" />
                        <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Tourist &amp; Business Visas</span>
                    </div>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        JP Nagar residents have the VFS Global centre at Gopalan Innovation Mall practically next door, which
                        makes biometrics day a short errand instead of a crosstown expedition. But here&rsquo;s what we explain
                        to applicants every week: proximity to the centre is worth nothing if the file you carry in is weak.
                        VFS collects documents; it doesn&rsquo;t prepare them. SmotVisa does. We&rsquo;re a Bangalore visa
                        consultancy providing complete tourist and business visa preparation, so your location advantage
                        actually translates into an approval.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <ClipboardCheck className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                What Happens Before the Centre Visit Is Everything
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            By the time you reach the VFS counter, your application&rsquo;s fate is largely sealed: the file is
                            either complete, consistent and persuasive, or it isn&rsquo;t. Our work happens in that critical
                            before stage. We confirm the right visa category and consulate route, build a checklist specific to
                            your destination and profile, review and cross-verify every document, fill and check your forms,
                            draft a cover letter that addresses what officers actually look for, arrange compliant travel
                            insurance, and book your VFS appointment for a convenient slot. You walk in prepared; your file
                            goes onward decision-ready.
                        </p>

                        <div className="p-8 bg-card rounded-[2.5rem] border border-border shadow-card">
                            <p className="font-body text-muted-foreground leading-relaxed">
                                If you&rsquo;ve already booked your own appointment, our preparation services work standalone
                                too: many JP Nagar clients come to us purely for document review and cover letters before a
                                centre visit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-3">
                        <Users className="h-7 w-7 text-secondary" />
                        <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                            Parent Visitor Visas: A JP Nagar Staple
                        </h2>
                    </div>

                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        Many JP Nagar families have children settled in the US, UK, Canada and Australia, and parent visitor
                        visas are among our most requested services here. We coordinate the sponsorship of half of the file
                        directly with your family abroad, telling them exactly which documents to send and in what format,
                        while preparing the India-side file patiently with parents over phone and WhatsApp. US applicants get
                        dedicated interview preparation; UK, Canada and Australia files are built to succeed on paper, where no
                        interview exists to clarify anything. Senior travellers also get practical support: pension income
                        presented correctly, age-appropriate insurance, and thoughtfully scheduled appointments.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-secondary/5 to-background border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <Globe2 className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                The Full Service for Every Trip
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            Tourist and business visas for the Schengen countries, UK, USA, Canada, Australia, Japan,
                            Singapore, UAE and Dubai, plus fast e-visas for Thailand, Vietnam, Malaysia, Sri Lanka and Turkey.
                            Business travellers get complete documentation: invitation letters, company covering letters,
                            financials and itineraries to consulate standards.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {destinations.map((d, i) => (
                                <span key={i} className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-display font-bold text-foreground hover:border-secondary transition-colors">
                                    {d}
                                </span>
                            ))}
                        </div>

                        <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                            <h3 className="font-display font-bold text-foreground">Plus fast e-visas for</h3>
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
                    <h2 className="text-3xl font-display font-bold text-foreground">Before Your VFS Visit</h2>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-3">
                        <p className="font-body text-muted-foreground">
                            Read our{" "}
                            <Link href="/visa/schengen-visa-consultant" className="text-secondary font-bold hover:underline">Schengen Visa</Link>,{" "}
                            <Link href="/visa/us-visa-consultant" className="text-secondary font-bold hover:underline">USA Visa</Link>{" "}and{" "}
                            <Link href="/visa/canada-visa-consultant" className="text-secondary font-bold hover:underline">Canada Visitor Visa</Link>{" "}
                            guides.
                        </p>
                    </div>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                        <h3 className="font-display font-bold text-foreground">We also serve neighbouring</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "Jayanagar", href: "/visa-agents-in-jayanagar" },
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
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                        Visa Agents in JP Nagar, Bangalore
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
