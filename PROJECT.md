# PROJECT.md — H&D Hengda Industries Sdn Bhd Corporate Website

> **This file is the single source of truth for this project.** It reflects
> the actual state of the code in this repository as of the last update
> below — not the intended state, not what was asked for, but what has
> actually been built and verified by reading the code.
>
> **Update policy:** This file must be updated after every completed sprint
> (see Section 6/7). Do not let it drift from the real code — if a feature
> is partially built, say so explicitly rather than marking it done.

**Last updated:** 2026-07-30 (Sprint 11 — CMS Architecture)
**Repository:** `github.com/eunahengda/Hengda-Website`

---

## 1. Project Overview

A bilingual (English / Chinese) corporate marketing website for **H&D
Hengda Industries Sdn Bhd**, a precision machining and metal fabrication
company based in Tanah Tampoi, Johor Bahru, Malaysia, with 20+ years in
business. The site is built as a Next.js 14 (App Router) application styled
after the layout conventions of mecalusa.com, using the client's own "H&D"
wordmark as its brand identity.

The site currently covers: Home, About Us, Services, Industries We Serve
(in transition — see Section 5), and Contact, plus a bilingual language
switcher, a Formspree-connected enquiry form, and an embedded Google Map.

## 2. Business Goal

- Give H&D Hengda Industries a professional, modern web presence that
  matches the trust level of an established (20+ year) industrial supplier.
- Generate qualified enquiries (quotation requests) from factory owners,
  maintenance departments, procurement teams, and engineers.
- Build visitor confidence by letting potential customers self-identify
  their industry (e.g. Food Manufacturing, Packaging, Oil & Gas) and see
  relevant, credible examples of parts machined/repaired for that sector.
- Serve both English- and Chinese-reading visitors without relying on
  browser auto-translation.
- Rank in search results for precision machining / metal fabrication
  queries in Johor Bahru, and (pending) the wider Johor–Singapore–Malaysia
  industrial corridor.
- Eventually let non-technical staff at the company update photos/content
  themselves without needing a developer for every change (pending — see
  Section 5, CMS).

## 3. Current Status

🟢 **Build audit completed — the codebase builds cleanly as of this commit.**

A full build audit (Sprint 8.1, see Sections 6–7) was run against the code
actually in the repository, rather than against this document's prior
description of it. Result: `lib/data.ts` and `lib/i18n.tsx` in the repo are
still on the **original ("v1") content model** — 6 industries with an
`icon` field, separate `galleryItems` / `repairGalleryItems` arrays, and a
4-metric `machineCapabilities` list. `ProjectGallery.tsx`, `RepairGallery.tsx`,
and `IndustriesGrid.tsx` all correctly consume this v1 shape.

This document previously stated (as of the 2026-07-29 update) that a v2
data model — 8 emoji-tagged industries, a unified `galleryProjects` array,
real machine specs, and a new `materialCapabilities` export — had already
been written into `lib/data.ts`/`lib/i18n.tsx`, and that the three
components above were broken as a result. **That migration is not present
in the code that was audited.** Either it was never committed/merged, or it
was reverted; the exact cause wasn't investigated since it's outside this
sprint's scope. Section 12's former "build-breaking" issue has been removed
accordingly — treat the previous entry as inaccurate, not as a fixed bug.

Verified via `npx tsc --noEmit` (0 errors), `npx next lint` (0
warnings/errors), and a full `npm run build` (11/11 static pages generated,
no other errors). The Industries We Serve v2 redesign described in Section
5 is still fully pending — it hasn't been started, let alone half-finished.

Deployment is connected (GitHub → Vercel), but the last confirmed visit to
the production Vercel URL returned a 404. Since the local build now
verifiably succeeds, this should be re-checked by pushing the current
`main` branch and confirming the resulting Vercel deployment loads — see
Section 11.

**Sprint 9 update (2026-07-30):** Local routing, navigation, images, and
page-load health were verified directly (`npm run dev` + `curl` against
every route) — all clean, no fixes needed. **The GitHub repo state and the
live Vercel URL could not be verified from this environment** — see
Section 7.3 for exactly what was and wasn't checked, and Section 11 for
what we need from you to finish that sprint.

**Sprint 11 update (2026-07-30): CMS architecture complete and verified.**
A Sanity-based CMS architecture (schema for Industry Categories + Projects
— multiple images, before/after pairs, material, machine process,
featured flag, SEO fields) was designed, installed, type-checked, linted,
and confirmed not to affect the live build (11/11 pages still generate
cleanly). Full write-up, the "why Sanity" rationale, and the exact setup
steps to create a real Sanity project are in Section 7. **Nothing on the
live site changed** — no data was migrated, no page reads from Sanity yet.

## 4. Completed Features

- ✅ Next.js 14 (App Router) + TypeScript + Tailwind CSS project scaffold
- ✅ Design system: color palette sampled from the client's actual logo
  (brand blue), Work Sans (readable body/heading font) + Archivo-style
  bold display font for hero/page headers, replacing an earlier
  condensed-font pass the client found hard to read
- ✅ Logo: re-rendered as crisp styled text ("H&D" + "Hengda Industries Sdn
  Bhd" + "Hengda Repair & Supply") instead of the low-resolution uploaded
  photo, so it stays sharp at any size
- ✅ Sticky Navbar with a utility top bar (years-in-business strip, phone,
  email, Facebook), main nav, mobile menu, and a working keyword search
  box that jumps to the Services page
- ✅ Footer with company info, quick links, services list, business hours,
  social links, and a "Rate us on Google" link
- ✅ Homepage sections: full-bleed animated Hero, Featured Capabilities
  cards, Experience/quality band, Company Intro, Why Choose Us, Machine
  Capabilities strip, Industries grid, Project gallery preview, Contact
  Help band, Google Map
- ✅ Full bilingual EN/ZH system (`lib/i18n.tsx`) — a custom lightweight
  context/provider (no external i18n library), language choice persisted
  to `localStorage`, `<html lang>` kept in sync, toggle exposed in the
  Navbar (desktop + mobile)
- ✅ About, Services, Contact pages with full bilingual copy
- ✅ Services content (8 services: conventional lathe, milling, keyway
  milling, welding, shaping, custom fabrication, engineering parts
  manufacturing, repair & modification) — bilingual, data-driven from
  `lib/data.ts`
- ✅ Contact form (First Name / Last Name / Email / Subject dropdown /
  Message) wired to a **live Formspree endpoint**
  (`https://formspree.io/f/mqernrpp`) — currently delivers to the client's
  personal email; switching to a company email is a Formspree dashboard
  setting, not a code change
- ✅ "Our Clients" page and named client list **removed entirely** at the
  client's request (privacy/permission concerns); replaced with an
  industry-sector framing instead of naming specific companies
- ✅ Business hours, Facebook link, Google Maps embed updated to the
  client's real details
- ✅ SEO basics: per-page metadata, `sitemap.ts`, `robots.ts`, and a
  `LocalBusiness` JSON-LD block in the root layout
- ✅ Gallery filterable by industry (v1 model): `/gallery` shows filter
  pills per industry sector, backed by `galleryItems` (each tagged with an
  `industrySlug`) and a separate `repairGalleryItems` before/after section
- ✅ **Build verified clean** (Sprint 8.1 audit, 2026-07-30): `npx tsc
  --noEmit`, `npx next lint`, and `npm run build` all pass with zero errors
  against the current v1 data model.
- ✅ **CMS architecture built and verified** (Sprint 11, 2026-07-30): a
  standalone Sanity Studio — schema, config, controlled vocabularies,
  Next.js-side read helpers (unused so far) — see Section 7 for the full
  writeup. Not yet connected to a real Sanity project, and not yet wired
  into any page.

## 5. Pending Features

Ordered roughly by priority:

1. **Industries We Serve v2 — data model + UI, not yet started.** Prior
   versions of this document claimed the data-layer half of this was done;
   the Sprint 8.1 audit found it is not present in the code. This still
   needs, from scratch: the 8 emoji-tagged industries, the unified
   `galleryProjects` array (replacing `galleryItems` +
   `repairGalleryItems`) with optional before/after images, an industry
   "hub" page, dynamic `/industries/[slug]` detail pages with a
   Before/After toggle, and retirement of the old flat `/gallery` route
   once the new pages are live.
2. **Machine Capabilities data + UI update** — real client specs (6
   metrics: 5 machine specs + 1 tolerance figure) still need to replace the
   current 4 placeholder figures in `lib/data.ts`, and
   `MachineCapabilities.tsx`'s hardcoded 4-column layout will need updating
   to fit 6 metrics cleanly.
3. **Material Capabilities data + UI** — neither the `materialCapabilities`
   data (metals: mild steel, stainless steel, cast iron, aluminium, brass,
   copper; engineering plastics: Teflon/PTFE, Nylon, PU, UHMW-PE,
   Delrin/POM, Bakelite) nor a component to render it exist yet.
4. **Self-serve CMS — architecture done (Sprint 11), not yet connected.**
   The client wants to add project photos and descriptions themselves
   without editing code or contacting the developer each time. A Sanity
   Studio-based CMS architecture has been designed and verified (schema,
   dependencies, standalone Studio build) — see Section 7. What's still
   needed before the owner can actually use it:
   - A real Sanity project (free) — see Section 7 for exact steps.
   - `ProjectGallery.tsx`, `RepairGallery.tsx`, `IndustriesGrid.tsx` (or
     their eventual v2 replacements) rewritten to fetch from Sanity instead
     of `lib/data.ts`.
   - Existing `galleryItems`/`repairGalleryItems`/`industries` content
     re-entered into the Studio (not an automated migration — the schema
     isn't a field-for-field match, e.g. `material`/`machineProcess` are
     new).
5. **Regional SEO expansion** — current keyword list is generic
   ("precision machining Johor Bahru", etc.). Client has asked for
   targeting across Johor, Singapore, and Malaysia specifically — needs an
   expanded keyword list, updated per-page metadata, and possibly
   Singapore-facing copy adjustments.
6. **Real Google Business Profile review link** — `company.googleReviewLink`
   is currently a generic Google Maps search URL, not a real "write a
   review" deep link. Needs the client to claim/verify their Google
   Business Profile first.
7. **Real photography** — nearly all imagery site-wide (hero, about,
   services, gallery projects) is free-license Unsplash stock photography
   used as placeholders. This is explicitly flagged in code comments and
   the README as the single highest-impact swap for visitor trust once the
   client has real photos of their workshop and finished/repaired parts.
8. **Formspree notification email** — currently delivers to a personal
   email; needs to be switched to a company email address (done in the
   Formspree dashboard, not in code).
9. **Deployment verification** — push the current `main` branch and confirm
   the resulting Vercel URL actually loads; connect the client's real
   domain once purchased.

## 6. Sprint Roadmap (15 Sprints)

| # | Sprint | Status |
|---|--------|--------|
| 1 | Foundation & Design System — Next.js/TS/Tailwind scaffold, logo processing, color palette, fonts, base layout | ✅ Done |
| 2 | Core Pages & Content v1 — About/Services/Contact/Industries/Gallery pages, company data model, SEO basics (sitemap, robots, JSON-LD) | ✅ Done |
| 3 | Mecalusa-Inspired Redesign — utility top bar, main nav with search, full-bleed Hero, Featured Capabilities cards, Experience band | ✅ Done |
| 4 | Bilingual EN/ZH System — i18n context/provider, language switcher, site-wide translated strings | ✅ Done |
| 5 | Client Feedback Round 1 — logo text lines, brand-blue re-theme, readable fonts, removed named clients/"Our Clients" page, updated business hours/Facebook link, contact form subjects, Google review button, repair gallery section | ✅ Done |
| 6 | Gallery-by-Industry v1 — flat gallery with industry filter pills (superseded by Sprint 8/9) | ✅ Done (being replaced) |
| 7 | Deployment Enablement — GitHub + Vercel walkthrough with client, Formspree integration wired into `ContactForm.tsx` | ✅ Done |
| 8 | Industries We Serve v2 + Capabilities Data — new 8-industry emoji model, unified before/after `galleryProjects`, real machine specs, new material capability data | ⬜ **Not started.** Previously logged here as "data layer done, UI not started" — the 2026-07-30 audit (Sprint 8.1) found no trace of this in `lib/data.ts`/`lib/i18n.tsx`. Correcting the record rather than carrying the inaccurate status forward. |
| 8.1 | **Build Health Audit** — verify `npm run build`/`tsc`/`next lint` against the actual repo contents, correct this document to match | ✅ Done |
| 9 | Ship Industries We Serve v2 (data + UI) — build the 8-industry data model plus industry hub + `/industries/[slug]` detail pages, retire `/gallery`, update Machine Capabilities layout, ship Material Capabilities section | ⬜ Not started |
| 9.1 | **Deployment Verification** — confirm localhost, routing, nav, images, responsive markup, GitHub repo state, and live Vercel URL | 🟡 **Partially done — see Section 7.3.** Everything checkable locally passed; GitHub/Vercel status needs input from you. |
| 10 | Regional SEO Expansion — Johor/Singapore/Malaysia keyword targeting, per-page metadata updates | ⬜ Not started |
| 11 | **Self-Serve CMS Foundation** — storage/auth approach decided, schema designed, standalone Studio scaffolded, dependency conflicts resolved | ✅ **Done — see Section 7.** Architecture built and verified; not yet connected to a real Sanity project or to any page. |
| 12 | CMS Upload UI — admin page for uploading before/after photos + descriptions per industry, replacing hardcoded `galleryProjects` entries | ⬜ Not started |
| 13 | Real Content Swap — replace stock photos with real company photography, real Google review link, Formspree email switched to company address | ⬜ Not started |
| 14 | QA, Performance & Accessibility Pass — cross-device/browser testing, Lighthouse pass, broken-link check, end-to-end form test | ⬜ Not started |
| 15 | Launch & Handover — custom domain DNS cutover, final production verification, handover documentation for the client | ⬜ Not started |

## 7. Current Sprint

**Sprint 11 — CMS Architecture** ✅ **Done and verified.**

**Goal:** Design a CMS the site owner can use to add new project photos —
industry, multiple images, before/after pairs, description, material,
machine process, featured flag, SEO title/description — without editing
code. Architecture only: no data migration, no wiring into live pages.

### What was built

- **`sanity/schemaTypes/documents/industryCategory.ts`** — one document
  type per industry sector (title/title_zh, slug, emoji, description/
  description_zh, display order).
- **`sanity/schemaTypes/documents/project.ts`** — the type the owner will
  use most. Covers every requirement in the brief:
  - Industry Category → reference to `industryCategory`
  - Multiple Images → an image array, each with required alt text (en/zh)
  - Before/After Images → `beforeImage`/`afterImage` fields with a
    validation rule that blocks saving an "after" without a "before" and
    vice versa — so a half-documented pair can't go live
  - Description → text field (en/zh)
  - Material / Machine Process → tag-picker arrays backed by a controlled
    vocabulary (`sanity/schemaTypes/options.ts`) so the owner clicks
    existing tags instead of typing free text — sourced from this site's
    actual services list and the material list already drafted in
    Section 5
  - Featured Project → a boolean toggle
  - SEO Title / SEO Description → a reusable `seo` object
    (`sanity/schemaTypes/objects/seo.ts`) with character-count warnings
  - Fields are grouped into Content / Photos / Details / SEO tabs in the
    Studio, in the order a non-programmer would fill them in
- **`sanity/structure.ts`** — puts "Projects" first in the Studio's left
  nav (what the owner opens most), "Industry Categories" second
- **`sanity/lib/client.ts`, `image.ts`, `queries.ts`** — the read-side
  helpers a future sprint will use to actually fetch this content into
  the Next.js site. Written now, matched against the schema, but **not
  imported by any component** — connecting them is Sprint 12, not this one
- **`sanity.config.ts`, `sanity.cli.ts`** — Studio configuration
- **`.env.local.example`** — placeholders only, no real values, already
  covered by `.gitignore`
- **`next.config.mjs`** — `cdn.sanity.io` added to `remotePatterns` ahead
  of time (harmless now, required before any page can render a Sanity
  image later)

### Why a standalone Studio, not an embedded `/studio` route

Sanity Studio is normally embeddable directly inside a Next.js app at a
route like `/studio`. This app's root layout
(`app/layout.tsx`) unconditionally wraps every route in the marketing
site's `Navbar`/`Footer`. Making an embedded Studio render cleanly would
have meant restructuring `app/` into multiple root layouts so `/studio`
gets its own `<html>`/`<body>` — real surgery on routing that currently
works, for a feature this sprint was explicitly scoped to build as
architecture only. A **standalone Studio**, deployed independently via
`npm run studio:deploy` to a free `yourproject.sanity.studio` URL, avoids
that entirely: zero changes to any existing route or page, and it's a
common, fully-supported setup for exactly this situation — one deploy
target for the marketing site (Vercel), one for the content tool (Sanity's
own hosting), no shared auth surface between them. Embedding can still be
revisited later if preferred once the routing restructure is worth doing.

### Dependency conflict — found and resolved

The latest published Sanity packages (`sanity@6.x`, `next-sanity@13.x`)
require **React 19**. This project is on **React 18.3.1** to match
Next.js 14.2.5, and upgrading React was out of scope (that's a framework
change, not a CMS architecture change). Resolved by pinning to the last
versions with React 18 support, confirmed via `npm view <pkg>
peerDependencies` against each other before installing:

| Package | Version pinned | Why this one |
|---|---|---|
| `sanity` | `3.99.0` | Peer-supports `react ^18 \|\| ^19`; last major line before the 6.x React-19-only jump |
| `next-sanity` | `9.12.3` | Peer-requires `next ^14.2`, `react ^18.3`, `sanity ^3.99.0`, `@sanity/client ^7.6.0` — matches this project and the pinned `sanity` version exactly |
| `@sanity/vision` | `3.99.0` | Kept in lockstep with `sanity`'s version (Studio plugin) |
| `@sanity/image-url` | `^2.1.1` | No conflicting peers |
| `styled-components` | `^6.1.15` | Peer dependency of Sanity Studio itself, not previously in this project |

### Verification (all run this sprint, all passing)

- `npm install` → **installed clean, no `ERESOLVE` errors** with the
  pinned versions above (confirmed all five packages present in
  `node_modules` at the exact pinned versions).
- `npx tsc --noEmit` → **0 errors** (covers every new `sanity/*.ts` file,
  `sanity.config.ts`, `sanity.cli.ts`).
- `npx next lint` → **0 warnings/errors**.
- `npm run build` → **11/11 static pages generated, 0 errors** — run
  against a throwaway copy with `next/font/google` stubbed out, same as
  Sprint 8.1/9.1, purely because this sandbox has no outbound access to
  `fonts.googleapis.com`; the real font imports in the delivered code are
  untouched. This build result confirms the new CMS files (currently
  imported by nothing) have **zero effect** on the live site — exactly
  what "architecture only" was supposed to mean.

### What this sprint deliberately did NOT do

- No existing content was migrated into Sanity — `lib/data.ts` is
  untouched, still the live source of truth for every page.
- No component (`ProjectGallery.tsx`, `RepairGallery.tsx`,
  `IndustriesGrid.tsx`, etc.) was changed to read from Sanity.
- No real Sanity project/dataset exists yet — `projectId` is currently the
  placeholder `"REPLACE_ME"` in `sanity.config.ts`/`sanity.cli.ts`. See the
  setup guide below.

### 7.1 Why Sanity (and not something else)

Four realistic options were weighed against this project's actual
constraints — a small business client, a non-technical owner who needs to
self-serve, an existing free/cheap-tier Vercel+GitHub setup, and a site
that's currently 100% static content with no database:

| Option | Verdict | Why |
|---|---|---|
| **Sanity** (chosen) | ✅ | Generous free tier (no credit card, unlimited documents); built-in image CDN with hotspot cropping — directly solves the "multiple images" and "before/after" requirements without writing any upload/resize code; Studio is a polished, form-based editor genuinely usable by a non-programmer once the schema exists; official first-class Next.js integration (`next-sanity`) for when this gets wired in; schema-as-code means the whole content model in this sprint is reviewable, versioned text, not clicks in a vendor dashboard |
| Fully custom (Vercel Blob + Postgres/KV + a hand-built `/admin` route) | ❌ Rejected | No third-party dependency, but the developer would have to build and maintain auth, upload forms, image resizing, and validation from scratch. That's a real ongoing maintenance burden for a small marketing site, and the result would still be less polished than a mature Studio product — high build cost for a worse non-programmer experience |
| Decap CMS (git-based, formerly Netlify CMS) | ❌ Rejected, but reasonable | Free, no third-party SaaS at all — content saves as files via a GitHub commit. Genuinely worth reconsidering if the client would rather not depend on any external vendor. Downsides for this project: photo-heavy content stored in git can bloat repo size over time, the editing UI is noticeably rawer than Sanity's, and every save requires a GitHub OAuth round-trip. Sanity's asset CDN and editorial polish outweighed this for a photo gallery specifically |
| Contentful / Storyblok / headless WordPress | ❌ Rejected | Contentful's free tier is tighter (space/API-call limits) for comparable functionality; WordPress-as-headless adds a whole second hosting target and admin surface for a site this small — disproportionate complexity for what's needed here |

**Bottom line:** this is fundamentally a *photo management* problem
(multiple images, before/after pairs, captions) wrapped in a small
taxonomy (industries, materials, processes). Sanity's image pipeline and
form-based Studio solve exactly that with the least amount of code to
build and maintain, at zero cost at this site's scale.

### 7.2 Setup Guide — Creating Your Sanity Project

Nobody has to do anything to the code for these steps — this is entirely
in the Sanity website and one local `.env.local` file.

**1. Create a free Sanity account and project**
1. Go to **[sanity.io/manage](https://www.sanity.io/manage)** and sign up
   (email, or continue with Google/GitHub) — no credit card required.
2. Click **Create project**.
3. Give it a name, e.g. `H&D Hengda Website`.
4. Sanity creates the project and takes you to its dashboard.

**2. Get your Project ID**
- It's shown right on the project dashboard at sanity.io/manage, directly
  under the project name (a short string like `abc12xyz`).
- Also visible any time under **Project → Settings → API** on that same
  site.

**3. Get your Dataset name**
- Every new project comes with one dataset already created, named
  `production` by default.
- Visible under **Project → Datasets** on the dashboard. Unless there's a
  specific reason to create a second one (e.g. a separate "staging" copy
  later), just use `production` — it's what this codebase's config files
  already default to.

**4. Create an API Token** *(not required to use the Studio day-to-day —
logging in with your Sanity account handles that. You only need a token
for script-based/automated access — e.g. a future bulk-import script, or
if the dataset is later set to private and the live website needs to read
from it without a logged-in user.)*
1. On the project dashboard, go to **API → Tokens**.
2. Click **Add API token**.
3. Give it a name, e.g. `Website Read Token`.
4. Choose a permission level:
   - **Viewer** — read-only, correct for a token the live website would
     use to fetch content (once that gets wired in a future sprint).
   - **Editor**/**Administrator** — only needed for a script that writes
     data (e.g. a one-time bulk import) — don't use these for anything
     that ends up in the website's own code or a browser.
5. Click **Save**, then **copy the token immediately** — Sanity only shows
   it once. If it's lost, delete that token and create a new one.
6. Treat this token like a password: never commit it to GitHub, never put
   it in a `NEXT_PUBLIC_*` variable (those get shipped to every visitor's
   browser).

**5. Configure the environment variables**
1. In the project folder, copy `.env.local.example` to a new file named
   `.env.local` (this filename is already in `.gitignore` — it will never
   get committed).
2. Fill in the values from steps 2–4:

   ```
   SANITY_STUDIO_PROJECT_ID=abc12xyz
   SANITY_STUDIO_DATASET=production

   NEXT_PUBLIC_SANITY_PROJECT_ID=abc12xyz
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

   (Project ID and dataset are the same values in both places — see the
   comment at the top of `.env.local.example` for why there are two
   pairs.) Leave the API token out of `.env.local` entirely unless/until a
   future sprint specifically needs it — it isn't read by anything yet.
3. Run `npm install` if you haven't already (pulls in the Sanity packages
   already added to `package.json` in this sprint).
4. Run `npm run studio:dev` — the Studio opens locally at
   `http://localhost:3333`, connected to your real project. Log in with
   the same account used in step 1.
5. When ready to give the owner their own login: run `npm run
   studio:deploy` once, which asks for a subdomain (e.g.
   `hd-hengda.sanity.studio`) and publishes the Studio there. Invite the
   owner as a project member (**Project → Members → Invite** on
   sanity.io/manage) so they can log in with their own Google/email
   account — no shared password needed.

**What happens after this:** nothing on the live website changes yet. The
Studio becomes usable for entering content, but no page reads from it
until a future sprint (Section 5, item 4) rewrites `ProjectGallery.tsx`
etc. to fetch from Sanity using the queries already written in
`sanity/lib/queries.ts`.

### 7.3 Archived — Sprint 9.1 (Deployment Verification) findings

Kept here for reference since Sections 11–12 still point back to this
sprint's findings; superseded as "current sprint" by Sprint 11 above.

**Verified and passing:** localhost (`npm run dev` + `curl` on every
route, all `200`, unknown route `404`s correctly), internal navigation
(every `href` resolves to a real route), images (no broken/undefined
`src`, remote host allow-listed), page-load health (no runtime/hydration
errors), and responsive markup (viewport meta present, 94 `sm:`/`md:`/
`lg:` classes, working mobile menu) — all confirmed clean, nothing fixed
because nothing was broken.

**Could not be verified from this environment:** GitHub repo state
(`github.com/eunahengda/Hengda-Website` not discoverable via search, no
authenticated access) and the live Vercel URL (no specific subdomain
recorded anywhere in this repo). Still outstanding — see Section 11.

**Unrelated discrepancy found:** `lib/data.ts` → `company.formspreeEndpoint`
is an empty string in the code, not the live endpoint this document
described — the contact form currently has no submit backend wired. Not
fixed, since it was outside that sprint's scope — see Section 12, item 8.

## 8. Tech Stack

- **Framework:** Next.js 14.2.5 (App Router), React 18.3, TypeScript 5.5
- **Styling:** Tailwind CSS 3.4 (custom theme: brand-blue palette sampled
  from the client's logo, charcoal/steel greys, Work Sans + display font,
  IBM Plex Mono for small spec labels)
- **Animation:** Framer Motion 11
- **Icons:** lucide-react 0.417 (used for UI icons; industries use emoji
  instead of icon components)
- **i18n:** custom in-house EN/ZH context/provider (`lib/i18n.tsx`) — no
  external i18n library
- **Forms:** Formspree (external, free tier) for contact-form email delivery
- **Hosting/CI:** Vercel, connected to a GitHub repository
  (`eunahengda/Hengda-Website`) for auto-deploy on push
- **Images:** free-license Unsplash placeholder photography via
  `next/image` with `images.unsplash.com` / `images.pexels.com` /
  `cdn.sanity.io` as allowed remote patterns (`next.config.mjs`) — the
  Sanity CDN entry is forward-looking, added in Sprint 11, not used by any
  page yet.
- **CMS (architecture only, Sprint 11):** Sanity — `sanity@3.99.0`,
  `next-sanity@9.12.3`, `@sanity/vision@3.99.0`, `@sanity/image-url@2.1.1`,
  `styled-components@6.1.15+` (peer dep of Sanity Studio). Pinned to these
  versions specifically because current-latest Sanity packages require
  React 19; this project is on React 18.3.1 to match Next.js 14. Deployed
  as a **standalone Studio** (`npm run studio:deploy` → free
  `*.sanity.studio` URL), not embedded into the Next.js app — see Section 7
  for why.
- **No database in the live site yet.** All content the site actually
  renders still lives in `lib/data.ts` / `lib/i18n.tsx` as code, and in
  `public/images/`. The Sanity CMS above is the decided approach for
  replacing this (Section 5, item 4) but isn't connected yet.

## 9. Folder Structure

```
hd-website/
├── PROJECT.md                  This file
├── README.md                   Setup, deployment, and content-editing guide
├── package.json / tsconfig.json / tailwind.config.ts / next.config.mjs / postcss.config.js
├── app/
│   ├── layout.tsx               Root layout: fonts, SEO metadata, JSON-LD, LanguageProvider
│   ├── page.tsx                 Homepage
│   ├── globals.css              Tailwind base + design tokens/utilities
│   ├── sitemap.ts                Auto-generated sitemap.xml (lists /gallery — correct for current v1 model)
│   ├── robots.ts                 Auto-generated robots.txt
│   ├── not-found.tsx             Custom 404 page
│   ├── about/page.tsx            → renders components/AboutContent.tsx
│   ├── services/page.tsx         → renders components/ServicesContent.tsx
│   ├── industries/page.tsx       → renders components/IndustriesContent.tsx (v2 rebuild still pending, not started)
│   ├── gallery/page.tsx          → renders components/GalleryContent.tsx (live route; retire once v2 industry pages ship)
│   └── contact/page.tsx          → renders components/ContactContent.tsx
├── components/
│   ├── Navbar.tsx, Footer.tsx, Logo.tsx, WhatsAppFloat.tsx     Global chrome
│   ├── Hero.tsx, FeaturedCapabilities.tsx, ExperienceBand.tsx,
│   │   CompanyIntro.tsx, WhyChooseUs.tsx, MachineCapabilities.tsx,
│   │   ContactHelp.tsx, GoogleMap.tsx, CTASection.tsx           Homepage sections
│   ├── IndustriesGrid.tsx, ProjectGallery.tsx, RepairGallery.tsx  Verified working against current v1 lib/data.ts
│   ├── AboutContent.tsx, ServicesContent.tsx, IndustriesContent.tsx,
│   │   GalleryContent.tsx, ContactContent.tsx                   Page-body client components
│   ├── ContactForm.tsx           Formspree-wired enquiry form
│   ├── PageHeader.tsx, ScrollReveal.tsx, Icon.tsx                Shared helpers
├── lib/
│   ├── data.ts                   All editable content: company info, services,
│   │                              industries (v1, 6 sectors), galleryItems,
│   │                              repairGalleryItems, machineCapabilities,
│   │                              nav, contact subjects, Formspree endpoint
│   └── i18n.tsx                  Language provider/context + all bilingual UI strings
├── sanity/                       CMS architecture (Sprint 11) — NOT wired into any page yet
│   ├── schemaTypes/
│   │   ├── index.ts                        Exports the full schema array
│   │   ├── documents/industryCategory.ts   Industry Category document type
│   │   ├── documents/project.ts            Project document type (images, before/after,
│   │   │                                    material, machine process, featured, SEO)
│   │   ├── objects/seo.ts                  Reusable SEO Title/Description object
│   │   └── options.ts                      Material / Machine Process controlled vocab lists
│   ├── structure.ts              Studio left-nav ordering (Projects, then Industry Categories)
│   └── lib/
│       ├── client.ts             Read-only Sanity client for the future Next.js read side
│       ├── image.ts              urlFor() image URL builder helper
│       └── queries.ts            GROQ queries matching the schema (unused so far)
├── sanity.config.ts              Studio config (schema + plugins + project/dataset)
├── sanity.cli.ts                 Sanity CLI config (studio:dev / studio:deploy)
├── .env.local.example            Sanity project ID/dataset placeholders — copy to .env.local
└── public/images/                Logo assets + placeholder imagery references
```

## 10. Coding Rules

- **Single source of truth for content:** all editable company text lives
  in `lib/data.ts`; all UI-chrome strings live in `lib/i18n.tsx`. Every
  user-facing string needs both an `en` and a `zh` value — never hardcode
  English-only text in a component.
- **No new content directly in components.** If a component needs new
  copy, add it to `lib/data.ts` or `lib/i18n.tsx` first, then reference it.
- **Data shape changes require a matching component update in the same
  change.** An earlier version of this document (before the Sprint 8.1
  audit) incorrectly recorded the build as broken for this exact reason —
  it wasn't, but the rule stands as the thing to actually watch for.
- **Client components** (`"use client"`) are used only where interactivity
  is required (language switching, forms, scroll-triggered animation,
  filters). Page-level files stay server components so `metadata` exports
  keep working; page bodies that need interactivity are split into a
  separate `*Content.tsx` client component, per the existing pattern.
- **Images** go through `next/image`; new external image hosts must be
  added to `remotePatterns` in `next.config.mjs` before use.
- **Icons** use `lucide-react` via the shared `Icon.tsx` name-lookup
  component for services/features; industries use emoji directly instead
  of icon components (per client request).
- **No fabricated before/after documentation.** Only mark a gallery project
  with a `beforeImage` when a real (or clearly-labelled demo) before photo
  exists — do not imply false repair documentation with stock photography.
- **No named third-party clients or logos** are displayed anywhere on the
  site, per the client's explicit instruction — describe industries served
  in general terms instead.
- Keep `PROJECT.md` and `README.md` updated whenever a sprint closes or a
  structural decision changes.

## 11. Deployment Status

- **Hosting:** Vercel, connected via GitHub (`eunahengda/Hengda-Website`,
  branch `main`) for automatic redeploys on push. **Not independently
  verified this sprint** — see Section 7.3. If this has changed (different
  repo, different branch, different Vercel project), this document needs
  updating.
- **Formspree:** ⚠️ `lib/data.ts` → `company.formspreeEndpoint` is
  currently an **empty string** in the code checked this sprint, not the
  `https://formspree.io/f/mqernrpp` endpoint previously documented here.
  The contact form has no submit backend wired until this is set back —
  see Section 7.3 for detail. Not fixed here since it's outside that
  sprint's routing/deployment scope.
- **Domain:** no custom domain connected yet; client is evaluating options
  (e.g. `hengdarepair.com`). Vercel's own `*.vercel.app` alias was the last
  target tested, but **the exact URL isn't recorded anywhere in this repo**
  — needed to actually verify the live deployment (Section 7.3).
- **Last known deployment result:** ❌ the assigned Vercel URL returned a
  404 as of the last check. `npm run build` passes locally against the
  code in this session (confirmed twice now, Sprints 8.1 and 9.1) as long
  as the build environment has normal internet access for Google Fonts —
  see Section 7.3 for the font-fetch caveat. **This still needs a real check
  against the actual Vercel deployment**, which requires either the
  project URL or GitHub/Vercel access neither of which this environment
  has.
- **Local development:** ✅ confirmed working this sprint — `npm run dev`
  starts cleanly, and every route (`/`, `/about`, `/services`,
  `/industries`, `/gallery`, `/contact`) returns `200` with no console
  errors. (Windows users may still need
  `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` in PowerShell, or
  Command Prompt instead, to run npm scripts — unrelated to this sprint's
  findings, kept for reference.)

## 12. Known Issues

Four items formerly listed here (stale `galleryItems`/`repairGalleryItems`/
`industry.icon` references breaking the build; `app/gallery/page.tsx` being
a "stale" artifact of a completed migration; `MachineCapabilities.tsx`
mismatching a 6-metric dataset; `materialCapabilities` having no UI) were
**removed during the 2026-07-30 Sprint 8.1 audit** — none of them describe
the code that's actually in the repo. See Section 3 and Section 7.3 for what
was actually found. Remaining real issues:

1. **Industries We Serve v2 doesn't exist yet.** Not a bug — a not-started
   feature. See Section 5, item 1.
2. **All photography is stock placeholder imagery** (free-license
   Unsplash), not real photos of the client's workshop, staff, or actual
   finished/repaired parts.
3. **`repairGalleryItems` entries are single before/after-style photos with
   a caption**, not paired before/after images — there's no before/after
   toggle in the current v1 UI. If the client wants a true before/after
   comparison view, that's part of the still-pending v2 work (Section 5,
   item 1), not a bug in the current design.
4. **Google review link is a generic Maps search URL**, not a verified
   Google Business Profile review link.
5. **Formspree notifies a personal email**, not a company address.
6. **No CMS/admin upload capability exists yet** — every content or photo
   change currently requires a code edit and redeploy.
7. **Deployed Vercel URL previously 404'd and still hasn't been
   re-checked** — not because of a code problem (local build/routing is
   confirmed clean as of Sprint 9.1), but because this environment has no
   access to the actual GitHub repo state or a live Vercel project URL.
   Needs you to supply either, or to check it directly.
8. **`company.formspreeEndpoint` is empty**, not the live endpoint this
   document previously described — contact form has no submit backend
   wired right now. Found during Sprint 9.1 page-load checks; not fixed
   since it's outside this sprint's scope.

## 13. Definition of Done

A sprint (or feature within it) is only considered **done** when all of
the following are true:

- [ ] `npm run build` completes with no TypeScript or lint errors.
- [ ] The feature/page works correctly in **both** English and Chinese
      (no missing translation falls back to a blank string or English
      leaking into the Chinese view, or vice versa).
- [ ] The feature is verified in a mobile viewport as well as desktop.
- [ ] Any new or changed content lives in `lib/data.ts` / `lib/i18n.tsx`,
      not hardcoded inside a component.
- [ ] No named third-party client or logo is displayed anywhere.
- [ ] No fabricated before/after "repair" documentation is presented as
      real without being clearly a placeholder in code comments.
- [ ] The deployed Vercel preview/production URL for the branch actually
      loads the change (not just "the local dev server works").
- [ ] `PROJECT.md` is updated: the sprint's row in Section 6 is marked
      done, Section 4/5 (Completed/Pending) are updated accordingly, and
      any newly discovered issues are added to Section 12.
- [ ] `README.md` is updated if the change affects how someone would run,
      edit, or deploy the project.
