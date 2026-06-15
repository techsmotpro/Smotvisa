import { MotionDiv, MotionH1, MotionP } from "@/components/ui/MotionWrapper";
import { Globe, ShieldCheck, BadgeCheck, MapPin, CalendarClock, MessageCircle, Phone } from "lucide-react";

interface Stat {
    icon: any;
    value: string;
    label: string;
}

const stats: Stat[] = [
    { icon: CalendarClock, value: "2019", label: "Trusted Since" },
    { icon: ShieldCheck, value: "98%", label: "Visa Success Rate" },
    { icon: BadgeCheck, value: "5,000+", label: "Visas Approved" },
    { icon: MapPin, value: "50+", label: "Countries Covered" },
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
                    Tourist &amp; Business Visa Assistance · India
                </span>
            </MotionDiv>

            <MotionH1
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="hero-heading text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 break-words max-w-full"
                style={{ color: "hsl(42, 100%, 95%)" }}
            >
                Trusted{" "}
                <span className="text-gradient-gold">Visa Consultant in India</span>
            </MotionH1>

            <MotionP
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hero-text text-lg sm:text-xl font-body leading-relaxed mb-8 max-w-xl"
                style={{ color: "hsla(42, 100%, 95%, 0.8)" }}
            >
                Expert tourist and business visa assistance for Indian travellers. We prepare your
                documents, review every detail, and guide you through the appointment — so you apply
                with confidence.
            </MotionP>

            <MotionDiv
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5"
            >
                <a
                    href="https://wa.me/918904008843"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn-primary inline-flex items-center gap-2 px-7 py-4 font-body font-bold text-sm rounded-full shadow-gold hover:opacity-90 transition-all"
                    style={{ backgroundColor: "hsl(42, 85%, 55%)", color: "hsl(220, 30%, 12%)" }}
                >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp 8904008843
                </a>
                <a
                    href="tel:+918904008843"
                    className="inline-flex items-center gap-2 px-7 py-4 font-body font-bold text-sm rounded-full border-2 transition-all hover:bg-white/10"
                    style={{ borderColor: "hsla(42, 100%, 95%, 0.5)", color: "hsl(42, 100%, 95%)" }}
                >
                    <Phone className="h-4 w-4" />
                    Call +91 8904008843
                </a>
            </MotionDiv>

            <MotionDiv
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="grid grid-cols-4 gap-1 mt-10 max-w-md"
            >
                {stats.map((stat, i) => (
                    <div
                        key={stat.label}
                        className={`text-center px-1.5 sm:px-2 ${i > 0 ? "border-l border-white/15" : ""}`}
                    >
                        <div className="hero-stat-value text-base sm:text-xl font-display font-bold leading-none">{stat.value}</div>
                        <div className="hero-stat-label text-[9px] sm:text-[11px] font-body mt-1 leading-tight">{stat.label}</div>
                    </div>
                ))}
            </MotionDiv>
        </div>
    );
}
