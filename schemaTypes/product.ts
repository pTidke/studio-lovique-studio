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
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Singles", value: "singles" },
          { title: "Flower basket", value: "flower_basket" },
          { title: "Bouquets", value: "bouquets" },
          { title: "Flower pots", value: "flower_pots" },
          { title: "Magazine", value: "magazine" },
          { title: "Wall Art", value: "wall_art" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "isNew",
      type: "boolean",
      title: "New Arrival",
      initialValue: false,
    }),
    defineField({ name: "instagramLink", type: "url", title: "Instagram Product Link" }),
  ],
});
