import { MotionDiv } from "@/components/ui/MotionWrapper";
import { AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

const reasons = [
    "Weak or unclear proof of funds, or sudden large deposits that look arranged",
    "A generic or missing cover letter that doesn't explain the trip",
    "Travel dates, bookings and itinerary that don't match each other",
    "Little evidence of strong ties to India that show you'll return",
    "Incomplete forms, wrong photo specifications or expired documents",
    "Missing or insufficient travel insurance",
    "Inconsistencies between the application and supporting documents",
    "Applying too close to the travel date, leaving no margin for delays",
];

const RejectionReasonsSection = () => {
    return (
        <section id="rejection-reasons" className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 max-w-2xl mx-auto"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Avoid The Pitfalls</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                        Common Reasons Visas Get Rejected
                    </h2>
                    <p className="text-muted-foreground font-body">
                        Understanding why applications fail is the best way to avoid it. These are the issues we see most often — and exactly what our review process is built to catch.
                    </p>
                </MotionDiv>

                <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto mb-10">
                    {reasons.map((reason, idx) => (
                        <MotionDiv
                            key={reason}
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border"
                        >
                            <AlertTriangle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                            <p className="text-sm font-body text-foreground leading-relaxed">{reason}</p>
                        </MotionDiv>
                    ))}
                </div>

                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto rounded-3xl border border-secondary/30 bg-secondary/10 p-6 sm:p-8 text-center"
                >
                    <p className="text-base font-body text-foreground leading-relaxed mb-5">
                        If you&apos;ve already been refused, don&apos;t panic and don&apos;t reapply blindly. Our visa rejection guidance reviews what went wrong and helps you build a stronger, properly explained fresh application.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-full shadow-gold hover:opacity-90 transition-all"
                    >
                        Get Rejection Guidance <ArrowRight className="h-4 w-4" />
                    </Link>
                </MotionDiv>
            </div>
        </section>
    );
};

export default RejectionReasonsSection;
