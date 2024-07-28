import * as graphql from "@nestjs/graphql";
import { TopicsResolverBase } from "./base/topics.resolver.base";
import { Topics } from "./base/Topics";
import { TopicsService } from "./topics.service";

@graphql.Resolver(() => Topics)
export class TopicsResolver extends TopicsResolverBase {
  constructor(protected readonly service: TopicsService) {
    super(service);
  }
}
