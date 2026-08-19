"use client";

import JourneyViewport from "./JourneyViewport";
import JourneyEngine from "./JourneyEngine";

export default function Journey() {
    return (
        <section
            id="journey"
            data-scene="journey"
            className="relative overflow-hidden bg-[#090908] py-24 sm:py-32 md:py-36"
        >
            {/* ScrollTrigger Engine for subtle scene entrance */}
            <JourneyEngine />

            {/* Main Interactive Station Viewport */}
            <JourneyViewport />
        </section>
    );
}