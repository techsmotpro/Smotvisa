import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import JsonLd from "@/components/ui/JsonLd";

const faqs: { q: string; a: string }[] = [
    {
        q: "Is SmotVisa an immigration consultant?",
        a: "No. We are a visa assistance and travel documentation consultancy focused on tourist and business visas. We do not provide immigration, permanent residency, work visa, study visa or job placement services.",
    },
    {
        q: "Do you guarantee my visa will be approved?",
        a: "No honest consultancy can guarantee approval — the final decision always rests with the embassy or consulate. What we guarantee is a complete, accurate and well-presented application that gives you the best possible chance.",
    },
    {
        q: "Which visas do you help with?",
        a: "Tourist and business (short-stay) visas for destinations including the Schengen countries, the UK, USA, Australia, Canada, Dubai/UAE, Singapore, Japan, Thailand, Malaysia, Vietnam, Sri Lanka, Turkey and New Zealand — over 50 countries in all.",
    },
    {
        q: "How much does your service cost?",
        a: "Our fee depends on the destination and how much support you need. We quote it upfront and explain exactly what's included before you commit. Message us for a clear quote.",
    },
    {
        q: "Do you fill out the application form for me?",
        a: "Yes. We prepare and complete your visa application form, cover letter and itinerary, and review everything with you before submission.",
    },
    {
        q: "Can you help if my visa was already rejected?",
        a: "Yes. We review your earlier application to understand the likely reason for refusal and help you prepare a stronger, properly documented fresh application.",
    },
    {
        q: "Will you book my appointment?",
        a: "Yes. We assist with booking your visa appointment slot at the relevant centre and brief you on what to carry and expect.",
    },
    {
        q: "Do I need travel insurance?",
        a: "Most destinations require valid travel insurance covering your trip dates, and some (like the Schengen area) have minimum coverage rules. We'll tell you exactly what your destination needs.",
    },
    {
        q: "How early should I apply for my visa?",
        a: "As early as possible — ideally four to eight weeks before travel for most destinations, and even earlier for the USA, Australia and Canada, where appointment slots can be limited.",
    },
    {
        q: "What documents do I need to start?",
        a: "At minimum, your passport, travel dates and trip purpose. We then give you a personalised checklist tailored to your destination and visa type.",
    },
    {
        q: "Do you assist business travellers?",
        a: "Yes. We help professionals and business owners with invitation letters, employer cover letters and the supporting documents needed for business visas.",
    },
    {
        q: "Can you help my whole family or group apply together?",
        a: "Yes. We regularly assist families and groups, preparing individual files and a consistent set of documents for everyone travelling.",
    },
    {
        q: "Do you operate across India?",
        a: "Yes. We have offices in Mumbai and Bengaluru and assist applicants from cities across India, including Delhi, Chennai, Hyderabad, Pune and Ahmedabad, with support handled online and over WhatsApp, phone and email.",
    },
    {
        q: "What happens after I submit my application?",
        a: "Processing is handled by the embassy or visa centre. We brief you on timelines, what to expect, and how to track your application where tracking is available.",
    },
    {
        q: "How do I get started?",
        a: "Message us on WhatsApp at 8904008843, call +91 8904008843, or email dm@smotvisa.com. We'll do a quick free assessment and tell you the right next step.",
    },
    {
        q: "What if my travel dates are very soon?",
        a: "Reach out immediately and tell us your dates. We'll be honest about what's realistic and prioritise the documents that matter most for a fast, clean submission.",
    },
];

const FaqSection = () => {
    return (
        <section id="faq" className="py-20 bg-muted/30">
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqs.map((f) => ({
                        "@type": "Question",
                        name: f.q,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: f.a,
                        },
                    })),
                }}
            />
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">FAQ</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground font-body">
                        Straight answers about how our tourist and business visa assistance works.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-card rounded-3xl border border-border shadow-card p-6 sm:p-8">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={faq.q} value={`faq-${idx}`}>
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

export default FaqSection;
