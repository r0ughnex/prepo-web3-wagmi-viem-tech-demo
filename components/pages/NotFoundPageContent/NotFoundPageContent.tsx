import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/ui/HeroSection";
import { APP_METADATA } from "@/constants";

export function NotFoundPageContent() {
  return (
    <Container>
      <HeroSection title="Page not found">
        {APP_METADATA.description}
      </HeroSection>
    </Container>
  );
}
