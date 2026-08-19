"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useJourneyStore } from "./journeyStore";
import { steps } from "./data";

export default function JourneyViewport() {
    const active = useJourneyStore((state) => state.active);
    const setActive = useJourneyStore((state) => state.setActive);
    const [expanded, setExpanded] = useState(false);

    const activeStep = steps[active] || steps[0];
    const total = steps.length;

    const handlePrev = () => {
        if (active > 0) {
            setActive(active - 1);
            setExpanded(false);
        }
    };

    const handleNext = () => {
        if (active < total - 1) {
            setActive(active + 1);
            setExpanded(false);
        }
    };

    const handleSelectStep = (index: number) => {
        setActive(index);
        setExpanded(false);
    };

    return (
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            {/* Station Header */}
            <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
                <div>
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        DEL FRUTO A LA TAZA
                    </p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                        Nueve fases del proceso.
                    </h2>
                </div>

                {/* Counter */}
                <div className="flex items-baseline gap-2 self-start sm:self-end">
                    <span className="text-2xl font-light text-[#D7C18A] sm:text-3xl">
                        {activeStep.number}
                    </span>
                    <span className="text-sm text-white/40">/</span>
                    <span className="text-sm font-medium tracking-widest text-white/50">
                        0{total}
                    </span>
                </div>
            </div>

            {/* Horizontal Step Selector Strip */}
            <div className="mt-8 overflow-x-auto pb-4 pt-2">
                <nav
                    aria-label="Selector de fases del proceso"
                    className="flex min-w-max items-center gap-2 sm:gap-3"
                >
                    {steps.map((step, index) => {
                        const isCurrent = index === active;
                        return (
                            <button
                                key={step.id}
                                type="button"
                                onClick={() => handleSelectStep(index)}
                                className={`
                                    group relative flex min-h-[44px] items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300
                                    ${
                                        isCurrent
                                            ? "bg-[#D7C18A] text-stone-900 shadow-[0_2px_15px_rgba(215,193,138,0.25)]"
                                            : "border border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                                    }
                                `}
                            >
                                <span className={isCurrent ? "font-bold" : "text-white/40 group-hover:text-white/70"}>
                                    {step.number}
                                </span>
                                <span className="text-[11px] sm:text-xs">
                                    {step.title}
                                </span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Interactive Station Body Stage */}
            <div className="mt-8 grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Active Photograph Column (55-60% width) */}
                <div className="lg:col-span-7">
                    <div className="relative h-[300px] sm:h-[420px] lg:h-[540px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep.id}
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative h-full w-full"
                            >
                                <Image
                                    src={activeStep.image}
                                    alt={activeStep.title}
                                    fill
                                    quality={88}
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                    className="object-cover brightness-[1.06] contrast-[1.03] saturate-[1.06]"
                                    priority
                                />

                                {/* Ambient Lighting Gradients */}
                                <div
                                    className="pointer-events-none absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(9,9,8,0.85) 0%, rgba(9,9,8,0.2) 50%, transparent 100%)"
                                    }}
                                />
                                <div
                                    className="pointer-events-none absolute inset-0"
                                    style={{
                                        background:
                                            "radial-gradient(circle at 75% 25%, rgba(215,193,138,0.12), transparent 50%)"
                                    }}
                                />

                                {/* Mobile Overlay Title Badge */}
                                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between sm:hidden">
                                    <span className="rounded-full border border-white/20 bg-black/60 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#D7C18A] backdrop-blur-md">
                                        Fase {activeStep.number} · {activeStep.title}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Editorial Content Column (40-45% width) */}
                <div className="lg:col-span-5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="flex flex-col justify-between space-y-6"
                        >
                            {/* Meta & Title */}
                            <div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-xs font-semibold tracking-[0.40em] text-[#D7C18A]">
                                        FASE {activeStep.number}
                                    </span>
                                    {activeStep.duration && (
                                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-0.5 text-[11px] font-medium tracking-wider text-white/70 backdrop-blur-md">
                                            {activeStep.duration}
                                        </span>
                                    )}
                                </div>

                                <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                                    {activeStep.title}
                                </h3>

                                <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                                    {activeStep.description}
                                </p>
                            </div>

                            {/* Deep Story Narrative */}
                            <div className="border-l-2 border-[#D7C18A]/40 pl-4 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                                <p>{activeStep.story}</p>
                            </div>

                            {/* Reflection Quote */}
                            <p className="text-sm italic leading-relaxed text-[#D7C18A] sm:text-base">
                                “{activeStep.reflection}”
                            </p>

                            {/* Expandable Key Discoveries Accordion */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setExpanded(!expanded)}
                                    className="inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur-md transition-all duration-300 hover:border-[#D7C18A]/50 hover:bg-white/10 hover:text-white"
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

                                <AnimatePresence>
                                    {expanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-4 space-y-4 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                                                        ¿Por qué importa?
                                                    </p>
                                                    <p className="text-xs sm:text-sm leading-6 text-white/80">
                                                        {activeStep.importance}
                                                    </p>
                                                </div>

                                                {activeStep.curiosity && (
                                                    <div className="space-y-1">
                                                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                                                            Detalle territorial
                                                        </p>
                                                        <p className="text-xs sm:text-sm leading-6 text-white/80">
                                                            {activeStep.curiosity}
                                                        </p>
                                                    </div>
                                                )}

                                                {activeStep.discoveries && activeStep.discoveries.length > 0 && (
                                                    <div className="space-y-1 pt-1">
                                                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                                                            Claves del proceso
                                                        </p>
                                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                                            {activeStep.discoveries.map((disc) => (
                                                                <span
                                                                    key={disc}
                                                                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/70"
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
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Station Navigation Bar */}
            <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                <button
                    type="button"
                    onClick={handlePrev}
                    disabled={active === 0}
                    className={`
                        inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300
                        ${
                            active === 0
                                ? "cursor-not-allowed text-white/20"
                                : "border border-white/15 bg-white/5 text-white/80 hover:border-[#D7C18A]/50 hover:bg-white/10 hover:text-white"
                        }
                    `}
                >
                    <span>←</span>
                    <span>Anterior</span>
                </button>

                <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/40">
                    Fase {activeStep.number} de 0{total}
                </span>

                <button
                    type="button"
                    onClick={handleNext}
                    disabled={active === total - 1}
                    className={`
                        inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300
                        ${
                            active === total - 1
                                ? "cursor-not-allowed text-white/20"
                                : "border border-[#D7C18A] bg-[#D7C18A] text-stone-900 shadow-[0_2px_15px_rgba(215,193,138,0.25)] hover:bg-[#e4d29f]"
                        }
                    `}
                >
                    <span>Siguiente</span>
                    <span>→</span>
                </button>
            </div>
        </div>
    );
}