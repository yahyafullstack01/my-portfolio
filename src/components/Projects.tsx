"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

type ProjectEntry = {
  key: "one" | "two" | "three" | "four" | "six" | "seven";
  tags: string[];
  link: string;
  image: string | null;
  githubUrl: string;
};

const projects: ProjectEntry[] = [
  {
    key: "one",
    tags: ["Next.js", "Node.js", "MongoDB", "REST APIs"],
    link: "https://www.losestate.com/",
    image: "/images/projects/los-estate.png",
    githubUrl: "https://github.com/yahyafullstack01/los-estate",
  },
  {
    key: "two",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    link: "https://www.vibra-travel.com/",
    image: "/images/projects/vibra-travel.png",
    githubUrl: "https://github.com/yahyafullstack01/vibra-travel-main",
  },
  {
    key: "three",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "https://www.latore.store/",
    image: "/images/projects/latore-atelier.png",
    githubUrl: "https://github.com/yahyafullstack01/shoopingsite",
  },
  {
    key: "four",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    link: "https://www.pick-best-moment.com/",
    image: "/images/projects/pic-best-moments.png",
    githubUrl: "https://github.com/yahyafullstack01/photoPBM",
  },
  {
    key: "six",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    link: "https://www.grw-wine.com/",
    image: "/images/projects/grw-wine.png",
    githubUrl: "https://github.com/yahyafullstack01/georgian-royal-wine",
  },
  {
    key: "seven",
    tags: ["Full-Stack", "Multilingual", "Alternative DB"],
    link: "https://mejortech.vercel.app/",
    image: "/images/projects/mejor-tech.png",
    githubUrl: "https://github.com/yahyafullstack01/Mejortech",
  },
];

export function Projects() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="mt-4 text-center text-muted">{t("subtitle")}</p>
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <FadeIn key={project.key} delay={0.1 + i * 0.08}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-accent/50">
              <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-accent/20 to-accent-2/10">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={t(`items.${project.key}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-4xl font-bold text-accent/40">
                    {i + 1}
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">
                  {t(`items.${project.key}.title`)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {t(`items.${project.key}.description`)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-background px-2.5 py-1 text-xs text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-accent-2 transition hover:text-accent"
                  >
                    <ExternalLink size={15} /> {t("viewProject")}
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 transition hover:text-foreground"
                  >
                    <Code2 size={15} /> {t("viewCode")}
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
