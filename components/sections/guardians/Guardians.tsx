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
            className="relative overflow-hidden bg-gradient-to-b from-[#20201a] via-[#1a2318] to-[#181f16] py-18 sm:py-22 md:py-26 lg:py-28"
        >
            {/* Background botanical deep forest & mountain mist light pools */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 65% 35%, rgba(91,122,73,0.13), transparent 60%), radial-gradient(circle at 25% 65%, rgba(215,193,138,0.10), transparent 55%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        GUARDIANES DEL TERRITORIO
                    </p>
                    <h2 className="mt-4 text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        Cuidar el lugar
                        <br />
                        que hace posible el café.
                    </h2>
                    <p className="mt-6 text-base leading-7 text-white/80 sm:text-lg sm:leading-8 md:text-xl">
                        Alto Páramo nace en San Agustín, Huila, como una iniciativa viva que integra el
                        patrimonio arqueológico, la biodiversidad del bosque altoandino y la dignidad de
                        las familias productoras.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="mt-12 sm:mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
                    {guardiansPillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col justify-between rounded-3xl border border-white/[0.10] bg-white/[0.04] p-5 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#D7C18A]/40 hover:bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_40px_rgba(0,0,0,0.22)]"
                        >
                            <div className="space-y-2.5">
                                <span className="text-xs font-semibold tracking-widest text-[#D7C18A]">
                                    0{index + 1}
                                </span>
                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                    {pillar.title}
                                </h3>
                                <p className="pt-0.5 text-sm sm:text-base leading-6 text-white/80">
                                    {pillar.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Quote Banner */}
                <div className="mt-14 sm:mt-18 border-t border-white/10 pt-10 sm:pt-14 text-center">
                    <p className="mx-auto max-w-3xl text-lg italic leading-relaxed text-white/90 sm:text-xl md:text-2xl">
                        “El café es la consecuencia. La verdadera historia pertenece a quienes cuidan el territorio.”
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-[0.35em] text-[#D7C18A]">
                        SAN AGUSTÍN · HUILA · COLOMBIA
                    </p>
                </div>
            </div>
        </section>
    );
}
