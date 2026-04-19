import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";
import { getBookingPortalUrls } from "./booking-portal";

export const revalidate = 60;

type BookingPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function BookingPage({ params }: BookingPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("booking");

  const { bookingUrl, depositUrl } = await getBookingPortalUrls();
  const hasBooking = Boolean(bookingUrl);
  const hasDeposit = Boolean(depositUrl);

  return (
    <PageShell title={t("title")} description={t("description")}>
      {!hasBooking && !hasDeposit ? (
        <div className="section-card rounded-xl p-6">
          <p className="text-muted-foreground">{t("emptyHelp")}</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
            <li>{t("emptySanity")}</li>
            <li>{t("emptyEnv")}</li>
          </ul>
        </div>
      ) : (
        <div
          className={
            hasBooking && hasDeposit ? "grid gap-6 lg:grid-cols-2 lg:items-start" : "grid gap-6"
          }
        >
          {hasBooking ? (
            <div className="min-w-0">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-electric">{t("scheduleHeading")}</h2>
              <div className="section-card overflow-hidden rounded-xl">
                <iframe
                  src={bookingUrl}
                  title={t("iframeTitle")}
                  className="h-[min(100dvh,56rem)] min-h-[32rem] w-full bg-surface sm:min-h-[40rem] lg:h-[900px] lg:min-h-0"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-electric underline-offset-4 hover:underline"
                >
                  {t("openBookingTab")}
                </a>
              </div>
            </div>
          ) : null}

          {hasDeposit ? (
            <div className="min-w-0">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-electric">{t("depositHeading")}</h2>
              <div className="section-card flex flex-col gap-4 rounded-xl p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{t("depositBody")}</p>
                <a
                  href={depositUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="electric-ring inline-flex w-fit touch-manipulation items-center justify-center rounded-full border border-electric px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-foreground hover:text-electric"
                >
                  {t("depositCta")}
                </a>
                <p className="text-xs text-muted-foreground">{t("depositNote")}</p>
              </div>
            </div>
          ) : null}
        </div>
      )}

      {hasBooking && !hasDeposit ? (
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">{t("depositOptionalHint")}</p>
      ) : null}
    </PageShell>
  );
}
