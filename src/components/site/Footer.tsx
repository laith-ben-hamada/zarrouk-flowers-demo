import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import { brand, nav, socials } from "@/content/site";
import { Wordmark } from "./Nav";

const socialIcon = { Instagram, Facebook } as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-beige/60">
      <div className="container-edge py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" aria-label={`${brand.name} — home`} className="inline-block">
              <Wordmark className="text-lg" />
            </Link>
            <p className="mt-6 font-serif text-2xl font-light italic text-foreground/80">
              {brand.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="link-underline text-[0.72rem] font-medium uppercase tracking-[0.26em] text-foreground/70 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4 md:items-end">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-foreground/70">
              {brand.locationShort}
            </p>
            {/* Social icons render only once official accounts are verified in src/content/site.ts */}
            {socials.length > 0 && (
              <ul className="flex gap-4">
                {socials.map((s) => {
                  const Icon = socialIcon[s.label];
                  return (
                    <li key={s.label}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border/70 pt-6 text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {brand.name}</span>
          <span>{brand.locationShort}</span>
        </div>
      </div>
    </footer>
  );
}
