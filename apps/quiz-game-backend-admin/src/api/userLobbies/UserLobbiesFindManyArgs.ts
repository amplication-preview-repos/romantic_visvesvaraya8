import { UserLobbiesWhereInput } from "./UserLobbiesWhereInput";
import { UserLobbiesOrderByInput } from "./UserLobbiesOrderByInput";

export type UserLobbiesFindManyArgs = {
  where?: UserLobbiesWhereInput;
  orderBy?: Array<UserLobbiesOrderByInput>;
  skip?: number;
  take?: number;
};
