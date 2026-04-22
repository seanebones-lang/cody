import { defineField, defineType } from "sanity";

export const portfolioServiceType = defineType({
  name: "portfolioService",
  title: "Portfolio Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "startingPrice",
      title: "Starting Price (USD)",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "durationLabel",
      title: "Duration",
      type: "string",
      description: "Example: 2-3 hours, half-day session.",
    }),
    defineField({
      name: "active",
      title: "Currently Offering",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "durationLabel",
      active: "active",
    },
    prepare({ title, subtitle, active }) {
      return {
        title: active ? title : `${title} (Inactive)`,
        subtitle: subtitle ?? "Service",
      };
    },
  },
});
