"use client";

import { motion } from "framer-motion";

const appFeatures = [
    {
        title: "Mi Finca & Lotes",
        desc: "Seguimiento directo al origen botánico, registros de cosecha y sanidad del cafetal."
    },
    {
        title: "Guía de Extracción",
        desc: "Cronómetro calibrado, ratios de agua-café y parámetros exactos para V60, Chemex y Prensa."
    },
    {
        title: "Bitácora & Catación",
        desc: "Registro de notas sensoriales personales, favoritos y evolución de cada taza."
    },
    {
        title: "Trazabilidad QR",
        desc: "Lectura instantánea de empaques para descubrir la historia completa de cada lote."
    }
];

export default function DigitalEcosystem() {
    return (
        <section
            id="digital"
            data-scene="coffee"
            className="relative overflow-hidden bg-[#0c0b0a] py-28 sm:py-36 md:py-44"
        >
            {/* Background lighting */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 50% 30%, rgba(215,193,138,0.07), transparent 60%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
                    {/* Text content */}
                    <div className="max-w-2xl lg:col-span-7 space-y-6">
                        <span className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                            ECOSISTEMA DIGITAL
                        </span>

                        <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            El origen continúa
                            <br />
                            en tu día a día.
                        </h2>

                        <p className="pt-2 text-base leading-8 text-white/80 sm:text-lg sm:leading-9 md:text-xl">
                            La plataforma digital de Alto Páramo acompaña a productores, baristas y amantes
                            del café con herramientas de precisión para explorar, cronometrar y registrar cada experiencia.
                        </p>

                        <div className="pt-6 grid gap-4 sm:grid-cols-2">
                            {appFeatures.map((f, i) => (
                                <div
                                    key={f.title}
                                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md"
                                >
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D7C18A]">
                                        0{i + 1} · {f.title}
                                    </span>
                                    <p className="mt-2 text-xs sm:text-sm leading-6 text-white/70">
                                        {f.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 flex flex-wrap items-center gap-4">
                            <span className="inline-flex items-center gap-3 rounded-full border border-[#D7C18A] bg-[#D7C18A] px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-stone-900 shadow-[0_4px_25px_rgba(215,193,138,0.25)]">
                                Ecosistema en Construcción
                            </span>
                            <span className="text-xs tracking-wider text-white/50">
                                Herramientas dedicadas para la comunidad de origen
                            </span>
                        </div>
                    </div>

                    {/* App Mockup Preview Framing */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative mx-auto max-w-sm rounded-[40px] border border-white/15 bg-gradient-to-b from-white/10 to-black/60 p-6 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                        >
                            {/* Inner screen frame */}
                            <div className="space-y-5 rounded-[28px] border border-white/10 bg-[#101010] p-6">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <span className="text-xs font-bold tracking-widest text-white">
                                        ALTO PÁRAMO
                                    </span>
                                    <span className="h-2 w-2 rounded-full bg-[#D7C18A]" />
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-[10px] uppercase tracking-widest text-[#D7C18A]">
                                        Lote Activo
                                    </p>
                                    <p className="mt-1 text-base font-bold text-white">
                                        San Agustín · Papayo
                                    </p>
                                    <p className="text-xs text-white/60">
                                        1640 msnm · Lavado
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#D7C18A]/20 bg-[#D7C18A]/[0.05] p-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-white/80">Ratio V60</span>
                                        <span className="text-xs font-semibold text-[#D7C18A]">1:16 (15g / 240ml)</span>
                                    </div>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="text-xs text-white/80">Tiempo Objetivo</span>
                                        <span className="text-xs font-semibold text-[#D7C18A]">02:45 min</span>
                                    </div>
                                </div>

                                <div className="border-t border-white/10 pt-4 text-center">
                                    <p className="text-[11px] text-white/50">
                                        Bitácora sincronizada con el origen
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
