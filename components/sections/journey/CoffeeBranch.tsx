"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useJourneyStore } from "./journeyStore";
import { steps } from "./data";

export default function CoffeeBranch() {
    const active = useJourneyStore((state) => state.active);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const journeyEl = document.getElementById("journey");
        if (!journeyEl) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.05 }
        );

        observer.observe(journeyEl);
        return () => observer.disconnect();
    }, []);

    const currentStep = steps[active] || steps[0];
    const total = steps.length;
    const progressPercent = ((active + 1) / total) * 100;

    return (
        <AnimatePresence>
            {inView && (
                <motion.aside
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                    className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 select-none md:flex flex-col items-end gap-3 pointer-events-none"
                >
                    {/* Editorial counter 01 / 09 */}
                    <div className="flex items-baseline gap-1.5 rounded-full border border-white/10 bg-black/50 px-3.5 py-1.5 backdrop-blur-xl">
                        <span className="text-xs font-semibold tracking-widest text-[#D7C18A]">
                            0{active + 1}
                        </span>
                        <span className="text-[10px] text-white/40">/</span>
                        <span className="text-[10px] tracking-widest text-white/50">
                            0{total}
                        </span>
                    </div>

                    {/* Step Title Pill */}
                    <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                            {currentStep.title}
                        </p>
                    </div>

                    {/* Minimalist vertical progress line */}
                    <div className="relative h-28 w-[2px] rounded-full bg-white/15 overflow-hidden">
                        <motion.div
                            className="absolute left-0 top-0 w-full bg-[#D7C18A]"
                            animate={{ height: `${progressPercent}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                    </div>
                </motion.aside>
            )}
        </AnimatePresence>
    );
}