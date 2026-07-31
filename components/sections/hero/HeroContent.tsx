import HeroButtons from "./HeroButtons";

export default function HeroContent() {
    return (
        <div className="mx-auto w-full max-w-7xl px-8">

            <span className="hero-location inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white backdrop-blur-md">

                SAN AGUSTÍN · HUILA · COLOMBIA

            </span>

            <h1 className="hero-title mt-8 max-w-5xl text-6xl font-black leading-[0.95] text-white md:text-8xl">

                El origen
                <br />
                tiene memoria.

            </h1>

            <p className="hero-text mt-8 max-w-2xl text-xl leading-9 text-white/80">

                Alto Páramo conecta paisaje, conocimiento y café para revelar la riqueza del Macizo Colombiano mediante dos expresiones:

                <span className="font-semibold text-white">
                    {" "}Specialty Coffee
                </span>

                {" "}y{" "}

                <span className="font-semibold text-white">
                    Regional.
                </span>

            </p>

            <HeroButtons />

        </div>
    );
}