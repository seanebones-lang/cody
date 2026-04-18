import { defineField, defineType } from "sanity";

export const aftercarePageType = defineType({
  name: "aftercarePage",
  title: "Aftercare Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "content", title: "Content", type: "array", of: [{ type: "block" }] }),
  ],
});
