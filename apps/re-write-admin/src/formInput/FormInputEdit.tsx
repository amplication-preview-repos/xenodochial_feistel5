import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FormInputEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="input1" source="input1" />
        <TextInput label="input2" source="input2" />
        <TextInput label="input3" source="input3" />
        <TextInput label="input4" source="input4" />
        <TextInput label="input5" source="input5" />
      </SimpleForm>
    </Edit>
  );
};
