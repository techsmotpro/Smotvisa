"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Headphones, DollarSign, Award, Users } from "lucide-react";

const reasons = [
    {
        icon: Award,
        title: "10+ Years Experience",
        description: "Expertise in complex visa cases and multi-country travel planning."
    },
    {
        icon: Users,
        title: "5000+ Happy Travelers",
        description: "A growing community of satisfied customers who trust our services."
    },
    {
        icon: ShieldCheck,
        title: "99% Success Rate",
        description: "Our meticulous documentation process ensures the highest approval odds."
    },
    {
        icon: Headphones,
        title: "24/7 Dedicated Support",
        description: "We're here for you whenever you need us, across all time zones."
    },
    {
        icon: Zap,
        title: "Express Processing",
        description: "Fast-track options for urgent travel needs and time-sensitive visas."
    },
    {
        icon: DollarSign,
        title: "Transparent Pricing",
        description: "No hidden fees or surprise costs. Clear, upfront pricing every time."
    }
];

const WhyChooseSection = () => {
    return (
        <section className="py-24 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-display font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Our Advantage</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">Why Choose SMOT VISA?</h2>
                    <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
                        Experience the gold standard in visa consulting and international travel management.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-card border border-border hover:shadow-elevated hover:border-secondary/30 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-[1.5rem] bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors duration-500">
                                <reason.icon className="h-8 w-8 text-secondary group-hover:text-secondary-foreground" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">{reason.title}</h3>
                            <p className="text-base font-body text-muted-foreground leading-relaxed leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
