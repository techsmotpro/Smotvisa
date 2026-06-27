import { MotionDiv } from "@/components/ui/MotionWrapper";
import { FileCheck2, ShieldCheck, FileText, CalendarCheck, MessageSquareWarning, Users } from "lucide-react";

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
    {
        icon: Users,
        text: "Dedicated support from start to submission, available over WhatsApp",
    },
];

const WhyTravellersSection = () => {
    return (
        <section className="py-14 bg-background">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Why travellers choose us</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mt-3">
                        Everything your application needs, handled for you
                    </h2>
                </MotionDiv>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {points.map((point, idx) => (
                        <MotionDiv
                            key={point.text}
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.07 }}
                        >
                            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-border shadow-md h-full hover:shadow-elevated hover:-translate-y-1 hover:border-secondary/50 transition-all duration-300">
                                <div className="w-9 h-9 shrink-0 rounded-lg bg-secondary/15 flex items-center justify-center mt-0.5">
                                    <point.icon className="h-4 w-4 text-secondary" />
                                </div>
                                <p className="text-base font-body text-foreground leading-relaxed">{point.text}</p>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyTravellersSection;

