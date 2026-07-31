"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CoffeeCardProps {

    title:string;

    subtitle:string;

    description:string;

    image:string;

}

export default function CoffeeCard({

    title,

    subtitle,

    description,

    image

}:CoffeeCardProps){

    return(

        <motion.article

            whileHover={{

                y:-12,

                scale:1.02

            }}

            transition={{

                duration:.35

            }}

            className="
                overflow-hidden
                rounded-[34px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                group
            "

        >

            <div className="relative h-[560px] overflow-hidden">

                <Image

                    src={image}

                    alt={title}

                    fill

                    quality={100}

                    className="
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110
                    "

                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"/>

            </div>

            <div className="space-y-6 p-10">

                <p className="uppercase tracking-[0.35em] text-[#d7c18a]">

                    {subtitle}

                </p>

                <h3 className="text-5xl font-black text-white">

                    {title}

                </h3>

                <p className="leading-8 text-white/75">

                    {description}

                </p>

                <button

                    className="
                        mt-4
                        rounded-full
                        border
                        border-[#d7c18a]
                        px-8
                        py-3
                        text-[#d7c18a]
                        transition
                        hover:bg-[#d7c18a]
                        hover:text-[#111]
                    "

                >

                    Descubrir

                </button>

            </div>

        </motion.article>

    );

}