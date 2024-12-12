import { EditHistory as TEditHistory } from "../api/editHistory/EditHistory";

export const EDITHISTORY_TITLE_FIELD = "relatedProject";

export const EditHistoryTitle = (record: TEditHistory): string => {
  return record.relatedProject?.toString() || String(record.id);
};
