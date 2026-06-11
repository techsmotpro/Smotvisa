import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Users, XCircle, Handshake } from "lucide-react";

const whoWeHelp = [
    "Holidaymakers and families travelling for leisure",
    "People visiting friends or relatives abroad",
    "Professionals travelling for meetings, conferences, trade fairs or training",
    "Business owners exploring partnerships or attending events",
    "First-time travellers who want the application done correctly",
    "Applicants who were refused earlier and want a stronger fresh attempt",
];

const AboutScopePromise = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Who We Help */}
                <div className="max-w-4xl mx-auto mb-20">
                    <MotionDiv
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Who We Help</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                            Made for Genuine Short-Term Travel
                        </h2>
                        <p className="text-muted-foreground font-body">
                            Our tourist and business visa assistance is for anyone in India planning genuine short-term travel.
                        </p>
                    </MotionDiv>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {whoWeHelp.map((item, idx) => (
                            <MotionDiv
                                key={item}
                                initial={{ opacity: 1, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border"
                            >
                                <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary/10 flex items-center justify-center">
                                    <Users className="h-5 w-5 text-secondary" />
                                </div>
                                <p className="text-sm font-body text-foreground font-medium leading-relaxed">{item}</p>
                            </MotionDiv>
                        ))}
                    </div>
                </div>

                {/* What We Don't Do */}
                <MotionDiv
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-20 p-8 sm:p-10 rounded-3xl border border-border bg-muted/40"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                            <XCircle className="h-6 w-6 text-secondary" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                            What We Don&apos;t Do — and Why That&apos;s Good for You
                        </h2>
                    </div>
                    <div className="space-y-5 text-base font-body text-muted-foreground leading-relaxed">
                        <p>
                            To keep our expertise sharp, we deliberately limit our scope. SmotVisa assists with tourist
                            and business (short-stay) visas only. We do not handle immigration, permanent residency, work
                            visas, study visas, job placement or overseas employment.
                        </p>
                        <p>
                            This focus is a feature, not a limitation. It means that when you come to us for a tourist or
                            business visa, you get specialists who do this every day — not a generalist juggling a dozen
                            unrelated services. Your application gets the depth of attention it actually deserves.
                        </p>
                    </div>
                </MotionDiv>

                {/* The SmotVisa Promise */}
                <MotionDiv
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                        <Handshake className="h-7 w-7 text-secondary" />
                    </div>
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">The SmotVisa Promise</span>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
                        The Strongest, Cleanest Application Possible
                    </h2>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed">
                        When you work with us, we promise to prepare your application as carefully as if it were our own,
                        to tell you the truth about your chances, and to stay with you until your file is submitted. We
                        can&apos;t decide the outcome — only the embassy can — but we can make sure you walk in with the
                        strongest, cleanest application possible. Since 2019, with a 98% success rate and 5,000+
                        successful applications, that&apos;s a promise we know how to keep.
                    </p>
                </MotionDiv>
            </div>
        </section>
    );
};

export default AboutScopePromise;
