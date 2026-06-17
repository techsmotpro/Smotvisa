import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Award } from "lucide-react";

const AboutStory = () => {
    return (
        <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Our Story</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-8 leading-tight">
                        Built to Fix the Mistakes That Cost People Their Trip
                    </h2>

                    <div className="space-y-6 text-lg font-body text-muted-foreground leading-relaxed">
                        <p>
                            SmotVisa started with a frustration that thousands of Indian travellers know too well. People
                            with genuine reasons to travel — a long-awaited holiday, a family reunion abroad, an important
                            business meeting — were being refused visas not because they didn&apos;t deserve them, but
                            because their paperwork didn&apos;t tell the right story. A weak cover letter here, a missing
                            document there, dates that didn&apos;t quite match: small errors with big, expensive
                            consequences.
                        </p>
                        <p>
                            We set out to fix that. Since 2019 we&apos;ve grown into a specialist consultancy focused
                            entirely on tourist and business visas, refining our process with every single application. We
                            learned what each consulate looks for, where applications quietly fall apart, and how to
                            present a case so a visa officer can say yes with confidence. The result is a 98% approval rate
                            and more than 5,000 travellers who reached their destination with our help.
                        </p>
                        <p>
                            We&apos;ve stayed deliberately focused. We don&apos;t chase immigration, permanent residency or
                            work-visa business. That focus is our strength — it&apos;s why our advice is sharp, our
                            documents are precise, and our applicants keep referring us to their family and friends.
                        </p>
                    </div>
                </MotionDiv>

                {/* Meet the Founder */}
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 p-5 sm:p-8 bg-card rounded-3xl border border-border shadow-card"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                            <Award className="h-7 w-7 text-secondary" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-display font-bold text-foreground">Meet the Founder</h3>
                            <p className="text-sm font-body text-secondary font-semibold">Two Decades of Visa Expertise</p>
                        </div>
                    </div>
                    <div className="space-y-5 text-base font-body text-muted-foreground leading-relaxed">
                        <p>
                            SmotVisa is led by its CEO, <strong className="text-foreground">Mr. Shaji Kandambeth</strong>,
                            who brings over two decades of hands-on experience across the visa and travel documentation
                            domain — visas, OCI, FRRO and the wider world of travel paperwork. The company itself was
                            established in 2019, but the expertise behind it runs far deeper.
                        </p>
                        <p>
                            That experience shapes everything we do. Over twenty years, Mr. Kandambeth has seen first-hand
                            what consulates and authorities look for, where applications quietly fall apart, and how to
                            present a case so an officer can say yes with confidence. Under his leadership, SmotVisa
                            channels that knowledge into one focused service — getting your tourist and business visa
                            application right the first time.
                        </p>
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
};

export default AboutStory;
