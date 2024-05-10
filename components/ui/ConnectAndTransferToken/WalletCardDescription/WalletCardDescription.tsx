"use client";

import { CardDescription } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { useIsServerSide, useTruncatedAddress } from "@/hooks";
import styles from "./WalletCardDescription.module.scss";

export function WalletCardDescription() {
  const { isServerSide } = useIsServerSide();
  const { truncatedAddress, isConnecting } = useTruncatedAddress();

  if (isServerSide || isConnecting) {
    return (
      <Skeleton
        width={290}
        height={{ outer: 20, inner: 14 }}
        className={styles.descriptionSkeleton}
      />
    );
  }

  if (truncatedAddress) {
    return (
      <CardDescription>{`Connected: ${truncatedAddress}`}</CardDescription>
    );
  }

  return (
    <CardDescription>
      Connect your wallet to transfer FAKE_WETH.
    </CardDescription>
  );
}
