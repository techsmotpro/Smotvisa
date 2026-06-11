import { MotionDiv } from "@/components/ui/MotionWrapper";
import { ShieldCheck, Target, FileText, Receipt, Headphones, Award } from "lucide-react";

const reasons = [
    {
        icon: Target,
        title: "We focus only on visas",
        description: "Not a travel agency or an immigration firm. We specialise in tourist and business visa assistance, so we know exactly what each consulate looks for."
    },
    {
        icon: ShieldCheck,
        title: "Every file gets a human review",
        description: "An experienced team member checks your documents against the latest checklist for your destination — catching gaps an applicant would never spot."
    },
    {
        icon: FileText,
        title: "Cover letters that actually help",
        description: "We draft a tailored cover letter, day-by-day itinerary and supporting explanation that give the visa officer a complete, consistent picture."
    },
    {
        icon: Receipt,
        title: "Straight answers, transparent fees",
        description: "We quote our fee upfront and explain what's included. If your case is weak, we tell you what to strengthen rather than take your money and hope."
    },
    {
        icon: Headphones,
        title: "Support in your language",
        description: "Reach us on WhatsApp, phone or email. You get a real person who knows your case from start to finish — not a ticket number."
    },
    {
        icon: Award,
        title: "Hands-on experience since 2019",
        description: "Thousands of tourist and business visa applications across 50+ destinations. We put the patterns behind approvals to work on every single file."
    }
];

const WhyChooseSection = () => {
    return (
        <section className="py-24 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-display font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Why Choose SmotVisa</span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-foreground mb-6 break-words">The Visa Is Where Most People Get Stuck</h2>
                    <p className="text-base sm:text-lg md:text-xl font-body text-muted-foreground max-w-2xl mx-auto">
                        Booking a flight is easy. The embassy doesn&apos;t see your excitement for the trip — it sees your paperwork. Our entire job is to make that paperwork tell a clear, honest and convincing story.
                    </p>
                </MotionDiv>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => (
                        <MotionDiv
                            key={idx}
                            initial={{ opacity: 1, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] bg-card border border-border hover:shadow-elevated hover:border-secondary/30 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-[1.5rem] bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors duration-500">
                                <reason.icon className="h-8 w-8 text-secondary group-hover:text-secondary-foreground" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">{reason.title}</h3>
                            <p className="text-base font-body text-muted-foreground leading-relaxed leading-relaxed">
                                {reason.description}
                            </p>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
