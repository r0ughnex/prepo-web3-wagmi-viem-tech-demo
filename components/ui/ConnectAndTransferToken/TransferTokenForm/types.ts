export type TransferFormFieldType = "text" | "number";

export type TransferFormFieldId = "receivingWallet" | "transferAmount";

export type TransferFormValues = Record<TransferFormFieldId, string>;

export type TransferFormErrors = Record<TransferFormFieldId, string>;

interface GenericFormSchema {
  type: TransferFormFieldType;
  id: TransferFormFieldId;
  placeholder?: string;
  label?: string;
}

export type TransferFormSchema = GenericFormSchema &
  (
    | {
        type: "number";
        step?: number;
      }
    | {
        type: "text";
      }
  );
