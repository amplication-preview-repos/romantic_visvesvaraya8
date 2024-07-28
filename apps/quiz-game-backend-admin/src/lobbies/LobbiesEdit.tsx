import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QuizPackagesTitle } from "../quizPackages/QuizPackagesTitle";
import { UserLobbiesTitle } from "../userLobbies/UserLobbiesTitle";

export const LobbiesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Host" source="host" />
        <TextInput label="HostId" source="hostId" />
        <TextInput label="HostUser" source="hostUser" />
        <TextInput label="LobbiesQuizPackage" source="lobbiesQuizPackage" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="quizPackage.id"
          reference="QuizPackages"
          label="QuizPackage"
        >
          <SelectInput optionText={QuizPackagesTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="userLobbiesItems"
          reference="UserLobbies"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserLobbiesTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
