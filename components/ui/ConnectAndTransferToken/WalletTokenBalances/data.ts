import { BalanceData, TokenKey } from "@/types";

export const tokenBalancesData: readonly (Pick<
  BalanceData,
  "symbol" | "name"
> & { key: TokenKey })[] = [
  {
    key: "eth",
    symbol: "ETH",
    name: "Ethereum",
  },
  {
    key: "fakeWeth",
    symbol: "FAKE_WETH",
    name: "Fake Wrapped Ethereum",
  },
];
