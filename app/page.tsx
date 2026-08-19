import Experience from "@/components/experience/Experience";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/hero/Hero";
import Divider from "@/components/sections/divider/Divider";
import Territory from "@/components/sections/territory/Territory";
import Specialty from "@/components/sections/specialty/Specialty";
import CoffeeLines from "@/components/sections/coffee-lines/CoffeeLines";
import Journey from "@/components/sections/journey/Journey";
import Traceability from "@/components/sections/traceability/Traceability";
import Academy from "@/components/sections/academy/Academy";
import SensoryExperience from "@/components/sections/experience-preview/SensoryExperience";
import Collection from "@/components/sections/collection/Collection";
import Guardians from "@/components/sections/guardians/Guardians";
import DigitalEcosystem from "@/components/sections/digital/DigitalEcosystem";
import Contact from "@/components/sections/contact/Contact";

export default function Home() {
    return (
        <>
            {/* Global Cinematic Experience Engines */}
            <Experience />

            {/* Main Platform Stage */}
            <div className="relative z-10">
                <Header />

                {/* 1. Hero */}
                <Hero />

                {/* 2. Interludio */}
                <Divider />

                {/* 3. Territorio */}
                <Territory />

                {/* 4. Personas / Productor */}
                <Specialty />

                {/* 5. Dos Expresiones: Specialty y Regional */}
                <CoffeeLines />

                {/* 6. Journey: Del Fruto a la Taza (9 etapas editoriales) */}
                <Journey />

                {/* 7. Trazabilidad de Origen */}
                <Traceability />

                {/* 8. Cultura y Academia */}
                <Academy />

                {/* 9. Descriptores y Experiencia Sensorial */}
                <SensoryExperience />

                {/* 10. Empaque, Materia e Identidad */}
                <Collection />

                {/* 11. Guardianes del Territorio */}
                <Guardians />

                {/* 12. Alto Páramo Digital (Puente a la App) */}
                <DigitalEcosystem />

                {/* 13. Contacto Directo */}
                <Contact />

                {/* 14. Footer */}
                <Footer />
            </div>
        </>
    );
}