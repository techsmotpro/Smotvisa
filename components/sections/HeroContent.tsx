import { MotionDiv, MotionH1, MotionP } from "@/components/ui/MotionWrapper";
import { ArrowRight, Globe, Shield, Clock } from "lucide-react";
import Link from "next/link";

interface Stat {
    icon: any;
    value: string;
    label: string;
}

const stats: Stat[] = [
    { icon: Shield, value: "99%", label: "Success Rate" },
    { icon: Clock, value: "24h", label: "Fast Processing" },
    { icon: Globe, value: "50+", label: "Countries" },
];

export default function HeroContent() {
    return (
        <div>
            <MotionDiv
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 border border-secondary/30 rounded-full text-sm font-body font-medium text-primary-foreground mb-6">
                    <Globe className="h-4 w-4" />
                    Trusted by 5000+ Travelers Worldwide
                </span>
            </MotionDiv>

            <MotionH1
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
            >
                Your Journey{" "}
                <span className="text-gradient-gold">Starts Here</span>
            </MotionH1>

            <MotionP
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg sm:text-xl text-primary-foreground/80 font-body leading-relaxed mb-8 max-w-xl"
            >
                Planning to travel abroad for leisure or business? SmotVisa makes visa applications simple, fast, and stress-free.
                We assist Indian travelers in obtaining Tourist and Business Visas for over 50+ countries with a 99% success rate.
            </MotionP>

            <MotionDiv
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-12"
            >
                <Link
                    href="#services"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-full shadow-gold hover:opacity-90 transition-all"
                >
                    Explore Our Services <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                    href="/contact?branch=cv-raman-nagar-bangalore"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm rounded-full hover:bg-primary-foreground/10 transition-all"
                >
                    Contact Us
                </Link>
            </MotionDiv>

            <MotionDiv
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mb-8"
            >
                <Link
                    href="/visa-agents-in-bangalore"
                    className="text-primary-foreground font-body text-sm underline hover:text-secondary transition-colors"
                >
                    Visa Agents in Bangalore
                </Link>
            </MotionDiv>

            <MotionDiv
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex gap-8"
            >
                {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                        <div className="p-2 bg-secondary/20 rounded-lg">
                            <stat.icon className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                            <div className="text-2xl font-display font-bold text-primary-foreground">{stat.value}</div>
                            <div className="text-xs font-body text-primary-foreground/60">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </MotionDiv>
        </div>
    );
}
