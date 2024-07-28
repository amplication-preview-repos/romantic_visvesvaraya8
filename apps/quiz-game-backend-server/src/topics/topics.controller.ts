import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TopicsService } from "./topics.service";
import { TopicsControllerBase } from "./base/topics.controller.base";

@swagger.ApiTags("topics")
@common.Controller("topics")
export class TopicsController extends TopicsControllerBase {
  constructor(protected readonly service: TopicsService) {
    super(service);
  }
}
