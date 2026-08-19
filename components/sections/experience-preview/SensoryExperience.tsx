"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
        <section className="relative overflow-hidden bg-[#0A0A0A] py-32 sm:py-40">
            {/* Ambient subtle glow */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, rgba(215,193,138,0.05), transparent 70%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        DESCRIPTORES NATURALES
                    </p>
                    <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-6xl">
                        Aromas que nacen
                        <br />
                        en el territorio.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-white/70">
                        El café de especialidad no contiene aditivos ni saborizantes. Cada nota es el
                        resultado directo del suelo volcánico, el agua de montaña y la variedad genética.
                    </p>
                </div>

                {/* Interactive Notes Grid */}
                <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {sensoryNotes.map((note, index) => {
                        const isSelected = activeNote === index;
                        return (
                            <button
                                key={note.name}
                                type="button"
                                onClick={() => setActiveNote(index)}
                                className={`
                                    flex flex-col justify-between rounded-3xl border p-6 text-left transition-all duration-500
                                    ${
                                        isSelected
                                            ? "border-[#D7C18A] bg-white/[0.06] shadow-[0_10px_35px_rgba(215,193,138,0.12)] -translate-y-1"
                                            : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                                    }
                                `}
                            >
                                <div>
                                    <span
                                        className="inline-block h-3 w-3 rounded-full"
                                        style={{ backgroundColor: note.color }}
                                    />
                                    <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/50">
                                        {note.category}
                                    </p>
                                    <h3 className="mt-1 text-xl font-bold text-white">
                                        {note.name}
                                    </h3>
                                </div>

                                <span
                                    className={`mt-8 text-xs font-semibold tracking-wider ${
                                        isSelected ? "text-[#D7C18A]" : "text-white/30"
                                    }`}
                                >
                                    {isSelected ? "Explorando" : "Seleccionar"}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Sensory note focus display */}
                <motion.div
                    key={activeNote}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl sm:p-10"
                >
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold tracking-[0.35em] text-[#D7C18A]">
                                ORIGEN DEL PERFIL SENSORIAL
                            </span>
                            <h4 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                                {sensoryNotes[activeNote].name}
                            </h4>
                            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                                {sensoryNotes[activeNote].description}
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:min-w-[260px]">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D7C18A]">
                                Presencia
                            </p>
                            <p className="mt-2 text-sm text-white/80">
                                {sensoryNotes[activeNote].expression}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
