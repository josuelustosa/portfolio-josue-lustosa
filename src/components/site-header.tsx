import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="pt-8 sm:pt-12">
      <Container>
        <ThemeToggle />
      </Container>
    </header>
  );
}
