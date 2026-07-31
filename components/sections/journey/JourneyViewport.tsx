"use client";

import JourneyCard from "./JourneyCard";
import { steps } from "./data";

export default function JourneyViewport() {

    return (

        <>

            {steps.map((step) => (

                <JourneyCard

                    key={step.id}

                    number={step.number}

                    title={step.title}

                    description={step.description}

                    image={step.image}

                />

            ))}

        </>

    );

}