"use client";

import { motion } from "framer-motion";

const footprints = [
    {
        title: "ALTITUD",
        value: "1640 msnm"
    },
    {
        title: "UBICACIÓN",
        value: "San Agustín · Huila"
    },
    {
        title: "ECOSISTEMA",
        value: "Bosque Altoandino"
    },
    {
        title: "ORIGEN",
        value: "Macizo Colombiano"
    },
    {
        title: "TEMPERATURA",
        value: "18°C promedio"
    },
    {
        title: "LLUVIA",
        value: "≈2200 mm / año"
    }
];

export default function TerritoryContent() {
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
                        EL TERRITORIO
                    </p>

                    <h2 className="text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        Donde nace la esencia
                        <br />
                        de Alto Páramo.
                    </h2>

                    <p className="pt-1 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                        Entre las montañas del Macizo Colombiano, donde la niebla atraviesa lentamente
                        los bosques y el agua nace entre la roca volcánica, comienza una historia que
                        lleva generaciones escribiéndose.
                    </p>

                    <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                        Aquí el café no domina el paisaje.
                        <br /><br />
                        Forma parte de él. Cada árbol, cada quebrada y cada cambio de luz influyen
                        silenciosamente en el carácter de cada cosecha.
                    </p>
                </motion.div>

                {/* Huellas del Territorio */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
                    className="space-y-5 lg:col-span-6"
                >
                    <p className="text-xs uppercase tracking-[0.35em] text-[#D7C18A]">
                        HUELLAS DEL TERRITORIO
                    </p>

                    <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl sm:p-7">
                        {footprints.map((item, index) => (
                            <div
                                key={item.title}
                                className={`flex items-center justify-between py-3.5 sm:py-4 ${
                                    index === 0 ? "pt-0" : ""
                                } ${index === footprints.length - 1 ? "pb-0" : ""}`}
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

            {/* Segunda parte - Reflexión Territorial */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="mx-auto mt-16 max-w-4xl text-center sm:mt-20 md:mt-24"
            >
                <p className="text-lg leading-relaxed text-white/90 sm:text-xl sm:leading-loose md:text-2xl">
                    El Macizo Colombiano es uno de los territorios donde nacen importantes cuencas
                    hidrográficas del país.
                    <br /><br />
                    La combinación entre altura, humedad, bosque altoandino y tradición agrícola
                    convierte este paisaje en un lugar excepcional para cultivar cafés con identidad
                    propia.
                </p>

                <div className="mx-auto mt-10 h-px w-20 bg-[#D7C18A]/40 sm:mt-12" />

                <p className="mx-auto mt-8 max-w-2xl text-lg italic leading-relaxed text-white/80 sm:text-xl md:text-2xl">
                    “Antes de conocer el café, primero hay que comprender el lugar que lo hace posible.”
                </p>
            </motion.div>
        </div>
    );
}