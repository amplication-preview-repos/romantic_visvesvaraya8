import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LOBBIES_TITLE_FIELD } from "./LobbiesTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { QUIZPACKAGES_TITLE_FIELD } from "../quizPackages/QuizPackagesTitle";

export const LobbiesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="UserLobbies"
          target="lobbyId"
          label="UserLobbiesItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Lobby"
              source="lobbies.id"
              reference="Lobbies"
            >
              <TextField source={LOBBIES_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="UserLobbiesLobby" source="userLobbiesLobby" />
            <TextField label="UserLobbiesUser" source="userLobbiesUser" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
