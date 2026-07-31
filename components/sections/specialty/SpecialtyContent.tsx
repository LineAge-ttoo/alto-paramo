"use client";

import { motion } from "framer-motion";

export default function SpecialtyContent() {

    return (

        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-10">

            <motion.div

                initial={{ opacity:0, y:40 }}

                whileInView={{ opacity:1, y:0 }}

                viewport={{ once:true }}

                transition={{ duration:1 }}

                className="max-w-3xl"

            >

                <p className="mb-5 uppercase tracking-[0.35em] text-[#D7C18A]">

                    LÍNEA ESPECIAL

                </p>

                <h2 className="text-6xl font-black leading-tight text-white">

                    Cada lote expresa la identidad de una finca.

                </h2>

                <p className="mt-10 text-xl leading-10 text-white/80">

                    Nuestra línea Especial reúne microlotes seleccionados,
                    variedades diferenciadas y procesos cuidadosamente
                    controlados para resaltar el carácter único de cada
                    cosecha. No busca uniformidad; celebra el origen.

                </p>

            </motion.div>

        </div>

    );

}