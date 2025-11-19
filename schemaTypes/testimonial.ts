import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", title: "Customer Name" }),
    defineField({ name: "message", type: "text", title: "Message" }),
    defineField({ name: "date", type: "datetime", title: "Date" }),
    defineField({ name: "pfp", type: "image", title: "Profile" }),
  ],
});
