import { JsonValue } from "type-fest";
import { UserLobbies } from "../userLobbies/UserLobbies";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userLobbiesItems?: Array<UserLobbies>;
  username: string;
};
