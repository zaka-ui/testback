import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type KeywordEntryCreateInput = {
  keywordText?: string | null;
  project?: ProjectWhereUniqueInput | null;
};
