import { useTokenBalance } from "@/hooks";
import { isAddress, parseUnits } from "ethers";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { TransferFormValues } from "./types";
import { getInitialFormErrors } from "./utils";

export function useValidateFormValues(formValues: TransferFormValues) {
  const { balance, isLoading } = useTokenBalance();
  const { value, decimals } = balance.fakeWeth ?? {};
  const { receivingWallet, transferAmount: amount } = formValues;
  const { address: connectedWallet, isConnecting } = useAccount();
  // 'formValues.transferAmount' could be a blank / empty string.
  const transferAmount = parseUnits(amount || "0", decimals);
  const balanceAmount = value || parseUnits("0", decimals);
  const [formErrors, setFormErrors] = useState(
    getInitialFormErrors(formValues)
  );

  // For validating the receiving address.
  useEffect(() => {
    if (isConnecting) {
      return;
    }

    setFormErrors((formErrors) => {
      let error = "";
      if (receivingWallet === connectedWallet) {
        error = "Please enter a different address.";
      }

      if (!error && !isAddress(receivingWallet)) {
        error = "Please enter a valid address.";
      }

      return {
        ...formErrors,
        receivingWallet: error,
      };
    });
  }, [isConnecting, receivingWallet, connectedWallet]);

  // For validating the transfer amount.
  useEffect(() => {
    if (isLoading) {
      return;
    }

    setFormErrors((formErrors) => {
      let error = "";
      if (transferAmount <= 0) {
        error = "Please enter a valid amount.";
      }

      if (!error && transferAmount > balanceAmount) {
        error = "Please reduce the transfer amount.";
      }

      return {
        ...formErrors,
        transferAmount: error,
      };
    });
  }, [isLoading, decimals, transferAmount, balanceAmount]);

  return {
    formErrors,
    hasErrors: Object.entries(formErrors).some(([, error]) => {
      return !!error;
    }),
  };
}
