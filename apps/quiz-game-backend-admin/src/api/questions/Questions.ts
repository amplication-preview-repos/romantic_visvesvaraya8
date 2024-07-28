import { Topics } from "../topics/Topics";

export type Questions = {
  correctAnswer: string | null;
  createdAt: Date;
  id: string;
  questionTopic: string | null;
  text: string | null;
  topic?: Topics | null;
  updatedAt: Date;
};
