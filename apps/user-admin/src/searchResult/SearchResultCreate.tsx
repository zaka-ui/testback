import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SearchResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="associatedKeyword" source="associatedKeyword" />
        <TextInput label="resultContent" multiline source="resultContent" />
      </SimpleForm>
    </Create>
  );
};
