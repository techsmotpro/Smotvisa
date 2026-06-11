import { MotionDiv } from "@/components/ui/MotionWrapper";
import { FileCheck2, ShieldCheck, FileText, CalendarCheck, MessageSquareWarning } from "lucide-react";

const points = [
    {
        icon: FileCheck2,
        text: "End-to-end document preparation for tourist and business visas",
    },
    {
        icon: ShieldCheck,
        text: "Application reviewed by an experienced team before you submit",
    },
    {
        icon: FileText,
        text: "Personalised cover letters and itineraries that meet embassy expectations",
    },
    {
        icon: CalendarCheck,
        text: "Appointment booking and slot assistance",
    },
    {
        icon: MessageSquareWarning,
        text: "Honest guidance — we tell you upfront if your case needs work",
    },
];

const WhyTravellersSection = () => {
    return (
        <section className="py-16 bg-card border-b border-border">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Why travellers choose us</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
                        Everything your application needs, handled for you
                    </h2>
                </MotionDiv>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {points.map((point, idx) => (
                        <MotionDiv
                            key={point.text}
                            initial={{ opacity: 1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex items-start gap-4 p-5 bg-background rounded-2xl border border-border hover:shadow-card transition-all"
                        >
                            <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary/10 flex items-center justify-center">
                                <point.icon className="h-5 w-5 text-secondary" />
                            </div>
                            <p className="text-sm font-body text-foreground font-medium leading-relaxed">{point.text}</p>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyTravellersSection;
