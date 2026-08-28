import ScrollReveal from "./ScrollReveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-steel-sheen text-white">
      <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-navy-900/10" aria-hidden="true" />
      <div className="relative container-max px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <ScrollReveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-signal-500" /> {eyebrow}
          </span>
          <h1 className="hero-text-shadow mt-5 max-w-2xl font-display text-3xl uppercase leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-300">
              {description}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
