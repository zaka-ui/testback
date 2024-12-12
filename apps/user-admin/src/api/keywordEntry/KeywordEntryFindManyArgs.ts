import { KeywordEntryWhereInput } from "./KeywordEntryWhereInput";
import { KeywordEntryOrderByInput } from "./KeywordEntryOrderByInput";

export type KeywordEntryFindManyArgs = {
  where?: KeywordEntryWhereInput;
  orderBy?: Array<KeywordEntryOrderByInput>;
  skip?: number;
  take?: number;
};
