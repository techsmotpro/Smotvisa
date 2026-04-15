"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Office } from "@/data/officeData";
import { MapPin, Phone, Mail, Globe, ArrowLeft, CheckCircle2, Building2, Info, ArrowRight } from "lucide-react";

interface OfficeDetailClientProps {
    office: Office;
}

export default function OfficeDetailClient({ office }: OfficeDetailClientProps) {
    return (
        <main className="min-h-screen bg-background pb-20">
            {/* Hero Section - Branded */}
            <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
                    <Globe className="w-96 h-96 text-white" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side: Existing Content */}
                        <motion.div
                            initial={{ opacity: 1, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-white/70 hover:text-secondary mb-8 transition-colors text-sm font-bold tracking-widest uppercase"
                            >
                                <ArrowLeft className="h-4 w-4" /> Back to Contact
                            </Link>
                            <div className="flex items-center gap-3 text-secondary font-display font-bold uppercase tracking-[0.2em] text-xs mb-6">
                                <MapPin className="h-4 w-4" /> {office.city} Office
                            </div>
                            <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                                {office.name}
                            </h1>
                            <p className="text-lg md:text-xl text-white/70 font-body max-w-2xl leading-relaxed">
                                Serving travelers across {office.city} with professional visa consulting, passport services, and international flight bookings.
                            </p>
                            
                            <div className="mt-6">
                                <Link
                                    href={`tel:${office.phone[0].replace(/\D/g, '')}`}
                                    className="inline-flex items-center gap-3 px-6 py-4 bg-secondary text-secondary-foreground font-display font-bold text-base rounded-2xl shadow-gold hover:translate-y-[-2px] transition-all"
                                >
                                    <Phone className="h-5 w-5" />
                                    Reach us : {office.phone[0]}
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Side: Contact Form */}
                        <motion.div
                            initial={{ opacity: 1, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 p-4 md:p-6 text-black"
                        >
                            <form className="space-y-3 text-black" onSubmit={(e) => e.preventDefault()}>
                                <h3 className="text-xl font-display font-bold text-foreground mb-4">Contact Us</h3>
                                
                                <div className="space-y-1">
                                    <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50"
                                        placeholder="name@example.com"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Message</label>
                                    <textarea
                                        rows={3}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                                        placeholder="Tell us about your requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-4 py-3 bg-secondary text-secondary-foreground font-display font-bold text-sm rounded-lg shadow-gold hover:translate-y-[-2px] transition-all text-center"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 mt-20">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-16">
                        {/* Overview Section */}
                        <motion.section
                            initial={{ opacity: 1, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-10 bg-secondary rounded-full" />
                                <h2 className="text-3xl font-display font-bold text-foreground">Mission Overview</h2>
                            </div>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed border-l-4 border-muted pl-8 italic">
                                {office.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 pt-6">
                                {office.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-4 p-6 bg-muted/20 rounded-2xl border border-border group hover:border-secondary/30 transition-all">
                                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-500">
                                            <CheckCircle2 className="h-5 w-5 text-secondary group-hover:text-secondary-foreground" />
                                        </div>
                                        <span className="font-display font-bold text-base text-foreground">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* About the Organization Box */}
                        <motion.section
                            initial={{ opacity: 1, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-primary rounded-[3rem] p-10 md:p-16 text-primary-foreground relative overflow-hidden shadow-elevated border border-white/10"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                                <Building2 className="w-48 h-48" />
                            </div>
                            <div className="relative z-10 space-y-8">
                                <h2 className="text-4xl font-display font-bold leading-tight">Our Professional Commitment</h2>
                                <p className="text-primary-foreground/80 font-body text-lg leading-relaxed max-w-3xl">
                                    {office.aboutOrg}
                                </p>
                                <div className="pt-6">
                                    <Link
                                        href="/about"
                                        className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-display font-bold rounded-2xl shadow-gold hover:translate-y-[-2px] transition-all group"
                                    >
                                        Our Identity & History
                                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.section>
                    </div>

                    {/* Sidebar: Location & Contact */}
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div
                            initial={{ opacity: 1, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-[2.5rem] border border-border p-10 shadow-elevated sticky top-32 hover:border-secondary/20 transition-all"
                        >
                            <h3 className="text-2xl font-display font-bold mb-10 text-foreground flex items-center gap-3">
                                <Info className="h-6 w-6 text-secondary" /> Branch Intel
                            </h3>

                            <div className="space-y-10">
                                <div className="flex items-start gap-5">
                                    <div className="p-4 bg-muted/30 rounded-2xl">
                                        <MapPin className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-muted-foreground font-display font-bold uppercase tracking-[0.2em] mb-2">Location Address</p>
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-body font-bold leading-relaxed text-foreground hover:text-secondary transition-colors"
                                        >
                                            {office.address}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="p-4 bg-muted/30 rounded-2xl">
                                        <Phone className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-muted-foreground font-display font-bold uppercase tracking-[0.2em] mb-2">Primary Hotline</p>
                                        {office.phone.map((p, i) => (
                                            <a
                                                key={i}
                                                href={`tel:${p.replace(/\D/g, '')}`}
                                                className="text-base font-body font-bold text-foreground mb-1 hover:text-secondary transition-colors block"
                                            >
                                                {p}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {office.email && (
                                    <div className="flex items-start gap-5">
                                        <div className="p-4 bg-muted/30 rounded-2xl">
                                            <Mail className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-muted-foreground font-display font-bold uppercase tracking-[0.2em] mb-2">Email Desk</p>
                                            <a
                                                href={`mailto:${office.email}`}
                                                className="text-base font-body font-bold text-foreground hover:text-secondary transition-colors"
                                            >
                                                {office.email}
                                            </a>
                                        </div>
                                    </div>
                                )}

                            </div>

                            <div className="mt-12 pt-10 border-t border-border">
                                <p className="text-[10px] text-muted-foreground font-display font-bold uppercase tracking-[0.2em] mb-6">Visual Pin</p>
                                <div className="rounded-3xl overflow-hidden h-60 border border-border shadow-inner relative ring-4 ring-muted/10">
                                    <iframe
                                        src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(office.address)}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        title={`${office.city} Office Map`}
                                    />
                                </div>
                            </div>

                            <div className="mt-10">
                                <Link
                                    href="/reachout"
                                    className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-secondary text-secondary-foreground font-display font-bold text-base rounded-2xl shadow-gold hover:translate-y-[-2px] transition-all"
                                >
                                    Book Personal Consultation
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
