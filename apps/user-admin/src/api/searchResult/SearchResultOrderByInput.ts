import { SortOrder } from "../../util/SortOrder";

export type SearchResultOrderByInput = {
  associatedKeyword?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  resultContent?: SortOrder;
  updatedAt?: SortOrder;
};
