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
- `NEXT_PUBLIC_BOOKING_URL` (scheduler embed URL)
- `NEXT_PUBLIC_DEPOSIT_URL` (Stripe Payment Link, Square, etc.)
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

## Booking and deposits

The **Booking** page can show two things:

1. **Schedule** — an embedded iframe when `bookingUrl` is set (Sanity **Site Settings** overrides `NEXT_PUBLIC_BOOKING_URL`).
2. **Deposit** — a prominent “Pay deposit” button when `depositPaymentUrl` is set (Sanity **Site Settings** overrides `NEXT_PUBLIC_DEPOSIT_URL`). Payment always opens in a **new tab** (Stripe/Square checkout is not embedded).

**Typical setups**

- **Cal.com** (or similar): create an event type, turn on **paid bookings** if you want deposit-at-booking, then use the **embed** URL for `bookingUrl`.
- **Calendly**: use the embed link for the event; add **Stripe** in Calendly for paid events, or keep a separate **Stripe Payment Link** for flat deposits in `depositPaymentUrl`.
- **Square / Booksy / GlossGenius**: use the provider’s **embed or booking page URL** for `bookingUrl`; use their **invoice or payment link** for deposits if it is a separate HTTPS URL.
- **Stripe only for deposit**: [Stripe Payment Links](https://docs.stripe.com/payment-links) → copy the `https://buy.stripe.com/...` URL into Sanity or `NEXT_PUBLIC_DEPOSIT_URL`.

After changing Sanity fields, the page refreshes within about a minute (ISR). After changing env vars on Vercel, **redeploy**.

## Notes

- Booking / deposit URLs are merged from **Sanity Site Settings** first, then env fallbacks.
- Contact form is configured as form-first; no visible public mailto by default.
- Sanity schemas are scaffolded for artists, portfolio, sponsors, FAQ, policies, testimonials, and site settings.
