import FadeIn from "./ui/FadeIn";
import SectionHeading from "./SectionHeading";
import { useI18n } from "../i18n";

export default function Experience() {
  const { c } = useI18n();

  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="mx-auto w-[90%] max-w-[1400px]">
        <FadeIn
          as="p"
          className="mb-6 text-xs uppercase tracking-[0.35em] text-white/45"
        >
          {c.ui.experienceKicker}
        </FadeIn>
        <SectionHeading align="left">{c.nav.experience}</SectionHeading>

        <div className="mt-16 md:mt-24">
          {c.experience.map((job, i) => (
            <FadeIn
              key={job.org}
              delay={i * 0.05}
              className="grid gap-8 border-t border-white/12 py-12 lg:grid-cols-[1fr_1.618fr] lg:gap-16 lg:py-16"
            >
              {/* left — org / role / period / tags */}
              <div className="flex flex-col">
                <span className="mb-4 font-display text-5xl font-black leading-none text-white/15 md:text-6xl">
                  0{i + 1}
                </span>
                <p className="text-xs uppercase tracking-[0.3em] text-[#c98bc0]">
                  {job.kind}
                </p>
                <h3 className="cn-subhead mt-2 font-display text-2xl font-bold leading-tight text-white md:text-3xl">
                  {job.org}
                </h3>
                <p className="mt-1 text-base text-white/70">{job.role}</p>
                <p className="mt-1 text-sm text-white/40">{job.period}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/65"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* right — bullets */}
              <ul className="flex flex-col gap-5 lg:pt-2">
                {job.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-4">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#b600a8] to-[#be4c00]" />
                    <p className="text-lg leading-relaxed text-white/75 md:text-xl">
                      {b}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
