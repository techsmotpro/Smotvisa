import { Globe, ShieldCheck, BadgeCheck, MapPin, CalendarClock, MessageCircle, Phone } from "lucide-react";

const stats = [
    { icon: CalendarClock, value: "2019", label: "Trusted Since" },
    { icon: ShieldCheck, value: "98%", label: "Visa Success Rate" },
    { icon: BadgeCheck, value: "5,000+", label: "Visas Approved" },
    { icon: MapPin, value: "50+", label: "Countries Covered" },
];

export default function HeroContent() {
    return (
        <div className="w-full max-w-full overflow-hidden">
            <div>
                <span className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-6">
                    <Globe className="h-4 w-4" style={{ color: "hsl(42, 100%, 95%)" }} />
                    Tourist &amp; Business Visa Assistance · India
                </span>
            </div>

            <h1
                className="hero-heading text-3xl sm:text-3xl lg:text-4xl font-display font-bold leading-tight mb-6 break-words max-w-full"
                style={{ color: "hsl(42, 100%, 95%)" }}
            >
                Best{" "}
                <span className="text-gradient-gold">Visa Consultants in India</span>
            </h1>

            <p
                className="hero-text text-lg sm:text-sm font-body leading-relaxed mb-8 max-w-xl"
                style={{ color: "hsla(42, 100%, 95%, 0.8)" }}
            >
                Expert tourist and business visa assistance for Indian travellers. We prepare your
                documents, review every detail, and guide you through the appointment — so you apply
                with confidence.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5">
                <a
                    href="https://wa.me/918904008843"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn-primary inline-flex items-center gap-2 px-7 py-4 font-body font-bold text-sm rounded-full shadow-gold hover:opacity-90 transition-all"
                    style={{ backgroundColor: "hsl(39, 100%, 55%)", color: "hsl(210, 100%, 12%)" }}
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
            </div>

            <div className="grid grid-cols-4 gap-1 mt-10 max-w-md">
                {stats.map((stat, i) => (
                    <div
                        key={stat.label}
                        className={`text-center px-1.5 sm:px-2 ${i > 0 ? "border-l border-white/15" : ""}`}
                    >
                        <div className="hero-stat-value text-base sm:text-base font-display font-bold leading-none">{stat.value}</div>
                        <div className="hero-stat-label text-[9px] sm:text-[11px] font-body mt-1 leading-tight">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
