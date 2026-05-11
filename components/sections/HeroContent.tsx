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
                <span className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-6">
                    <Globe className="h-4 w-4" style={{ color: "hsl(42, 100%, 95%)" }} />
                    Trusted by 5000+ Travelers Worldwide
                </span>
            </MotionDiv>

            <MotionH1
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
                style={{ color: "hsl(42, 100%, 95%)" }}
            >
                Your Journey{" "}
                <span className="text-gradient-gold">Starts Here</span>
            </MotionH1>

            <MotionP
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hero-text text-lg sm:text-xl font-body leading-relaxed mb-8 max-w-xl"
                style={{ color: "hsla(42, 100%, 95%, 0.8)" }}
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
                    className="hero-btn-primary inline-flex items-center gap-2 px-8 py-4 font-body font-bold text-sm rounded-full shadow-gold hover:opacity-90 transition-all"
                    style={{ backgroundColor: "hsl(42, 85%, 55%)", color: "hsl(220, 30%, 12%)" }}
                >
                    Explore Our Services <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                    href="/contact?branch=cv-raman-nagar-bangalore"
                    className="hero-btn-secondary inline-flex items-center gap-2 px-8 py-4 font-body font-semibold text-sm rounded-full transition-all"
                    style={{ border: "2px solid hsla(42, 100%, 95%, 0.3)", color: "hsl(42, 100%, 95%)" }}
                >
                    Contact Us
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
                        <div className="hero-stat-icon-bg p-2 rounded-lg">
                            <stat.icon className="hero-stat-icon h-5 w-5" />
                        </div>
                        <div>
                            <div className="hero-stat-value text-2xl font-display font-bold">{stat.value}</div>
                            <div className="hero-stat-label text-xs font-body">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </MotionDiv>
        </div>
    );
}