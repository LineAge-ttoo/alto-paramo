"use client";

import { ExperienceProvider } from "./engine";

import CatGuide from "./cat/CatGuide";
import StickyEngine from "./sticky/StickyEngine";

import ExperienceEngine from "./engines/ExperienceEngine";

export default function Experience() {

    return (

        <ExperienceProvider>

            <ExperienceEngine />

            <StickyEngine />

            <CatGuide />

        </ExperienceProvider>

    );

}