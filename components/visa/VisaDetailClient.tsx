"use client";

import { motion } from "framer-motion";
import { 
    CheckCircle2, 
    Clock, 
    ShieldCheck, 
    Globe, 
    ArrowRight, 
    CircleDollarSign,
    Plus,
} from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface Visa {
    name: string;
    flag: string;
    description: string;
    processingTime: string;
    validity: string;
    entryType: string;
    price: string;
    requirements: string[];
    steps: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
}

export default function VisaDetailClient({ visa, id }: { visa: Visa; id: string }) {
    const quickStats = [
        { icon: Clock, label: "Processing", value: visa.processingTime },
        { icon: ShieldCheck, label: "Validity", value: visa.validity },
        { icon: Globe, label: "Entry Type", value: visa.entryType },
        { icon: CircleDollarSign, label: "Starting From", value: visa.price },
    ];

    return (
        <>
            {/* Quick Stats Grid */}
            <section className="py-12 bg-muted/30 border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {quickStats.map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary transition-colors duration-500">
                                    <stat.icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
                                </div>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-display font-bold mb-1">{stat.label}</p>
                                <p className="text-sm font-display font-bold text-foreground">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Australia Specifics */}
            {id === "australia" && (
                <section className="py-24 bg-muted/10 border-b border-border">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto space-y-16"
                        >
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl font-display font-bold text-foreground">Australia Visa Portfolio</h2>
                                <p className="text-muted-foreground font-body text-lg italic uppercase tracking-widest">Subclass 600 Intelligence</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-10 bg-card rounded-[2.5rem] shadow-card border border-border group hover:border-secondary/30 transition-all">
                                    <h3 className="text-2xl font-display font-bold text-foreground mb-6">Tourist Stream</h3>
                                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-8 italic">Perfect for exploring Sydney, Melbourne, or visiting family & friends across the continent.</p>
                                    <ul className="space-y-4">
                                        {["Explore iconic cities & beaches", "Visit family abroad", "Leisure & Road Trip activity", "Non-business activities"].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-sm font-display font-bold text-foreground/80">
                                                <CheckCircle2 className="h-4 w-4 text-secondary" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-10 bg-card rounded-[2.5rem] shadow-card border border-border group hover:border-secondary/30 transition-all">
                                    <h3 className="text-2xl font-display font-bold text-foreground mb-6">Business Stream</h3>
                                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-8 italic">Authorized for professional engagements, conferences, and critical market negotiations.</p>
                                    <ul className="space-y-4">
                                        {["Professional meetings", "Conferences & Seminars", "Contract Negotiations", "Trade Exhibitions"].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-sm font-display font-bold text-foreground/80">
                                                <CheckCircle2 className="h-4 w-4 text-secondary" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* UK Specifics */}
            {id === "uk" && (
                <section className="py-24 bg-muted/10 border-b border-border">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto space-y-12"
                        >
                            <h2 className="text-4xl font-display font-bold text-foreground text-center">UK Standard Visitor Program</h2>
                            <div className="p-10 bg-card rounded-[2.5rem] border border-border space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest">Program Scope</p>
                                        <p className="text-sm font-display font-bold text-foreground italic">Tourism, Family, Leisure</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest">Standard Tiers</p>
                                        <p className="text-sm font-display font-bold text-foreground italic">6 Mo / 2 Y / 5 Y / 10 Y</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest">Stay Policy</p>
                                        <p className="text-sm font-display font-bold text-foreground italic">Up to 6 Months / Visit</p>
                                    </div>
                                </div>
                                <div className="h-px bg-border shadow-sm" />
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-display font-bold text-foreground flex items-center gap-3">
                                            <div className="w-1.5 h-6 bg-secondary rounded-full" />
                                            Business Visitor Scope
                                        </h3>
                                        <ul className="space-y-4 text-sm font-display font-bold text-foreground/70">
                                            <li className="flex items-center gap-2 italic tracking-wide">• High-level Signatures & Negotiations</li>
                                            <li className="flex items-center gap-2 italic tracking-wide">• International Trade Conventions</li>
                                            <li className="flex items-center gap-2 italic tracking-wide">• Corporate Market Seminars</li>
                                            <li className="flex items-center gap-2 italic tracking-wide">• Unpaid Short-term Training</li>
                                        </ul>
                                    </div>
                                    <div className="p-8 bg-secondary/5 rounded-3xl border border-secondary/10">
                                        <p className="text-xs font-display font-bold text-secondary uppercase tracking-widest mb-4">Intelligence Alert</p>
                                        <p className="text-xs font-body text-foreground/80 leading-relaxed italic">The Standard Visitor Visa strictly prohibits paid employment within the United Kingdom. SmotVisa provides end-to-end file preparation to ensure regulatory compliance.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Canada Specifics */}
            {id === "canada" && (
                <section className="py-24 bg-muted/10 border-b border-border">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto space-y-12"
                        >
                            <h2 className="text-4xl font-display font-bold text-foreground text-center">Canada TRV Intelligence</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="p-8 bg-card rounded-[2rem] border border-border">
                                        <h3 className="text-xl font-display font-bold text-foreground mb-4">Temporary Resident Visa (TRV)</h3>
                                        <p className="text-xs font-body text-muted-foreground leading-relaxed italic mb-6">Designed for individuals visiting for holidays, family, or exploring natural wonders.</p>
                                        <ul className="space-y-3">
                                            {["Up to 10 Years Validity", "Single or Multiple Entry", "Up to 6 Months Continuous Stay"].map(v => (
                                                <li key={v} className="flex items-center gap-2 text-[10px] font-display font-bold text-foreground uppercase tracking-widest bg-muted/50 p-2 rounded-lg border border-border/50">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-secondary" /> {v}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-8 bg-card rounded-[2rem] border border-border">
                                        <h3 className="text-xl font-display font-bold text-foreground mb-4">Business Visitor Protocols</h3>
                                        <p className="text-xs font-body text-muted-foreground leading-relaxed italic mb-6">For professionals attending conferences, trade fairs, or strategic contract discussions.</p>
                                        <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                                            <p className="text-[10px] font-display font-bold text-foreground leading-relaxed uppercase tracking-widest italic">Success Strategy: SmotVisa ensures error-free TRV applications and robust biometrics coordination.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* US Specifics */}
            {id === "us" && (
                <section className="py-24 bg-muted/10 border-b border-border">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto space-y-16"
                        >
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl font-display font-bold text-foreground">USA B1/B2 Elite Guidance</h2>
                                <p className="text-muted-foreground font-body text-lg italic uppercase tracking-widest">DS-160 & Mock Interview Training</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { title: "Expert Consultation", desc: "Personalized guidance on B1 (Business) or B2 (Tourist) strategies." },
                                    { title: "Documentation Prep", desc: "Crafting error-free DS-160 forms and evidence catalogs." },
                                    { title: "Mock Training", desc: "Boost confidence with our one-on-one professional interview rehearsals." }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 bg-card rounded-3xl border border-border hover:shadow-card transition-all">
                                        <h3 className="text-lg font-display font-bold text-foreground mb-3">{item.title}</h3>
                                        <p className="text-xs font-body text-muted-foreground leading-relaxed italic">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="p-10 bg-primary rounded-[3rem] text-primary-foreground text-center relative overflow-hidden shadow-elevated">
                                <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                                <h3 className="text-2xl font-display font-bold mb-4 relative z-10">High Success Rate Advocacy</h3>
                                <p className="text-lg font-body text-primary-foreground/70 max-w-2xl mx-auto relative z-10 italic leading-relaxed">Trusted by thousands of applicants across India, SmotVisa provides step-by-step appointment scheduling and real-time monitoring of consulate availability.</p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Requirements & Process */}
            <section id="requirements" className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Requirements */}
                        <motion.div
                            initial={{ opacity: 1, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-1.5 h-8 bg-secondary rounded-full" />
                                <h2 className="text-3xl font-display font-bold text-foreground">Documentation Portfolio</h2>
                            </div>
                            <ul className="space-y-4">
                                {visa.requirements.map(req => (
                                    <li key={req} className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border shadow-sm group hover:border-secondary transition-colors">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-sm font-display font-bold text-foreground/80 leading-relaxed italic">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Steps */}
                        <motion.div
                            initial={{ opacity: 1, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-1.5 h-8 bg-secondary rounded-full" />
                                <h2 className="text-3xl font-display font-bold text-foreground">Strategic Roadmap</h2>
                            </div>
                            <div className="space-y-10 relative before:absolute before:left-7 before:top-2 before:bottom-2 before:w-px before:bg-border">
                                {visa.steps.map((step, idx) => (
                                    <div key={idx} className="relative pl-16">
                                        <div className="absolute left-0 top-0 w-14 h-14 bg-secondary text-secondary-foreground rounded-[1.2rem] flex items-center justify-center font-display font-bold text-xl shadow-gold z-10 group-hover:scale-110 transition-transform">
                                            {idx + 1}
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-foreground mb-2">{step.title}</h3>
                                        <p className="text-sm font-body text-muted-foreground leading-relaxed italic">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-muted/50 border-t border-border">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-display font-bold text-foreground">Frequently Asked Intel</h2>
                        <p className="text-muted-foreground font-body text-lg italic italic-tracking-wide">Expert insights on {visa.name} visa processing.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {visa.faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="bg-card rounded-[2rem] shadow-card border border-border overflow-hidden px-8 py-2">
                                <AccordionTrigger className="text-left hover:no-underline">
                                    <span className="text-lg font-display font-bold text-foreground tracking-tight">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 pb-6 border-t border-border/50 mt-2">
                                    <p className="text-sm font-body text-muted-foreground leading-[1.8] italic">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 1, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary p-12 md:p-24 rounded-[3.5rem] shadow-elevated relative overflow-hidden text-center border border-white/10"
                >
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                    <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                        <h2 className="text-4xl md:text-7xl font-display font-bold text-primary-foreground leading-tight">
                            Ready to Initiate Your {visa.name} Application?
                        </h2>
                        <p className="text-xl md:text-3xl text-primary-foreground/70 font-body leading-relaxed border-t border-b border-white/10 py-10">
                            Our team is standing by to handle every regulatory detail. Get a professional consultation for your international journey today.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center pt-6">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-secondary text-secondary-foreground font-display font-bold text-lg rounded-2xl hover:translate-y-[-2px] transition-all shadow-gold group">
                                Consult with Experts <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-transparent border-2 border-white/20 text-white font-display font-bold text-lg rounded-2xl hover:bg-white/10 transition-all group">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
