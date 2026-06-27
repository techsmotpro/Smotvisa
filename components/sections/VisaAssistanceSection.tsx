import { MotionDiv } from "@/components/ui/MotionWrapper";
import { MessageCircle, Plane, Briefcase, SearchCheck, CalendarCheck, FileText, RotateCcw } from "lucide-react";

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
        <section id="visa-assistance" className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Visa Assistance We Provide</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mt-3 mb-4">
                        Full Support, By Visa Type
                    </h2>
                    <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                        Whether you&apos;re planning a holiday, visiting family, or travelling for meetings and conferences, we assist with the full range of tourist and business visa applications.
                    </p>
                </MotionDiv>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, idx) => (
                        <MotionDiv
                            key={service.title}
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.06 }}
                        >
                            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-border shadow-md h-full hover:shadow-elevated hover:-translate-y-1 hover:border-secondary/50 transition-all duration-300">
                                <div className="w-9 h-9 shrink-0 rounded-lg bg-secondary/15 flex items-center justify-center mt-0.5">
                                    <service.icon className="h-4 w-4 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-base font-display font-bold text-foreground mb-1">{service.title}</h3>
                                    <p className="text-base font-body text-muted-foreground leading-relaxed">{service.description}</p>
                                </div>
                            </div>
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


