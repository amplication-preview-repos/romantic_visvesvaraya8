import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuizPackagesService } from "./quizPackages.service";
import { QuizPackagesControllerBase } from "./base/quizPackages.controller.base";

@swagger.ApiTags("quizPackages")
@common.Controller("quizPackages")
export class QuizPackagesController extends QuizPackagesControllerBase {
  constructor(protected readonly service: QuizPackagesService) {
    super(service);
  }
}
