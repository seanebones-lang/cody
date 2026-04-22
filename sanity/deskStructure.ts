import type { StructureResolver } from "sanity/structure";

const singletonTypes = new Set(["siteSettings", "aftercarePage"]);

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Aftercare")
        .child(S.document().schemaType("aftercarePage").documentId("aftercarePage")),
      S.divider(),
      S.listItem().title("Artists").child(S.documentTypeList("artist").title("Artists")),
      S.listItem().title("Portfolio Pieces").child(S.documentTypeList("portfolioPiece").title("Portfolio Pieces")),
      S.listItem().title("Portfolio Services").child(S.documentTypeList("portfolioService").title("Portfolio Services")),
      S.listItem()
        .title("Artist's Choice Designs")
        .child(S.documentTypeList("customDesignOffering").title("Artist's Choice Designs")),
      S.divider(),
      S.listItem().title("Studio Updates").child(S.documentTypeList("studioUpdate").title("Studio Updates")),
      S.listItem().title("Journal").child(S.documentTypeList("journalEntry").title("Journal")),
      S.divider(),
      S.listItem().title("Testimonials").child(S.documentTypeList("testimonial").title("Testimonials")),
      S.listItem().title("FAQ").child(S.documentTypeList("faqItem").title("FAQ")),
      S.listItem().title("Policies").child(S.documentTypeList("policyPage").title("Policies")),
      S.listItem().title("Sponsors").child(S.documentTypeList("sponsorPartner").title("Sponsors")),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId();
        return id ? !singletonTypes.has(id) : true;
      }),
    ]);
