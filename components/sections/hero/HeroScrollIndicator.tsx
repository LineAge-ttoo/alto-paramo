export default function HeroScrollIndicator() {
  return (
    <div className="hero-scroll absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-white/60">
          Scroll
        </span>

        <div className="h-10 w-px bg-white/40" />
      </div>
    </div>
  );
}
