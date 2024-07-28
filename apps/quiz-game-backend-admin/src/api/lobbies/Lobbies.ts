import { QuizPackages } from "../quizPackages/QuizPackages";
import { UserLobbies } from "../userLobbies/UserLobbies";

export type Lobbies = {
  code: string | null;
  createdAt: Date;
  host: string | null;
  hostId: string | null;
  hostUser: string | null;
  id: string;
  lobbiesQuizPackage: string | null;
  name: string | null;
  quizPackage?: QuizPackages | null;
  updatedAt: Date;
  userLobbiesItems?: Array<UserLobbies>;
};
