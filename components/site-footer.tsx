import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const t = useTranslations("common");

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="section-title text-xl text-foreground">Cody Meneley</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tattooing since 2004. Sponsored artist. Black and grey specialist.
          </p>
        </div>

        <div className="flex gap-4 text-sm">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-electric"
          >
            {t("instagram")}
          </a>
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-electric"
          >
            {t("facebook")}
          </a>
        </div>
      </div>
    </footer>
  );
}
