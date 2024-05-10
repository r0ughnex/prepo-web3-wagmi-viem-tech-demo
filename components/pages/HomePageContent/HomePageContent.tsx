import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/ui/HeroSection";
import { APP_METADATA } from "@/constants";
import styles from "./HomePageContent.module.scss";

export function HomePageContent() {
  return (
    <Container className={styles.pageContent}>
      <HeroSection title={APP_METADATA.title as string}>
        {APP_METADATA.description}
      </HeroSection>

      <div className={styles.pageContentInner}>
        <Container size="small" padding="none">
          <br />
        </Container>
      </div>
    </Container>
  );
}
