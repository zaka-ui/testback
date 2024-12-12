import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type KeywordEntryUpdateInput = {
  keywordText?: string | null;
  project?: ProjectWhereUniqueInput | null;
};
