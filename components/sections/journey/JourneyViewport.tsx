"use client";

import JourneyCard from "./JourneyCard";
import { steps } from "./data";

export default function JourneyViewport() {
    return (
        <div className="relative overflow-hidden bg-[#090909]">
            {steps.map((step) => (
                <JourneyCard key={step.id} {...step} />
            ))}
        </div>
    );
}