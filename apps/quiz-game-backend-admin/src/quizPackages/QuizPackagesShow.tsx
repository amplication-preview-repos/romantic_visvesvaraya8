import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { QUIZPACKAGES_TITLE_FIELD } from "./QuizPackagesTitle";

export const QuizPackagesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Lobbies"
          target="quizPackageId"
          label="LobbiesItems"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Topics"
          target="quizPackageId"
          label="TopicsItems"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
