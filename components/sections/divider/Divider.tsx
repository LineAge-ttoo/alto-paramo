"use client";

import { motion } from "framer-motion";

export default function Divider() {

    return (

        <section className="relative h-[30vh] overflow-hidden bg-[#090909]">

            <motion.div

                initial={{ opacity:0 }}

                whileInView={{ opacity:1 }}

                transition={{ duration:2 }}

                className="absolute inset-0"

            >

                <div

                    className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"

                    style={{

                        background:

                            "linear-gradient(to bottom, transparent, rgba(183,148,79,.75), transparent)"

                    }}

                />

            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">

                <motion.div

                    initial={{

                        opacity:0,

                        y:25

                    }}

                    whileInView={{

                        opacity:1,

                        y:0

                    }}

                    transition={{

                        duration:1.5

                    }}

                >

                    <p

                        className="text-center text-lg uppercase tracking-[0.45em] text-[#d7c18a]"

                    >

                        DEL ORIGEN NACE CADA TAZA

                    </p>

                </motion.div>

            </div>

        </section>

    );

}