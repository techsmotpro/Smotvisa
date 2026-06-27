import { MotionDiv } from "@/components/ui/MotionWrapper";

const AboutStory = () => (
    <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
            <MotionDiv initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid md:grid-cols-[240px_1fr] gap-6 mb-8">
                <div>
                    <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Our Story</span>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-3 leading-tight">Built to Fix the Mistakes That Cost People Their Trip</h2>
                </div>
                <div className="space-y-3 text-base font-body text-muted-foreground leading-relaxed">
                    <p>SmotVisa started with a frustration that thousands of Indian travellers know too well. People with genuine reasons to travel were being refused visas not because they didn&apos;t deserve them, but because their paperwork didn&apos;t tell the right story. A weak cover letter here, a missing document there, dates that didn&apos;t quite match: small errors with big, expensive consequences.</p>
                    <p>We set out to fix that. Since 2019 we&apos;ve grown into a specialist consultancy focused entirely on tourist and business visas. The result is a 98% approval rate and more than 5,000 travellers who reached their destination with our help.</p>
                    <p>We&apos;ve stayed deliberately focused. We don&apos;t chase immigration, permanent residency or work-visa business. That focus is our strength, it&apos;s why our advice is sharp and our documents are precise.</p>
                </div>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="pt-10 border-t border-border grid md:grid-cols-[240px_1fr] gap-6">
                <div>
                    <span className="text-xs font-body font-semibold text-secondary uppercase tracking-widest">Meet the Founder</span>
                    <h3 className="text-lg font-display font-bold text-foreground mt-3">Mr. Shaji Kandambeth</h3>
                    <p className="text-xs font-body text-secondary font-semibold mt-1">CEO · Two Decades of Visa Expertise</p>
                </div>
                <div className="space-y-3 text-base font-body text-muted-foreground leading-relaxed">
                    <p>SmotVisa is led by <strong className="text-foreground">Mr. Shaji Kandambeth</strong>, who brings over two decades of hands-on experience across the visa and travel documentation domain, visas, OCI, FRRO and the wider world of travel paperwork.</p>
                    <p>Over twenty years, Mr. Kandambeth has seen first-hand what consulates look for, where applications quietly fall apart, and how to present a case so an officer can say yes with confidence.</p>
                </div>
            </MotionDiv>
        </div>
    </section>
);

export default AboutStory;



