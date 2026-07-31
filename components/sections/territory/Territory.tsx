"use client";

import TerritoryBackground from "./TerritoryBackground";
import TerritoryContent from "./TerritoryContent";

export default function Territory() {

    return (

        <section

            data-scene="territory"

            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#090909]
            "

        >

            <TerritoryBackground/>

            <div className="relative z-10">

                <TerritoryContent/>

            </div>

        </section>

    );

}