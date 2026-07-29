"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Search,
  Facebook,
  Languages,
} from "lucide-react";
import Logo from "./Logo";
import { company, nav } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);
  const { lang, toggleLang, t } = useLanguage();

  const mainNav = nav.filter((item) => item.href !== "/");

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/services?q=${encodeURIComponent(query.trim())}`);
    }
    setSearchOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility top bar */}
      <div className="hidden bg-navy-800 text-white lg:block">
        <div className="container-max flex items-center justify-between px-10 py-2 text-xs lg:px-16">
          <p className="font-mono uppercase tracking-[0.15em] text-steel-200">
            {t(strings.nav.celebrating).replace("{years}", String(company.yearsExperience))}
          </p>
          <div className="flex items-center gap-6">
            <a href={company.phoneHref} className="flex items-center gap-1.5 text-steel-200 hover:text-white">
              <Phone className="h-3.5 w-3.5" /> {company.phone}
            </a>
            <a href={company.emailHref} className="text-steel-200 hover:text-white">
              {company.email}
            </a>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-steel-200 hover:text-white"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-sm border border-white/20 px-2.5 py-1 text-steel-200 hover:border-white hover:text-white"
              aria-label="Toggle language"
            >
              <Languages className="h-3.5 w-3.5" />
              {lang === "en" ? "中文" : "EN"}
            </button>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="border-b border-steel-200 bg-white shadow-sm">
        <div className="container-max flex items-center justify-between gap-4 px-6 py-3 sm:px-10 lg:px-16">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1 rounded-sm px-4 py-2 font-heading text-sm font-medium uppercase tracking-wide transition-colors ${
                    active
                      ? "text-signal-500"
                      : "text-navy-800 hover:text-signal-500"
                  }`}
                >
                  {lang === "zh" ? item.label_zh : item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center text-navy-800 transition-colors hover:text-signal-500"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-steel-200 px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-wide text-navy-900 transition-colors hover:bg-steel-300"
            >
              {t(strings.nav.getQuotation)}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-navy-900 px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-navy-800"
            >
              {t(strings.nav.contactUs)}
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLang}
              className="flex h-9 items-center gap-1 rounded-sm border border-steel-300 px-2 text-xs font-semibold text-navy-800"
              aria-label="Toggle language"
            >
              <Languages className="h-4 w-4" />
              {lang === "en" ? "中文" : "EN"}
            </button>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center text-navy-900"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden overflow-hidden border-t border-steel-200 bg-steel-100 lg:block"
            >
              <form
                onSubmit={handleSearchSubmit}
                className="container-max flex items-center gap-3 px-10 py-4 lg:px-16"
              >
                <Search className="h-4 w-4 text-steel-500" />
                <input
                  ref={searchRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t(strings.nav.searchPlaceholder)}
                  className="w-full bg-transparent text-sm text-navy-900 outline-none placeholder:text-steel-500"
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-steel-200 bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-sm px-3 py-3 font-heading text-sm font-medium uppercase tracking-wide ${
                    pathname === item.href
                      ? "bg-steel-100 text-signal-500"
                      : "text-navy-800"
                  }`}
                >
                  {lang === "zh" ? item.label_zh : item.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-steel-200 pt-4">
                <a href={company.phoneHref} className="btn-outline-dark w-full text-xs">
                  <Phone className="h-4 w-4" /> {t(strings.nav.callUs)}
                </a>
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-xs"
                >
                  <MessageCircle className="h-4 w-4" /> {t(strings.nav.whatsappUs)}
                </a>
                <Link href="/contact" className="btn-outline-dark w-full text-xs">
                  {t(strings.nav.getQuotation)}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
