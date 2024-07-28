import { TopicsWhereUniqueInput } from "../topics/TopicsWhereUniqueInput";

export type QuestionsUpdateInput = {
  correctAnswer?: string | null;
  questionTopic?: string | null;
  text?: string | null;
  topic?: TopicsWhereUniqueInput | null;
};
