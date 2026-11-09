"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { FadeIn } from "./FadeIn";

const CONTACT_EMAIL = "yahyawebdev01@gmail.com";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />

      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="mt-4 text-center text-muted">{t("subtitle")}</p>
      </FadeIn>

      <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-border bg-surface/60 p-1 backdrop-blur-sm">
        <div
          className="absolute -inset-px -z-10 rounded-[2rem] opacity-40"
          style={{
            background:
              "linear-gradient(135deg, var(--accent), transparent 40%, transparent 60%, var(--accent-2))",
          }}
        />
        <div className="grid grid-cols-1 gap-10 rounded-[1.9rem] bg-background/90 p-8 sm:grid-cols-5 sm:p-10">
          <FadeIn delay={0.15} className="sm:col-span-2">
            <div className="flex flex-col gap-6">
              <motion.a
                href={`mailto:${CONTACT_EMAIL}`}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition hover:border-border hover:bg-surface"
              >
                <div className="rounded-lg bg-accent/10 p-2.5 text-accent-2">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-sm text-muted">{t("emailMe")}</div>
                  <div className="font-medium">{CONTACT_EMAIL}</div>
                </div>
              </motion.a>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 rounded-xl p-2"
              >
                <div className="rounded-lg bg-accent/10 p-2.5 text-accent-2">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-sm text-muted">{t("location")}</div>
                  <div className="font-medium">{t("locationValue")}</div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="sm:col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="group relative">
                <label className="mb-1.5 block text-sm text-muted">
                  {t("nameLabel")}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,92,255,0.15)]"
                />
              </div>
              <div className="group relative">
                <label className="mb-1.5 block text-sm text-muted">
                  {t("emailLabel")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,92,255,0.15)]"
                />
              </div>
              <div className="group relative">
                <label className="mb-1.5 block text-sm text-muted">
                  {t("messageLabel")}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,92,255,0.15)]"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition disabled:opacity-60"
              >
                {status === "sending" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {t("send")}
              </motion.button>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2 text-sm text-emerald-400"
                  >
                    <CheckCircle2 size={16} /> {t("success")}
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2 text-sm text-red-400"
                  >
                    <XCircle size={16} /> {t("error")}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
