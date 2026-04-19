import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";
import { PortfolioPieceCard } from "@/components/portfolio-piece-card";
import { sanityEnv } from "@/sanity/env";
import { getPortfolioPieces } from "./portfolio-data";

export const revalidate = 60;

type PortfolioPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const portfolio = await getPortfolioPieces();
  const pieces = portfolio.pieces;
  const fetchError = portfolio.ok ? undefined : portfolio.error;

  const description = pieces.length
    ? "Work from the studio. New pieces appear here after you publish in Sanity."
    : fetchError
      ? "We could not load portfolio content from Sanity."
      : sanityEnv.isConfigured
        ? "No portfolio pieces yet, or none are published. Add images and publish a Portfolio Piece in Sanity."
        : "Set Sanity project id and dataset in environment variables (see .env.example).";

  return (
    <PageShell title="Portfolio" description={description}>
      {fetchError ? (
        <p className="mb-6 max-w-2xl rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
          <span className="font-medium">Sanity: </span>
          {fetchError}
          <span className="mt-2 block text-xs text-amber-100/80">
            On Vercel, set SANITY_PROJECT_ID and SANITY_DATASET (or NEXT_PUBLIC_SANITY_*), then redeploy. Check Deployment Logs if this persists.
          </span>
        </p>
      ) : null}

      {pieces.length ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((piece) => (
            <PortfolioPieceCard
              key={piece._id}
              title={piece.title}
              description={piece.description}
              styleTags={piece.styleTags}
              image={piece.images?.[0] ?? null}
            />
          ))}
        </div>
      ) : !fetchError ? (
        <p className="max-w-xl text-sm text-muted-foreground">
          {sanityEnv.isConfigured
            ? "Open Sanity Studio, open a Portfolio Piece, add at least one image in the Images field, and click Publish."
            : "Set SANITY_PROJECT_ID and SANITY_DATASET (or NEXT_PUBLIC_SANITY_*) in .env.local so the site can fetch content."}
        </p>
      ) : null}
    </PageShell>
  );
}
