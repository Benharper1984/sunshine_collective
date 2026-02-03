import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // Blog Posts Collection (includes workshops)
      {
        name: "blog",
        label: "Blog Posts",
        path: "content/blog",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Seasonal Tips", "Plant Profiles", "How-To", "Workshop"],
            required: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Feature on Homepage",
          },
          {
            type: "datetime",
            name: "featuredUntil",
            label: "Featured Until (optional)",
            description: "Post will stop being featured after this date",
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
      },
      // Gallery Collection (before/after support)
      {
        name: "gallery",
        label: "Gallery",
        path: "content/gallery",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Project Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Gardens", "Native Habitat", "Water Systems", "Food Production"],
            required: true,
          },
          {
            type: "image",
            name: "beforeImage",
            label: "Before Photo",
          },
          {
            type: "image",
            name: "afterImage",
            label: "After Photo",
          },
          {
            type: "string",
            name: "client",
            label: "Client Name (optional)",
          },
          {
            type: "datetime",
            name: "date",
            label: "Completion Date",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Description",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/gallery/${document._sys.filename}`,
        },
      },
      // Plant Inventory Collection
      {
        name: "inventory",
        label: "Plant Inventory",
        path: "content/inventory",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Plant Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "scientificName",
            label: "Scientific Name",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Vegetables", "Herbs", "Flowers", "Trees", "Shrubs", "Native Plants"],
            required: true,
          },
          {
            type: "string",
            name: "price",
            label: "Price",
          },
          {
            type: "boolean",
            name: "available",
            label: "Available",
          },
          {
            type: "image",
            name: "image",
            label: "Photo",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
          },
          {
            type: "rich-text",
            name: "careInstructions",
            label: "Care Instructions",
          },
        ],
        ui: {
          router: ({ document }) => `/inventory/${document._sys.filename}`,
        },
      },
      // Site Settings Collection
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
            type: "boolean",
            name: "showPlantInventory",
            label: "Show Plant Inventory Page",
            description: "Toggle this on when the nursery is ready to launch",
          },
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Site Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "contactEmail",
            label: "Contact Email",
          },
          {
            type: "string",
            name: "phone",
            label: "Phone Number",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
          },
        ],
      },
      // Pages Collection
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
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
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },
      // Services Collection
      {
        name: "service",
        label: "Services",
        path: "content/services",
        format: "mdx",
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
            name: "shortDescription",
            label: "Short Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "price",
            label: "Starting Price",
          },
          {
            type: "image",
            name: "image",
            label: "Service Image",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Full Description",
            isBody: true,
          },
        ],
      },
    ],
  },
});
