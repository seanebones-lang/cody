import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";

type TestimonialsPageProps = {
  params: Promise<{ locale: string }>;
};

const testimonials = [
  {
    quote:
      "Cleanest black and grey work I have ever had done. The session was efficient and professional.",
    name: "A. R.",
  },
  {
    quote:
      "Cody translated my rough concept into a strong final design and made the whole process smooth.",
    name: "M. T.",
  },
  {
    quote:
      "The detail, line quality, and healing notes were all top tier. Highly recommended.",
    name: "K. L.",
  },
];

export default async function TestimonialsPage({ params }: TestimonialsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageShell
      title="Testimonials"
      description="Client feedback focused on quality, process, and long-term satisfaction."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="section-card rounded-xl p-6">
            <p className="text-sm text-muted-foreground">“{item.quote}”</p>
            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-electric">{item.name}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
