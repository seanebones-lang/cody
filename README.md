# Cody Meneley Tattoo Site

Premium multilingual web presence for Cody Meneley, built with Next.js 16 App Router.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4
- `next-intl` locale routing (`/en`, `/es`)
- Motion + React Three Fiber hero experience
- Sanity schema/client scaffolding
- Resend-backed contact form server action

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and fill required values:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_BOOKING_URL`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_TOKEN`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`

## Scripts

- `npm run dev` - start Next.js dev server
- `npm run build` - production build
- `npm run lint` - run ESLint
- `npm run studio` - run Sanity Studio (npm workspace `sanity/`; requires `sanity/package.json` and `sanity/.env` with `NEXT_PUBLIC_SANITY_*` vars)

## Notes

- Booking iframe is rendered when `NEXT_PUBLIC_BOOKING_URL` is set.
- Contact form is configured as form-first; no visible public mailto by default.
- Sanity schemas are scaffolded for artists, portfolio, sponsors, FAQ, policies, testimonials, and site settings.
