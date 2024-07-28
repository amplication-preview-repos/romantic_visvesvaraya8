import { Lobbies } from "../lobbies/Lobbies";
import { User } from "../user/User";

export type UserLobbies = {
  createdAt: Date;
  id: string;
  lobby?: Lobbies | null;
  updatedAt: Date;
  user?: User | null;
  userLobbiesLobby: string | null;
  userLobbiesUser: string | null;
};
