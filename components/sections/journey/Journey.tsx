"use client";

import JourneyViewport from "./JourneyViewport";
import JourneyEngine from "./JourneyEngine";
import CoffeeBranch from "./CoffeeBranch";

export default function Journey() {
    return (
        <section
            id="journey"
            data-scene="journey"
            className="relative bg-[#090909]"
        >
            {/* ScrollTrigger Engine for step tracking & parallax */}
            <JourneyEngine />

            {/* Floating Editorial Step Indicator */}
            <CoffeeBranch />

            {/* Main Stage Viewport */}
            <JourneyViewport />
        </section>
    );
}