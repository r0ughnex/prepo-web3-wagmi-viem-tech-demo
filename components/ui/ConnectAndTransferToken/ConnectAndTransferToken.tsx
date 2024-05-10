"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { useAccount } from "wagmi";
import styles from "./ConnectAndTransferToken.module.scss";
import { WalletActionButtons } from "./WalletActionButtons";

export function ConnectAndTransferToken() {
  const { address, isConnecting } = useAccount();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select wallet and amount</CardTitle>
        <CardDescription>
          Connect your wallet to transfer FAKE_WETH.
        </CardDescription>
      </CardHeader>
      <CardContent className={styles.cardContent}>
        <WalletActionButtons />
      </CardContent>
    </Card>
  );
}
