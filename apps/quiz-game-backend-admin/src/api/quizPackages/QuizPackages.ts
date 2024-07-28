import { Lobbies } from "../lobbies/Lobbies";
import { Topics } from "../topics/Topics";

export type QuizPackages = {
  createdAt: Date;
  description: string | null;
  id: string;
  lobbiesItems?: Array<Lobbies>;
  name: string | null;
  topicsItems?: Array<Topics>;
  updatedAt: Date;
};
