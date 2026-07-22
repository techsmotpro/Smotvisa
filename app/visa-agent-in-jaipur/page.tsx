import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle2, ShieldCheck, ArrowRight, Globe2, FileCheck2, Search, Send, Plane, Briefcase, MessageSquareText, PhoneCall, Clock, BadgeCheck, Info } from "lucide-react";
import Link from "next/link";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Best Tourist Visa Agent in Jaipur | Smotvisa",
    description: "Smotvisa is a reliable visa agent in Jaipur for tourist & business visas. Fast approvals for US, UK, Canada & Schengen visas. Call for consultation today.",
    keywords: [
        "visa agent in Jaipur",
        "visa agents in Jaipur",
        "tourist visa agent Jaipur",
        "business visa agent Jaipur",
        "best visa consultants Jaipur",
        "Jaipur visa services",
        "SmotVisa Jaipur"
    ],
    alternates: {
        canonical: "https://smotvisa.com/visa-agent-in-jaipur",
    },
    robots: { index: true, follow: true },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Best Tourist Visa Agent in Jaipur | Smotvisa",
        description: "Smotvisa is a reliable visa agent in Jaipur for tourist & business visas. Fast approvals for US, UK, Canada & Schengen visas.",
        url: "https://smotvisa.com/visa-agent-in-jaipur",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Tourist Visa Agent in Jaipur | Smotvisa",
        description: "Smotvisa is a reliable visa agent in Jaipur for tourist & business visas. Fast approvals for US, UK, Canada & Schengen visas.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const WHATSAPP = "https://wa.me/918904008843";
const CALL = "tel:+918904008843";

const touristPoints = [
    "The correct visa type for your trip and an honest read on your case",
    "A personalised document checklist for your destination",
    "Application forms filled accurately, including the US DS-160 and UK online form",
    "A tailored cover letter and day-by-day itinerary",
    "Bank statement and income proof review — including guidance for self-employed and business-income applicants, common in Jaipur",
    "Travel insurance that meets embassy requirements",
    "Appointment booking and a briefing on what to carry",
];

const countries = [
    { dest: "Dubai / UAE", type: "Tourist / Business", time: "3–5 working days" },
    { dest: "Thailand / Malaysia", type: "Tourist", time: "3–10 working days" },
    { dest: "Singapore", type: "Tourist / Business", time: "3–7 working days" },
    { dest: "Schengen (Europe)", type: "Tourist / Business", time: "15–30 working days" },
    { dest: "United Kingdom", type: "Standard Visitor", time: "3–6 weeks" },
    { dest: "USA", type: "B1/B2 Visitor", time: "Appointment based" },
    { dest: "Turkey", type: "Tourist", time: "1–2 weeks" },
    { dest: "Australia / Canada", type: "Visitor", time: "2–6 weeks" },
];

const processSteps = [
    { icon: Search, title: "Free Consultation", desc: "Tell us your destination, dates, and purpose over WhatsApp or a call. We confirm the right visa type and give you an honest assessment." },
    { icon: FileCheck2, title: "Document Checklist", desc: "A clear, personalised checklist with guidance on how each document should look." },
    { icon: ShieldCheck, title: "Preparation & Review", desc: "We draft your cover letter and itinerary, complete your forms, and review the whole file for gaps, mismatches, and red flags." },
    { icon: Send, title: "Appointment & Submission", desc: "We book your slot — in Jaipur or Delhi as needed — and brief you on what to expect." }
];

const whyChoose = [
    { icon: BadgeCheck, title: "Visa Specialists Only", desc: "Tourist and business visas are our entire business." },
    { icon: Briefcase, title: "Strong With Self-Employed Profiles", desc: "Business owners and exporters have different documentation needs — and we know how to present them." },
    { icon: ShieldCheck, title: "Human File Review", desc: "Every file gets a human review against the latest embassy checklist." },
    { icon: BadgeCheck, title: "Proven Track Record", desc: "98% success rate across 5,000+ applications since 2019." },
    { icon: MessageSquareText, title: "Transparent Fees", desc: "Quoted upfront with no hidden charges." },
    { icon: FileCheck2, title: "Rejection Guidance", desc: "We rebuild a refused application properly." },
];

const faqs = [
    { q: "Is there a reliable visa agent in Jaipur, or do I need to go through Delhi?", a: "You don't need a Delhi agent. SmotVisa serves Jaipur applicants end to end over WhatsApp, phone, and email, and most submissions and biometrics happen at VFS Jaipur in C Scheme." },
    { q: "How much does a visa agent in Jaipur charge?", a: "Fees depend on the destination and your case. We quote our service fee upfront during the free consultation, separate from the embassy fee." },
    { q: "Can I give biometrics for a UK or Schengen visa in Jaipur?", a: "For the UK and several Schengen countries, yes — at VFS Global Jaipur. For some destinations a Delhi visit is required; we confirm this for your specific country before you start." },
    { q: "Where is the US visa interview for Jaipur applicants?", a: "At the US Embassy in New Delhi, or another US post in India if slots are better there. We help you book and prepare so a single trip covers it." },
    { q: "How early should I apply for a Dubai or Thailand visa from Jaipur?", a: "2–3 weeks before travel is usually comfortable. Both are typically processed within days once the file is complete." },
    { q: "How early for Schengen, UK, or USA?", a: "Start 1–3 months ahead — longer in summer and December, when appointment slots fill quickly." },
    { q: "I'm self-employed. Is a visa harder for me?", a: "Not harder — just different. Embassies want your firm's registration, GST, ITRs, and business bank statements presented clearly. We specialise in preparing exactly these profiles." },
    { q: "Can you help after a rejection?", a: "Yes. We review what went wrong — commonly weak funds proof or an unclear purpose of travel — and build a stronger, properly explained fresh application." },
    { q: "Do you handle family and group applications from Jaipur?", a: "Yes, including honeymoon couples and extended family groups, with every member's documents kept consistent." },
    { q: "Is SmotVisa an immigration consultant?", a: "No. We are a visa assistance and travel documentation consultancy for tourist and business visas only — no immigration, PR, or work visa services." },
];

export default function VisaAgentInJaipur() {
    const jaipurOffice = offices.find(o => o.id === "jaipur");

    return (
        <main className="bg-background">
            {jaipurOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agent-in-jaipur",
                        "name": "SmotVisa Jaipur",
                        "description": "SmotVisa is a reliable visa agent in Jaipur for tourist and business visas to 50+ countries, with a 98% success rate.",
                        "url": "https://smotvisa.com/visa-agent-in-jaipur",
                        "telephone": "+91-8904008843",
                        "email": jaipurOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": jaipurOffice.address,
                            "addressLocality": "Jaipur",
                            "addressRegion": "Rajasthan",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Jaipur" },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                            "opens": "09:00",
                            "closes": "18:00"
                        },
                        "sameAs": [
                            "https://www.facebook.com/smotvisa",
                            "https://www.instagram.com/smotvisa",
                            "https://www.linkedin.com/company/smotvisa"
                        ]
                    }} />
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smotvisa.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Visa Agent in Jaipur", "item": "https://smotvisa.com/visa-agent-in-jaipur" }
                        ]
                    }} />
                </>
            )}
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
                title="Best Tourist and Business Visa Agent in Jaipur"
                description="SmotVisa is a specialist visa assistance company serving travellers across Jaipur. We are not just a visa consultancy — we are a tour and travel agency since 2019 with a presence across India through multiple offices, having assisted with over 5,000 tourist and business visa applications across 50+ countries, with a 98% success rate."
                breadcrumbs={[
                    { label: "Visa Agent in Jaipur" }
                ]}
            />

            {/* Intro second paragraph */}
            <section className="py-10 container mx-auto px-4">
                <p className="max-w-3xl mx-auto text-center text-lg font-body text-muted-foreground italic leading-relaxed">
                    We assist families, couples, individual travellers, and business professionals with tourist and business visa applications. The Jaipur office provides guidance for visa assistance, tour packages, flight bookings, travel insurance, and other travel-related requirements.
                </p>
            </section>

            {/* Tourist Visa Assistance */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        <MotionDiv initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                                <Plane className="h-8 w-8 text-secondary" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">Tourist Visa Assistance in Jaipur</h2>
                            <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                                The destinations Jaipur travellers ask us about most: <Link href="/visa/uae-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">Dubai</Link>, Thailand, Singapore, <Link href="/visa/schengen-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">Schengen (Europe)</Link>, UK, and the USA. Every embassy judges your file on the same things — clear proof of funds, a convincing cover letter, consistent bookings, and evidence of strong ties to India that show you'll return.
                            </p>
                        </MotionDiv>
                        <MotionDiv initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-card p-8 rounded-[2.5rem] border border-border shadow-card">
                            <p className="text-sm font-display font-bold text-foreground mb-5">Our tourist visa assistance covers all of it:</p>
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
                </div>
            </section>

            {/* Business Visa Assistance */}
            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                        <Briefcase className="h-8 w-8 text-secondary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">Business Visa Assistance in Jaipur</h2>
                    <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                        Business visa files for self-employed applicants and firm owners need careful preparation: invitation letters from foreign buyers or event organisers, your firm's registration and GST documents, ITRs, and a covering letter that clearly explains the business purpose. This is exactly the kind of file we build well. We prepare and review complete business visa applications for Dubai, Schengen, UK, USA (B1), and Singapore — so your trade travel is never held up by paperwork.
                    </p>
                </div>
            </section>

            {/* Countries table */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                        <h2 className="text-3xl font-display font-bold text-foreground">Countries We Assist With From Jaipur</h2>
                        <p className="text-muted-foreground italic tracking-wide">Embassies set these timelines and they stretch in peak season — start early.</p>
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
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-14 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                    <h2 className="text-3xl font-display font-bold text-foreground">How Our Visa Assistance Works</h2>
                    <p className="text-muted-foreground italic tracking-wide">One dedicated contact handles your case from start to finish — or visit our <Link href="/contact/jaipur/visa-agents-in-jaipur" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">Jaipur office</Link> in person.</p>
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
            </section>

            {/* Why choose */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                        <h2 className="text-3xl font-display font-bold text-foreground">Why Jaipur Travellers Choose SmotVisa</h2>
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
                    <div className="max-w-4xl mx-auto mt-10">
                        <div className="flex items-start gap-3 p-5 bg-card border border-border rounded-2xl">
                            <Info className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                            <p className="text-sm font-body text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">Please note:</strong> SmotVisa assists with tourist and business (short-stay) visas only. We do not handle work visas, study visas, permanent residency, or job placement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-14 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                    <h2 className="text-3xl font-display font-bold text-foreground">Frequently Asked Questions</h2>
                </div>
                <div className="max-w-3xl mx-auto space-y-6">
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
            </section>


            {/* CTA */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-border text-center">
                <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto px-4 space-y-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">Apply With Confidence</h2>
                    <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto italic leading-relaxed">
                        Your trip shouldn't depend on guesswork or repeated Delhi runs. Message us your destination and dates for a free eligibility check today.
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
