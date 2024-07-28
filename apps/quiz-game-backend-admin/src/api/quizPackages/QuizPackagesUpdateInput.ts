import { LobbiesUpdateManyWithoutQuizPackagesItemsInput } from "./LobbiesUpdateManyWithoutQuizPackagesItemsInput";
import { TopicsUpdateManyWithoutQuizPackagesItemsInput } from "./TopicsUpdateManyWithoutQuizPackagesItemsInput";

export type QuizPackagesUpdateInput = {
  description?: string | null;
  lobbiesItems?: LobbiesUpdateManyWithoutQuizPackagesItemsInput;
  name?: string | null;
  topicsItems?: TopicsUpdateManyWithoutQuizPackagesItemsInput;
};
