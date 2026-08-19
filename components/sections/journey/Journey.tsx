"use client";

import JourneyViewport from "./JourneyViewport";
import JourneyEngine from "./JourneyEngine";

export default function Journey() {
    return (
        <section
            id="journey"
            data-scene="journey"
            className="relative overflow-hidden bg-gradient-to-b from-[#141712] via-[#161b13] to-[#161c14] py-18 sm:py-22 md:py-26 lg:py-28"
        >
            {/* Ambient atmospheric light pools */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 80% 20%, rgba(215,193,138,0.08), transparent 60%), radial-gradient(circle at 20% 80%, rgba(91,122,73,0.07), transparent 55%)"
                }}
            />

            {/* ScrollTrigger Engine for subtle scene entrance */}
            <JourneyEngine />

            {/* Main Interactive Station Viewport */}
            <JourneyViewport />
        </section>
    );
}