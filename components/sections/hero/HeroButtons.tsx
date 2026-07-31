export default function HeroButtons() {
  return (
    <div className="hero-buttons mt-14 flex flex-wrap gap-5">
      <button className="rounded-full bg-[#E2C184] px-8 py-4 font-semibold text-stone-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        Descubrir el territorio
      </button>

      <button className="rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10">
        Conocer nuestros cafés
      </button>
    </div>
  );
}
