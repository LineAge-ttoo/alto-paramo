"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    const specialty = title === "Especial";

    const info = specialty
        ? {
            altitude: "1700–1800 msnm",
            variety: "Papayo · Bourbon Rosado",
            process: "Lavado",
            notes: "Melaza · Frutos Rojos · Cacao",
            ideal: "Filtro · V60 · Chemex"
        }
        : {
            altitude: "1600–1750 msnm",
            variety: "Castillo · Colombia",
            process: "Lavado Tradicional",
            notes: "Chocolate · Panela · Caramelo",
            ideal: "Greca · Prensa · Goteo"
        };

    return (
        <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-colors hover:border-[#D7C18A]/40"
        >
            {/* Image Stage */}
            <div className="relative h-[340px] sm:h-[420px] md:h-[460px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    quality={88}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover scale-[1.03] brightness-[1.06] contrast-[1.03] saturate-[1.06] transition-transform duration-[4000ms] group-hover:scale-[1.08]"
                />

                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle at 72% 18%, rgba(223,184,108,.16), transparent 45%)"
                    }}
                />

                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(9,9,9,0.95) 0%, rgba(9,9,9,0.2) 60%, transparent 100%)"
                    }}
                />
            </div>

            {/* Editorial Content */}
            <div className="flex flex-1 flex-col justify-between space-y-6 p-6 sm:p-8 md:p-10">
                <div className="space-y-4">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.40em] text-[#D7C18A]">
                            {subtitle}
                        </p>
                        <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                            {title}
                        </h3>
                    </div>

                    <p className="text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                        {description}
                    </p>
                </div>

                {/* Spec Specimen Grid */}
                <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/5 bg-black/20 p-4 sm:p-5">
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
                    <p className="mt-2 text-sm font-medium leading-6 text-white/90 sm:text-base">
                        {info.notes}
                    </p>
                </div>

                {/* Action CTA Button */}
                <div className="pt-2">
                    <button
                        type="button"
                        className="group/btn inline-flex items-center gap-3 rounded-full border border-[#D7C18A] px-7 py-3 text-xs sm:text-sm font-semibold tracking-wider text-[#D7C18A] transition-all duration-300 hover:bg-[#D7C18A] hover:text-stone-900"
                    >
                        <span>Descubrir esta línea</span>
                        <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
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