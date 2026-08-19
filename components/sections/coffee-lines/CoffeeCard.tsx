"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CoffeeCardProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

export default function CoffeeCard({
    title,
    subtitle,
    description,
    image
}: CoffeeCardProps) {
    const [expanded, setExpanded] = useState(false);
    const specialty = title === "Especial";

    const info = specialty
        ? {
            altitude: "1700–1800 msnm",
            variety: "Papayo · Bourbon Rosado",
            process: "Lavado",
            notes: "Melaza · Frutos Rojos · Cacao",
            ideal: "Filtro · V60 · Chemex",
            focusTitle: "Detalle de Lote Especial",
            focusText:
                "Cultivado en las cotas más altas con selección manual grano a grano. Su beneficio lavado controlado resalta una acidez brillante y notas afrutadas complejas.",
            servingNote:
                "Recomendado en métodos de vertido (V60, Chemex) con ratio 1:15 a 1:16 para apreciar la nitidez de sus capas aromáticas."
        }
        : {
            altitude: "1600–1750 msnm",
            variety: "Castillo · Colombia",
            process: "Lavado Tradicional",
            notes: "Chocolate · Panela · Caramelo",
            ideal: "Greca · Prensa · Goteo",
            focusTitle: "Detalle de Origen Regional",
            focusText:
                "Un homenaje a la tradición cafetera del Macizo Colombiano. Perfil dulce, achocolatado y balanceado, diseñado para el consumo diario sin perder la identidad territorial.",
            servingNote:
                "Ideal en preparaciones cotidianas como greca, prensa francesa o cafetera de filtro con molienda media."
        };

    return (
        <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-colors hover:border-[#D7C18A]/40"
        >
            {/* Canonical Product Artwork Stage */}
            <div className="relative h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden bg-[#0c0e0b]/80 p-4 sm:p-6 flex items-center justify-center">
                <Image
                    src={image}
                    alt={`${title} — ${subtitle}`}
                    fill
                    quality={92}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-2 sm:p-4 transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 50%, rgba(215,193,138,0.06), transparent 70%)"
                    }}
                />
            </div>

            {/* Editorial Content */}
            <div className="flex flex-1 flex-col justify-between space-y-5 p-6 sm:p-8 md:p-9">
                <div className="space-y-4">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.40em] text-[#D7C18A]">
                            {subtitle}
                        </p>
                        <h3 className="mt-2.5 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                            {title}
                        </h3>
                    </div>

                    <p className="text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                        {description}
                    </p>
                </div>

                {/* Spec Specimen Grid */}
                <div className="grid grid-cols-2 gap-3.5 rounded-2xl border border-white/5 bg-black/20 p-4 sm:p-5">
                    <Info title="ALTITUD" value={info.altitude} />
                    <Info title="VARIEDAD" value={info.variety} />
                    <Info title="PROCESO" value={info.process} />
                    <Info title="PREPARACIÓN" value={info.ideal} />
                </div>

                {/* Perfil Sensorial */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-[#D7C18A]">
                        PERFIL SENSORIAL
                    </p>
                    <p className="mt-1.5 text-sm font-medium leading-6 text-white/90 sm:text-base">
                        {info.notes}
                    </p>
                </div>

                {/* Smooth Expandable In-Card Specimen Detail */}
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden"
                        >
                            <div className="space-y-3.5 rounded-2xl border border-[#D7C18A]/20 bg-[#D7C18A]/[0.05] p-4 sm:p-5 backdrop-blur-md">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-[#D7C18A]">
                                        {info.focusTitle}
                                    </p>
                                    <p className="mt-1.5 text-xs sm:text-sm leading-6 text-white/80">
                                        {info.focusText}
                                    </p>
                                </div>
                                <div className="border-t border-white/10 pt-3">
                                    <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                                        Ritual Sugerido
                                    </p>
                                    <p className="mt-1 text-xs sm:text-sm leading-5 text-white/75">
                                        {info.servingNote}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Action CTA Button */}
                <div className="pt-1">
                    <button
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Ocultar" : "Descubrir"} detalles de línea ${title}`}
                        className="group/btn inline-flex items-center gap-3 rounded-full border border-[#D7C18A] px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider text-[#D7C18A] transition-all duration-300 hover:bg-[#D7C18A] hover:text-stone-900 focus:outline-none"
                    >
                        <span>{expanded ? "Ocultar detalle" : "Descubrir esta línea"}</span>
                        <span
                            className={`transition-transform duration-300 ${
                                expanded ? "rotate-90" : "group-hover/btn:translate-x-1"
                            }`}
                        >
                            →
                        </span>
                    </button>
                </div>
            </div>
        </motion.article>
    );
}

interface InfoProps {
    title: string;
    value: string;
}

function Info({ title, value }: InfoProps) {
    return (
        <div>
            <p className="text-[10px] uppercase tracking-[0.30em] text-[#D7C18A]/80">
                {title}
            </p>
            <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed text-white/85">
                {value}
            </p>
        </div>
    );
}