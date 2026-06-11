import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Target, FileText, ShieldCheck, Receipt, UserCheck } from "lucide-react";

const pillars = [
    {
        icon: FileText,
        title: "We treat every file like a story that has to add up",
        desc: "A visa officer reads your application in minutes and asks one question: does this all make sense? We make sure your purpose of travel, dates, bookings, finances and ties to India tell one clear, consistent and honest story — with no loose ends to raise doubt.",
    },
    {
        icon: ShieldCheck,
        title: "Experience plus a disciplined double-check",
        desc: "Every application is prepared against the latest, destination-specific requirements and then reviewed a second time by an experienced team member. That combination — hard-won knowledge plus a careful review — is what turns a shaky application into a strong one.",
    },
    {
        icon: Receipt,
        title: "Honesty at every step",
        desc: "We quote our fee upfront, explain exactly what's included, and never promise an approval we can't control — the final decision always rests with the embassy. What we control is the quality of your application, and there we refuse to cut corners.",
    },
    {
        icon: UserCheck,
        title: "One person who knows your case",
        desc: "You're never a file number. You get a dedicated point of contact who knows your application from start to finish and answers your questions in plain language, over WhatsApp, phone or email.",
    },
];

const AboutMissionWork = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Mission */}
                <MotionDiv
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                        <Target className="h-7 w-7 text-secondary" />
                    </div>
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Our Mission</span>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
                        Travellers Who Actually Board Their Flight
                    </h2>
                    <div className="space-y-5 text-lg font-body text-muted-foreground leading-relaxed">
                        <p>
                            To make tourist and business visa applications simple, accurate and stress-free for every
                            traveller in India — and to give each applicant the strongest, most honest application
                            possible, so they can travel with confidence.
                        </p>
                        <p>
                            We measure our success not in applications filed, but in travellers who actually board their
                            flight. That&apos;s why we&apos;d rather strengthen a weak case than rush it, and why
                            we&apos;ll always tell you the truth about your chances instead of taking your money and
                            hoping.
                        </p>
                    </div>
                </MotionDiv>

                {/* How We Work */}
                <MotionDiv
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 max-w-2xl mx-auto"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">How We Work</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                        Simple, But Rigorous
                    </h2>
                    <p className="text-muted-foreground font-body">
                        Our process is designed to catch problems long before the embassy ever sees your file.
                    </p>
                </MotionDiv>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {pillars.map((pillar, idx) => (
                        <MotionDiv
                            key={pillar.title}
                            initial={{ opacity: 1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="p-8 bg-card rounded-3xl border border-border shadow-card hover:border-secondary/30 hover:shadow-elevated transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                                <pillar.icon className="h-6 w-6 text-secondary" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground mb-3">{pillar.title}</h3>
                            <p className="text-sm font-body text-muted-foreground leading-relaxed">{pillar.desc}</p>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMissionWork;
