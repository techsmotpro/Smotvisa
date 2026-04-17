"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Office } from "@/data/officeData";
import ContactOfficeCards from "./ContactOfficeCards";

interface ContactListClientProps {
    offices: Office[];
}

export default function ContactFilterClient({ offices }: ContactListClientProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedState, setSelectedState] = useState<string>("");
    const [selectedCity, setSelectedCity] = useState<string>("");

    const states = useMemo(() => {
        const uniqueStates = new Set<string>();
        offices.forEach(office => {
            const address = office.address.toLowerCase();
            if (address.includes("maharashtra")) uniqueStates.add("Maharashtra");
            if (address.includes("delhi")) uniqueStates.add("Delhi");
            if (address.includes("karnataka")) uniqueStates.add("Karnataka");
            if (address.includes("gujarat")) uniqueStates.add("Gujarat");
            if (address.includes("rajasthan")) uniqueStates.add("Rajasthan");
            if (address.includes("andhra pradesh")) uniqueStates.add("Andhra Pradesh");
        });
        return Array.from(uniqueStates).sort();
    }, [offices]);

    const cities = useMemo(() => {
        if (!selectedState) {
            return Array.from(new Set(offices.map(office => office.city))).sort();
        }
        return Array.from(new Set(offices.filter(office =>
            office.address.toLowerCase().includes(selectedState.toLowerCase())
        ).map(office => office.city))).sort();
    }, [offices, selectedState]);

    const filteredOffices = useMemo(() => {
        return offices.filter(office => {
            const matchesSearch = !searchTerm ||
                office.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                office.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                office.address.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesState = !selectedState ||
                office.address.toLowerCase().includes(selectedState.toLowerCase());

            const matchesCity = !selectedCity ||
                office.city.toLowerCase().includes(selectedCity.toLowerCase());

            return matchesSearch && matchesState && matchesCity;
        });
    }, [offices, searchTerm, selectedState, selectedCity]);

    return (
        <div className="py-20 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Search and Filter Section */}
                <div className="max-w-5xl mx-auto mb-12 space-y-6">
                    <div className="relative">
                        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search for a city or office location..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-16 pr-8 py-4 rounded-2xl border border-border bg-card text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50 shadow-sm"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">State</label>
                            <select
                                value={selectedState}
                                onChange={(e) => {
                                    setSelectedState(e.target.value);
                                    setSelectedCity("");
                                }}
                                className="w-full px-6 py-4 rounded-2xl border border-border bg-card text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all appearance-none cursor-pointer"
                            >
                                <option value="">All States</option>
                                {states.map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Location</label>
                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                className="w-full px-6 py-4 rounded-2xl border border-border bg-card text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all appearance-none cursor-pointer"
                            >
                                <option value="">All Locations</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <ContactOfficeCards offices={filteredOffices} />
            </div>

            {/* Quick Benefits Section */}
            <section className="py-24 bg-gradient-to-b from-background to-muted/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose SmotVisa</h2>
                        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                            Experience the difference with our premium visa and travel services
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        <div className="group relative bg-card rounded-3xl p-8 border border-border hover:border-secondary/30 hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center group-hover:rotate-5 transition-transform duration-300">
                                        <span className="text-white font-bold text-lg">24/7</span>
                                    </div>
                                </div>
                                <h4 className="text-2xl font-display font-bold mb-4 text-center">24/7 Support</h4>
                                <p className="text-muted-foreground font-body text-sm leading-relaxed text-center">
                                    Our customer support team is available round-the-clock to assist you with your travel needs.
                                </p>
                            </div>
                        </div>

                        <div className="group relative bg-card rounded-3xl p-8 border border-border hover:border-secondary/30 hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center group-hover:rotate-5 transition-transform duration-300">
                                        <span className="text-white font-bold text-lg">10+</span>
                                    </div>
                                </div>
                                <h4 className="text-2xl font-display font-bold mb-4 text-center">Years of Experience</h4>
                                <p className="text-muted-foreground font-body text-sm leading-relaxed text-center">
                                    With over a decade of experience, we provide expert guidance for all your visa and travel requirements.
                                </p>
                            </div>
                        </div>

                        <div className="group relative bg-card rounded-3xl p-8 border border-border hover:border-secondary/30 hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center group-hover:rotate-5 transition-transform duration-300">
                                        <span className="text-white font-bold text-lg">5K+</span>
                                    </div>
                                </div>
                                <h4 className="text-2xl font-display font-bold mb-4 text-center">Happy Customers</h4>
                                <p className="text-muted-foreground font-body text-sm leading-relaxed text-center">
                                    We've helped thousands of travelers achieve their dreams with our reliable and efficient services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}