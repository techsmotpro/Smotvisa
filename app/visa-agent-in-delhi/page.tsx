import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle2, ShieldCheck, Globe2, FileCheck2, Search, Send, Plane, Briefcase, MessageSquareText, PhoneCall, Clock, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Trusted Tourist Visa Agent in Delhi | Smotvisa",
    description: "Trusted visa agent in Delhi for tourist & business visas. Our expert visa consultants ensure fast approvals and complete guidance for your travel.",
    keywords: [
        "visa agent in Delhi",
        "visa agents in Delhi",
        "tourist visa agent Delhi",
        "business visa agent Delhi",
        "best visa consultants Delhi",
        "Delhi NCR visa services",
        "SmotVisa Delhi"
    ],
    alternates: {
        canonical: "https://smotvisa.com/visa-agent-in-delhi",
    },
    robots: { index: true, follow: true },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Trusted Tourist Visa Agent in Delhi | Smotvisa",
        description: "Trusted visa agent in Delhi for tourist & business visas. Our expert visa consultants ensure fast approvals and complete guidance for your travel.",
        url: "https://smotvisa.com/visa-agent-in-delhi",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Trusted Tourist Visa Agent in Delhi | Smotvisa",
        description: "Trusted visa agent in Delhi for tourist & business visas. Our expert visa consultants ensure fast approvals and complete guidance for your travel.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const WHATSAPP = "https://wa.me/918904008843";
const CALL = "tel:+918904008843";

const touristPoints = [
    "The right visa type for your trip and an honest assessment of your case",
    "A personalised document checklist for your exact destination",
    "Application forms completed accurately — DS-160, UK online form, Schengen forms",
    "A tailored cover letter and day-by-day itinerary that match your bookings",
    "Financial document review, so your bank statements and income proof hold up",
    "Travel insurance guidance that meets embassy requirements",
    "Appointment booking at the correct centre, with a briefing on what to carry",
];

const countries = [
    { dest: "Schengen (Europe)", type: "Tourist / Business", time: "15–30 working days" },
    { dest: "United Kingdom", type: "Standard Visitor", time: "3–6 weeks" },
    { dest: "USA", type: "B1/B2 Visitor", time: "Appointment based" },
    { dest: "Dubai / UAE", type: "Tourist / Business", time: "3–5 working days" },
    { dest: "Singapore", type: "Tourist / Business", time: "3–7 working days" },
    { dest: "Thailand / Malaysia", type: "Tourist", time: "3–10 working days" },
    { dest: "Japan", type: "Tourist / Business", time: "5–10 working days" },
    { dest: "Australia / Canada", type: "Visitor", time: "2–6 weeks" },
];

const processSteps = [
    { icon: Search, title: "Free Consultation", desc: "Share your destination, dates, and purpose on WhatsApp or a call. We confirm the visa type and tell you honestly if your case needs strengthening." },
    { icon: FileCheck2, title: "Document Checklist", desc: "A clear, personalised checklist with guidance on how each document should look." },
    { icon: ShieldCheck, title: "Preparation & Review", desc: "We draft your cover letter and itinerary, complete your forms, and check the full file for gaps, mismatches, and red flags." },
    { icon: Send, title: "Appointment & Submission", desc: "We book your slot and prepare you for the visit — including interview preparation for US applicants." }
];

const whyChoose = [
    { icon: BadgeCheck, title: "Visa Specialists Only", desc: "Tourist and business visas are our entire business — we know what each embassy looks for." },
    { icon: ShieldCheck, title: "Human Review on Every File", desc: "Checked against the latest embassy checklist before submission." },
    { icon: BadgeCheck, title: "Proven Track Record", desc: "98% success rate across 5,000+ applications since 2019." },
    { icon: MessageSquareText, title: "Straight Answers", desc: "If your case is weak, we tell you what to fix instead of taking your money and hoping." },
    { icon: FileCheck2, title: "Transparent Fees", desc: "Quoted upfront with nothing hidden." },
    { icon: ShieldCheck, title: "Rejection Guidance", desc: "We turn a refusal into a stronger fresh application." },
];

const faqs = [
    { q: "How do I find a genuine visa agent in Delhi?", a: "Look for a consultancy that specialises in visa documentation, quotes fees upfront, and never guarantees approval — because no one can. SmotVisa handles only tourist and business visas, with a 98% success rate since 2019." },
    { q: "What do visa agents in Delhi charge?", a: "Service fees depend on the destination and your case. We quote upfront during the free consultation, separate from the embassy's visa fee, with no hidden charges." },
    { q: "Which Schengen embassy should I apply through in Delhi?", a: "The country where you'll spend the most nights — or your point of entry if nights are equal. Applying through the wrong embassy is a common refusal reason; we determine the correct one for your itinerary." },
    { q: "Where are US visa interviews held for Delhi applicants?", a: "At the US Embassy in New Delhi. If Delhi wait times are long, you can usually book at another US post in India — we check availability across all five and advise." },
    { q: "Can I complete the process without visiting your office?", a: "Yes. Consultation, checklists, forms, and file review all happen over WhatsApp and email. You only appear in person for biometrics or embassy interviews." },
    { q: "How early should I apply for a visa from Delhi?", a: "Dubai, Singapore, Thailand: 2–3 weeks ahead. Schengen, UK, USA, Australia, Canada: 1–3 months ahead, more in summer and December when NCR appointment slots fill fast." },
    { q: "Can you help if my visa was rejected?", a: "Yes. We review the refusal letter, identify the likely cause, and build a properly explained fresh application rather than a risky blind reapply." },
    { q: "Do you assist business travellers and companies in Delhi NCR?", a: "Yes — including invitation letters, employer covering letters, and company documents for meetings, exhibitions, and trade fairs abroad." },
    { q: "Do you handle family and group visa applications?", a: "Yes. We prepare group files regularly and make sure every member's documents are consistent with each other." },
    { q: "Is SmotVisa an immigration consultant?", a: "No. We are a visa assistance and travel documentation consultancy for tourist and business visas only — no immigration, PR, or work visa services." },
];

export default function VisaAgentInDelhi() {
    const delhiOffice = offices.find(o => o.id === "delhi");

    return (
        <main className="bg-background">
            {delhiOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agent-in-delhi",
                        "name": "SmotVisa Delhi",
                        "description": "Trusted visa agent in Delhi for tourist and business visas to 150+ countries, with a 98% success rate.",
                        "url": "https://smotvisa.com/visa-agent-in-delhi",
                        "telephone": "+91-8904008843",
                        "email": delhiOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": delhiOffice.address,
                            "addressLocality": "New Delhi",
                            "addressRegion": "Delhi",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Delhi" },
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
                            { "@type": "ListItem", "position": 2, "name": "Visa Agent in Delhi", "item": "https://smotvisa.com/visa-agent-in-delhi" }
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
                title="Trusted Visa Agent in Delhi for Tourist & Business Visas"
                description="SmotVisa serves travellers across Delhi, Gurugram, Noida, Ghaziabad, and Faridabad. Established in 2020, the SmotVisa Delhi branch has assisted travellers with tourist and business visa applications. To date, we have successfully processed more than 5,000 visa approvals for over 150 countries, maintaining a 98% visa success rate through accurate documentation and professional guidance."
                breadcrumbs={[
                    { label: "Visa Agent in Delhi" }
                ]}
            />

            {/* Tourist Visa Assistance */}
            <section className="py-14 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <MotionDiv initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                            <Plane className="h-8 w-8 text-secondary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">Tourist Visa Assistance in Delhi</h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            Whether you are planning a holiday, visiting family and friends, or travelling abroad, having SmotVisa by your side for the right guidance makes the visa application process more efficient. As experienced tourist visa agents in Delhi, we provide professional assistance at every stage — from document preparation and eligibility review to appointment scheduling and final submission — helping you complete the process accurately and on time.
                        </p>
                    </MotionDiv>
                    <MotionDiv initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-card p-8 rounded-[2.5rem] border border-border shadow-card">
                        <p className="text-sm font-display font-bold text-foreground mb-5">Our tourist visa assistance covers the full application:</p>
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
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">Business Visa Assistance in Delhi</h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            Delhi NCR is home to corporate headquarters, government contractors, exporters, and thousands of small business owners who travel for meetings, exhibitions, and trade fairs. A business visa file needs to prove the purpose of the trip beyond doubt: an invitation letter from the foreign company, a covering letter from your employer or your own firm, company registration and GST documents, and evidence of the business relationship. We prepare and review complete business visa files for the <Link href="/visa/us-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">USA (B1)</Link>, <Link href="/visa/uk-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">UK</Link>, Schengen, Singapore, Japan, and Dubai — so your paperwork answers the visa officer's questions before they're asked.
                        </p>
                    </div>
                </div>
            </section>

            {/* Countries table */}
            <section className="py-14 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                    <h2 className="text-3xl font-display font-bold text-foreground">Countries We Assist With From Delhi</h2>
                    <p className="text-muted-foreground italic tracking-wide">Embassies set these timelines, and they stretch in peak season — start early.</p>
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
                        <p className="text-muted-foreground italic tracking-wide">You deal with one dedicated person who knows your case, not a call centre — or visit our <Link href="/contact/delhi/visa-agents-in-connaught-place" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">Connaught Place, Delhi office</Link> in person.</p>
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
                    <h2 className="text-3xl font-display font-bold text-foreground">Why Delhi Travellers Choose Smotvisa</h2>
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
                        The embassies may be in your city, but approval still depends on your file. Get it right the first time — message us your destination and dates for a free eligibility check.
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
