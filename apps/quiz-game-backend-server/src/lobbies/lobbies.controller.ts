import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LobbiesService } from "./lobbies.service";
import { LobbiesControllerBase } from "./base/lobbies.controller.base";

@swagger.ApiTags("lobbies")
@common.Controller("lobbies")
export class LobbiesController extends LobbiesControllerBase {
  constructor(protected readonly service: LobbiesService) {
    super(service);
  }
}
