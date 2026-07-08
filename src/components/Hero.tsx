import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import RevealLayer from "./ui/RevealLayer";
import ContactButton from "./ui/ContactButton";
import { ASSETS, LINKS } from "../content";
import { useI18n } from "../i18n";
import { PREVIEW } from "../preview";

export default function Hero() {
  const { c, lang } = useI18n();
  const p = c.profile;

  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined);
  const hasMoved = useRef(false);
  const demo = useRef(false);
  const frame = useRef(0);
  const visible = useRef(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const center = () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight * 0.48,
    });
    // start with the spotlight already glowing at center (no dark blank on load)
    const c0 = center();
    mouse.current = { ...c0 };
    smooth.current = { ...c0 };
    setCursor({ ...c0 });

    demo.current = new URLSearchParams(window.location.search).has("demo");
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    const onMove = (e: MouseEvent) => {
      hasMoved.current = true;
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const io = new IntersectionObserver(
      ([e]) => (visible.current = e.isIntersecting),
      { threshold: 0 },
    );
    if (sectionRef.current) io.observe(sectionRef.current);

    const loop = () => {
      rafRef.current = requestAnimationFrame(loop);
      if (!visible.current || document.hidden) return;
      frame.current += 1;

      // target: cursor once moved; otherwise a slow idle drift (a searchlight
      // sweeping the terrain so touch users still see life bloom).
      let target = mouse.current;
      if (!hasMoved.current && !demo.current) {
        if (reduce) {
          target = center();
        } else {
          const t = frame.current * 0.01;
          target = {
            x: window.innerWidth * (0.5 + 0.27 * Math.sin(t * 0.7)),
            y: window.innerHeight * (0.46 + 0.17 * Math.sin(t * 1.13)),
          };
        }
      }

      const nx = smooth.current.x + (target.x - smooth.current.x) * 0.08;
      const ny = smooth.current.y + (target.y - smooth.current.y) * 0.08;
      if (
        Math.abs(nx - smooth.current.x) > 0.25 ||
        Math.abs(ny - smooth.current.y) > 0.25
      ) {
        smooth.current = { x: nx, y: ny };
        setCursor({ x: nx, y: ny });
      }
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const headA =
    lang === "en"
      ? "font-playfair font-normal italic"
      : "font-display font-black";

  // Static (no entrance animation) for preview/demo screenshots so content is
  // always captured; normal visits still animate in.
  const demoQ =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("demo");
  const anim = (cls: string) => (PREVIEW || demoQ ? "" : cls);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "100dvh", minHeight: 640 }}
    >
      {/* 1. base image — barren rock, slow Ken Burns zoom */}
      <div
        className={`${anim("hero-anim hero-zoom")} absolute inset-0 z-10 bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${ASSETS.heroBase})` }}
      />

      {/* 2. cursor spotlight reveal — same terrain overgrown with life */}
      <RevealLayer cursorX={cursor.x} cursorY={cursor.y} image={ASSETS.heroReveal} />

      {/* 3. legibility scrim (dark at top & bottom, clear in the middle) */}
      <div className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-b from-black/55 via-transparent to-black/70" />

      {/* 4. heading */}
      <div className="absolute left-0 right-0 top-[13%] z-50 flex flex-col items-center px-5 text-center pointer-events-none">
        <p
          className={`${anim("hero-anim hero-fade")} mb-5 text-[0.7rem] uppercase tracking-[0.35em] text-white/60 sm:text-xs md:text-sm`}
          style={{ animationDelay: "0.1s" }}
        >
          {p.name} · {p.nameCn}
        </p>
        <h1 className="w-full max-w-full break-words text-white leading-[0.95] drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]">
          <span
            className={`${anim("hero-anim hero-reveal")} block text-[2.6rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] ${headA}`}
            style={{ letterSpacing: "-0.03em", animationDelay: "0.25s" }}
          >
            {p.heroA}
          </span>
          <span
            className={`${anim("hero-anim hero-reveal")} -mt-1 block font-display text-[2.6rem] font-black xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem]`}
            style={{ letterSpacing: "-0.04em", animationDelay: "0.42s" }}
          >
            {p.heroB}
          </span>
        </h1>
        <p
          className={`${anim("hero-anim hero-fade")} mt-6 max-w-[92vw] text-sm text-white/70 sm:max-w-xl md:text-base`}
          style={{ animationDelay: "0.6s" }}
        >
          {p.role} · {p.location}
        </p>
      </div>

      {/* 5. bottom-left bio */}
      <div
        className={`${anim("hero-anim hero-fade")} absolute bottom-14 left-8 z-50 hidden max-w-[300px] sm:block md:left-14`}
        style={{ animationDelay: "0.7s" }}
      >
        <p className="text-sm leading-relaxed text-white/80">{p.bioLeft}</p>
      </div>

      {/* 6. bottom-right bio + CTAs */}
      <div
        className={`${anim("hero-anim hero-fade")} absolute bottom-10 left-5 right-5 z-50 flex max-w-full flex-col items-start gap-5 sm:bottom-20 sm:left-auto sm:right-10 sm:max-w-[300px] md:right-14`}
        style={{ animationDelay: "0.85s" }}
      >
        <p className="hidden text-xs leading-relaxed text-white/75 sm:block sm:text-sm">
          {p.bioRight}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <ContactButton
            label={c.ui.getInTouch}
            href={`mailto:${LINKS.email}`}
            withIcon
          />
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-6 py-3 text-sm font-medium uppercase tracking-widest text-white/90 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            {c.ui.viewWork}
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
