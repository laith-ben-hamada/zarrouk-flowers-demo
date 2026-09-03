import { MapPin, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Call / WhatsApp / Get directions.
 * Each button is only active when its verified value exists in src/content/site.ts.
 * Inactive buttons are shown as quiet placeholders so the owner can see where they go.
 */
export function ContactActions({ className }: { className?: string }) {
  const actions = [
    {
      label: "Call",
      icon: Phone,
      href: contact.phone ? `tel:${contact.phone.replace(/\s+/g, "")}` : null,
    },
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : null,
    },
    {
      label: "Get directions",
      icon: MapPin,
      href: contact.mapsUrl,
    },
  ];

  return (
    <ul className={cn("grid gap-3 sm:grid-cols-3", className)}>
      {actions.map(({ label, icon: Icon, href }) => {
        const base =
          "flex min-h-14 w-full items-center justify-center gap-3 border text-[0.72rem] font-medium uppercase tracking-[0.24em] transition-all duration-500 ease-[var(--ease-elegant)]";
        return (
          <li key={label}>
            {href ? (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className={cn(base, "border-foreground bg-foreground text-primary-foreground hover:bg-sage hover:border-sage")}
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
                {label}
              </a>
            ) : (
              <span
                aria-disabled="true"
                title="Activates once the business detail is verified"
                className={cn(base, "cursor-not-allowed border-dashed border-border text-muted-foreground/70")}
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
                {label}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
