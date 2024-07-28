import { Lobbies as TLobbies } from "../api/lobbies/Lobbies";

export const LOBBIES_TITLE_FIELD = "name";

export const LobbiesTitle = (record: TLobbies): string => {
  return record.name?.toString() || String(record.id);
};
