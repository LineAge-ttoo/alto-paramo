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
                h-[65vh]
                min-h-[700px]
                overflow-hidden
            "
        >

            {/* Imagen */}

            <Image
                src={image}
                alt={title}
                fill
                priority={number === "01"}
                quality={100}
                className="
                    journey-image
                    object-cover
                "
            />

            {/* Oscurecimiento */}

            <div className="absolute inset-0 bg-black/45" />

            {/* Degradado lateral */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/80
                    via-black/45
                    to-transparent
                "
            />

            {/* Contenido */}

            <div className="relative z-10 flex h-full items-center">

                <div className="mx-auto w-full max-w-7xl px-8">

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 80
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        viewport={{
                            once: true,
                            amount: 0.45
                        }}

                        transition={{
                            duration: 1,
                            ease: "easeOut"
                        }}

                        className="
                            journey-content
                            max-w-2xl
                        "

                    >

                        <p
                            className="
                                mb-4
                                text-sm
                                tracking-[0.45em]
                                text-[#D7C18A]
                            "
                        >

                            {number}

                        </p>

                        <h2
                            className="
                                text-6xl
                                font-black
                                leading-none
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
                                text-white/80
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