"use client";

import Image from "next/image";

import Depth from "@/components/experience/Depth";

interface SectionShellProps {

    image:string;

    alt:string;

    children:React.ReactNode;

    overlay?:number;

}

export default function SectionShell({

    image,

    alt,

    children,

    overlay=.28

}:SectionShellProps){

    return(

        <>

            {/* Fotografía */}

            <Depth layer="background">

                <Image

                    src={image}

                    alt={alt}

                    fill

                    quality={100}

                    className="
                        object-cover
                        scale-105
                        brightness-[1.08]
                        contrast-[1.03]
                        saturate-[1.05]
                        transition-transform
                        duration-[6000ms]
                    "

                />

            </Depth>

            {/* Oscurecimiento */}

            <div

                className="absolute inset-0"

                style={{

                    background:`rgba(0,0,0,${overlay})`

                }}

            />

            {/* Luz ambiental */}

            <div

                className="absolute inset-0"

                style={{

                    background:
                    "radial-gradient(circle at 70% 20%, rgba(219,183,102,.10), transparent 45%)"

                }}

            />

            {/* Gradiente superior */}

            <div

                className="absolute inset-0"

                style={{

                    background:
                    "linear-gradient(to bottom, rgba(8,8,8,.35), transparent 35%, rgba(8,8,8,.45) 100%)"

                }}

            />

            {/* Contenido */}

            <div className="relative z-10">

                {children}

            </div>

        </>

    );

}