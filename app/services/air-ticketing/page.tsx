import { ArrowRight, Plane, Users, Ticket, Clock, Shield, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Metadata } from 'next';

const faqs = [
    {
        question: "How can I book international flights from India with SMOT VISA?",
        answer: "You can contact SMOT VISA’s travel consultants who will help you choose the best flight options based on your destination, travel dates, and budget. Our team will assist you with the entire booking process and confirm your tickets quickly."
    },
    {
        question: "What are the best airlines for international flights from India?",
        answer: "The best airlines depend on your destination and travel preferences. SMOT VISA helps travelers choose reliable airlines that offer comfortable travel, convenient routes, and competitive pricing."
    },
    {
        question: "When is the best time to book international flights from India?",
        answer: "Booking flights several weeks in advance often helps travelers secure better prices. However, flight prices depend on travel demand, season, and airline availability. SMOT VISA helps you find the best booking time for your trip."
    },
    {
        question: "Can SMOT VISA help with both flight booking and visa assistance?",
        answer: "Yes. SMOT VISA specializes in both international flight booking and visa assistance, which makes it easier for travelers to plan their international journeys with proper travel timelines."
    },
    {
        question: "Do you provide group flight booking services?",
        answer: "Yes. SMOT VISA assists with family travel, corporate travel, and group flight bookings, ensuring convenient travel schedules and competitive fares for multiple travelers."
    },
    {
        question: "Can I change my flight after booking?",
        answer: "Flight change options depend on the airline’s policy and ticket type. SMOT VISA helps travelers choose tickets that offer flexible options whenever possible."
    }
];

export const metadata: Metadata = {
    title: "Best International Flights from India | Premium Air Ticketing | SMOT VISA",
    description: "Book the Best International Flights from India with SMOT VISA. Expert assistance for competitive fares, visa-aligned travel planning, and global destinations.",
    other: {
        "script:ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        })
    }
};

const features = [
    {
        icon: Plane,
        title: "Expert Travel Consultation",
        description: "Our experienced team analyzes flight routes, transit times, airline reliability, and travel convenience to help you choose the best international flights from India."
    },
    {
        icon: Ticket,
        title: "Competitive International Airfares",
        description: "Air ticket prices change frequently. SMOT VISA helps travelers secure competitive international flight fares by identifying the best options available at the time of booking."
    },
    {
        icon: Clock,
        title: "Smooth Booking Experience",
        description: "From flight selection to ticket confirmation, SMOT VISA manages the entire process with a focus on simplicity and efficiency."
    },
    {
        icon: Shield,
        title: "Visa-Aligned Travel Planning",
        description: "We help you select flights that align with your visa process and travel requirements, ensuring a seamless travel experience."
    },
    {
        icon: Users,
        title: "Group and Family Booking",
        description: "We assist with family vacation flight bookings, group travel arrangements, corporate travel planning, and educational or student group travel."
    },
    {
        icon: Globe,
        title: "Complete Travel Support",
        description: "SMOT VISA offers more than just flight booking. We support travelers with visa assistance, tour packages, travel documentation, and travel insurance."
    }
];

const destinations = [
    "United States",
    "United Kingdom",
    "Europe (Schengen countries)",
    "Australia",
    "Dubai and UAE",
    "Southeast Asia",
    "Canada"
];

const services = [
    { icon: "✈️", title: "International Flight Booking", desc: "Helping travelers find the best flights for global destinations." },
    { icon: "📋", title: "Visa Assistance", desc: "Expert support for US B1/B2 visa, Schengen visa, UK visa, Australia visa, Dubai visa, and other visa applications." },
    { icon: "🏨", title: "International Tour Packages", desc: "Customized travel packages that include hotels, sightseeing, and guided experiences." },
    { icon: "📄", title: "Travel Documentation Guidance", desc: "Support with travel documents required for international journeys." },
    { icon: "🛡️", title: "Travel Insurance Assistance", desc: "Guidance on selecting travel insurance for international trips." }
];

export default function AirTicketingPage() {
    return (
        <main className="bg-background">
            <PageHeader
                title="Best International Flights from India"
                description="Book the Best International Flights from India with SMOT VISA. Finding the right flights can be challenging, but our experts simplify the process by helping you find the most convenient and affordable options."
                breadcrumbs={[{ label: "Air Ticketing" }]}
            />

            {/* Introduction Section */}
            <section className="py-20 bg-background text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                            Why Choose SMOT VISA for International Flight Booking?
                        </h2>
                        <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                            Booking international flights online can sometimes be confusing due to fluctuating prices, multiple airline
                            options, and travel restrictions. SMOT VISA helps travelers navigate these challenges by providing expert
                            assistance and personalized flight recommendations.
                        </p>
                    </MotionDiv>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <MotionDiv
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-card rounded-2xl shadow-card border-l-4 border-secondary/50 border-r border-y border-border p-8 hover:shadow-elevated transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                                    <feature.icon className="h-7 w-7 text-secondary" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{feature.title}</h3>
                                <p className="text-muted-foreground font-body leading-relaxed italic">
                                    {feature.description}
                                </p>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* Destinations Section */}
            <section className="py-24 bg-background overflow-hidden">
                <div className="container mx-auto px-4">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                            Popular International Destinations
                        </h2>
                        <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
                            SMOT VISA offers international air ticket booking services from India to popular global destinations
                        </p>
                    </MotionDiv>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {destinations.map((destination, idx) => (
                            <MotionDiv
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="px-6 py-4 bg-card border border-border rounded-2xl text-base font-body font-semibold text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all cursor-default shadow-sm"
                            >
                                {destination}
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
                <div className="container mx-auto px-4">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                            Complete Travel Support from SMOT VISA
                        </h2>
                        <p className="text-secondary font-body max-w-2xl mx-auto text-lg font-semibold italic">
                            Beyond just booking flights, we support you from documentation to destination.
                        </p>
                    </MotionDiv>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {services.map((service, idx) => (
                            <MotionDiv
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-card rounded-2xl shadow-card border-t-4 border-secondary/50 border-x border-b border-border p-6 text-center hover:translate-y-[-5px] transition-transform"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                <h3 className="text-lg font-display font-bold text-foreground mb-3">{service.title}</h3>
                                <p className="text-sm font-body text-muted-foreground leading-relaxed">{service.desc}</p>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <MotionDiv
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-card rounded-2xl border-l-4 border-secondary/50 border-r border-y border-border overflow-hidden hover:border-secondary/30 transition-colors shadow-sm"
                                >
                                    <details className="group">
                                        <summary className="cursor-pointer flex items-center justify-between px-8 py-6 list-none">
                                            <span className="text-lg font-display font-bold text-foreground pr-8">{faq.question}</span>
                                            <div className="shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center group-open:bg-secondary transition-colors">
                                                <ChevronRight className="h-5 w-5 text-foreground group-open:text-secondary-foreground transition-transform duration-300 group-open:rotate-90" />
                                            </div>
                                        </summary>
                                        <div className="px-8 pb-6 text-base font-body text-muted-foreground leading-relaxed border-t border-border/50 pt-4 mt-2">
                                            {faq.answer}
                                        </div>
                                    </details>
                                </MotionDiv>
                            ))}
                        </div>
                    </MotionDiv>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            Book Your Flight Today!
                        </h3>
                        <p className="text-xl font-body text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Finding the right flight can make a huge difference in your travel experience. With SMOT VISA, you receive
                            expert support, professional travel guidance, and a smooth booking process.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-body font-bold rounded-full hover:shadow-gold transition-all"
                            >
                                Book Your Flight <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-white/20 text-white font-body font-bold rounded-full hover:bg-white/10 transition-all"
                            >
                                Talk to Travel Experts
                            </Link>
                        </div>
                    </MotionDiv>
                </div>
            </section>
        </main>
    );
}
