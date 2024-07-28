import { SortOrder } from "../../util/SortOrder";

export type QuestionsOrderByInput = {
  correctAnswer?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  questionTopic?: SortOrder;
  text?: SortOrder;
  topicId?: SortOrder;
  updatedAt?: SortOrder;
};
