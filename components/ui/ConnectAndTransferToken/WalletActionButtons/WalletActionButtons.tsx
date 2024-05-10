"use client";

import { Button } from "@/components/ui/Button";
import { useIsServerSide } from "@/hooks";
import { Loader2 as Spinner } from "lucide-react";
import { ReactNode } from "react";
import { useAccount, useChains, useConnect, useDisconnect } from "wagmi";
import styles from "./WalletActionButtons.module.scss";

interface ButtonWrapperProps {
  children: ReactNode;
}

function ButtonWrapper({ children }: ButtonWrapperProps) {
  return <div className={styles.buttonWrapper}>{children}</div>;
}

function ButtonSpinner() {
  return <Spinner className={styles.buttonSpinner} />;
}

export function WalletActionButtons() {
  const chains = useChains();
  const { disconnect } = useDisconnect();
  const { isServerSide } = useIsServerSide();
  const { connect, connectors } = useConnect();
  const { isConnected, isConnecting } = useAccount();

  const onConnectClick = () => {
    connect({
      connector: connectors[0],
      chainId: chains[0]?.id,
    });
  };

  const onDisconnectClick = () => {
    disconnect();
  };

  const onTransferClick = () => {};

  if (isServerSide || isConnecting) {
    return (
      <ButtonWrapper>
        <Button variant="primary" disabled>
          <ButtonSpinner />
          Please wait
        </Button>
      </ButtonWrapper>
    );
  }

  if (!isConnected) {
    return (
      <ButtonWrapper>
        <Button variant="primary" onClick={onConnectClick}>
          Connect wallet
        </Button>
      </ButtonWrapper>
    );
  }

  if (isConnected) {
    return (
      <ButtonWrapper>
        <Button variant="primary" onClick={onTransferClick}>
          Transfer token
        </Button>
        <Button variant="secondary" onClick={onDisconnectClick}>
          Disconnect wallet
        </Button>
      </ButtonWrapper>
    );
  }
}
