"use client";

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
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 md:py-28 lg:py-32 lg:px-12">
            <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Historia */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-5 lg:col-span-6 lg:sticky lg:top-28"
                >
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        EL PRODUCTOR
                    </p>

                    <h2 className="text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        Cada lote
                        <br />
                        comienza con una decisión.
                    </h2>

                    <p className="pt-1 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                        Antes de convertirse en una bebida, el café es una sucesión de decisiones
                        tomadas por personas que conocen profundamente su territorio.
                    </p>

                    <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                        Elegir únicamente las cerezas maduras, esperar el momento adecuado para
                        cosechar, respetar el ritmo del clima y comprender cada planta son acciones
                        que no pueden automatizarse.
                        <br /><br />
                        Cada cosecha es diferente porque el territorio nunca deja de cambiar.
                    </p>
                </motion.div>

                {/* Ficha - Identidad del Lote */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
                    className="space-y-5 lg:col-span-6"
                >
                    <p className="text-xs uppercase tracking-[0.35em] text-[#D7C18A]">
                        IDENTIDAD DEL LOTE
                    </p>

                    <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl sm:p-7">
                        {producerData.map((item, index) => (
                            <div
                                key={item.title}
                                className={`flex items-center justify-between py-3.5 sm:py-4 ${
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
            </div>

            {/* Segunda parte - Reflexión */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="mx-auto mt-16 max-w-4xl text-center sm:mt-20 md:mt-24"
            >
                <p className="text-lg leading-relaxed text-white/90 sm:text-xl sm:leading-loose md:text-2xl">
                    Un café de especialidad no nace cuando se tuesta.
                    <br /><br />
                    Nace mucho antes. Cuando alguien decide esperar un día más para cosechar una
                    cereza que aún no está lista.
                </p>

                <div className="mx-auto mt-10 h-px w-20 bg-[#D7C18A]/40 sm:mt-12" />

                <p className="mx-auto mt-8 max-w-2xl text-lg italic leading-relaxed text-white/80 sm:text-xl md:text-2xl">
                    “El café es la consecuencia.
                    <br />
                    La verdadera historia pertenece a quienes cuidan el territorio.”
                </p>
            </motion.div>
        </div>
    );
}