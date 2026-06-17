import { MotionDiv } from "@/components/ui/MotionWrapper";
import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
    const steps = [
        {
            number: "01",
            title: "Free Consultation",
            description: "Tell us your destination, travel dates and purpose. We confirm the right visa type and give you an honest read on your case."
        },
        {
            number: "02",
            title: "Document Checklist & Collection",
            description: "You receive a clear, personalised checklist. We tell you exactly what to gather and how each document should look."
        },
        {
            number: "03",
            title: "Preparation & Review",
            description: "We prepare your cover letter, itinerary and forms, then review your complete file against the embassy's current requirements."
        },
        {
            number: "04",
            title: "Appointment & Submission",
            description: "We help you book your appointment slot and brief you on what to expect, so you walk in prepared and calm."
        }
    ];

    return (
        <section id="how-it-works" className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">How Our Visa Assistance Works</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                        A Simple, Four-Step Process
                    </h2>
                    <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                        Designed to remove the stress and guesswork from your application.
                    </p>
                </MotionDiv>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <MotionDiv
                            key={step.number}
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative"
                        >
                            <div className="p-8 bg-card rounded-2xl shadow-card border border-border relative z-10 h-full text-center">
                                <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-display font-bold text-2xl shadow-gold mb-6 mx-auto">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground mb-4">{step.title}</h3>
                                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                                {idx < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                                        <ArrowRight className="h-6 w-6 text-secondary" />
                                    </div>
                                )}
                            </div>
                        </MotionDiv>
                    ))}
                </div>

                <p className="text-center text-muted-foreground font-body mt-12 max-w-2xl mx-auto">
                    Throughout, you have a single point of contact who knows your case from start to finish.
                </p>
            </div>
        </section>
    );
};

export default HowItWorksSection;
