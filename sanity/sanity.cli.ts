import { defineCliConfig } from "sanity/cli";
import { sanityEnv } from "./env";

export default defineCliConfig({
  api: {
    projectId: sanityEnv.projectId as string,
    dataset: (sanityEnv.dataset ?? "production") as string,
  },
});
