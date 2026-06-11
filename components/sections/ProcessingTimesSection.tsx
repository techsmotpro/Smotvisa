import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Clock } from "lucide-react";

const rows = [
    { destination: "Schengen (Europe)", time: "15–30 working days" },
    { destination: "United Kingdom", time: "3–6 weeks" },
    { destination: "USA (B1/B2)", time: "Appointment-dependent; plan well ahead" },
    { destination: "Dubai / UAE", time: "3–5 working days" },
    { destination: "Singapore", time: "3–7 working days" },
    { destination: "Thailand / Malaysia", time: "3–10 working days" },
    { destination: "Japan", time: "5–10 working days" },
    { destination: "Australia / Canada", time: "2–6 weeks" },
];

const ProcessingTimesSection = () => {
    return (
        <section id="processing-times" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 max-w-2xl mx-auto"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Timelines</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                        How Long Does a Visa Take?
                    </h2>
                    <p className="text-muted-foreground font-body">
                        Processing times are set by each embassy or consulate, not by us — but knowing the typical range helps you plan. These are general guidelines for tourist and business visas; always allow extra buffer time before your travel date.
                    </p>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto overflow-hidden rounded-3xl border border-border shadow-card bg-card"
                >
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-primary text-primary-foreground">
                                <th className="px-5 py-4 font-display font-bold text-sm sm:text-base">Destination</th>
                                <th className="px-5 py-4 font-display font-bold text-sm sm:text-base">Typical Processing Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <tr key={row.destination} className={idx % 2 === 0 ? "bg-card" : "bg-muted/40"}>
                                    <td className="px-5 py-4 font-body font-semibold text-foreground text-sm sm:text-base">{row.destination}</td>
                                    <td className="px-5 py-4 font-body text-muted-foreground text-sm sm:text-base">{row.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </MotionDiv>

                <p className="flex items-center justify-center gap-2 text-sm font-body text-muted-foreground mt-8 max-w-2xl mx-auto text-center">
                    <Clock className="h-4 w-4 text-secondary shrink-0" />
                    Timelines can change during peak travel seasons. We always recommend starting your application early so you&apos;re never rushing against a deadline.
                </p>
            </div>
        </section>
    );
};

export default ProcessingTimesSection;
