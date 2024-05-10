import { EthAddress } from "@/types";
import { useAccount } from "wagmi";

interface Options {
  nPrefix?: number;
  nSuffix?: number;
  separator?: "braces" | "brackets" | "parenthesis";
}

const OPENING = {
  braces: "{",
  brackets: "[",
  parenthesis: "(",
} as const;

const CLOSING = {
  braces: "}",
  brackets: "]",
  parenthesis: ")",
} as const;

function truncateEthAddress(address: EthAddress, options?: Options) {
  const match = address.match(/^(0x[a-zA-Z0-9])[a-zA-Z0-9]+([a-zA-Z0-9])$/);

  const { nPrefix, nSuffix, separator } = options ?? {};

  const nTotalIsLongerThanAddress =
    (nPrefix || 0) + (nSuffix || 0) > address.length;

  return (
    match && !nTotalIsLongerThanAddress
      ? `0x${address.slice(2, 2 + (nPrefix || 4))}${
          separator ? OPENING[separator] : ""
        }…${separator ? CLOSING[separator] : ""}${address.slice(
          address.length - (nSuffix || 4)
        )}`
      : address
  ).toLowerCase();
}

export function useTruncatedAddress() {
  const { address, isConnecting } = useAccount();

  return {
    isConnecting,
    truncatedAddress: address
      ? truncateEthAddress(address, {
          nPrefix: 11,
          nSuffix: 11,
        })
      : undefined,
  };
}
