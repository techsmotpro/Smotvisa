import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Star } from "lucide-react";

const trustMarkers = [
    "Trusted Since 2019",
    "98% Visa Success Rate",
    "5,000+ Visas Approved",
    "50+ Countries Covered",
];

const numbers = [
    { value: "Since 2019", label: "Helping Indian travellers" },
    { value: "98%", label: "Visa approval rate" },
    { value: "5,000+", label: "Visas approved" },
];

const AboutIntro = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">About SmotVisa</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
                        India&apos;s Trusted <span className="text-secondary">Tourist &amp; Business Visa Specialists</span>
                    </h2>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed mb-8">
                        Since 2019 we&apos;ve helped travellers across India apply for tourist and business visas with
                        confidence — preparing every document carefully, reviewing every detail, and standing by them
                        from the first question to submission.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
                        {trustMarkers.map((marker) => (
                            <span key={marker} className="inline-flex items-center gap-2 text-sm font-body font-semibold text-foreground">
                                <Star className="h-4 w-4 text-secondary fill-secondary" />
                                {marker}
                            </span>
                        ))}
                    </div>

                    <p className="text-base font-body text-muted-foreground leading-relaxed">
                        SmotVisa was built on a simple belief: getting a visa shouldn&apos;t be confusing, stressful or
                        left to luck. Most refusals come down to avoidable mistakes, and our entire reason for existing
                        is to make sure those mistakes never appear on your application. We are a dedicated visa
                        assistance and travel documentation consultancy — not a travel agency, and not an immigration
                        firm. Tourist and business visas are all we do, and we do them well.
                    </p>
                </MotionDiv>

                {/* By the Numbers */}
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">SmotVisa by the Numbers</h3>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {numbers.map((n) => (
                            <div key={n.label} className="text-center p-8 bg-card rounded-3xl border border-border shadow-card">
                                <div className="text-3xl md:text-4xl font-display font-bold text-secondary mb-2">{n.value}</div>
                                <div className="text-sm font-body text-muted-foreground">{n.label}</div>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm font-body text-muted-foreground text-center max-w-2xl mx-auto mt-8 leading-relaxed">
                        Numbers earned the hard way — by preparing files carefully, refusing shortcuts, and being honest
                        with every applicant about what their case needs.
                    </p>
                </MotionDiv>
            </div>
        </section>
    );
};

export default AboutIntro;
