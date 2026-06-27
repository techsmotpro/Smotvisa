import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Users, Info } from "lucide-react";

const applicants = [
    "Holidaymakers and families travelling for leisure",
    "People visiting friends or relatives abroad",
    "Professionals travelling for meetings, conferences, trade fairs or training",
    "Business owners exploring partnerships or attending events",
    "First-time travellers who want the application done correctly",
    "Applicants who were refused earlier and want a stronger fresh application",
];

const WhoCanApplySection = () => {
    return (
        <section id="who-can-apply" className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 max-w-2xl mx-auto"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Who Can Apply</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mt-3 mb-4">
                        Made for Genuine Short-Term Travel
                    </h2>
                    <p className="text-muted-foreground font-body">
                        Our tourist and business visa assistance is for anyone in India planning genuine short-term travel.
                    </p>
                </MotionDiv>

                <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
                    {applicants.map((item, idx) => (
                        <MotionDiv
                            key={item}
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.06 }}
                            className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
                        >
                            <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary/10 flex items-center justify-center">
                                <Users className="h-5 w-5 text-secondary" />
                            </div>
                            <p className="text-sm font-body text-foreground font-medium leading-relaxed">{item}</p>
                        </MotionDiv>
                    ))}
                </div>

                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto flex items-start gap-4 p-6 rounded-xl border border-secondary/30 bg-secondary/10"
                >
                    <Info className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <p className="text-base font-body text-foreground leading-relaxed">
                        <strong>Please note:</strong> SmotVisa assists with tourist and business (short-stay) visas only. We do not handle immigration, permanent residency, work visas, study visas or job placement. If your travel is genuine and short-term, we can almost certainly help.
                    </p>
                </MotionDiv>
            </div>
        </section>
    );
};

export default WhoCanApplySection;



