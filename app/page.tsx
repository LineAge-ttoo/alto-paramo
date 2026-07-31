import Experience from "@/components/experience/Experience";

import Header from "@/components/layout/Header";

import Hero from "@/components/sections/hero/Hero";

import Territory from "@/components/sections/territory/Territory";

import Specialty from "@/components/sections/specialty/Specialty";

import Regional from "@/components/sections/regional/Regional";

import Journey from "@/components/sections/journey/Journey";

import About from "@/components/sections/About";

export default function Home() {

    return (

        <>

            <Experience />

            <div className="relative z-10">

                <Header />

                <Hero />

                <Territory />

                <Specialty />

                <Regional />

                <Journey />

                <About />

            </div>

        </>

    );

}