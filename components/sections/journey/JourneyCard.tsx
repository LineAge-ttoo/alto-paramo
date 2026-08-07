"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface JourneyCardProps {

    number: string;

    title: string;

    description: string;

    image: string;

}

export default function JourneyCard({

    number,

    title,

    description,

    image

}: JourneyCardProps) {

    return (

        <section

            className="
                journey-card
                relative
                h-screen
                min-h-[850px]
                overflow-hidden
            "

        >

            {/* Fotografía */}

            <Image

                src={image}

                alt={title}

                fill

                priority={number === "01"}

                quality={100}

                sizes="100vw"

                className="
                    journey-image
                    object-cover
                    scale-[1.08]
                    brightness-[1.12]
                    contrast-[1.04]
                    saturate-[1.10]
                    will-change-transform
                    transition-transform
                    duration-[9000ms]
                    ease-linear
                "

            />

            {/* Oscurecimiento muy sutil */}

            <div

                className="absolute inset-0"

                style={{

                    background:
                        "rgba(20,15,8,.18)"

                }}

            />

            {/* Luz cálida */}

            <div

                className="absolute inset-0"

                style={{

                    background:
                        "radial-gradient(circle at 72% 18%, rgba(224,185,110,.18), transparent 42%)"

                }}

            />

            {/* Gradiente lateral */}

            <div

                className="absolute inset-0"

                style={{

                    background:
                        "linear-gradient(to right, rgba(18,14,9,.72), rgba(18,14,9,.35) 38%, rgba(18,14,9,.08) 72%, transparent)"

                }}

            />

            {/* Gradiente inferior */}

            <div

                className="absolute inset-0"

                style={{

                    background:
                        "linear-gradient(to bottom, rgba(10,10,10,.08), transparent 25%, rgba(10,10,10,.40) 100%)"

                }}

            />

            {/* Viñeta muy ligera */}

            <div

                className="absolute inset-0"

                style={{

                    boxShadow:
                        "inset 0 0 120px rgba(0,0,0,.18)"

                }}

            />

            {/* Contenido */}

            <div className="relative z-10 flex h-full items-center">

                <div className="mx-auto w-full max-w-7xl px-8">

                    <motion.div

                        initial={{

                            opacity:0,

                            y:70

                        }}

                        whileInView={{

                            opacity:1,

                            y:0

                        }}

                        viewport={{

                            once:true,

                            amount:.45

                        }}

                        transition={{

                            duration:1.15,

                            ease:"easeOut"

                        }}

                        className="journey-content max-w-2xl"

                    >

                        <p

                            className="
                                mb-5
                                text-sm
                                tracking-[0.50em]
                                text-[#D7C18A]
                            "

                        >

                            {number}

                        </p>

                        <h2

                            className="
                                text-6xl
                                font-black
                                leading-[0.92]
                                text-white
                                md:text-7xl
                            "

                        >

                            {title}

                        </h2>

                        <p

                            className="
                                mt-8
                                text-xl
                                leading-10
                                text-white/88
                            "

                        >

                            {description}

                        </p>

                    </motion.div>

                </div>

            </div>

        </section>

    );

}