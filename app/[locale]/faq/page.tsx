import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";

type FaqPageProps = {
  params: Promise<{ locale: string }>;
};

const faqs = [
  {
    question: "Do you require a consultation?",
    answer:
      "Yes. Most projects start with a consultation to confirm concept, placement, sizing, and session structure.",
  },
  {
    question: "Can I book black and grey realism?",
    answer:
      "Absolutely. Black and grey work is a core specialty and highlighted in the portfolio queue.",
  },
  {
    question: "Do you tattoo over scars or cover old work?",
    answer:
      "Many cover-up and rework projects are possible after visual review and a realistic planning conversation.",
  },
];

export default async function FaqPage({ params }: FaqPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageShell
      title="FAQ"
      description="Quick answers to common booking, style, and process questions."
    >
      <div className="grid gap-4">
        {faqs.map((item) => (
          <article key={item.question} className="section-card rounded-xl p-6">
            <h2 className="font-semibold">{item.question}</h2>
            <p className="mt-2 text-muted-foreground">{item.answer}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
