import PageHeader from "@/components/ui/PageHeader";
import { Star, ArrowRight, FileSearch, Clock, RotateCcw, Info } from "lucide-react";
import Link from "next/link";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Agents in Bellandur Bangalore | SmotVisa",
    description: "SmotVisa prepares complete visa application for Bellandur Area,  Schengen, USA, UK, Singapore & more, with same-day document review and appointment booking.",
    keywords: [
        "visa agents in Bellandur",
        "visa agents in Bellandur Bangalore",
        "Bellandur visa consultants",
        "same day document review Bangalore",
        "visa refusal reapplication Bangalore",
        "business visa Bellandur",
        "SmotVisa Bellandur"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agents-in-bellandur",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Visa Agents in Bellandur Bangalore | SmotVisa",
        description: "Complete tourist and business visa assistance for Bellandur: Schengen, USA, UK, Singapore and more, with same-day document review and appointment booking.",
        url: "https://smotvisa.com/visa-agents-in-bellandur",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Bellandur Bangalore | SmotVisa",
        description: "Complete visa assistance for Bellandur with same-day document review and appointment booking.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const destinations = ["Schengen Countries", "UK", "USA", "Canada", "Australia", "Japan", "Singapore"];
const eVisaDestinations = ["Dubai", "Thailand", "Vietnam", "Malaysia", "Sri Lanka"];

export default function VisaServicesInBellandur() {
    const bangaloreOffice = offices.find(o => o.id === "cv-raman-nagar-bangalore");

    return (
        <main className="bg-background">
            {bangaloreOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agents-in-bellandur",
                        "name": "SmotVisa Bellandur",
                        "description": "SmotVisa provides complete tourist and business visa assistance for Bellandur, Bangalore, with same-day document review, pre-submission file checks, appointment booking and tracking until decision.",
                        "url": "https://smotvisa.com/visa-agents-in-bellandur",
                        "telephone": bangaloreOffice.phone[0],
                        "email": bangaloreOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": bangaloreOffice.address,
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Bellandur, Bangalore" },
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
                        "provider": { "@id": "https://smotvisa.com/visa-agents-in-bellandur" },
                        "areaServed": { "@type": "Place", "name": "Bellandur, Bangalore" },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Visa Assistance Services",
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
                            { "@type": "ListItem", "position": 3, "name": "Bellandur", "item": "https://smotvisa.com/visa-agents-in-bellandur" }
                        ]
                    }} />
                </>
            )}

            <PageHeader
                title="Visa Agents in Bellandur, Bangalore"
                description="Every document you share is reviewed the same day, with a clear, itemised response about what's ready and what isn't."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "Bellandur" }
                ]}
            />

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                        <Star className="h-4 w-4 text-secondary fill-secondary" />
                        <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Tourist &amp; Business Visas</span>
                    </div>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        We&rsquo;re a Bangalore visa consultancy providing complete tourist and business visa assistance, with
                        a core promise our Bellandur clients rely on: every document you share is reviewed the same day, with a
                        clear, itemised response about what&rsquo;s ready and what isn&rsquo;t.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <FileSearch className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                The Review That Decides Your Application
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            Most major visa applications, Schengen, UK, Canada, Australia, are decided entirely on paper. Your
                            file never gets to explain itself, so it has to be right before it&rsquo;s submitted. Our
                            pre-submission review reads your file the way a visa officer will: bank statements checked against
                            your itinerary&rsquo;s cost, leave letter dates checked against tickets, form entries checked
                            against every annexure, insurance checked against destination rules, and your cover letter checked
                            for whether it actually explains the trip.
                        </p>

                        <div className="p-8 bg-card rounded-[2.5rem] border border-border shadow-card">
                            <p className="font-body text-muted-foreground leading-relaxed">
                                You get back an itemised list, same day: what&rsquo;s missing, what&rsquo;s weak, what needs
                                explaining. Fixing a file before submission takes days; recovering from a refusal takes months.
                                The review is where our service earns its fee.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center gap-3">
                        <Clock className="h-7 w-7 text-secondary" />
                        <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                            Built for Bellandur&rsquo;s Working Hours
                        </h2>
                    </div>

                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        Documents move over WhatsApp and email at whatever hour you find them. Calls happen early morning or
                        post-dinner for teams synced to US and Europe time zones. Business travellers get complete files,
                        invitation letters, employer covering letters, financials, itineraries, formatted to each
                        consulate&rsquo;s requirements, with the letter formats supplied to your HR so nothing stalls. Couples
                        applying together get one coordinated checklist and back-to-back biometric slots, booked by us for the
                        time that costs you the least.
                    </p>

                    <h3 className="text-xl font-display font-bold text-foreground">Destination coverage is complete</h3>
                    <div className="flex flex-wrap gap-3">
                        {destinations.map((d, i) => (
                            <span key={i} className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-display font-bold text-foreground hover:border-secondary transition-colors">
                                {d}
                            </span>
                        ))}
                    </div>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                        <h4 className="font-display font-bold text-foreground">And same-week e-visas for</h4>
                        <div className="flex flex-wrap gap-3">
                            {eVisaDestinations.map((d, i) => (
                                <span key={i} className="px-4 py-2 bg-secondary/10 rounded-full text-xs font-display font-bold text-secondary">
                                    {d}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-[2rem] border border-border">
                        <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shrink-0">
                            <Info className="h-6 w-6 text-secondary" />
                        </div>
                        <p className="font-body text-muted-foreground leading-relaxed">
                            Tourist and business travel only: SmotVisa has no immigration, PR or work permit services.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-secondary/5 to-background border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex items-center gap-3">
                            <RotateCcw className="h-7 w-7 text-secondary" />
                            <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                Refused Before? Bring Us the Letter.
                            </h2>
                        </div>

                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                            If a previous application was refused, anywhere, by anyone, bring us the refusal letter. We
                            identify the actual issue, financial documentation, purpose clarity, form errors, rebuild the
                            application to address it, and time the reapplication properly. Reapplying blind is how one
                            refusal becomes two; reapplying with the problem fixed is how it becomes an approval.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl font-display font-bold text-foreground">Explore More from SmotVisa</h2>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-3">
                        <p className="font-body text-muted-foreground">
                            Check our{" "}
                            <Link href="/visa/schengen-visa-consultant" className="text-secondary font-bold hover:underline">Schengen Visa</Link>{" "}
                            page, and current{" "}
                            <Link href="/blog/country-wise-tourist-visa-fees-processing-time-comparison" className="text-secondary font-bold hover:underline">visa processing times</Link>{" "}
                            before locking dates.
                        </p>
                    </div>

                    <div className="p-6 bg-card rounded-[2rem] border border-border space-y-4">
                        <h3 className="font-display font-bold text-foreground">We also serve</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "HSR Layout", href: "/visa-agents-in-hsr-layout" },
                                { label: "Sarjapur Road", href: "/visa-agents-in-sarjapur-road" },
                                { label: "Marathahalli", href: "/visa-agents-in-marathahalli" }
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
                        Visa Agents in Bellandur, Bangalore
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
