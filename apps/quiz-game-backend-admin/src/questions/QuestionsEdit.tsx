import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TopicsTitle } from "../topics/TopicsTitle";

export const QuestionsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="CorrectAnswer" source="correctAnswer" />
        <TextInput label="QuestionTopic" source="questionTopic" />
        <TextInput label="Text" multiline source="text" />
        <ReferenceInput source="topic.id" reference="Topics" label="Topic">
          <SelectInput optionText={TopicsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
