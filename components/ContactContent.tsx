"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import { company } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function ContactContent() {
  const { lang, t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t(strings.contactPage.eyebrow)}
        title={t(strings.contactPage.title)}
        description={t(strings.contactPage.description)}
      />

      <section className="section-pad bg-white">
        <div className="container-max grid grid-cols-1 gap-14 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-2">
            <h2 className="text-2xl font-semibold uppercase text-navy-900">
              {t(strings.contactPage.reachUsHeading)}
            </h2>
            <div className="mt-8 space-y-6">
              <a
                href={company.phoneHref}
                className="flex items-start gap-4 rounded-sm border border-steel-200 p-5 transition-colors hover:border-signal-500"
              >
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                <div>
                  <p className="font-heading text-sm font-semibold uppercase text-navy-900">
                    {t(strings.contactPage.callUs)}
                  </p>
                  <p className="mt-1 text-sm text-steel-600">{company.phone}</p>
                </div>
              </a>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-sm border border-steel-200 p-5 transition-colors hover:border-signal-500"
              >
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                <div>
                  <p className="font-heading text-sm font-semibold uppercase text-navy-900">
                    {t(strings.contactPage.whatsappUs)}
                  </p>
                  <p className="mt-1 text-sm text-steel-600">{company.phone}</p>
                </div>
              </a>
              <a
                href={company.emailHref}
                className="flex items-start gap-4 rounded-sm border border-steel-200 p-5 transition-colors hover:border-signal-500"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                <div>
                  <p className="font-heading text-sm font-semibold uppercase text-navy-900">
                    {t(strings.contactPage.emailUs)}
                  </p>
                  <p className="mt-1 text-sm text-steel-600">{company.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-sm border border-steel-200 p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                <div>
                  <p className="font-heading text-sm font-semibold uppercase text-navy-900">
                    {t(strings.contactPage.visitWorkshop)}
                  </p>
                  <p className="mt-1 text-sm text-steel-600">{company.address.full}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-sm border border-steel-200 p-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                <div>
                  <p className="font-heading text-sm font-semibold uppercase text-navy-900">
                    {t(strings.contactPage.businessHours)}
                  </p>
                  {company.hours.map((h) => (
                    <p key={h.day} className="mt-1 text-sm text-steel-600">
                      {lang === "zh" ? h.day_zh : h.day}: {lang === "zh" ? h.time_zh ?? h.time : h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-sm border border-steel-200 p-6 sm:p-9">
              <h2 className="text-2xl font-semibold uppercase text-navy-900">
                {t(strings.contactPage.formHeading)}
              </h2>
              <p className="mt-2 text-sm text-steel-600">
                {t(strings.contactPage.formNote)}
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GoogleMap />
    </>
  );
}
