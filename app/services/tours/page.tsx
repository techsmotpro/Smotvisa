"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Users, MapPin, Plane, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { tourPackagesData, popularRoutes, travelTips } from "@/data/tourPackagesData";

const TourPackagesPage = () => {
    return (
        <main className="min-h-screen bg-background pb-20">
            <PageHeader
                title="Explore the World with SMOT VISA"
                description="From exotic destinations to cultural adventures, discover our handpicked international tour packages designed for an unforgettable travel experience."
                breadcrumbs={[{ label: "Tours & Packages" }]}
            />

            {/* Tour Packages Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-1.5 h-8 bg-secondary rounded-full" />
                        <h2 className="text-3xl font-display font-bold text-foreground">Featured International Packages</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {tourPackagesData.map((pkg, idx) => (
                            <motion.div
                                key={pkg.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                                        <span className="text-xl">{pkg.flag}</span>
                                        <span className="text-sm font-display font-bold text-foreground tracking-wide">{pkg.destination}</span>
                                    </div>
                                    <div className="absolute bottom-6 right-6 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-2xl font-display font-bold shadow-gold transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {pkg.price}
                                    </div>
                                </div>
                                <div className="p-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-2xl font-display font-bold text-foreground leading-tight">{pkg.name}</h3>
                                        <div className="flex items-center gap-1.5 text-secondary">
                                            <Star className="h-4 w-4 fill-current" />
                                            <span className="text-sm font-display font-bold">4.9</span>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 line-clamp-2 italic">
                                        {pkg.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mb-10">
                                        <div className="flex items-center gap-2 text-xs font-display font-bold text-foreground/80 uppercase tracking-widest bg-secondary/10 p-3 rounded-xl border border-border/50">
                                            <Clock className="h-4 w-4 text-secondary" />
                                            {pkg.duration}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-display font-bold text-foreground/80 uppercase tracking-widest bg-secondary/10 p-3 rounded-xl border border-border/50">
                                            <Users className="h-4 w-4 text-secondary" />
                                            {pkg.groupSize}
                                        </div>
                                    </div>

                                    <Link href={`/contact?package=${pkg.id}`}>
                                        <button className="w-full py-5 bg-muted hover:bg-secondary hover:text-secondary-foreground transition-all rounded-2xl font-display font-bold text-foreground flex items-center justify-center gap-3 group/btn">
                                            Book this Experience <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flight Packages Section */}
            <section className="py-24 bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid-black" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white rounded-full shadow-sm mb-6">
                            <Plane className="h-5 w-5 text-secondary" />
                            <span className="text-sm font-display font-bold text-secondary tracking-widest uppercase">Flight + Tour Combinations</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Fly with Comfort, Travel with Joy</h2>
                        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto italic">
                            Choose from our exclusive flight packages with competitive pricing and flexible travel dates.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {popularRoutes.map((route, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-card rounded-[2rem] p-8 shadow-card border border-border hover:border-secondary/30 transition-all text-center group"
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <div className="text-xs font-display font-bold text-muted-foreground tracking-widest uppercase">From {route.from}</div>
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-500">
                                        <Plane className="h-6 w-6 text-secondary group-hover:text-secondary-foreground rotate-45" />
                                    </div>
                                    <div className="text-xl font-display font-bold text-foreground">To {route.to}</div>
                                    <div className="px-3 py-1 bg-muted rounded-full text-[10px] font-display font-bold text-muted-foreground border border-border">
                                        {route.duration}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link href="/services/air-ticketing" className="inline-flex items-center gap-3 text-secondary font-display font-bold hover:underline tracking-widest uppercase group">
                            Explore All Flight Options <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Travel Tips Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="bg-card rounded-[3.5rem] p-10 md:p-20 shadow-elevated border border-border relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                            <Star className="w-64 h-64 text-secondary" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Travel Smart with SMOT VISA</h2>
                            <p className="text-muted-foreground font-body text-xl max-w-2xl mb-12 italic border-l-4 border-secondary pl-8">
                                Expert advice and localized knowledge to ensure your international journey is seamless and stress-free.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {travelTips.map((tip, idx) => (
                                    <div key={idx} className="flex flex-col gap-4 p-8 bg-muted/20 rounded-[2rem] border border-border/50 hover:bg-white transition-all">
                                        <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-display font-bold shadow-gold">
                                            {idx + 1}
                                        </div>
                                        <p className="text-sm font-body font-bold text-foreground/80 leading-relaxed italic">{tip}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary via-primary-light to-secondary p-12 md:p-24 rounded-[3.5rem] shadow-elevated relative overflow-hidden text-center border border-white/10"
                >
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                    <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                        <h2 className="text-4xl md:text-7xl font-display font-bold text-primary-foreground leading-tight">
                            Ready for Your Next Bespoke Adventure?
                        </h2>
                        <p className="text-xl md:text-3xl text-primary-foreground/70 font-body leading-relaxed border-t border-b border-white/10 py-10">
                            Let SMOT VISA orchestrate every detail — from regulatory compliance to the perfect sunrise over the Alps.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center pt-6">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-secondary text-secondary-foreground font-display font-bold text-lg rounded-2xl hover:translate-y-[-2px] transition-all shadow-gold group"
                            >
                                Book Your Itinerary <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-transparent border-2 border-white/20 text-white font-display font-bold text-lg rounded-2xl hover:bg-white/10 transition-all group"
                            >
                                consult Travel Architects
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default TourPackagesPage;
