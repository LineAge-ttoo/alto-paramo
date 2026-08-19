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

            whileHover={{

                y: -10,

                scale: 1.01

            }}

            transition={{

                duration: .45

            }}

            className="
                group
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-black/20
                backdrop-blur-xl
            "

        >

            {/* Imagen */}

            <div className="relative h-[540px] overflow-hidden">

                <Image

                    src={image}

                    alt={title}

                    fill

                    quality={88}

                    sizes="(max-width: 1024px) 100vw, 50vw"

                    className="
                        object-cover
                        scale-[1.04]
                        brightness-[1.08]
                        contrast-[1.03]
                        saturate-[1.08]
                        transition-all
                        duration-[5000ms]
                        group-hover:scale-[1.10]
                    "

                />

                {/* Luz */}

                <div

                    className="absolute inset-0"

                    style={{

                        background:
                            "radial-gradient(circle at 72% 18%, rgba(223,184,108,.16), transparent 45%)"

                    }}

                />

                {/* Degradado */}

                <div

                    className="absolute inset-0"

                    style={{

                        background:
                            "linear-gradient(to top, rgba(12,10,8,.90), rgba(12,10,8,.18), transparent)"

                    }}

                />

            </div>

            {/* Contenido */}

            <div className="space-y-8 p-10">

                <div>

                    <p

                        className="
                            uppercase
                            tracking-[0.40em]
                            text-[#D7C18A]
                            text-xs
                        "

                    >

                        {subtitle}

                    </p>

                    <h3

                        className="
                            mt-5
                            text-5xl
                            font-black
                            text-white
                        "

                    >

                        {title}

                    </h3>

                </div>

                <p

                    className="
                        leading-8
                        text-white/75
                    "

                >

                    {description}

                </p>

                {/* Información */}

                <div

                    className="
                        grid
                        grid-cols-2
                        gap-5
                        pt-2
                    "

                >

                    <Info

                        title="ALTITUD"

                        value={info.altitude}

                    />

                    <Info

                        title="VARIEDAD"

                        value={info.variety}

                    />

                    <Info

                        title="PROCESO"

                        value={info.process}

                    />

                    <Info

                        title="PREPARACIÓN"

                        value={info.ideal}

                    />

                </div>

                {/* Perfil */}

                <div

                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-5
                    "

                >

                    <p

                        className="
                            text-xs
                            tracking-[0.30em]
                            text-[#D7C18A]
                        "

                    >

                        PERFIL SENSORIAL

                    </p>

                    <p

                        className="
                            mt-3
                            leading-8
                            text-white/80
                        "

                    >

                        {info.notes}

                    </p>

                </div>

                {/* Botón */}

                <button

                    className="
                        group/button
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-[#D7C18A]
                        px-8
                        py-3
                        text-[#D7C18A]
                        transition-all
                        duration-500
                        hover:bg-[#D7C18A]
                        hover:text-[#111]
                    "

                >

                    Descubrir esta línea

                    <span

                        className="
                            transition-transform
                            duration-500
                            group-hover/button:translate-x-1
                        "

                    >

                        →

                    </span>

                </button>

            </div>

        </motion.article>

    );

}

interface InfoProps {

    title: string;

    value: string;

}

function Info({

    title,

    value

}: InfoProps) {

    return (

        <div>

            <p

                className="
                    text-[11px]
                    tracking-[0.30em]
                    text-[#D7C18A]
                "

            >

                {title}

            </p>

            <p

                className="
                    mt-2
                    text-white/85
                    leading-7
                "

            >

                {value}

            </p>

        </div>

    );

}