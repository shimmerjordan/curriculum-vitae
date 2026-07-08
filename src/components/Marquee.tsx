import { useEffect, useRef, useState } from "react";
import { MARQUEE_A, MARQUEE_B } from "../content";

function Tile({ label, dim = false }: { label: string; dim?: boolean }) {
  return (
    <div
      className={`flex shrink-0 items-center gap-3 whitespace-nowrap rounded-2xl border px-8 py-5 md:px-11 md:py-7 ${
        dim ? "border-white/10 bg-white/[0.02]" : "border-white/10 bg-white/[0.04]"
      }`}
    >
      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-[#b600a8] to-[#be4c00]" />
      <span className="font-display text-3xl font-semibold tracking-tight text-mist md:text-5xl">
        {label}
      </span>
    </div>
  );
}

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const rowA = [...MARQUEE_A, ...MARQUEE_A, ...MARQUEE_A];
  const rowB = [...MARQUEE_B, ...MARQUEE_B, ...MARQUEE_B];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-28 md:py-32"
    >
      <div className="flex flex-col gap-4">
        <div
          className="flex gap-4 will-change-transform"
          style={{ transform: `translateX(${offset - 300}px)` }}
        >
          {rowA.map((s, i) => (
            <Tile key={`a${i}`} label={s} />
          ))}
        </div>
        <div
          className="flex gap-4 will-change-transform"
          style={{ transform: `translateX(${-(offset - 300)}px)` }}
        >
          {rowB.map((s, i) => (
            <Tile key={`b${i}`} label={s} dim />
          ))}
        </div>
      </div>
    </section>
  );
}
