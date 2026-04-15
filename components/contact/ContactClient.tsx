"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Globe, Send, Info, Star, ArrowRight, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Office } from "@/data/officeData";
import { useToast } from "@/hooks/use-toast";

interface ContactClientProps {
    offices: Office[];
    initialBranchId?: string;
}

export default function ContactClient({ offices, initialBranchId }: ContactClientProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { toast } = useToast();

    const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [activeOffice, setActiveOffice] = useState<Office>(
        offices.find(o => o.id === initialBranchId) || offices[0]
    );
    const [isLoading, setIsLoading] = useState(false);

    // Redirect from query parameter to SEO-friendly URL
    useEffect(() => {
        const branchParam = searchParams.get("branch");
        if (branchParam) {
            router.replace(`/contact/${branchParam}`);
        }
    }, [router, searchParams]);

    // Set active office based on initialBranchId changes (e.g. back/forward navigation)
    useEffect(() => {
        if (initialBranchId) {
            const office = offices.find(office => office.id === initialBranchId);
            if (office) {
                setActiveOffice(office);
            }
        }
    }, [initialBranchId, offices]);

    // Update URL when active office changes
    const handleOfficeChange = (office: Office) => {
        setActiveOffice(office);
        router.push(`/contact/${office.id}`);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("https://smotvisa-backend-visa.vercel.app/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast({
                    title: "Success Check!",
                    description: "Your inquiry has been sent. Our travel consultants will get back to you soon.",
                    variant: "default",
                });
                setFormData({ name: "", email: "", phone: "", service: "", message: "" });
            } else {
                toast({
                    title: "Error occurred",
                    description: "Failed to send your inquiry. Please try again later.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Error sending inquiry:", error);
            toast({
                title: "Connection Error",
                description: "Failed to send your inquiry. Please check your internet connection.",
                variant: "destructive",
            });
        }

        setIsLoading(false);
    };

    return (
        <div className="py-20 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Office Switcher Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {offices.map((office) => (
                        <button
                            key={office.id}
                            onClick={() => handleOfficeChange(office)}
                            className={`px-6 py-2.5 rounded-full font-display font-bold text-xs transition-all border shadow-sm ${activeOffice.id === office.id
                                ? "bg-secondary text-secondary-foreground border-secondary shadow-gold"
                                : "bg-card text-muted-foreground border-border hover:border-secondary/30 hover:text-secondary"
                                }`}
                        >
                            {office.city}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-12 gap-10 items-start max-w-7xl mx-auto">
                    {/* Info Section */}
                    <div className="lg:col-span-5 space-y-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeOffice.id}
                                initial={{ opacity: 1, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4 }}
                                className="bg-primary rounded-[2rem] p-10 text-primary-foreground shadow-elevated relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                    <Globe className="w-32 h-32" />
                                </div>
                                <div className="relative z-10">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mb-2 block">
                                        {activeOffice.city} Office
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                                        {activeOffice.name}
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-5">
                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                                                <MapPin className="h-5 w-5 text-secondary" />
                                            </div>
                                            <p className="text-sm font-body leading-relaxed text-primary-foreground/80 pt-1">
                                                {activeOffice.address}
                                            </p>
                                        </div>

                                        <div className="flex items-start gap-5">
                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                                                <Phone className="h-5 w-5 text-secondary" />
                                            </div>
                                            <div className="space-y-1 pt-1">
                                                {activeOffice.phone.map((p, i) => (
                                                    <p key={i} className="text-sm font-body font-bold">{p}</p>
                                                ))}
                                            </div>
                                        </div>

                                        {activeOffice.email && (
                                            <div className="flex items-start gap-5">
                                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                                                    <Mail className="h-5 w-5 text-secondary" />
                                                </div>
                                                <p className="text-sm font-body font-bold pt-2">{activeOffice.email}</p>
                                            </div>
                                        )}

                                        <div className="pt-6">
                                            <Link
                                                href={`/offices/${activeOffice.id}`}
                                                className="inline-flex items-center gap-2 text-xs font-bold text-secondary hover:text-white transition-all group"
                                            >
                                                <Info className="h-4 w-4" />
                                                VIEW OFFICE DETAILS
                                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Map Box */}
                        <motion.div
                            key={`map-${activeOffice.id}`}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            className="rounded-[2rem] overflow-hidden shadow-card border border-border h-64 relative ring-4 ring-white"
                        >
                            <iframe
                                src={activeOffice.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title={`${activeOffice.city} Office Location`}
                            />
                        </motion.div>
                    </div>

                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 1, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-7"
                    >
                        <form onSubmit={handleSubmit} className="bg-card rounded-[2.5rem] shadow-elevated border border-border p-8 md:p-12 space-y-6">
                            <div className="mb-4">
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">Send an Inquiry</h3>
                                <p className="text-muted-foreground font-body text-sm">Tell us about your requirements and our experts will get in touch.</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-[0.1em]">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl border border-border bg-muted/20 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-[0.1em]">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl border border-border bg-muted/20 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-[0.1em]">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl border border-border bg-muted/20 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="space-y-2 relative">
                                    <label className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-[0.1em]">Service Needed</label>
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl border border-border bg-muted/20 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="visa-consulting">Visa Consulting</option>
                                        <option value="passport-services">Passport Services</option>
                                        <option value="tourist-visa">Tourist Visa</option>
                                        <option value="business-visa">Business Visa</option>
                                        <option value="flight-booking">Flight Booking</option>
                                        <option value="tour-packages">Tour Packages</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-[0.1em]">Detail Message</label>
                                <textarea
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl border border-border bg-muted/20 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                                    placeholder="Write your requirements here..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-secondary text-secondary-foreground font-display font-bold text-base rounded-2xl shadow-gold hover:translate-y-[-2px] transition-all group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-secondary-foreground border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Submit Your Inquiry
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Quick Benefits Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Clock className="h-8 w-8 text-secondary" />
                            </div>
                            <h4 className="text-xl font-display font-bold mb-3">Fast Response</h4>
                            <p className="text-muted-foreground font-body text-sm leading-relaxed">We typicaly get back to you within 2-4 working hours with expert solutions.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Globe className="h-8 w-8 text-secondary" />
                            </div>
                            <h4 className="text-xl font-display font-bold mb-3">Pan-India Support</h4>
                            <p className="text-muted-foreground font-body text-sm leading-relaxed">Multiple offices across India to handle your documentation locally and efficiently.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Star className="h-8 w-8 text-secondary" />
                            </div>
                            <h4 className="text-xl font-display font-bold mb-3">Expert Care</h4>
                            <p className="text-muted-foreground font-body text-sm leading-relaxed">10+ years of domain experience ensures your visa approval is our top priority.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
