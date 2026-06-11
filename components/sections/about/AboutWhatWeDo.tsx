import { MotionDiv } from "@/components/ui/MotionWrapper";
import { CheckCircle2, CalendarClock, ShieldCheck, BadgeCheck, MapPin, Crosshair, MessageSquareHeart, Receipt } from "lucide-react";

const whatWeDo = [
    "Assess your case for free and confirm the right visa type for your trip",
    "Build a personalised, destination-specific document checklist",
    "Prepare your visa application forms accurately and completely",
    "Write tailored cover letters and day-by-day travel itineraries",
    "Review your entire file for gaps, mismatches and red flags before submission",
    "Assist with booking your visa appointment and preparing for it",
    "Guide applicants who were refused earlier toward a stronger fresh attempt",
];

const trust = [
    { icon: CalendarClock, title: "Visa experience since 2019", desc: "Thousands of tourist and business visa applications across 50+ destinations. We've seen the patterns behind approvals and the small details behind refusals — and we apply that experience to every file." },
    { icon: ShieldCheck, title: "A 98% approval rate", desc: "Because we prepare files carefully and turn away shortcuts, the applications we assist enjoy a 98% approval rate. We protect that record by never submitting an application that isn't genuinely ready." },
    { icon: BadgeCheck, title: "5,000+ successful applications", desc: "More than 5,000 travellers — first-timers and seasoned business flyers alike — have trusted us to get their visas done right and reached their destinations as planned." },
    { icon: MapPin, title: "Trusted across India", desc: "With offices in Mumbai and Bengaluru, we assist applicants right across India — from Delhi and Chennai to Hyderabad, Pune and Ahmedabad — with the same careful, responsive support." },
];

const values = [
    { icon: Crosshair, title: "Accuracy above everything", desc: "A visa application lives or dies on detail. We sweat the small stuff so you don't have to." },
    { icon: MessageSquareHeart, title: "Honest advice, always", desc: "If your case needs work, we'll say so. If a trip needs different timing or documents, we'll tell you. No false promises, ever." },
    { icon: ShieldCheck, title: "Real human support", desc: "Visas are stressful. We make them less so with patient, plain-language help from people who actually know your case." },
    { icon: Receipt, title: "Transparent pricing", desc: "You'll always know our fee and what it covers before you commit. No surprises." },
];

const AboutWhatWeDo = () => {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* What We Do */}
                <div className="max-w-4xl mx-auto mb-20">
                    <MotionDiv
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">What We Do</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                            Complete Ownership of Your Paperwork
                        </h2>
                        <p className="text-muted-foreground font-body">
                            So you never have to guess what&apos;s required or whether you&apos;ve got it right. For every applicant, we:
                        </p>
                    </MotionDiv>

                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                        {whatWeDo.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                <span className="text-sm font-body text-foreground font-medium leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm font-body text-muted-foreground text-center leading-relaxed">
                        We assist with tourist and business visas for the Schengen countries, the UK, USA, Australia,
                        Canada, Dubai/UAE, Singapore, Japan, Thailand, Malaysia, Vietnam, Sri Lanka, Turkey and New
                        Zealand — and we keep up with requirements as they change.
                    </p>
                </div>

                {/* Why Travellers Trust */}
                <MotionDiv
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Why Travellers Trust SmotVisa</span>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-3">
                        Earned, Not Claimed
                    </h2>
                </MotionDiv>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-20">
                    {trust.map((item, idx) => (
                        <MotionDiv
                            key={item.title}
                            initial={{ opacity: 1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.06 }}
                            className="p-6 bg-card rounded-2xl border border-border shadow-card"
                        >
                            <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                                <item.icon className="h-5 w-5 text-secondary" />
                            </div>
                            <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                            <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                        </MotionDiv>
                    ))}
                </div>

                {/* What We Stand For */}
                <MotionDiv
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">What We Stand For</span>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-3">
                        The Principles Behind Every File
                    </h2>
                </MotionDiv>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                    {values.map((item, idx) => (
                        <MotionDiv
                            key={item.title}
                            initial={{ opacity: 1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.06 }}
                            className="p-6 bg-card rounded-2xl border border-border shadow-card"
                        >
                            <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                                <item.icon className="h-5 w-5 text-secondary" />
                            </div>
                            <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                            <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutWhatWeDo;
