"use client";

import Image from "next/image";
import { Target, Eye, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import WhyChooseUs from "@/components/WhyChooseUs";
import MachineCapabilities from "@/components/MachineCapabilities";
import CTASection from "@/components/CTASection";
import { company } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t(strings.about.eyebrow)}
        title={t(strings.about.title)}
        description={t(strings.about.description)}
      />

      <section className="section-pad bg-white">
        <div className="container-max grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <ScrollReveal>
            <span className="eyebrow text-signal-500">
              <span className="h-px w-8 bg-signal-500" /> {t(strings.about.storyEyebrow)}
            </span>
            <h2 className="mt-5 text-3xl font-semibold uppercase text-navy-900 sm:text-4xl">
              {t(strings.about.storyHeading1)}
              <br /> {t(strings.about.storyHeading2)}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-steel-600">
              {t(strings.about.p1)}
            </p>
            <p className="mt-4 text-base leading-relaxed text-steel-600">
              {t(strings.about.p2).replace("{years}", String(company.yearsExperience))}
            </p>
            <p className="mt-4 text-base leading-relaxed text-steel-600">
              {t(strings.about.p3)}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="blueprint-corners relative aspect-[4/5] overflow-hidden rounded-sm text-signal-500">
            <Image
              src="https://images.unsplash.com/photo-1776090188130-26c7253ff423?auto=format&fit=crop&w=1000&q=80"
              alt="Close-up of a precision lathe machine in the workshop"
              fill
              sizes="(min-width: 1024px) 500px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad bg-steel-100">
        <div className="container-max grid grid-cols-1 gap-6 sm:grid-cols-3">
          <ScrollReveal>
            <div className="h-full rounded-sm bg-white p-8 ring-1 ring-steel-200">
              <Target className="h-8 w-8 text-signal-500" />
              <h3 className="mt-5 font-heading text-lg font-semibold uppercase text-navy-900">
                {t(strings.about.missionTitle)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-600">
                {t(strings.about.missionBody)}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="h-full rounded-sm bg-white p-8 ring-1 ring-steel-200">
              <Eye className="h-8 w-8 text-signal-500" />
              <h3 className="mt-5 font-heading text-lg font-semibold uppercase text-navy-900">
                {t(strings.about.visionTitle)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-600">
                {t(strings.about.visionBody)}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <div className="h-full rounded-sm bg-white p-8 ring-1 ring-steel-200">
              <ShieldCheck className="h-8 w-8 text-signal-500" />
              <h3 className="mt-5 font-heading text-lg font-semibold uppercase text-navy-900">
                {t(strings.about.standardTitle)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-600">
                {t(strings.about.standardBody)}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WhyChooseUs />
      <MachineCapabilities />
      <CTASection />
    </>
  );
}
