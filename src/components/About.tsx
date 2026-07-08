import {
  Github,
  BookOpen,
  Globe,
  Mail,
  Download,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import FadeIn from "./ui/FadeIn";
import AnimatedText from "./ui/AnimatedText";
import Magnet from "./ui/Magnet";
import SectionHeading from "./SectionHeading";
import { ASSETS, LINKS } from "../content";
import { useI18n } from "../i18n";

export default function About() {
  const { c, lang } = useI18n();

  const socials = [
    { label: "GitHub", href: LINKS.github, icon: Github },
    { label: "Blog", href: LINKS.blog, icon: BookOpen },
    { label: "Portal", href: LINKS.portal, icon: Globe },
    { label: c.ui.onlineCv, href: LINKS.onlineCv, icon: ArrowUpRight },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto w-[90%] max-w-[1400px]">
        <FadeIn
          as="p"
          className="mb-6 text-xs uppercase tracking-[0.35em] text-white/45"
        >
          {c.ui.aboutKicker}
        </FadeIn>
        <SectionHeading align="left">{c.nav.about}</SectionHeading>

        <AnimatedText
          key={lang}
          text={c.profile.about}
          className="mt-12 max-w-[1150px] font-medium leading-[1.32] text-mist text-[clamp(1.3rem,3vw,2.7rem)]"
        />

        {/* focus areas (专业技能) */}
        <FadeIn className="mt-14 max-w-3xl border-l-2 border-[#b600a8]/60 pl-5">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            {c.ui.focusLabel}
          </p>
          <p className="mt-2 text-base leading-relaxed text-white/70 md:text-lg">
            {c.profile.focus}
          </p>
        </FadeIn>

        {/* contact hub */}
        <div
          id="contact"
          className="mt-28 grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:gap-16"
        >
          {/* left — reach + email + socials */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
                {c.ui.reach}
              </p>
              <Magnet padding={90} strength={4} className="max-w-full">
                <a
                  href={`mailto:${LINKS.email}`}
                  className="group inline-flex max-w-full items-center gap-3 font-display font-black leading-none text-mist transition-colors hover:text-white text-[clamp(1.5rem,5vw,4rem)]"
                >
                  <span className="hero-heading break-all">{LINKS.email}</span>
                  <ArrowUpRight
                    className="h-[0.7em] w-[0.7em] shrink-0 text-white/60 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2"
                    strokeWidth={2}
                  />
                </a>
              </Magnet>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/45">
                {c.ui.connect}
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* right — résumé card */}
          <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-9">
            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{c.profile.location}</span>
            </div>
            <p className="text-lg font-medium leading-snug text-white">
              {c.profile.role}
            </p>
            <div className="mt-auto flex flex-col gap-3 pt-4">
              <a
                href={ASSETS.cvPdf}
                download="Qiaodan_Ju_CV.pdf"
                className="btn-gradient inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium uppercase tracking-widest"
              >
                {c.ui.downloadCv}
                <Download className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <a
                href={`mailto:${LINKS.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-white/90 transition-colors hover:bg-white/10"
              >
                {c.ui.getInTouch}
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* stats */}
        <div className="mt-28 grid grid-cols-2 gap-8 border-t border-white/10 pt-14 md:grid-cols-4">
          {c.stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <p className="font-display text-5xl font-black leading-none hero-heading md:text-6xl">
                {s.value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-widest text-white/45">
                {s.label}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* education + awards */}
        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.35em] text-white/45">
              {c.ui.education}
            </h3>
            <div className="flex flex-col gap-6">
              {c.education.map((e) => (
                <FadeIn key={e.school} className="flex flex-col">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-medium text-white">{e.school}</p>
                    <span className="shrink-0 text-xs text-white/40">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-sm text-white/70">{e.degree}</p>
                  <p className="text-xs text-white/40">{e.detail}</p>
                </FadeIn>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.35em] text-white/45">
              {c.ui.awards}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {c.awards.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-white/75"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
