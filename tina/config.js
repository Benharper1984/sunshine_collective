import { defineConfig } from "tinacms";

// Determine the branch - supports local dev, Vercel, Netlify, and other platforms
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  
  // Get this from tina.io - set these in your environment variables
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

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