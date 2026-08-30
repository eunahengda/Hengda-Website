import { getSanityClient } from "./client";
import {
  ALL_PROJECTS_QUERY,
  PROJECT_BY_SLUG_QUERY,
  PROJECTS_BY_INDUSTRY_QUERY,
  FEATURED_PROJECTS_QUERY,
} from "./queries";

/**
 * Shapes actually returned by the project GROQ queries in
 * sanity/lib/queries.ts, against the `project` schema
 * (sanity/schemaTypes/documents/project.ts).
 */
type SanityImageRef = {
  asset?: { _ref: string; _type: string };
};

type SanityProjectImage = SanityImageRef & {
  _key?: string;
  alt?: string;
  alt_zh?: string;
};

type SanityProjectIndustry = {
  title?: string;
  title_zh?: string;
  slug?: string;
};

type SanityProject = {
  _id: string;
  title?: string;
  title_zh?: string;
  slug?: string;
  industry?: SanityProjectIndustry | null;
  description?: string;
  description_zh?: string;
  featured?: boolean;
  images?: SanityProjectImage[] | null;
  beforeImage?: SanityImageRef | null;
  afterImage?: SanityImageRef | null;
  material?: string[] | null;
  machineProcess?: string[] | null;
  seo?: { seoTitle?: string; seoDescription?: string } | null;
};

type SanityFeaturedProject = {
  _id: string;
  title?: string;
  title_zh?: string;
  slug?: string;
  industry?: SanityProjectIndustry | null;
  images?: SanityProjectImage[] | null;
};

export type ProjectIndustry = {
  title: string;
  title_zh: string;
  slug: string;
};

export type Project = {
  _id: string;
  slug: string;
  title: string;
  title_zh: string;
  industry: ProjectIndustry | null;
  description: string;
  description_zh: string;
  featured: boolean;
  images: SanityProjectImage[];
  beforeImage: SanityImageRef | null;
  afterImage: SanityImageRef | null;
  material: string[];
  machineProcess: string[];
  seo: { seoTitle?: string; seoDescription?: string } | null;
};

export type FeaturedProject = {
  _id: string;
  slug: string;
  title: string;
  title_zh: string;
  industry: ProjectIndustry | null;
  images: SanityProjectImage[];
};

function mapIndustry(industry?: SanityProjectIndustry | null): ProjectIndustry | null {
  if (!industry?.slug || !industry?.title) return null;
  return {
    title: industry.title,
    title_zh: industry.title_zh || industry.title,
    slug: industry.slug,
  };
}

function mapProject(doc: SanityProject): Project | null {
  if (!doc?.slug || !doc?.title) return null;
  return {
    _id: doc._id,
    slug: doc.slug,
    title: doc.title,
    title_zh: doc.title_zh || doc.title,
    industry: mapIndustry(doc.industry),
    description: doc.description ?? "",
    description_zh: doc.description_zh || doc.description || "",
    featured: doc.featured ?? false,
    images: doc.images ?? [],
    beforeImage: doc.beforeImage ?? null,
    afterImage: doc.afterImage ?? null,
    material: doc.material ?? [],
    machineProcess: doc.machineProcess ?? [],
    seo: doc.seo ?? null,
  };
}

function mapFeaturedProject(doc: SanityFeaturedProject): FeaturedProject | null {
  if (!doc?.slug || !doc?.title) return null;
  return {
    _id: doc._id,
    slug: doc.slug,
    title: doc.title,
    title_zh: doc.title_zh || doc.title,
    industry: mapIndustry(doc.industry),
    images: doc.images ?? [],
  };
}

/**
 * Every `client.fetch()` call below passes `next: { revalidate: 60 }` so
 * Next.js's fetch/Data Cache (which otherwise caches indefinitely and
 * persists across dev-server restarts — the exact cause of Crane
 * Shaft/Stamping not appearing) revalidates on roughly a 60s cadence
 * instead of never. Content stays fast (cached) but newly published
 * Sanity documents show up within about a minute, no rebuild or restart
 * required.
 */
const REVALIDATE = { next: { revalidate: 60 } } as const;

/**
 * Returns every published project (featured first, then newest). Follows
 * getIndustryCategories()'s never-throw contract — a Sanity hiccup or an
 * unconfigured project must never be able to break a page render.
 *
 * Unlike industries, there is no hardcoded legacy project catalogue to
 * fall back to, so the "nothing usable" case is simply an empty array —
 * callers render an empty state instead of stand-in content.
 */
export async function getAllProjects(): Promise<Project[]> {
  const client = getSanityClient();
  if (!client) return [];

  try {
    const results = await client.fetch<SanityProject[]>(ALL_PROJECTS_QUERY, {}, REVALIDATE);
    return (results ?? []).map(mapProject).filter((p): p is Project => p !== null);
  } catch (error) {
    console.error("[Sanity] Failed to fetch projects — showing none:", error);
    return [];
  }
}

/** Lightweight project cards for homepage-style highlight sections. */
export async function getFeaturedProjects(): Promise<FeaturedProject[]> {
  const client = getSanityClient();
  if (!client) return [];

  try {
    const results = await client.fetch<SanityFeaturedProject[]>(
      FEATURED_PROJECTS_QUERY,
      {},
      REVALIDATE
    );
    return (results ?? [])
      .map(mapFeaturedProject)
      .filter((p): p is FeaturedProject => p !== null);
  } catch (error) {
    console.error("[Sanity] Failed to fetch featured projects — showing none:", error);
    return [];
  }
}

export async function getProjectsByIndustry(industrySlug: string): Promise<Project[]> {
  const client = getSanityClient();
  if (!client || !industrySlug) return [];

  try {
    const results = await client.fetch<SanityProject[]>(
      PROJECTS_BY_INDUSTRY_QUERY,
      { industrySlug },
      REVALIDATE
    );
    return (results ?? []).map(mapProject).filter((p): p is Project => p !== null);
  } catch (error) {
    console.error(
      `[Sanity] Failed to fetch projects for industry "${industrySlug}" — showing none:`,
      error
    );
    return [];
  }
}

/**
 * Returns a single project by slug, or null if it doesn't exist, Sanity
 * isn't configured, or the request fails. Callers (app/projects/[slug])
 * should treat null as "not found" and call next/navigation's notFound().
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const client = getSanityClient();
  if (!client || !slug) return null;

  try {
    const result = await client.fetch<SanityProject | null>(
      PROJECT_BY_SLUG_QUERY,
      { slug },
      REVALIDATE
    );
    return result ? mapProject(result) : null;
  } catch (error) {
    console.error(`[Sanity] Failed to fetch project "${slug}":`, error);
    return null;
  }
}
