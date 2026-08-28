"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { company } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function ContactHelp() {
  const { lang, t } = useLanguage();

  return (
    <section className="bg-steel-100">
      <div className="container-max grid grid-cols-1 items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-16">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold uppercase text-navy-900 sm:text-4xl">
            {t(strings.contactHelp.heading)}
          </h2>
          <p className="mt-4 max-w-md text-steel-600">
            {t(strings.contactHelp.body)}
          </p>
          <div className="mt-7 flex items-center gap-3">
            <Phone className="h-5 w-5 text-signal-500" />
            <a href={company.phoneHref} className="font-heading text-xl font-semibold text-navy-900">
              {company.phone}
            </a>
          </div>
          <Link href="/contact" className="btn-primary mt-7">
            {t(strings.contactHelp.getInTouch)} <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="rounded-sm bg-white p-8 shadow-sm ring-1 ring-steel-200">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-900">
            H&amp;D Hengda Industries Sdn Bhd
          </p>
          <p className="mt-3 text-sm leading-relaxed text-steel-600">
            {company.address.full}
          </p>
          <div className="mt-5 space-y-2 text-sm text-steel-600">
            {company.hours.map((h) => (
              <p key={h.day} className="flex justify-between border-b border-dashed border-steel-200 pb-2">
                <span>{lang === "zh" ? h.day_zh : h.day}</span>
                <span className="font-medium text-navy-900">
                  {lang === "zh" ? h.time_zh ?? h.time : h.time}
                </span>
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
