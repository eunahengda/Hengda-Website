# H&D Hengda Industries Sdn Bhd — Corporate Website

A production-ready, bilingual (English / Chinese) Next.js 14 (App Router)
website for a Malaysian precision machining and metal fabrication company.

## Current Status

This project is **code only — it is not deployed to a live URL yet.**
Running `npm run dev` starts it on your own computer at
`http://localhost:3000`, which only you can see. To get a real public web
address (e.g. `www.hengdarepair.com`), it needs to be deployed — see
"Deploying to a Real Domain" below.

## Gallery is now filterable by industry

The full Gallery page (`/gallery`) shows filter pills for each industry
sector (Palm Oil, Food & Beverage, Packaging, Oil & Gas/Marine, Industrial &
Electronics, Logistics/Port). Each photo in `lib/data.ts` → `galleryItems`
is tagged with an `industrySlug`. A visitor from the packaging sector can
filter straight to packaging-related work. **This is the single most
valuable place to swap in real photos** — real, industry-specific project
photos build far more trust here than generic stock photos.

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (page-load and scroll animations)
- lucide-react (icons)
- Custom lightweight EN/ZH language switcher (no external i18n library)

## Project Structure

```
hd-website/
├── app/
│   ├── layout.tsx            Root layout, fonts, SEO metadata, JSON-LD
│   ├── page.tsx               Home page
│   ├── globals.css            Tailwind + design tokens
│   ├── sitemap.ts             Auto-generated sitemap.xml
│   ├── robots.ts              Auto-generated robots.txt
│   ├── not-found.tsx          Custom 404
│   ├── about/page.tsx         → renders components/AboutContent.tsx
│   ├── services/page.tsx      → renders components/ServicesContent.tsx
│   ├── industries/page.tsx    → renders components/IndustriesContent.tsx
│   ├── gallery/page.tsx       → renders components/GalleryContent.tsx
│   └── contact/page.tsx       → renders components/ContactContent.tsx
├── components/                 All section + shared UI components
├── lib/
│   ├── data.ts                 ALL editable content: company info, services,
│   │                            industries, gallery items, business hours,
│   │                            contact form subjects, nav links
│   └── i18n.tsx                Language switcher (EN/ZH) + UI-chrome strings
└── public/images/               Logo + gallery images
```

## Deploying to a Real Domain

1. Register the domain (e.g. on Namecheap, GoDaddy, or a Malaysian registrar) —
   this can be done any time, independently of the site build.
2. Push this project to a GitHub repository.
3. Sign up at [vercel.com](https://vercel.com) (free tier is enough), import
   the GitHub repo, and deploy. You'll get a live `.vercel.app` URL immediately.
4. In the Vercel project's Domain settings, add your real domain and follow
   the DNS instructions it gives you (usually just adding one or two records
   at your domain registrar). This takes minutes to hours to go live.
5. **Connecting the domain does not lock the site.** After that, every time
   the code is updated and pushed to GitHub, Vercel automatically redeploys
   within a minute or two — the domain keeps working, no reconfiguration
   needed.

## How to Add / Update Photos Yourself

This site has no admin panel or database (see "Where Content Lives" below),
so photos are added by editing code:

1. Put the image file in `public/images/gallery/your-photo.jpg` (or host it
   anywhere and use that URL, e.g. Cloudinary/Google Drive direct link).
2. Add an entry to the relevant array in `lib/data.ts`
   (`galleryItems` for the main project gallery, tagged with an
   `industrySlug`; `repairGalleryItems` for the repaired-products section).
3. Redeploy (if using Vercel + GitHub, just commit and push — it redeploys
   automatically).

If you'd rather not touch code each time, send me the photos (with a short
caption and which industry each belongs to) and I can add them and prepare
an updated build for you. A proper self-serve upload page is also possible
as a future addition if you end up updating photos often.

## Where Content Lives

Everything — company details, service descriptions, industries, gallery
captions, business hours — is stored as plain text/code in `lib/data.ts` and
`lib/i18n.tsx`, plus image files in `public/`. There is **no database**.
Updating content always means: edit the file → redeploy. This keeps hosting
free/cheap and the site fast, but does mean changes go through code rather
than a "log in and edit" admin dashboard.

## Editing Content

- **Company details, services, industries, hours, links, form subjects** →
  `lib/data.ts`. Every field has an English value and a matching `_zh` field
  for Chinese — keep both in sync when you edit.
- **UI labels (buttons, headings, nav)** → `lib/i18n.tsx`, in the `strings`
  object. Same `{ en, zh }` pattern.
- You do not need to touch component files for text changes.

## Language Switcher

A button in the top bar (desktop) and next to the menu icon (mobile) toggles
between English and Chinese. The choice is remembered in the visitor's
browser (localStorage), and only static English/Chinese strings are shown —
no live translation or external API is used, so text quality is fully in
your control.

## Running Locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build for Production

```bash
npm run build
npm run start
```

## Important Notes Before Going Live

1. **Gallery & background photos are stock placeholders** (free-license
   Unsplash images of generic machining/welding/gear close-ups). Replace the
   URLs in `lib/data.ts` (`galleryItems`, `repairGalleryItems`) and the
   images referenced directly inside `CompanyIntro.tsx`, `AboutContent.tsx`,
   and `Hero.tsx` with real photos of your workshop as soon as you can.
2. **Contact form has no email backend configured yet.** Right now it opens
   a pre-filled email to hengdarepair@gmail.com via `mailto:`, which requires
   the visitor to hit "send" themselves. To get enquiries delivered straight
   to your inbox automatically:
   - Sign up at [Formspree](https://formspree.io) (free tier is enough),
     create a form, and paste the endpoint URL into `company.formspreeEndpoint`
     in `lib/data.ts`. `ContactForm.tsx` already checks for this and will use
     it automatically once set.
3. **Google Review link is a placeholder.** `company.googleReviewLink` in
   `lib/data.ts` currently points to a generic Google Maps search. Once you
   claim your free Google Business Profile, replace it with the direct
   "Ask for reviews" link Google gives you so visitors land straight on the
   review box.
4. **Repair Gallery** (Gallery page, second section) is a manually maintained
   list for now — add new before/after photos by adding entries to
   `repairGalleryItems` in `lib/data.ts` and putting the image somewhere
   reachable (e.g. `public/images/gallery-repairs/` + import, or an image
   host URL). If you'd like a proper self-serve upload page (so you can add
   photos yourself without editing code), that's a reasonable next feature —
   just ask.
5. Update the placeholder domain `https://www.hdhengda.com` in
   `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` once you have a
   real domain.
6. The logo is rendered as styled text (not an image) because the uploaded
   logo photo is low-resolution — recreating it as text keeps it crisp at
   any size. If you get a vector (AI/EPS/SVG) or high-resolution version of
   the logo from your original designer, swap `components/Logo.tsx` to
   render that file via `next/image` instead.
