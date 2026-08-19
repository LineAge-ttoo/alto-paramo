"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lessons = [
    {
        id: "altitud",
        topic: "Altitud & Clima",
        question: "¿Por qué importa cultivar a 1640 msnm?",
        answer: "A mayor altura, las temperaturas nocturnas son más frescas. Esto ralentiza el ciclo de maduración del fruto, permitiendo que la planta concentre mayor densidad de azúcares naturales y desarrolle una acidez málica y cítrica mucho más fina.",
        takeaway: "Maduración lenta = Mayor complejidad y dulzor en taza."
    },
    {
        id: "variedad",
        topic: "Variedades Botánicas",
        question: "¿Qué diferencia al Papayo y al Bourbon Rosado?",
        answer: "El Bourbon Rosado es una mutación genética espontánea apreciada por sus notas florales y afrutadas con cuerpo sedoso. El Papayo es una variedad emblemática de Huila con fruto alargado que destaca por su acidez brillante y notas a frutos tropicales.",
        takeaway: "La genética define el abanico aromático potencial del cafeto."
    },
    {
        id: "lavado",
        topic: "Beneficio Húmedo",
        question: "¿Qué define a un café de proceso Lavado?",
        answer: "Tras despulpar la cereza, el grano reposa en fermentación controlada para degradar el mucílago antes de ser lavado con agua cristalina de vertiente. Este método resalta la pureza absoluta del terruño y entrega una taza transparente y limpia.",
        takeaway: "Taza límpida que expone el carácter puro de la montaña."
    },
    {
        id: "tueste",
        topic: "Perfil de Tueste",
        question: "¿Cómo influye la curva de calor?",
        answer: "El tueste de especialidad utiliza perfiles medios-claros. Acompañamos el grano mediante termodinámica de precisión para desarrollar aromas de caramelo y frutas sin llegar al sobretueste que añade amargor indeseado.",
        takeaway: "El fuego no inventa sabores: revela la historia del grano."
    },
    {
        id: "catacion",
        topic: "Evaluación Sensorial",
        question: "¿Qué evalúa un catador bajo protocolo SCA?",
        answer: "En mesas de catación calibradas, se puntúan atributos esenciales: fragancia en seco, aroma en infusión, acidez, dulzor, cuerpo, uniformidad y balance. Un café con más de 80 puntos sobre 100 califica como café de especialidad.",
        takeaway: "Ciencia sensorial que certifica la excelencia de cada lote."
    }
];

export default function Academy() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section
            id="academia"
            data-scene="coffee"
            className="relative overflow-hidden bg-[#0a0908] py-28 sm:py-36 md:py-44"
        >
            {/* Ambient lighting */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 75% 30%, rgba(215,193,138,0.06), transparent 60%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Section Title */}
                <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        CULTURA DEL CAFÉ
                    </p>
                    <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Comprender el café
                        <br />
                        para apreciarlo mejor.
                    </h2>
                    <p className="mt-8 text-base leading-8 text-white/80 sm:text-lg sm:leading-9 md:text-xl">
                        Detrás de cada taza hay principios botánicos, decisiones agrícolas y ciencia
                        sensorial. Aprende los fundamentos que hacen único al café del Macizo Colombiano.
                    </p>
                </div>

                {/* Educational Display: Specimen list on Left + Deep-Dive on Right */}
                <div className="mt-16 grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                    {/* Topic Navigation */}
                    <div className="flex gap-2.5 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 lg:flex lg:flex-col lg:col-span-4">
                        {lessons.map((item, index) => {
                            const active = index === activeTab;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setActiveTab(index)}
                                    className={`
                                        flex min-h-[52px] min-w-[200px] sm:min-w-0 items-center justify-between rounded-2xl border p-4 sm:p-5 text-left transition-all duration-300
                                        ${
                                            active
                                                ? "border-[#D7C18A] bg-[#D7C18A]/10 text-white shadow-[0_4px_20px_rgba(215,193,138,0.12)]"
                                                : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                                        }
                                    `}
                                >
                                    <div>
                                        <span
                                            className={`text-[10px] uppercase tracking-widest ${
                                                active ? "text-[#D7C18A]" : "text-white/40"
                                            }`}
                                        >
                                            LECCIÓN 0{index + 1}
                                        </span>
                                        <p className="mt-1 text-sm sm:text-base font-semibold">
                                            {item.topic}
                                        </p>
                                    </div>
                                    <span
                                        className={`text-base transition-transform duration-300 ${
                                            active ? "text-[#D7C18A] translate-x-1" : "text-white/30"
                                        }`}
                                    >
                                        →
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Lesson Detail Stage */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-8 md:p-10 backdrop-blur-2xl"
                            >
                                <div className="space-y-4">
                                    <span className="text-xs font-semibold tracking-[0.35em] text-[#D7C18A]">
                                        {lessons[activeTab].topic.toUpperCase()}
                                    </span>
                                    <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
                                        {lessons[activeTab].question}
                                    </h3>
                                    <p className="pt-2 text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
                                        {lessons[activeTab].answer}
                                    </p>
                                </div>

                                <div className="mt-8 rounded-2xl border border-[#D7C18A]/20 bg-[#D7C18A]/[0.05] p-5 sm:p-6">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                                        Idea Clave
                                    </p>
                                    <p className="mt-2 text-sm sm:text-base font-medium text-white/90">
                                        {lessons[activeTab].takeaway}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
