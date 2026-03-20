"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const highlights = [
    "10+ Years of Experience in Visa Processing",
    "Trusted by 5000+ Happy Travelers",
    "99% Visa Approval Success Rate",
    "Dedicated Support Team Available 24/7",
    "Specialization in US, Schengen, Australia, UK, Dubai Visa & OCI",
    "Transparent Pricing with No Hidden Fees",
];

const AboutSection = ({ isFull = false }: { isFull?: boolean }) => {
    return (
        <section id="about" className={cn("py-20", isFull ? "bg-background" : "bg-card")}>
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-elevated relative h-[500px] md:h-[600px]">
                            <Image
                                src="/images/travelers-9_2z2QtE.jpg"
                                alt="Happy travelers"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 bg-secondary text-secondary-foreground p-10 rounded-3xl shadow-gold font-body border-4 border-card">
                            <div className="text-5xl font-display font-bold mb-1">10+</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-secondary-foreground/80">Years of Excellence</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">About SMOT VISA</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
                            India’s Trusted <span className="text-secondary">Visa Experts</span>
                        </h2>

                        <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed mb-8">
                            <p>
                                At SMOT VISA, we simplify your international travel dreams with expert visa assistance trusted across India.
                                Whether you’re traveling for business, tourism, or family visits, our mission is to make your visa experience
                                smooth, fast, and stress-free.
                            </p>

                            {isFull && (
                                <>
                                    <p>
                                        With a pan-India presence and a decade of proven expertise, we’ve helped thousands of travelers successfully
                                        secure visas for destinations around the world. Our specialization includes US B1/B2 Visa, Schengen Visa,
                                        Australia Visa, UK Visa, Dubai Visa, and OCI (Overseas Citizen of India) services.
                                    </p>
                                    <p>
                                        Led by <strong>Mr. Shaji Kandambeth</strong>, a seasoned professional with over 2 decades of experience,
                                        our dedicated team of 10 visa experts brings deep knowledge and personalized care to every application.
                                        From understanding your travel purpose to handling documentation and interview preparation, we guide you at every step.
                                    </p>
                                    <p>
                                        At SMOT VISA, we believe in a <strong>"human-first"</strong> approach. We listen, understand, and deliver solutions that fit
                                        your specific travel needs, not just templates. Our clients appreciate our transparency, quick turnaround time,
                                        and the peace of mind that comes with expert guidance.
                                    </p>
                                </>
                            )}

                            {!isFull && (
                                <p>
                                    Led by seasoned professional Mr. Shaji Kandambeth with over 2 decades of experience, we guide you
                                    through documentation, interview prep, and submission with absolute precision.
                                </p>
                            )}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                            {highlights.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                                    <span className="text-sm font-body text-foreground font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {!isFull ? (
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-full hover:opacity-90 transition-all shadow-card"
                                >
                                    Learn More About Us <ArrowRight className="h-4 w-4" />
                                </Link>
                            ) : (
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-full hover:opacity-90 transition-all shadow-card"
                                >
                                    Connect With Us <ArrowRight className="h-4 w-4" />
                                </Link>
                            )}
                        </div>
                    </motion.div>
                </div>

                {isFull && (
                    /* Vision/Mission Section */
                    <div className="mt-32 grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Our Mission",
                                desc: "To provide hassle-free and transparent travel solutions to every client, ensuring their travel dreams translate into reality with zero stress."
                            },
                            {
                                title: "Our Vision",
                                desc: "To be the most trusted name in international travel and visa consultancy globally, recognized for our integrity and success rate."
                            },
                            {
                                title: "Our Values",
                                desc: "Integrity, transparency, and a customer-first approach. we believe in building relationships through successful travel stories."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-card rounded-3xl border border-border hover:border-secondary/30 hover:shadow-elevated transition-all duration-300 group"
                            >
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{item.title}</h3>
                                <p className="text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AboutSection;
