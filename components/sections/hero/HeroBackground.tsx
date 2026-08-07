import Image from "next/image";

import Depth from "@/components/experience/Depth";

import HeroFog from "./HeroFog";
import HeroLight from "./HeroLight";

import CoffeeParticles from "@/components/effects/coffee/CoffeeParticles";
import HeroTransition from "@/components/effects/transition/HeroTransition";

export default function HeroBackground() {

    return (

        <>

            {/* Fotografía principal (NO MODIFICAR) */}

            <Depth layer="background">

                <Image
                    src="/coffee/hero.jpg"
                    alt="Paisaje Alto Páramo"
                    fill
                    priority
                    quality={100}
                    className="
                        hero-bg
                        hero-floating
                        object-cover
                        scale-105
                        brightness-[1.12]
                        contrast-[1.02]
                        saturate-[1.08]
                    "
                />

            </Depth>

            {/* Oscurecimiento suave */}

            <div className="absolute inset-0 bg-black/15"/>

            {/* Luz principal */}

            <Depth layer="light">

                <HeroLight/>

            </Depth>

            {/* Luz cálida */}

            <div

                className="absolute inset-0"

                style={{

                    background:
                        "radial-gradient(circle at 72% 22%, rgba(225,190,110,.28), transparent 42%)"

                }}

            />

            {/* Partículas */}

            <Depth layer="particles">

                <CoffeeParticles/>

            </Depth>

            {/* Niebla */}

            <Depth layer="fog">

                <HeroFog/>

            </Depth>

            {/* Gradiente */}

            <div

                className="absolute inset-0"

                style={{

                    background:
                        "linear-gradient(to top, rgba(0,0,0,.70), rgba(0,0,0,.10) 45%, transparent)"

                }}

            />

            {/* Viñeta */}

            <div

                className="absolute inset-0"

                style={{

                    boxShadow:
                        "inset 0 0 90px rgba(0,0,0,.28)"

                }}

            />

            <HeroTransition/>

        </>

    );

}