import { CONTRACT_FAKE_WETH } from "@/constants";
import { BalanceData, BalanceReadResponseData, EthAddress } from "@/types";
import { FixedNumber, formatUnits } from "ethers";
import {
  UseReadContractsReturnType,
  useAccount,
  useBalance,
  useReadContracts,
} from "wagmi";

function extractDataFromBalanceReadResponse(
  response?: UseReadContractsReturnType,
  noOfDecimalsForFormattedValue = 2
): BalanceData | undefined {
  const { data = [] } = response ?? {};
  if (!Array.isArray(data) || !data.length) {
    return undefined;
  }

  const [symbol, decimals, value] = data as any as BalanceReadResponseData;
  if (!symbol || !decimals || !value) {
    return undefined;
  }

  const formatted = FixedNumber.fromString(formatUnits(value, decimals))
    .round(noOfDecimalsForFormattedValue)
    .toString();

  return {
    formatted,
    decimals,
    symbol,
    value,
  };
}

function useReadFakeWethContract(address?: EthAddress) {
  const fakeWethContractResponse = useReadContracts({
    allowFailure: false,
    blockTag: "latest",
    contracts: [
      {
        ...CONTRACT_FAKE_WETH,
        functionName: "symbol",
      },
      {
        ...CONTRACT_FAKE_WETH,
        functionName: "decimals",
      },
      {
        ...CONTRACT_FAKE_WETH,
        functionName: "balanceOf",
        args: address ? [address] : undefined,
      },
    ],
  }) as UseReadContractsReturnType;
  return fakeWethContractResponse;
}

export function useTokenBalance() {
  const { address } = useAccount();
  const ethBalance = useBalance({ address });
  const fakeWethResponse = useReadFakeWethContract(address);

  return {
    isLoading: ethBalance.isLoading || fakeWethResponse.isLoading,
    balance: {
      fakeWeth: extractDataFromBalanceReadResponse(fakeWethResponse),
      eth: ethBalance.data,
    },
  };
}
