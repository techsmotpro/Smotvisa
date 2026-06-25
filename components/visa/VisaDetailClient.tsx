import {
    CheckCircle2,
    Clock,
    ShieldCheck,
    Globe,
    ArrowRight,
    CircleDollarSign,
    Award,
    Briefcase,
    Users,
    Star,
    AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import VisaFAQClient from "./VisaFAQClient";

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
                <>
                    {/* Intro */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    SmotVisa handles the details so you don&apos;t have to. We confirm the right stream, complete your ImmiAccount application accurately, and build a clean document file — all as a genuine short-term visitor for Australia visa.
                                </p>
                                <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-sm font-display font-bold text-foreground bg-muted/50 border border-border rounded-2xl px-6 py-4 mt-4">
                                    <span>Australia on your mind? Let&apos;s get your Australian Tourist Visa.</span>
                                    <span className="hidden sm:block text-border">|</span>
                                    <a href="tel:+918904008843" className="text-secondary hover:underline">Call / WhatsApp +91-8904008843</a>
                                    <span className="hidden sm:block text-border">•</span>
                                    <a href="mailto:info@smotvisa.com" className="text-secondary hover:underline">Email info@smotvisa.com</a>
                                    <span className="hidden sm:block text-border">•</span>
                                    <span>Or send an enquiry on smotvisa.com for a free consultation.</span>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Why Choose SmotVisa */}
                    <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-b border-border">
                        <div className="container mx-auto px-4">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Why Choose SmotVisa for Your Australia Visa for Tourist</h2>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {[
                                    { icon: Users, title: "Subclass 600 Specialists", desc: "Tourist and Business Visitor streams handled with care." },
                                    { icon: Briefcase, title: "ImmiAccount Expertise", desc: "Accurate online application with the right supporting evidence." },
                                    { icon: CircleDollarSign, title: "Clear Financial Presentation", desc: "Well-organised proof of funds that supports your case." },
                                    { icon: Clock, title: "Flexible Durations", desc: "Guidance on 3, 6 or 12-month validity to suit your travel." },
                                    { icon: CheckCircle2, title: "Honest, Visitor-Only Scope", desc: "No skilled migration, PR or work-visa positioning." },
                                    { icon: Star, title: "Reliable Track Record", desc: "2,000+ travellers and a 98% application success rate in Australia visa." },
                                ].map((item, idx) => (
                                    <MotionDiv
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.08 }}
                                        className="bg-card rounded-2xl shadow-card border-l-4 border-secondary/50 border-r border-y border-border p-6 hover:shadow-elevated transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                                            <item.icon className="h-6 w-6 text-secondary" />
                                        </div>
                                        <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground font-body text-sm leading-relaxed italic">{item.desc}</p>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Tourist Stream or Business Stream */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tourist Stream or Business Stream</h2>
                                </div>
                                <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto text-center">
                                    The Subclass 600 has separate streams for different purposes. The Tourist stream covers holidays, sightseeing and visiting family and friends. The Business Visitor stream covers meetings, conferences, negotiations and trade events. Neither stream permits work for an Australian employer — these are visitor visas, and that&apos;s the only thing we assist with. Visas are commonly granted for stays of three, six or twelve months depending on your purpose and profile.
                                </p>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Who Can Apply Australia Tourist Visa</h2>
                                </div>
                                <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto text-center">
                                    Indian travellers with a genuine visit purpose, sufficient funds and strong ties to India are well suited to the Subclass 600. The decision-maker looks for a credible itinerary, clear finances and good reasons to return home. First-time travellers with a clean profile are regularly granted visas.
                                </p>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Processing Time & Fees */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Processing Time & Fees</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">As of 2026, the base Subclass 600 application charge is around AUD $190–200 for offshore applicants from India. Processing typically takes about 15 to 25 business days — roughly 75% of tourist applications are decided within 20 days and 90% within around 30 days — though times vary with stream, completeness and demand.</p>
                                </div>
                                <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-secondary text-secondary-foreground">
                                                <th className="text-left px-5 py-3 font-display font-bold">Item</th>
                                                <th className="text-left px-5 py-3 font-display font-bold">Amount / Timeline</th>
                                                <th className="text-left px-5 py-3 font-display font-bold">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { item: "Subclass 600 base charge", amount: "AUD $190–200", notes: "Offshore application from India" },
                                                { item: "Processing time", amount: "15 – 25 business days", notes: "75% within 20 days, 90% within ~33 days" },
                                                { item: "Health insurance", amount: "Recommended", notes: "Not mandatory for the visa" },
                                            ].map((row, idx) => (
                                                <tr key={idx} className={idx % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                                                    <td className="px-5 py-3 font-display font-bold text-foreground">{row.item}</td>
                                                    <td className="px-5 py-3 font-body text-muted-foreground">{row.amount}</td>
                                                    <td className="px-5 py-3 font-body text-muted-foreground italic">{row.notes}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Common Rejection Reasons */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Common Reasons Australia Visas Get Refused</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Insufficient funds or poorly presented finances",
                                        "Weak ties to India and doubts about return",
                                        "Unclear or inconsistent travel purpose",
                                        "Incomplete documentation",
                                        "Discrepancies in declarations",
                                        "Vague itinerary or accommodation details",
                                    ].map((item, idx) => (
                                        <MotionDiv
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.07 }}
                                            className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-sm"
                                        >
                                            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                                            <span className="font-body font-semibold text-foreground text-sm">{item}</span>
                                        </MotionDiv>
                                    ))}
                                </div>
                            </MotionDiv>
                        </div>
                    </section>
                </>
            )}

            {/* UK Specifics */}
            {id === "uk" && (
                <>
                    {/* Intro */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    The UK is one of the most popular destinations for Indian travellers, and India files more UK visa applications than any other country in the world. The good news is that the grant rate for visitor visas is high — around 82% — when applications are complete, honest and well presented. The challenge is that the online application is detailed and the financial evidence is scrutinised closely.
                                </p>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    SmotVisa takes the guesswork out of it. We help you choose the right validity, complete the online form correctly, build a clean financial and supporting-document file, and book your VFS biometrics appointment — all without ever positioning your trip as anything other than the genuine short visit it is.
                                </p>
                                <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-sm font-display font-bold text-foreground bg-muted/50 border border-border rounded-2xl px-6 py-4 mt-4">
                                    <span>Planning a UK trip? Let&apos;s prepare a winning application.</span>
                                    <span className="hidden sm:block text-border">|</span>
                                    <a href="tel:+918904008843" className="text-secondary hover:underline">+91-8904008843</a>
                                    <span className="hidden sm:block text-border">•</span>
                                    <a href="mailto:info@smotvisa.com" className="text-secondary hover:underline">info@smotvisa.com</a>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Why Choose SmotVisa */}
                    <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-b border-border">
                        <div className="container mx-auto px-4">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Why Choose SmotVisa for Your UK Visa</h2>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {[
                                    { icon: Users, title: "Standard Visitor Visa Experts", desc: "Tourism, family visits and business visitors all covered under one route." },
                                    { icon: CircleDollarSign, title: "Financial Documentation Done Right", desc: "The area where most UK refusals happen — we get it clean and clear." },
                                    { icon: Clock, title: "Short-term & Long-term Options", desc: "We advise whether a 6-month, 2, 5 or 10-year visa suits your travel pattern." },
                                    { icon: Globe, title: "Online Application Support", desc: "Accurate completion of the GOV.UK application and VFS appointment booking." },
                                    { icon: ShieldCheck, title: "Transparent Pricing", desc: "Upfront fees with no surprises and no immigration up-selling." },
                                    { icon: Star, title: "Proven Track Record", desc: "5000+ travellers served with a 99% application success rate." },
                                ].map((item, idx) => (
                                    <MotionDiv
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.08 }}
                                        className="bg-card rounded-2xl shadow-card border-l-4 border-secondary/50 border-r border-y border-border p-6 hover:shadow-elevated transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                                            <item.icon className="h-6 w-6 text-secondary" />
                                        </div>
                                        <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground font-body text-sm leading-relaxed italic">{item.desc}</p>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* One Visa, Both Purposes */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto space-y-8">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tourist or Business — One Visa, Both Purposes</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">The UK Standard Visitor visa is wonderfully flexible. Standard visas are issued for six months; frequent travellers can apply for 2, 5 or 10-year visitor visas.</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-card rounded-[2.5rem] shadow-card border border-border hover:border-secondary/30 transition-all">
                                        <h3 className="text-xl font-display font-bold text-foreground mb-4">Tourism & Personal</h3>
                                        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 italic">Holiday, visiting friends or family, medical travel.</p>
                                        <ul className="space-y-3">
                                            {["Holidays & sightseeing", "Visiting friends and family", "Medical treatment", "Short recreational courses"].map((it) => (
                                                <li key={it} className="flex items-center gap-3 text-sm font-display font-bold text-foreground/80">
                                                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-6 bg-card rounded-[2.5rem] shadow-card border border-border hover:border-secondary/30 transition-all">
                                        <h3 className="text-xl font-display font-bold text-foreground mb-4">Business Activities</h3>
                                        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 italic">Permitted business activities — no paid work allowed.</p>
                                        <ul className="space-y-3">
                                            {["Meetings & conferences", "Signing contracts & negotiations", "Trade shows & exhibitions", "Short unpaid training"].map((it) => (
                                                <li key={it} className="flex items-center gap-3 text-sm font-display font-bold text-foreground/80">
                                                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-secondary/5 rounded-2xl border border-secondary/20 text-center">
                                    <p className="text-sm font-display font-bold text-foreground/80 italic">Paid or unpaid work, including freelance work, is not permitted. SmotVisa only assists with genuine visitor travel.</p>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Who Can Apply</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">Any Indian traveller with a genuine short-term purpose and the funds to cover the trip without working can apply.</p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Clear finances sufficient to cover the trip",
                                        "Stable job, business, family or property ties in India",
                                        "Credible plan to leave the UK at end of visit",
                                        "Honest and well-defined travel purpose",
                                        "First-time travellers with a solid profile",
                                        "Good travel history (helpful but not essential)",
                                    ].map((item, idx) => (
                                        <MotionDiv
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.07 }}
                                            className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-sm hover:border-secondary/40 transition-colors"
                                        >
                                            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                                            <span className="font-body font-semibold text-foreground text-sm">{item}</span>
                                        </MotionDiv>
                                    ))}
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Processing Times */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Processing Time & Fees</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">Standard processing takes around three weeks from biometrics. Priority service returns a decision in about five working days.</p>
                                </div>
                                <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-secondary text-secondary-foreground">
                                                <th className="text-left px-5 py-3 font-display font-bold">Visa Type</th>
                                                <th className="text-left px-5 py-3 font-display font-bold">Typical Fee (2026)</th>
                                                <th className="text-left px-5 py-3 font-display font-bold">Processing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { type: "6-month Standard Visitor", fee: "₹16,500", processing: "~3 weeks standard" },
                                                { type: "Priority service add-on", fee: "Extra fee", processing: "~5 working days" },
                                                { type: "2 / 5 / 10-year visitor", fee: "Higher (multi-year value)", processing: "~3 weeks standard" },
                                            ].map((row, idx) => (
                                                <tr key={idx} className={idx % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                                                    <td className="px-5 py-3 font-display font-bold text-foreground">{row.type}</td>
                                                    <td className="px-5 py-3 font-body text-muted-foreground">{row.fee}</td>
                                                    <td className="px-5 py-3 font-body text-muted-foreground italic">{row.processing}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Common Rejection Reasons */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Common Reasons UK Visas Get Refused</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">Financial evidence is the most scrutinised part of a UK application. Our process is built to address these issues upfront.</p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Insufficient or unexplained funds in bank statements",
                                        "Large unexplained deposits shortly before applying",
                                        "Weak evidence of ties to India",
                                        "Inconsistencies between the form and supporting documents",
                                        "Unclear travel purpose or itinerary",
                                        "Incomplete or missing mandatory documents",
                                    ].map((item, idx) => (
                                        <MotionDiv
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.07 }}
                                            className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-sm"
                                        >
                                            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                                            <span className="font-body font-semibold text-foreground text-sm">{item}</span>
                                        </MotionDiv>
                                    ))}
                                </div>
                            </MotionDiv>
                        </div>
                    </section>
                </>
            )}

            {/* UAE Specifics */}
            {id === "uae" && (
                <>
                    {/* Intro */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    Dubai and the wider UAE are among the most popular destinations especially for Indian travellers for shopping, family holidays, world-class attractions and fast-growing business links. The best part is how quick the visa process is. With minimal documents and processing often in just a few working days, a UAE tourist or business visit visa is one of the smoothest applications we handle.
                                </p>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    SmotVisa offers the full range of UAE visit visas — 30-day and 60-day tourist visas, and business visit visas with express options for urgent travel. We check your documents, submit accurately, and keep your trip on schedule.
                                </p>
                                <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-sm font-display font-bold text-foreground bg-muted/50 border border-border rounded-2xl px-6 py-4 mt-4">
                                    <span>Heading to Dubai soon? Get your UAE visa started today.</span>
                                    <span className="hidden sm:block text-border">|</span>
                                    <a href="tel:+918904008843" className="text-secondary hover:underline">Call / WhatsApp +91-8904008843</a>
                                    <span className="hidden sm:block text-border">•</span>
                                    <a href="mailto:info@smotvisa.com" className="text-secondary hover:underline">Email info@smotvisa.com</a>
                                    <span className="hidden sm:block text-border">•</span>
                                    <span>Or send an enquiry on smotvisa.com for a free consultation.</span>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Why Choose SmotVisa */}
                    <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-b border-border">
                        <div className="container mx-auto px-4">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Why Choose SmotVisa for Your UAE Visa</h2>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {[
                                    { icon: Clock, title: "Fast Processing", desc: "Many Dubai visas are ready in just 2 to 3 working days, with express options available." },
                                    { icon: Globe, title: "30 & 60 Day Options", desc: "Single and multiple-entry tourist visas to match your trip." },
                                    { icon: Briefcase, title: "Business Visit Visas", desc: "For meetings, exhibitions and trade events in Dubai." },
                                    { icon: CheckCircle2, title: "Minimal Hassle", desc: "We know exactly which documents Dubai requires and check them for you." },
                                    { icon: CircleDollarSign, title: "Transparent Pricing", desc: "Clear costs with no hidden charges." },
                                    { icon: Star, title: "Trusted by Thousands", desc: "50,000+ travellers and a 98% application success rate." },
                                ].map((item, idx) => (
                                    <MotionDiv
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.08 }}
                                        className="bg-card rounded-2xl shadow-card border-l-4 border-secondary\50 border-r border-y border-border p-6 hover:shadow-elevated transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-secondary\10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                                            <item.icon className="h-6 w-6 text-secondary" />
                                        </div>
                                        <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground font-body text-sm leading-relaxed italic">{item.desc}</p>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Tourist or Business Visit Visa */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tourist or Business Visit Visa</h2>
                                </div>
                                <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto text-center">
                                    Dubai offers short-stay visit visas for both leisure and business. Tourist visas come in 30-day and 60-day versions, available as single or multiple entry, ideal for holidays, shopping trips and family visits. Business visit visas suit travellers attending meetings, exhibitions such as those at the Dubai World Trade Centre, or trade negotiations. Both are visit visas — they do not permit employment in Dubai and that is the only travel we assist with.
                                </p>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Who Can Apply</h2>
                                </div>
                                <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto text-center">
                                    Almost any Indian traveller with a valid passport can apply for a UAE visit visa. The documentation is light and the approval process is straightforward for genuine visitors. Note that travellers already holding a valid visa or residence permit from countries such as the US, UK, EU, Canada or Australia may be eligible for a short visa on arrival — we&apos;ll let you know if that applies to you.
                                </p>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Processing Time & Fees */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Processing Time & Fees</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">UAE visa processing is fast. Standard tourist visas are typically issued within three to four working days, while express services can deliver in as little as 48 hours. Fees vary by duration and entry type — 30-day visas are the most popular and economical choice, with 60-day visas costing more for longer stays. We quote exact, all-inclusive pricing before you apply.</p>
                                </div>
                                <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-secondary text-secondary-foreground">
                                                <th className="text-left px-5 py-3 font-display font-bold">Visa Type</th>
                                                <th className="text-left px-5 py-3 font-display font-bold">Typical Use</th>
                                                <th className="text-left px-5 py-3 font-display font-bold">Processing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { type: "30-day tourist visa", use: "Short holidays, family visits", processing: "3–4 working days (express 48h)" },
                                                { type: "60-day tourist visa", use: "Longer stays", processing: "3–4 working days" },
                                                { type: "Business visit visa", use: "Meetings, exhibitions, trade", processing: "3–4 working days" },
                                            ].map((row, idx) => (
                                                <tr key={idx} className={idx % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                                                    <td className="px-5 py-3 font-display font-bold text-foreground">{row.type}</td>
                                                    <td className="px-5 py-3 font-body text-muted-foreground">{row.use}</td>
                                                    <td className="px-5 py-3 font-body text-muted-foreground italic">{row.processing}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Common Reasons UAE Visas Get Held Up */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Common Reasons UAE Visas Get Held Up</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Blurred or incomplete passport copies",
                                        "Photograph not meeting UAE specifications",
                                        "Name spelling mismatches with the passport",
                                        "Insufficient passport validity",
                                        "Previous overstay or immigration issues on record",
                                    ].map((item, idx) => (
                                        <MotionDiv
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.07 }}
                                            className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-sm"
                                        >
                                            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                                            <span className="font-body font-semibold text-foreground text-sm">{item}</span>
                                        </MotionDiv>
                                    ))}
                                </div>
                            </MotionDiv>
                        </div>
                    </section>
                </>
            )}

            {/* Canada Specifics */}
            {id === "canada" && (
                <>
                    {/* Intro */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    Canada is a dream destination for Indian travellers, whether it&apos;s the Rockies, Niagara, a family reunion or a business conference. The visitor visa, officially the Temporary Resident Visa (TRV), SmotVisa prepares your TRV application end to end. We help you complete the online form, build a convincing purpose-of-travel and financial file, and navigate the biometrics.
                                </p>
                                <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-sm font-display font-bold text-foreground bg-muted/50 border border-border rounded-2xl px-6 py-4 mt-4">
                                    <span>Dreaming of Canada? Let&apos;s Connect for Dream Canada</span>
                                    <span className="hidden sm:block text-border">|</span>
                                    <a href="tel:+918904008843" className="text-secondary hover:underline">Call / WhatsApp +91-8904008843</a>
                                    <span className="hidden sm:block text-border">•</span>
                                    <a href="mailto:info@smotvisa.com" className="text-secondary hover:underline">Email info@smotvisa.com</a>
                                    <span className="hidden sm:block text-border">•</span>
                                    <span>Or send an enquiry on smotvisa.com for a free consultation.</span>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Why Choose SmotVisa */}
                    <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-b border-border">
                        <div className="container mx-auto px-4">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Why Choose SmotVisa for Your Canada Visa</h2>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {[
                                    { icon: Users, title: "TRV Visitor Specialists", desc: "Tourism, family-visit and business-visitor applications." },
                                    { icon: Briefcase, title: "Strong Purpose-of-Travel Letters", desc: "The heart of a successful Canadian visitor application." },
                                    { icon: CircleDollarSign, title: "Financial File Expertise", desc: "Clear, well-organised proof of funds that reassures the officer." },
                                    { icon: ShieldCheck, title: "Biometrics Guidance", desc: "We walk you through the VFS biometrics step." },
                                    { icon: CheckCircle2, title: "Honest Scope", desc: "Visitor visas only — no PR, no work permits, no study." },
                                    { icon: Star, title: "Trusted Nationwide", desc: "5,000+ travellers and a 99% application success rate." },
                                ].map((item, idx) => (
                                    <MotionDiv
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.08 }}
                                        className="bg-card rounded-2xl shadow-card border-l-4 border-secondary/50 border-r border-y border-border p-6 hover:shadow-elevated transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                                            <item.icon className="h-6 w-6 text-secondary" />
                                        </div>
                                        <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground font-body text-sm leading-relaxed italic">{item.desc}</p>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Tourist or Business */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto space-y-8">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Canada Tourist or Business Visitor Visa</h2>
                                </div>
                                <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto text-center">
                                    The TRV is a single visitor visa that covers both purposes. As a tourist you can holiday, sightsee or visit friends and family. As a business visitor you can attend meetings, conferences and trade events or explore business opportunities without entering the Canadian labour market. Many applicants receive multiple-entry visas valid for up to ten years (or until the passport expires), which is excellent for repeat visits.
                                </p>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Who Can Apply Canada Visa</h2>
                                </div>
                                <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto text-center">
                                    Indian travellers with a genuine short-term reason to visit Canada and solid ties to India are well placed to apply. The officer wants to see that your trip is funded, your purpose is clear, and you have strong reasons to return home. First-time travellers with clean finances and stable ties are routinely approved.
                                </p>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Processing Times */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Processing Time & Fees</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">Processing begins once your biometrics are submitted. As of 2026, fresh applications from India are often decided within roughly three to five weeks after biometrics, though official timelines can extend longer during busy periods. You have 30 days from your biometrics instruction letter to attend the VFS centre.</p>
                                </div>
                                <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-secondary text-secondary-foreground">
                                                <th className="text-left px-5 py-3 font-display font-bold">Item</th>
                                                <th className="text-left px-5 py-3 font-display font-bold">Amount / Timeline</th>
                                                <th className="text-left px-5 py-3 font-display font-bold">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { item: "Visitor visa (TRV) fee", amount: "CAD $100", notes: "Paid online to IRCC" },
                                                { item: "Biometrics fee", amount: "CAD $85", notes: "Paid per applicant" },
                                                { item: "Processing after biometrics", amount: "3–5 weeks (varies)", notes: "Longer in peak periods" },
                                            ].map((row, idx) => (
                                                <tr key={idx} className={idx % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                                                    <td className="px-5 py-3 font-display font-bold text-foreground">{row.item}</td>
                                                    <td className="px-5 py-3 font-body text-muted-foreground">{row.amount}</td>
                                                    <td className="px-5 py-3 font-body text-muted-foreground italic">{row.notes}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Common Rejection Reasons */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Common Reasons Canada Visas Get Refused</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Weak ties to India and doubt about returning",
                                        "Insufficient or unexplained funds",
                                        "Vague or unconvincing purpose of travel",
                                        "Incomplete documentation",
                                        "Inconsistencies in the application",
                                        "Travel history concerns or unclear itinerary",
                                    ].map((item, idx) => (
                                        <MotionDiv
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.07 }}
                                            className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-sm"
                                        >
                                            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                                            <span className="font-body font-semibold text-foreground text-sm">{item}</span>
                                        </MotionDiv>
                                    ))}
                                </div>
                            </MotionDiv>
                        </div>
                    </section>
                </>
            )}

            {/* US Specifics */}
            {id === "us" && (
                <>
                    {/* Intro */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    From your DS-160 form to your consulate interview, SmotVisa guides you through every step of the US visitor visa so you walk in prepared and walk out approved.
                                </p>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    Whether you are visiting family in the States, attending a business meeting or conference, or finally taking that long-planned holiday, the US B1/B2 visa is your gateway. It is also one of the most carefully assessed visitor visas in the world, which is exactly why thousands of Indian travellers choose to apply with expert guidance rather than risk a costly mistake.
                                </p>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    At SmotVisa, we have spent over a decade helping travellers across India present clean, well-documented, honest applications. We do not promise outcomes that aren&apos;t ours to give — visa decisions belong to the US consulate alone — but we make sure your paperwork, your DS-160 and your interview answers are as strong as they can possibly be.
                                </p>
                                <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-sm font-display font-bold text-foreground bg-muted/50 border border-border rounded-2xl px-6 py-4 mt-4">
                                    <span>Ready to start your US visa application the right way?</span>
                                    <span className="hidden sm:block text-border">|</span>
                                    <a href="tel:+918904008843" className="text-secondary hover:underline">+91-8904008843</a>
                                    <span className="hidden sm:block text-border">•</span>
                                    <a href="mailto:info@smotvisa.com" className="text-secondary hover:underline">info@smotvisa.com</a>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Why Choose SmotVisa */}
                    <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-b border-border">
                        <div className="container mx-auto px-4">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Why Choose SmotVisa for Your US Visa</h2>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {[
                                    { icon: Award, title: "20+ Years of Visa Experience", desc: "Led by Mr. Shaji Kandambeth, with two decades in the travel documentation industry." },
                                    { icon: Briefcase, title: "B1/B2 Specialists", desc: "We handle tourist and business visitor cases day in, day out, including first-time applicants." },
                                    { icon: ShieldCheck, title: "Honest, Transparent Guidance", desc: "Clear pricing, no false guarantees, and no immigration or job-placement gimmicks." },
                                    { icon: Users, title: "Interview Preparation", desc: "Mock questions and answer coaching tailored to your real profile." },
                                    { icon: CheckCircle2, title: "End-to-End Support", desc: "DS-160 filling, fee payment guidance, appointment booking and document review." },
                                    { icon: Star, title: "Trusted by 5000+ Travellers", desc: "With a 99% application success rate across 50+ countries." },
                                ].map((item, idx) => (
                                    <MotionDiv
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.08 }}
                                        className="bg-card rounded-2xl shadow-card border-l-4 border-secondary/50 border-r border-y border-border p-6 hover:shadow-elevated transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                                            <item.icon className="h-6 w-6 text-secondary" />
                                        </div>
                                        <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground font-body text-sm leading-relaxed italic">{item.desc}</p>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* B1 vs B2 */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto space-y-8">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tourist Visa vs Business Visa</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">The United States combines both visitor purposes into a single B1/B2 visa. Most travellers receive a combined stamp valid for up to ten years with multiple entries.</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-card rounded-[2.5rem] shadow-card border border-border hover:border-secondary/30 transition-all">
                                        <h3 className="text-xl font-display font-bold text-foreground mb-4">B2 — Tourist Visa</h3>
                                        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 italic">For leisure, personal visits, and medical travel.</p>
                                        <ul className="space-y-3">
                                            {["Tourism & holidays", "Visiting friends & relatives", "Medical treatment", "Cultural or recreational events"].map((it) => (
                                                <li key={it} className="flex items-center gap-3 text-sm font-display font-bold text-foreground/80">
                                                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-6 bg-card rounded-[2.5rem] shadow-card border border-border hover:border-secondary/30 transition-all">
                                        <h3 className="text-xl font-display font-bold text-foreground mb-4">B1 — Business Visa</h3>
                                        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 italic">For short-stay professional activities — not employment.</p>
                                        <ul className="space-y-3">
                                            {["Attending meetings & conferences", "Negotiating contracts", "Trade shows & exhibitions", "Short-term unpaid training"].map((it) => (
                                                <li key={it} className="flex items-center gap-3 text-sm font-display font-bold text-foreground/80">
                                                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-secondary/5 rounded-2xl border border-secondary/20 text-center">
                                    <p className="text-sm font-display font-bold text-foreground/80 italic">Neither category permits paid employment in the US. SmotVisa only assists with genuine visitor travel.</p>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Who Can Apply</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">The B1/B2 visa is open to almost any Indian traveller with a genuine short-term reason to visit the US and strong reasons to return home.</p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Stable employment or a running business",
                                        "Clear and verifiable finances",
                                        "Family or property ties in India",
                                        "Honest, well-defined travel purpose",
                                        "First-time travellers with a solid profile",
                                        "Previous travel history (not mandatory)",
                                    ].map((item, idx) => (
                                        <MotionDiv
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.07 }}
                                            className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-sm hover:border-secondary/40 transition-colors"
                                        >
                                            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                                            <span className="font-body font-semibold text-foreground text-sm">{item}</span>
                                        </MotionDiv>
                                    ))}
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Processing Times */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Processing Time & Appointment Waits</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">US visitor visa timelines depend almost entirely on interview appointment availability. As of 2026, wait times vary by consulate.</p>
                                </div>
                                <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-secondary text-secondary-foreground">
                                                <th className="text-left px-5 py-3 font-display font-bold">Route</th>
                                                <th className="text-left px-5 py-3 font-display font-bold">Typical Timeline</th>
                                                <th className="text-left px-5 py-3 font-display font-bold">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { route: "Fresh B1/B2 interview", timeline: "6 weeks – several months", notes: "Depends on consulate appointment availability" },
                                                { route: "Interview Waiver (dropbox)", timeline: "2 – 6 weeks", notes: "For eligible renewals, no refusal history" },
                                                { route: "MRV fee", timeline: "US $185 (~₹15,500)", notes: "Non-refundable, valid 1 year from payment" },
                                            ].map((row, idx) => (
                                                <tr key={idx} className={idx % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                                                    <td className="px-5 py-3 font-display font-bold text-foreground">{row.route}</td>
                                                    <td className="px-5 py-3 font-body text-muted-foreground">{row.timeline}</td>
                                                    <td className="px-5 py-3 font-body text-muted-foreground italic">{row.notes}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Common Rejection Reasons */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Common Reasons US Visas Get Refused</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">Understanding why applications fail is the best way to avoid it. Our entire process is built to address each of these before you reach the interview window.</p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Weak ties to India — doubt you will return",
                                        "Inconsistent answers between DS-160 and interview",
                                        "Unclear or unconvincing travel purpose",
                                        "Insufficient or poorly explained finances",
                                        "Errors or omissions on the DS-160 form",
                                        "Nervous, over-rehearsed or evasive answers",
                                    ].map((item, idx) => (
                                        <MotionDiv
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.07 }}
                                            className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-sm"
                                        >
                                            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                                            <span className="font-body font-semibold text-foreground text-sm">{item}</span>
                                        </MotionDiv>
                                    ))}
                                </div>
                            </MotionDiv>
                        </div>
                    </section>
                </>
            )}

            {/* Schengen Specifics */}
            {id === "schengen" && (
                <>
                    {/* Intro */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    Why SmotVisa shines is because we consult the correct way to get a Schengen visa based on your eligibility, itinerary, arrange the required €30,000 travel insurance, build a clean document and finance file, and book your VFS or BLS appointment.
                                </p>
                                <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-sm font-display font-bold text-foreground bg-muted/50 border border-border rounded-2xl px-6 py-4 mt-4">
                                    <span>Planning a European holiday? Let&apos;s build your Schengen application right.</span>
                                    <span className="hidden sm:block text-border">|</span>
                                    <a href="tel:+918904008843" className="text-secondary hover:underline">Call / WhatsApp +91-8904008843</a>
                                    <span className="hidden sm:block text-border">•</span>
                                    <a href="mailto:info@smotvisa.com" className="text-secondary hover:underline">Email info@smotvisa.com</a>
                                    <span className="hidden sm:block text-border">•</span>
                                    <span>Or send an enquiry on smotvisa.com for a free consultation.</span>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Why Choose SmotVisa */}
                    <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-b border-border">
                        <div className="container mx-auto px-4">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Why Choose SmotVisa for Your Schengen Visa</h2>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {[
                                    { icon: Globe, title: "Correct Embassy Selection", desc: "The single most common mistake — we get it right based on your main destination." },
                                    { icon: ShieldCheck, title: "Mandatory Travel Insurance Arranged", desc: "Compliant €30,000 cover across all Schengen countries." },
                                    { icon: Briefcase, title: "Itinerary & Finance File", desc: "Flight, hotel and bank documents organised to embassy standards." },
                                    { icon: Clock, title: "Appointment Booking", desc: "VFS Global or BLS appointments handled for you." },
                                    { icon: Users, title: "Tourist and Business Covered", desc: "Holidays, family visits and business meetings alike." },
                                    { icon: Star, title: "Proven Results", desc: "5,000+ travellers and a 99% application success rate." },
                                ].map((item, idx) => (
                                    <MotionDiv
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.08 }}
                                        className="bg-card rounded-2xl shadow-card border-l-4 border-secondary\50 border-r border-y border-border p-6 hover:shadow-elevated transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-secondary\10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                                            <item.icon className="h-6 w-6 text-secondary" />
                                        </div>
                                        <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground font-body text-sm leading-relaxed italic">{item.desc}</p>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Which Embassy Do You Apply To */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Which Embassy Do You Apply To?</h2>
                                </div>
                                <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto text-center">
                                    Schengen rules require you to apply to the embassy of the country that is your main destination — where you&apos;ll spend the most days. If you&apos;re spending equal time in several countries, you apply to the country you enter first. Getting this wrong is a leading cause of rejection, so we map your itinerary carefully and confirm the correct embassy before you do anything else. The same Type C short-stay visa covers both tourism and business travel.
                                </p>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Who Can Apply</h2>
                                </div>
                                <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto text-center">
                                    Any Indian traveller with a genuine short-stay purpose — tourism, visiting family, or business — and the funds to support the trip can apply. Embassies look for a clear itinerary, sufficient funds, valid insurance and strong ties to India. First-time travellers with a complete, honest file are approved regularly; the quality of the documentation matters more than a long travel history.
                                </p>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Processing Time & Fees */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Processing Time & Fees</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">As of 2026, the Schengen visa fee is €90 for adults and €45 for children aged 6–12, with separate VFS or BLS service charges. Standard processing is around 15 calendar days but can extend to 30 and up to 60 days in complex cases or peak periods. You can apply up to six months before travel and must apply at least 15 days ahead; we recommend submitting at least three weeks before departure. Mandatory travel insurance of at least €30,000 must be in place before you submit.</p>
                                </div>
                                <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-secondary text-secondary-foreground">
                                                <th className="text-left px-5 py-3 font-display font-bold">Item</th>
                                                <th className="text-left px-5 py-3 font-display font-bold">Amount / Timeline</th>
                                                <th className="text-left px-5 py-3 font-display font-bold">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { item: "Adult visa fee", amount: "€90 (₹9,000)", notes: "Plus VFS/BLS service charge" },
                                                { item: "Child fee (6–12)", amount: "€45 (₹4,500)", notes: "Under 6 often exempt" },
                                                { item: "Processing time", amount: "15 days (up to 30–60)", notes: "Apply at least 3 weeks before travel" },
                                                { item: "Travel insurance", amount: "Min €30,000 cover", notes: "Mandatory before submission" },
                                            ].map((row, idx) => (
                                                <tr key={idx} className={idx % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                                                    <td className="px-5 py-3 font-display font-bold text-foreground">{row.item}</td>
                                                    <td className="px-5 py-3 font-body text-muted-foreground">{row.amount}</td>
                                                    <td className="px-5 py-3 font-body text-muted-foreground italic">{row.notes}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Common Rejection Reasons */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Common Reasons Schengen Visas Get Refused</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Applying at the wrong embassy for your itinerary",
                                        "Missing or non-compliant travel insurance",
                                        "Insufficient funds or unexplained bank deposits",
                                        "Unclear or inconsistent itinerary",
                                        "Weak ties to India and doubts about return",
                                        "Incomplete documents or a poorly written cover letter",
                                    ].map((item, idx) => (
                                        <MotionDiv
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.07 }}
                                            className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-sm"
                                        >
                                            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                                            <span className="font-body font-semibold text-foreground text-sm">{item}</span>
                                        </MotionDiv>
                                    ))}
                                </div>
                            </MotionDiv>
                        </div>
                    </section>
                </>
            )}

            {/* Requirements & Process */}
            <section id="requirements" className="py-14">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Requirements */}
                        <MotionDiv
                            initial={{ opacity: 0, x: 0 }}
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
                        </MotionDiv>

                        {/* Steps */}
                        <MotionDiv
                            initial={{ opacity: 0, x: 0 }}
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
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-14 bg-muted/50 border-t border-border">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-8 space-y-4">
                        <h2 className="text-4xl font-display font-bold text-foreground">Frequently Asked Intel</h2>
                        <p className="text-muted-foreground font-body text-lg italic">Expert insights on {visa.name} visa processing.</p>
                    </div>
                    <VisaFAQClient faqs={visa.faqs} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-10 container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 0, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary p-6 md:p-10 rounded-[2.5rem] shadow-elevated relative overflow-hidden text-center border border-white/10"
                >
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                    <div className="relative z-10 max-w-2xl mx-auto space-y-5">
                        <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground leading-tight">
                            Ready to Start Your {visa.name} Application?
                        </h2>
                        <p className="text-sm md:text-base text-primary-foreground/70 font-body leading-relaxed">
                            Get a professional consultation from our team — we handle every detail from documents to appointment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground font-display font-bold text-sm rounded-xl hover:translate-y-[-2px] transition-all shadow-gold group">
                                Consult with Experts <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-white/20 text-white font-display font-bold text-sm rounded-xl hover:bg-white/10 transition-all">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </MotionDiv>
            </section>
        </>
    );
}