import Link from "next/link";

// Rendered as live text rather than a raster image: the original uploaded
// logo photo is low-resolution (207x175px), so any image crop/upscale of it
// stays visibly soft at real display sizes. Recreating it as styled text
// keeps the same "H&D" mark crisp at any size or screen density. If you
// later get a vector (AI/EPS/SVG) or high-resolution version of the logo,
// swap this component to render that file instead via next/image.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex shrink-0 flex-col leading-none ${className}`}
      aria-label="H&D Hengda Industries home"
    >
      <span className="font-serif text-3xl font-bold tracking-tight text-signal-500 sm:text-4xl">
        H<span className="mx-0.5 font-normal">&amp;</span>D
      </span>
      <span className="mt-1 block font-heading text-[11px] font-semibold uppercase tracking-wide text-navy-900">
        Hengda Industries Sdn Bhd
      </span>
      <span className="block font-heading text-[10px] uppercase tracking-wide text-steel-500">
        Hengda Repair &amp; Supply
      </span>
    </Link>
  );
}
