import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestionsService } from "./questions.service";
import { QuestionsControllerBase } from "./base/questions.controller.base";

@swagger.ApiTags("questions")
@common.Controller("questions")
export class QuestionsController extends QuestionsControllerBase {
  constructor(protected readonly service: QuestionsService) {
    super(service);
  }
}
