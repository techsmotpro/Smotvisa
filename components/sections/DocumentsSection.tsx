import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Check, Plane, Briefcase } from "lucide-react";

const touristDocs = [
    "Valid passport with at least six months' validity and blank pages",
    "Completed and signed visa application form",
    "Recent passport-size photographs meeting the embassy's specifications",
    "Confirmed flight reservation and hotel bookings",
    "Day-by-day travel itinerary",
    "Bank statements for the last three to six months",
    "Income proof — salary slips, ITR or business documents",
    "Travel insurance for the trip duration",
    "Cover letter explaining the purpose of travel",
];

const businessDocs = [
    "Invitation letter from the company or partner abroad",
    "Covering letter from your employer or your own business",
    "Company registration and GST documents (for business owners)",
    "Proof of professional relationship or meeting purpose",
];

const DocumentsSection = () => {
    return (
        <section id="documents" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 max-w-2xl mx-auto"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">What You&apos;ll Need</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                        Documents You&apos;ll Typically Need
                    </h2>
                    <p className="text-muted-foreground font-body">
                        Requirements vary by country and visa type, but most applications are built on the same core documents. We tailor the exact list to your destination during your consultation.
                    </p>
                </MotionDiv>

                <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <MotionDiv
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-card rounded-3xl border border-border shadow-card"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                                <Plane className="h-5 w-5 text-secondary" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground">Common tourist visa documents</h3>
                        </div>
                        <ul className="space-y-3">
                            {touristDocs.map((doc) => (
                                <li key={doc} className="flex items-start gap-3 text-sm font-body text-muted-foreground">
                                    <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                                    {doc}
                                </li>
                            ))}
                        </ul>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 bg-card rounded-3xl border border-border shadow-card h-fit"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                                <Briefcase className="h-5 w-5 text-secondary" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground">Additional business visa documents</h3>
                        </div>
                        <ul className="space-y-3 mb-6">
                            {businessDocs.map((doc) => (
                                <li key={doc} className="flex items-start gap-3 text-sm font-body text-muted-foreground">
                                    <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                                    {doc}
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm font-body text-foreground bg-secondary/10 rounded-2xl p-4 leading-relaxed">
                            We don&apos;t just list these — we help you arrange, format and present them the way visa officers expect to see them.
                        </p>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
};

export default DocumentsSection;
