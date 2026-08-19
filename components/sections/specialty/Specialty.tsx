"use client";

import SpecialtyBackground from "./SpecialtyBackground";
import SpecialtyContent from "./SpecialtyContent";

export default function Specialty() {
    return (
        <section
            id="productor"
            data-scene="specialty"
            className="
                relative
                min-h-[82svh] sm:min-h-[85svh] lg:min-h-[88svh]
                overflow-hidden
                bg-gradient-to-b from-[#0d120d] via-[#10120e] to-[#121410]
            "
        >
            <SpecialtyBackground />

            <div className="relative z-10">
                <SpecialtyContent />
            </div>
        </section>
    );
}