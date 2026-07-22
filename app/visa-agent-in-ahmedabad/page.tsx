import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle2, ShieldCheck, Globe2, FileCheck2, Search, Send, Plane, Briefcase, MessageSquareText, PhoneCall, Clock, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Top Visitor Visa Agent in Ahmedabad | SmotVisa",
    description: "SmotVisa is a trusted visa agent in Ahmedabad for tourist & business visas. Get detailed guidance from SmotVisa Ahmedabad for US, UK, Schengen and many more countries.",
    keywords: [
        "visa agent in Ahmedabad",
        "visa agents in Ahmedabad",
        "tourist visa agent Ahmedabad",
        "business visa agent Ahmedabad",
        "best visa consultants Ahmedabad",
        "Ahmedabad visa services",
        "SmotVisa Ahmedabad"
    ],
    alternates: {
        canonical: "https://smotvisa.com/visa-agent-in-ahmedabad",
    },
    robots: { index: true, follow: true },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Top Visitor Visa Agent in Ahmedabad | SmotVisa",
        description: "SmotVisa is a trusted visa agent in Ahmedabad for tourist & business visas. Get detailed guidance for US, UK, Schengen and many more countries.",
        url: "https://smotvisa.com/visa-agent-in-ahmedabad",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Top Visitor Visa Agent in Ahmedabad | SmotVisa",
        description: "SmotVisa is a trusted visa agent in Ahmedabad for tourist & business visas. Get detailed guidance for US, UK, Schengen and many more countries.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const WHATSAPP = "https://wa.me/918904008843";
const CALL = "tel:+918904008843";

const touristPoints = [
    "The correct visa type for your trip and an honest read on your case",
    "A personalised document checklist for your destination",
    "Application forms filled accurately — including the US DS-160 and UK online form",
    "A tailored cover letter and day-by-day itinerary",
    "Financial document review — including sponsorship cases where children abroad support a parent's visit, and business-income profiles common in Gujarat",
    "Travel insurance that meets embassy requirements",
    "Appointment booking and preparation, including US interview briefing",
];

const countries = [
    { dest: "USA", type: "B1/B2 Visitor", time: "Appointment based" },
    { dest: "United Kingdom", type: "Standard Visitor", time: "3–6 weeks" },
    { dest: "Dubai / UAE", type: "Tourist / Business", time: "3–5 working days" },
    { dest: "Schengen (Europe)", type: "Tourist / Business", time: "15–30 working days" },
    { dest: "Singapore", type: "Tourist / Business", time: "3–7 working days" },
    { dest: "Thailand / Malaysia", type: "Tourist", time: "3–10 working days" },
    { dest: "Australia / Canada", type: "Visitor", time: "2–6 weeks" },
    { dest: "Turkey", type: "Tourist", time: "1–2 weeks" },
];

const processSteps = [
    { icon: Search, title: "Free Consultation", desc: "Tell us your destination, dates, and purpose over WhatsApp or a call. We confirm the right visa type and give you an honest assessment in your language." },
    { icon: FileCheck2, title: "Document Checklist", desc: "A clear, personalised checklist for your destination, with guidance on how each document should look." },
    { icon: ShieldCheck, title: "Preparation & Review", desc: "We draft your cover letter and itinerary, complete your forms, and review the entire file for gaps, mismatches, and red flags." },
    { icon: Send, title: "Appointment & Submission", desc: "We book your slot — Ahmedabad or Mumbai as required — and brief you on what to carry and expect." }
];

const whyChoose = [
    { icon: BadgeCheck, title: "Visa Specialists Only", desc: "Tourist and business visas are our entire business." },
    { icon: FileCheck2, title: "Experienced With Gujarat's Profiles", desc: "Family-visit sponsorship cases, business owners, and first-time travellers — we know how each should be presented." },
    { icon: ShieldCheck, title: "Human Review on Every File", desc: "Checked against the latest embassy checklist before submission." },
    { icon: BadgeCheck, title: "Proven Track Record", desc: "98% success rate across 5,000+ applications since 2019." },
    { icon: MessageSquareText, title: "Transparent Fees", desc: "Quoted upfront with no hidden charges." },
    { icon: ShieldCheck, title: "Rejection Guidance", desc: "We rebuild a refused application properly." },
];

const faqs = [
    { q: "How do I find a trustworthy visa agent in Ahmedabad?", a: "Choose a consultancy that specialises in visas, reviews your full file before submission, and quotes fees upfront — and avoid anyone who guarantees approval, because no one can. SmotVisa handles only tourist and business visas, with a 98% success rate since 2019." },
    { q: "How much do visa agents in Ahmedabad charge?", a: "Service fees depend on the destination and your case. We quote upfront during the free consultation, separate from the embassy's own fee." },
    { q: "My children are in the USA and want to sponsor my visit. Can you help?", a: "Yes — parent-visit B2 applications with sponsorship from children abroad are among our most common Ahmedabad cases. We prepare the financial and relationship documents so the file is clear and consistent." },
    { q: "Where is the US visa interview for Ahmedabad applicants?", a: "Gujarat falls under the US Consulate in Mumbai, but you can usually book at any US post in India. We check wait times at all five and advise where to book." },
    { q: "Can I give UK or Schengen biometrics in Ahmedabad?", a: "For the UK and several Schengen countries, yes — at VFS Global Ahmedabad. For some destinations a Mumbai visit is needed; we confirm before you start." },
    { q: "How early should I apply for a UK or Schengen visa from Ahmedabad?", a: "Start 4–6 weeks before travel at minimum; 2–3 months in summer and December, when slots fill quickly." },
    { q: "I run my own business. Does that make my visa harder?", a: "No, but it changes the documents. Embassies want firm registration, GST, ITRs, and business bank statements presented clearly. We prepare these profiles every week." },
    { q: "Can you help after a visa rejection?", a: "Yes. We review the refusal, identify the likely cause, and build a stronger, properly explained fresh application instead of a blind reapply." },
    { q: "Do you handle family and group applications?", a: "Yes — extended families, tour groups, and business delegations, with every member's documents kept consistent." },
];

export default function VisaAgentInAhmedabad() {
    const ahmedabadOffice = offices.find(o => o.id === "ahmedabad");

    return (
        <main className="bg-background">
            {ahmedabadOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agent-in-ahmedabad",
                        "name": "SmotVisa Ahmedabad",
                        "description": "SmotVisa is a trusted visa agent in Ahmedabad for tourist and business visas to 150+ countries, with a 98% success rate.",
                        "url": "https://smotvisa.com/visa-agent-in-ahmedabad",
                        "telephone": "+91-8904008843",
                        "email": ahmedabadOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": ahmedabadOffice.address,
                            "addressLocality": "Ahmedabad",
                            "addressRegion": "Gujarat",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Ahmedabad" },
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
                            { "@type": "ListItem", "position": 2, "name": "Visa Agent in Ahmedabad", "item": "https://smotvisa.com/visa-agent-in-ahmedabad" }
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
                title="Trusted Visitor Visa Agent in Ahmedabad"
                description="SmotVisa is a specialist visa assistance and travel company serving travellers across Ahmedabad. Since starting our Ahmedabad branch in 2021, we have assisted with over 5,000 tourist and business visa applications across 150+ countries, with a 98% success rate."
                breadcrumbs={[
                    { label: "Visa Agent in Ahmedabad" }
                ]}
            />

            {/* Tourist Visa Assistance */}
            <section className="py-14 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <MotionDiv initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                            <Plane className="h-8 w-8 text-secondary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">Tourist Visa Assistance in Ahmedabad</h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            In Ahmedabad, many travellers apply for tourist visas to visit family and friends, explore popular destinations, or enjoy holidays in the <Link href="/visa/us-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">USA</Link>, UK, <Link href="/visa/schengen-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">Schengen countries</Link>, Dubai, Singapore, and Thailand. SmotVisa assists applicants with proper financial documentation, a clear purpose of travel, accurate and consistent paperwork, and professional guidance throughout the process to improve the chances of visa approval.
                        </p>
                    </MotionDiv>
                    <MotionDiv initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-card p-8 rounded-[2.5rem] border border-border shadow-card">
                        <p className="text-sm font-display font-bold text-foreground mb-5">Our tourist visa assistance covers everything:</p>
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
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">Business Visa Assistance in Ahmedabad</h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            SmotVisa Ahmedabad assists business owners, entrepreneurs, exporters, manufacturers, traders, and self-employed professionals with business visa applications for destinations including the USA, UK, Schengen countries, Dubai, Singapore, and other leading business hubs. We help applicants prepare well-organised visa files — including invitation letters from overseas companies or event organisers and professionally drafted covering letters that clearly explain the purpose of the visit — ensuring every application is complete, accurate, and presented with confidence. We prepare and review complete business visa files for the USA (B1), UK, Schengen, Dubai, and Singapore, built the way visa officers expect to see them.
                        </p>
                    </div>
                </div>
            </section>

            {/* Countries table */}
            <section className="py-14 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                    <h2 className="text-3xl font-display font-bold text-foreground">Countries We Assist With From Ahmedabad</h2>
                    <p className="text-muted-foreground italic tracking-wide">Embassies set these timelines, and they stretch during peak season — start early.</p>
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
            </section>

            {/* How it works */}
            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                        <h2 className="text-3xl font-display font-bold text-foreground">How Our Visa Assistance Works</h2>
                        <p className="text-muted-foreground italic tracking-wide">One dedicated contact handles your case from start to finish — or visit our <Link href="/contact/ahmedabad/visa-agents-in-ahmedabad" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">Ahmedabad office</Link> in person.</p>
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
                    <h2 className="text-3xl font-display font-bold text-foreground">Why Ahmedabad Travellers Choose SmotVisa</h2>
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
                        Whether it's meeting your grandchildren in America or your next trade fair in Dubai, don't let paperwork put the trip at risk. Message us your destination and dates for a free eligibility check.
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
