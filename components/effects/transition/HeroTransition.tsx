"use client";

import { motion } from "framer-motion";

export default function HeroTransition() {
    return (
        <div className="absolute inset-x-0 bottom-0 h-[45vh] overflow-hidden pointer-events-none">
            <motion.div
                animate={{
                    y: [0, -35, 0],
                    opacity: [0.3, 0.55, 0.3]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to top, #0e130c 0%, rgba(14,19,12,.88) 25%, rgba(14,19,12,.35) 60%, transparent 100%)"
                }}
            />

            <motion.div
                animate={{
                    x: [-120, 120, -120]
                }}
                transition={{
                    duration: 42,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-180px] left-[-220px] h-[650px] w-[1400px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(215,193,138,.14), transparent 70%)",
                    filter: "blur(120px)"
                }}
            />
        </div>
    );
}