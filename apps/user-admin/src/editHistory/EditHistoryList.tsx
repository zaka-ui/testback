import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EditHistoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EditHistories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="changeDescription" source="changeDescription" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="editTimestamp" source="editTimestamp" />
        <TextField label="ID" source="id" />
        <TextField label="relatedProject" source="relatedProject" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
