import { QuizPackagesWhereUniqueInput } from "../quizPackages/QuizPackagesWhereUniqueInput";
import { UserLobbiesUpdateManyWithoutLobbiesItemsInput } from "./UserLobbiesUpdateManyWithoutLobbiesItemsInput";

export type LobbiesUpdateInput = {
  code?: string | null;
  host?: string | null;
  hostId?: string | null;
  hostUser?: string | null;
  lobbiesQuizPackage?: string | null;
  name?: string | null;
  quizPackage?: QuizPackagesWhereUniqueInput | null;
  userLobbiesItems?: UserLobbiesUpdateManyWithoutLobbiesItemsInput;
};
