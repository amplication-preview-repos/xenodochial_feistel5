import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FormInputList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FormInputs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="input1" source="input1" />
        <TextField label="input2" source="input2" />
        <TextField label="input3" source="input3" />
        <TextField label="input4" source="input4" />
        <TextField label="input5" source="input5" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
