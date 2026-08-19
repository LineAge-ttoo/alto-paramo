"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroScrollIndicator from "./HeroScrollIndicator";
import HeroParallax from "./HeroParallax";

export default function Hero() {

    const hero = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(".hero-title",{

                y:60,

                opacity:0,

                duration:1.4,

                ease:"power3.out"

            });

            gsap.from(".hero-text",{

                y:30,

                opacity:0,

                duration:1,

                delay:.5

            });

            gsap.from(".hero-buttons",{

                y:20,

                opacity:0,

                duration:.8,

                delay:.8

            });

        },hero);

        return ()=>ctx.revert();

    },[]);

    return(

        <section

            id="hero"

            data-scene="hero"

            ref={hero}

            className="relative h-screen overflow-hidden"

        >

            <HeroParallax/>

            <HeroBackground/>

            <div className="relative z-10 flex h-full items-center">

                <HeroContent/>

            </div>

            <HeroScrollIndicator/>

        </section>

    );

}