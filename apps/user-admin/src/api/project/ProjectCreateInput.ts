import { KeywordEntryCreateNestedManyWithoutProjectsInput } from "./KeywordEntryCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  createdBy?: string | null;
  description?: string | null;
  keywordEntries?: KeywordEntryCreateNestedManyWithoutProjectsInput;
  name?: string | null;
};
