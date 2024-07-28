import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuizPackagesWhereUniqueInput } from "../quizPackages/QuizPackagesWhereUniqueInput";
import { UserLobbiesListRelationFilter } from "../userLobbies/UserLobbiesListRelationFilter";

export type LobbiesWhereInput = {
  code?: StringNullableFilter;
  host?: StringNullableFilter;
  hostId?: StringNullableFilter;
  hostUser?: StringNullableFilter;
  id?: StringFilter;
  lobbiesQuizPackage?: StringNullableFilter;
  name?: StringNullableFilter;
  quizPackage?: QuizPackagesWhereUniqueInput;
  userLobbiesItems?: UserLobbiesListRelationFilter;
};
