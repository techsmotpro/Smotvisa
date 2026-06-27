import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import JsonLd from "@/components/ui/JsonLd";

const faqs = [
    { q: "How long has SmotVisa been in business?", a: "We've been helping Indian travellers since 2019, over six years of specialist tourist and business visa experience." },
    { q: "What is your visa approval rate?", a: "We maintain a 98% approval rate across the applications we assist, achieved by preparing files carefully and being honest about weak cases. The final decision always rests with the embassy." },
    { q: "Is SmotVisa an immigration consultant?", a: "No. We are a visa assistance and travel documentation consultancy focused only on tourist and business visas. We do not provide immigration, permanent residency, work visa, study visa or job placement services." },
    { q: "Which countries do you cover?", a: "Tourist and business visas for the Schengen countries, the UK, USA, Australia, Canada, Dubai/UAE, Singapore, Japan, Thailand, Malaysia, Vietnam, Sri Lanka, Turkey and New Zealand, over 50 countries in all." },
    { q: "Do you guarantee approval?", a: "No honest consultancy can, the embassy makes the final decision. What we guarantee is a complete, accurate and well-presented application that gives you the best possible chance." },
    { q: "Can you help if I was refused before?", a: "Yes. We review your earlier application to understand the likely reason for refusal and help you prepare a stronger, properly documented fresh application." },
    { q: "How do I get started?", a: "Message us on WhatsApp at 8904008843 or call +91 8904008843 for a free assessment of your case." },
];

const AboutFaq = () => (
    <section id="about-faq" className="py-10 bg-background">
        <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
        <div className="container mx-auto px-4 max-w-5xl">
            <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">FAQ</span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2 mb-5">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                    <AccordionItem key={faq.q} value={`about-faq-${idx}`} className="border-b border-border last:border-0">
                        <AccordionTrigger className="py-4 hover:no-underline text-left text-sm font-display font-bold text-foreground hover:text-secondary transition-colors">
                            {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 text-base font-body text-muted-foreground leading-relaxed">
                            {faq.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
);

export default AboutFaq;



