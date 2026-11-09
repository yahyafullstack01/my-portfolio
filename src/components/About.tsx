"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "./FadeIn";

export function About() {
  const t = useTranslations("about");

  const stats = [
    { value: "3+", label: t("yearsLabel") },
    { value: "8+", label: t("projectsLabel") },
    { value: "5", label: t("clientsLabel") },
  ];

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted sm:text-lg">
          {t("body")}
        </p>
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={0.15 + i * 0.1}>
            <div className="rounded-2xl border border-border bg-surface p-8 text-center">
              <div className="gradient-text text-4xl font-bold">{stat.value}</div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
