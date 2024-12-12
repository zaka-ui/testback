import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EditHistoryWhereInput = {
  changeDescription?: StringNullableFilter;
  editTimestamp?: DateTimeNullableFilter;
  id?: StringFilter;
  relatedProject?: StringNullableFilter;
};
