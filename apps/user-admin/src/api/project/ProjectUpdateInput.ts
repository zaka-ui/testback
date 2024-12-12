import { KeywordEntryUpdateManyWithoutProjectsInput } from "./KeywordEntryUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  createdBy?: string | null;
  description?: string | null;
  keywordEntries?: KeywordEntryUpdateManyWithoutProjectsInput;
  name?: string | null;
};
