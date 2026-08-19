"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sensoryNotes = [
    {
        name: "Melaza & Panela",
        category: "Dulzura Natural",
        color: "#D7C18A",
        description:
            "Derivado de la maduración lenta y la concentración de sacarosa en cerezas cosechadas a más de 1600 msnm.",
        expression: "Común en nuestra línea Regional y microlotes lavados."
    },
    {
        name: "Cacao Criollo",
        category: "Cuerpo & Base",
        color: "#B48356",
        description:
            "Notas de chocolate oscuro tostado y nuez, aportadas por los minerales de los suelos volcánicos del Huila.",
        expression: "Estructura densa y reconfortante en taza."
    },
    {
        name: "Frutos Rojos",
        category: "Acidez & Complejidad",
        color: "#C46255",
        description:
            "Matices a cereza negra y mora silvestre, resultantes de fermentaciones controladas en microlotes de Papayo.",
        expression: "Exclusivo de nuestra línea Specialty Coffee."
    },
    {
        name: "Flor de Azahar",
        category: "Fragancia",
        color: "#E2D3B3",
        description:
            "Aromas sutiles florales y de jazmín que caracterizan a los varietales Bourbon Rosado de alta cota.",
        expression: "Fragancia etérea al momento de moler."
    }
];

export default function SensoryExperience() {
    const [activeNote, setActiveNote] = useState(0);

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#22241d] via-[#25201b] to-[#221c17] py-18 sm:py-22 md:py-26 lg:py-28">
            {/* Ambient atmospheric mist & botanical light pools */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 50% 30%, rgba(215,193,138,0.12), transparent 60%), radial-gradient(circle at 85% 70%, rgba(196,98,85,0.09), transparent 50%), radial-gradient(circle at 15% 65%, rgba(91,122,73,0.08), transparent 50%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        DESCRIPTORES NATURALES
                    </p>
                    <h2 className="mt-4 text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        Aromas que nacen
                        <br />
                        en el territorio.
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                        El café de especialidad no contiene aditivos ni saborizantes. Cada nota es el
                        resultado directo del suelo volcánico, el agua de montaña y la variedad genética.
                    </p>
                </div>

                {/* Interactive Notes Grid with Accessible Tap Targets */}
                <div className="mt-12 sm:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {sensoryNotes.map((note, index) => {
                        const isSelected = activeNote === index;
                        return (
                            <button
                                key={note.name}
                                type="button"
                                onClick={() => setActiveNote(index)}
                                aria-pressed={isSelected}
                                aria-label={`Descriptor sensorial: ${note.name}`}
                                className={`
                                    flex min-h-[130px] flex-col justify-between rounded-3xl border p-5 text-left transition-all duration-300 backdrop-blur-md focus:outline-none
                                    ${
                                        isSelected
                                            ? "border-[#D7C18A] bg-white/[0.10] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_10px_30px_rgba(215,193,138,0.20)] -translate-y-1"
                                            : "border-white/[0.10] bg-white/[0.045] hover:border-white/[0.22] hover:bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                                    }
                                `}
                            >
                                <div>
                                    <span
                                        className="inline-block h-3 w-3 rounded-full shadow-sm"
                                        style={{ backgroundColor: note.color }}
                                    />
                                    <p className="mt-3.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
                                        {note.category}
                                    </p>
                                    <h3 className="mt-1 text-base sm:text-lg font-bold text-white">
                                        {note.name}
                                    </h3>
                                </div>

                                <span
                                    className={`mt-4 text-xs font-semibold tracking-wider ${
                                        isSelected ? "text-[#D7C18A]" : "text-white/45"
                                    }`}
                                >
                                    {isSelected ? "Explorando" : "Seleccionar"}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Sensory note focus display */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeNote}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="mt-6 sm:mt-8 rounded-3xl border border-white/[0.14] bg-white/[0.05] p-5 sm:p-7 md:p-9 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_50px_rgba(0,0,0,0.25)]"
                    >
                        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                            <div className="max-w-2xl space-y-2">
                                <span className="text-xs font-semibold tracking-[0.35em] text-[#D7C18A]">
                                    ORIGEN DEL PERFIL SENSORIAL
                                </span>
                                <h4 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                                    {sensoryNotes[activeNote].name}
                                </h4>
                                <p className="pt-1 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                                    {sensoryNotes[activeNote].description}
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/[0.10] bg-white/[0.04] p-4.5 md:min-w-[250px] backdrop-blur-md">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                                    Presencia
                                </p>
                                <p className="mt-1.5 text-sm leading-6 text-white/85">
                                    {sensoryNotes[activeNote].expression}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
