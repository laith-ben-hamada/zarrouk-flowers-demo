import type { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: ReactNode }) {
  return (
    <header className="container-edge pt-36 pb-16 md:pt-48 md:pb-24">
      <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
    </header>
  );
}
