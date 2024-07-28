import { QuizPackagesWhereUniqueInput } from "../quizPackages/QuizPackagesWhereUniqueInput";
import { UserLobbiesCreateNestedManyWithoutLobbiesItemsInput } from "./UserLobbiesCreateNestedManyWithoutLobbiesItemsInput";

export type LobbiesCreateInput = {
  code?: string | null;
  host?: string | null;
  hostId?: string | null;
  hostUser?: string | null;
  lobbiesQuizPackage?: string | null;
  name?: string | null;
  quizPackage?: QuizPackagesWhereUniqueInput | null;
  userLobbiesItems?: UserLobbiesCreateNestedManyWithoutLobbiesItemsInput;
};
