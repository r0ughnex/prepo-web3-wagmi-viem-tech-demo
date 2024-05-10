import { erc20Abi } from "viem";

export type EthAddress = `0x${string}`;

export type Erc20Abi = typeof erc20Abi;

export type TokenKey = "eth" | "fakeWeth";

export interface Erc20TokenContract {
  address: EthAddress;
  chainId: number;
  abi: Erc20Abi;
}

export type BalanceReadResponseData = [
  // { functionName: 'name' }
  string | undefined,
  // { functionName: 'symbol' }
  string | undefined,
  // { functionName: 'decimals' }
  number | undefined,
  // { functionName: 'balanceOf' }
  bigint | undefined
];

export interface BalanceData {
  formatted: string;
  decimals: number;
  symbol: string;
  value: bigint;
  name: string;
}
