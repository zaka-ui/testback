import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { KeywordEntryListRelationFilter } from "../keywordEntry/KeywordEntryListRelationFilter";

export type ProjectWhereInput = {
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  keywordEntries?: KeywordEntryListRelationFilter;
  name?: StringNullableFilter;
};
