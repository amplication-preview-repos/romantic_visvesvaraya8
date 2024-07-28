import { LobbiesCreateNestedManyWithoutQuizPackagesItemsInput } from "./LobbiesCreateNestedManyWithoutQuizPackagesItemsInput";
import { TopicsCreateNestedManyWithoutQuizPackagesItemsInput } from "./TopicsCreateNestedManyWithoutQuizPackagesItemsInput";

export type QuizPackagesCreateInput = {
  description?: string | null;
  lobbiesItems?: LobbiesCreateNestedManyWithoutQuizPackagesItemsInput;
  name?: string | null;
  topicsItems?: TopicsCreateNestedManyWithoutQuizPackagesItemsInput;
};
