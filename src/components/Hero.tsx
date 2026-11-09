"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Code2, Mail, Sparkles } from "lucide-react";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

function UpworkIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703 2.706 2.706 0 0 1-2.704 2.702zm0-7.411c-2.551 0-4.537 1.636-5.341 4.246-1.233-1.858-2.174-4.045-2.74-5.883H7.976v6.111c0 1.389-1.127 2.515-2.516 2.515s-2.515-1.126-2.515-2.515V4.11H0v6.111c0 2.908 2.368 5.277 5.319 5.277 2.937 0 5.319-2.37 5.319-5.277v-1.029c.528 1.098 1.17 2.208 1.943 3.188l-1.686 7.929h2.829l1.223-5.756c1.17.763 2.518 1.233 4.033 1.233 3.159 0 5.733-2.574 5.733-5.734 0-3.159-2.574-5.733-5.733-5.733z" />
    </svg>
  );
}

const socials = [
  { href: "https://github.com/yahyafullstack01", label: "GitHub", icon: Code2 },
  { href: "https://www.linkedin.com/in/yahya-alloucha/", label: "LinkedIn", icon: LinkedInIcon },
  { href: "https://www.upwork.com/freelancers/~015da442ed13d82058", label: "Upwork", icon: UpworkIcon },
  { href: "mailto:yahyawebdev01@gmail.com", label: "Email", icon: Mail },
];

const techBadges = [
  { label: "Next.js", className: "left-[-8%] top-[8%]", delay: 0 },
  { label: "SEO", className: "right-[4%] top-[-6%]", delay: 0.3 },
  { label: "React", className: "right-[-10%] top-[22%]", delay: 0.6 },
  { label: "Node.js", className: "left-[-12%] bottom-[18%]", delay: 1.2 },
  { label: "MongoDB", className: "right-[-6%] bottom-[6%]", delay: 1.8 },
];

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="absolute inset-0 -z-20 grid-texture" />
      <div
        className="pointer-events-none absolute left-[15%] top-[10%] -z-10 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute right-[10%] bottom-[5%] -z-10 h-[380px] w-[380px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent-2), transparent 70%)" }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-accent-2"
          >
            <Sparkles size={14} />
            {t("greeting")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">{t("name")}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg lg:mx-0"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-accent/50"
            >
              {t("cta")}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent/60"
            >
              {t("contact")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground/70 transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent-2"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80"
        >
          <div
            className="absolute -inset-3 rounded-[2.5rem] opacity-60 blur-xl"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
          />
          <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-border">
            <Image
              src="/images/yahya.jpeg"
              alt="Yahya Alloucha"
              fill
              priority
              sizes="(max-width: 640px) 256px, 320px"
              className="object-cover"
            />
          </div>

          {techBadges.map((badge) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + badge.delay * 0.1 }}
              className={`animate-float-slow absolute hidden rounded-xl border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-lg sm:block ${badge.className}`}
              style={{ animationDelay: `${badge.delay}s` }}
            >
              {badge.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/40"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
