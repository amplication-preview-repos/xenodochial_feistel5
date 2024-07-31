import { SortOrder } from "../../util/SortOrder";

export type WebPageOrderByInput = {
  appendedContent?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
