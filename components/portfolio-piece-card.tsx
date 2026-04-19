import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/lib/image";

export type PortfolioPieceCardProps = {
  title: string;
  description?: string | null;
  styleTags?: string[] | null;
  image?: SanityImageSource | null;
};

export function PortfolioPieceCard({ title, description, styleTags, image }: PortfolioPieceCardProps) {
  const alt = description?.trim() ? `${title} — ${description.trim().slice(0, 120)}` : title;

  return (
    <article className="section-card flex min-w-0 flex-col overflow-hidden rounded-xl">
      <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-surface to-black">
        {image ? (
          <Image
            src={urlFor(image).width(900).height(1125).quality(85).format("webp").url()}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center border-b border-border text-sm text-muted-foreground">
            No image
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="font-semibold leading-snug text-foreground">{title}</h2>
        {description ? (
          <p className="line-clamp-3 text-sm text-muted-foreground">{description}</p>
        ) : null}
        {styleTags?.length ? (
          <ul className="mt-auto flex flex-wrap gap-1.5">
            {styleTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
