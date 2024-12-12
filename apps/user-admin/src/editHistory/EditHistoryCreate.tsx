import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EditHistoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="changeDescription"
          multiline
          source="changeDescription"
        />
        <DateTimeInput label="editTimestamp" source="editTimestamp" />
        <TextInput label="relatedProject" source="relatedProject" />
      </SimpleForm>
    </Create>
  );
};
