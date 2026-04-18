const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-04-16";

export const sanityEnv = {
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_TOKEN,
  isConfigured: Boolean(projectId && dataset),
};
