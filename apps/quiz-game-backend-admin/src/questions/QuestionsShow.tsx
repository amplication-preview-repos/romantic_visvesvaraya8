import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TOPICS_TITLE_FIELD } from "../topics/TopicsTitle";

export const QuestionsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="CorrectAnswer" source="correctAnswer" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="QuestionTopic" source="questionTopic" />
        <TextField label="Text" source="text" />
        <ReferenceField label="Topic" source="topics.id" reference="Topics">
          <TextField source={TOPICS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
