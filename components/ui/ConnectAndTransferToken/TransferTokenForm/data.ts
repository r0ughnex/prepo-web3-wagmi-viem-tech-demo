import { TransferFormSchema } from "./types";

export const transferFormSchema: TransferFormSchema[] = [
  {
    type: "text",
    id: "receivingWallet",
    label: "Receiving wallet",
    placeholder: "0xCAEFe6BA5ceB891C1ba0838aA5F5cc2B70ef91D0",
  },
  {
    type: "number",
    id: "transferAmount",
    label: "Transfer amount",
    placeholder: "0.001",
    step: 0.001,
  },
];
