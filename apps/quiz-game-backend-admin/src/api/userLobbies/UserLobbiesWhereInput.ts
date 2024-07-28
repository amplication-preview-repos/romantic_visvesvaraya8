import { StringFilter } from "../../util/StringFilter";
import { LobbiesWhereUniqueInput } from "../lobbies/LobbiesWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserLobbiesWhereInput = {
  id?: StringFilter;
  lobby?: LobbiesWhereUniqueInput;
  user?: UserWhereUniqueInput;
  userLobbiesLobby?: StringNullableFilter;
  userLobbiesUser?: StringNullableFilter;
};
