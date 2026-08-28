import { createClient, type SanityClient } from "@sanity/client";

/**
 * The read-only client the Next.js site uses to fetch content, now that
 * Sprint 12 has actually wired Industry Categories to it (see
 * PROJECT.md Section 7). Still returns `null` — rather than throwing —
 * whenever no real Sanity project is configured yet, since
 * `createClient()` throws synchronously if `projectId` is missing/empty.
 * Constructed lazily (not as a top-level `export const`) specifically so
 * that importing this module can never crash page rendering just because
 * `.env.local` hasn't been filled in yet — see getIndustries.ts, which is
 * the only thing that calls this.
 */
let cachedClient: SanityClient | null | undefined;

export function getSanityClient(): SanityClient | null {
  if (cachedClient !== undefined) {
    return cachedClient;
  }

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

  if (!projectId || projectId === "REPLACE_ME") {
    cachedClient = null;
    return cachedClient;
  }

  cachedClient = createClient({
    projectId,
    dataset,
    apiVersion: "2025-01-01",
    // Cached, CDN-served reads for the public site. Switch to
    // `useCdn: false` only for draft/preview modes if that gets added later.
    useCdn: true,
  });
  return cachedClient;
}

