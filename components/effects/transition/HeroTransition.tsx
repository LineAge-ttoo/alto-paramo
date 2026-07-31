"use client";

import { motion } from "framer-motion";

export default function HeroTransition() {

    return (

        <div className="absolute inset-x-0 bottom-0 h-[45vh] overflow-hidden pointer-events-none">

            <motion.div

                animate={{
                    y:[0,-35,0],
                    opacity:[0.25,0.5,0.25]
                }}

                transition={{
                    duration:18,
                    repeat:Infinity,
                    ease:"easeInOut"
                }}

                className="absolute inset-0"

                style={{
                    background:
                        "linear-gradient(to top, rgba(9,9,9,1) 0%, rgba(9,9,9,.85) 25%, rgba(9,9,9,.35) 60%, transparent 100%)"
                }}

            />

            <motion.div

                animate={{
                    x:[-120,120,-120]
                }}

                transition={{
                    duration:42,
                    repeat:Infinity,
                    ease:"linear"
                }}

                className="absolute bottom-[-180px] left-[-220px] h-[650px] w-[1400px] rounded-full"

                style={{
                    background:
                        "radial-gradient(circle, rgba(255,255,255,.12), transparent 70%)",
                    filter:"blur(120px)"
                }}

            />

        </div>

    );

}