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
    ];

    return (
        <>
            {/* Australia Specifics */}
            {id === "australia" && (
                <>
                    {/* Tourist Stream or Business Stream */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Visa Types</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Tourist Stream or Business Stream — Subclass 600</h2>
                                <p className="text-sm font-body text-foreground/70 mt-2">The Subclass 600 is Australia's visitor visa with separate streams for different purposes. Neither stream permits work for an Australian employer — these are genuine visitor visas.</p>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-sm font-display font-bold text-foreground mb-4 pb-2 border-b border-border">Tourist Stream</h3>
                                    <ul className="space-y-3">
                                        {["Holidays & sightseeing", "Visiting friends and family", "Short recreational courses", "Medical treatment"].map((it) => (
                                            <li key={it} className="flex items-center gap-3 text-sm font-body text-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-sm font-display font-bold text-foreground mb-4 pb-2 border-b border-border">Business Visitor Stream</h3>
                                    <ul className="space-y-3">
                                        {["Meetings & conferences", "Negotiations & contract discussions", "Trade shows & exhibitions", "Short unpaid training"].map((it) => (
                                            <li key={it} className="flex items-center gap-3 text-sm font-body text-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <p className="text-xs font-body text-foreground/60 mt-8 pt-6 border-t border-border">Visas are commonly granted for stays of 3, 6 or 12 months depending on your purpose and profile.</p>
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Eligibility</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Who Can Apply for Australia Tourist Visa</h2>
                                <p className="text-sm font-body text-foreground/70 mt-2">Indian travellers with a genuine visit purpose, sufficient funds and strong ties to India. First-time travellers with a clean profile are regularly approved.</p>
                            </MotionDiv>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Clear finances sufficient to cover the trip",
                                    "Stable job, business or family ties in India",
                                    "Credible itinerary and travel purpose",
                                    "Genuine intention to leave after the visit",
                                    "First-time travellers with a solid profile",
                                    "Good travel history (helpful but not essential)",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/50">
                                        <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                                        <span className="font-body text-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Uluru image between sections */}
                    <div className="w-full h-56 sm:h-72 overflow-hidden border-y border-border">
                        <img src="/images/australia-bondi.webp" alt="Bondi Beach aerial view, Sydney — Australia Visa" width={900} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </div>

                    {/* Why Choose SmotVisa */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Why SmotVisa</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Why Choose SmotVisa for Your Australia Visa</h2>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    { icon: Users, title: "Subclass 600 Specialists", desc: "Tourist and Business Visitor streams handled with care every day." },
                                    { icon: Briefcase, title: "ImmiAccount Expertise", desc: "Accurate online application with the right supporting evidence — no guesswork." },
                                    { icon: CircleDollarSign, title: "Clear Financial Presentation", desc: "Well-organised proof of funds that supports your case with the officer." },
                                    { icon: Clock, title: "Flexible Durations", desc: "Guidance on 3, 6 or 12-month validity to suit your travel plans." },
                                    { icon: CheckCircle2, title: "Visitor-Only Scope", desc: "No skilled migration, PR or work-visa positioning — just genuine visitor visas." },
                                    { icon: Star, title: "Reliable Track Record", desc: "2,000+ Australia travellers with a 98% application success rate." },
                                ].map((item, idx) => (
                                    <MotionDiv key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                                        className="flex items-start gap-4 p-4 rounded-lg bg-muted/40 border border-border/50">
                                        <item.icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="text-sm font-display font-bold text-foreground mb-1">{item.title}</h3>
                                            <p className="text-sm font-body text-foreground/70 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Processing Time & Fees */}
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Fees & Processing</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Processing Time & Fees</h2>
                                <p className="text-sm font-body text-foreground/70 mt-2">The base Subclass 600 charge is around AUD $190–200. Around 75% of tourist applications are decided within 20 business days and 90% within about 30 days.</p>
                            </MotionDiv>
                            <div className="overflow-hidden rounded-xl border border-border">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-primary text-primary-foreground">
                                            <th className="text-left px-5 py-3 font-display font-bold">Item</th>
                                            <th className="text-left px-5 py-3 font-display font-bold">Amount</th>
                                            <th className="text-left px-5 py-3 font-display font-bold">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { item: "Subclass 600 base charge", amount: "AUD $190–200", notes: "Offshore application from India" },
                                            { item: "Processing time", amount: "15–25 business days", notes: "75% within 20 days" },
                                            { item: "Health insurance", amount: "Recommended", notes: "Not mandatory for the visa" },
                                        ].map((row, idx) => (
                                            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                                                <td className="px-5 py-3 font-display font-bold text-foreground">{row.item}</td>
                                                <td className="px-5 py-3 font-body text-foreground/70">{row.amount}</td>
                                                <td className="px-5 py-3 font-body text-foreground/70">{row.notes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Common Rejection Reasons */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Watch Out</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Common Reasons Australia Visas Get Refused</h2>
                            </MotionDiv>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Insufficient funds or poorly presented finances",
                                    "Weak ties to India and doubts about return",
                                    "Unclear or inconsistent travel purpose",
                                    "Incomplete documentation",
                                    "Discrepancies in declarations",
                                    "Vague itinerary or accommodation details",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/50">
                                        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                                        <span className="font-body text-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* UK Specifics */}
            {id === "uk" && (
                <>
                    {/* Why Choose SmotVisa */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Why SmotVisa</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Why Choose SmotVisa for Your UK Visa</h2>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    { icon: Users, title: "Standard Visitor Visa Experts", desc: "Tourism, family visits and business visitors all covered under one route." },
                                    { icon: CircleDollarSign, title: "Financial Documentation Done Right", desc: "The area where most UK refusals happen — we get it clean and clear." },
                                    { icon: Clock, title: "Short-term & Long-term Options", desc: "We advise whether a 6-month, 2, 5 or 10-year visa suits your travel pattern." },
                                    { icon: Globe, title: "Online Application Support", desc: "Accurate completion of the GOV.UK application and VFS appointment booking." },
                                    { icon: ShieldCheck, title: "Transparent Pricing", desc: "Upfront fees with no surprises and no immigration up-selling." },
                                    { icon: Star, title: "Proven Track Record", desc: "5000+ travellers served with a 99% application success rate." },
                                ].map((item, idx) => (
                                    <MotionDiv key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                                        className="flex items-start gap-4 p-4 rounded-lg bg-muted/40 border border-border/50">
                                        <item.icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="text-sm font-display font-bold text-foreground mb-1">{item.title}</h3>
                                            <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                                        </div>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* One Visa, Both Purposes */}
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Visa Types</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Tourist or Business — One Visa, Both Purposes</h2>
                                <p className="text-sm font-body text-muted-foreground mt-2">The UK Standard Visitor visa covers both. Standard visas are issued for six months; frequent travellers can apply for 2, 5 or 10-year visas.</p>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-sm font-display font-bold text-foreground mb-4 pb-2 border-b border-border">Tourism & Personal</h3>
                                    <ul className="space-y-3">
                                        {["Holidays & sightseeing", "Visiting friends and family", "Medical treatment", "Short recreational courses"].map((it) => (
                                            <li key={it} className="flex items-center gap-3 text-sm font-body text-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-sm font-display font-bold text-foreground mb-4 pb-2 border-b border-border">Business Activities</h3>
                                    <ul className="space-y-3">
                                        {["Meetings & conferences", "Signing contracts & negotiations", "Trade shows & exhibitions", "Short unpaid training"].map((it) => (
                                            <li key={it} className="flex items-center gap-3 text-sm font-body text-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <p className="text-xs font-body text-muted-foreground mt-8 pt-6 border-t border-border">Paid or unpaid work, including freelance work, is not permitted. SmotVisa only assists with genuine visitor travel.</p>
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Eligibility</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Who Can Apply</h2>
                                <p className="text-sm font-body text-muted-foreground mt-2">Any Indian traveller with a genuine short-term purpose and the funds to cover the trip without working can apply.</p>
                            </MotionDiv>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Clear finances sufficient to cover the trip",
                                    "Stable job, business, family or property ties in India",
                                    "Credible plan to leave the UK at end of visit",
                                    "Honest and well-defined travel purpose",
                                    "First-time travellers with a solid profile",
                                    "Good travel history (helpful but not essential)",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/50">
                                        <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                                        <span className="font-body text-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Processing Times */}
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Fees & Processing</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Processing Time & Fees</h2>
                                <p className="text-sm font-body text-muted-foreground mt-2">Standard processing takes around three weeks from biometrics. Priority service returns a decision in about five working days.</p>
                            </MotionDiv>
                            <div className="overflow-hidden rounded-xl border border-border">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-primary text-primary-foreground">
                                            <th className="text-left px-5 py-3 font-display font-bold">Visa Type</th>
                                            <th className="text-left px-5 py-3 font-display font-bold">Typical Fee (2026)</th>
                                            <th className="text-left px-5 py-3 font-display font-bold">Processing</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { type: "6-month Standard Visitor", fee: "Rs.16,500", processing: "Around 3 weeks" },
                                            { type: "Priority service add-on", fee: "Extra fee", processing: "Around 5 working days" },
                                            { type: "2 / 5 / 10-year visitor", fee: "Higher (multi-year value)", processing: "Around 3 weeks" },
                                        ].map((row, idx) => (
                                            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                                                <td className="px-5 py-3 font-display font-bold text-foreground">{row.type}</td>
                                                <td className="px-5 py-3 font-body text-muted-foreground">{row.fee}</td>
                                                <td className="px-5 py-3 font-body text-muted-foreground">{row.processing}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Common Rejection Reasons */}
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Watch Out</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Common Reasons UK Visas Get Refused</h2>
                                <p className="text-sm font-body text-muted-foreground mt-2">Financial evidence is the most scrutinised part of a UK application. Our process is built to address these issues upfront.</p>
                            </MotionDiv>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Insufficient or unexplained funds in bank statements",
                                    "Large unexplained deposits shortly before applying",
                                    "Weak evidence of ties to India",
                                    "Inconsistencies between the form and supporting documents",
                                    "Unclear travel purpose or itinerary",
                                    "Incomplete or missing mandatory documents",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/50">
                                        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                                        <span className="font-body text-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* UAE Specifics */}
            {id === "uae" && (
                <>
                    {/* Tourist or Business Visit Visa */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                                <p className="text-sm font-body text-foreground/80 leading-relaxed mb-6">SmotVisa offers the full range of UAE visit visas — 30-day and 60-day tourist visas, and business visit visas with express options for urgent travel. We check your documents, submit accurately, and keep your trip on schedule.</p>
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Visa Types</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Tourist or Business Visit — Which One Do You Need?</h2>
                                <p className="text-sm font-body text-foreground/70 mt-2">Dubai offers short-stay visit visas for both leisure and business. Neither permit employment in Dubai — these are genuine visit visas and that is the only travel we assist with.</p>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-sm font-display font-bold text-foreground mb-4 pb-2 border-b border-border">Tourist Visa (30 or 60 day)</h3>
                                    <ul className="space-y-3">
                                        {["Holidays & shopping trips", "Family visits", "Sightseeing & attractions", "Single or multiple entry"].map((it) => (
                                            <li key={it} className="flex items-center gap-3 text-sm font-body text-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-sm font-display font-bold text-foreground mb-4 pb-2 border-b border-border">Business Visit Visa</h3>
                                    <ul className="space-y-3">
                                        {["Meetings & negotiations", "Dubai World Trade Centre events", "Exhibitions & trade shows", "Short unpaid business activity"].map((it) => (
                                            <li key={it} className="flex items-center gap-3 text-sm font-body text-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Eligibility</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Who Can Apply for a UAE Visit Visa</h2>
                                <p className="text-sm font-body text-foreground/70 mt-2">Almost any Indian traveller with a valid passport. Documentation is light and approvals are fast for genuine visitors.</p>
                            </MotionDiv>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Valid Indian passport with 6+ months remaining",
                                    "Clear travel purpose (tourism or business)",
                                    "Sufficient funds for the stay",
                                    "Return flight or onward travel",
                                    "US/UK/EU visa holders may get visa on arrival",
                                    "First-time applicants welcomed",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/50">
                                        <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                                        <span className="font-body text-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Palm Jumeirah aerial image between sections */}
                    <div className="w-full h-56 sm:h-72 overflow-hidden border-y border-border">
                        <img src="/images/dubai-palm-aerial.webp" alt="Palm Jumeirah aerial view, Dubai — UAE Visa" width={900} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </div>

                    {/* Why Choose SmotVisa */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Why SmotVisa</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Why Choose SmotVisa for Your UAE Visa</h2>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    { icon: Clock, title: "Fast Processing", desc: "Most Dubai visas are ready in 2–3 working days, with express options for urgent travel." },
                                    { icon: Globe, title: "30 & 60 Day Options", desc: "Single and multiple-entry tourist visas to match your trip duration." },
                                    { icon: Briefcase, title: "Business Visit Visas", desc: "For meetings, exhibitions and trade events — handled efficiently." },
                                    { icon: CheckCircle2, title: "Minimal Hassle", desc: "We know exactly what Dubai requires and check every document before submission." },
                                    { icon: CircleDollarSign, title: "Transparent Pricing", desc: "Clear, all-inclusive costs quoted upfront — no hidden charges." },
                                    { icon: Star, title: "Trusted by Thousands", desc: "50,000+ travellers assisted with a 98% application success rate." },
                                ].map((item, idx) => (
                                    <MotionDiv key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                                        className="flex items-start gap-4 p-4 rounded-lg bg-muted/40 border border-border/50">
                                        <item.icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="text-sm font-display font-bold text-foreground mb-1">{item.title}</h3>
                                            <p className="text-sm font-body text-foreground/70 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Processing Time & Fees */}
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Fees & Processing</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Processing Time & Fees</h2>
                                <p className="text-sm font-body text-foreground/70 mt-2">UAE processing is the fastest of any destination we handle. Standard visas in 3–4 working days; express in 48 hours.</p>
                            </MotionDiv>
                            <div className="overflow-hidden rounded-xl border border-border">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-primary text-primary-foreground">
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
                                            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                                                <td className="px-5 py-3 font-display font-bold text-foreground">{row.type}</td>
                                                <td className="px-5 py-3 font-body text-foreground/70">{row.use}</td>
                                                <td className="px-5 py-3 font-body text-foreground/70">{row.processing}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Common Reasons UAE Visas Get Held Up */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Watch Out</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Common Reasons UAE Visas Get Held Up</h2>
                            </MotionDiv>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Blurred or incomplete passport copies",
                                    "Photograph not meeting UAE specifications",
                                    "Name spelling mismatches with the passport",
                                    "Insufficient passport validity",
                                    "Previous overstay or immigration issues on record",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/50">
                                        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                                        <span className="font-body text-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Canada Specifics */}
            {id === "canada" && (
                <>
                    {/* Why Choose SmotVisa */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Why SmotVisa</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Why Choose SmotVisa for Your Canada Visa</h2>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    { icon: Users, title: "TRV Visitor Specialists", desc: "Tourism, family-visit and business-visitor applications handled daily." },
                                    { icon: Briefcase, title: "Strong Purpose-of-Travel Letters", desc: "The heart of a successful Canadian visitor application — we craft it well." },
                                    { icon: CircleDollarSign, title: "Financial File Expertise", desc: "Clear, well-organised proof of funds that reassures the officer." },
                                    { icon: ShieldCheck, title: "Biometrics Guidance", desc: "We walk you through the VFS biometrics step from start to finish." },
                                    { icon: CheckCircle2, title: "Honest Scope", desc: "Visitor visas only — no PR, no work permits, no study permits." },
                                    { icon: Star, title: "Trusted Nationwide", desc: "5,000+ travellers helped with a 99% application success rate." },
                                ].map((item, idx) => (
                                    <MotionDiv key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                                        className="flex items-start gap-4 p-4 rounded-lg bg-muted/40 border border-border/50">
                                        <item.icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="text-sm font-display font-bold text-foreground mb-1">{item.title}</h3>
                                            <p className="text-sm font-body text-foreground/70 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Image — Niagara Falls */}
                    <div className="w-full h-56 sm:h-72 overflow-hidden border-y border-border">
                        <img src="/images/canada-niagara.webp" alt="Niagara Falls, Canada — Canada Visitor Visa" width={900} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </div>

                    {/* Tourist or Business */}
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Visa Types</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Tourist or Business — One Visa</h2>
                                <p className="text-sm font-body text-foreground/70 mt-2">The TRV is a single visitor visa that covers both purposes. Many applicants receive multiple-entry visas valid for up to ten years — excellent for repeat visits.</p>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-sm font-display font-bold text-foreground mb-4 pb-2 border-b border-border">Tourism & Personal</h3>
                                    <ul className="space-y-3">
                                        {["Holidays & sightseeing", "Visiting friends and family", "Medical treatment", "Short recreational courses"].map((it) => (
                                            <li key={it} className="flex items-center gap-3 text-sm font-body text-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-sm font-display font-bold text-foreground mb-4 pb-2 border-b border-border">Business Activities</h3>
                                    <ul className="space-y-3">
                                        {["Meetings & conferences", "Trade shows & exhibitions", "Exploring business opportunities", "Short unpaid training"].map((it) => (
                                            <li key={it} className="flex items-center gap-3 text-sm font-body text-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Eligibility</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Who Can Apply</h2>
                                <p className="text-sm font-body text-foreground/70 mt-2">Indian travellers with a genuine short-term reason to visit Canada and solid ties to India. First-time travellers with clean finances are routinely approved.</p>
                            </MotionDiv>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Clear finances sufficient to cover the trip",
                                    "Stable job, business or family ties in India",
                                    "Clear and honest travel purpose",
                                    "Credible plan to return home",
                                    "First-time travellers with solid profile",
                                    "Good travel history (helpful but not essential)",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/50">
                                        <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                                        <span className="font-body text-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Processing Times */}
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Fees & Processing</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Processing Time & Fees</h2>
                                <p className="text-sm font-body text-foreground/70 mt-2">Processing begins once biometrics are submitted. Most India applications are decided within 3 to 5 weeks after biometrics. You have 30 days from your biometrics instruction letter to attend VFS.</p>
                            </MotionDiv>
                            <div className="overflow-hidden rounded-xl border border-border">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-primary text-primary-foreground">
                                            <th className="text-left px-5 py-3 font-display font-bold">Item</th>
                                            <th className="text-left px-5 py-3 font-display font-bold">Amount</th>
                                            <th className="text-left px-5 py-3 font-display font-bold">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { item: "Visitor visa (TRV) fee", amount: "CAD $100", notes: "Paid online to IRCC" },
                                            { item: "Biometrics fee", amount: "CAD $85", notes: "Paid per applicant" },
                                            { item: "Processing after biometrics", amount: "Around 3 to 5 weeks", notes: "Longer in peak periods" },
                                        ].map((row, idx) => (
                                            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                                                <td className="px-5 py-3 font-display font-bold text-foreground">{row.item}</td>
                                                <td className="px-5 py-3 font-body text-foreground/70">{row.amount}</td>
                                                <td className="px-5 py-3 font-body text-foreground/70">{row.notes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Image — Canadian Rockies */}
                    <div className="w-full h-56 sm:h-72 overflow-hidden border-y border-border">
                        <img src="/images/canada-rockies.webp" alt="Lake Agnes, Canadian Rockies, Banff — Canada Visa" width={900} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </div>

                    {/* Common Rejection Reasons */}
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Watch Out</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Common Reasons Canada Visas Get Refused</h2>
                            </MotionDiv>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Weak ties to India and doubt about returning",
                                    "Insufficient or unexplained funds",
                                    "Vague or unconvincing purpose of travel",
                                    "Incomplete documentation",
                                    "Inconsistencies in the application",
                                    "Travel history concerns or unclear itinerary",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/50">
                                        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                                        <span className="font-body text-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* US Specifics */}
            {id === "us" && (
                <>
                    {/* Why Choose SmotVisa */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Why SmotVisa</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Why Choose SmotVisa for Your US Visa</h2>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    { icon: Award, title: "20+ Years of Visa Experience", desc: "Led by Mr. Shaji Kandambeth, with two decades in the travel documentation industry." },
                                    { icon: Briefcase, title: "B1/B2 Specialists", desc: "We handle tourist and business visitor cases day in, day out, including first-time applicants." },
                                    { icon: ShieldCheck, title: "Honest, Transparent Guidance", desc: "Clear pricing, no false guarantees, and no immigration or job-placement gimmicks." },
                                    { icon: Users, title: "Interview Preparation", desc: "Mock questions and answer coaching tailored to your real profile." },
                                    { icon: CheckCircle2, title: "End-to-End Support", desc: "DS-160 filling, fee payment guidance, appointment booking and document review." },
                                    { icon: Star, title: "Trusted by 5000+ Travellers", desc: "With a 99% application success rate across 50+ countries." },
                                ].map((item, idx) => (
                                    <MotionDiv key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                                        className="flex items-start gap-4 p-4 rounded-lg bg-muted/40 border border-border/50">
                                        <item.icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="text-sm font-display font-bold text-foreground mb-1">{item.title}</h3>
                                            <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                                        </div>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* B1 vs B2 */}
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Visa Types</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Tourist Visa vs Business Visa</h2>
                                <p className="text-sm font-body text-muted-foreground mt-2">The US combines both into one B1/B2 visa, valid up to 10 years with multiple entries.</p>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-sm font-display font-bold text-foreground mb-4 pb-2 border-b border-border">B2 — Tourist Visa</h3>
                                    <ul className="space-y-3">
                                        {["Tourism & holidays", "Visiting friends & relatives", "Medical treatment", "Cultural or recreational events"].map((it) => (
                                            <li key={it} className="flex items-center gap-3 text-sm font-body text-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-sm font-display font-bold text-foreground mb-4 pb-2 border-b border-border">B1 — Business Visa</h3>
                                    <ul className="space-y-3">
                                        {["Attending meetings & conferences", "Negotiating contracts", "Trade shows & exhibitions", "Short-term unpaid training"].map((it) => (
                                            <li key={it} className="flex items-center gap-3 text-sm font-body text-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <p className="text-xs font-body text-muted-foreground mt-8 pt-6 border-t border-border">Neither category permits paid employment in the US. SmotVisa only assists with genuine visitor travel.</p>
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Eligibility</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Who Can Apply</h2>
                                <p className="text-sm font-body text-muted-foreground mt-2">Open to almost any Indian traveller with a genuine short-term reason to visit and strong ties to return home.</p>
                            </MotionDiv>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Stable employment or a running business",
                                    "Clear and verifiable finances",
                                    "Family or property ties in India",
                                    "Honest, well-defined travel purpose",
                                    "First-time travellers with a solid profile",
                                    "Previous travel history (not mandatory)",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/50">
                                        <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                                        <span className="font-body text-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Processing Times */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-xl sm:text-base font-display font-bold text-foreground">Processing Time & Appointment Waits</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">US visitor visa timelines depend almost entirely on interview appointment availability. As of 2026, wait times vary by consulate.</p>
                                </div>
                                <div className="overflow-hidden rounded-xl border border-border shadow-sm">
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
                                                { route: "Fresh B1/B2 interview", timeline: "6 weeks -- several months", notes: "Depends on consulate appointment availability" },
                                                { route: "Interview Waiver (dropbox)", timeline: "2 -- 6 weeks", notes: "For eligible renewals, no refusal history" },
                                                { route: "MRV fee", timeline: "US $185 (~Rs.15,500)", notes: "Non-refundable, valid 1 year from payment" },
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
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Watch Out</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Common Reasons US Visas Get Refused</h2>
                                <p className="text-sm font-body text-muted-foreground mt-2">Understanding why applications fail is the best way to avoid it. The most frequent reasons under section 214(b) and general scrutiny include — and our entire process is built to address each of these before you reach the interview window.</p>
                            </MotionDiv>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Weak ties to India, doubt you will return",
                                    "Inconsistent answers between DS-160 and interview",
                                    "Unclear or unconvincing travel purpose",
                                    "Insufficient or poorly explained finances",
                                    "Errors or omissions on the DS-160 form",
                                    "Nervous, over-rehearsed or evasive answers",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/50">
                                        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                                        <span className="font-body text-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Schengen Specifics */}
            {id === "schengen" && (
                <>
                    {/* Which Embassy */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Embassy Selection</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Which Embassy Do You Apply To?</h2>
                                <p className="text-sm font-body text-foreground/70 mt-2">Schengen rules require you to apply to the embassy of your main destination — where you spend the most days. Getting this wrong is a leading cause of rejection. We map your itinerary carefully and confirm the correct embassy before anything else.</p>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-sm font-display font-bold text-foreground mb-4 pb-2 border-b border-border">Tourist Visa (Type C)</h3>
                                    <ul className="space-y-3">
                                        {["Holidays & sightseeing across Europe", "Visiting friends and family", "Short recreational courses", "Up to 90 days in any 180-day period"].map((it) => (
                                            <li key={it} className="flex items-center gap-3 text-sm font-body text-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-sm font-display font-bold text-foreground mb-4 pb-2 border-b border-border">Business Visitor (Type C)</h3>
                                    <ul className="space-y-3">
                                        {["Meetings & conferences", "Trade fairs & exhibitions", "Contract negotiations", "Same visa as tourist — different purpose"].map((it) => (
                                            <li key={it} className="flex items-center gap-3 text-sm font-body text-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Eligibility</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Who Can Apply for a Schengen Visa</h2>
                                <p className="text-sm font-body text-foreground/70 mt-2">Any Indian traveller with a genuine short-stay purpose. Documentation quality matters more than travel history — first-timers with a clean, complete file are approved regularly.</p>
                            </MotionDiv>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Valid Indian passport with 3+ months beyond return date",
                                    "Clear travel purpose — tourism, family or business",
                                    "Sufficient funds to cover the entire stay",
                                    "Mandatory EUR 30,000 travel insurance",
                                    "Confirmed accommodation and flight bookings",
                                    "Strong ties to India (job, property, family)",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/50">
                                        <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                                        <span className="font-body text-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Santorini image between sections */}
                    <div className="w-full h-56 sm:h-72 overflow-hidden border-y border-border">
                        <img src="/images/europe-prague.webp" alt="Charles Bridge at dawn, Prague — Schengen Visa" width={900} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </div>

                    {/* Why Choose SmotVisa */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Why SmotVisa</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Why Choose SmotVisa for Your Schengen Visa</h2>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    { icon: Globe, title: "Correct Embassy Selection", desc: "The single most common mistake — we get it right based on your exact itinerary." },
                                    { icon: ShieldCheck, title: "Travel Insurance Arranged", desc: "Compliant EUR 30,000 cover across all 27 Schengen countries, sorted for you." },
                                    { icon: Briefcase, title: "Itinerary & Finance File", desc: "Flight, hotel and bank documents organised to the exact embassy standards." },
                                    { icon: Clock, title: "Appointment Booking", desc: "VFS Global or BLS appointments booked and managed for you." },
                                    { icon: Users, title: "Tourist & Business Covered", desc: "Holidays, family visits and business meetings all under one roof." },
                                    { icon: Star, title: "Proven Results", desc: "5,000+ Schengen travellers with a 99% application success rate." },
                                ].map((item, idx) => (
                                    <MotionDiv key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                                        className="flex items-start gap-4 p-4 rounded-lg bg-muted/40 border border-border/50">
                                        <item.icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="text-sm font-display font-bold text-foreground mb-1">{item.title}</h3>
                                            <p className="text-sm font-body text-foreground/70 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Processing Time & Fees */}
                    <section className="py-12 bg-muted/20 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Fees & Processing</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Processing Time & Fees</h2>
                                <p className="text-sm font-body text-foreground/70 mt-2">Standard processing is around 15 calendar days. Apply at least 3 weeks before travel — up to 6 months in advance.</p>
                            </MotionDiv>
                            <div className="overflow-hidden rounded-xl border border-border">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-primary text-primary-foreground">
                                            <th className="text-left px-5 py-3 font-display font-bold">Item</th>
                                            <th className="text-left px-5 py-3 font-display font-bold">Amount</th>
                                            <th className="text-left px-5 py-3 font-display font-bold">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { item: "Adult visa fee", amount: "EUR 90 (around ₹9,000)", notes: "Plus VFS/BLS service charge" },
                                            { item: "Child fee (6–12)", amount: "EUR 45 (around ₹4,500)", notes: "Under 6 often exempt" },
                                            { item: "Processing time", amount: "Around 15 days", notes: "Up to 30–60 days in peak periods" },
                                            { item: "Travel insurance", amount: "Min EUR 30,000 cover", notes: "Mandatory before submission" },
                                        ].map((row, idx) => (
                                            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                                                <td className="px-5 py-3 font-display font-bold text-foreground">{row.item}</td>
                                                <td className="px-5 py-3 font-body text-foreground/70">{row.amount}</td>
                                                <td className="px-5 py-3 font-body text-foreground/70">{row.notes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Common Rejection Reasons */}
                    <section className="py-12 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Watch Out</span>
                                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">Common Reasons Schengen Visas Get Refused</h2>
                            </MotionDiv>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Applying at the wrong embassy for your itinerary",
                                    "Missing or non-compliant travel insurance",
                                    "Insufficient funds or unexplained bank deposits",
                                    "Unclear or inconsistent itinerary",
                                    "Weak ties to India and doubts about return",
                                    "Incomplete documents or a poorly written cover letter",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/50">
                                        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                                        <span className="font-body text-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
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
                                <h2 className="text-base font-display font-bold text-foreground">Documentation Portfolio</h2>
                            </div>
                            <ul className="space-y-4">
                                {visa.requirements.map(req => (
                                    <li key={req} className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border shadow-sm group hover:border-secondary transition-colors">
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
                                <h2 className="text-base font-display font-bold text-foreground">Strategic Roadmap</h2>
                            </div>
                            <div className="space-y-10 relative before:absolute before:left-7 before:top-2 before:bottom-2 before:w-px before:bg-border">
                                {visa.steps.map((step, idx) => (
                                    <div key={idx} className="relative pl-16">
                                        <div className="absolute left-0 top-0 w-14 h-14 bg-secondary text-secondary-foreground rounded-[1.2rem] flex items-center justify-center font-display font-bold text-xl shadow-gold z-10 group-hover:scale-110 transition-transform">
                                            {idx + 1}
                                        </div>
                                        <h3 className="text-base font-display font-bold text-foreground mb-2">{step.title}</h3>
                                        <p className="text-base font-body text-muted-foreground leading-relaxed italic">
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
                        <h2 className="text-base font-display font-bold text-foreground">Frequently Asked Questions</h2>
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
                            Get a professional consultation from our team -- we handle every detail from documents to appointment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground font-display font-bold text-sm rounded-xl hover:translate-y-[-2px] transition-all shadow-gold group">
                                Consult with Experts <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-white/20 text-white font-display font-bold text-sm rounded-xl hover:bg-white/10 transition-all">
                                Contact SmotVisa
                            </Link>
                        </div>
                    </div>
                </MotionDiv>
            </section>
        </>
    );
}

