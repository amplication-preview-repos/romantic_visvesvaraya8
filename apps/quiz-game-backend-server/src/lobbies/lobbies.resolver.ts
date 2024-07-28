import * as graphql from "@nestjs/graphql";
import { LobbiesResolverBase } from "./base/lobbies.resolver.base";
import { Lobbies } from "./base/Lobbies";
import { LobbiesService } from "./lobbies.service";

@graphql.Resolver(() => Lobbies)
export class LobbiesResolver extends LobbiesResolverBase {
  constructor(protected readonly service: LobbiesService) {
    super(service);
  }
}
