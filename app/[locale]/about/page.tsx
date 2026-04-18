import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageShell
      title="About Cody"
      description="Cody Meneley has tattooed professionally since 2004. Sponsored artist, versatile across styles, with black and grey as a signature specialty."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <article className="section-card rounded-xl p-6">
          <h2 className="text-xl font-semibold">Craft First</h2>
          <p className="mt-3 text-muted-foreground">
            Every project begins with concept refinement, placement planning, and a composition
            strategy that fits your body and long-term vision.
          </p>
        </article>
        <article className="section-card rounded-xl p-6">
          <h2 className="text-xl font-semibold">All Styles Welcome</h2>
          <p className="mt-3 text-muted-foreground">
            Fine line, realism, script, traditional, illustrative, and custom hybrids are all part
            of the workflow.
          </p>
        </article>
      </div>
    </PageShell>
  );
}
