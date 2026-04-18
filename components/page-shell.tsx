type PageShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header className="mb-8 max-w-3xl">
        <h1 className="section-title text-5xl text-foreground">{title}</h1>
        <p className="mt-3 text-muted-foreground">{description}</p>
      </header>
      {children}
    </section>
  );
}
