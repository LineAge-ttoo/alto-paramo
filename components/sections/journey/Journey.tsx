"use client";

import { useState } from "react";

import JourneyViewport from "./JourneyViewport";
import JourneyEngine from "./JourneyEngine";
import CoffeeBranch from "./CoffeeBranch";

import { steps } from "./data";

export default function Journey() {

    const [active] = useState(0);

    return (

        <section

            id="journey"

            data-scene="journey"

            className="relative bg-[#090909]"

        >

            <JourneyEngine />

            <CoffeeBranch

                active={active}

                total={steps.length}

            />

            <JourneyViewport />

        </section>

    );

}