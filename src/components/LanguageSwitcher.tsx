"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { locales, localeNames, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  /** Inline list for mobile menus; dropdown for desktop/header */
  variant?: "dropdown" | "inline";
  align?: "left" | "right";
  onSelect?: () => void;
};

export function LanguageSwitcher({
  variant = "dropdown",
  align = "right",
  onSelect,
}: LanguageSwitcherProps) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant !== "dropdown") return;

    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [variant]);

  function switchTo(next: Locale) {
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
    setOpen(false);
    onSelect?.();
  }

  if (variant === "inline") {
    return (
      <div className="flex flex-col gap-1 border-t border-border/60 pt-4">
        <div className="mb-1 flex items-center gap-2 px-1 text-xs font-medium uppercase tracking-wide text-muted">
          <Globe size={14} aria-hidden="true" />
          <span>{t("language")}</span>
        </div>
        {locales.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => switchTo(l)}
            className={`w-full rounded-lg px-3 py-2.5 text-start text-sm transition hover:bg-surface ${
              l === locale ? "bg-surface text-accent" : "text-foreground/80"
            }`}
          >
            {localeNames[l]}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-fit" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground/80 transition hover:border-accent/50 hover:text-foreground"
        aria-label={t("language")}
        aria-expanded={open}
      >
        <Globe size={15} />
        <span>{localeNames[locale as Locale]}</span>
        <ChevronDown size={13} className={open ? "rotate-180 transition" : "transition"} />
      </button>
      {open && (
        <div
          className={`absolute z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-xl ${
            align === "left" ? "start-0" : "end-0"
          }`}
        >
          {locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => switchTo(l)}
              className={`block w-full px-4 py-2 text-start text-sm transition hover:bg-white/5 ${
                l === locale ? "text-accent" : "text-foreground/80"
              }`}
            >
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
