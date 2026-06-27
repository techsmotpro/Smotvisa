import { ArrowRight, Plane, Users, Ticket, Clock, Shield, Globe, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import JsonLd from "@/components/ui/JsonLd";
import { Metadata } from 'next';

const faqs = [
    { question: "Do you book international flights?", answer: "Yes, we book both domestic and international flights across all major airlines." },
    { question: "Can you get better fares than booking online?", answer: "We have access to competitive fares and can often find good value, especially on complex or group itineraries." },
    { question: "Can I book a flight reservation for my visa?", answer: "Yes. We arrange confirmed flight reservations that meet embassy requirements for your visa application." },
    { question: "Do you offer group discounts?", answer: "Yes, we offer special rates for families, friends, corporate teams and educational groups." },
    { question: "Can I change or reschedule my ticket?", answer: "Yes, subject to the airline's fare rules. Our team helps you manage changes." },
    { question: "Do you book business and first class?", answer: "Yes, we book premium cabins along with lounge access and other add-ons where available." },
    { question: "How do I pay?", answer: "We share the fare and payment details once you confirm your itinerary. Pricing is transparent." },
    { question: "Can you handle multi-city trips?", answer: "Yes, we specialise in complex multi-city and round-the-world itineraries." },
    { question: "Do you book flights with hotels?", answer: "Yes, we can combine flights and hotels as part of a tour package." },
    { question: "What if my flight is cancelled by the airline?", answer: "We assist you with rebooking and coordinating with the airline for the best alternative." }
];

export const metadata: Metadata = {
    title: "Flight Booking & Air Ticketing in India | Best Fares Across Airline | SmotVisa",
    description: "Book domestic & international flights with SmotVisa. Best fares on all major airlines, group discounts & flexible booking. Pair with your visa.",
    keywords: ["flight booking and air ticketing India", "international flight booking", "domestic flight booking", "cheap air tickets", "group flight booking", "business class booking"],
    alternates: { canonical: "https://smotvisa.com/services/air-ticketing" },
    robots: { index: true, follow: true },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Flight Booking & Air Ticketing in India | Best Fares Across Airline | SmotVisa",
        description: "Book domestic & international flights with SmotVisa. Best fares on all major airlines, group discounts & flexible booking. Pair with your visa.",
        url: "https://smotvisa.com/services/air-ticketing",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flight Booking & Air Ticketing in India | Best Fares Across Airline | SmotVisa",
        description: "Book domestic & international flights with SmotVisa. Best fares on all major airlines, group discounts & flexible booking. Pair with your visa.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const whyBook = [
    { icon: Ticket, title: "Competitive prices", desc: "Access to attractive fares across all major airlines." },
    { icon: Plane, title: "All major airlines", desc: "Domestic and international carriers in one place." },
    { icon: Users, title: "Group discounts", desc: "Special rates for families, friends and corporate groups." },
    { icon: Clock, title: "Flexible booking", desc: "Support for changes, rescheduling and complex itineraries." },
    { icon: Shield, title: "Visa-ready reservations", desc: "Confirmed bookings aligned with your visa application." },
    { icon: Globe, title: "Real human support", desc: "A dedicated team, not just a booking engine." },
];

const whatWeBook = [
    "Domestic flights across India",
    "International flights to all popular destinations",
    "Round-trip, one-way and multi-city itineraries",
    "Group and corporate travel bookings",
    "Premium cabins — business and first class",
    "Flight reservations to support visa applications",
];

const steps = [
    { step: "01", title: "Tell us your trip", desc: "Destinations, dates and how many travellers." },
    { step: "02", title: "We find the best options", desc: "We compare fares and routes across airlines." },
    { step: "03", title: "You choose", desc: "Pick the option that fits your budget and schedule." },
    { step: "04", title: "We book & confirm", desc: "Your tickets are issued and confirmation shared." },
    { step: "05", title: "Ongoing support", desc: "We help with any changes before you fly." },
];

export default function AirTicketingPage() {
    return (
        <main className="bg-background">
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
                title="Airline Ticket Booking"
                description="Best Fares on Every Route, Domestic and International. One trusted partner for your visa and your flights — SmotVisa books competitive air tickets on all major airlines."
                breadcrumbs={[{ label: "Air Ticketing" }]}
                bgImage="/images/airport-tarmac-hero.webp"
            />

            {/* Intro */}
            <section className="py-12 bg-background">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-5">
                            Booking flights yourself can mean juggling fare fluctuations, confusing fare rules and add-on charges. SmotVisa gives you access to competitive fares across all major domestic and international airlines, plus the human support to handle changes, group bookings and complex multi-city itineraries.
                        </p>
                        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                            Best of all, when you&apos;re applying for a visa with us, we coordinate your flight reservations with your application — including the confirmed bookings that embassies expect to see — so everything lines up perfectly.
                        </p>
                        <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-sm font-display font-bold text-foreground bg-muted/50 border border-border rounded-2xl px-6 py-4">
                            <span>Looking for the best fare? Let&apos;s find it together.</span>
                            <span className="hidden sm:block text-border">|</span>
                            <a href="tel:+918904008843" className="text-secondary hover:underline">+91-8904008843</a>
                            <span className="hidden sm:block text-border">•</span>
                            <a href="mailto:info@smotvisa.com" className="text-secondary hover:underline">info@smotvisa.com</a>
                        </div>
                    </MotionDiv>
                </div>
            </section>

            {/* Why Book */}
            <section className="py-10 bg-muted/20 border-y border-border">
                <div className="container mx-auto px-4 max-w-4xl">
                    <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                        <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Why SmotVisa</span>
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Why Book Flights With SmotVisa</h2>
                    </MotionDiv>
                    <div className="grid md:grid-cols-2 gap-3">
                        {whyBook.map((item, idx) => (
                            <MotionDiv key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                                className="flex items-start gap-4 p-4 rounded-lg bg-white border border-border/50">
                                <item.icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="text-sm font-display font-bold text-foreground mb-0.5">{item.title}</h3>
                                    <p className="text-sm font-body text-foreground/70 leading-relaxed">{item.desc}</p>
                                </div>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* Airport lounge image */}
            <div className="w-full h-56 sm:h-72 overflow-hidden border-y border-border">
                <img src="/images/airport-lounge.webp" alt="Passengers waiting in modern airport departure lounge" width={900} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>

            {/* What We Book */}
            <section className="py-14 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">What We Book</h2>
                    </MotionDiv>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {whatWeBook.map((item, idx) => (
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

            {/* Airport boarding image */}
            <div className="w-full h-56 sm:h-72 overflow-hidden border-y border-border">
                <img src="/images/airport-boarding.webp" alt="Passengers boarding flight on tarmac" width={900} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>

            {/* How It Works */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5">
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

            {/* FAQ */}
            <section className="py-14 bg-background">
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
            <section className="py-10 bg-gradient-to-b from-background to-secondary/5">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-xl font-display font-bold text-foreground mb-2">Explore More Services</h2>
                    <p className="text-muted-foreground font-body text-sm mb-6">Pair your flight with a visa or a full tour package.</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { label: "International Tour Packages", href: "/services/tours" },
                            { label: "UAE / Dubai Visa", href: "/visa/uae-visa-consultant" },
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
            <section className="py-12 relative overflow-hidden bg-primary text-primary-foreground">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">
                            Pair Your Visa with the Right Flight
                        </h3>
                        <p className="text-lg font-body text-primary-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Ask SmotVisa for a fare today — we&apos;ll find you the best option and make sure your booking is visa-ready.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold rounded-full hover:shadow-gold transition-all"
                            >
                                Get a Fare Quote <ArrowRight className="h-5 w-5" />
                            </Link>
                            <a
                                href="tel:+918904008843"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-body font-bold rounded-full hover:bg-white/10 transition-all"
                            >
                                Call / WhatsApp +91-8904008843
                            </a>
                        </div>
                    </MotionDiv>
                </div>
            </section>
        </main>
    );
}
