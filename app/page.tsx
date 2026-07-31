import Experience from "@/components/experience/Experience";

import Header from "@/components/layout/Header";

import Hero from "@/components/sections/hero/Hero";

import Divider from "@/components/sections/divider/Divider";

import Territory from "@/components/sections/territory/Territory";

import Specialty from "@/components/sections/specialty/Specialty";

import CoffeeLines from "@/components/sections/coffee-lines/CoffeeLines";

import Journey from "@/components/sections/journey/Journey";

import About from "@/components/sections/About";

export default function Home() {

    return (

        <>

            <Experience/>

            <div className="relative z-10">

                <Header/>

                <Hero/>

                <Divider/>

                <Territory/>

                <Specialty/>

                <CoffeeLines/>

                <Journey/>

                <About/>

            </div>

        </>

    );

}