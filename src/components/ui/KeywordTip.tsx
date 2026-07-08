// Inline "story behind the keyword" hooks.
//
// Write a bullet with markup like:  "...designed a [[blueprint editor|csm]] that..."
// and the words "blueprint editor" become a dotted, clickable term; clicking it
// pops a card built from CONTENT[lang].tips["csm"] (pain / decision / detail /
// iterate). The point is to *plant hooks* — the visible text stays tight, the
// depth lives one click away, so it surfaces naturally in an interview.
//
// Use <RichText text={bullet} /> anywhere a plain string with this markup lives.
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n";

const TOKEN = /\[\[([^\]|]+)\|([^\]]+)\]\]/g;

type Part = string | { label: string; id: string };

function parse(text: string): Part[] {
  const parts: Part[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push({ label: m[1], id: m[2] });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

type Pos = { left: number; y: number; placement: "top" | "bottom" };

function Hook({ label, id }: { label: string; id: string }) {
  const { c } = useI18n();
  const tip = c.tips?.[id];
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<Pos | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const panelId = useId();

  const place = useCallback(() => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const width = Math.min(380, vw - 32);
    const left = Math.min(Math.max(16, r.left), vw - width - 16);
    const below = r.bottom < vh * 0.58;
    setPos({ left, y: below ? r.bottom + 10 : vh - r.top + 10, placement: below ? "bottom" : "top" });
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    place();
    const on = () => place();
    window.addEventListener("scroll", on, true);
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on, true);
      window.removeEventListener("resize", on);
    };
  }, [open, place]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // markup referenced an id with no tip — degrade to plain text, never crash
  if (!tip) return <>{label}</>;

  const rows = (
    [
      [c.ui.tipPain, tip.pain],
      [c.ui.tipDecision, tip.decision],
      [c.ui.tipDetail, tip.detail],
      [c.ui.tipIterate, tip.iterate],
    ] as const
  ).filter(([, v]) => Boolean(v));

  const width = typeof window !== "undefined" ? Math.min(380, window.innerWidth - 32) : 380;

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? panelId : undefined}
        className="cursor-help rounded font-medium text-white underline decoration-dotted decoration-[#c98bc0]/70 underline-offset-4 transition-colors hover:text-[#e79ad9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c98bc0]/70"
      >
        {label}
        <span className="ml-0.5 align-super text-[0.62em] text-[#c98bc0] no-underline" aria-hidden>
          ✦
        </span>
      </button>

      {createPortal(
        <AnimatePresence>
          {open && pos && (
            <>
              <div
                className="fixed inset-0 z-[999]"
                aria-hidden
                onClick={() => setOpen(false)}
              />
              <motion.div
                id={panelId}
                role="dialog"
                aria-label={tip.label}
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                style={{
                  left: pos.left,
                  width,
                  ...(pos.placement === "bottom"
                    ? { top: pos.y }
                    : { bottom: pos.y }),
                }}
                className="fixed z-[1000] max-h-[70vh] origin-top overflow-y-auto rounded-2xl border border-mist/25 bg-[#0e0e12]/95 p-5 text-left shadow-2xl shadow-black/70 backdrop-blur-md"
              >
                <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.18em] text-[#e79ad9]">
                  {tip.label}
                </p>
                <dl className="flex flex-col gap-3">
                  {rows.map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#c98bc0]/85">
                        {k}
                      </dt>
                      <dd className="mt-1 text-[0.92rem] leading-relaxed text-white/80">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}

export default function RichText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const parts = parse(text);
  return (
    <span className={className}>
      {parts.map((p, i) =>
        typeof p === "string" ? (
          <span key={i}>{p}</span>
        ) : (
          <Hook key={i} label={p.label} id={p.id} />
        ),
      )}
    </span>
  );
}
