import { defineField, defineType } from "sanity";

export const customDesignOfferingType = defineType({
  name: "customDesignOffering",
  title: "Custom Design Offering",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Artist's Choice",
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
      name: "isActive",
      title: "Accepting Custom Design Requests",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "text",
      rows: 4,
      description: "Short intro explaining your artist's choice process.",
    }),
    defineField({
      name: "preferredStyles",
      title: "Preferred Styles",
      type: "array",
      of: [{ type: "string" }],
      description: "Examples: Blackwork, Neo-traditional, Botanical, Script.",
    }),
    defineField({
      name: "startingPrice",
      title: "Starting Price (USD)",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "leadTimeWeeks",
      title: "Lead Time (weeks)",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "requestGuidelines",
      title: "Request Guidelines",
      type: "array",
      of: [{ type: "block" }],
      description: "What clients should include when requesting custom work.",
    }),
    defineField({
      name: "allowedPlacementAreas",
      title: "Allowed Placement Areas",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "bookingLink",
      title: "Booking / Request Form URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "heroImage",
      isActive: "isActive",
    },
    prepare({ title, media, isActive }) {
      return {
        title,
        subtitle: isActive ? "Requests open" : "Requests paused",
        media,
      };
    },
  },
});
