import { Erc20TokenContract } from "@/types";
import { erc20Abi } from "viem";
import { holesky } from "viem/chains";

export const CONTRACT_FAKE_WETH: Erc20TokenContract = {
  address: "0x4Ed72e128865ddEa054261B8ef6b756C0C17C3f5",
  chainId: holesky.id,
  abi: erc20Abi,
};
