import { QuestionsWhereInput } from "./QuestionsWhereInput";
import { QuestionsOrderByInput } from "./QuestionsOrderByInput";

export type QuestionsFindManyArgs = {
  where?: QuestionsWhereInput;
  orderBy?: Array<QuestionsOrderByInput>;
  skip?: number;
  take?: number;
};
