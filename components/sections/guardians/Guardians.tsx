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
            className="relative overflow-hidden bg-gradient-to-b from-[#181a14] via-[#141a12] to-[#161615] py-28 sm:py-36 md:py-44"
        >
            {/* Background botanical deep forest & mountain mist light pools */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 65% 35%, rgba(91,122,73,0.09), transparent 60%), radial-gradient(circle at 25% 65%, rgba(215,193,138,0.07), transparent 55%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        GUARDIANES DEL TERRITORIO
                    </p>
                    <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Cuidar el lugar
                        <br />
                        que hace posible el café.
                    </h2>
                    <p className="mt-8 text-base leading-8 text-white/80 sm:text-lg sm:leading-9 md:text-xl">
                        Alto Páramo nace en San Agustín, Huila, como una iniciativa viva que integra el
                        patrimonio arqueológico, la biodiversidad del bosque altoandino y la dignidad de
                        las familias productoras.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
                    {guardiansPillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#D7C18A]/35 hover:bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_16px_40px_rgba(0,0,0,0.25)]"
                        >
                            <div className="space-y-3">
                                <span className="text-xs font-semibold tracking-widest text-[#D7C18A]">
                                    0{index + 1}
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold text-white">
                                    {pillar.title}
                                </h3>
                                <p className="pt-1 text-sm sm:text-base leading-7 text-white/75">
                                    {pillar.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Quote Banner */}
                <div className="mt-24 border-t border-white/10 pt-16 text-center sm:mt-32 sm:pt-20">
                    <p className="mx-auto max-w-3xl text-xl italic leading-relaxed text-white/90 sm:text-2xl md:text-3xl">
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
