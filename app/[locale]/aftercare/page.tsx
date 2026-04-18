import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";

type AftercarePageProps = {
  params: Promise<{ locale: string }>;
};

const aftercareSteps = [
  "Keep bandage/wrap on for the timeframe advised during your appointment.",
  "Wash gently with fragrance-free soap and lukewarm water.",
  "Apply a thin layer of recommended aftercare product.",
  "Avoid pools, soaking, and direct sun while healing.",
  "Do not pick or scratch flaking skin during the healing cycle.",
];

export default async function AftercarePage({ params }: AftercarePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageShell
      title="Aftercare"
      description="Healing quality is part of the final result. Follow these steps carefully after your session."
    >
      <ol className="grid gap-4">
        {aftercareSteps.map((step, index) => (
          <li key={step} className="section-card rounded-xl p-5">
            <p className="text-sm text-muted-foreground">Step {index + 1}</p>
            <p className="mt-1 text-foreground">{step}</p>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
