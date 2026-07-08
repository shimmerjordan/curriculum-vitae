import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { PREVIEW } from "../../preview";

function Char({
  char,
  start,
  end,
  progress,
}: {
  char: string;
  start: number;
  end: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span className="relative inline-block">
      {/* invisible placeholder reserves layout width */}
      <span aria-hidden style={{ opacity: 0 }}>
        {char}
      </span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

// Character-by-character scroll-reveal: each glyph eases from 0.2 → 1 opacity
// across the section's scroll progress.
export default function AnimatedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });

  if (PREVIEW) return <p className={className}>{text}</p>;

  const words = text.split(" ");
  const totalChars = words.reduce((acc, w) => acc + w.length, 0);
  let cursor = 0;

  return (
    <p ref={ref} className={className}>
      {words.map((word, wi) => {
        const glyphs = word.split("").map((ch) => {
          const start = cursor / totalChars;
          const end = (cursor + 1) / totalChars;
          cursor += 1;
          return { ch, start, end };
        });
        return (
          <span key={wi} className="inline-block">
            {glyphs.map((g, gi) => (
              <Char
                key={gi}
                char={g.ch}
                start={g.start}
                end={g.end}
                progress={scrollYProgress}
              />
            ))}
            {wi < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}
