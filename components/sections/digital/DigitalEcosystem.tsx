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
            className="relative overflow-hidden bg-gradient-to-b from-[#181f16] via-[#1c1c1b] to-[#1a1918] py-18 sm:py-22 md:py-26 lg:py-28"
        >
            {/* Background contemporary warm lighting pools with focused glow behind mockup */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 75% 50%, rgba(215,193,138,0.14), transparent 55%), radial-gradient(circle at 25% 40%, rgba(255,255,255,0.05), transparent 60%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Text content */}
                    <div className="max-w-2xl lg:col-span-7 space-y-5">
                        <span className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                            ECOSISTEMA DIGITAL
                        </span>

                        <h2 className="text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            El origen continúa
                            <br />
                            en tu día a día.
                        </h2>

                        <p className="pt-1 text-base leading-7 text-white/80 sm:text-lg sm:leading-8 md:text-xl">
                            La plataforma digital de Alto Páramo acompaña a productores, baristas y amantes
                            del café con herramientas de precisión para explorar, cronometrar y registrar cada experiencia.
                        </p>

                        <div className="pt-4 grid gap-3.5 sm:grid-cols-2">
                            {appFeatures.map((f, i) => (
                                <div
                                    key={f.title}
                                    className="rounded-2xl border border-white/[0.10] bg-white/[0.04] p-4.5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                                >
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D7C18A]">
                                        0{i + 1} · {f.title}
                                    </span>
                                    <p className="mt-1.5 text-xs sm:text-sm leading-6 text-white/75">
                                        {f.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-4">
                            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#D7C18A]/35 bg-[#D7C18A]/15 px-5 py-2 text-xs font-semibold tracking-wider text-[#D7C18A] backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#D7C18A] animate-pulse" />
                                Ecosistema en Construcción
                            </span>
                            <span className="text-xs tracking-wider text-white/55">
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
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="relative mx-auto max-w-sm rounded-[36px] border border-white/[0.18] bg-gradient-to-b from-white/[0.14] to-black/50 p-5 sm:p-6 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_25px_60px_rgba(0,0,0,0.4)]"
                        >
                            {/* Inner screen frame */}
                            <div className="space-y-4 rounded-[26px] border border-white/[0.12] bg-[#141312] p-5">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                                    <span className="text-xs font-bold tracking-widest text-white">
                                        ALTO PÁRAMO
                                    </span>
                                    <span className="h-2 w-2 rounded-full bg-[#D7C18A]" />
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                                    <p className="text-[10px] uppercase tracking-widest text-[#D7C18A]">
                                        Lote Activo
                                    </p>
                                    <p className="mt-1 text-sm sm:text-base font-bold text-white">
                                        San Agustín · Papayo
                                    </p>
                                    <p className="text-xs text-white/65">
                                        1640 msnm · Lavado
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#D7C18A]/25 bg-[#D7C18A]/[0.07] p-3.5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-white/85">Ratio V60</span>
                                        <span className="text-xs font-semibold text-[#D7C18A]">1:16 (15g / 240ml)</span>
                                    </div>
                                    <div className="mt-2.5 flex items-center justify-between">
                                        <span className="text-xs text-white/85">Tiempo Objetivo</span>
                                        <span className="text-xs font-semibold text-[#D7C18A]">02:45 min</span>
                                    </div>
                                </div>

                                <div className="border-t border-white/10 pt-3 text-center">
                                    <p className="text-[11px] text-white/55">
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
