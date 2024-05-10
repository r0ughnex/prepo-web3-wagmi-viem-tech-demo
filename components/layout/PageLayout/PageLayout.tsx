import { ReactNode } from "react";
import styles from "./PageLayout.module.scss";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={styles.pageLayout}>
      <main className={styles.pageLayoutMain}>{children}</main>
    </div>
  );
}
