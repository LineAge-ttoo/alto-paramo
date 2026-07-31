"use client";

import JourneyViewport from "./JourneyViewport";
import JourneyEngine from "./JourneyEngine";
import CoffeeBranch from "./CoffeeBranch";

import { steps } from "./data";
import { useJourneyStore } from "./journeyStore";

export default function Journey() {

    const active = useJourneyStore((state)=>state.active);

    return(

        <section

            data-scene="journey"

            className="relative bg-[#090909]"

        >

            <JourneyEngine/>

            <CoffeeBranch

                active={active}

                total={steps.length}

            />

            <JourneyViewport/>

        </section>

    );

}