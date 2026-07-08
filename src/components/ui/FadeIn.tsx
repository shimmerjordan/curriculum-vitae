import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { PREVIEW } from "../../preview";

// Map of the element types we animate — avoids motion.create() at render time
// and keeps everything type-safe.
const MOTION = {
  div: motion.div,
  section: motion.section,
  span: motion.span,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
  li: motion.li,
  a: motion.a,
} as const;

type Tag = keyof typeof MOTION;

interface FadeInProps {
  children: ReactNode;
  as?: Tag;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export default function FadeIn({
  children,
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  once = true,
}: FadeInProps) {
  const Tag = MOTION[as] as ElementType;
  if (PREVIEW) return <Tag className={className}>{children}</Tag>;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Tag>
  );
}
