import { CONTRACT_FAKE_WETH } from "@/constants";
import {
  BalanceData,
  BalanceReadResponseData,
  EthAddress,
  TokenKey,
} from "@/types";
import { FixedNumber, formatUnits } from "ethers";
import {
  UseReadContractsReturnType,
  useAccount,
  useBalance,
  useReadContracts,
} from "wagmi";

interface UseTokenBalanceResponse {
  balance: Record<TokenKey, BalanceData | undefined>;
  isLoading: boolean;
}

function extractDataFromBalanceReadResponse(
  response?: UseReadContractsReturnType,
  noOfDecimalsForFormattedValue = 2
): BalanceData | undefined {
  const { data = [] } = response ?? {};
  if (!Array.isArray(data) || !data.length) {
    return undefined;
  }

  const [name, symbol, decimals, value] =
    data as unknown as BalanceReadResponseData;
  if (!name || !symbol || !decimals || !value) {
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
    name: name.replaceAll("ETH", "Ethereum"),
  };
}

function useReadFakeWethContract(address?: EthAddress) {
  const fakeWethContractResponse = useReadContracts({
    allowFailure: false,
    blockTag: "latest",
    contracts: [
      {
        ...CONTRACT_FAKE_WETH,
        functionName: "name",
      },
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

export function useTokenBalance(): UseTokenBalanceResponse {
  const { address } = useAccount();
  const ethBalance = useBalance({ address });
  const { formatted } = ethBalance.data ?? {};
  const fakeWethResponse = useReadFakeWethContract(address);

  return {
    isLoading: ethBalance.isLoading || fakeWethResponse.isLoading,
    balance: {
      eth: ethBalance.data
        ? {
            ...ethBalance.data,
            formatted: parseFloat(formatted || "0").toFixed(6),
            name: "Ethereum",
          }
        : undefined,
      fakeWeth: extractDataFromBalanceReadResponse(fakeWethResponse, 6),
    },
  };
}
