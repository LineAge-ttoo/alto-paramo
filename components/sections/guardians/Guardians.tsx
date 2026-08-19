"use client";

import { motion } from "framer-motion";

const guardiansPillars = [
    {
        title: "Patrimonio Arqueológico",
        description:
            "San Agustín alberga la mayor necrópolis megalítica de América. Cultivar café aquí es convivir con la memoria de civilizaciones que veneraban el agua y la montaña."
    },
    {
        title: "Cuidado de Cuencas",
        description:
            "En el Macizo Colombiano nacen las arterias fluviales más importantes del país. La agricultura que practicamos protege los bosques de niebla y los nacimientos de agua."
    },
    {
        title: "Familias Productoras",
        description:
            "Generaciones de campesinos y artesanos cafeteros que transmiten el conocimiento de la tierra, la paciencia en la cosecha y el respeto por los ritmos naturales."
    }
];

export default function Guardians() {
    return (
        <section
            id="guardianes"
            data-scene="about"
            className="relative overflow-hidden bg-[#0A0A0A] py-32 sm:py-40"
        >
            {/* Background warmth */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 60% 40%, rgba(215,193,138,0.06), transparent 60%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
                {/* Header */}
                <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        GUARDIANES DEL TERRITORIO
                    </p>
                    <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-6xl md:text-7xl">
                        Cuidar el lugar
                        <br />
                        que hace posible el café.
                    </h2>
                    <p className="mt-8 text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
                        Alto Páramo nace en San Agustín, Huila, como una iniciativa viva que integra el
                        patrimonio arqueológico, la biodiversidad del bosque altoandino y la dignidad de
                        las familias productoras.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {guardiansPillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.6 }}
                            className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D7C18A]/40 hover:bg-white/[0.04]"
                        >
                            <span className="text-xs font-semibold tracking-widest text-[#D7C18A]">
                                0{index + 1}
                            </span>
                            <h3 className="mt-4 text-2xl font-bold text-white">
                                {pillar.title}
                            </h3>
                            <p className="mt-4 text-base leading-7 text-white/70">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Final Quote Banner */}
                <div className="mt-20 border-t border-white/10 pt-16 text-center">
                    <p className="mx-auto max-w-3xl text-2xl italic leading-relaxed text-white/85 sm:text-3xl">
                        “El café es la consecuencia. La verdadera historia pertenece a quienes cuidan el territorio.”
                    </p>
                    <p className="mt-6 text-xs uppercase tracking-[0.35em] text-[#D7C18A]">
                        SAN AGUSTÍN · HUILA · COLOMBIA
                    </p>
                </div>
            </div>
        </section>
    );
}
