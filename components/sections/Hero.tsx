"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="/coffee/hero.jpg"
        alt="Alto Páramo"
        fill
        priority
        quality={100}
        className="object-cover scale-105"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div ref={heroRef} className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-8">
          <span className="mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white backdrop-blur">
            SAN AGUSTÍN · HUILA · COLOMBIA
          </span>

          <h1 className="mt-6 text-7xl font-black leading-none text-white md:text-8xl">
            Alto
            <br />
            Páramo
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/90">
            Un territorio donde el patrimonio arqueológico, el café de
            especialidad y las familias construyen una historia que merece ser
            compartida con el mundo.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-stone-900 transition duration-300 hover:scale-105">
              Explorar
            </button>

            <button className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10">
              Nuestro origen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
