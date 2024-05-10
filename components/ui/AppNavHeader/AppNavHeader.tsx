import { Container } from "@/components/layout/Container";
import { AppRoute, NavLinkExternal } from "@/constants";
import { AtSign as EmailIcon, Github as GitHubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AppNavHeader.module.scss";

function NavHomeLinkLogo() {
  return (
    <Image
      priority
      width={512}
      height={512}
      className={styles.navHomeLinkLogo}
      src="/images/prepo-logo_transaprent_512x512.png"
      alt="Transparent picture of prePO's primary logo"
    />
  );
}

function NavHomeLinkText() {
  return <span className={styles.navHomeLinkText}>prePO Tech Demo</span>;
}

function GitHubIconLink() {
  return (
    <Link
      target="_blank"
      href={NavLinkExternal.GitHub}
      className={styles.navIconLink}
    >
      <GitHubIcon className={styles.navIconLinkIcon} />
    </Link>
  );
}

function EmailIconLink() {
  return (
    <Link
      target="_blank"
      href={NavLinkExternal.Email}
      className={styles.navIconLink}
    >
      <EmailIcon className={styles.navIconLinkIcon} />
    </Link>
  );
}

export function AppNavHeader() {
  return (
    <header className={styles.navHeader}>
      <Container size="full" className={styles.navHeaderContainer}>
        <Link href={AppRoute.Home} className={styles.navHomeLink}>
          <NavHomeLinkLogo />
          <NavHomeLinkText />
        </Link>

        <div className={styles.navIconLinks}>
          <GitHubIconLink />
          <EmailIconLink />
        </div>
      </Container>
    </header>
  );
}
