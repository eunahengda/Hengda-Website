import { getSanityClient } from "./client";
import { ALL_INDUSTRY_CATEGORIES_QUERY } from "./queries";
import { industries as fallbackIndustries, type Industry } from "@/lib/data";

/**
 * Shape actually returned by ALL_INDUSTRY_CATEGORIES_QUERY against the
 * industryCategory schema (sanity/schemaTypes/documents/industryCategory.ts).
 */
type SanityIndustryCategory = {
  _id: string;
  title?: string;
  title_zh?: string;
  slug?: string;
  description?: string;
  description_zh?: string;
  imageUrl?: string | null;
};

/**
 * The industryCategory schema collects an `emoji`, not a lucide icon name —
 * IndustriesGrid.tsx renders icons via the lucide-based <Icon name=.../>
 * component, which `emoji` can't feed directly. Rather than change the
 * schema (out of scope this sprint — architecture was already approved) or
 * change how IndustriesGrid renders icons (would be a presentation change,
 * also out of scope), every Sanity-sourced industry gets this one shared
 * icon for now. Documented as a known limitation in PROJECT.md, not a bug.
 */
const DEFAULT_SANITY_INDUSTRY_ICON = "Factory";

/**
 * Returns the Industry Categories to render on the site. Tries Sanity
 * first; falls back to the existing hardcoded `industries` array in
 * lib/data.ts whenever Sanity isn't configured yet, has no published
 * content yet, returns a malformed result, or the request fails for any
 * reason (network error, wrong project ID, dataset not found, etc).
 *
 * This function must never throw — it runs during page rendering, and a
 * CMS hiccup should never be able to break the page for a visitor.
 */
export async function getIndustryCategories(): Promise<Industry[]> {
  const client = getSanityClient();
  if (!client) {
    return fallbackIndustries;
  }

  try {
    const results = await client.fetch<SanityIndustryCategory[]>(
      ALL_INDUSTRY_CATEGORIES_QUERY
    );

    const usable = (results ?? []).filter(
      (doc): doc is Required<Pick<SanityIndustryCategory, "slug" | "title">> &
        SanityIndustryCategory => Boolean(doc?.slug && doc?.title)
    );

    if (usable.length === 0) {
      return fallbackIndustries;
    }

    return usable.map((doc) => ({
      slug: doc.slug,
      title: doc.title,
      // Chinese copy is required in the Studio, but content can still be
      // published mid-translation in practice — fall back to English
      // rather than show a blank string to a Chinese-reading visitor.
      title_zh: doc.title_zh || doc.title,
      icon: DEFAULT_SANITY_INDUSTRY_ICON,
      description: doc.description ?? "",
      description_zh: doc.description_zh || doc.description || "",
      imageUrl: doc.imageUrl ?? undefined,
    }));
  } catch (error) {
    console.error(
      "[Sanity] Failed to fetch industry categories — falling back to lib/data.ts:",
      error
    );
    return fallbackIndustries;
  }
}
