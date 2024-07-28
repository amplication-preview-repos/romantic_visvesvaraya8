import { SortOrder } from "../../util/SortOrder";

export type LobbiesOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  host?: SortOrder;
  hostId?: SortOrder;
  hostUser?: SortOrder;
  id?: SortOrder;
  lobbiesQuizPackage?: SortOrder;
  name?: SortOrder;
  quizPackageId?: SortOrder;
  updatedAt?: SortOrder;
};
