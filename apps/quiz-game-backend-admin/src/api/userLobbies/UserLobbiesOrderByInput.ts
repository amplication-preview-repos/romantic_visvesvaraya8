import { SortOrder } from "../../util/SortOrder";

export type UserLobbiesOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lobbyId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userLobbiesLobby?: SortOrder;
  userLobbiesUser?: SortOrder;
};
