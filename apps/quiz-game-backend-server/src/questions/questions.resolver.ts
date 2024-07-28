import * as graphql from "@nestjs/graphql";
import { QuestionsResolverBase } from "./base/questions.resolver.base";
import { Questions } from "./base/Questions";
import { QuestionsService } from "./questions.service";

@graphql.Resolver(() => Questions)
export class QuestionsResolver extends QuestionsResolverBase {
  constructor(protected readonly service: QuestionsService) {
    super(service);
  }
}
