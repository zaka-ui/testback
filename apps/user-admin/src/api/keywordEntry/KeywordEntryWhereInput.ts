import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type KeywordEntryWhereInput = {
  id?: StringFilter;
  keywordText?: StringNullableFilter;
  project?: ProjectWhereUniqueInput;
};
