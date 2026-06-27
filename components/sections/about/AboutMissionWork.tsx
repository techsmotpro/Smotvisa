import { MotionDiv } from "@/components/ui/MotionWrapper";
import { FileText, ShieldCheck, Receipt, UserCheck } from "lucide-react";

const pillars = [
    { icon: FileText,    title: "Every file tells one clear story",          desc: "Your dates, bookings, finances and ties to India must all align. We make sure they do, with no loose ends to raise doubt." },
    { icon: ShieldCheck, title: "Experience plus a disciplined double-check", desc: "Prepared against the latest requirements, then reviewed a second time. Hard-won knowledge plus a careful review." },
    { icon: Receipt,     title: "Honesty at every step",                      desc: "Fee quoted upfront, no hidden extras, no promises we can't keep. The embassy decides, we control the quality." },
    { icon: UserCheck,   title: "One person who knows your case",             desc: "A dedicated contact from start to finish. Real answers in plain language over WhatsApp, phone or email." },
];

const AboutMissionWork = () => (
    <section className="py-10 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">

            <MotionDiv initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid md:grid-cols-[240px_1fr] gap-6 mb-8">
                <div>
                    <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Our Mission</span>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-3 leading-tight">Travellers Who Actually Board Their Flight</h2>
                </div>
                <div className="space-y-3 text-base font-body text-muted-foreground leading-relaxed">
                    <p>To make tourist and business visa applications simple, accurate and stress-free for every traveller in India, and to give each applicant the strongest, most honest application possible.</p>
                    <p>We measure our success not in applications filed, but in travellers who actually board their flight. That&apos;s why we&apos;d rather strengthen a weak case than rush it.</p>
                </div>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="pt-10 border-t border-border text-center">
                <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">How We Work</span>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2 mb-8">Simple, But Rigorous</h2>
                <div className="grid sm:grid-cols-2 gap-x-14 gap-y-8">
                    {pillars.map((p, idx) => (
                        <MotionDiv key={p.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }} className="flex gap-4">
                            <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                                <p.icon className="h-4 w-4 text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-sm font-display font-bold text-foreground mb-1">{p.title}</h3>
                                <p className="text-sm font-body text-muted-foreground leading-relaxed">{p.desc}</p>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </MotionDiv>
        </div>
    </section>
);

export default AboutMissionWork;



