import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import {
  type LucideIcon,
  Package,
  Bot,
  Gamepad2,
  Cpu,
  LineChart,
  ArrowUpRight,
} from "lucide-react";
import FadeIn from "./ui/FadeIn";
import SectionHeading from "./SectionHeading";
import { PROJECTS_META, type Project } from "../content";
import { useI18n } from "../i18n";

const ICONS: Record<string, LucideIcon> = {
  Package,
  Bot,
  Gamepad2,
  Cpu,
  LineChart,
};

function Card({
  project,
  meta,
  index,
  total,
  progress,
  viewLabel,
}: {
  project: Project;
  meta: (typeof PROJECTS_META)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
  viewLabel: string;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const Icon = ICONS[meta.icon] ?? Package;

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center">
      <motion.div
        style={{ scale, top: `${index * 26}px` }}
        className="relative w-full max-w-[1440px] origin-top overflow-hidden rounded-[32px] border border-mist/20 bg-[#0e0e12] p-6 shadow-2xl shadow-black/60 sm:rounded-[44px] sm:p-9 md:p-12"
      >
        <div className="grid gap-8 md:grid-cols-[1.618fr_1fr] md:items-stretch md:gap-12">
          {/* left — text */}
          <div className="flex min-h-[66vh] flex-col">
            <div className="mb-5 flex items-center gap-5">
              <span className="font-display text-6xl font-black leading-none text-mist md:text-8xl">
                0{index + 1}
              </span>
              <div className="text-xs uppercase tracking-[0.25em] text-white/45">
                <p>{project.kind}</p>
                <p>{project.period}</p>
              </div>
            </div>
            <h3 className="cn-subhead font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
              {project.name}
            </h3>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
            {meta.link && (
              <a
                href={meta.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-medium uppercase tracking-widest text-white/80 transition-colors hover:text-white"
              >
                {viewLabel}
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            )}
          </div>

          {/* right — preview image (if set) or a designed accent panel */}
          <div
            className="relative min-h-[240px] overflow-hidden rounded-[24px] sm:rounded-[32px] md:min-h-full"
            style={meta.image ? undefined : { background: meta.accent }}
          >
            {meta.image ? (
              <>
                <img
                  src={meta.image}
                  alt={project.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </>
            ) : (
              <div className="bp-grid-bright absolute inset-0 opacity-30" />
            )}
            <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
              <div className="flex justify-end">
                <Icon className="h-11 w-11 text-white/90" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-4xl font-black leading-none text-white md:text-6xl">
                  {project.metric}
                </p>
                <p className="mt-3 text-sm text-white/85">{project.kind}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const { c } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="relative pt-24 md:pt-28">
      <div className="mx-auto mb-4 w-[90%] max-w-[1400px]">
        <FadeIn
          as="p"
          className="mb-6 text-xs uppercase tracking-[0.35em] text-white/45"
        >
          {c.ui.projectsKicker}
        </FadeIn>
        <SectionHeading align="left">{c.nav.projects}</SectionHeading>
      </div>
      <div ref={containerRef} className="relative">
        {c.projects.map((project, i) => (
          <Card
            key={project.name}
            project={project}
            meta={PROJECTS_META[i]}
            index={i}
            total={c.projects.length}
            progress={scrollYProgress}
            viewLabel={c.ui.viewProject}
          />
        ))}
      </div>
    </section>
  );
}
