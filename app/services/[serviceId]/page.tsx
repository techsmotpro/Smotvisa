"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Plane, MapPin, Ticket, Headphones, CheckCircle2, Star, ShieldCheck } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

const serviceData: Record<string, any> = {
    "air-ticketing": {
        title: "Premium Air Ticketing",
        icon: Plane,
        description: "Experience the convenience of seamless flight bookings with our premium air ticketing services. We partner with leading airlines worldwide to bring you the best fares and flexible travel options.",
        features: [
            { title: "Best Fare Guarantee", description: "We monitor prices constantly to ensure you get the most competitive rates for your flights." },
            { title: "24/7 Booking Support", description: "Need to change a flight at 3 AM? Our dedicated team is always here to assist you." },
            { title: "Group Reservations", description: "Planning a corporate trip or family reunion? We handle multi-passenger bookings with ease." },
            { title: "Flexible Cancellations", description: "Choose fares with lenient cancellation policies to travel with peace of mind." }
        ]
    },
    "tours": {
        title: "Curated Tours & Packages",
        icon: MapPin,
        description: "Discover the world's most breathtaking destinations with our hand-picked tour packages. Whether you're seeking adventure, relaxation, or culture, we have the perfect itinerary for you.",
        features: [
            { title: "Hand-Picked Hotels", description: "We only partner with top-rated hotels that meet our strict quality and service standards." },
            { title: "Local Expert Guides", description: "Our local guides don't just show you the sights; they tell the stories that make a place come alive." },
            { title: "Customized Itineraries", description: "Want to skip a temple and add a beach day? Your wish is our command." },
            { title: "Seamless Logistics", description: "From airport pickups to local transport, every detail is meticulously planned for your comfort." }
        ]
    },
    "visa-services": {
        title: "Expert Visa Consulting",
        icon: Ticket,
        description: "Navigating visa requirements can be complex. Our experienced consultants provide end-to-end support for a wide range of visa types, ensuring your application is accurate and timely.",
        features: [
            { title: "Detailed Document Review", description: "We meticulously check every document to minimize the risk of rejection." },
            { title: "Appointment Management", description: "We handle the stress of securing early interview slots and managing submissions." },
            { title: "Regular Status Updates", description: "Stay informed at every step of your application process with real-time notifications." },
            { title: "50+ Countries Supported", description: "Global reach with local expertise in US, UK, Schengen, and Commonwealth visas." }
        ]
    }
};

const ServiceDetailPage = () => {
    const params = useParams();
    const serviceId = params.serviceId as string;
    const data = serviceId ? serviceData[serviceId] : null;

    if (!data) {
        return (
            <div className="min-h-screen py-20 flex pt-40 items-center justify-center container mx-auto px-4">
                <div className="text-center p-12 bg-card rounded-3xl border border-border shadow-elevated">
                    <h2 className="text-3xl font-display font-bold mb-6 text-foreground">Service Not Found</h2>
                    <p className="text-muted-foreground mb-10 font-body">Sorry, we couldn't find the service you're looking for.</p>
                    <Link href="/" className="px-8 py-4 bg-secondary text-secondary-foreground font-display font-bold rounded-2xl shadow-gold hover:opacity-90 transition-all">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-background min-h-screen">
            <PageHeader
                title={data.title}
                description={data.description}
                breadcrumbs={[{ label: "Services", href: "/#services" }, { label: data.title }]}
            />

            {/* Features Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-1.5 h-8 bg-secondary rounded-full" />
                        <h2 className="text-3xl font-display font-bold text-foreground">Core Features</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {data.features.map((feature: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-10 bg-card rounded-[2.5rem] shadow-card border border-border group hover:shadow-elevated hover:border-secondary/30 transition-all"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-500">
                                        <CheckCircle2 className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">{feature.title}</h3>
                                        <p className="text-base font-body text-muted-foreground leading-relaxed italic">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-24 bg-muted/30 border-y border-border">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16">Why Trust Our {data.title}?</h2>
                        <div className="grid sm:grid-cols-3 gap-16">
                            <div className="space-y-4">
                                <div className="text-5xl font-display font-bold text-secondary">10k+</div>
                                <div className="flex items-center justify-center gap-1 text-secondary">
                                    <Star className="w-4 h-4" fill="currentColor" />
                                    <Star className="w-4 h-4" fill="currentColor" />
                                    <Star className="w-4 h-4" fill="currentColor" />
                                    <Star className="w-4 h-4" fill="currentColor" />
                                    <Star className="w-4 h-4" fill="currentColor" />
                                </div>
                                <p className="text-sm font-display font-bold text-muted-foreground uppercase tracking-widest">Successful Bookings</p>
                            </div>
                            <div className="space-y-4">
                                <div className="text-5xl font-display font-bold text-secondary">99%</div>
                                <div className="p-2 bg-secondary/10 inline-block rounded-lg">
                                    <ShieldCheck className="w-6 h-6 text-secondary" />
                                </div>
                                <p className="text-sm font-display font-bold text-muted-foreground uppercase tracking-widest">Client Satisfaction</p>
                            </div>
                            <div className="space-y-4">
                                <div className="text-5xl font-display font-bold text-secondary">24/7</div>
                                <div className="p-2 bg-secondary/10 inline-block rounded-lg">
                                    <Headphones className="w-6 h-6 text-secondary" />
                                </div>
                                <p className="text-sm font-display font-bold text-muted-foreground uppercase tracking-widest">Dedicated Support</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Branded CTA */}
            <section className="py-24 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-primary p-12 md:p-20 rounded-[3.5rem] shadow-elevated relative overflow-hidden text-center border border-white/10"
                >
                    <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
                        <data.icon className="w-64 h-64 text-white" />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-8 leading-tight">
                            Start Your Journey with Us
                        </h2>
                        <p className="text-xl md:text-2xl text-primary-foreground/70 max-w-2xl mx-auto mb-12 font-body leading-relaxed">
                            Receive professional guidance and a customized path for your {data.title.toLowerCase()} requirements.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-12 py-6 bg-secondary text-secondary-foreground font-display font-bold text-lg rounded-2xl hover:translate-y-[-2px] transition-all shadow-gold group"
                        >
                            Inquire for Consultation
                            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default ServiceDetailPage;
