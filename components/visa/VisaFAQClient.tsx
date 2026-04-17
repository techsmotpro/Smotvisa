"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface FAQ {
    question: string;
    answer: string;
}

export default function VisaFAQClient({ faqs }: { faqs: FAQ[] }) {
    return (
        <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-card rounded-[2rem] shadow-card border border-border overflow-hidden px-8 py-2">
                    <AccordionTrigger className="text-left hover:no-underline">
                        <span className="text-lg font-display font-bold text-foreground tracking-tight">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 border-t border-border/50 mt-2">
                        <p className="text-sm font-body text-muted-foreground leading-[1.8] italic">{faq.answer}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}