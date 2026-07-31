import Image from "next/image";

import HeroFog from "./HeroFog";
import HeroLight from "./HeroLight";

import CoffeeParticles from "@/components/effects/coffee/CoffeeParticles";
import HeroTransition from "@/components/effects/transition/HeroTransition";

export default function HeroBackground() {

    return(

        <>

            <Image

                data-depth="0.22"

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
                    brightness-[1.08]
                    contrast-[1.03]
                    saturate-[1.08]
                "

            />

            <div

                data-depth="0.08"

                className="absolute inset-0"

                style={{

                    background:
                    "rgba(var(--scene-overlay-color), var(--scene-overlay-opacity))"

                }}

            />

            <div data-depth="0.04">

                <HeroLight/>

            </div>

            <div data-depth="0.12">

                <CoffeeParticles/>

            </div>

            <div data-depth="0.06">

                <HeroFog/>

            </div>

            <div

                className="absolute inset-0"

                style={{

                    background:
                    "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.05) 45%, transparent)"

                }}

            />

            <HeroTransition/>

        </>

    );

}