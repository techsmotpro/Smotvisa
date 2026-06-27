import { MotionDiv } from "@/components/ui/MotionWrapper";
import { MessageCircle, Phone, Mail } from "lucide-react";

const AboutCta = () => {
    return (
        <section
            className="py-10 relative overflow-hidden"
            style={{ backgroundColor: "hsl(217, 72%, 18%)" }}
        >
            <div className="container mx-auto px-4 relative z-10">
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2
                        className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-6 leading-tight"
                        style={{ color: "hsl(42, 100%, 95%)" }}
                    >
                        Ready to Travel With <span className="text-gradient-gold">Confidence?</span>
                    </h2>
                    <p
                        className="text-sm font-body leading-relaxed mb-4"
                        style={{ color: "hsla(42, 100%, 95%, 0.8)" }}
                    >
                        Join the 5,000+ travellers who trusted SmotVisa to get their visa done right. Tell us where
                        you&apos;re headed and we&apos;ll handle the paperwork.
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
                    </div>

                    <p className="text-sm font-body" style={{ color: "hsla(42, 100%, 95%, 0.7)" }}>
                        SmotVisa — trusted tourist &amp; business visa assistance for Indian travellers. Trusted since
                        2019. 98% success rate. 5,000+ visas approved. 50+ countries.
                    </p>
                </MotionDiv>
            </div>
        </section>
    );
};

export default AboutCta;



