"use client";

import { useState } from "react";

import "./journey.css";

import JourneyViewport from "./JourneyViewport";
import JourneyProgress from "./JourneyProgress";
import JourneyEngine from "./JourneyEngine";

export default function Journey(){

    const [active]=useState(0);

    return(

        <section
            className="
                relative
                bg-[#090909]
            "
        >

            <JourneyEngine/>

            <JourneyProgress active={active}/>

            <JourneyViewport/>

        </section>

    );

}