import { SearchResult as TSearchResult } from "../api/searchResult/SearchResult";

export const SEARCHRESULT_TITLE_FIELD = "associatedKeyword";

export const SearchResultTitle = (record: TSearchResult): string => {
  return record.associatedKeyword?.toString() || String(record.id);
};
