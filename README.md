# NOTA COFFEE – Next.js 15 / React 18 / Tailwind

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build    # production build

## Edit your content
- `data/products.ts` → WhatsApp number, Instagram link, the 5 blends, descriptions, images and **prices per weight** (0 = "price on request").
- Product photos: put files in `public/images/` and update the `image` path in `data/products.ts`.
- Texts (AR/FR): `lib/store.tsx`.
- Logo: `public/logo/logo.jpg` (replace with a clean PNG/SVG of your logo for best quality, same path or update Header).

## Deploy on Vercel
1. Create a GitHub repo and upload the project files (unzip first).
2. vercel.com → Add New → Project → import the repo.
3. Framework: Next.js (auto-detected) → Deploy. No environment variables needed.
