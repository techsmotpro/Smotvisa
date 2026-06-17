import { MotionDiv } from "@/components/ui/MotionWrapper";
import { MessageCircle, Plane, Briefcase, FolderCheck, SearchCheck, CalendarCheck, FileText, RotateCcw } from "lucide-react";

const services = [
    {
        icon: Plane,
        title: "Tourist Visa Assistance",
        description: "For holidays, family visits and leisure travel — we prepare and present your complete tourist visa file.",
    },
    {
        icon: Briefcase,
        title: "Business Visa Assistance",
        description: "Invitation letters, employer cover letters and supporting documents for meetings, conferences and trade fairs.",
    },
    {
        icon: FolderCheck,
        title: "Visa Documentation Support",
        description: "A personalised checklist for your destination, with help arranging and formatting every document correctly.",
    },
    {
        icon: SearchCheck,
        title: "Visa Application Review",
        description: "A second, experienced pair of eyes checks your file for gaps, mismatches and red flags before you submit.",
    },
    {
        icon: CalendarCheck,
        title: "Visa Appointment Assistance",
        description: "We help book your appointment slot at the relevant centre and brief you on what to carry and expect.",
    },
    {
        icon: FileText,
        title: "Visa Cover Letter Support",
        description: "Tailored cover letters and day-by-day itineraries that meet embassy expectations and match your profile.",
    },
    {
        icon: RotateCcw,
        title: "Visa Rejection Guidance",
        description: "Refused before? We review what went wrong and help you build a stronger, properly explained fresh application.",
    },
];

const VisaAssistanceSection = () => {
    return (
        <section id="visa-assistance" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Visa Assistance We Provide</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                        Full Support, By Visa Type
                    </h2>
                    <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                        Whether you&apos;re planning a holiday, visiting family, or travelling for meetings and conferences, we assist with the full range of tourist and business visa applications.
                    </p>
                </MotionDiv>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, idx) => (
                        <MotionDiv
                            key={service.title}
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.06 }}
                            className="p-6 bg-card rounded-2xl shadow-card border border-border group hover:shadow-elevated hover:border-secondary/30 transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors duration-500">
                                <service.icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground mb-2">{service.title}</h3>
                            <p className="text-sm font-body text-muted-foreground leading-relaxed">{service.description}</p>
                        </MotionDiv>
                    ))}
                </div>

                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center"
                >
                    <p className="text-muted-foreground font-body mb-5">
                        Not sure which visa fits your trip? Message us and we&apos;ll point you to the right one — free of charge.
                    </p>
                    <a
                        href="https://wa.me/918904008843"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-full shadow-gold hover:opacity-90 transition-all"
                    >
                        <MessageCircle className="h-4 w-4" />
                        Ask on WhatsApp
                    </a>
                </MotionDiv>
            </div>
        </section>
    );
};

export default VisaAssistanceSection;
