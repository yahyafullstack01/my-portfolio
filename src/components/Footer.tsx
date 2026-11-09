"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted">
      © {year} <span className="gradient-text font-medium">Yahya Alloucha</span>. {t("rights")}
    </footer>
  );
}
