import { SortOrder } from "../../util/SortOrder";

export type TopicsOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  packageId?: SortOrder;
  quizPackageId?: SortOrder;
  topicQuizPackage?: SortOrder;
  updatedAt?: SortOrder;
};
