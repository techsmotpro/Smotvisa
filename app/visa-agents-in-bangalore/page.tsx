"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { MapPin, CheckCircle2, Star, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { offices } from "@/data/officeData";

const VisaAgentsInBangalore = () => {
    // Filter for Bangalore offices specifically
    const bangaloreOffices = offices.filter(o => o.city === "Bangalore" || o.address.includes("Bangalore"));

    return (
        <main className="bg-background">
            <PageHeader
                title="Best Visa Agents in Bangalore"
                description="Expert visa processing services in HSR Layout, Indiranagar, Koramangala and across Bangalore. Smotvisa is your trusted partner for premium travel consultancy."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Visa Agents Bangalore" }
                ]}
            />

            <section className="py-24 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                            <Star className="h-4 w-4 text-secondary fill-secondary" />
                            <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Premium Local Presence</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                            Your Search for the Best Visa Agents in Bangalore Ends Here.
                        </h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            With specialized expertise in Bangalore's major tech and residential hubs, Smotvisa provides end-to-end support for US, UK, Canada, and Schengen visas right from your neighborhood.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "Doorstep Services", desc: "Document pickup & delivery in HSR & Koramangala." },
                                { title: "24/7 Strategic Support", desc: "Dedicated case managers for every Bangalore client." },
                                { title: "High Success Rate", desc: "Proven track record with Bangalore's global workforce." },
                                { title: "Local Expertise", desc: "Deep understanding of Bangalore's consulate trends." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-5 w-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-foreground">{item.title}</h4>
                                        <p className="text-xs text-muted-foreground italic">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-secondary rounded-[3rem] rotate-3 opacity-10" />
                        <div className="relative bg-card p-10 rounded-[3rem] border border-border shadow-elevated space-y-8">
                            <h3 className="text-2xl font-display font-bold text-foreground">Our Bangalore Footprint</h3>
                            <div className="space-y-6">
                                {bangaloreOffices.map((office, idx) => (
                                    <div key={idx} className="p-6 bg-muted/30 rounded-2xl border border-border group hover:border-secondary transition-colors">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-3">
                                                <MapPin className="h-5 w-5 text-secondary" />
                                                <h4 className="font-display font-bold text-lg">{office.city} Office</h4>
                                            </div>
                                            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-[10px] font-display font-bold uppercase rounded-full">Active</span>
                                        </div>
                                        <p className="text-sm font-body text-muted-foreground italic leading-relaxed mb-4">{office.address}</p>
                                        <Link href={`/contact?branch=${office.id}`} className="inline-flex items-center gap-2 text-xs font-display font-bold text-secondary uppercase tracking-widest hover:gap-3 transition-all">
                                            Visit Office <ArrowRight className="h-3 w-3" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full bg-primary text-primary-foreground py-8 rounded-2xl font-display font-bold text-lg shadow-gold group">
                                Book Home Consultation <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-muted/30 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl font-display font-bold text-foreground">Strategic Service Portfolio</h2>
                        <p className="text-muted-foreground italic tracking-wide">Why Bangalore's professionals trust Smotvisa for their international mobility.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: "US B1/B2 Interview Coaching", desc: "Specialized training for Bangalore's IT and Business professionals seeking US Visas." },
                            { icon: Clock, title: "Express UK Processing", desc: "Priority services for leisure and business visitors to the United Kingdom." },
                            { icon: CheckCircle2, title: "Schengen Group Filings", desc: "Hassle-free group applications for corporate and family trips to Europe." }
                        ].map((s, i) => (
                            <div key={i} className="p-10 bg-card rounded-[2.5rem] shadow-card border border-border hover:shadow-elevated transition-all text-center">
                                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <s.icon className="h-8 w-8 text-secondary" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground mb-4">{s.title}</h3>
                                <p className="text-sm font-body text-muted-foreground italic leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-10"
                >
                    <h2 className="text-4xl md:text-7xl font-display font-bold text-foreground leading-tight">
                        Experience the Best Visa Agency Service in Bangalore.
                    </h2>
                    <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto italic leading-relaxed">
                        Don't let complex regulations stand in the way of your international dreams. Connect with our Bangalore experts today.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-secondary text-secondary-foreground font-display font-bold text-lg rounded-2xl hover:translate-y-[-2px] transition-all shadow-gold group">
                            Contact our Bangalore Desk <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/visa-checker" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-transparent border-2 border-primary text-primary font-display font-bold text-lg rounded-2xl hover:bg-primary/5 transition-all">
                            Check Eligibility
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default VisaAgentsInBangalore;
