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
            className="relative overflow-hidden bg-[#0c0b0a] py-28 sm:py-36 md:py-44"
        >
            {/* Background subtle light */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 30% 20%, rgba(215,193,138,0.06), transparent 60%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        TRAZABILIDAD DE ORIGEN
                    </p>
                    <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Cada lote cuenta
                        <br />
                        su propia historia.
                    </h2>
                    <p className="mt-8 text-base leading-8 text-white/80 sm:text-lg sm:leading-9 md:text-xl">
                        En Alto Páramo, la trazabilidad no es un sello comercial: es el registro
                        honesto de cada mano, decisión y fenómeno natural que hizo posible tu café.
                    </p>
                </div>

                {/* Timeline - Horizontal Specimen Bar for Desktop / Clean Scrollable for Mobile */}
                <div className="mt-16 sm:mt-20">
                    <div className="flex gap-3 overflow-x-auto pb-4 pt-1 sm:grid sm:grid-cols-4 sm:overflow-visible lg:grid-cols-7">
                        {milestones.map((item, index) => {
                            const isCurrent = index === selected;
                            return (
                                <button
                                    key={item.step}
                                    type="button"
                                    onClick={() => setSelected(index)}
                                    className={`
                                        flex min-w-[150px] sm:min-w-0 min-h-[48px] flex-col items-start rounded-2xl border p-4 sm:p-5 text-left transition-all duration-300
                                        ${
                                            isCurrent
                                                ? "border-[#D7C18A] bg-[#D7C18A]/10 shadow-[0_4px_20px_rgba(215,193,138,0.12)]"
                                                : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                                        }
                                    `}
                                >
                                    <span
                                        className={`text-[10px] font-semibold tracking-widest ${
                                            isCurrent ? "text-[#D7C18A]" : "text-white/40"
                                        }`}
                                    >
                                        PASO {item.step}
                                    </span>
                                    <span className="mt-2 text-sm sm:text-base font-semibold text-white">
                                        {item.name}
                                    </span>
                                    <span className="mt-1 text-xs text-white/60 line-clamp-1">
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
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-8 md:p-10 backdrop-blur-xl"
                    >
                        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-2xl space-y-3">
                                <span className="text-xs font-semibold tracking-[0.35em] text-[#D7C18A]">
                                    ETAPA {milestones[selected].step} · {milestones[selected].name.toUpperCase()}
                                </span>
                                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                                    {milestones[selected].detail}
                                </h3>
                                <p className="pt-2 text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
                                    {milestones[selected].description}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:min-w-[260px]">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                                    Garantía de Origen
                                </p>
                                <p className="text-xs leading-5 text-white/70">
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
