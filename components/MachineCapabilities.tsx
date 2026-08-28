"use client";

import ScrollReveal from "./ScrollReveal";
import { machineCapabilities } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function MachineCapabilities() {
  const { lang, t } = useLanguage();

  return (
    <section className="section-pad bg-navy-900 text-white">
      <div className="container-max">
        <ScrollReveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-8 bg-signal-500" /> {t(strings.machineCapabilities.eyebrow)}
          </span>
          <h2 className="mt-5 text-3xl font-semibold uppercase sm:text-4xl">
            {t(strings.machineCapabilities.heading)}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel-300">
            {t(strings.machineCapabilities.subtitle)}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 lg:grid-cols-4">
          {machineCapabilities.map((cap, i) => (
            <ScrollReveal key={cap.label} delay={i * 0.08} className="bg-navy-950 p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-signal-500">
                {String(i + 1).padStart(2, "0")} — {t(strings.machineCapabilities.specLabel)}
              </p>
              <p className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                {cap.value}
                <span className="ml-1 text-lg text-steel-400">{cap.unit}</span>
              </p>
              <p className="mt-2 text-sm text-steel-400">
                {lang === "zh" ? cap.label_zh : cap.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
