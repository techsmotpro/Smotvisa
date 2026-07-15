import PageHeader from "@/components/ui/PageHeader";
import { MapPin, CheckCircle2, ShieldCheck, Clock, ArrowRight, Globe2, FileCheck2, Search, Send, Plane, Briefcase, HeartHandshake, BadgeCheck, MessageSquareText, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { offices } from "@/data/officeData";
import JsonLd from "@/components/ui/JsonLd";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Trusted Visa Agent in Bangalore for Tourist & Business Visas | SmotVisa",
    description: "SmotVisa is your dedicated visa agent in Bangalore. Expert help for tourist and business visas with end-to-end service across 100+ destinations including US, UK, Schengen, Canada and Australia.",
    keywords: [
        "visa agent in Bangalore",
        "visa agents in Bangalore",
        "tourist visa agent Bangalore",
        "business visa agent Bangalore",
        "best visa consultants Bangalore",
        "Bangalore visa services",
        "SmotVisa Bangalore"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-agents-in-bangalore",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Trusted Visa Agent in Bangalore for Tourist & Business Visas | SmotVisa",
        description: "SmotVisa is your dedicated visa agent in Bangalore. Expert help for tourist and business visas with end-to-end service across 100+ destinations.",
        url: "https://smotvisa.com/visa-agents-in-bangalore",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Trusted Visa Agent in Bangalore for Tourist & Business Visas | SmotVisa",
        description: "SmotVisa is your dedicated visa agent in Bangalore. Expert help for tourist and business visas with end-to-end service across 100+ destinations.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    }
};

const faqs = [
    {
        q: "Which visas does SmotVisa handle?",
        a: "We specialise in tourist and business visas for over 100 destinations, including the US, UK, Schengen, Canada, Australia, UAE and Singapore."
    },
    {
        q: "How early should I apply for a tourist visa from Bangalore?",
        a: "We recommend starting four to eight weeks before travel. Appointment slots for popular destinations fill up quickly, so applying early gives you the best choice of dates."
    },
    {
        q: "What documents do I need for a business visa?",
        a: "Typically a valid passport, an invitation letter from the host company, an employer cover letter stating your designation and purpose, and financial and employment proof. We give you an exact checklist for your destination."
    },
    {
        q: "Can you help if my visa was rejected earlier?",
        a: "Yes. We review the reason for refusal, correct the weak points in your file and prepare a stronger application before you reapply."
    },
    {
        q: "Do you guarantee my visa will be approved?",
        a: "No agent can — visa decisions are made solely by the embassy or consulate. What we guarantee is a complete, accurate and well-presented application that gives you the strongest possible chance."
    }
];

const processSteps = [
    { icon: Search, title: "Enquiry & Eligibility", desc: "Tell us your destination and purpose. We confirm the visa type and give you a clear document checklist." },
    { icon: FileCheck2, title: "Document Preparation", desc: "We help you gather and organise everything, and draft supporting letters where needed." },
    { icon: ShieldCheck, title: "Expert Review", desc: "Our team double-checks every document for accuracy and completeness before anything is submitted." },
    { icon: Send, title: "Submission & Tracking", desc: "We schedule your appointment, guide you through biometrics, and keep you updated until you have a decision." }
];

const whyChoose = [
    { icon: BadgeCheck, title: "Focused Expertise", desc: "We do tourist and business visas and we do them well. That specialisation shows in the quality of every application we prepare." },
    { icon: ShieldCheck, title: "Accuracy That Protects Your Approval", desc: "Most refusals come from small, preventable errors. Our detailed review process catches them before submission." },
    { icon: MessageSquareText, title: "Honest, Transparent Guidance", desc: "We tell you what's realistic, what your file needs and what it will cost upfront, with no hidden surprises." },
    { icon: HeartHandshake, title: "Support That Stays With You", desc: "From your first question to your final decision, you deal with real consultants who answer your calls and messages, not a call centre." }
];

const destinations = ["United States", "United Kingdom", "Schengen (Europe)", "Canada", "Australia", "UAE", "Singapore", "Japan", "Malaysia"];

export default function VisaAgentsInBangalore() {
    // Filter for Bangalore offices specifically
    const bangaloreOffices = offices.filter(o => o.city === "Bangalore" || o.address.includes("Bangalore"));
    const bangaloreOffice = offices.find(o => o.id === "cv-raman-nagar-bangalore");

    return (
        <main className="bg-background">
            {bangaloreOffice && (
                <>
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://smotvisa.com/visa-agents-in-bangalore",
                        "name": "SmotVisa Bangalore",
                        "description": bangaloreOffice.description,
                        "url": "https://smotvisa.com/visa-agents-in-bangalore",
                        "telephone": bangaloreOffice.phone[0],
                        "email": bangaloreOffice.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": bangaloreOffice.address,
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "areaServed": { "@type": "City", "name": "Bangalore" },
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
                            { "@type": "ListItem", "position": 2, "name": "Visa Agents in Bangalore", "item": "https://smotvisa.com/visa-agents-in-bangalore" }
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
                title="Trusted Visa Agent in Bangalore for Tourism and Business Visit"
                description="SmotVisa is your dedicated visa agent in Bangalore. Expert help for tourist and business visas — 100+ destinations handled with end-to-end service."
                bgImage="/images/bangalore-vidhana-soudha.webp"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Visa Agents Bangalore" }
                ]}
            />

            <section className="py-8 container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link href="/contact/bangalore/visa-agents-in-cv-raman-nagar" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-display font-bold text-lg rounded-2xl hover:translate-y-[-2px] transition-all shadow-gold group">
                        Talk to a Visa Expert <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/reachout" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-primary text-primary font-display font-bold text-lg rounded-2xl hover:bg-primary/5 transition-all">
                        <PhoneCall className="h-5 w-5" /> Request a Callback
                    </Link>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <MotionDiv
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">
                            Bangalore's Trusted Visa Agent for Tourist & Business Travel
                        </h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            Our mission is to help you secure your visa approval with confidence. Whether you're traveling for tourism or business, SmotVisa is here to provide expert guidance and reliable support for all your visa needs. One missing document or a weak cover letter can hold up an approval — or worse, lead to a refusal.
                        </p>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed">
                            That's where a specialist visa agent makes the difference. Our team reviews your profile, tells you exactly which documents you need, prepares an approval-ready file and guides you through every appointment and biometric step. Prefer to talk in person? Drop by our <Link href="/contact/bangalore/visa-agents-in-cv-raman-nagar" className="text-secondary font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">visa office in CV Raman Nagar, Bangalore</Link> — we're happy to review your documents over a coffee.
                        </p>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-secondary rounded-[3rem] rotate-3 opacity-10" />
                        <div className="relative bg-card p-6 rounded-[3rem] border border-border shadow-elevated space-y-8">
                            <div className="relative h-48 rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/bangalore-skyline.webp"
                                    alt="Bangalore city skyline"
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-foreground">Our Bangalore Footprint</h3>
                            <div className="space-y-6">
                                {bangaloreOffices.map((office, idx) => (
                                    <div key={idx} className="p-6 bg-card rounded-2xl border border-border group hover:border-secondary transition-colors shadow-sm">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-3">
                                                <MapPin className="h-5 w-5 text-secondary" />
                                                <h4 className="font-display font-bold text-lg">{office.city} Office</h4>
                                            </div>
                                            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-[10px] font-display font-bold uppercase rounded-full">Active</span>
                                        </div>
                                        <p className="text-sm font-body text-muted-foreground italic leading-relaxed mb-4">{office.address}</p>
                                        <Link href={`/contact?branch=${office.id}`} className="inline-flex items-center gap-2 text-xs font-display font-bold text-secondary uppercase tracking-widest hover:gap-3 transition-all">
                                            Visit Office <ArrowRight className="h-3 w-3" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                        <h2 className="text-3xl font-display font-bold text-foreground">Our Visa Services</h2>
                        <p className="text-muted-foreground italic tracking-wide">
                            By concentrating only on tourist and business visas, we know these two categories inside out — the document checklists, the financial-proof expectations, the appointment systems and the details that quietly make or break an application.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Plane,
                                title: "Tourist Visa Assistance",
                                desc: "Whether it's a family holiday, a honeymoon, sightseeing or visiting friends and relatives abroad, we prepare a clean, well-documented application with the right itinerary, financial proof and cover letter. We advise on how much to show, how to present your travel history and how to avoid the small mistakes that cause avoidable rejections."
                            },
                            {
                                icon: Briefcase,
                                title: "Business Visa Assistance",
                                desc: "Travelling for meetings, negotiations, conferences, trade fairs or a short business assignment? We handle invitation letters, company paperwork, employer cover letters and appointment scheduling so your application reflects a genuine, well-supported purpose of travel. Corporate travellers on tight deadlines get priority, organised support from start to finish."
                            }
                        ].map((s, i) => (
                            <div key={i} className="p-8 bg-card rounded-[2.5rem] shadow-card border border-border hover:shadow-elevated transition-all">
                                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <s.icon className="h-8 w-8 text-secondary" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground mb-4">{s.title}</h3>
                                <p className="text-sm font-body text-muted-foreground italic leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                    <h2 className="text-3xl font-display font-bold text-foreground">Popular Destinations We Handle</h2>
                    <p className="text-muted-foreground italic tracking-wide">
                        At SmotVisa, Bangalore travellers ask us most often for the US, UK, Schengen, Canada, Australia, the UAE, Singapore, Japan and Malaysia — and we assist with tourist and business visas for 100+ countries in total. Each destination has its own rules, forms and expectations, and our destination-specific guidance means your application is built the way that particular embassy wants to see it.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {destinations.map((d, i) => (
                        <div key={i} className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full shadow-sm hover:border-secondary transition-colors">
                            <Globe2 className="h-4 w-4 text-secondary" />
                            <span className="font-display font-bold text-sm text-foreground">{d}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-14 bg-gradient-to-b from-background to-secondary/5 border-t border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                        <h2 className="text-3xl font-display font-bold text-foreground">How SmotVisa Works</h2>
                        <p className="text-muted-foreground italic tracking-wide">Our process is simple and transparent.</p>
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

            <section className="py-14 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                    <h2 className="text-3xl font-display font-bold text-foreground">Why Choose SmotVisa as Your Visa Agent in Bangalore</h2>
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

            <section className="py-14 container mx-auto px-4 text-center">
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-10"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
                        Start Your Visa Process with SmotVisa Today
                    </h2>
                    <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto italic leading-relaxed">
                        Your trip is worth getting right. Talk to SmotVisa, your trusted visa agent in Bangalore, and let our experts turn a stressful application into a simple, confident one.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/contact/bangalore/visa-agents-in-cv-raman-nagar" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-secondary text-secondary-foreground font-display font-bold text-lg rounded-2xl hover:translate-y-[-2px] transition-all shadow-gold group">
                            Talk to a Visa Expert <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/reachout" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-transparent border-2 border-primary text-primary font-display font-bold text-lg rounded-2xl hover:bg-primary/5 transition-all">
                            <PhoneCall className="h-6 w-6" /> Request a Callback
                        </Link>
                    </div>
                </MotionDiv>
            </section>
        </main>
    );
}
