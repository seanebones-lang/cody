import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";

type PoliciesPageProps = {
  params: Promise<{ locale: string }>;
};

const policies = [
  "A non-refundable deposit may be required to secure appointments.",
  "Cancellations or reschedules should be requested with as much notice as possible.",
  "No-shows can result in declined future bookings.",
  "Final pricing depends on complexity, placement, and session length.",
];

export default async function PoliciesPage({ params }: PoliciesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageShell
      title="Policies"
      description="Booking and studio policies are designed to keep projects clear, fair, and professional."
    >
      <ul className="grid gap-4">
        {policies.map((item) => (
          <li key={item} className="section-card rounded-xl p-5 text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
