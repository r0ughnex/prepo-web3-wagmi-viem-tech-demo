"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { holesky } from "@wagmi/core/chains";
import { ReactNode } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";

interface AppWagmiProviderProps {
  children: ReactNode;
}

const wagmiConfig = createConfig({
  chains: [holesky],
  transports: {
    [holesky.id]: http(),
  },
  connectors: [
    injected({
      shimDisconnect: false,
    }),
  ],
});

const queryClient = new QueryClient();

export function AppWagmiProvider({ children }: AppWagmiProviderProps) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
