"use client";

import { motion } from "framer-motion";

export default function TerritoryContent() {

    return (

        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-10">

            <motion.div

                initial={{
                    opacity:0,
                    y:40
                }}

                whileInView={{
                    opacity:1,
                    y:0
                }}

                viewport={{
                    once:true
                }}

                transition={{
                    duration:1
                }}

                className="max-w-3xl"

            >

                <p
                    className="
                        mb-5
                        uppercase
                        tracking-[0.35em]
                        text-[#D7C18A]
                    "
                >
                    EL TERRITORIO
                </p>

                <h2
                    className="
                        text-6xl
                        font-black
                        leading-tight
                        text-white
                    "
                >
                    Donde nace la esencia de Alto Páramo.
                </h2>

                <p
                    className="
                        mt-10
                        text-xl
                        leading-10
                        text-white/80
                    "
                >
                    Entre las montañas del Macizo Colombiano,
                    el patrimonio arqueológico, la biodiversidad
                    y la tradición cafetera convergen para crear
                    un origen irrepetible. Aquí comienza la historia
                    de nuestras dos líneas de café: Especial y Regional.
                </p>

            </motion.div>

        </div>

    );

}