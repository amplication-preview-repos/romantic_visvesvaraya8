import { QuestionsCreateNestedManyWithoutTopicsItemsInput } from "./QuestionsCreateNestedManyWithoutTopicsItemsInput";
import { QuizPackagesWhereUniqueInput } from "../quizPackages/QuizPackagesWhereUniqueInput";

export type TopicsCreateInput = {
  description?: string | null;
  name?: string | null;
  packageId?: string | null;
  questionsItems?: QuestionsCreateNestedManyWithoutTopicsItemsInput;
  quizPackage?: QuizPackagesWhereUniqueInput | null;
  topicQuizPackage?: string | null;
};
