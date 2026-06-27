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
            title: "Document Checklist",
            description: "You receive a clear, personalised checklist. We tell you exactly what to gather and how each document should look."
        },
        {
            number: "03",
            title: "Preparation & Review",
            description: "We prepare your cover letter, itinerary and forms, then review your complete file against the embassy's current requirements."
        },
        {
            number: "04",
            title: "Appointment & Submit",
            description: "We help you book your appointment slot and brief you on what to expect, so you walk in prepared and calm."
        }
    ];

    return (
        <section id="how-it-works" className="py-14 bg-muted/20">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">How It Works</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mt-3 mb-3">
                        A Simple, Four-Step Process
                    </h2>
                    <p className="text-sm text-muted-foreground font-body max-w-xl mx-auto">
                        Designed to remove the stress and guesswork from your application.
                    </p>
                </MotionDiv>

                <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-stretch gap-3">
                    {steps.map((step, idx) => (
                        <div key={step.number} className="flex items-center gap-3 lg:flex-1">
                            <MotionDiv
                                initial={{ opacity: 0, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex-1 h-full"
                            >
                                <div className="p-6 bg-white rounded-xl border border-border shadow-md text-center h-full hover:shadow-elevated hover:-translate-y-1 hover:border-secondary/40 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm mb-4 mx-auto">
                                        {step.number}
                                    </div>
                                    <h3 className="text-base font-display font-bold text-foreground mb-2">{step.title}</h3>
                                    <p className="text-base font-body text-muted-foreground leading-relaxed">{step.description}</p>
                                </div>
                            </MotionDiv>

                            {idx < steps.length - 1 && (
                                <ArrowRight className="hidden lg:block h-5 w-5 text-secondary shrink-0" />
                            )}
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-muted-foreground font-body mt-10 max-w-xl mx-auto">
                    Throughout, you have a single point of contact who knows your case from start to finish.
                </p>
            </div>
        </section>
    );
};

export default HowItWorksSection;

