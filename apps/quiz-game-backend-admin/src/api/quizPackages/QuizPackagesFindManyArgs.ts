import { QuizPackagesWhereInput } from "./QuizPackagesWhereInput";
import { QuizPackagesOrderByInput } from "./QuizPackagesOrderByInput";

export type QuizPackagesFindManyArgs = {
  where?: QuizPackagesWhereInput;
  orderBy?: Array<QuizPackagesOrderByInput>;
  skip?: number;
  take?: number;
};
