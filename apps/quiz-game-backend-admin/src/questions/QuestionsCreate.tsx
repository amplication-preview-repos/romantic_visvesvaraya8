import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TopicsTitle } from "../topics/TopicsTitle";

export const QuestionsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CorrectAnswer" source="correctAnswer" />
        <TextInput label="QuestionTopic" source="questionTopic" />
        <TextInput label="Text" multiline source="text" />
        <ReferenceInput source="topic.id" reference="Topics" label="Topic">
          <SelectInput optionText={TopicsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
