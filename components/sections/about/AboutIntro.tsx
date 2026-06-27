import { MotionDiv } from "@/components/ui/MotionWrapper";
const numbers = [
    { value: "Since 2019", label: "Helping Indian travellers" },
    { value: "98%", label: "Visa approval rate" },
    { value: "5,000+", label: "Visas approved" },
];

const AboutIntro = () => (
    <>
        <section className="py-10 bg-background">
            <div className="text-center">
                <MotionDiv initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">About SmotVisa</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mt-3 mb-5 leading-tight">
                        India&apos;s Trusted <span className="text-secondary">Tourist &amp; Business Visa Specialists</span>
                    </h2>
                    <p className="text-base font-body text-muted-foreground leading-relaxed mb-5 max-w-2xl mx-auto">
                        Since 2019 we&apos;ve helped travellers across India apply for tourist and business visas with confidence, preparing every document carefully, reviewing every detail, and standing by them from the first question to submission.
                    </p>
                </MotionDiv>
            </div>
        </section>

        <section className="py-10 bg-primary">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
                    {numbers.map((n) => (
                        <div key={n.label} className="px-6">
                            <div className="text-2xl md:text-3xl font-display font-bold text-secondary">{n.value}</div>
                            <div className="text-xs font-body text-primary-foreground/60 mt-1 uppercase tracking-wide">{n.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default AboutIntro;



