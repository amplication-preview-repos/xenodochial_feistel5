import { FormInput as TFormInput } from "../api/formInput/FormInput";

export const FORMINPUT_TITLE_FIELD = "input1";

export const FormInputTitle = (record: TFormInput): string => {
  return record.input1?.toString() || String(record.id);
};
