import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle2, ShieldCheck, ArrowRight, Globe2, FileCheck2, Search, Send, Plane, Briefcase, MessageSquareText, PhoneCall, Clock, Building2, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Expert Tourist Visa Agent in Mumbai | Smotvisa",
    description: "Smotvisa assists with tourist & business visas in Mumbai for Schengen, UK, US, Dubai, Singapore & almost 150+ countries. 98% success rate.",
    keywords: [
        "visa agent in Mumbai",
        "visa agents in Mumbai",
        "tourist visa agent Mumbai",
        "business visa agent Mumbai",
        "best visa consultants Mumbai",
        "Mumbai visa services",
        "SmotVisa Mumbai"
    ],
    alternates: {
        canonical: "https://smotvisa.com/visa-agent-in-mumbai",
    },
    robots: { index: true, follow: true },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Expert Tourist Visa Agent in Mumbai | Smotvisa",
        description: "Smotvisa assists with tourist & business visas in Mumbai for Schengen, UK, US, Dubai, Singapore & 150+ countries. 98% success rate.",
        url: "https://smotvisa.com/visa-agent-in-mumbai",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Expert Tourist Visa Agent in Mumbai | Smotvisa",
        description: "Smotvisa assists with tourist & business visas in Mumbai for Schengen, UK, US, Dubai, Singapore & 150+ countries.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const WHATSAPP = "https://wa.me/918904008843";
const CALL = "tel:+918904008843";

const touristDocs = [
    "Tourist visa application form",
    "Passport with six or three months' validity period",
    "Passport photographs",
    "Valid travel insurance",
    "Evidence of financial means",
    "Proof of accommodation",
    "Proof of a booked return flight ticket",
    "Proof of paid visa fee",
    "Invitation letter",
    "Civil documents (marriage certificate, birth certificate, etc.)",
    "Any other relevant supporting documents as required in your case",
];

const businessDocs = [
    "A valid passport",
    "Travel itinerary including accommodation and flight details",
    "Business and professional credentials",
    "Academic credentials",
    "Evidence that you plan to return to your base country after the business trip",
    "Evidence of adequate financial resources",
    "Medical examination and evidence of adequate insurance",
    "Filled application with enclosed fee",
];

const transitDocs = [
    "Airport transit visa application form",
    "Passport with six-month validity and blank pages",
    "Passport identity photographs",
    "Travel health insurance",
    "Travel ticket to your destination country",
    "Visa for your destination country (if required)",
    "Financial evidence that you can support your trip",
];

const countries = [
    { dest: "Dubai / UAE", type: "Tourist / Business", time: "3–5 working days" },
    { dest: "Schengen (Europe)", type: "Tourist / Business", time: "15–30 working days" },
    { dest: "United Kingdom", type: "Standard Visitor", time: "3–6 weeks" },
    { dest: "USA", type: "B1/B2 Visitor", time: "Appointment based" },
    { dest: "Singapore", type: "Tourist / Business", time: "3–7 working days" },
    { dest: "Thailand / Malaysia", type: "Tourist", time: "3–10 working days" },
    { dest: "Turkey", type: "Tourist", time: "1–2 weeks" },
    { dest: "Australia / Canada", type: "Visitor", time: "2–6 weeks" },
];

const processSteps = [
    { icon: Search, title: "Free Consultation", desc: "Tell us your destination, dates, and purpose over WhatsApp or a call. We confirm the visa type and give you an honest assessment." },
    { icon: FileCheck2, title: "Document Checklist", desc: "A clear, personalised list of what to gather and how each document should look." },
    { icon: ShieldCheck, title: "Preparation & Review", desc: "We draft your cover letter and itinerary, complete the forms, and review your full file for gaps, mismatches, and red flags." },
    { icon: Send, title: "Appointment & Submission", desc: "We book your slot and brief you on what to carry and expect — including interview preparation for US applicants." }
];

const whyChoose = [
    { icon: BadgeCheck, title: "Visa Specialists Only", desc: "Tourist and business visas are our entire business — that focus shows in every file we prepare." },
    { icon: ShieldCheck, title: "Human File Review", desc: "Every file gets a human review against the latest embassy checklist before submission." },
    { icon: BadgeCheck, title: "Proven Track Record", desc: "98% success rate across 5,000+ applications since 2019." },
    { icon: Clock, title: "Appointment Expertise", desc: "In a city where slots are scarce, we know exactly where and when to book." },
    { icon: MessageSquareText, title: "Transparent Fees", desc: "Quoted upfront with no hidden charges." },
    { icon: FileCheck2, title: "Rejection Guidance", desc: "We turn a refusal into a stronger, properly documented fresh application." },
];

const faqs = [
    { q: "How do I choose a good visa agent in Mumbai?", a: "Pick a consultancy that specialises in visas, reviews your complete file before submission, and quotes fees upfront. Avoid anyone who \"guarantees\" approval — no one can. Smotvisa focuses only on tourist and business visa assistance, with a 98% success rate." },
    { q: "How much do visa agents in Mumbai charge?", a: "Service fees vary by destination and case complexity. We quote our fee upfront during the free consultation, separate from the embassy's own visa fee." },
    { q: "US visa interview wait times in Mumbai are very long. What can I do?", a: "You can usually attend your interview at any of the five US posts in India, not just Mumbai. We monitor slot availability across cities and advise where to book for the earliest realistic date." },
    { q: "Where do I submit my Schengen visa application in Mumbai?", a: "Through the VFS Global centre serving the consulate of your main destination country. We identify the correct consulate — a common source of refusals — and book the right centre for you." },
    { q: "Can everything be done online?", a: "Almost all of it. Consultation, checklists, forms, and review happen over WhatsApp and email. You only appear in person for biometrics or interviews." },
    { q: "How early should I apply for a Schengen or UK visa from Mumbai?", a: "At least 4–6 weeks before travel; 2–3 months during summer and December holidays, when appointment slots in Mumbai fill quickly." },
    { q: "Do you help with Dubai visas for Mumbai travellers?", a: "Yes. UAE tourist and business visas are typically processed in 3–5 working days and are one of our most requested services." },
    { q: "Can you help after a visa rejection?", a: "Yes. We review the refusal, identify the cause, and prepare a stronger, properly documented fresh application instead of a blind reapply." },
    { q: "Do you handle group and family applications?", a: "Yes — families, honeymooners, and corporate groups. We make sure every member's documents are consistent with each other." },
    { q: "Is Smotvisa an immigration consultancy?", a: "No. We are a visa assistance and travel documentation company for tourist and business visas only — no immigration, PR, or work visa services." },
];

function DocList({ title, icon: Icon, docs }: { title: string; icon: typeof Plane; docs: string[] }) {
    return (
        <div className="bg-card p-8 rounded-[2.5rem] border border-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">{title}</h3>
            </div>
            <ul className="space-y-3">
                {docs.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-1" />
                        <span className="text-sm font-body text-muted-foreground leading-relaxed">{d}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function VisaAgentInMumbai() {
    const mumbaiOffice = offices.find(o => o.id === "bandra-east-mumbai");

    return (
        <main className="bg-background">
            {mumbaiOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agent-in-mumbai",
                        "name": "SmotVisa Mumbai",
                        "description": "Smotvisa is a trusted visa agent in Mumbai for tourist and business visas to 150+ countries, with a 98% success rate.",
                        "url": "https://smotvisa.com/visa-agent-in-mumbai",
                        "telephone": "+91-8904008843",
                        "email": mumbaiOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": mumbaiOffice.address,
                            "addressLocality": "Mumbai",
                            "addressRegion": "Maharashtra",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Mumbai" },
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
                            { "@type": "ListItem", "position": 2, "name": "Visa Agent in Mumbai", "item": "https://smotvisa.com/visa-agent-in-mumbai" }
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
                title="Trusted Visa Agent in Mumbai for Tourist & Business Visas"
                description="Smotvisa serves travellers across Mumbai, Navi Mumbai, and Thane — from Andheri and Bandra to South Mumbai and beyond. Since 2019, we have assisted with 5,000+ travel applications across 150+ countries with a 98% success rate."
                breadcrumbs={[
                    { label: "Visa Agent in Mumbai" }
                ]}
            />

            {/* Tourist Visa Assistance */}
            <section className="py-14 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <MotionDiv initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                            <Plane className="h-8 w-8 text-secondary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">Tourist Visa Assistance in Mumbai</h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            Mumbai travellers ask us most about Schengen (Europe), <Link href="/visa/uk-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">UK</Link>, USA, <Link href="/visa/uae-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">Dubai</Link>, Singapore, Thailand, and Turkey. Every embassy has its own checklist and its own reasons for refusing files — unclear proof of funds, mismatched bookings, generic cover letters, missing insurance. We build your file to pass exactly those checks.
                        </p>
                    </MotionDiv>
                    <MotionDiv initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                        <DocList title="Documents for Tourist Visa" icon={Plane} docs={touristDocs} />
                    </MotionDiv>
                </div>
            </section>

            {/* Business Visa Assistance */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        <MotionDiv initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                                <Briefcase className="h-8 w-8 text-secondary" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">Business Visa Assistance in Mumbai</h2>
                            <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                                As India's financial capital, Mumbai generates enormous business travel — banking and finance professionals, exporters, diamond and jewellery traders, media companies, and manufacturers attending trade fairs from Dubai to Frankfurt. Business visa files are judged on completeness: invitation letters from the foreign company, employer covering letters, company registration and GST documents, and clear evidence of the trip's purpose. We prepare complete files for the USA (B1), UK, Schengen, Singapore, Japan, and the UAE — presented the way visa officers expect.
                            </p>
                        </MotionDiv>
                        <MotionDiv initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <DocList title="Documents for Business Visa" icon={Briefcase} docs={businessDocs} />
                        </MotionDiv>
                    </div>
                </div>
            </section>

            {/* Transit Visa */}
            <section className="py-14 container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <DocList title="Transit Visa Documents" icon={Send} docs={transitDocs} />
                </div>
            </section>

            {/* Countries table */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                        <h2 className="text-3xl font-display font-bold text-foreground">Countries We Assist With From Mumbai</h2>
                        <p className="text-muted-foreground italic tracking-wide">Timelines are set by the embassies, not by us, and stretch in peak season — apply early.</p>
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

            {/* Visa centres / consulates */}
            <section className="py-14 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                            <Building2 className="h-8 w-8 text-secondary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">Visa Centres, Consulates &amp; Appointments in Mumbai</h2>
                    </div>
                    <p className="text-base font-body text-muted-foreground leading-relaxed">
                        Mumbai hosts one of the largest concentrations of visa infrastructure in India:
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                            <span className="text-sm font-body text-muted-foreground leading-relaxed"><strong className="text-foreground">US Consulate General Mumbai</strong> in Bandra Kurla Complex (BKC) conducts B1/B2 interviews for Maharashtra, Gujarat, and Goa. Mumbai's interview wait times are often the longest in India — but applicants can generally book at any of the five US posts, and we track availability across cities to find you the earliest realistic slot.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                            <span className="text-sm font-body text-muted-foreground leading-relaxed"><strong className="text-foreground">Multiple Schengen consulates</strong> — including Germany, France, and others — are based in Mumbai, with applications routed through VFS Global centres in the city.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                            <span className="text-sm font-body text-muted-foreground leading-relaxed"><strong className="text-foreground">VFS Global Mumbai</strong> operates centres handling UK, Schengen, and many other applications and biometrics.</span>
                        </li>
                    </ul>
                    <p className="text-base font-body text-muted-foreground leading-relaxed italic">
                        Knowing which consulate processes your file, which centre takes your biometrics, and when to book is half the battle in Mumbai — and it is exactly what we handle for you.
                    </p>
                </div>
            </section>

            {/* How it works */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                        <h2 className="text-3xl font-display font-bold text-foreground">How Smotvisa Assistance Works</h2>
                        <p className="text-muted-foreground italic tracking-wide">One dedicated contact person handles your case throughout — or drop by our <Link href="/contact/mumbai/visa-agents-in-bandra-east" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">Bandra East, Mumbai office</Link> in person.</p>
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
                    <h2 className="text-3xl font-display font-bold text-foreground">Why Mumbai Travellers Choose Smotvisa</h2>
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
                        In a city this busy, the smart move is getting your file right the first time. Send us your destination and dates for a free eligibility check.
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
