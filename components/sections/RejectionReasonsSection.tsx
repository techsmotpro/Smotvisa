import { MotionDiv } from "@/components/ui/MotionWrapper";
import { AlertTriangle, ArrowRight, XCircle } from "lucide-react";
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
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mt-3 mb-4">
                        Common Reasons Visas Get Rejected
                    </h2>
                    <p className="text-muted-foreground font-body">
                        Understanding why applications fail is the best way to avoid it. These are the issues we see most often — and exactly what our review process is built to catch.
                    </p>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-10 rounded-xl border border-border overflow-hidden shadow-md"
                >
                    {/* Table header */}
                    <div className="grid grid-cols-[2.5rem_1fr] bg-primary px-5 py-3">
                        <span className="text-xs font-body font-bold text-primary-foreground/60 uppercase tracking-widest">#</span>
                        <span className="text-xs font-body font-bold text-primary-foreground/60 uppercase tracking-widest">Common Rejection Reason</span>
                    </div>

                    {/* Table rows */}
                    {reasons.map((reason, idx) => (
                        <div
                            key={reason}
                            className={`grid grid-cols-[2.5rem_1fr] items-start px-5 py-3.5 border-b border-border last:border-0 ${idx % 2 === 0 ? "bg-white" : "bg-muted/30"}`}
                        >
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-50 border border-red-200 mt-0.5">
                                <XCircle className="h-3.5 w-3.5 text-red-500" />
                            </div>
                            <p className="text-base font-body text-foreground leading-relaxed">{reason}</p>
                        </div>
                    ))}
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto rounded-xl border border-secondary/30 bg-secondary/10 p-6 sm:p-6 text-center"
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



