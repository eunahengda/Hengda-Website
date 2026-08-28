"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { company } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function ExperienceBand() {
  const { t } = useLanguage();

  return (
    <section className="bg-navy-900 text-white">
      <div className="container-max grid grid-cols-1 items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-3 lg:px-16">
        <ScrollReveal className="lg:col-span-2">
          <h2 className="text-2xl font-semibold uppercase sm:text-3xl">
            {t(strings.experience.heading).replace("{years}", String(company.yearsExperience))}
          </h2>
          <p className="mt-4 max-w-2xl text-steel-300">
            {t(strings.experience.body)}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="flex justify-start lg:justify-end">
          <Link href="/contact" className="btn-primary">
            {t(strings.experience.cta)} <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
