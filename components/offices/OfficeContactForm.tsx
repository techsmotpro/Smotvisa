"use client";

import { useState } from "react";

export default function OfficeContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hi SmotVisa, I'd like to inquire about your services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/919036329410?text=${message}`, "_blank", "noopener,noreferrer");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <form className="space-y-3 text-black" onSubmit={handleSubmit}>
            <h3 className="text-xl font-display font-bold text-foreground mb-4">Contact Us</h3>

            <div className="space-y-1">
                <label htmlFor="office-name" className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Full Name</label>
                <input
                    id="office-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50"
                    placeholder="Enter your name"
                />
            </div>

            <div className="space-y-1">
                <label htmlFor="office-email" className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Email Address</label>
                <input
                    id="office-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50"
                    placeholder="name@example.com"
                />
            </div>

            <div className="space-y-1">
                <label htmlFor="office-message" className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Message</label>
                <textarea
                    id="office-message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
    );
}