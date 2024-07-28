import * as graphql from "@nestjs/graphql";
import { QuizPackagesResolverBase } from "./base/quizPackages.resolver.base";
import { QuizPackages } from "./base/QuizPackages";
import { QuizPackagesService } from "./quizPackages.service";

@graphql.Resolver(() => QuizPackages)
export class QuizPackagesResolver extends QuizPackagesResolverBase {
  constructor(protected readonly service: QuizPackagesService) {
    super(service);
  }
}
