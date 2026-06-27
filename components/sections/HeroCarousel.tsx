"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { m as motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        src: "/images/thailand-tour.webp",
        alt: "Thailand tourist visa assistance for Indians",
        country: "Thailand",
        flag: "🇹🇭",
        visa: "Thailand Visa",
    },
    {
        src: "/images/us-DVU4VGkG.webp",
        alt: "USA tourist and business visa assistance",
        country: "United States",
        flag: "🇺🇸",
        visa: "US Visa",
    },
    {
        src: "/images/uk-tour.webp",
        alt: "UK visitor visa assistance for Indians",
        country: "United Kingdom",
        flag: "🇬🇧",
        visa: "UK Visa",
    },
    {
        src: "/images/dubai-DCaS6AeM.webp",
        alt: "Dubai UAE visa assistance",
        country: "Dubai / UAE",
        flag: "🇦🇪",
        visa: "UAE Visa",
    },
    {
        src: "/images/europe-tour.webp",
        alt: "Schengen visa assistance for Europe travel",
        country: "Europe",
        flag: "🇪🇺",
        visa: "Schengen Visa",
    },
    {
        src: "/images/australia-tour.webp",
        alt: "Australia tourist visa assistance",
        country: "Australia",
        flag: "🇦🇺",
        visa: "Australia Visa",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <div className="absolute inset-0" style={{ zIndex: -1 }}>
            {/* Background image crossfade */}
            <AnimatePresence mode="sync">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[current].src}
                        alt={slides[current].alt}
                        fill
                        className="object-cover object-center"
                        sizes="100vw"
                        quality={90}
                        priority
                    />
                    <div className="hero-overlay" />
                </motion.div>
            </AnimatePresence>

            {/* Dots — bottom right */}
            <div className="absolute bottom-9 right-4 md:right-8 z-10 flex items-center gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                            i === current
                                ? "w-6 h-2 bg-secondary"
                                : "w-2 h-2 bg-white/40 hover:bg-white/70"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
