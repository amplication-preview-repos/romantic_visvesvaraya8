import * as graphql from "@nestjs/graphql";
import { UserLobbiesResolverBase } from "./base/userLobbies.resolver.base";
import { UserLobbies } from "./base/UserLobbies";
import { UserLobbiesService } from "./userLobbies.service";

@graphql.Resolver(() => UserLobbies)
export class UserLobbiesResolver extends UserLobbiesResolverBase {
  constructor(protected readonly service: UserLobbiesService) {
    super(service);
  }
}
