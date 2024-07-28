import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LobbiesTitle } from "../lobbies/LobbiesTitle";
import { TopicsTitle } from "../topics/TopicsTitle";

export const QuizPackagesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="lobbiesItems"
          reference="Lobbies"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LobbiesTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="topicsItems"
          reference="Topics"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TopicsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
