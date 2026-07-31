"use client";

import SpecialtyBackground from "./SpecialtyBackground";
import SpecialtyContent from "./SpecialtyContent";

export default function Specialty() {

    return (

        <section className="relative min-h-screen overflow-hidden bg-[#070707]">

            <SpecialtyBackground/>

            <div className="relative z-10">

                <SpecialtyContent/>

            </div>

        </section>

    );

}