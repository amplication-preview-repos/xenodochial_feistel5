import { FormInputWhereInput } from "./FormInputWhereInput";
import { FormInputOrderByInput } from "./FormInputOrderByInput";

export type FormInputFindManyArgs = {
  where?: FormInputWhereInput;
  orderBy?: Array<FormInputOrderByInput>;
  skip?: number;
  take?: number;
};
