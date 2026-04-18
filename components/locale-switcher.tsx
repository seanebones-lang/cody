"use client";

import { useLocale, useTranslations } from "next-intl";
import { ChangeEvent } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const onLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: event.target.value });
  };

  return (
    <label className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
      {t("localeLabel")}
      <select
        aria-label={t("localeLabel")}
        value={locale}
        onChange={onLocaleChange}
        className="rounded-md border border-border bg-surface px-2 py-1 text-foreground outline-none focus:border-electric"
      >
        {routing.locales.map((item) => (
          <option key={item} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}
