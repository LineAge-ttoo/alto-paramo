"use client";

import { ExperienceProvider } from "./engine";

import AmbientEngine from "./ambient/AmbientEngine";
import CatGuide from "./cat/CatGuide";
import ParallaxEngine from "./parallax/ParallaxEngine";
import ScrollReveal from "./scroll/ScrollReveal";
import StickyEngine from "./sticky/StickyEngine";

export default function Experience(){

    return(

        <ExperienceProvider>

            <AmbientEngine/>

            <ScrollReveal/>

            <ParallaxEngine/>

            <StickyEngine/>

            <CatGuide/>

        </ExperienceProvider>

    );

}