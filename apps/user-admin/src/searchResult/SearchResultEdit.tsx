import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SearchResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="associatedKeyword" source="associatedKeyword" />
        <TextInput label="resultContent" multiline source="resultContent" />
      </SimpleForm>
    </Edit>
  );
};
