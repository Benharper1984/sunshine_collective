# The Sunshine Collective

A permaculture consulting and native habitat restoration website built with Next.js and TinaCMS.

## 🌱 About

The Sunshine Collective provides permaculture design consulting, native habitat restoration, and educational workshops focused on regenerative landscaping and sustainable food systems.

## 🚀 Quick Start

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Visit the site**
   - Frontend: `http://localhost:3000`
   - Admin: `http://localhost:3000/admin`

## 📁 Project Structure

```
sunshine-collective/
├── content/                  # All content (managed via Tina)
│   ├── blog/                # Blog posts (markdown)
│   ├── gallery/             # Gallery items with before/after photos
│   ├── inventory/           # Plant inventory
│   ├── pages/               # Static pages
│   ├── services/            # Service offerings
│   └── settings/            # Site settings
├── public/
│   └── uploads/             # Uploaded images
├── src/
│   ├── components/          # React components
│   ├── pages/               # Next.js pages
│   └── styles/              # CSS/styling
└── tina/
    └── config.ts            # TinaCMS configuration
```

## 🎨 Features

- **Blog** - Seasonal tips, plant profiles, how-to guides, workshop announcements
- **Gallery** - Before/after side-by-side project photos with filtering
- **Plant Inventory** - Available plants (can be hidden until nursery launches)
- **About** - Kelly's story and permaculture philosophy
- **Contact** - Inquiry form
- **Services** - Consulting packages and pricing

## 🔧 TinaCMS Admin

When running locally, visit `/admin` to manage content. No login required for local development.

## 📦 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import repository to Vercel
3. Deploy with default Next.js settings

### Enable TinaCMS in Production

1. Sign up at [app.tina.io](https://app.tina.io)
2. Create project and connect GitHub repo
3. Add `NEXT_PUBLIC_TINA_CLIENT_ID` to Vercel environment variables
4. Redeploy

## 📄 License

MIT
