import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { LobbiesTitle } from "../lobbies/LobbiesTitle";
import { UserTitle } from "../user/UserTitle";

export const UserLobbiesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
