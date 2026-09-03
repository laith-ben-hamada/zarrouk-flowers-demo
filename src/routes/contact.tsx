import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/sections";

const title = "Contact | Zarrouk Flowers, La Marsa";
const description = "Get in touch with Zarrouk Flowers, a floral boutique in La Marsa, Tunisia.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-20">
      <Contact as="h1" />
    </div>
  );
}
