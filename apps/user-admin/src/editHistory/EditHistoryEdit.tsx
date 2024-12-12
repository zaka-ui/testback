import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EditHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="changeDescription"
          multiline
          source="changeDescription"
        />
        <DateTimeInput label="editTimestamp" source="editTimestamp" />
        <TextInput label="relatedProject" source="relatedProject" />
      </SimpleForm>
    </Edit>
  );
};
