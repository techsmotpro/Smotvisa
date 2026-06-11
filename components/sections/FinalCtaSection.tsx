import { MotionDiv } from "@/components/ui/MotionWrapper";
import { MessageCircle, Phone, Mail } from "lucide-react";

const FinalCtaSection = () => {
    return (
        <section
            id="get-started"
            className="py-24 relative overflow-hidden"
            style={{ backgroundColor: "hsl(217, 72%, 18%)" }}
        >
            <div className="container mx-auto px-4 relative z-10">
                <MotionDiv
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 leading-tight"
                        style={{ color: "hsl(42, 100%, 95%)" }}
                    >
                        Ready to Apply With <span className="text-gradient-gold">Confidence?</span>
                    </h2>
                    <p
                        className="text-lg font-body leading-relaxed mb-4"
                        style={{ color: "hsla(42, 100%, 95%, 0.8)" }}
                    >
                        Don&apos;t leave your trip to chance or to guesswork. Let SmotVisa prepare and review your tourist or business visa application so you can focus on the journey, not the paperwork.
                    </p>
                    <p
                        className="text-base font-body font-semibold mb-10"
                        style={{ color: "hsl(42, 85%, 65%)" }}
                    >
                        Get your free eligibility check today.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
                        <a
                            href="https://wa.me/918904008843"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-7 py-4 font-body font-bold text-sm rounded-full shadow-gold hover:opacity-90 transition-all"
                            style={{ backgroundColor: "hsl(42, 85%, 55%)", color: "hsl(220, 30%, 12%)" }}
                        >
                            <MessageCircle className="h-4 w-4" />
                            Chat on WhatsApp — 8904008843
                        </a>
                        <a
                            href="tel:+918904008843"
                            className="inline-flex items-center gap-2 px-7 py-4 font-body font-bold text-sm rounded-full border-2 transition-all hover:bg-white/10"
                            style={{ borderColor: "hsla(42, 100%, 95%, 0.5)", color: "hsl(42, 100%, 95%)" }}
                        >
                            <Phone className="h-4 w-4" />
                            Call +91 8904008843
                        </a>
                        <a
                            href="mailto:dm@smotvisa.com"
                            className="inline-flex items-center gap-2 px-7 py-4 font-body font-bold text-sm rounded-full border-2 transition-all hover:bg-white/10"
                            style={{ borderColor: "hsla(42, 100%, 95%, 0.5)", color: "hsl(42, 100%, 95%)" }}
                        >
                            <Mail className="h-4 w-4" />
                            dm@smotvisa.com
                        </a>
                    </div>

                    <p className="text-sm font-body" style={{ color: "hsla(42, 100%, 95%, 0.7)" }}>
                        Trusted visa assistance for Indian travellers. Tourist &amp; business visas only. Honest advice, careful documentation, real human support.
                    </p>
                </MotionDiv>
            </div>
        </section>
    );
};

export default FinalCtaSection;
