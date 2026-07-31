import Image from "next/image";

import HeroFog from "./HeroFog";
import HeroLight from "./HeroLight";

export default function HeroBackground() {
  return (
    <>
      <Image
        src="/coffee/hero.jpg"
        alt="Paisaje Alto Páramo"
        fill
        priority
        quality={100}
        className="hero-bg object-cover scale-105 hero-floating"
      />

      <div className="absolute inset-0 bg-black/40" />

      <HeroLight />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(219,168,77,0.28),transparent_45%)]" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,.75)]" />

      <HeroFog />
    </>
  );
}
