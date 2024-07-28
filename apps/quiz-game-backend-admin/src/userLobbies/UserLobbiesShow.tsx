import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { LOBBIES_TITLE_FIELD } from "../lobbies/LobbiesTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserLobbiesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Lobby" source="lobbies.id" reference="Lobbies">
          <TextField source={LOBBIES_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="UserLobbiesLobby" source="userLobbiesLobby" />
        <TextField label="UserLobbiesUser" source="userLobbiesUser" />
      </SimpleShowLayout>
    </Show>
  );
};
