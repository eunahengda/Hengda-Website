import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { getSanityClient } from "./client";

/**
 * Turns a Sanity image reference into a usable URL, e.g.:
 *   urlFor(project.images[0].asset).width(800).height(600).url()
 *
 * Used by ProjectsContent.tsx, ProjectDetailContent.tsx, and
 * IndustryDetailContent.tsx. Builder is constructed lazily via
 * getSanityClient() so importing this file can never throw just because
 * Sanity isn't configured yet — same reasoning as client.ts.
 */
export function urlFor(source: Image) {
  const client = getSanityClient();
  if (!client) {
    throw new Error(
      "urlFor() was called but no Sanity project is configured yet (NEXT_PUBLIC_SANITY_PROJECT_ID is unset). This is expected until a real project exists — see PROJECT.md Section 7.2."
    );
  }
  return createImageUrlBuilder(client).image(source);
}

const ASSET_DIMENSIONS_RE = /-(\d+)x(\d+)-/;

/**
 * Reads the real width/height Sanity encodes directly in an image asset's
 * `_ref` (e.g. "image-<hash>-1200x630-png") and returns its aspect ratio,
 * so cards can size their image container to the photo's own proportions
 * instead of forcing a fixed crop. Clamped to a 9:16–16:9 range so a
 * pathological upload can't break the grid layout, while still preserving
 * true shape for any realistic photo — including the portrait 9:16 case
 * product photos are explicitly allowed to be. Falls back to 4:3 if the
 * ref can't be parsed (e.g. asset missing).
 */
export function getImageAspectRatio(
  source: { asset?: { _ref?: string } } | null | undefined,
  fallback = 4 / 3
): number {
  const match = source?.asset?._ref?.match(ASSET_DIMENSIONS_RE);
  if (!match) return fallback;

  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!width || !height) return fallback;

  const MIN_RATIO = 9 / 16;
  const MAX_RATIO = 16 / 9;
  return Math.min(MAX_RATIO, Math.max(MIN_RATIO, width / height));
}
