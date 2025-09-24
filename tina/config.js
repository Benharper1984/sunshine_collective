import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "placeholder", // Get this from tina.io after getting Vercel URL
  token: process.env.TINA_TOKEN || "placeholder", // Get this from tina.io after getting Vercel URL
  
  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },
  
  media: {
    tina: {
      mediaRoot: "assets/images",
      publicFolder: ".",
    },
  },
  
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "service",
        label: "Services",
        path: "content/services",
        format: "md",
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
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Individual Coaching", "Group Programs", "Workshops", "Retreats"],
          },
          {
            type: "image",
            name: "image",
            label: "Service Image",
          },
        ],
      },
      {
        name: "testimonial",
        label: "Testimonials",
        path: "content/testimonials",
        format: "md",
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
            type: "rich-text",
            name: "content",
            label: "Testimonial Content",
            isBody: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)",
          },
        ],
      },
      {
        name: "team",
        label: "Team",
        path: "content/team",
        format: "md",
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
            type: "rich-text",
            name: "bio",
            label: "Biography",
            isBody: true,
          },
          {
            type: "string",
            name: "certifications",
            label: "Certifications",
            list: true,
          },
          {
            type: "image",
            name: "image",
            label: "Profile Image",
          },
          {
            type: "string",
            name: "email",
            label: "Email",
          },
        ],
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "siteTitle",
            label: "Site Title",
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Site Description",
          },
          {
            type: "string",
            name: "contactEmail",
            label: "Contact Email",
          },
          {
            type: "string",
            name: "contactPhone",
            label: "Contact Phone",
          },
          {
            type: "object",
            name: "socialMedia",
            label: "Social Media",
            fields: [
              {
                type: "string",
                name: "facebook",
                label: "Facebook URL",
              },
              {
                type: "string",
                name: "instagram",
                label: "Instagram URL",
              },
              {
                type: "string",
                name: "linkedin",
                label: "LinkedIn URL",
              },
            ],
          },
        ],
      },
    ],
  },
});