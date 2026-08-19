"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useJourneyStore } from "./journeyStore";
import { steps } from "./data";
import JourneyMicroTool from "./JourneyMicroTool";

type JourneyTab = "story" | "importance" | "discovery";

export default function JourneyViewport() {
    const active = useJourneyStore((state) => state.active);
    const setActive = useJourneyStore((state) => state.setActive);
    const [currentTab, setCurrentTab] = useState<JourneyTab>("story");

    const activeStep = steps[active] || steps[0];
    const total = steps.length;

    const handlePrev = () => {
        if (active > 0) {
            setActive(active - 1);
            setCurrentTab("story");
        }
    };

    const handleNext = () => {
        if (active < total - 1) {
            setActive(active + 1);
            setCurrentTab("story");
        }
    };

    const handleSelectStep = (index: number) => {
        setActive(index);
        setCurrentTab("story");
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

            {/* Horizontal Step Selector Strip (01 - 09) */}
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
                                aria-label={`Fase ${step.number}: ${step.title}`}
                                className={`
                                    group relative flex min-h-[44px] items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 backdrop-blur-md
                                    ${
                                        isCurrent
                                            ? "bg-[#D7C18A] text-stone-900 shadow-[0_2px_15px_rgba(215,193,138,0.25)]"
                                            : "border border-white/[0.12] bg-white/[0.035] text-white/70 hover:border-white/[0.22] hover:bg-white/[0.08] hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
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

            {/* Interactive Observation Stage */}
            <div className="mt-8 grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Active Photograph Column (55-60% width) */}
                <div className="lg:col-span-7">
                    <div className="relative h-[300px] sm:h-[420px] lg:h-[540px] w-full overflow-hidden rounded-3xl border border-white/[0.12] bg-[#121510]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_50px_rgba(0,0,0,0.35)]">
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
                                            "linear-gradient(to top, rgba(16,20,14,0.85) 0%, rgba(16,20,14,0.2) 50%, transparent 100%)"
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

                {/* Editorial Content Column (40-45% width) with Interactive Observation Tabs */}
                <div className="lg:col-span-5">
                    <div className="rounded-3xl border border-white/[0.10] bg-white/[0.035] p-6 sm:p-8 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_50px_rgba(0,0,0,0.25)]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="flex flex-col justify-between space-y-6"
                            >
                                {/* Meta & Phase Title */}
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
                                </div>

                                {/* Observation Tabs Navigation */}
                                <div
                                    role="tablist"
                                    aria-label="Controles de información del proceso"
                                    className="flex items-center gap-6 border-b border-white/10 pb-3"
                                >
                                    <button
                                        type="button"
                                        role="tab"
                                        id="journey-tab-story"
                                        aria-selected={currentTab === "story"}
                                        aria-controls="journey-tabpanel-story"
                                        onClick={() => setCurrentTab("story")}
                                        className={`relative min-h-[38px] pb-1 text-xs font-semibold uppercase tracking-[0.25em] transition-colors ${
                                            currentTab === "story"
                                                ? "text-[#D7C18A]"
                                                : "text-white/50 hover:text-white/80"
                                        }`}
                                    >
                                        Historia
                                        {currentTab === "story" && (
                                            <motion.div
                                                layoutId="journeyActiveTabIndicator"
                                                className="absolute -bottom-3 left-0 right-0 h-[2px] bg-[#D7C18A]"
                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                            />
                                        )}
                                    </button>

                                    <button
                                        type="button"
                                        role="tab"
                                        id="journey-tab-importance"
                                        aria-selected={currentTab === "importance"}
                                        aria-controls="journey-tabpanel-importance"
                                        onClick={() => setCurrentTab("importance")}
                                        className={`relative min-h-[38px] pb-1 text-xs font-semibold uppercase tracking-[0.25em] transition-colors ${
                                            currentTab === "importance"
                                                ? "text-[#D7C18A]"
                                                : "text-white/50 hover:text-white/80"
                                        }`}
                                    >
                                        Por qué importa
                                        {currentTab === "importance" && (
                                            <motion.div
                                                layoutId="journeyActiveTabIndicator"
                                                className="absolute -bottom-3 left-0 right-0 h-[2px] bg-[#D7C18A]"
                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                            />
                                        )}
                                    </button>

                                    <button
                                        type="button"
                                        role="tab"
                                        id="journey-tab-discovery"
                                        aria-selected={currentTab === "discovery"}
                                        aria-controls="journey-tabpanel-discovery"
                                        onClick={() => setCurrentTab("discovery")}
                                        className={`relative min-h-[38px] pb-1 text-xs font-semibold uppercase tracking-[0.25em] transition-colors ${
                                            currentTab === "discovery"
                                                ? "text-[#D7C18A]"
                                                : "text-white/50 hover:text-white/80"
                                        }`}
                                    >
                                        Descubre
                                        {currentTab === "discovery" && (
                                            <motion.div
                                                layoutId="journeyActiveTabIndicator"
                                                className="absolute -bottom-3 left-0 right-0 h-[2px] bg-[#D7C18A]"
                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                            />
                                        )}
                                    </button>
                                </div>

                                {/* Active Tab Panel Stage */}
                                <div className="min-h-[170px] sm:min-h-[190px]">
                                    <AnimatePresence mode="wait">
                                        {currentTab === "story" && (
                                            <motion.div
                                                key={`story-${activeStep.id}`}
                                                id="journey-tabpanel-story"
                                                role="tabpanel"
                                                aria-labelledby="journey-tab-story"
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -6 }}
                                                transition={{ duration: 0.28, ease: "easeOut" }}
                                                className="space-y-4"
                                            >
                                                <p className="text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                                                    {activeStep.description}
                                                </p>

                                                <div className="border-l-2 border-[#D7C18A]/40 pl-4 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                                                    <p>{activeStep.story}</p>
                                                </div>
                                            </motion.div>
                                        )}

                                        {currentTab === "importance" && (
                                            <motion.div
                                                key={`importance-${activeStep.id}`}
                                                id="journey-tabpanel-importance"
                                                role="tabpanel"
                                                aria-labelledby="journey-tab-importance"
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -6 }}
                                                transition={{ duration: 0.28, ease: "easeOut" }}
                                                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                                            >
                                                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D7C18A]">
                                                    Criterio de Calidad
                                                </p>
                                                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                                                    {activeStep.importance}
                                                </p>
                                            </motion.div>
                                        )}

                                        {currentTab === "discovery" && (
                                            <motion.div
                                                key={`discovery-${activeStep.id}`}
                                                id="journey-tabpanel-discovery"
                                                role="tabpanel"
                                                aria-labelledby="journey-tab-discovery"
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -6 }}
                                                transition={{ duration: 0.28, ease: "easeOut" }}
                                                className="space-y-4"
                                            >
                                                {activeStep.curiosity && (
                                                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 sm:p-5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                                                        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D7C18A]">
                                                            Detalle Territorial
                                                        </p>
                                                        <p className="mt-2 text-sm sm:text-base leading-7 text-white/80">
                                                            {activeStep.curiosity}
                                                        </p>
                                                    </div>
                                                )}

                                                {activeStep.discoveries && activeStep.discoveries.length > 0 && (
                                                    <div className="pt-1">
                                                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                                                            Claves del Proceso
                                                        </p>
                                                        <div className="mt-2.5 flex flex-wrap gap-2">
                                                            {activeStep.discoveries.map((disc) => (
                                                                <span
                                                                    key={disc}
                                                                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-white/75"
                                                                >
                                                                    {disc}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Micro-tool for stages 01, 04, 06, 07, 08, and 09 */}
                                                <JourneyMicroTool stepId={activeStep.id} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Permanent Editorial Reflection Quote */}
                                <div className="border-t border-white/10 pt-5">
                                    <p className="text-sm sm:text-base italic leading-relaxed text-[#D7C18A]/90">
                                        “{activeStep.reflection}”
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Bottom Station Navigation Bar */}
            <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                <button
                    type="button"
                    onClick={handlePrev}
                    disabled={active === 0}
                    aria-label="Fase anterior"
                    className={`
                        inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 backdrop-blur-md
                        ${
                            active === 0
                                ? "cursor-not-allowed text-white/20"
                                : "border border-white/[0.12] bg-white/[0.04] text-white/80 hover:border-[#D7C18A]/50 hover:bg-white/[0.08] hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
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
                    aria-label="Siguiente fase"
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