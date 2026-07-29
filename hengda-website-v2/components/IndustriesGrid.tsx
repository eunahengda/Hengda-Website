"use client";

import ScrollReveal from "./ScrollReveal";
import Icon from "./Icon";
import { industries } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function IndustriesGrid() {
  const { lang, t } = useLanguage();

  return (
    <section className="section-pad bg-steel-100">
      <div className="container-max">
        <ScrollReveal className="max-w-2xl">
          <span className="eyebrow text-signal-500">
            <span className="h-px w-8 bg-signal-500" /> {t(strings.industries.eyebrow)}
          </span>
          <h2 className="mt-5 text-3xl font-semibold uppercase text-navy-900 sm:text-4xl">
            {t(strings.industries.heading)}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel-600">
            {t(strings.industries.subtitle)}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.slug} delay={i * 0.06}>
              <div className="h-full rounded-sm bg-white p-7 shadow-sm ring-1 ring-steel-200">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-navy-900 text-signal-500">
                  <Icon name={ind.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold uppercase text-navy-900">
                  {lang === "zh" ? ind.title_zh : ind.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {lang === "zh" ? ind.description_zh : ind.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
