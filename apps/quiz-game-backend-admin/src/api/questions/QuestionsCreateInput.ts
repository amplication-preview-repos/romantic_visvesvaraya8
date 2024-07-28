import { TopicsWhereUniqueInput } from "../topics/TopicsWhereUniqueInput";

export type QuestionsCreateInput = {
  correctAnswer?: string | null;
  questionTopic?: string | null;
  text?: string | null;
  topic?: TopicsWhereUniqueInput | null;
};
