import { useI18n } from "../i18n";

export default function Footer() {
  const { c } = useI18n();
  return (
    <footer className="px-5 pb-12 pt-8 md:px-10">
      <div className="mx-auto w-[90%] max-w-[1400px]">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            © 2026 {c.profile.name} · {c.profile.nameCn}
          </p>
          <p>
            {c.ui.footerNote} — {c.profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
