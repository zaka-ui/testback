import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EditHistoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="changeDescription" source="changeDescription" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="editTimestamp" source="editTimestamp" />
        <TextField label="ID" source="id" />
        <TextField label="relatedProject" source="relatedProject" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
