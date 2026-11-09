"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "./FadeIn";

const skillGroups = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Mobile Applications", "Cross-Platform Development"],
  },
  {
    category: "Backend",
    items: ["Node.js", "REST APIs", "Authentication", "API Integration"],
  },
  {
    category: "Data",
    items: ["MongoDB", "Firebase", "Data Modeling", "CRUD", "Database Design"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vercel", "Figma", "Jira"],
  },
  {
    category: "Marketing & Growth",
    items: ["SEO", "Google Ads", "Google Business Profile"],
  },
  {
    category: "AI Tools",
    items: ["Claude", "Cursor", "OpenAI Codex", "Prompt Engineering", "AI-Assisted Development"],
  },
  {
    category: "Soft Skills",
    items: [
      "Communication",
      "Time Management",
      "Problem Solving",
      "Teamwork",
      "Adaptability",
      "Client Relations",
    ],
  },
  {
    category: "Languages",
    items: [
      "Arabic (Native)",
      "Russian (Native)",
      "English (Advanced)",
      "French (Advanced)",
      "Spanish (Professional)",
    ],
  },
];

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="mt-4 text-center text-muted">{t("subtitle")}</p>
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.category} delay={0.1 + i * 0.1}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-4 text-lg font-semibold text-accent-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
