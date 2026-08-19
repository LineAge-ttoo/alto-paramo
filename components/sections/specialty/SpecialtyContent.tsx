"use client";

import { motion } from "framer-motion";

const producerData = [

    {
        title:"ORIGEN",
        value:"San Agustín · Huila"
    },

    {
        title:"ALTITUD",
        value:"1600–1800 msnm"
    },

    {
        title:"VARIEDADES",
        value:"Papayo · Bourbon Rosado"
    },

    {
        title:"COSECHA",
        value:"Selección Manual"
    },

    {
        title:"PROCESO",
        value:"Lavado y controlado"
    },

    {
        title:"FILOSOFÍA",
        value:"Calidad antes que cantidad"
    }

];

export default function SpecialtyContent(){

    return(

        <div className="mx-auto max-w-7xl px-8 py-36">

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
                            uppercase
                            tracking-[0.45em]
                            text-[#D7C18A]
                        "

                    >

                        EL PRODUCTOR

                    </p>

                    <h2

                        className="
                            mt-6
                            text-5xl
                            font-black
                            leading-tight
                            text-white
                            md:text-7xl
                        "

                    >

                        Cada lote
                        <br/>
                        comienza con
                        una decisión.

                    </h2>

                    <p

                        className="
                            mt-10
                            text-xl
                            leading-10
                            text-white/82
                        "

                    >

                        Antes de convertirse en una bebida,
                        el café es una sucesión de decisiones
                        tomadas por personas que conocen
                        profundamente su territorio.

                    </p>

                    <p

                        className="
                            mt-8
                            text-lg
                            leading-9
                            text-white/70
                        "

                    >

                        Elegir únicamente las cerezas maduras,
                        esperar el momento adecuado para cosechar,
                        respetar el ritmo del clima y comprender
                        cada planta son acciones que no pueden
                        automatizarse.

                        <br/><br/>

                        Cada cosecha es diferente porque
                        el territorio nunca deja de cambiar.

                    </p>

                </motion.div>

                {/* Ficha */}

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

                        IDENTIDAD DEL LOTE

                    </p>

                    <div className="grid gap-5">

                        {

                            producerData.map((item,index)=>(

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
                                        flex
                                        items-center
                                        justify-between
                                        rounded-3xl
                                        border
                                        border-white/10
                                        bg-black/15
                                        px-8
                                        py-6
                                        backdrop-blur-xl
                                    "

                                >

                                    <span

                                        className="
                                            tracking-[0.25em]
                                            text-[#D7C18A]
                                            text-sm
                                        "

                                    >

                                        {item.title}

                                    </span>

                                    <span

                                        className="
                                            text-white
                                            text-lg
                                            font-medium
                                        "

                                    >

                                        {item.value}

                                    </span>

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
                    y:50
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

                    Un café de especialidad no nace
                    cuando se tuesta.

                    <br/><br/>

                    Nace mucho antes.

                    Cuando alguien decide esperar
                    un día más para cosechar una cereza
                    que aún no está lista.

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
                        mt-16
                        text-2xl
                        italic
                        leading-relaxed
                        text-white/80
                    "

                >

                    “El café es la consecuencia.

                    <br/>

                    La verdadera historia pertenece
                    a quienes cuidan el territorio.”

                </p>

            </motion.div>

        </div>

    );

}