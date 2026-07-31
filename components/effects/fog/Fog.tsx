"use client";

import { motion } from "framer-motion";

export default function Fog() {

    return (

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            <motion.div

                animate={{

                    x:[-250,250,-250],

                    y:[0,-30,0],

                    scale:[1,1.12,1]

                }}

                transition={{

                    duration:65,

                    repeat:Infinity,

                    ease:"linear"

                }}

                className="absolute -left-80 top-10 h-[700px] w-[1200px] rounded-full blur-[170px]"

                style={{

                    background:"rgba(255,255,255,.07)"

                }}

            />

            <motion.div

                animate={{

                    x:[250,-180,250],

                    y:[20,-20,20],

                    scale:[1.1,1,1.1]

                }}

                transition={{

                    duration:90,

                    repeat:Infinity,

                    ease:"linear"

                }}

                className="absolute right-[-500px] bottom-[-120px] h-[850px] w-[1400px] rounded-full blur-[220px]"

                style={{

                    background:"rgba(215,193,138,.05)"

                }}

            />

        </div>

    );

}