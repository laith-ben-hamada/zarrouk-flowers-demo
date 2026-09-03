import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { brand, nav } from "@/content/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./Button";

export function Wordmark({ className, stacked = true }: { className?: string; stacked?: boolean }) {
  const [first, second] = brand.wordmark;
  return (
    <span className={cn("wordmark", stacked ? "flex flex-col" : "inline-flex gap-2", className)}>
      <span className="text-[0.95rem] sm:text-[1.05rem]">{first}</span>
      <span className="text-[0.62rem] tracking-[0.42em] opacity-80 sm:text-[0.68rem]">{second}</span>
    </span>
  );
}

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const light = onHero && !scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-elegant)]",
          scrolled || !onHero
            ? "border-b border-border/60 bg-background/85 py-3 backdrop-blur-md"
            : "bg-transparent py-6",
          light ? "text-on-image" : "text-foreground",
        )}
      >
        <div className="container-edge grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <Link to="/" aria-label={`${brand.name} — home`} className="min-w-0 justify-self-start">
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="link-underline text-[0.72rem] font-medium uppercase tracking-[0.26em] opacity-80 transition-opacity hover:opacity-100"
                    activeProps={{ className: "opacity-100 after:scale-x-100" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-self-end gap-3">
            <ButtonLink
              to="/contact"
              variant={light ? "outline-light" : "outline"}
              className="hidden min-h-11 px-6 lg:inline-flex"
            >
              Contact us
            </ButtonLink>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative -mr-2 grid h-12 w-12 shrink-0 place-items-center lg:hidden"
            >
              <span
                className={cn(
                  "absolute h-px w-6 bg-current transition-transform duration-500 ease-[var(--ease-elegant)]",
                  open ? "rotate-45" : "-translate-y-[4px]",
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-6 bg-current transition-transform duration-500 ease-[var(--ease-elegant)]",
                  open ? "-rotate-45" : "translate-y-[4px]",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-background px-6 pt-32 pb-10 transition-all duration-700 ease-[var(--ease-elegant)] lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-2">
            {nav.map((item, i) => (
              <li
                key={item.to}
                className={cn(
                  "transition-all duration-700 ease-[var(--ease-elegant)]",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              >
                <Link
                  to={item.to}
                  className="block border-b border-border py-4 font-serif text-4xl font-light"
                  activeProps={{ className: "text-sage" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto flex flex-col gap-6">
          <ButtonLink to="/contact" variant="primary" className="w-full">
            Contact us
          </ButtonLink>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {brand.locationShort}
          </p>
        </div>
      </div>
    </>
  );
}
