"use client";

import TerritoryParticles from "@/components/effects/ambient/TerritoryParticles";

export default function SpecialtyBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Living Territorial Atmosphere Background (Forest green + mineral paper + warm amber) */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, #0e140d 0%, #151c13 50%, #121710 100%)"
                }}
            />

            {/* Ambient Lighting Pools */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 18% 28%, rgba(91,122,73,0.14), transparent 55%), radial-gradient(circle at 82% 58%, rgba(215,193,138,0.11), transparent 50%), radial-gradient(circle at 50% 92%, rgba(180,131,86,0.08), transparent 60%)"
                }}
            />

            {/* Living Ambient Territory Particles (pollen, moisture, dust) */}
            <TerritoryParticles density="medium" />

            {/* Subtle scene overlay transition */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(14,20,13,0.5) 0%, transparent 35%, transparent 75%, rgba(18,23,16,0.6) 100%)"
                }}
            />
        </div>
    );
}