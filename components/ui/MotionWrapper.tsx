"use client";

import { motion } from "framer-motion";

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const AnimatePresence = (props: any) => import("framer-motion").then(m => <m.AnimatePresence {...props} />);
// Note: Direct export of AnimatePresence is tricky because it's a wrapper, 
// usually it's better to just import it in the client component that needs it.
// For simple motion.div, MotionDiv is perfect.
