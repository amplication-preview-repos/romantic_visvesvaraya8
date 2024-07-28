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
import { TOPICS_TITLE_FIELD } from "../topics/TopicsTitle";

export const QuestionsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QuestionsItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
