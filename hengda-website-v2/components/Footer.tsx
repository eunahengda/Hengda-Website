"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  MessageCircle,
  Star,
} from "lucide-react";
import Logo from "./Logo";
import { company, nav, services } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-navy-950 text-steel-300">
      <div className="container-max grid grid-cols-1 gap-10 px-6 py-16 sm:px-10 md:grid-cols-2 lg:grid-cols-4 lg:px-16">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel-400">
            {t(strings.footer.tagline).replace("{years}", String(company.yearsExperience))}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-steel-300 transition-colors hover:border-signal-500 hover:text-signal-500"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-steel-300 transition-colors hover:border-signal-500 hover:text-signal-500"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={company.social.email}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-steel-300 transition-colors hover:border-signal-500 hover:text-signal-500"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <a
            href={company.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-sm border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-steel-200 transition-colors hover:border-signal-500 hover:text-signal-500"
          >
            <Star className="h-3.5 w-3.5" /> {t(strings.footer.rateUs)}
          </a>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            {t(strings.footer.navHeading)}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-signal-500">
                  {lang === "zh" ? item.label_zh : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            {t(strings.footer.servicesHeading)}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href="/services" className="transition-colors hover:text-signal-500">
                  {lang === "zh" ? s.title_zh : s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            {t(strings.footer.contactHeading)}
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
              <span>{company.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
              <a href={company.phoneHref} className="hover:text-signal-500">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
              <a href={company.emailHref} className="hover:text-signal-500">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
              <span>
                {company.hours.map((h) => (
                  <span key={h.day} className="block">
                    {lang === "zh" ? h.day_zh : h.day}: {lang === "zh" ? h.time_zh ?? h.time : h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max flex flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-steel-500 sm:flex-row sm:px-10 lg:px-16">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName}. {t(strings.footer.rights)}
          </p>
          <p>{t(strings.footer.registered)}</p>
        </div>
      </div>
    </footer>
  );
}
