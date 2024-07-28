import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserLobbiesListRelationFilter } from "../userLobbies/UserLobbiesListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userLobbiesItems?: UserLobbiesListRelationFilter;
  username?: StringFilter;
};
