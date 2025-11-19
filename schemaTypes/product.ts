import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", title: "Product Name" }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({ name: "description", type: "text", title: "Description" }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "image" }],
      title: "Images",
    }),
    defineField({ name: "theme", type: "string", title: "Theme" }),
    defineField({ name: "whatsappLink", type: "url", title: "WhatsApp Enquiry Link" }),
    defineField({ name: "instagramLink", type: "url", title: "Instagram Product Link" }),
  ],
});
