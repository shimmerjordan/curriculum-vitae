import { ArrowUpRight } from "lucide-react";

interface Props {
  label?: string;
  href?: string;
  className?: string;
  withIcon?: boolean;
}

// The one signature CTA — gradient pill (prompt1 spec).
export default function ContactButton({
  label = "Contact Me",
  href = "#contact",
  className = "",
  withIcon = false,
}: Props) {
  const external = href.startsWith("http") || href.startsWith("mailto");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`btn-gradient inline-flex items-center gap-2 rounded-full font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${className}`}
    >
      {label}
      {withIcon && <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />}
    </a>
  );
}
