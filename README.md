# Vaqrylen — Farm-to-Table Experience

High-end, single-page responsive website for Vaqrylen agri-product selling platform.

## Design System

**Color Palette:**
- Creamy Off-White: `#FDFCF9` (background)
- Deep Forest Green: `#2E4A35` (primary text/titles)
- Light Cream: `#FDFCF9` (text on dark backgrounds)
- Delicate Sage Green: `#A7BAA7` (line-art icons, fine lines)
- Pale Peach: `#F9E4DE` (CTA buttons)
- Dark Forest Green: `#23412E` (chat icon, footer background)

**Typography:**
- Display: Playfair Display (serif)
- Body: Source Sans 3 (sans-serif)

## Tech Stack

- **Framework:** Astro 4.x (static site generation)
- **Styling:** Vanilla CSS with custom properties
- **Images:** Astro `<Image />` with Sharp optimization
- **Forms:** Netlify Forms (zero-backend)
- **Deploy:** Vercel / Netlify / Cloudflare Pages

## Project Structure

```
vaqrylen/
├── public/
│   ├── hero-video.mp4      # Hero background video
│   ├── hero-poster.jpg     # Hero video poster image
│   ├── products/           # Product images (6 files)
│   ├── features/           # Feature block images (2 files)
│   ├── community/          # Community block images (1 file)
│   ├── social/             # Social feed images (5 files)
│   └── scripts/
│       └── main.js         # Carousel navigation JS
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── ProductCarousel.astro
│   │   ├── FeatureBlock.astro
│   │   ├── CommunityBlock.astro
│   │   ├── Testimonials.astro
│   │   ├── SocialFeed.astro
│   │   ├── Footer.astro
│   │   └── ChatFAB.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Required Assets

Place these files in `public/` before building:

| Path | Description | Recommended Specs |
|------|-------------|-------------------|
| `/hero-video.mp4` | Hero background video | 1920x1080, H.264, 15-30s, loop, muted |
| `/hero-poster.jpg` | Hero video poster | 1920x1080, WebP |
| `/products/*.jpg` | 6 product images | 600x600, WebP |
| `/features/fresh-baskets.jpg` | Fresh Baskets feature | 800x600, WebP |
| `/features/weekend-market.jpg` | Weekend Market feature | 800x600, WebP |
| `/community/events.jpg` | Events community block | 800x600, WebP |
| `/social/*.jpg` | 5 social feed tiles | 400x400, WebP |

## Deployment

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Cloudflare Pages
Connect GitHub repo → Framework: Astro → Build: `npm run build` → Output: `dist`

## Features Implemented

- ✅ Fixed header with LOG IN, CART, social icons, vertical separator
- ✅ Hero: split video/story layout with full brand story text
- ✅ Contact info + horizontal product carousel (6 products, Add to Cart)
- ✅ Feature highlights: Fresh Baskets + Weekend Market (alternating)
- ✅ Community: Events block + Testimonials carousel (4 slides)
- ✅ Social feed (5 tiles) + Dark footer with mailing list form
- ✅ Persistent chat FAB
- ✅ Full responsive (900px, 600px breakpoints)
- ✅ Vanilla JS carousel navigation
- ✅ Semantic HTML, accessibility attributes
- ✅ Netlify Forms ready

## Customization

Edit component props in `src/pages/index.astro` to change content. Colors and spacing are defined in `src/styles/global.css` via CSS custom properties.