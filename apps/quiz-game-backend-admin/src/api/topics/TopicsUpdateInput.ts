import { QuestionsUpdateManyWithoutTopicsItemsInput } from "./QuestionsUpdateManyWithoutTopicsItemsInput";
import { QuizPackagesWhereUniqueInput } from "../quizPackages/QuizPackagesWhereUniqueInput";

export type TopicsUpdateInput = {
  description?: string | null;
  name?: string | null;
  packageId?: string | null;
  questionsItems?: QuestionsUpdateManyWithoutTopicsItemsInput;
  quizPackage?: QuizPackagesWhereUniqueInput | null;
  topicQuizPackage?: string | null;
};
