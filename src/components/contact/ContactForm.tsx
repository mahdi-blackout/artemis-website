"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/data/services";
import ObfuscatedLink from "@/components/shared/ObfuscatedLink";
import { EMAIL_ENCODED } from "@/lib/contact";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwlezzlz";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass glow-border flex flex-col items-center justify-center rounded-2xl p-12 text-center backdrop-blur-[20px] backdrop-saturate-[1.4]">
        <CheckCircle2 className="h-10 w-10 text-emerald" />
        <h3 className="mt-4 font-display text-xl font-semibold">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Thanks for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-6 backdrop-blur-[20px] backdrop-saturate-[1.4] md:p-8"
    >
      <input type="hidden" name="_subject" value="New project inquiry — Artemis Production" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm outline-none transition-colors focus:border-electric/60"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm outline-none transition-colors focus:border-electric/60"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="service" className="text-xs font-medium uppercase tracking-widest text-muted">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm outline-none transition-colors focus:border-electric/60"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-muted">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, timeline, and goals..."
          className="resize-none rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm outline-none transition-colors focus:border-electric/60"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 text-sm text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Something went wrong sending your message. Please try again, or email{" "}
          <ObfuscatedLink encoded={EMAIL_ENCODED} hrefPrefix="mailto:" className="underline">
            {(raw) => raw}
          </ObfuscatedLink>{" "}
          directly.
        </p>
      )}

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileTap={{ scale: 0.98 }}
        data-cursor-hover
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-electric py-3.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_30px_-6px_var(--electric)] disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        {status !== "loading" && <Send className="h-4 w-4" />}
      </motion.button>
    </form>
  );
}
