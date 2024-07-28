import { InputJsonValue } from "../../types";
import { UserLobbiesCreateNestedManyWithoutUsersInput } from "./UserLobbiesCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userLobbiesItems?: UserLobbiesCreateNestedManyWithoutUsersInput;
  username: string;
};
