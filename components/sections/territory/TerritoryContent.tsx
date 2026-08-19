"use client";

import { motion } from "framer-motion";

const footprints = [

    {
        title: "ALTITUD",
        value: "1640 msnm"
    },

    {
        title: "UBICACIÓN",
        value: "San Agustín · Huila"
    },

    {
        title: "ECOSISTEMA",
        value: "Bosque Altoandino"
    },

    {
        title: "ORIGEN",
        value: "Macizo Colombiano"
    },

    {
        title: "TEMPERATURA",
        value: "18°C promedio"
    },

    {
        title: "LLUVIA",
        value: "≈2200 mm / año"
    }

];

export default function TerritoryContent() {

    return (

        <div className="mx-auto max-w-7xl px-8 py-32">

            <div className="grid items-center gap-24 lg:grid-cols-2">

                {/* Historia */}

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

                        once:true,

                        amount:.3

                    }}

                    transition={{

                        duration:1

                    }}

                >

                    <p

                        className="
                            mb-5
                            uppercase
                            tracking-[0.45em]
                            text-[#D7C18A]
                        "

                    >

                        EL TERRITORIO

                    </p>

                    <h2

                        className="
                            text-5xl
                            font-black
                            leading-tight
                            text-white
                            md:text-7xl
                        "

                    >

                        Donde nace la esencia
                        <br />
                        de Alto Páramo.

                    </h2>

                    <p

                        className="
                            mt-10
                            text-xl
                            leading-10
                            text-white/82
                        "

                    >

                        Entre las montañas del Macizo Colombiano,
                        donde la niebla atraviesa lentamente los bosques
                        y el agua nace entre la roca volcánica, comienza
                        una historia que lleva generaciones escribiéndose.

                    </p>

                    <p

                        className="
                            mt-8
                            text-lg
                            leading-9
                            text-white/70
                        "

                    >

                        Aquí el café no domina el paisaje.

                        <br /><br />

                        Forma parte de él.

                        Cada árbol, cada quebrada y cada cambio de luz
                        influyen silenciosamente en el carácter de cada
                        cosecha.

                    </p>

                </motion.div>

                {/* Huellas */}

                <motion.div

                    initial={{

                        opacity:0,

                        x:40

                    }}

                    whileInView={{

                        opacity:1,

                        x:0

                    }}

                    viewport={{

                        once:true,

                        amount:.25

                    }}

                    transition={{

                        duration:1.1

                    }}

                >

                    <p

                        className="
                            mb-10
                            uppercase
                            tracking-[0.35em]
                            text-[#D7C18A]
                        "

                    >

                        HUELLAS DEL TERRITORIO

                    </p>

                    <div className="grid gap-5 sm:grid-cols-2">

                        {

                            footprints.map((item,index)=>(

                                <motion.div

                                    key={item.title}

                                    initial={{

                                        opacity:0,

                                        y:25

                                    }}

                                    whileInView={{

                                        opacity:1,

                                        y:0

                                    }}

                                    viewport={{

                                        once:true

                                    }}

                                    transition={{

                                        delay:index*.08,

                                        duration:.7

                                    }}

                                    className="
                                        rounded-3xl
                                        border
                                        border-white/10
                                        bg-black/15
                                        p-6
                                        backdrop-blur-xl
                                    "

                                >

                                    <p

                                        className="
                                            text-xs
                                            tracking-[0.35em]
                                            text-[#D7C18A]
                                        "

                                    >

                                        {item.title}

                                    </p>

                                    <p

                                        className="
                                            mt-3
                                            text-2xl
                                            font-semibold
                                            text-white
                                        "

                                    >

                                        {item.value}

                                    </p>

                                </motion.div>

                            ))

                        }

                    </div>

                </motion.div>

            </div>

            {/* Segunda parte */}

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

                    once:true,

                    amount:.2

                }}

                transition={{

                    duration:1.2

                }}

                className="
                    mx-auto
                    mt-36
                    max-w-5xl
                    text-center
                "

            >

                <p

                    className="
                        text-3xl
                        leading-relaxed
                        text-white/90
                    "

                >

                    El Macizo Colombiano es uno de los territorios
                    donde nacen importantes cuencas hidrográficas del país.

                    <br /><br />

                    La combinación entre altura, humedad,
                    bosque altoandino y tradición agrícola
                    convierte este paisaje en un lugar excepcional
                    para cultivar cafés con identidad propia.

                </p>

                <div

                    className="
                        mx-auto
                        mt-20
                        h-px
                        w-32
                        bg-[#D7C18A]/40
                    "

                />

                <p

                    className="
                        mx-auto
                        mt-16
                        max-w-3xl
                        text-2xl
                        italic
                        leading-relaxed
                        text-white/80
                    "

                >

                    “Antes de conocer el café,
                    primero hay que comprender
                    el lugar que lo hace posible.”

                </p>

            </motion.div>

        </div>

    );

}