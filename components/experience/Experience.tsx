"use client";

import { ExperienceProvider } from "./engine";

import CatGuide from "./cat/CatGuide";
import StickyEngine from "./sticky/StickyEngine";

import ExperienceEngine from "./engines/ExperienceEngine";
import SmoothScroll from "./providers/SmoothScroll";

export default function Experience() {

    return (

        <ExperienceProvider>

            {/* Scroll del Universo */}

            <SmoothScroll/>

            {/* Motores principales */}

            <ExperienceEngine/>

            <StickyEngine/>

            {/* Experiencias futuras */}

            <CatGuide/>

        </ExperienceProvider>

    );

}