import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || process.env.TINA_CLIENT_ID || "2e6aea0b-fb41-43e2-931b-f09b0c7fde2f",
  token: process.env.TINA_TOKEN || "8a3065b15d8e0b6f8dfc8a7be6b9784bc34d345b",

  build: {
    outputFolder: "admin",
    publicFolder: "",
  },
  
  media: {
    tina: {
      mediaRoot: "assets/images",
      publicFolder: "",
    },
  },
  
  schema: {
    collections: [
      {
        name: "service",
        label: "Services",
        path: "content/services",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Service Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "string",
            name: "price",
            label: "Price",
          },
          {
            type: "string",
            name: "duration",
            label: "Duration",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Individual Coaching", "Group Programs", "Workshops", "Retreats"],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Description",
            isBody: true,
          },
        ],
      },
      {
        name: "testimonial",
        label: "Testimonials",
        path: "content/testimonials",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Client Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Location",
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Testimonial Content",
            isBody: true,
          },
        ],
      },
      {
        name: "team",
        label: "Team",
        path: "content/team",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Role/Title",
          },
          {
            type: "string",
            name: "email",
            label: "Email",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Biography",
            isBody: true,
          },
        ],
      },
    ],
  },
});