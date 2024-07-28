import { LobbiesWhereInput } from "./LobbiesWhereInput";
import { LobbiesOrderByInput } from "./LobbiesOrderByInput";

export type LobbiesFindManyArgs = {
  where?: LobbiesWhereInput;
  orderBy?: Array<LobbiesOrderByInput>;
  skip?: number;
  take?: number;
};
