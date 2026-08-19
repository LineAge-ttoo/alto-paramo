"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {

    children: ReactNode;

    delay?: number;

    duration?: number;

    y?: number;

    x?: number;

    once?: boolean;

    amount?: number;

    className?: string;

}

export default function Reveal({

    children,

    delay = 0,

    duration = 1,

    y = 35,

    x = 0,

    once = true,

    amount = .25,

    className = ""

}: RevealProps){

    return(

        <motion.div

            initial={{

                opacity:0,

                y,

                x

            }}

            whileInView={{

                opacity:1,

                y:0,

                x:0

            }}

            viewport={{

                once,

                amount

            }}

            transition={{

                delay,

                duration,

                ease:[0.22,1,0.36,1]

            }}

            className={className}

        >

            {children}

        </motion.div>

    );

}