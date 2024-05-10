import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./HeroSection.module.scss";

interface HeroSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function HeroSection({ title, children, className }: HeroSectionProps) {
  return (
    <section className={clsx(styles.heroSection, className)}>
      <h1 className={styles.heroSectionTitle}>{title}</h1>
      <p className={styles.heroSectionContent}>{children}</p>
    </section>
  );
}
