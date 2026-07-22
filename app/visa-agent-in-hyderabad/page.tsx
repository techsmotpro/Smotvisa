import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle2, ShieldCheck, Globe2, FileCheck2, Search, Send, Plane, Briefcase, MessageSquareText, PhoneCall, Clock } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Top Visa Agent in Hyderabad | SmotVisa",
    description: "Get the best services from tourist and business visa consultants in Hyderabad by Smotvisa. Book your free expert consultation call today.",
    keywords: [
        "visa agent in Hyderabad",
        "visa agents in Hyderabad",
        "tourist visa agent Hyderabad",
        "business visa agent Hyderabad",
        "best visa consultants Hyderabad",
        "Hyderabad visa services",
        "SmotVisa Hyderabad"
    ],
    alternates: {
        canonical: "https://smotvisa.com/visa-agent-in-hyderabad",
    },
    robots: { index: true, follow: true },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Top Visa Agent in Hyderabad | SmotVisa",
        description: "Get the best services from tourist and business visa consultants in Hyderabad by Smotvisa. Book your free expert consultation call today.",
        url: "https://smotvisa.com/visa-agent-in-hyderabad",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Top Visa Agent in Hyderabad | SmotVisa",
        description: "Get the best services from tourist and business visa consultants in Hyderabad by Smotvisa. Book your free expert consultation call today.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const WHATSAPP = "https://wa.me/918904008843";
const CALL = "tel:+918904008843";

const touristPoints = [
    "Confirming the right visa type and an honest assessment of your case",
    "A personalised document checklist for your exact destination",
    "Accurately filled application forms",
    "A tailored cover letter and day-by-day itinerary",
    "A review of your financial documents so your funds look consistent and genuine",
    "Travel insurance guidance where the embassy requires it",
    "Appointment booking and preparation, including US visa interview briefing",
];

const countries = [
    { dest: "USA", type: "B1/B2 Visitor", time: "Appointment based" },
    { dest: "Dubai / UAE", type: "Tourist / Business", time: "3–5 working days" },
    { dest: "Singapore", type: "Tourist / Business", time: "3–7 working days" },
    { dest: "Schengen (Europe)", type: "Tourist / Business", time: "15–30 working days" },
    { dest: "United Kingdom", type: "Standard Visitor", time: "3–6 weeks" },
    { dest: "Thailand / Malaysia", type: "Tourist", time: "3–10 working days" },
    { dest: "Japan", type: "Tourist / Business", time: "5–10 working days" },
    { dest: "Australia / Canada", type: "Visitor", time: "2–6 weeks" },
];

const processSteps = [
    { icon: Search, title: "Free Consultation", desc: "Share your destination, dates, and purpose on WhatsApp or a call. We confirm the right visa type and tell you honestly if your case needs work." },
    { icon: FileCheck2, title: "Document Checklist", desc: "A clear, personalised checklist for your destination, with guidance on how each document should look." },
    { icon: ShieldCheck, title: "Preparation & Review", desc: "We draft your cover letter and itinerary, complete your forms, and review the whole file for gaps, mismatches, and red flags." },
    { icon: Send, title: "Appointment & Submission", desc: "We book your slot, and for US applicants we run through what the visa officer is likely to ask." }
];

const faqs = [
    { q: "Who is the best visa agent in Hyderabad for a US visitor visa?", a: "Look for a consultancy that specialises in visas, prepares your DS-160 accurately, and briefs you for the interview. SmotVisa handles US B1/B2 files end to end, including interview preparation, with a 98% overall success rate." },
    { q: "How long is the US visa interview wait in Hyderabad?", a: "Wait times change through the year. Hyderabad has often been among the faster US posts in India, and applicants can usually book at any of the five posts — we check current availability and advise where to book." },
    { q: "How much do visa agents in Hyderabad charge?", a: "Fees depend on the destination and complexity of your case. We quote our service fee upfront during the free consultation, separate from the embassy fee." },
    { q: "Can the whole process be done online?", a: "Mostly, yes. Consultation, checklists, forms, and document review all happen over WhatsApp and email. You only appear in person for biometrics at VFS in Banjara Hills or interviews at the US Consulate." },
    { q: "How early should I apply for a Schengen visa from Hyderabad?", a: "Start at least 4–6 weeks before travel; 2–3 months in summer and December. Schengen appointments in peak season fill up fast." },
    { q: "Do you help with Dubai and Singapore visas for Hyderabad residents?", a: "Yes, both are processed quickly (3–7 working days) and are among our most requested destinations. We prepare the file so approval chances are highest on the first attempt." },
    { q: "My visa was rejected. Can you help me reapply?", a: "Yes. We review the refusal, identify the likely cause — weak funds, inconsistent documents, poor cover letter — and build a stronger, properly explained fresh application." },
    { q: "Do you assist companies sending employees abroad?", a: "Yes. We regularly prepare business visa files for IT and pharma professionals and business entrepreneurs, including invitation letters, employer covering letters, and supporting company documents." },
    { q: "Do you guarantee approval?", a: "No genuine consultant can guarantee a visa — the embassy decides. We guarantee a complete, accurate, professionally presented file, which is why 98% of our applications succeed." },
    { q: "Is SmotVisa an immigration agency?", a: "No. We are a visa assistance and travel documentation consultancy for tourist and business visas only — no immigration, PR, or work visa services." },
];

export default function VisaAgentInHyderabad() {
    return (
        <main className="bg-background">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smotvisa.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Visa Agent in Hyderabad", "item": "https://smotvisa.com/visa-agent-in-hyderabad" }
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
                title="Top Visa Agent in Hyderabad for Tourist & Business Visas"
                description="SmotVisa helps Hyderabad travellers get tourist and business visas approved. Since 2019 we have assisted with over 5,000 applications across 50+ countries, with a 98% success rate. Hyderabad is one of India's busiest cities for international travel — and a city where a poorly prepared visa file costs people their trips every single day. Our 30+ expert visa team closes that gap."
                breadcrumbs={[
                    { label: "Visa Agent in Hyderabad" }
                ]}
            />

            {/* Tourist Visa Assistance */}
            <section className="py-14 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <MotionDiv initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                            <Plane className="h-8 w-8 text-secondary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">Tourist Visa Assistance in Hyderabad</h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            The most common tourist visas we handle for Hyderabad applicants are the <Link href="/visa/us-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">USA B1/B2</Link>, <Link href="/visa/schengen-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">Schengen</Link>, UK, Dubai, Singapore, Thailand, and Vietnam. Each embassy has its own expectations for bank statements, income proof, travel history, and cover letters — and refusals usually come from small gaps applicants never notice.
                        </p>
                    </MotionDiv>
                    <MotionDiv initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-card p-8 rounded-[2.5rem] border border-border shadow-card">
                        <p className="text-sm font-display font-bold text-foreground mb-5">Our tourist visa assistance includes:</p>
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
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">Business Visa Assistance in Hyderabad</h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            Hyderabad's IT services, pharma, and life sciences companies send professionals abroad constantly — for client meetings, conferences, trade fairs, and training. Business visa applications need documents that tourist files don't: an invitation letter from the foreign company, a covering letter from your employer, company registration and GST papers if you own the business, and clear proof of the purpose of travel. We prepare and review complete business visa files for the USA (B1), UK, Schengen, Singapore, Japan, and Dubai — so nothing in your paperwork raises a question you can't answer.
                        </p>
                    </div>
                </div>
            </section>

            {/* Countries table */}
            <section className="py-14 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                    <h2 className="text-3xl font-display font-bold text-foreground">Countries Smotvisa Assists With From Hyderabad</h2>
                    <p className="text-muted-foreground italic tracking-wide">Processing times are set by the embassies and stretch during peak season — apply early.</p>
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
                        <h2 className="text-3xl font-display font-bold text-foreground">How Smotvisa Visa Assistance Works</h2>
                        <p className="text-muted-foreground italic tracking-wide">You get one dedicated point of contact who knows your case from start to finish.</p>
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
                        Don't let paperwork stand between you and your trip. Message us your destination and travel dates for a free eligibility check today.
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
