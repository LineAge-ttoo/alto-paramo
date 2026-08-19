"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const producerData = [
    {
        title: "ORIGEN",
        value: "San Agustín · Huila"
    },
    {
        title: "ALTITUD",
        value: "1600–1800 msnm"
    },
    {
        title: "VARIEDADES",
        value: "Papayo · Bourbon Rosado"
    },
    {
        title: "COSECHA",
        value: "Selección Manual"
    },
    {
        title: "PROCESO",
        value: "Lavado y controlado"
    },
    {
        title: "FILOSOFÍA",
        value: "Calidad antes que cantidad"
    }
];

export default function SpecialtyContent() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-28 sm:px-8 sm:py-36 md:py-44 lg:px-12">
            {/* Top Row: Narrative Story + Spec Sheet + Editorial Cat Detail */}
            <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Historia Narrative (Left Column) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="space-y-6 lg:col-span-5 lg:sticky lg:top-32"
                >
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        EL PRODUCTOR
                    </p>

                    <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                        Cada lote
                        <br />
                        comienza con una decisión.
                    </h2>

                    <p className="pt-2 text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
                        Antes de convertirse en una bebida, el café es una sucesión de decisiones
                        tomadas por personas que conocen profundamente su territorio.
                    </p>

                    <p className="text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
                        Elegir únicamente las cerezas maduras, esperar el momento adecuado para
                        cosechar, respetar el ritmo del clima y comprender cada planta son acciones
                        que no pueden automatizarse.
                        <br /><br />
                        Cada cosecha es diferente porque el territorio nunca deja de cambiar.
                    </p>
                </motion.div>

                {/* Right Column: Identidad del Lote Card + Editorial Cat Specimen */}
                <div className="space-y-8 lg:col-span-7">
                    {/* Ficha - Identidad del Lote */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <p className="text-xs uppercase tracking-[0.35em] text-[#D7C18A]">
                            IDENTIDAD DEL LOTE
                        </p>

                        <div className="divide-y divide-white/10 rounded-3xl border border-white/[0.12] bg-white/[0.035] p-6 sm:p-8 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_50px_rgba(0,0,0,0.25)]">
                            {producerData.map((item, index) => (
                                <div
                                    key={item.title}
                                    className={`flex items-center justify-between py-4.5 ${
                                        index === 0 ? "pt-0" : ""
                                    } ${index === producerData.length - 1 ? "pb-0" : ""}`}
                                >
                                    <span className="text-[11px] font-medium tracking-[0.25em] text-[#D7C18A]/80">
                                        {item.title}
                                    </span>
                                    <span className="text-right text-base font-medium text-white sm:text-lg">
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Dignified Contained Editorial Photograph / Easter Egg */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
                        className="overflow-hidden rounded-3xl border border-white/[0.10] bg-white/[0.03] p-4 sm:p-5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_16px_40px_rgba(0,0,0,0.28)]"
                    >
                        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/[0.08]">
                            <Image
                                src="/coffee/specialty.jpg"
                                alt="Mesa de trabajo y compañía en la finca cafetera de San Agustín"
                                fill
                                quality={90}
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover object-[center_60%] brightness-[1.04] contrast-[1.02] saturate-[1.05] transition-transform duration-[3000ms] hover:scale-[1.03]"
                            />

                            <div
                                className="pointer-events-none absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(14,20,13,0.7) 0%, transparent 50%)"
                                }}
                            />
                        </div>

                        <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-white/60">
                            <span className="text-[11px] font-medium uppercase tracking-widest text-[#D7C18A]">
                                Mesa de Trabajo · San Agustín
                            </span>
                            <span className="text-[11px] italic text-white/50">
                                Compañía cotidiana en los espacios de la finca
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Segunda parte - Reflexión */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mx-auto mt-28 max-w-4xl text-center sm:mt-36 md:mt-44"
            >
                <p className="text-xl leading-relaxed text-white/90 sm:text-2xl sm:leading-loose md:text-3xl">
                    Un café de especialidad no nace cuando se tuesta.
                    <br /><br />
                    Nace mucho antes. Cuando alguien decide esperar un día más para cosechar una
                    cereza que aún no está lista.
                </p>

                <div className="mx-auto mt-14 h-px w-24 bg-[#D7C18A]/40 sm:mt-16" />

                <p className="mx-auto mt-12 max-w-2xl text-xl italic leading-relaxed text-white/80 sm:text-2xl">
                    “El café es la consecuencia.
                    <br />
                    La verdadera historia pertenece a quienes cuidan el territorio.”
                </p>
            </motion.div>
        </div>
    );
}