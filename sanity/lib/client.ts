import { createClient } from "next-sanity";
import { sanityEnv } from "../env";

export const sanityClient = createClient({
  projectId: sanityEnv.projectId ?? "missing-project-id",
  dataset: sanityEnv.dataset ?? "production",
  apiVersion: sanityEnv.apiVersion,
  useCdn: true,
  perspective: "published",
});
