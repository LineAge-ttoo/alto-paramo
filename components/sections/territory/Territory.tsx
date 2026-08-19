"use client";

import TerritoryBackground from "./TerritoryBackground";
import TerritoryContent from "./TerritoryContent";

export default function Territory() {
    return (
        <section
            id="territorio"
            data-scene="territory"
            className="
                relative
                min-h-[82svh] sm:min-h-[85svh] lg:min-h-[88svh]
                overflow-hidden
                bg-gradient-to-b from-[#0f140e] via-[#0e120c] to-[#0d120d]
            "
        >
            <TerritoryBackground />

            <div className="relative z-10">
                <TerritoryContent />
            </div>
        </section>
    );
}