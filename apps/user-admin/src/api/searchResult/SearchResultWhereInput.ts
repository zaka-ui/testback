import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SearchResultWhereInput = {
  associatedKeyword?: StringNullableFilter;
  id?: StringFilter;
  resultContent?: StringNullableFilter;
};
