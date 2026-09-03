import { cva, type VariantProps } from "class-variance-authority";
import { Link, type LinkProps } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group/btn inline-flex min-h-12 items-center justify-center gap-3 px-7 text-[0.75rem] font-medium uppercase tracking-[0.24em] transition-all duration-500 ease-[var(--ease-elegant)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-sage",
        outline: "border border-foreground/40 text-foreground hover:border-foreground hover:bg-foreground hover:text-primary-foreground",
        light: "bg-on-image text-charcoal hover:bg-beige",
        "outline-light": "border border-on-image/60 text-on-image hover:bg-on-image hover:text-charcoal",
        ghost: "px-0 text-foreground link-underline min-h-0",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type Variant = VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Variant) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}

export function ButtonLink({
  className,
  variant,
  children,
  ...props
}: LinkProps & Variant & { className?: string; children: ReactNode }) {
  return (
    <Link className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  className,
  variant,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & Variant) {
  return <a className={cn(buttonVariants({ variant }), className)} {...props} />;
}
