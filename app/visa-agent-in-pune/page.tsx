import PageHeader from "@/components/ui/PageHeader";
import { MapPin, CheckCircle2, ShieldCheck, ArrowRight, Globe2, FileCheck2, Search, Send, Plane, Briefcase, MessageSquareText, PhoneCall, Clock } from "lucide-react";
import Link from "next/link";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Trusted Visa Agent in Pune with 98% Success Rate | Smotvisa",
    description: "Smotvisa is a trusted visa agent in Pune for tourist & business visas — to name a few: Schengen, US, UK, Dubai, Singapore visas & 150+ countries.",
    keywords: [
        "visa agent in Pune",
        "visa agents in Pune",
        "tourist visa agent Pune",
        "business visa agent Pune",
        "best visa consultants Pune",
        "Pune visa services",
        "SmotVisa Pune"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agent-in-pune",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Trusted Visa Agent in Pune with 98% Success Rate | Smotvisa",
        description: "Smotvisa is a trusted visa agent in Pune for tourist & business visas to Schengen, US, UK, Dubai, Singapore & 150+ countries.",
        url: "https://smotvisa.com/visa-agent-in-pune",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Trusted Visa Agent in Pune with 98% Success Rate | Smotvisa",
        description: "Smotvisa is a trusted visa agent in Pune for tourist & business visas to Schengen, US, UK, Dubai, Singapore & 150+ countries.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const WHATSAPP = "https://wa.me/918904008843";
const CALL = "tel:+918904008843";

const touristPoints = [
    "The correct visa type for your trip and an honest read on your case",
    "A personalised document checklist for your destination",
    "Application forms completed accurately, including the US DS-160",
    "A tailored cover letter and day-by-day itinerary that match your bookings",
    "Bank statement and income proof review so your finances hold up to scrutiny",
    "Travel insurance guidance that meets embassy requirements",
    "Appointment booking and a clear briefing on what to carry",
];

const countries = [
    { dest: "Schengen (Europe)", type: "Tourist / Business", time: "15–30 working days" },
    { dest: "Dubai / UAE", type: "Tourist / Business", time: "3–5 working days" },
    { dest: "Singapore", type: "Tourist / Business", time: "3–7 working days" },
    { dest: "Thailand / Malaysia", type: "Tourist", time: "3–10 working days" },
    { dest: "Vietnam", type: "Tourist", time: "3–7 working days" },
    { dest: "United Kingdom", type: "Standard Visitor", time: "3–6 weeks" },
    { dest: "USA", type: "B1/B2 Visitor", time: "Appointment based" },
    { dest: "Japan", type: "Tourist / Business", time: "5–10 working days" },
    { dest: "Australia / Canada", type: "Visitor", time: "2–6 weeks" },
];

const processSteps = [
    { icon: Search, title: "Free Consultation", desc: "Share your destination, dates, and purpose on WhatsApp or a call. We confirm the right visa type and assess your case honestly." },
    { icon: FileCheck2, title: "Document Checklist", desc: "A clear, personalised checklist for your destination, with guidance on how each document should look." },
    { icon: ShieldCheck, title: "Preparation & Review", desc: "We draft your cover letter and itinerary, complete your forms, and review the full file for gaps, mismatches, and red flags." },
    { icon: Send, title: "Appointment & Submission", desc: "We book your slot — Viman Nagar, Mumbai, or elsewhere as required — and brief you for the visit." }
];

const faqs = [
    {
        q: "How do I pick a good visa agent in Pune?",
        a: "Choose a consultancy that specialises in visas, reviews your complete file before submission, and quotes fees upfront. Be wary of anyone guaranteeing approval — no one can. Smotvisa has expertise in tourist and business visas with a 98% success rate."
    },
    {
        q: "How much do visa agents in Pune charge?",
        a: "Service fees depend on the destination and case complexity. We quote upfront during the free consultation, separate from the embassy's visa fee."
    },
    {
        q: "Can I give UK or Schengen biometrics in Pune?",
        a: "For the UK and several Schengen countries, yes — at VFS Global in Viman Nagar. For some destinations you may need to visit Mumbai; we confirm this for your country before you start."
    },
    {
        q: "Where is my US visa interview if I live in Pune?",
        a: "Normally at the US Consulate in Mumbai. If Mumbai wait times are long, you can usually book at another US post in India. We check availability at all five and advise."
    },
    {
        q: "Can everything be handled online?",
        a: "Almost all of it. Consultation, checklists, forms, and review happen over WhatsApp and email. You only appear in person for biometrics or interviews."
    },
    {
        q: "How early should I apply for a Schengen visa from Pune?",
        a: "At least 4–6 weeks before travel — 2–3 months in summer and December, when slots fill fast."
    },
    {
        q: "Do you help with urgent business travel?",
        a: "Yes. For destinations like Dubai and Singapore, complete files can be processed within days. Tell us your dates and we'll give you an honest answer on feasibility."
    },
    {
        q: "Can you help after a visa rejection?",
        a: "Yes. We review the refusal, identify the cause, and prepare a stronger, properly explained fresh application rather than a blind reapply."
    },
    {
        q: "Do you handle family and group applications?",
        a: "Yes — families, honeymooners, and corporate teams, with every member's documents kept consistent."
    },
    {
        q: "Is Smotvisa an immigration consultant?",
        a: "No. We are a visa assistance and tour and travel consultancy for tourist and business visas only — no immigration, PR, or work visa services."
    }
];

export default function VisaAgentsInPune() {
    const puneOffice = offices.find(o => o.id === "shivaji-nagar-pune");

    return (
        <main className="bg-background">
            {puneOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agent-in-pune",
                        "name": "SmotVisa Pune",
                        "description": "Smotvisa is a trusted visa agent in Pune for tourist and business visas to 150+ countries, with a 98% success rate.",
                        "url": "https://smotvisa.com/visa-agent-in-pune",
                        "telephone": "+91-8904008843",
                        "email": puneOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": puneOffice.address,
                            "addressLocality": "Pune",
                            "addressRegion": "Maharashtra",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Pune" },
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
                            { "@type": "ListItem", "position": 2, "name": "Visa Agents in Pune", "item": "https://smotvisa.com/visa-agent-in-pune" }
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
                title="Trusted Tourist & Business Visa Agent in Pune"
                description="Smotvisa is a specialist visa assistance company serving travellers across Pune. We are a visa consultant and travel agency. Since 2019, we have assisted with over 5,000 tourist and business visa applications across 150+ countries, with a 98% success rate."
                breadcrumbs={[
                    { label: "Visa Agents in Pune" }
                ]}
            />

            {/* Tourist Visa Assistance */}
            <section className="py-14 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <MotionDiv
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                            <Plane className="h-8 w-8 text-secondary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">
                            Tourist Visa Assistance in Pune
                        </h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            Pune's most requested tourist visas are <Link href="/visa/schengen-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">Schengen countries</Link>, Dubai, Thailand, Vietnam, Singapore, UK, and the <Link href="/visa/us-visa-consultant" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">USA</Link>. Refusals almost always trace back to the file — unclear proof of funds, a generic or missing cover letter, bookings that don't match the itinerary, or missing insurance. Our tourist visa assistance is built to catch exactly those issues.
                        </p>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-[2.5rem] border border-border shadow-card"
                    >
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
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                            <Briefcase className="h-8 w-8 text-secondary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">
                            Business Visa Assistance in Pune
                        </h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            We prepare and review complete business visa files for the USA (B1), Schengen, UK, Japan, Singapore, and Dubai — for individual professionals and for companies sending teams. Client visits to the US, project meetings in Germany and elsewhere in Europe, supplier meetings in Japan, trade fairs in Dubai and Singapore — each needs a business visa file that proves the purpose of the trip: an invitation letter from the foreign company, a covering letter from your employer, company documents, and evidence of the business relationship.
                        </p>
                    </div>
                </div>
            </section>

            {/* Countries table */}
            <section className="py-14 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                    <h2 className="text-3xl font-display font-bold text-foreground">Countries Smotvisa Assists With From Pune</h2>
                    <p className="text-muted-foreground italic tracking-wide">
                        Embassies set these timelines and they stretch in peak season — apply early.
                    </p>
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
                        <h2 className="text-3xl font-display font-bold text-foreground">How Smotvisa Assistance Works</h2>
                        <p className="text-muted-foreground italic tracking-wide">You work with one dedicated contact who knows your case throughout — or drop by our <Link href="/contact/pune/visa-agents-in-shivaji-nagar" className="text-secondary font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">Shivaji Nagar, Pune office</Link> in person.</p>
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
            <section className="py-14 container mx-auto px-4 text-center">
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-10"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
                        Apply With Confidence
                    </h2>
                    <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto italic leading-relaxed">
                        Whether it's a client meeting abroad or the family holiday you've been planning all year, get the paperwork right the first time. Message us your destination and dates for a free eligibility check.
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
