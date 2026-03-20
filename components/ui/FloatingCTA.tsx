"use client";

import { MessageCircle, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "919036329410";
const PHONE_NUMBER = "+919036329410";

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

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

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi SMOT VISA! I'm interested in your visa services. Can you help me?")}`, "_blank");
    };

    const handleCall = () => {
        window.location.href = `tel:${PHONE_NUMBER}`;
    };

    return (
        <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-3 pointer-events-none">
            <AnimatePresence>
                {isVisible && (
                    <div className="flex flex-col items-start gap-3 pointer-events-auto">
                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3">
                            <motion.button
                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                                onClick={handleWhatsApp}
                                className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-elevated flex items-center justify-center hover:scale-110 transition-transform group relative"
                            >
                                <MessageCircle className="h-7 w-7" />
                                <span className="absolute left-full ml-4 px-3 py-1.5 bg-white text-foreground text-xs font-bold rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                                    WhatsApp Us
                                </span>
                            </motion.button>

                            <motion.button
                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                                transition={{ delay: 0.1 }}
                                onClick={handleCall}
                                className="w-14 h-14 bg-secondary text-secondary-foreground rounded-full shadow-gold flex items-center justify-center hover:scale-110 transition-transform group relative"
                            >
                                <Phone className="h-6 w-6" />
                                <span className="absolute left-full ml-4 px-3 py-1.5 bg-white text-foreground text-xs font-bold rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                                    Call Expert
                                </span>
                            </motion.button>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
