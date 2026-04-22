import { defineField, defineType } from "sanity";

export const studioUpdateType = defineType({
  name: "studioUpdate",
  title: "Studio Update",
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
      name: "kind",
      title: "Update Type",
      type: "string",
      options: {
        list: [
          { title: "Schedule", value: "schedule" },
          { title: "Travel", value: "travel" },
          { title: "Booking", value: "booking" },
          { title: "Shop News", value: "shopNews" },
          { title: "Event / Convention", value: "event" },
        ],
      },
      initialValue: "shopNews",
    }),
    defineField({ name: "excerpt", title: "Short Excerpt", type: "text", rows: 3 }),
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
      name: "pinned",
      title: "Pin this update",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "kind",
      media: "content.0",
      pinned: "pinned",
    },
    prepare({ title, subtitle, media, pinned }) {
      return {
        title: pinned ? `📌 ${title}` : title,
        subtitle: subtitle ?? "Update",
        media,
      };
    },
  },
});
