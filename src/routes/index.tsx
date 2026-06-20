import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Boojee Pony · Premium Mineral SPF 50" },
      { name: "description", content: "Premium mineral SPF 50 powder sunscreen for horses. Broad-spectrum, clean ingredients, brush included. $24.99." },
      { property: "og:title", content: "My Boojee Pony · Premium Mineral SPF 50" },
      { property: "og:description", content: "Premium mineral SPF 50 powder sunscreen for horses. Broad-spectrum, clean ingredients, brush included." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/myboojee-pony-v2.html"
      title="My Boojee Pony"
      style={{ border: 0, width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
