import { MotionDiv } from "@/components/ui/MotionWrapper";
import { CheckCircle2 } from "lucide-react";

const whoWeHelp = [
    "Holidaymakers and families travelling for leisure",
    "People visiting friends or relatives abroad",
    "Professionals travelling for meetings, conferences, trade fairs or training",
    "Business owners exploring partnerships or attending events",
    "First-time travellers who want the application done correctly",
    "Applicants who were refused earlier and want a stronger fresh attempt",
];

const AboutScopePromise = () => (
    <>
        <section className="py-10 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                    <MotionDiv initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Who We Help</span>
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2 mb-4 leading-tight">Made for Genuine Short-Term Travel</h2>
                        <p className="text-base font-body text-muted-foreground mb-5">Our tourist and business visa assistance is for anyone in India planning genuine short-term travel.</p>
                        <div className="space-y-2.5">
                            {whoWeHelp.map((item) => (
                                <div key={item} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                                    <span className="text-base font-body text-foreground leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </MotionDiv>

                    <MotionDiv initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Our Scope</span>
                        <h2 className="text-xl font-display font-bold text-foreground mt-3 mb-5 leading-tight">What We Don&apos;t Do, and Why That&apos;s Good for You</h2>
                        <div className="space-y-3 text-base font-body text-muted-foreground leading-relaxed">
                            <p>SmotVisa assists with tourist and business (short-stay) visas only. We do not handle immigration, permanent residency, work visas, study visas, job placement or overseas employment.</p>
                            <p>This focus is a feature, not a limitation. When you come to us for a tourist or business visa, you get specialists who do this every day, not a generalist juggling a dozen unrelated services.</p>
                        </div>
                    </MotionDiv>
                </div>
            </div>
        </section>

        <section className="py-10 bg-primary">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <MotionDiv initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">The SmotVisa Promise</span>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-foreground mt-3 mb-4 leading-tight">The Strongest, Cleanest Application Possible</h2>
                    <p className="text-base font-body text-primary-foreground/70 leading-relaxed">When you work with us, we prepare your application as carefully as if it were our own, tell you the truth about your chances, and stay with you until your file is submitted. Since 2019, with a 98% success rate and 5,000+ successful applications, that&apos;s a promise we know how to keep.</p>
                </MotionDiv>
            </div>
        </section>
    </>
);

export default AboutScopePromise;



