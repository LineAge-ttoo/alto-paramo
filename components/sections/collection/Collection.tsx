"use client";

import { motion } from "framer-motion";

const packagingElements = [
    {
        title: "Bolsa Hermética con Válvula",
        specs: "250g · 500g",
        material: "Papel Kraft mineral multicapa con barrera protectora de aroma y válvula desgasificadora.",
        seal: "Preservación Óptima"
    },
    {
        title: "Etiqueta Editorial de Lote",
        specs: "Trazabilidad Impresa",
        material: "Detalle manual de altitud, variedad, productor, fecha de tueste y curva sensorial.",
        seal: "Transparencia Total"
    },
    {
        title: "Sello Simbólico del Macizo",
        specs: "Arte Territorial",
        material: "Iconografía inspirada en la estatuaria prehispánica de San Agustín y los cafetos altoandinos.",
        seal: "Identidad Cultural"
    }
];

export default function Collection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#1c1814] via-[#1f1a16] to-[#181a14] py-28 sm:py-36 md:py-44">
            {/* Subtle background warm material ambient light pools */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 35% 40%, rgba(215,193,138,0.09), transparent 60%), radial-gradient(circle at 70% 80%, rgba(180,105,61,0.06), transparent 55%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        DISEÑO & MATERIA
                    </p>
                    <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Identidad visual
                        <br />
                        y empaque de origen.
                    </h2>
                    <p className="mt-8 text-base leading-8 text-white/80 sm:text-lg sm:leading-9 md:text-xl">
                        El empaque de Alto Páramo está concebido con materiales honestos que protegen la
                        frescura del café recién tostado mientras comunican el patrimonio arqueológico de San Agustín.
                    </p>
                </div>

                {/* Packaging specs cards */}
                <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
                    {packagingElements.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="flex flex-col justify-between rounded-3xl border border-white/[0.10] bg-white/[0.035] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#D7C18A]/40 hover:bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_45px_rgba(0,0,0,0.22)]"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-[11px] font-medium uppercase tracking-widest text-[#D7C18A] backdrop-blur-md">
                                        {item.specs}
                                    </span>
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="text-sm sm:text-base leading-7 text-white/75">
                                    {item.material}
                                </p>
                            </div>

                            <div className="mt-8 border-t border-white/10 pt-4">
                                <span className="text-xs font-semibold tracking-wider text-[#D7C18A]">
                                    ✓ {item.seal}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
