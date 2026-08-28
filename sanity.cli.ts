import { defineCliConfig } from "sanity/cli";

// Used by the Sanity CLI itself (`npm run studio:dev` / `studio:deploy`),
// separately from the Next.js app's own env handling. Reads from a
// `.env` / `.env.local` file at the repo root via SANITY_STUDIO_* names
// (the CLI's own convention) — see .env.local.example.
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "REPLACE_ME";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineCliConfig({
  api: { projectId, dataset },
});
