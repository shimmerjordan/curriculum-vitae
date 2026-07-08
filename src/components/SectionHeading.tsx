import type { ReactNode } from "react";
import FadeIn from "./ui/FadeIn";

export default function SectionHeading({
  children,
  variant = "gradient",
  align = "center",
  className = "",
}: {
  children: ReactNode;
  variant?: "gradient" | "ink";
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <FadeIn
      as="h2"
      y={40}
      className={`font-display font-black uppercase leading-[0.9] tracking-tight text-[clamp(3rem,11vw,150px)] ${
        align === "center" ? "text-center" : "text-left"
      } ${variant === "ink" ? "text-ink" : "hero-heading"} ${className}`}
    >
      {children}
    </FadeIn>
  );
}
