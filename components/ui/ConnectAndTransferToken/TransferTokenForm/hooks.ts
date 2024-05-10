import { useTokenBalance } from "@/hooks";
import { FixedNumber, isAddress } from "ethers";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { TransferFormValues } from "./types";
import { getInitialFormErrors } from "./utils";

export function useValidateFormValues(formValues: TransferFormValues) {
  const { balance, isLoading } = useTokenBalance();
  const { receivingWallet, transferAmount } = formValues;
  const { formatted: balanceAmount } = balance.fakeWeth ?? {};
  const { address: connectedWallet, isConnecting } = useAccount();
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
      if (parseFloat(transferAmount || "0") <= 0) {
        error = "Please enter a valid amount.";
      }

      if (
        !error &&
        // @TODO: Use the 'bigint' value instead.
        FixedNumber.fromString(transferAmount).gt(
          FixedNumber.fromString(balanceAmount || "0")
        )
      ) {
        error = "Please reduce the transfer amount.";
      }

      return {
        ...formErrors,
        transferAmount: error,
      };
    });
  }, [isLoading, transferAmount, balanceAmount]);

  return {
    formErrors,
    hasErrors: Object.entries(formErrors).some(([, error]) => {
      return !!error;
    }),
  };
}
