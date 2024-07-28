import { LobbiesWhereUniqueInput } from "../lobbies/LobbiesWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserLobbiesCreateInput = {
  lobby?: LobbiesWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  userLobbiesLobby?: string | null;
  userLobbiesUser?: string | null;
};
