import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle2, ShieldCheck, Globe2, FileCheck2, Search, Send, Plane, Briefcase, MessageSquareText, PhoneCall, Clock, BadgeCheck } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Best Visa Agent in Chennai | SmotVisa",
    description: "Looking for a trusted visa agent in Chennai? SmotVisa assists with tourist and business visas for Singapore, Schengen, UK, USA, Dubai & 150+ countries.",
    keywords: [
        "visa agent in Chennai",
        "visa agents in Chennai",
        "tourist visa agent Chennai",
        "business visa agent Chennai",
        "best visa consultants Chennai",
        "Chennai visa services",
        "SmotVisa Chennai"
    ],
    alternates: {
        canonical: "https://smotvisa.com/visa-agent-in-chennai",
    },
    robots: { index: true, follow: true },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Best Visa Agent in Chennai | SmotVisa",
        description: "Looking for a trusted visa agent in Chennai? SmotVisa assists with tourist and business visas for Singapore, Schengen, UK, USA, Dubai & 150+ countries.",
        url: "https://smotvisa.com/visa-agent-in-chennai",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Visa Agent in Chennai | SmotVisa",
        description: "Looking for a trusted visa agent in Chennai? SmotVisa assists with tourist and business visas for Singapore, Schengen, UK, USA, Dubai & 150+ countries.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const WHATSAPP = "https://wa.me/918904008843";
const CALL = "tel:+918904008843";

const touristPoints = [
    "The correct visa type for your trip and an honest read on your case",
    "A personalised document checklist for your destination",
    "Accurately completed application forms",
    "A tailored cover letter and day-by-day travel itinerary",
    "Bank statement and income proof review, so your funds tell a consistent story",
    "Travel insurance guidance that meets embassy requirements",
    "Appointment booking and a briefing on what to carry",
];

const countries = [
    { dest: "Singapore", type: "Tourist / Business", time: "3–7 working days" },
    { dest: "Dubai / UAE", type: "Tourist / Business", time: "3–5 working days" },
    { dest: "Thailand / Malaysia", type: "Tourist", time: "3–10 working days" },
    { dest: "Schengen (Europe)", type: "Tourist / Business", time: "15–30 working days" },
    { dest: "United Kingdom", type: "Standard Visitor", time: "3–6 weeks" },
    { dest: "USA", type: "B1/B2 Visitor", time: "Appointment based" },
    { dest: "Japan", type: "Tourist / Business", time: "5–10 working days" },
    { dest: "Australia / Canada", type: "Visitor", time: "2–6 weeks" },
];

const processSteps = [
    { icon: Search, title: "Free Consultation", desc: "Tell us your destination, travel dates, and purpose over WhatsApp or a call. We confirm the right visa type and give you an honest assessment — if your case needs strengthening, we say so upfront." },
    { icon: FileCheck2, title: "Document Checklist", desc: "You get a clear, personalised checklist for your destination, with guidance on how each document should look." },
    { icon: ShieldCheck, title: "Preparation & Review", desc: "We prepare your cover letter, itinerary, and forms, then review the complete file for gaps, mismatches, and red flags before you submit." },
    { icon: Send, title: "Appointment & Submission", desc: "We help book your slot at the consulate or visa application centre and prepare you for the visit." }
];

const whyChoose = [
    { icon: BadgeCheck, title: "Visa Specialists, Not a Travel Agency", desc: "We focus only on tourist and business visas, so we know what each consulate looks for." },
    { icon: ShieldCheck, title: "Every File Gets a Human Review", desc: "An experienced team member checks your documents against the latest checklist before submission." },
    { icon: BadgeCheck, title: "Proven Track Record", desc: "98% success rate across 5,000+ applications since 2020." },
    { icon: MessageSquareText, title: "Transparent Fees", desc: "We quote upfront and explain what is included. No hidden charges." },
    { icon: FileCheck2, title: "Rejection Guidance", desc: "Refused earlier? We identify what went wrong and build a stronger fresh application." },
    { icon: PhoneCall, title: "Support in Your Language", desc: "On WhatsApp, phone, and email — from start to submission." },
];

const faqs = [
    { q: "Which visa agent in Chennai is best for tourist visas?", a: "Choose an agent that specialises in visas rather than general travel services, quotes fees upfront, and reviews your complete file before submission. SmotVisa does only tourist and business visa assistance, with a 98% success rate since 2019." },
    { q: "How much does a visa agent in Chennai charge?", a: "Service fees depend on the destination and case complexity. We quote our fee upfront during the free consultation, separate from the embassy's visa fee, with no hidden charges." },
    { q: "Do I need to visit your office, or can everything be done online?", a: "Most of the process — consultation, checklist, document review, and form filling — happens over WhatsApp and email. You only travel for biometrics or interviews where the embassy requires your presence." },
    { q: "Where do I give biometrics or attend my visa interview in Chennai?", a: "UK and Schengen biometrics are taken at VFS Global in Teynampet. US B1/B2 interviews take place at the US Consulate on Anna Salai. We confirm the exact centre for your destination and help you book." },
    { q: "How early should I apply for a tourist visa from Chennai?", a: "For Singapore, Dubai, or Thailand, 2–3 weeks before travel is usually enough. For Schengen, UK, USA, Australia, or Canada, start 1–3 months ahead — earlier in the holiday season." },
    { q: "Can you help if my visa was rejected before?", a: "Yes. Our visa rejection guidance reviews your refusal, identifies the likely cause, and helps you build a properly explained fresh application. Reapplying blindly usually leads to a second refusal." },
    { q: "Do you assist business travellers from Chennai?", a: "Yes. We prepare business visa files for the USA, UK, Schengen, Singapore, Dubai, and other destinations, including invitation letters, employer cover letters, and company documents." },
    { q: "Do you guarantee visa approval?", a: "No honest consultant can — the decision rests with the embassy. What we guarantee is a complete, accurate, professionally presented application, which is why our success rate is 98%." },
    { q: "Can my whole family apply together?", a: "Yes. We handle family and group applications regularly, making sure every member's documents are consistent with each other." },
];

export default function VisaAgentInChennai() {
    return (
        <main className="bg-background">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smotvisa.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Visa Agent in Chennai", "item": "https://smotvisa.com/visa-agent-in-chennai" }
                ]
            }} />
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a }
                }))
            }} />

            <PageHeader
                title="Experienced Tourist & Business Visa Agent in Chennai"
                description="Whether you're planning a tourist visa for Dubai, a business trip to Europe, or visiting family in the USA, the visa application process is often the hardest part of international travel. SmotVisa serves travellers across Chennai through our Chromepet branch. Since 2020, we have helped travellers simplify the process with expert guidance, accurate documentation, and end-to-end support — eliminating confusion, avoiding costly mistakes, and making tourist and business visa applications smooth, stress-free, and successful."
                breadcrumbs={[
                    { label: "Visa Agent in Chennai" }
                ]}
            />

            {/* Tourist Visa Assistance */}
            <section className="py-14 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <MotionDiv initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                            <Plane className="h-8 w-8 text-secondary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">Tourist Visa Assistance in Chennai</h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            Chennai travellers most often apply for Singapore, Malaysia, Thailand, Sri Lanka, <Link href="/visa/uae-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">Dubai</Link>, <Link href="/visa/schengen-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">Schengen</Link>, UK, and US tourist visas. Each destination has its own checklist, photo specifications, financial requirements, and processing quirks — and a small mismatch in your documents is enough to get a refusal.
                        </p>
                    </MotionDiv>
                    <MotionDiv initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-card p-8 rounded-[2.5rem] border border-border shadow-card">
                        <p className="text-sm font-display font-bold text-foreground mb-5">Our tourist visa assistance covers everything the embassy expects to see:</p>
                        <ul className="space-y-4">
                            {touristPoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                                    <span className="text-sm font-body text-muted-foreground leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </MotionDiv>
                </div>
            </section>

            {/* Business Visa Assistance */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                            <Briefcase className="h-8 w-8 text-secondary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">Business Visa Assistance in Chennai</h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            Chennai is home to hundreds of IT and SaaS companies and thousands of exporters and business owners who travel for client meetings, conferences, and trade fairs. Business visa files need more than tourist applications: invitation letters from the foreign company, a covering letter from your employer or your own firm, company registration and GST documents, and clear proof of the meeting purpose. We prepare and review all of it — so your business visa application, whether for the USA (B1), UK, Schengen, Singapore, or Dubai, presents a complete and convincing picture to the visa officer.
                        </p>
                    </div>
                </div>
            </section>

            {/* Countries table */}
            <section className="py-14 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                    <h2 className="text-3xl font-display font-bold text-foreground">Countries We Assist With From Chennai</h2>
                    <p className="text-muted-foreground italic tracking-wide">We handle tourist and business visa assistance for 150+ destinations. The most popular with Chennai applicants:</p>
                </div>
                <div className="max-w-4xl mx-auto overflow-x-auto">
                    <table className="w-full border-collapse bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
                        <thead>
                            <tr className="bg-secondary/10">
                                <th className="text-left px-6 py-4 font-display font-bold text-sm text-foreground">Destination</th>
                                <th className="text-left px-6 py-4 font-display font-bold text-sm text-foreground">Visa Type</th>
                                <th className="text-left px-6 py-4 font-display font-bold text-sm text-foreground">Typical Processing Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {countries.map((c, i) => (
                                <tr key={i} className="border-t border-border hover:bg-secondary/5 transition-colors">
                                    <td className="px-6 py-4 font-display font-bold text-sm text-foreground flex items-center gap-2">
                                        <Globe2 className="h-4 w-4 text-secondary shrink-0" /> {c.dest}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-body text-muted-foreground">{c.type}</td>
                                    <td className="px-6 py-4 text-sm font-body text-muted-foreground">
                                        <span className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-secondary" /> {c.time}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-center text-muted-foreground italic tracking-wide mt-6 text-sm">Timelines are set by each embassy and can stretch in peak season, so we always recommend applying early.</p>
                </div>
            </section>

            {/* How it works */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                        <h2 className="text-3xl font-display font-bold text-foreground">How Our Visa Assistance Works</h2>
                        <p className="text-muted-foreground italic tracking-wide">Throughout the process you have a single point of contact who knows your case, not a ticket number.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, i) => (
                            <div key={i} className="p-6 bg-card rounded-[2.5rem] shadow-card border border-border hover:shadow-elevated transition-all text-center">
                                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <step.icon className="h-8 w-8 text-secondary" />
                                </div>
                                <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Step {i + 1}</span>
                                <h3 className="text-lg font-display font-bold text-foreground mt-2 mb-4">{step.title}</h3>
                                <p className="text-sm font-body text-muted-foreground italic leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why choose */}
            <section className="py-14 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                    <h2 className="text-3xl font-display font-bold text-foreground">Why Chennai Travellers Choose SmotVisa</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {whyChoose.map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                                <item.icon className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-foreground text-lg mb-2">{item.title}</h3>
                                <p className="text-sm font-body text-muted-foreground italic leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-10 space-y-4">
                        <h2 className="text-3xl font-display font-bold text-foreground">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                                <div className="flex items-start gap-3 mb-3">
                                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                                    <h3 className="font-display font-bold text-foreground text-lg">{faq.q}</h3>
                                </div>
                                <p className="text-sm font-body text-muted-foreground italic leading-relaxed pl-8">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="py-14 container mx-auto px-4 text-center">
                <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto space-y-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">Apply With Confidence</h2>
                    <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto italic leading-relaxed">
                        Your trip deserves better than guesswork. Send us your destination and travel dates, and get a free eligibility check from a visa expert today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={WHATSAPP} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-display font-bold text-sm rounded-xl hover:translate-y-[-2px] transition-all shadow-gold group">
                            <MessageSquareText className="h-4 w-4" /> WhatsApp +91 8904008843
                        </Link>
                        <Link href={CALL} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-primary text-primary font-display font-bold text-sm rounded-xl hover:bg-primary/5 transition-all">
                            <PhoneCall className="h-4 w-4" /> Call +91 8904008843
                        </Link>
                    </div>
                </MotionDiv>
            </section>
        </main>
    );
}
