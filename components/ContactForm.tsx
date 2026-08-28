"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { company, contactSubjects } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const { lang, t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: contactSubjects[0].en,
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    // If a Formspree (or similar) endpoint is configured in lib/data.ts,
    // submit directly so enquiries land in your inbox automatically.
    if (company.formspreeEndpoint) {
      try {
        const res = await fetch(company.formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          setStatus("success");
          return;
        }
        setStatus("error");
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    // Fallback with no backend configured yet: open a pre-filled email.
    const subject = encodeURIComponent(`${form.subject} — ${form.firstName} ${form.lastName}`.trim());
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nPhone: ${form.phone}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    );
    window.location.href = `${company.emailHref}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("success"), 600);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3 rounded-sm border border-signal-500/30 bg-signal-500/5 px-6 py-12 text-center"
          >
            <CheckCircle2 className="h-10 w-10 text-signal-500" />
            <p className="font-heading text-lg font-semibold uppercase text-navy-900">
              {t(strings.contactPage.successTitle)}
            </p>
            <p className="max-w-sm text-sm text-steel-600">
              {t(strings.contactPage.successBody)}
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="btn-outline-dark mt-2"
            >
              {t(strings.contactPage.sendAnother)}
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-steel-600">
                  {t(strings.contactPage.firstName)} *
                </label>
                <input
                  required
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-steel-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-signal-500"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-steel-600">
                  {t(strings.contactPage.lastName)} *
                </label>
                <input
                  required
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-steel-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-signal-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-steel-600">
                  {t(strings.contactPage.phone)} *
                </label>
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="012-345 6789"
                  className="w-full rounded-sm border border-steel-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-signal-500"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-steel-600">
                  {t(strings.contactPage.email)} *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-steel-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-signal-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-steel-600">
                {t(strings.contactPage.subject)} *
              </label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-sm border border-steel-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-signal-500"
              >
                {contactSubjects.map((s) => (
                  <option key={s.en} value={s.en}>
                    {lang === "zh" ? s.zh : s.en}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-steel-600">
                {t(strings.contactPage.message)} *
              </label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder={t(strings.contactPage.messagePlaceholder)}
                className="w-full resize-none rounded-sm border border-steel-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-signal-500"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">
                {lang === "zh"
                  ? "发送失败，请直接致电或 WhatsApp 联系我们。"
                  : "Something went wrong. Please call or WhatsApp us directly."}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary w-full sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> {t(strings.contactPage.sending)}
                </>
              ) : (
                <>
                  {t(strings.contactPage.submit)} <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
