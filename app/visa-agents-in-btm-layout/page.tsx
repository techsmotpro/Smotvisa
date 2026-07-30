import PageHeader from "@/components/ui/PageHeader";
import { Star, ArrowRight, Receipt, TrendingUp, Info } from "lucide-react";
import Link from "next/link";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Agents in BTM Layout Bangalore | SmotVisa",
    description: "SmotVisa in BTM Layout, affordable visa assistance. Thailand, Vietnam & Dubai e-visas in days; transparent fees, no surprises.",
    keywords: [
        "visa agents in BTM Layout",
        "visa agents in BTM Layout Bangalore",
        "BTM Layout visa consultants",
        "affordable visa assistance Bangalore",
        "Thailand e-visa BTM Layout",
        "transparent visa fees Bangalore",
        "SmotVisa BTM Layout"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agents-in-btm-layout",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Visa Agents in BTM Layout Bangalore | SmotVisa",
        description: "Affordable visa assistance in BTM Layout. Thailand, Vietnam and Dubai e-visas in days, with transparent fees and no surprises.",
        url: "https://smotvisa.com/visa-agents-in-btm-layout",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in BTM Layout Bangalore | SmotVisa",
        description: "Affordable visa assistance in BTM Layout. Transparent fees, no surprises.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const startingOut = [
    { name: "Thailand", note: "processed online and typically approved in days" },
    { name: "Vietnam", note: "processed online and typically approved in days" },
    { name: "Sri Lanka", note: "processed online and typically approved in days" },
    { name: "Malaysia", note: "processed online and typically approved in days" },
    { name: "Dubai", note: "about 3 to 5 working days, fully online" },
    { name: "Singapore", note: "a proper application with strong documentation, no interview" }
];

const aimingHigher = ["Schengen", "UK", "USA", "Australia", "Canada", "Japan"];

export default function VisaServicesInBTMLayout() {
    const bangaloreOffice = offices.find(o => o.id === "cv-raman-nagar-bangalore");

    return (
        <main className="bg-background">
            {bangaloreOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agents-in-btm-layout",
                        "name": "SmotVisa BTM Layout",
                        "description": "SmotVisa provides tourist and business visa assistance for BTM Layout, Bangalore at transparent, fair fees, from Southeast Asia e-visas to full Schengen files.",
                        "url": "https://smotvisa.com/visa-agents-in-btm-layout",
                        "telephone": bangaloreOffice.phone[0],
                        "email": bangaloreOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": bangaloreOffice.address,
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "BTM Layout, Bangalore" },
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
                        "provider": { "@type": "LocalBusiness", "name": "SmotVisa", "@id": "https://smotvisa.com/visa-agents-in-btm-layout" },
                        "areaServed": { "@type": "Place", "name": "BTM Layout, Bangalore" },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Visa Assistance Services",
                            "itemListElement": [...startingOut.map(d => d.name), ...aimingHigher].map(d => ({
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
                            { "@type": "ListItem", "position": 3, "name": "BTM Layout", "item": "https://smotvisa.com/visa-agents-in-btm-layout" }
                        ]
                    }} />
                </>
            )}

            <PageHeader
                title="Visa Agents in BTM Layout, Bangalore"
                description="Tourist and business visa assistance at transparent, fair fees, with the same careful preparation on a Thailand e-visa as on a full Schengen file."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "BTM Layout" }
                ]}
            />

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                        <Star className="h-4 w-4 text-secondary fill-secondary" />
                        <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Tourist &amp; Business Visas</span>
                    </div>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        BTM Layout in Bengaluru is the fastest growing market for traveling smart real plans on careful
                        budgets, usually starting with Southeast Asia and working up to the big Europe trip. SmotVisa matches
                        that approach. We&rsquo;re a Bangalore visa consultancy offering tourist and business visa assistance
                        at transparent, fair fees, with the same careful preparation on a Thailand e-visa as on a full Schengen
                        file.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <Receipt className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                Transparent Fees, Careful Work
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            Visa fees are non-refundable, so on a carefully budgeted trip, a rejected application doesn&rsquo;t
                            just cost the fee: it burns the flight deal, the leave approval and sometimes the whole plan. Most
                            rejections, especially on e-visas, come from small preventable errors: photos that fail
                            specifications, passport scans with glare, names typed differently from the passport, a form field
                            contradicting a document.
                        </p>

                        <div className="p-8 bg-card rounded-[2.5rem] border border-border shadow-card">
                            <p className="font-body text-muted-foreground leading-relaxed">
                                So we check everything before submission, on every application, however small. Our service fees
                                are quoted upfront, government charges are shown separately, and there are no surprise
                                add-ons: the quote you accept is the amount you pay.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-3">
                        <TrendingUp className="h-7 w-7 text-secondary" />
                        <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                            Every Rung of the Travel Ladder
                        </h2>
                    </div>

                    <h3 className="text-xl font-display font-bold text-foreground">Starting out?</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                        Thailand, Vietnam, Sri Lanka and Malaysia offer inexpensive e-visas, processed online and typically
                        approved in days: perfect first stamps. Dubai takes about 3 to 5 working days, fully online. Singapore
                        needs a proper application with strong documentation, no interview, and we prepare it completely.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {startingOut.map((d, i) => (
                            <div key={i} className="p-5 bg-card rounded-[2rem] border border-border shadow-sm">
                                <h4 className="font-display font-bold text-foreground mb-2">{d.name}</h4>
                                <p className="text-xs font-body text-muted-foreground italic leading-relaxed">{d.note}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-xl font-display font-bold text-foreground pt-4">Aiming higher?</h3>
                    <div className="flex flex-wrap gap-3">
                        {aimingHigher.map((d, i) => (
                            <span key={i} className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-display font-bold text-foreground hover:border-secondary transition-colors">
                                {d}
                            </span>
                        ))}
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed">
                        Schengen, UK, USA, Australia, Canada and Japan files get the full treatment: personalised checklist, bank statements and employment proof
                        presented properly, a cover letter that presents your profile honestly and well, compliant travel
                        insurance, verified forms, appointment booking and tracking until decision. Early-career applicants
                        often fear that a modest salary or a blank passport means automatic refusal: it doesn&rsquo;t. Officers
                        assess whether your finances support your specific trip, and a well-planned itinerary matched honestly
                        to your budget is exactly the file we build.
                    </p>

                    <p className="font-body text-muted-foreground leading-relaxed">
                        We also prepare business visa documentation for BTM&rsquo;s professionals travelling to conferences and
                        client meetings.
                    </p>

                    <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-[2rem] border border-border">
                        <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shrink-0">
                            <Info className="h-6 w-6 text-secondary" />
                        </div>
                        <p className="font-body text-muted-foreground leading-relaxed">
                            Tourist and business visas only: no work permits, PR or immigration services.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-secondary/5 to-background border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h2 className="text-3xl font-display font-bold text-foreground">Explore More from SmotVisa</h2>

                        <div className="p-6 bg-card rounded-[2rem] border border-border space-y-3">
                            <h3 className="font-display font-bold text-foreground">Budget-trip guides</h3>
                            <p className="font-body text-muted-foreground">
                                <Link href="/visa/uae-visa-consultant" className="text-secondary font-bold hover:underline">Dubai Visa</Link>.
                                {" "}Planning bigger? See{" "}
                                <Link href="/visa/schengen-visa-consultant" className="text-secondary font-bold hover:underline">Schengen Visa Assistance</Link>.
                            </p>
                        </div>

                        <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                            <h3 className="font-display font-bold text-foreground">We also serve</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { label: "HSR Layout", href: "/visa-agents-in-hsr-layout" },
                                    { label: "JP Nagar", href: "/visa-agents-in-jp-nagar" },
                                    { label: "Koramangala", href: "/visa-agents-in-koramangala" }
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
                        Visa Agents in BTM Layout, Bangalore
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
