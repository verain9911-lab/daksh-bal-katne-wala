# Salon Site (Next.js) — Deploy to Vercel

1. Clone this repo and install:
   npm install

2. Local development:
   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-5413818328633857
   NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
   NEXT_PUBLIC_AD_SLOT_1=1234567890
   NEXT_PUBLIC_AD_SLOT_2=0987654321

   Create a .env.local with these vars if you want.

   npm run dev

   Note: AdSense may not show on localhost. Use data-adtest="on" in AdUnit components (default) to see test ads.

3. Deploy to Vercel:
   - Push repo to GitHub.
   - In Vercel, import project and deploy.
   - Add the following Environment Variables in Vercel (Project Settings > Environment Variables):
     - NEXT_PUBLIC_ADSENSE_CLIENT = ca-pub-5413818328633857
     - NEXT_PUBLIC_WHATSAPP_NUMBER = 919876543210
     - NEXT_PUBLIC_AD_SLOT_1 = <your ad unit slot id 1>
     - NEXT_PUBLIC_AD_SLOT_2 = <your ad unit slot id 2>

   - Ensure public/ads.txt is present (contains your publisher entry).

4. After Google approves your site:
   - Remove data-adtest="on" (set adTest={false} in AdUnit or remove the attribute).
   - Confirm ads appear.
   - Ensure you have a Privacy Policy page and any required cookie/consent handling for EU visitors.

Important:
- Do not click your own ads.
- Do not place ads in a way that violates AdSense placement policies.
