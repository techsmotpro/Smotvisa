"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

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
    const [prev, setPrev] = useState<number | null>(null);

    const next = useCallback(() => {
        setCurrent((c) => {
            setPrev(c);
            return (c + 1) % slides.length;
        });
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    const goTo = (i: number) => {
        setPrev(current);
        setCurrent(i);
    };

    return (
        <div className="absolute inset-0" style={{ zIndex: -1 }}>
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className="absolute inset-0"
                    style={{
                        opacity: i === current ? 1 : 0,
                        transition: "opacity 1.2s ease-in-out",
                        pointerEvents: i === current ? "auto" : "none",
                    }}
                >
                    {(i === current || i === prev) && (
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            className="object-cover object-center"
                            sizes="100vw"
                            priority={i === 0}
                            loading={i === 0 ? "eager" : "lazy"}
                        />
                    )}
                    <div className="hero-overlay" />
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-9 right-4 md:right-8 z-10 flex items-center gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
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
