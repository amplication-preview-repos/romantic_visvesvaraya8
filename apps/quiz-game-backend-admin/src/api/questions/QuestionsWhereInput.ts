import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TopicsWhereUniqueInput } from "../topics/TopicsWhereUniqueInput";

export type QuestionsWhereInput = {
  correctAnswer?: StringNullableFilter;
  id?: StringFilter;
  questionTopic?: StringNullableFilter;
  text?: StringNullableFilter;
  topic?: TopicsWhereUniqueInput;
};
