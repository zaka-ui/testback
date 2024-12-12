import { SortOrder } from "../../util/SortOrder";

export type EditHistoryOrderByInput = {
  changeDescription?: SortOrder;
  createdAt?: SortOrder;
  editTimestamp?: SortOrder;
  id?: SortOrder;
  relatedProject?: SortOrder;
  updatedAt?: SortOrder;
};
