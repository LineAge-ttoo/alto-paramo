"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const milestones = [
    {
        step: "01",
        name: "Origen",
        detail: "San Agustín · Huila",
        description: "Geografía volcánica en el corazón del Macizo Colombiano a 1640 msnm."
    },
    {
        step: "02",
        name: "Finca",
        detail: "Bosque Altoandino",
        description: "Sombra natural, quebradas protegidas y suelos enriquecidos con materia orgánica."
    },
    {
        step: "03",
        name: "Cosecha",
        detail: "Selección Manual",
        description: "Cosecha selectiva en el punto óptimo de madurez y calibración sensorial."
    },
    {
        step: "04",
        name: "Proceso",
        detail: "Lavado Controlado",
        description: "Fermentación monitoreada y lavado con aguas de vertientes naturales."
    },
    {
        step: "05",
        name: "Secado",
        detail: "Sol y Viento",
        description: "Estabilización progresiva bajo marquesinas hasta alcanzar entre 10% y 11.5% de humedad."
    },
    {
        step: "06",
        name: "Tueste",
        detail: "Curvas Perfiladas",
        description: "Tueste de precisión para revelar la dulzura y acidez natural del varietal."
    },
    {
        step: "07",
        name: "Taza",
        detail: "Evaluación SCA",
        description: "Catación rigurosa que certifica el perfil limpio y la identidad del lote."
    }
];

export default function Traceability() {
    const [selected, setSelected] = useState(0);

    return (
        <section
            id="trazabilidad"
            data-scene="territory"
            className="relative overflow-hidden bg-gradient-to-b from-[#161c14] via-[#1b2218] to-[#1e231b] py-18 sm:py-22 md:py-26 lg:py-28"
        >
            {/* Background mineral & warm document light pools */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 25% 30%, rgba(215,193,138,0.12), transparent 60%), radial-gradient(circle at 80% 70%, rgba(180,131,86,0.08), transparent 50%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        TRAZABILIDAD DE ORIGEN
                    </p>
                    <h2 className="mt-4 text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        Cada lote cuenta
                        <br />
                        su propia historia.
                    </h2>
                    <p className="mt-6 text-base leading-7 text-white/80 sm:text-lg sm:leading-8 md:text-xl">
                        En Alto Páramo, la trazabilidad no es un sello comercial: es el registro
                        honesto de cada mano, decisión y fenómeno natural que hizo posible tu café.
                    </p>
                </div>

                {/* Timeline - Horizontal Specimen Bar for Desktop / Clean Scrollable for Mobile */}
                <div className="mt-12 sm:mt-16">
                    <div className="flex gap-3 overflow-x-auto pb-3 pt-1 sm:grid sm:grid-cols-4 sm:overflow-visible lg:grid-cols-7">
                        {milestones.map((item, index) => {
                            const isCurrent = index === selected;
                            return (
                                <button
                                    key={item.step}
                                    type="button"
                                    onClick={() => setSelected(index)}
                                    aria-pressed={isCurrent}
                                    aria-label={`Etapa ${item.step}: ${item.name}`}
                                    className={`
                                        flex min-w-[140px] sm:min-w-0 min-h-[48px] flex-col items-start rounded-2xl border p-3.5 sm:p-4.5 text-left transition-all duration-300 backdrop-blur-md focus:outline-none
                                        ${
                                            isCurrent
                                                ? "border-[#D7C18A] bg-[#D7C18A]/[0.15] shadow-[0_4px_20px_rgba(215,193,138,0.20)]"
                                                : "border-white/[0.10] bg-white/[0.045] hover:border-white/[0.22] hover:bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                                        }
                                    `}
                                >
                                    <span
                                        className={`text-[10px] font-semibold tracking-widest ${
                                            isCurrent ? "text-[#D7C18A]" : "text-white/45"
                                        }`}
                                    >
                                        PASO {item.step}
                                    </span>
                                    <span className="mt-1.5 text-sm sm:text-base font-semibold text-white">
                                        {item.name}
                                    </span>
                                    <span className="mt-1 text-xs text-white/65 line-clamp-1">
                                        {item.detail}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Active Milestone Card Focus */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="mt-6 sm:mt-8 rounded-3xl border border-white/[0.14] bg-white/[0.05] p-5 sm:p-7 md:p-9 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_50px_rgba(0,0,0,0.25)]"
                    >
                        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                            <div className="max-w-2xl space-y-2.5">
                                <span className="text-xs font-semibold tracking-[0.35em] text-[#D7C18A]">
                                    ETAPA {milestones[selected].step} · {milestones[selected].name.toUpperCase()}
                                </span>
                                <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                                    {milestones[selected].detail}
                                </h3>
                                <p className="pt-1 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                                    {milestones[selected].description}
                                </p>
                            </div>
                            <div className="flex flex-col gap-1.5 rounded-2xl border border-white/[0.10] bg-white/[0.04] p-4.5 md:min-w-[250px] backdrop-blur-md">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                                    Garantía de Origen
                                </p>
                                <p className="text-xs leading-5 text-white/75">
                                    Verificado desde el cafeto en San Agustín hasta la preparación en tu taza.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
