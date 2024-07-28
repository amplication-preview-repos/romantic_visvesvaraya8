import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { QUIZPACKAGES_TITLE_FIELD } from "../quizPackages/QuizPackagesTitle";

export const TopicsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TopicsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="PackageId" source="packageId" />
        <ReferenceField
          label="QuizPackage"
          source="quizpackages.id"
          reference="QuizPackages"
        >
          <TextField source={QUIZPACKAGES_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TopicQuizPackage" source="topicQuizPackage" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
