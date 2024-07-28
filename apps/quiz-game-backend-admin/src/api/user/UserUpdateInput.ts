import { InputJsonValue } from "../../types";
import { UserLobbiesUpdateManyWithoutUsersInput } from "./UserLobbiesUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userLobbiesItems?: UserLobbiesUpdateManyWithoutUsersInput;
  username?: string;
};
