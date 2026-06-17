import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import JsonLd from "@/components/ui/JsonLd";

const faqs: { q: string; a: string }[] = [
    {
        q: "How long has SmotVisa been in business?",
        a: "We've been helping Indian travellers with tourist and business visa applications since 2019 — over six years of specialist experience.",
    },
    {
        q: "What is your visa approval rate?",
        a: "Across the applications we assist, we maintain a 98% approval rate — achieved by preparing files carefully and being honest about weak cases. The final decision always rests with the embassy.",
    },
    {
        q: "How many visas have you helped with?",
        a: "We've supported more than 5,000 successful visa applications for travellers across India.",
    },
    {
        q: "Is SmotVisa an immigration consultant?",
        a: "No. We are a visa assistance and travel documentation consultancy focused only on tourist and business visas. We do not provide immigration, permanent residency, work visa, study visa or job placement services.",
    },
    {
        q: "Which visas and countries do you cover?",
        a: "Tourist and business visas for the Schengen countries, the UK, USA, Australia, Canada, Dubai/UAE, Singapore, Japan, Thailand, Malaysia, Vietnam, Sri Lanka, Turkey and New Zealand. In total, we cover visas for over 50 countries.",
    },
    {
        q: "Do you guarantee approval?",
        a: "No honest consultancy can — the embassy makes the final decision. What we guarantee is a complete, accurate and well-presented application that gives you the best possible chance.",
    },
    {
        q: "Where is SmotVisa based, and do you work across India?",
        a: "We have offices in Mumbai and Bengaluru and assist applicants across India — including Delhi, Chennai, Hyderabad, Pune and Ahmedabad — with support over WhatsApp, phone and email.",
    },
    {
        q: "What makes SmotVisa different from other visa agents?",
        a: "Focus and honesty. We do only tourist and business visas, we review every file twice, and we tell you the truth about your case instead of taking shortcuts.",
    },
    {
        q: "Can you help if I was refused before?",
        a: "Yes. We review your earlier application to understand the likely reason for refusal and help you prepare a stronger, properly documented fresh application.",
    },
    {
        q: "How do I get started with SmotVisa?",
        a: "Message us on WhatsApp at 8904008843, call +91 8904008843, or email dm@smotvisa.com for a free assessment of your case.",
    },
];

const AboutFaq = () => {
    return (
        <section id="about-faq" className="py-12 bg-muted/30">
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqs.map((f) => ({
                        "@type": "Question",
                        name: f.q,
                        acceptedAnswer: { "@type": "Answer", text: f.a },
                    })),
                }}
            />
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">FAQ</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                        Frequently Asked Questions About SmotVisa
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto bg-card rounded-3xl border border-border shadow-card p-6 sm:p-8">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={faq.q} value={`about-faq-${idx}`}>
                                <AccordionTrigger className="text-base font-display font-bold text-foreground py-4 hover:no-underline">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm font-body text-muted-foreground leading-relaxed">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default AboutFaq;
