"use client";

import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { m as motion, AnimatePresence } from "framer-motion";

const PHONE_NUMBER = "+918904008843";

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const handleCall = () => {
        window.location.href = `tel:${PHONE_NUMBER}`;
    };

    return (
        <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-3 pointer-events-none">
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onClick={handleCall}
                        aria-label="Call SmotVisa"
                        className="w-14 h-14 bg-secondary text-secondary-foreground rounded-full shadow-gold flex items-center justify-center hover:scale-110 transition-transform group relative pointer-events-auto"
                    >
                        <Phone className="h-6 w-6" />
                        <span className="absolute left-full ml-4 px-3 py-1.5 bg-white text-foreground text-xs font-bold rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                            Call Expert
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}