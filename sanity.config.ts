/**
 * Sanity Studio configuration.
 *
 * This Studio is deployed as its OWN standalone site (`npm run
 * studio:deploy`, see package.json) — it is NOT embedded into the
 * marketing Next.js app or the app/ route tree.
 *
 * Why standalone rather than an embedded /studio route: embedding a
 * Sanity Studio cleanly in a Next.js App Router site that already has a
 * single root layout (Navbar + page content + Footer, see app/layout.tsx)
 * means either (a) letting the Studio render underneath/around the site's
 * Navbar and Footer, which looks broken, or (b) restructuring app/ into
 * multiple root layouts so the Studio gets its own <html>/<body> — real
 * surgery on routing that already works. A standalone deployment sidesteps
 * that entirely: zero changes to any existing route, and it's genuinely
 * the more common setup for a small two-person project (developer +
 * non-technical owner) — one deploy target for the marketing site on
 * Vercel, one free deploy target for the Studio on Sanity's own hosting,
 * with no shared auth/session surface between them. See PROJECT.md
 * Section 7 for the full "why" writeup and how to switch to embedded later
 * if that's ever preferred.
 *
 * ⚠️ ARCHITECTURE ONLY — nothing here is wired into the live site yet.
 * To actually run this Studio:
 *   1. Create a free project at https://www.sanity.io/manage (~2 minutes)
 *   2. Copy .env.local.example to .env.local and fill in the project ID
 *   3. npm install (pulls in the sanity/next-sanity deps already added to
 *      package.json)
 *   4. npm run studio:dev        → runs the Studio locally at localhost:3333
 *      npm run studio:deploy     → publishes it to yourproject.sanity.studio
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "rdsc0q4z";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "hd-hengda-cms",
  title: "H&D Hengda — Project Gallery",

  projectId,
  dataset,

  schema,

  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
});
