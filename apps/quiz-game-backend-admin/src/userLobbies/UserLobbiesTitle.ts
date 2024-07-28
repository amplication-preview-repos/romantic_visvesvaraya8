import { UserLobbies as TUserLobbies } from "../api/userLobbies/UserLobbies";

export const USERLOBBIES_TITLE_FIELD = "userLobbiesLobby";

export const UserLobbiesTitle = (record: TUserLobbies): string => {
  return record.userLobbiesLobby?.toString() || String(record.id);
};
