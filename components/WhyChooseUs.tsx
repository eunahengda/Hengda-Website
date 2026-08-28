"use client";

import ScrollReveal from "./ScrollReveal";
import Icon from "./Icon";
import { whyChooseUs } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function WhyChooseUs() {
  const { lang, t } = useLanguage();

  return (
    <section className="section-pad bg-steel-100">
      <div className="container-max">
        <ScrollReveal className="max-w-2xl">
          <span className="eyebrow text-signal-500">
            <span className="h-px w-8 bg-signal-500" /> {t(strings.whyChooseUs.eyebrow)}
          </span>
          <h2 className="mt-5 text-3xl font-semibold uppercase text-navy-900 sm:text-4xl">
            {t(strings.whyChooseUs.heading)}
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.06}>
              <div className="group h-full rounded-sm border border-steel-300/60 bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-navy-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-navy-900 text-signal-500 transition-colors group-hover:bg-signal-500 group-hover:text-white">
                  <Icon name={reason.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold uppercase text-navy-900">
                  {lang === "zh" ? reason.title_zh : reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {lang === "zh" ? reason.description_zh : reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
