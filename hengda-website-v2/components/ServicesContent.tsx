"use client";

import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function ServicesContent() {
  const { lang, t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t(strings.servicesPage.eyebrow)}
        title={t(strings.servicesPage.title)}
        description={t(strings.servicesPage.description)}
      />

      <section className="section-pad bg-white">
        <div className="container-max space-y-16">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.03}>
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-navy-900 text-signal-500">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </div>
                  <p className="mt-5 font-mono text-xs uppercase tracking-[0.15em] text-signal-500">
                    {t(strings.servicesPage.serviceLabel)} {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold uppercase text-navy-900 sm:text-3xl">
                    {lang === "zh" ? service.title_zh : service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-steel-600">
                    {lang === "zh" ? service.description_zh : service.description}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <ul className="grid grid-cols-1 gap-3 rounded-sm border border-steel-200 bg-steel-100 p-6 sm:grid-cols-2">
                    {(lang === "zh" ? service.points_zh : service.points).map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-navy-800">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < services.length - 1 && (
                <div className="mt-16 h-px w-full bg-steel-200" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
