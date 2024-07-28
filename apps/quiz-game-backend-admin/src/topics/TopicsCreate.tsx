import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { QuestionsTitle } from "../questions/QuestionsTitle";
import { QuizPackagesTitle } from "../quizPackages/QuizPackagesTitle";

export const TopicsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="PackageId" source="packageId" />
        <ReferenceArrayInput
          source="questionsItems"
          reference="Questions"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionsTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="quizPackage.id"
          reference="QuizPackages"
          label="QuizPackage"
        >
          <SelectInput optionText={QuizPackagesTitle} />
        </ReferenceInput>
        <TextInput label="TopicQuizPackage" source="topicQuizPackage" />
      </SimpleForm>
    </Create>
  );
};
