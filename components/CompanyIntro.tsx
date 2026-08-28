"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { company } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function CompanyIntro() {
  const { t } = useLanguage();

  return (
    <section className="section-pad bg-white">
      <div className="container-max grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <ScrollReveal>
          <span className="eyebrow text-signal-500">
            <span className="h-px w-8 bg-signal-500" /> {t(strings.companyIntro.eyebrow)}
          </span>
          <h2 className="mt-5 text-3xl font-semibold uppercase text-navy-900 sm:text-4xl">
            {t(strings.companyIntro.heading1)}
            <br /> {t(strings.companyIntro.heading2)}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-steel-600">
            {t(strings.companyIntro.p1).replace("{years}", String(company.yearsExperience))}
          </p>
          <p className="mt-4 text-base leading-relaxed text-steel-600">
            {t(strings.companyIntro.p2)}
          </p>
          <ul className="mt-8 space-y-3">
            {strings.companyIntro.points.map((p) => (
              <li key={p.en} className="flex items-start gap-3 text-sm text-navy-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                {t(p)}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="relative">
          <div className="blueprint-corners relative aspect-[4/5] w-full overflow-hidden rounded-sm text-signal-500">
            <Image
              src="https://images.unsplash.com/photo-1701448150058-43d6d199b103?auto=format&fit=crop&w=1000&q=80"
              alt="Close-up of precision-machined gear and mechanical components"
              fill
              sizes="(min-width: 1024px) 500px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-48 rounded-sm bg-navy-900 p-5 text-white shadow-xl sm:block">
            <p className="font-display text-2xl font-semibold text-signal-500">
              {company.yearsExperience}+
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-steel-300">
              {t(strings.companyIntro.captionYears)}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
