import {
  TransferFormErrors,
  TransferFormSchema,
  TransferFormValues,
} from "./types";

export function getInitialFormValues(schema: TransferFormSchema[]) {
  return schema.reduce((values, { id }) => {
    return { ...values, [id]: "" };
  }, {} as TransferFormValues);
}

export function getInitialFormErrors(formValues: TransferFormValues) {
  return Object.entries(formValues).reduce((errors, [id]) => {
    return { ...errors, [id]: "" };
  }, {} as TransferFormErrors);
}
