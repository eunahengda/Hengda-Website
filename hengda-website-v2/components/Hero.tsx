"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { company } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-navy-950 text-white">
      <Image
        src="https://images.unsplash.com/photo-1701448150058-43d6d199b103?auto=format&fit=crop&w=1800&q=80"
        alt="Precision machined gear and mechanical components"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy-950/70" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/60" aria-hidden="true" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative container-max flex flex-col items-center px-6 py-24 text-center sm:px-10 lg:px-16"
      >
        <motion.span variants={item} className="eyebrow justify-center">
          <span className="h-px w-8 bg-signal-500" />{" "}
          {t(strings.hero.eyebrow).replace("{year}", String(company.founded))}
        </motion.span>

        <motion.h1
          variants={item}
          className="hero-text-shadow mt-6 max-w-4xl font-display text-4xl uppercase leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          {t(strings.hero.title1)}
          <br />
          {t(strings.hero.title2)}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-base leading-relaxed text-steel-200 sm:text-lg"
        >
          {t(strings.hero.subtitle)}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary !px-8 !py-3.5 text-sm">
            {t(strings.hero.ctaQuote)}
          </Link>
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !px-8 !py-3.5 text-sm"
          >
            <MessageCircle className="h-4 w-4" /> {t(strings.hero.ctaWhatsapp)}
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8"
        >
          <div>
            <p className="font-display text-3xl text-white sm:text-4xl">
              {company.yearsExperience}+
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-steel-400">
              {t(strings.hero.statYears)}
            </p>
          </div>
          <div>
            <p className="font-display text-3xl text-white sm:text-4xl">8</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-steel-400">
              {t(strings.hero.statServices)}
            </p>
          </div>
          <div>
            <p className="font-display text-3xl text-white sm:text-4xl">
              ±0.02
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-steel-400">
              {t(strings.hero.statTolerance)}
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        className="absolute bottom-0 left-0 h-1.5 w-full origin-left bg-signal-500"
      />
    </section>
  );
}
