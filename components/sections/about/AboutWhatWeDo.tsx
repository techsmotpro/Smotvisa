import { MotionDiv } from "@/components/ui/MotionWrapper";
import { CheckCircle2 } from "lucide-react";

const whatWeDo = [
    "Assess your case for free and confirm the right visa type for your trip",
    "Build a personalised, destination-specific document checklist",
    "Prepare your visa application forms accurately and completely",
    "Write tailored cover letters and day-by-day travel itineraries",
    "Review your entire file for gaps, mismatches and red flags before submission",
    "Assist with booking your visa appointment and preparing for it",
    "Guide applicants who were refused earlier toward a stronger fresh attempt",
];

const values = [
    { title: "Accuracy above everything",  desc: "A visa application lives or dies on detail. We sweat the small stuff so you don't have to." },
    { title: "Honest advice, always",      desc: "If your case needs work, we'll say so. No false promises, ever." },
    { title: "Real human support",         desc: "Patient, plain-language help from people who actually know your case." },
    { title: "Transparent pricing",        desc: "You'll always know our fee before you commit. No surprises." },
];

const AboutWhatWeDo = () => (
    <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="border-t border-border mb-10" />
            <MotionDiv initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid md:grid-cols-[240px_1fr] gap-6 mb-8">
                <div>
                    <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">What We Do</span>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2 mb-4 leading-tight">Complete Ownership of Your Paperwork</h2>
                </div>
                <div>
                    <p className="text-base font-body text-muted-foreground mb-5">So you never have to guess what&apos;s required. For every applicant, we:</p>
                    <div className="space-y-2.5">
                        {whatWeDo.map((item) => (
                            <div key={item} className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                                <span className="text-base font-body text-foreground leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">What We Stand For</span>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2 mb-4">The Principles Behind Every File</h2>
                <div className="divide-y divide-border">
                    {values.map((v, idx) => (
                        <MotionDiv key={v.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                            className="grid sm:grid-cols-[220px_1fr] gap-3 py-4">
                            <h3 className="text-sm font-display font-bold text-foreground">{v.title}</h3>
                            <p className="text-base font-body text-muted-foreground leading-relaxed">{v.desc}</p>
                        </MotionDiv>
                    ))}
                </div>
            </MotionDiv>
        </div>
    </section>
);

export default AboutWhatWeDo;



