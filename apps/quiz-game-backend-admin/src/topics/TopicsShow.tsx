import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TOPICS_TITLE_FIELD } from "./TopicsTitle";
import { QUIZPACKAGES_TITLE_FIELD } from "../quizPackages/QuizPackagesTitle";

export const TopicsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Questions"
          target="topicId"
          label="QuestionsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="CorrectAnswer" source="correctAnswer" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="QuestionTopic" source="questionTopic" />
            <TextField label="Text" source="text" />
            <ReferenceField label="Topic" source="topics.id" reference="Topics">
              <TextField source={TOPICS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
