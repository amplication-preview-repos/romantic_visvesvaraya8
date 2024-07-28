import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionsListRelationFilter } from "../questions/QuestionsListRelationFilter";
import { QuizPackagesWhereUniqueInput } from "../quizPackages/QuizPackagesWhereUniqueInput";

export type TopicsWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  packageId?: StringNullableFilter;
  questionsItems?: QuestionsListRelationFilter;
  quizPackage?: QuizPackagesWhereUniqueInput;
  topicQuizPackage?: StringNullableFilter;
};
