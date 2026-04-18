import { defineField, defineType } from "sanity";

export const sponsorPartnerType = defineType({
  name: "sponsorPartner",
  title: "Sponsor Partner",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "url", title: "URL", type: "url" }),
    defineField({ name: "active", title: "Active", type: "boolean", initialValue: true }),
  ],
});
