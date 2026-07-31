"use client";

import JourneyCard from "./JourneyCard";
import { steps } from "./data";

export default function JourneyViewport() {

    return (

        <section
            className="
                relative
                overflow-hidden
                bg-[#090909]
            "
        >

            {steps.map((step) => (

                <JourneyCard

                    key={step.id}

                    number={step.number}

                    title={step.title}

                    description={step.description}

                    image={step.image}

                />

            ))}

        </section>

    );

}