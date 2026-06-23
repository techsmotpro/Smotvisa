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
            {id !== "us" && id !== "uk" && <section className="py-12 bg-muted/30 border-b border-border">
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
            </section>}

            {/* Australia Specifics */}
            {id === "australia" && (
                <section className="py-14 bg-muted/10 border-b border-border">
                    <div className="container mx-auto px-4">
                        <MotionDiv
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto space-y-16"
                        >
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl font-display font-bold text-foreground">Australia Visa Portfolio</h2>
                                <p className="text-muted-foreground font-body text-lg italic uppercase tracking-widest">Subclass 600 Intelligence</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-6 bg-card rounded-[2.5rem] shadow-card border border-border group hover:border-secondary/30 transition-all">
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
                                <div className="p-6 bg-card rounded-[2.5rem] shadow-card border border-border group hover:border-secondary/30 transition-all">
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
                        </MotionDiv>
                    </div>
                </section>
            )}

            {/* UK Specifics */}
            {id === "uk" && (
                <>
                    {/* Intro */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    UK is one of the first popular destinations for Indian travellers for a good long time, At SmotVisa we UK Visa Consultant in India take the guesswork out of it. We help you choose the right validity, complete the online form correctly, build a clean financial and supporting-document file, and book your VFS appointment everything under one roof.
                                </p>
                                <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-sm font-display font-bold text-foreground bg-muted/50 border border-border rounded-2xl px-6 py-4 mt-4">
                                    <span>Planning a UK trip? Let&apos;s prepare a winning Standard Visitor application.</span>
                                    <span className="hidden sm:block text-border">|</span>
                                    <span>Call / WhatsApp</span>
                                    <a href="tel:+918904008843" className="text-secondary hover:underline">+91-8904008843</a>
                                    <span className="hidden sm:block text-border">•</span>
                                    <span>Email</span>
                                    <a href="mailto:info@smotvisa.com" className="text-secondary hover:underline">info@smotvisa.com</a>
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

                    {/* Tourist or Business */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tourist or Business — One Visa, Both Purposes</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">The UK Standard Visitor visa is wonderfully flexible. The same visa lets you holiday, visit friends and family, attend a business meeting or conference, sign contracts, or take a short recreational course. What it does not allow is paid or unpaid work, including freelance work — so we only ever assist with genuine visitor travel. Standard visas are typically issued for six months, but frequent travellers can apply for long-term visitor visas valid for two, five or ten years.</p>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Steps - UK */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-1.5 h-8 bg-secondary rounded-full" />
                                    <h2 className="text-3xl font-display font-bold text-foreground">Our Step-by-Step UK Visa Process</h2>
                                </div>
                                <div className="space-y-10 relative before:absolute before:left-7 before:top-2 before:bottom-2 before:w-px before:bg-border">
                                    {visa.steps.map((step, idx) => (
                                        <div key={idx} className="relative pl-16">
                                            <div className="absolute left-0 top-0 w-14 h-14 bg-secondary text-secondary-foreground rounded-[1.2rem] flex items-center justify-center font-display font-bold text-xl shadow-gold z-10">
                                                {idx + 1}
                                            </div>
                                            <h3 className="text-xl font-display font-bold text-foreground mb-2">{step.title}</h3>
                                            <p className="text-sm font-body text-muted-foreground leading-relaxed italic">{step.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Documents - UK */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1.5 h-8 bg-secondary rounded-full" />
                                    <h2 className="text-3xl font-display font-bold text-foreground">Documents You Will Need</h2>
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
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Who Can Apply</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">Any Indian traveller with a genuine short-term purpose and the funds to cover the trip without working can apply. Strong applications show clear finances, stable ties to India such as a job, business, family or property, and a credible plan to leave the UK at the end of the visit. A good history of past travel helps but is not essential — many first-time travellers are approved every year.</p>
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
                                    <p className="text-muted-foreground font-body leading-relaxed">Standard processing usually takes around three weeks from your biometrics appointment. A priority service can return a decision in about five working days for an additional fee. As of 2026, the six-month visit visa fee is approximately ₹16,500, with VFS service charges of roughly ₹2,000–3,500 paid separately. Long-term 2, 5 and 10-year visas cost progressively more but can be excellent value for frequent travellers.</p>
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
                                                { type: "6-month Standard Visitor", fee: "₹16,500", processing: "3 weeks standard" },
                                                { type: "Priority service add-on", fee: "Extra fee", processing: "5 working days" },
                                                { type: "2 / 5 / 10-year visitor", fee: "Higher (multi-year value)", processing: "3 weeks standard" },
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

            {/* Canada Specifics */}
            {id === "canada" && (
                <>
                    {/* Intro */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    A Canada Temporary Resident Visa (TRV) opens the door to tourism, family visits and business travel — and SmotVisa handles the online application and document file for you.
                                </p>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    Canada is a dream destination for Indian travellers, whether it&apos;s the Rockies, Niagara, a family reunion or a business conference. The visitor visa is applied for online through IRCC and now requires biometrics at a VFS centre. The application is detailed, the document expectations are high, and a strong, well-explained file makes all the difference.
                                </p>
                                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                    SmotVisa prepares your TRV application end to end. We help you complete the online form, build a convincing purpose-of-travel and financial file, and navigate the biometrics step — always as a genuine short-term visitor, never as an immigration applicant.
                                </p>
                                <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-sm font-display font-bold text-foreground bg-muted/50 border border-border rounded-2xl px-6 py-4 mt-4">
                                    <span>Dreaming of Canada? Let&apos;s prepare your TRV together.</span>
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
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Why Choose SmotVisa for Your Canada Visa</h2>
                            </MotionDiv>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {[
                                    { icon: Users, title: "TRV Visitor Specialists", desc: "Tourism, family-visit and business-visitor applications, handled every day." },
                                    { icon: Briefcase, title: "Strong Purpose-of-Travel Letters", desc: "The heart of a successful Canadian visitor application — we draft it with you." },
                                    { icon: CircleDollarSign, title: "Financial File Expertise", desc: "Clear, well-organised proof of funds that reassures the IRCC officer." },
                                    { icon: ShieldCheck, title: "Biometrics Guidance", desc: "We walk you through every step of the VFS biometrics appointment." },
                                    { icon: CheckCircle2, title: "Honest Scope", desc: "Visitor visas only — no PR, no work permits, no study applications." },
                                    { icon: Star, title: "Trusted Nationwide", desc: "5000+ travellers served with a 99% application success rate." },
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
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tourist or Business Visitor — One Visa</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">The TRV is a single visitor visa covering both purposes. Many applicants receive multiple-entry visas valid for up to ten years.</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-card rounded-[2.5rem] shadow-card border border-border hover:border-secondary/30 transition-all">
                                        <h3 className="text-xl font-display font-bold text-foreground mb-4">Tourist & Family</h3>
                                        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 italic">Holiday, sightseeing, or visiting friends and family across Canada.</p>
                                        <ul className="space-y-3">
                                            {["The Rockies & Niagara Falls", "Visiting friends and family", "Tourism & leisure travel", "Medical visits"].map((it) => (
                                                <li key={it} className="flex items-center gap-3 text-sm font-display font-bold text-foreground/80">
                                                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-6 bg-card rounded-[2.5rem] shadow-card border border-border hover:border-secondary/30 transition-all">
                                        <h3 className="text-xl font-display font-bold text-foreground mb-4">Business Visitor</h3>
                                        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 italic">Short business activities — no entering the Canadian labour market.</p>
                                        <ul className="space-y-3">
                                            {["Meetings & conferences", "Trade events & exhibitions", "Exploring business opportunities", "Contract discussions"].map((it) => (
                                                <li key={it} className="flex items-center gap-3 text-sm font-display font-bold text-foreground/80">
                                                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-secondary/5 rounded-2xl border border-secondary/20 text-center">
                                    <p className="text-sm font-display font-bold text-foreground/80 italic">Working in Canada on a visitor visa is not permitted. SmotVisa only assists with genuine visitor travel.</p>
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
                                    <p className="text-muted-foreground font-body leading-relaxed">Indian travellers with a genuine short-term reason to visit Canada and solid ties to India are well placed to apply.</p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Funded trip with clear proof of finances",
                                        "Stable employment, business, family or property in India",
                                        "Clear, honest travel purpose",
                                        "Strong intent to return home after the trip",
                                        "First-time travellers with clean finances",
                                        "Families and groups with coordinated travel plans",
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
                                    <p className="text-muted-foreground font-body leading-relaxed">Processing begins once biometrics are submitted. You have 30 days from your instruction letter to attend a VFS centre.</p>
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
                                    <p className="text-muted-foreground font-body leading-relaxed">A strong purpose-of-travel letter and clean finances address the most common refusal points before the officer ever sees your file.</p>
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
                                    At SmotVisa, every US application is different whether you are attending US for a business meeting or conference, or finally taking that long-planned holiday, the US B1/B2 visa is your gateway. Smotvisa is here to assist from US visa documentation to plan your entire journey.
                                </p>
                                <div className="inline-flex flex-col sm:flex-row items-center gap-3 text-sm font-display font-bold text-foreground bg-muted/50 border border-border rounded-2xl px-6 py-4 mt-4">
                                    <span>Ready to start your US visa application the right way?</span>
                                    <span className="hidden sm:block text-border">|</span>
                                    <span>Call / WhatsApp</span>
                                    <a href="tel:+918904008843" className="text-secondary hover:underline">+91-8904008843</a>
                                    <span className="hidden sm:block text-border">•</span>
                                    <span>Email</span>
                                    <a href="mailto:info@smotvisa.com" className="text-secondary hover:underline">info@smotvisa.com</a>
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
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tourist Visa vs Business Visa — Which B Visa Do You Need?</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">The United States combines both visitor purposes into a single B1/B2 visa, but it helps to know which activity applies to you. The B2 covers tourism, holidays, visiting friends and relatives, and medical treatment. The B1 covers short business activities such as attending meetings, conferences, negotiating contracts or attending training. Most travellers receive a combined B1/B2 stamp valid for up to ten years with multiple entries. Importantly, neither category permits paid employment in the US — this is a visitor visa, and we only assist with genuine visitor travel.</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-card rounded-[2.5rem] shadow-card border border-border hover:border-secondary/30 transition-all">
                                        <h3 className="text-xl font-display font-bold text-foreground mb-4">B2 — Tourist Visa</h3>
                                        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 italic">For leisure, personal visits, and medical travel.</p>
                                        <ul className="space-y-3">
                                            {["Tourism & holidays", "Visiting friends & relatives", "Medical treatment"].map((it) => (
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
                                            {["Attending meetings & conferences", "Negotiating contracts", "Attending training"].map((it) => (
                                                <li key={it} className="flex items-center gap-3 text-sm font-display font-bold text-foreground/80">
                                                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" /> {it}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-secondary/5 rounded-2xl border border-secondary/20 text-center">
                                    <p className="text-sm font-display font-bold text-foreground/80 italic">Neither category permits paid employment in the US — this is a visitor visa, and we only assist with genuine visitor travel.</p>
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Steps - US */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-1.5 h-8 bg-secondary rounded-full" />
                                    <h2 className="text-3xl font-display font-bold text-foreground">Our Step-by-Step US Visa Process</h2>
                                </div>
                                <div className="space-y-10 relative before:absolute before:left-7 before:top-2 before:bottom-2 before:w-px before:bg-border">
                                    {visa.steps.map((step, idx) => (
                                        <div key={idx} className="relative pl-16">
                                            <div className="absolute left-0 top-0 w-14 h-14 bg-secondary text-secondary-foreground rounded-[1.2rem] flex items-center justify-center font-display font-bold text-xl shadow-gold z-10">
                                                {idx + 1}
                                            </div>
                                            <h3 className="text-xl font-display font-bold text-foreground mb-2">{step.title}</h3>
                                            <p className="text-sm font-body text-muted-foreground leading-relaxed italic">{step.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Documents - US */}
                    <section className="py-14 bg-background border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1.5 h-8 bg-secondary rounded-full" />
                                    <h2 className="text-3xl font-display font-bold text-foreground">Documents You Will Need</h2>
                                </div>
                                <p className="text-sm font-body text-muted-foreground leading-relaxed">Every profile is different, but a typical B1/B2 file includes:</p>
                                <ul className="space-y-4">
                                    {visa.requirements.map(req => (
                                        <li key={req} className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border shadow-sm group hover:border-secondary transition-colors">
                                            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                            <span className="text-sm font-display font-bold text-foreground/80 leading-relaxed italic">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </MotionDiv>
                        </div>
                    </section>

                    {/* Who Can Apply */}
                    <section className="py-14 bg-muted/10 border-b border-border">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="text-center space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Who Can Apply</h2>
                                    <p className="text-muted-foreground font-body leading-relaxed">The B1/B2 visa is open to almost any Indian traveller with a genuine short-term reason to visit the US and strong reasons to return home. You are a good candidate if you have stable employment or a running business, clear finances, family or property ties in India, and an honest, well-defined travel purpose. First-time travellers are very welcome — a thin travel history is not a disqualifier when the rest of your profile is solid and truthfully presented.</p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Stable employment or a running business",
                                        "Clear finances",
                                        "Family or property ties in India",
                                        "Honest, well-defined travel purpose",
                                        "First-time travellers are very welcome",
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
                                    <p className="text-muted-foreground font-body leading-relaxed">US visitor visa timelines depend almost entirely on interview appointment availability, which varies by consulate. As of 2026, wait times for a first B1/B2 interview can range from roughly six weeks at faster posts to several months at busier ones such as Mumbai. Applicants eligible for the Interview Waiver (dropbox) programme — typically renewals of a visa that expired within the last 48 months with no refusals — can often be processed in two to six weeks. The MRV application fee is currently around US $185 (approximately ₹15,500) and is non-refundable. We help you book the earliest realistic slot and plan your travel dates accordingly.</p>
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
                                                { route: "MRV fee", timeline: "US $185 (₹15,500)", notes: "Non-refundable, valid 1 year from payment" },
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
                                    <p className="text-muted-foreground font-body leading-relaxed">Understanding why applications fail is the best way to avoid it. The most frequent reasons under section 214(b) and general scrutiny include:</p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Weak ties to India, making the consular officer doubt you will return",
                                        "Inconsistent answers between the DS-160 and the interview",
                                        "Unclear or unconvincing travel purpose",
                                        "Insufficient or poorly explained finances",
                                        "Errors or omissions on the DS-160 form",
                                        "Nervous, over-rehearsed or evasive interview answers",
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
                                <p className="text-muted-foreground font-body leading-relaxed text-center">Our entire process is built to address each of these before you ever reach the interview window.</p>
                            </MotionDiv>
                        </div>
                    </section>
                </>
            )}

            {/* Requirements & Process */}
            {id !== "us" && id !== "uk" && <section id="requirements" className="py-14">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Requirements */}
                        <MotionDiv
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1.5 h-8 bg-secondary rounded-full" />
                                <h2 className="text-3xl font-display font-bold text-foreground">{id === "us" ? "Documents You Will Need" : "Documentation Portfolio"}</h2>
                            </div>
                            {id === "us" && (
                                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">Every profile is different, but a typical B1/B2 file includes:</p>
                            )}
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
                                <h2 className="text-3xl font-display font-bold text-foreground">{id === "us" ? "Our Step-by-Step US Visa Process" : "Strategic Roadmap"}</h2>
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
            </section>}

            {/* FAQs */}
            <section className="py-14 bg-muted/50 border-t border-border">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-8 space-y-4">
                        <h2 className="text-4xl font-display font-bold text-foreground">{id === "us" || id === "uk" ? "Frequently Asked Questions" : "Frequently Asked Intel"}</h2>
                        {id !== "us" && id !== "uk" && <p className="text-muted-foreground font-body text-lg italic">Expert insights on {visa.name} visa processing.</p>}
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