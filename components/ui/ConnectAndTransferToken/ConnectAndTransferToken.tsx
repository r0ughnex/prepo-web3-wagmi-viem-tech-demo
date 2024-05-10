"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import styles from "./ConnectAndTransferToken.module.scss";
import { TransferTokenForm } from "./TransferTokenForm";
import { WalletCardDescription } from "./WalletCardDescription";
import { WalletTokenBalances } from "./WalletTokenBalances";

export function ConnectAndTransferToken() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Select wallet and amount</CardTitle>
        <WalletCardDescription />
      </CardHeader>
      <CardContent className={styles.cardContent}>
        <WalletTokenBalances />
        <span className={styles.seperator} />
        <TransferTokenForm />
      </CardContent>
    </Card>
  );
}
