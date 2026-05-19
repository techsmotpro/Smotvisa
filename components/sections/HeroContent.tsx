import { MotionDiv, MotionH1, MotionP } from "@/components/ui/MotionWrapper";
import { Globe, Shield, Clock } from "lucide-react";

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
        <div className="w-full max-w-full overflow-hidden">
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
                className="hero-heading text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 break-words max-w-full"
                style={{ color: "hsl(42, 100%, 95%)" }}
            >
                Visa &amp;{" "}
                <span className="text-gradient-gold">Travel Consultant</span>
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
                <a
                    href="tel:+919380957448"
                    className="hero-btn-primary inline-flex items-center gap-2 px-8 py-4 font-body font-bold text-sm rounded-full shadow-gold hover:opacity-90 transition-all"
                    style={{ backgroundColor: "hsl(42, 85%, 55%)", color: "hsl(220, 30%, 12%)" }}
                >
                    CALL NOW : +91-9380957448
                </a>
            </MotionDiv>

            <MotionDiv
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-wrap gap-4 sm:gap-8"
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