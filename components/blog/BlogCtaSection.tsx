import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionDiv } from "@/components/ui/MotionWrapper";
import type { BlogCta } from "@/data/blogCtaMapping";

export default function BlogCtaSection({ cta }: { cta: BlogCta }) {
    return (
        <section className="mt-16">
            <MotionDiv
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary via-primary-light to-secondary rounded-[3.5rem] p-6 md:p-6 shadow-elevated relative overflow-hidden text-center border border-white/10"
            >
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                    <p className="text-xl md:text-2xl text-primary-foreground/80 font-body leading-relaxed">
                        {cta.primaryCta.ctaDescription}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                        <Link
                            href={cta.primaryCta.ctaUrl}
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-display font-bold text-lg rounded-2xl hover:translate-y-[-2px] transition-all shadow-gold group"
                        >
                            {cta.primaryCta.ctaText} <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        {cta.secondaryCta && (
                            <Link
                                href={cta.secondaryCta.ctaUrl}
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-white/20 text-white font-display font-bold text-lg rounded-2xl hover:bg-white/10 transition-all group"
                            >
                                {cta.secondaryCta.ctaText}
                            </Link>
                        )}
                    </div>
                </div>
            </MotionDiv>
        </section>
    );
}