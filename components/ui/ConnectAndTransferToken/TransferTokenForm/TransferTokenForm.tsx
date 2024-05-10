import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { CONTRACT_FAKE_WETH } from "@/constants";
import { useIsServerSide, useTokenBalance } from "@/hooks";
import { parseUnits } from "ethers";
import { FormEventHandler, useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { WalletActionButtons } from "../WalletActionButtons";
import styles from "./TransferTokenForm.module.scss";
import { transferFormSchema } from "./data";
import { useValidateFormValues } from "./hooks";
import { TransferFormFieldId } from "./types";
import { getInitialFormValues } from "./utils";

export function TransferTokenForm() {
  const { isServerSide } = useIsServerSide();
  const { address, isConnected } = useAccount();
  const { balance, isLoading } = useTokenBalance();
  const { writeContract, isPending } = useWriteContract();
  const { decimals = 0 } = balance.fakeWeth ?? {};
  const [formValues, setFormValues] = useState(
    getInitialFormValues(transferFormSchema)
  );

  const [wasSubmitted, setWasSubmitted] = useState(false);
  const { formErrors, hasErrors } = useValidateFormValues(formValues);

  const handleChange = (id: TransferFormFieldId, value: string) => {
    setFormValues((formValues) => ({ ...formValues, [id]: value }));
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setWasSubmitted(true);

    // Only proceed if form has no errors.
    if (!address || !decimals || hasErrors) {
      return;
    }

    writeContract({
      ...CONTRACT_FAKE_WETH,
      functionName: "transfer",
      args: [
        formValues.receivingWallet as `0x${string}`,
        parseUnits(formValues.transferAmount, decimals),
      ],
    });
  };

  return (
    <form
      noValidate
      onSubmit={handleFormSubmit}
      className={styles.transferForm}
    >
      {transferFormSchema.map(({ id, label, ...otherProps }) => {
        const error = formErrors[id];

        return (
          <div key={id} className={styles.transferFormField}>
            {label && <Label htmlFor={id}>{label}</Label>}
            <Input
              {...otherProps}
              value={formValues[id]}
              onChange={(e) => handleChange(id, e.target.value)}
              disabled={isServerSide || isLoading || !isConnected}
              required
              id={id}
            />
            {wasSubmitted && error && (
              <p className={styles.transferFormFieldError}>{error}</p>
            )}
          </div>
        );
      })}
      <WalletActionButtons isLoading={isLoading || isPending} />
    </form>
  );
}
