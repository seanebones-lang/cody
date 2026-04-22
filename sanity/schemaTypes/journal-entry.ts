import { defineField, defineType } from "sanity";

export const journalEntryType = defineType({
  name: "journalEntry",
  title: "Journal Entry",
  type: "document",
  orderings: [{ title: "Newest", name: "newest", by: [{ field: "publishedAt", direction: "desc" }] }],
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Tattoo Story", value: "tattooStory" },
          { title: "Inspiration", value: "inspiration" },
          { title: "Behind the Scenes", value: "behindScenes" },
          { title: "Healing Journey", value: "healingJourney" },
          { title: "Studio Life", value: "studioLife" },
        ],
      },
      initialValue: "studioLife",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "artist" }],
      description: "Optional: link to an artist profile.",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Feature this entry",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage",
      featured: "featured",
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle: subtitle ?? "Journal",
        media,
      };
    },
  },
});
