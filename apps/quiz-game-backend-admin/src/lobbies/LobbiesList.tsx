import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { QUIZPACKAGES_TITLE_FIELD } from "../quizPackages/QuizPackagesTitle";

export const LobbiesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LobbiesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Host" source="host" />
        <TextField label="HostId" source="hostId" />
        <TextField label="HostUser" source="hostUser" />
        <TextField label="ID" source="id" />
        <TextField label="LobbiesQuizPackage" source="lobbiesQuizPackage" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="QuizPackage"
          source="quizpackages.id"
          reference="QuizPackages"
        >
          <TextField source={QUIZPACKAGES_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
