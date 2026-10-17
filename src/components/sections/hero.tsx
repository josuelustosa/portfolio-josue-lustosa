import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="py-8 sm:pb-12">
      <Container className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          {site.title}
        </h1>
        <p className="text-muted">{site.description}</p>
      </Container>
    </section>
  );
}
