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
        <section className="relative overflow-hidden bg-[#090909] py-32 sm:py-40">
            {/* Subtle background ambient line */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 30% 70%, rgba(215,193,138,0.05), transparent 60%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
                {/* Header */}
                <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        DISEÑO & MATERIA
                    </p>
                    <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-6xl md:text-7xl">
                        Identidad visual
                        <br />
                        y empaque de origen.
                    </h2>
                    <p className="mt-8 text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
                        El empaque de Alto Páramo está concebido con materiales honestos que protegen la
                        frescura del café recién tostado mientras comunican el patrimonio arqueológico de San Agustín.
                    </p>
                </div>

                {/* Packaging specs cards */}
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {packagingElements.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D7C18A]/40 hover:bg-white/[0.04]"
                        >
                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-[#D7C18A]">
                                        {item.specs}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-widest text-white/40">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/70">
                                    {item.material}
                                </p>
                            </div>

                            <div className="mt-8 border-t border-white/10 pt-4">
                                <span className="text-[11px] font-medium tracking-wider text-[#D7C18A]">
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
