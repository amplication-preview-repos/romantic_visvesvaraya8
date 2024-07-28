import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { LobbiesTitle } from "../lobbies/LobbiesTitle";
import { UserTitle } from "../user/UserTitle";

export const UserLobbiesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="lobby.id" reference="Lobbies" label="Lobby">
          <SelectInput optionText={LobbiesTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="UserLobbiesLobby" source="userLobbiesLobby" />
        <TextInput label="UserLobbiesUser" source="userLobbiesUser" />
      </SimpleForm>
    </Create>
  );
};
