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
        description: "An experienced team member checks your documents against the latest checklist for your destination, catching gaps an applicant would never spot."
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
        description: "Reach us on WhatsApp, phone or email. You get a real person who knows your case from start to finish, not a ticket number."
    },
    {
        icon: Award,
        title: "Hands-on experience since 2019",
        description: "Thousands of tourist and business visa applications across 50+ destinations. We put the patterns behind approvals to work on every single file."
    }
];

const WhyChooseSection = () => {
    return (
        <section className="py-14 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-xs font-display font-bold text-secondary uppercase tracking-[0.2em] mb-3 block">Why Choose SmotVisa</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mb-4">The Visa Is Where Most People Get Stuck</h2>
                    <p className="text-sm sm:text-base font-body text-muted-foreground max-w-2xl mx-auto">
                        Booking a flight is easy. The embassy doesn&apos;t see your excitement for the trip, it sees your paperwork. Our entire job is to make that paperwork tell a clear, honest and convincing story.
                    </p>
                </MotionDiv>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-6">
                    {reasons.map((reason, idx) => (
                        <MotionDiv
                            key={idx}
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="relative pt-7"
                        >
                            {/* floating circle icon -- overflows card top */}
                            <div className="absolute -top-1 left-6 w-14 h-14 rounded-full bg-primary border-4 border-background shadow-md flex items-center justify-center z-10">
                                <reason.icon className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <div className="p-5 pt-10 pb-6 bg-white rounded-xl border border-border shadow-md h-full hover:shadow-elevated hover:-translate-y-1 hover:border-secondary/50 transition-all duration-300">
                                {/* gold accent bar */}
                                <div className="absolute top-7 left-0 right-0 h-0.5 bg-secondary/20 rounded-t-xl" />
                                <h3 className="text-base font-display font-bold text-foreground mb-2">{reason.title}</h3>
                                <p className="text-base font-body text-muted-foreground leading-relaxed">{reason.description}</p>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;


