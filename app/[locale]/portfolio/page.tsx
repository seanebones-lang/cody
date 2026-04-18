import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";

type PortfolioPageProps = {
  params: Promise<{ locale: string }>;
};

const featuredPieces = [
  "Black and grey portrait",
  "Sleeve flow composition",
  "Fine line botanical",
  "Traditional rework",
  "Lettering and script",
  "Custom concept piece",
];

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageShell
      title="Portfolio"
      description="Curated work with black and grey featured first. Final implementation can pull these entries from Sanity."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPieces.map((piece) => (
          <article key={piece} className="section-card rounded-xl p-5">
            <div className="aspect-[4/5] rounded-lg border border-border bg-gradient-to-br from-surface to-black" />
            <h2 className="mt-4 font-semibold">{piece}</h2>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
