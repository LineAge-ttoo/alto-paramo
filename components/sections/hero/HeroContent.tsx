import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
      <span className="hero-location inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-md sm:px-5 sm:py-2 sm:text-xs">
        SAN AGUSTÍN · HUILA · COLOMBIA
      </span>

      <h1 className="hero-title mt-6 max-w-5xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:mt-8 sm:text-6xl md:text-7xl lg:text-8xl sm:leading-[0.95]">
        El origen
        <br />
        tiene memoria.
      </h1>

      <p className="hero-text mt-6 max-w-2xl text-base leading-8 text-white/85 sm:mt-8 sm:text-lg sm:leading-9 md:text-xl">
        Alto Páramo conecta paisaje, conocimiento y café para revelar la riqueza
        del Macizo Colombiano mediante dos expresiones:
        <span className="font-semibold text-white">
          {" "}
          Specialty Coffee
        </span> y <span className="font-semibold text-white">Regional.</span>
      </p>

      <HeroButtons />
    </div>
  );
}
