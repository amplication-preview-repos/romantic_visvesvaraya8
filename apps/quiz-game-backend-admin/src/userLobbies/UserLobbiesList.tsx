import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LOBBIES_TITLE_FIELD } from "../lobbies/LobbiesTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserLobbiesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserLobbiesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
