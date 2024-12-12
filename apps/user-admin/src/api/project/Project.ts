import { KeywordEntry } from "../keywordEntry/KeywordEntry";

export type Project = {
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  keywordEntries?: Array<KeywordEntry>;
  name: string | null;
  updatedAt: Date;
};
