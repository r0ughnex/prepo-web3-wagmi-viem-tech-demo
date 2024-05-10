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

interface WalletActionButtonProps {
  isLoading?: boolean;
}

function ButtonWrapper({ children }: ButtonWrapperProps) {
  return <div className={styles.buttonWrapper}>{children}</div>;
}

function LoadingPleaseWaitButton() {
  return (
    <Button type="button" variant="primary" disabled>
      <Spinner className={styles.buttonSpinner} />
      Please wait
    </Button>
  );
}

export function WalletActionButtons({ isLoading }: WalletActionButtonProps) {
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
        <LoadingPleaseWaitButton />
      </ButtonWrapper>
    );
  }

  if (!isConnected) {
    return (
      <ButtonWrapper>
        <Button type="button" variant="primary" onClick={onConnectClick}>
          Connect wallet
        </Button>
      </ButtonWrapper>
    );
  }

  if (isConnected) {
    return (
      <ButtonWrapper>
        {isLoading && <LoadingPleaseWaitButton />}
        {!isLoading && (
          <Button type="submit" variant="primary" onClick={onTransferClick}>
            Transfer FAKE_WETH
          </Button>
        )}
        <Button type="button" variant="secondary" onClick={onDisconnectClick}>
          Disconnect wallet
        </Button>
      </ButtonWrapper>
    );
  }
}
