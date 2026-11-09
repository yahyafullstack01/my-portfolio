"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { locales, localeNames, type Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function switchTo(next: Locale) {
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground/80 transition hover:border-accent/50 hover:text-foreground"
        aria-label="Change language"
      >
        <Globe size={15} />
        <span>{localeNames[locale as Locale]}</span>
        <ChevronDown size={13} className={open ? "rotate-180 transition" : "transition"} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-xl">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchTo(l)}
              className={`block w-full px-4 py-2 text-left text-sm transition hover:bg-white/5 ${
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
