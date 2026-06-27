"use client";
import { useState } from "react";

export default function VisaSidebarForm({ visaName }: { visaName: string }) {
    const [whatsapp, setWhatsapp] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", interest: visaName, phone: "", email: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `Hi SmotVisa, I am ${form.name}. I wanted to know about ${form.interest}. Contact: ${form.phone} | ${form.email}`;
        window.open(`https://wa.me/918904008843?text=${encodeURIComponent(msg)}`, "_blank");
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="font-display font-bold text-foreground text-sm">We got your request!</p>
                <p className="text-xs font-body text-muted-foreground">Our visa expert will reach out to you shortly on WhatsApp.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="bg-primary px-5 py-4">
                <p className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Consultation</p>
                <h3 className="text-base font-display font-bold text-primary-foreground mt-1 leading-snug">Sign up for<br />expert consultation</h3>
            </div>
            <form onSubmit={handleSubmit} className="px-5 py-4 space-y-3">
                <div>
                    <label className="text-xs font-body text-muted-foreground mb-1 block">I am</label>
                    <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full border border-border rounded-lg px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                    />
                </div>
                <div>
                    <label className="text-xs font-body text-muted-foreground mb-1 block">Wanted to know about</label>
                    <input
                        name="interest"
                        type="text"
                        value={form.interest}
                        onChange={handleChange}
                        placeholder="Visa type or question"
                        className="w-full border border-border rounded-lg px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                    />
                </div>
                <div>
                    <label className="text-xs font-body text-muted-foreground mb-1 block">Contact at</label>
                    <div className="flex gap-2 items-center">
                        <span className="border border-border rounded-lg px-3 py-2 text-sm font-body text-muted-foreground bg-muted/30 whitespace-nowrap">IN +91</span>
                        <input
                            name="phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Phone number"
                            className="flex-1 border border-border rounded-lg px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                        />
                    </div>
                    <label className="flex items-center gap-2 mt-2 cursor-pointer">
                        <div
                            onClick={() => setWhatsapp(!whatsapp)}
                            className={`w-9 h-5 rounded-full transition-colors relative ${whatsapp ? "bg-secondary" : "bg-muted"}`}
                        >
                            <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${whatsapp ? "translate-x-4" : "translate-x-0.5"}`} />
                        </div>
                        <span className="text-xs font-body text-muted-foreground">Use this as WhatsApp number</span>
                    </label>
                </div>
                <div>
                    <label className="text-xs font-body text-muted-foreground mb-1 block">And email</label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email ID"
                        className="w-full border border-border rounded-lg px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2.5 bg-primary text-primary-foreground font-display font-bold text-sm rounded-lg hover:opacity-90 transition-all mt-1"
                >
                    Submit
                </button>
                <p className="text-[10px] font-body text-muted-foreground text-center">Don&apos;t know what to do? <span className="text-secondary font-semibold">We are here to help</span></p>
            </form>
        </div>
    );
}
