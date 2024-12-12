import { KeywordEntry as TKeywordEntry } from "../api/keywordEntry/KeywordEntry";

export const KEYWORDENTRY_TITLE_FIELD = "keywordText";

export const KeywordEntryTitle = (record: TKeywordEntry): string => {
  return record.keywordText?.toString() || String(record.id);
};
