"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { JourneyStep } from "./data";

export default function JourneyCard({
    number,
    title,
    description,
    image,
    duration,
    story,
    importance,
    curiosity,
    reflection,
    discoveries
}: JourneyStep) {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="journey-card relative min-h-screen overflow-hidden py-24 sm:py-32">
            {/* Background Photograph */}
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    priority={number === "01"}
                    quality={88}
                    sizes="100vw"
                    className="journey-image object-cover scale-[1.06] brightness-[1.08] contrast-[1.03] saturate-[1.08] will-change-transform"
                />
            </div>

            {/* Readability & Ambient Overlays */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to right, rgba(9,9,9,0.88) 0%, rgba(9,9,9,0.72) 42%, rgba(9,9,9,0.25) 75%, rgba(9,9,9,0.5) 100%)"
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at 75% 20%, rgba(215,193,138,0.14), transparent 50%)"
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(9,9,9,0.6) 0%, transparent 25%, rgba(9,9,9,0.8) 100%)"
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl items-center px-6 sm:px-8">
                <div className="journey-content max-w-3xl">
                    {/* Header meta */}
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="text-sm font-semibold tracking-[0.45em] text-[#D7C18A]">
                            FASE {number}
                        </span>
                        {duration && (
                            <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-[11px] tracking-[0.2em] text-white/70 backdrop-blur-md">
                                {duration}
                            </span>
                        )}
                    </div>

                    {/* Step Title */}
                    <h2 className="mt-5 text-5xl font-black leading-[0.98] text-white sm:text-6xl md:text-7xl">
                        {title}
                    </h2>

                    {/* Primary concise summary */}
                    <p className="mt-7 text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
                        {description}
                    </p>

                    {/* Deep Story Details */}
                    <div className="mt-8 border-l-2 border-[#D7C18A]/40 pl-5 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                        <p>{story}</p>
                    </div>

                    {/* Reflection quote */}
                    <p className="mt-8 text-base italic leading-relaxed text-[#D7C18A]/90 sm:text-lg">
                        “{reflection}”
                    </p>

                    {/* Interactive expansion button for deep insights */}
                    <div className="mt-8">
                        <button
                            type="button"
                            onClick={() => setExpanded(!expanded)}
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.25em] text-white backdrop-blur-md transition-all duration-300 hover:border-[#D7C18A]/60 hover:bg-white/10 hover:text-[#D7C18A]"
                        >
                            <span>{expanded ? "Ocultar detalles" : "Ver por qué importa"}</span>
                            <span
                                className={`transition-transform duration-300 ${
                                    expanded ? "rotate-180" : ""
                                }`}
                            >
                                ↓
                            </span>
                        </button>
                    </div>

                    {/* Expandable Editorial Deep-Dive */}
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="mt-6 grid gap-5 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-2xl sm:p-8 md:grid-cols-2">
                                    {/* Importance */}
                                    <div className="space-y-2">
                                        <p className="text-[11px] uppercase tracking-[0.35em] text-[#D7C18A]">
                                            ¿Por qué importa?
                                        </p>
                                        <p className="text-sm leading-6 text-white/80">
                                            {importance}
                                        </p>
                                    </div>

                                    {/* Curiosity if available */}
                                    {curiosity && (
                                        <div className="space-y-2">
                                            <p className="text-[11px] uppercase tracking-[0.35em] text-[#D7C18A]">
                                                Detalle territorial
                                            </p>
                                            <p className="text-sm leading-6 text-white/80">
                                                {curiosity}
                                            </p>
                                        </div>
                                    )}

                                    {/* Discoveries badges */}
                                    {discoveries && discoveries.length > 0 && (
                                        <div className="space-y-2 md:col-span-2">
                                            <p className="text-[11px] uppercase tracking-[0.35em] text-[#D7C18A]">
                                                Claves del proceso
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-1">
                                                {discoveries.map((disc) => (
                                                    <span
                                                        key={disc}
                                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                                                    >
                                                        {disc}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}