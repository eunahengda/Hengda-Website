import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { getSanityClient } from "./client";

/**
 * Turns a Sanity image reference into a usable URL, e.g.:
 *   urlFor(project.images[0].asset).width(800).height(600).url()
 *
 * Not imported anywhere yet — this is the helper components will use once
 * a future sprint wires Sanity image data into ProjectGallery.tsx etc.
 * (Sprint 12 only connected Industry Categories, which have no images —
 * see PROJECT.md Section 7.) Builder is constructed lazily via
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
