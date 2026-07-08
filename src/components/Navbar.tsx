import { useEffect, useState } from "react";
import { Menu, X, Download, Languages } from "lucide-react";
import { ASSETS, LINKS } from "../content";
import { useI18n } from "../i18n";

export default function Navbar() {
  const { c, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: c.nav.about, href: "#about" },
    { label: c.nav.experience, href: "#experience" },
    { label: c.nav.projects, href: "#projects" },
    { label: c.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-[100] px-3 sm:px-5">
      <div
        className={`mx-auto mt-3 flex max-w-[1400px] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border border-white/10 bg-ink/70 shadow-lg shadow-black/40 backdrop-blur-md"
            : "border border-transparent"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#b600a8] to-[#7621b0] text-[0.8rem] font-bold text-white">
            {c.profile.initials}
          </span>
          <span className="font-playfair text-lg italic text-white sm:text-xl">
            {c.profile.name}
          </span>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch language"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
          >
            <Languages className="h-4 w-4" />
            {lang === "en" ? "中文" : "EN"}
          </button>
          <a
            href={ASSETS.cvPdf}
            download="Qiaodan_Ju_CV.pdf"
            className="hidden items-center gap-1.5 rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-white/85 sm:inline-flex"
          >
            {c.ui.downloadCv}
            <Download className="h-4 w-4" strokeWidth={2.5} />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-[1400px] rounded-3xl border border-white/10 bg-ink/95 p-3 backdrop-blur-md md:hidden">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-1 flex gap-2">
            <a
              href={ASSETS.cvPdf}
              download="Qiaodan_Ju_CV.pdf"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-2xl bg-white px-4 py-3 text-base font-semibold text-gray-900"
            >
              {c.ui.downloadCv}
              <Download className="h-4 w-4" strokeWidth={2.5} />
            </a>
            <a
              href={LINKS.onlineCv}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-2xl border border-white/15 px-4 py-3 text-base font-medium text-white/85"
            >
              {c.ui.onlineCv}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
