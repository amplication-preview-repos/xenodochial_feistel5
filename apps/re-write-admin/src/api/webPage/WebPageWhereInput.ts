import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WebPageWhereInput = {
  appendedContent?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
};
