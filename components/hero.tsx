"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "@/i18n/navigation";

const HeroCanvas = dynamic(
  () => import("./hero-canvas").then((module) => module.HeroCanvas),
  { ssr: false }
);

type HeroProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaBooking: string;
  ctaPortfolio: string;
  stats: string[];
};

export function Hero({
  eyebrow,
  headline,
  subheadline,
  ctaBooking,
  ctaPortfolio,
  stats,
}: HeroProps) {
  const reduced = useReducedMotion();

  return (
    <section className="grid gap-8 py-12 md:grid-cols-[1.2fr_1fr] md:py-16">
      <motion.div
        initial={reduced ? undefined : { opacity: 0, y: 16 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-electric">{eyebrow}</p>
        <h1 className="section-title mt-4 text-5xl leading-[0.9] text-foreground sm:text-6xl">
          {headline}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">{subheadline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/booking"
            className="electric-ring rounded-full border border-electric px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground hover:text-electric"
          >
            {ctaBooking}
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground hover:border-electric"
          >
            {ctaPortfolio}
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item} className="section-card rounded-xl px-3 py-4 text-center text-sm">
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={reduced ? undefined : { opacity: 0, scale: 0.98 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
      >
        <HeroCanvas />
      </motion.div>
    </section>
  );
}
