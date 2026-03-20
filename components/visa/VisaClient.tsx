"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Country {
    id: string;
    name: string;
    flag: string;
    category: string;
}

interface Destination extends Country {
    image: string;
    visaType: string;
    processing: string;
    price: string;
}

interface VisaClientProps {
    destinations: Destination[];
    moreCountries: Country[];
}

const VisaClient = ({ destinations, moreCountries }: VisaClientProps) => {
    const [search, setSearch] = useState("");

    const filteredCountries = moreCountries.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                {/* Featured Destinations */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-1.5 h-8 bg-secondary rounded-full" />
                        <h2 className="text-3xl font-display font-bold text-foreground">Featured Destinations</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {destinations.map((dest, idx) => (
                            <motion.div
                                key={dest.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 bg-card border border-border"
                            >
                                <Link href={`/visa/${dest.id}-visa`}>
                                    <div className="aspect-[3/4] relative overflow-hidden">
                                        <img
                                            src={dest.image}
                                            alt={dest.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-[10px] font-display font-bold rounded-full uppercase tracking-widest shadow-gold">
                                                {dest.category}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-3xl">{dest.flag}</span>
                                                <h3 className="text-2xl font-display font-bold text-white">{dest.name}</h3>
                                            </div>
                                            <p className="text-xs font-body text-white/70 mb-6 leading-relaxed">{dest.visaType}</p>

                                            <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                                <div>
                                                    <p className="text-[10px] uppercase font-display font-bold text-white/40 tracking-[0.2em]">Processing</p>
                                                    <p className="text-sm font-body font-bold text-secondary">{dest.processing}</p>
                                                </div>
                                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-secondary transition-all border border-white/10">
                                                    <ArrowRight className="h-6 w-6 text-white group-hover:text-secondary-foreground" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* All Countries Search/Filter Section */}
                <section className="bg-card rounded-[3rem] shadow-elevated border border-border p-8 md:p-16 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
                        <svg className="w-80 h-80 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 relative z-10">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Discover More Countries</h2>
                            <p className="text-muted-foreground font-body text-lg max-w-xl">
                                Can't find your destination above? We process visas for 50+ countries. Search below or chat with our experts.
                            </p>
                        </div>
                        <div className="relative w-full lg:w-[400px]">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search country or region..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-14 pr-6 py-5 rounded-2xl border border-border bg-muted/20 font-body text-base focus:ring-2 focus:ring-secondary/30 outline-none transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 relative z-10">
                        {filteredCountries.map((country, idx) => (
                            <motion.div
                                key={country.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.03 }}
                            >
                                <Link
                                    href="/contact"
                                    className="flex flex-col items-center gap-3 p-8 bg-muted/10 rounded-2xl border border-border/50 hover:border-secondary/30 hover:bg-secondary/5 hover:shadow-card transition-all text-center group"
                                >
                                    <span className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">{country.flag}</span>
                                    <span className="text-sm font-display font-bold text-foreground group-hover:text-secondary transition-colors">{country.name}</span>
                                    <span className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest">{country.category}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {filteredCountries.length === 0 && (
                        <div className="text-center py-24 border-2 border-dashed border-border rounded-3xl">
                            <p className="text-xl text-muted-foreground font-display font-bold italic">No countries match your search. Contact us for custom assistance!</p>
                        </div>
                    )}

                    <div className="mt-20 text-center pt-10 border-t border-border relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
                            <Star className="h-4 w-4 text-secondary" fill="currentColor" />
                            <span className="text-xs font-bold text-foreground uppercase tracking-widest">50+ Destinations Supported</span>
                        </div>
                        <p className="font-body text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
                            Our expertise covers major business and tourist hubs across the globe. Professional support at every step.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-primary-foreground font-display font-bold text-base rounded-full shadow-elevated hover:bg-primary/90 transition-all">
                            Get Expert Consultation <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default VisaClient;
