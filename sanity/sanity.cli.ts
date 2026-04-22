import { defineCliConfig } from "sanity/cli";
import { sanityEnv } from "./env";

export default defineCliConfig({
  api: {
    projectId: (sanityEnv.projectId ?? "0yft11i7") as string,
    dataset: (sanityEnv.dataset ?? "production") as string,
  },
});
