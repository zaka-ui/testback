import { Project } from "../project/Project";

export type KeywordEntry = {
  createdAt: Date;
  id: string;
  keywordText: string | null;
  project?: Project | null;
  updatedAt: Date;
};
