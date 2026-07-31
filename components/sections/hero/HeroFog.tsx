"use client";

import { motion } from "framer-motion";

export default function HeroFog() {

    return (

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            <motion.div

                animate={{

                    x:[-180,180,-180],

                    y:[0,-25,0],

                    scale:[1,1.15,1]

                }}

                transition={{

                    duration:55,

                    repeat:Infinity,

                    ease:"linear"

                }}

                className="absolute left-[-260px] bottom-[-80px] h-[700px] w-[1200px] rounded-full"

                style={{

                    background:"radial-gradient(circle, rgba(255,255,255,.28) 0%, rgba(255,255,255,.10) 40%, transparent 75%)",

                    filter:"blur(110px)"

                }}

            />

            <motion.div

                animate={{

                    x:[220,-220,220],

                    y:[20,-15,20],

                    scale:[1.1,1,1.1]

                }}

                transition={{

                    duration:75,

                    repeat:Infinity,

                    ease:"linear"

                }}

                className="absolute right-[-420px] top-[5%] h-[760px] w-[1350px] rounded-full"

                style={{

                    background:"radial-gradient(circle, rgba(255,255,255,.18) 0%, rgba(255,255,255,.08) 45%, transparent 80%)",

                    filter:"blur(130px)"

                }}

            />

            <motion.div

                animate={{

                    x:[0,80,0],

                    opacity:[.25,.45,.25]

                }}

                transition={{

                    duration:24,

                    repeat:Infinity,

                    ease:"easeInOut"

                }}

                className="absolute left-1/3 top-1/3 h-[420px] w-[650px] rounded-full"

                style={{

                    background:"radial-gradient(circle, rgba(255,255,255,.14) 0%, transparent 70%)",

                    filter:"blur(90px)"

                }}

            />

        </div>

    );

}