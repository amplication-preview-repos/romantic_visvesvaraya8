import { TopicsWhereInput } from "./TopicsWhereInput";
import { TopicsOrderByInput } from "./TopicsOrderByInput";

export type TopicsFindManyArgs = {
  where?: TopicsWhereInput;
  orderBy?: Array<TopicsOrderByInput>;
  skip?: number;
  take?: number;
};
