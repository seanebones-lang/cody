import { sanityClient } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";
import { sanityEnv } from "@/sanity/env";

type SiteSettingsBooking = {
  bookingUrl?: string | null;
  depositPaymentUrl?: string | null;
} | null;

function trimUrl(value: string | null | undefined): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

/**
 * Scheduling embed + deposit link: Sanity Site Settings override env fallbacks.
 * Use embed-safe booking URLs (e.g. Cal.com /embed, Calendly /embed) when possible.
 */
export async function getBookingPortalUrls(): Promise<{
  bookingUrl: string;
  depositUrl: string;
}> {
  const envBooking = trimUrl(process.env.NEXT_PUBLIC_BOOKING_URL);
  const envDeposit = trimUrl(process.env.NEXT_PUBLIC_DEPOSIT_URL);

  if (!sanityEnv.isConfigured) {
    return { bookingUrl: envBooking, depositUrl: envDeposit };
  }

  try {
    const doc = await sanityClient.fetch<SiteSettingsBooking>(
      siteSettingsQuery,
      {},
      { next: { revalidate: 60 } }
    );
    return {
      bookingUrl: trimUrl(doc?.bookingUrl) || envBooking,
      depositUrl: trimUrl(doc?.depositPaymentUrl) || envDeposit,
    };
  } catch {
    return { bookingUrl: envBooking, depositUrl: envDeposit };
  }
}
