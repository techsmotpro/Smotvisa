import { ArrowRight, CheckCircle2, Users, Clock, Globe, ChevronRight, MapPin, Plane, Star, Ticket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { tourPackagesData, popularRoutes, travelTips } from "@/data/tourPackagesData";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import CountryFlag from "@/components/ui/CountryFlag";
import JsonLd from "@/components/ui/JsonLd";
import VisaSidebarForm from "@/components/visa/VisaSidebarForm";
import { Metadata } from 'next';

const faqs = [
    { question: "Do your packages include visa assistance?", answer: "Yes. Visa support is part of our packages — it's our core specialty." },
    { question: "Can I customise my itinerary?", answer: "Absolutely. Every package can be fully tailored to your interests, pace and budget." },
    { question: "Do you handle group and family tours?", answer: "Yes, we specialise in family, friends and corporate group travel with dedicated support." },
    { question: "What's included in a typical package?", answer: "Flights, hotels, transfers, sightseeing, visa assistance and travel insurance, tailored to you." },
    { question: "Which destinations do you cover?", answer: "Destinations across the globe, with popular tours to Dubai, Europe, Singapore, Thailand and Malaysia." },
    { question: "Can you arrange luxury or premium travel?", answer: "Yes — business and first-class flights, five-star stays and private transfers are all available." },
    { question: "Do you offer honeymoon packages?", answer: "Yes, we design romantic, customised honeymoon itineraries." },
    { question: "How far in advance should I book?", answer: "The earlier the better for the best fares and visa timelines — we'll advise based on your destination." },
    { question: "Is travel insurance included?", answer: "Yes, we include or arrange appropriate travel insurance for your trip." },
    { question: "What support do I get during the trip?", answer: "Our team provides 24/7 support before and during your journey across time zones." }
];

export const metadata: Metadata = {
    title: "International Tour Packages from India | SmotVisa",
    description: "Plan your perfect trip with Smotvisa's international tour packages, flights, hotels, sightseeing & visa assistance in one. Custom & group itineraries.",
    keywords: ["international tour packages from India", "custom holiday packages", "Dubai tour package", "Europe tour package", "family tour packages", "honeymoon packages"],
    alternates: { canonical: "https://smotvisa.com/services/tours" },
    robots: { index: true, follow: true },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "International Tour Packages from India | SmotVisa",
        description: "Plan your perfect trip with Smotvisa's international tour packages, flights, hotels, sightseeing & visa assistance in one. Custom & group itineraries.",
        url: "https://smotvisa.com/services/tours",
        siteName: "SmotVisa",
        images: ["/images/australia-tour.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "International Tour Packages from India | SmotVisa",
        description: "Plan your perfect trip with Smotvisa's international tour packages, flights, hotels, sightseeing & visa assistance in one. Custom & group itineraries.",
        images: ["/images/australia-tour.webp"],
    }
};

const whyChoose = [
    { icon: Globe, title: "Everything in one place", desc: "Flights, hotels, transfers, sightseeing and visa together." },
    { icon: MapPin, title: "Custom itineraries", desc: "Built around your interests, budget and travel pace." },
    { icon: CheckCircle2, title: "Visa assistance included", desc: "Our core strength, baked into every package." },
    { icon: Users, title: "Group & family specialists", desc: "Smooth logistics and great rates for larger parties." },
    { icon: Plane, title: "Premium options", desc: "Luxury stays, business-class flights and private transfers." },
    { icon: Clock, title: "24/7 support", desc: "Help before and during your trip, across time zones." },
];

const included = [
    "Return flights on major airlines",
    "Handpicked hotels and accommodation",
    "Airport transfers and local transport",
    "Guided sightseeing and curated experiences",
    "Visa assistance and travel insurance",
    "Dedicated trip support throughout",
];

const steps = [
    { step: "01", title: "Share your dream trip", desc: "Destination, dates, budget and who's travelling." },
    { step: "02", title: "We design the itinerary", desc: "A tailored plan with flights, stays and experiences." },
    { step: "03", title: "Refine together", desc: "We adjust until it's exactly right." },
    { step: "04", title: "We handle the visa", desc: "Documentation and application managed alongside." },
    { step: "05", title: "Travel with confidence", desc: "With 24/7 support throughout your journey." },
];


export default function TourPackagesPage() {
    return (
        <main className="min-h-screen bg-background pb-12">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
            }} />

            <PageHeader
                title="International Tour Packages"
                description="Your Whole Trip, Planned by One Team. Flights, hotels, sightseeing and the visa — SmotVisa wraps it all into one seamless package."
                breadcrumbs={[{ label: "Tours & Packages" }]}
                bgImage="/images/flight-hero.webp"
            />

            {/* Intro */}
            <section className="py-12 bg-background">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-5">
                            A great holiday should feel effortless from the first enquiry to the flight home. Instead of stitching together flights, hotels, local tours and a visa from different providers, SmotVisa handles the whole thing — handpicked itineraries across the globe, combining competitive flights, comfortable stays, guided sightseeing and the visa assistance we&apos;re known for.
                        </p>
                        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                            Whether it&apos;s a honeymoon in Europe, a family holiday in Dubai, or a corporate group tour, we tailor every detail to your budget and pace.
                        </p>
                        <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-sm font-display font-bold text-foreground bg-muted/50 border border-border rounded-2xl px-6 py-4">
                            <span>Dreaming of a getaway? Let&apos;s design your perfect trip.</span>
                            <span className="hidden sm:block text-border">|</span>
                            <a href="tel:+918904008843" className="text-secondary hover:underline">+91-8904008843</a>
                            <span className="hidden sm:block text-border">•</span>
                            <a href="mailto:info@smotvisa.com" className="text-secondary hover:underline">info@smotvisa.com</a>
                        </div>
                    </MotionDiv>
                </div>
            </section>

            {/* Popular Destinations */}
            <section className="py-12 bg-muted/20 border-y border-border">
                <div className="container mx-auto px-4 max-w-4xl">
                    <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                        <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Where We Go</span>
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Popular Destinations</h2>
                        <p className="text-sm font-body text-foreground/70 mt-2 leading-relaxed">We build tours across the globe, with especially popular itineraries to Dubai, Europe's Schengen countries, Singapore, Thailand, Malaysia and beyond. Whatever the destination, we shape the trip around you — from fast-paced sightseeing to relaxed leisure travel.</p>
                    </MotionDiv>
                    <div className="flex flex-wrap gap-3 mt-6">
                        {["Dubai & UAE", "Europe (Schengen)", "Singapore", "Thailand", "Malaysia", "Australia", "Canada", "United Kingdom", "United States", "& more"].map((dest) => (
                            <span key={dest} className="inline-flex items-center px-4 py-2 bg-white border border-border rounded-full text-sm font-body font-semibold text-foreground shadow-sm">
                                {dest}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tour Packages Grid */}
            <section className="py-12 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1.5 h-8 bg-secondary rounded-full" />
                        <h2 className="text-3xl font-display font-bold text-foreground">Featured International Packages</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tourPackagesData.map((pkg, idx) => (
                            <MotionDiv
                                key={pkg.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                        <CountryFlag emoji={pkg.flag} className="text-lg" />
                                        <span className="text-sm font-display font-bold text-foreground">{pkg.destination}</span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl font-display font-bold shadow-gold transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {pkg.price}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-display font-bold text-foreground leading-tight">{pkg.name}</h3>
                                        <div className="flex items-center gap-1 text-secondary">
                                            <Star className="h-4 w-4 fill-current" />
                                            <span className="text-sm font-display font-bold">4.9</span>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 line-clamp-2 italic">
                                        {pkg.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-3 mb-5">
                                        <div className="flex items-center gap-2 text-xs font-display font-bold text-foreground/80 uppercase tracking-wide bg-secondary/10 p-2.5 rounded-xl border border-border/50">
                                            <Clock className="h-4 w-4 text-secondary" />
                                            {pkg.duration}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-display font-bold text-foreground/80 uppercase tracking-wide bg-secondary/10 p-2.5 rounded-xl border border-border/50">
                                            <Users className="h-4 w-4 text-secondary" />
                                            {pkg.groupSize}
                                        </div>
                                    </div>
                                    <Link href="/contact">
                                        <button className="w-full py-3 bg-muted hover:bg-secondary hover:text-secondary-foreground transition-all rounded-xl font-display font-bold text-foreground flex items-center justify-center gap-2 group/btn">
                                            Book this Experience <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form with Cover */}
            <section className="relative overflow-hidden">
                <div className="relative min-h-[420px] flex items-center">
                    <Image src="/images/australia-bondi.webp" alt="Plan your international trip with SmotVisa" fill className="object-cover object-center" sizes="100vw" />
                    <div className="absolute inset-0 bg-primary/80" />
                    <div className="relative z-10 w-full container mx-auto px-4 py-14">
                        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                            <div>
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Free Consultation</span>
                                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3 mb-4 leading-snug">Let's Plan Your Perfect International Trip</h2>
                                <p className="text-sm font-body text-white/70 leading-relaxed mb-6">Flights, hotels, sightseeing and visa — all in one place. Share your travel dream and we'll take care of the rest.</p>
                                <ul className="space-y-2">
                                    {["Custom itineraries for every budget", "Visa assistance included in every package", "Group, family & honeymoon specialists", "24/7 support before and during your trip"].map((it) => (
                                        <li key={it} className="flex items-center gap-3 text-sm font-body text-white/80">
                                            <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <VisaSidebarForm visaName="International Tour Package" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5">
                <div className="container mx-auto px-4">
                    <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Why Choose SmotVisa Tour Packages</h2>
                    </MotionDiv>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {whyChoose.map((item, idx) => (
                            <MotionDiv
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-card rounded-2xl shadow-card border-l-4 border-secondary/50 border-r border-y border-border p-6 hover:shadow-elevated transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                                    <item.icon className="h-6 w-6 text-secondary" />
                                </div>
                                <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                                <p className="text-muted-foreground font-body text-sm leading-relaxed italic">{item.desc}</p>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-14 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">What Our Packages Include</h2>
                    </MotionDiv>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {included.map((item, idx) => (
                            <MotionDiv
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.07 }}
                                className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-sm hover:border-secondary/40 transition-colors"
                            >
                                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                                <span className="font-body font-semibold text-foreground text-sm">{item}</span>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flight Routes */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid-black" />
                <div className="container mx-auto px-4 relative z-10">
                    <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-card rounded-full shadow-sm mb-4 border border-border">
                            <Plane className="h-4 w-4 text-secondary" />
                            <span className="text-sm font-display font-bold text-secondary tracking-widest uppercase">Flight + Tour Combinations</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Fly with Comfort, Travel with Joy</h2>
                        <p className="text-muted-foreground font-body max-w-2xl mx-auto italic">
                            Competitive pricing and flexible travel dates across popular routes.
                        </p>
                    </MotionDiv>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {popularRoutes.map((route, idx) => (
                            <MotionDiv
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-secondary/30 transition-all text-center group"
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <div className="text-xs font-display font-bold text-muted-foreground tracking-widest uppercase">From {route.from}</div>
                                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-500">
                                        <Plane className="h-5 w-5 text-secondary group-hover:text-secondary-foreground rotate-45" />
                                    </div>
                                    <div className="text-lg font-display font-bold text-foreground">To {route.to}</div>
                                    <div className="px-3 py-1 bg-muted rounded-full text-[10px] font-display font-bold text-muted-foreground border border-border">
                                        {route.duration}
                                    </div>
                                </div>
                            </MotionDiv>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/services/air-ticketing" className="inline-flex items-center gap-2 text-secondary font-display font-bold hover:underline tracking-widest uppercase group">
                            Explore All Flight Options <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-14 bg-background">
                <div className="container mx-auto px-4">
                    <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">How It Works</h2>
                    </MotionDiv>
                    <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
                        {steps.map((s, idx) => (
                            <MotionDiv
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-card rounded-2xl shadow-card border-t-4 border-secondary/50 border-x border-b border-border p-5 text-center hover:translate-y-[-4px] transition-transform"
                            >
                                <div className="text-2xl font-display font-bold text-secondary mb-2">{s.step}</div>
                                <h3 className="text-sm font-display font-bold text-foreground mb-1">{s.title}</h3>
                                <p className="text-xs font-body text-muted-foreground leading-relaxed">{s.desc}</p>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel Tips */}
            <section className="py-14">
                <div className="container mx-auto px-4">
                    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                            <Star className="w-48 h-48 text-secondary" />
                        </div>
                        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
                            <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-3">Travel Smart with SmotVisa</h2>
                            <p className="text-muted-foreground font-body text-lg max-w-2xl mb-8 italic border-l-4 border-secondary pl-6">
                                Expert advice to ensure your international journey is seamless and stress-free.
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {travelTips.map((tip, idx) => (
                                    <div key={idx} className="flex flex-col gap-3 p-5 bg-muted/20 rounded-2xl border border-border/50 hover:bg-background transition-all">
                                        <div className="w-9 h-9 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-display font-bold shadow-gold text-sm">
                                            {idx + 1}
                                        </div>
                                        <p className="text-sm font-body font-bold text-foreground/80 leading-relaxed italic">{tip}</p>
                                    </div>
                                ))}
                            </div>
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5">
                <div className="container mx-auto px-4">
                    <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-3">
                            {faqs.map((faq, idx) => (
                                <MotionDiv
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-card rounded-xl border-l-4 border-secondary/50 border-r border-y border-border overflow-hidden shadow-sm"
                                >
                                    <details className="group">
                                        <summary className="cursor-pointer flex items-center justify-between px-6 py-4 list-none">
                                            <span className="text-base font-display font-bold text-foreground pr-6">{faq.question}</span>
                                            <div className="shrink-0 w-7 h-7 rounded-full bg-muted flex items-center justify-center group-open:bg-secondary transition-colors">
                                                <ChevronRight className="h-4 w-4 text-foreground group-open:text-secondary-foreground transition-transform duration-300 group-open:rotate-90" />
                                            </div>
                                        </summary>
                                        <div className="px-6 pb-4 text-sm font-body text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                                            {faq.answer}
                                        </div>
                                    </details>
                                </MotionDiv>
                            ))}
                        </div>
                    </MotionDiv>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-10 bg-background">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-xl font-display font-bold text-foreground mb-2">Explore More Services</h2>
                    <p className="text-muted-foreground font-body text-sm mb-6">Everything you need for a complete trip — in one place.</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { label: "Air Ticketing", href: "/services/air-ticketing" },
                            { label: "UAE / Dubai Visa", href: "/visa/uae-visa-consultant" },
                            { label: "Schengen Visa", href: "/visa/schengen-visa-consultant" },
                            { label: "All Travel Services", href: "/services" },
                            { label: "Contact Us", href: "/contact" },
                        ].map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full font-display font-bold text-sm text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all shadow-sm"
                            >
                                {link.label} <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-8 container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary px-6 py-8 rounded-2xl shadow-elevated relative overflow-hidden text-center border border-white/10"
                >
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-xl md:text-2xl font-display font-bold text-primary-foreground mb-3">
                            Ready to plan your trip?
                        </h2>
                        <p className="text-sm text-primary-foreground/70 font-body mb-5">
                            Talk to us today — we'll design your perfect itinerary from start to finish.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-secondary text-secondary-foreground font-display font-bold text-sm rounded-lg hover:opacity-90 transition-all group">
                                Plan My Trip <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a href="tel:+918904008843" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-white/20 text-white font-display font-bold text-sm rounded-lg hover:bg-white/10 transition-all">
                                Call +91-8904008843
                            </a>
                        </div>
                    </div>
                </MotionDiv>
            </section>
        </main>
    );
}
