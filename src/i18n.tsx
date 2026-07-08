import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { CONTENT, type Dict, type Lang } from "./content";

interface I18n {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  c: Dict;
}

const Ctx = createContext<I18n>({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
  c: CONTENT.en,
});

function initialLang(): Lang {
  if (typeof window !== "undefined") {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q === "zh" || q === "en") return q;
  }
  if (typeof navigator !== "undefined" && /^zh/i.test(navigator.language)) {
    return "zh";
  }
  return "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const value: I18n = {
    lang,
    setLang,
    toggle: () => setLang((l) => (l === "en" ? "zh" : "en")),
    c: CONTENT[lang],
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
