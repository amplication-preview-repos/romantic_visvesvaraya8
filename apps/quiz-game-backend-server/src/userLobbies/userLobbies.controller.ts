import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserLobbiesService } from "./userLobbies.service";
import { UserLobbiesControllerBase } from "./base/userLobbies.controller.base";

@swagger.ApiTags("userLobbies")
@common.Controller("userLobbies")
export class UserLobbiesController extends UserLobbiesControllerBase {
  constructor(protected readonly service: UserLobbiesService) {
    super(service);
  }
}
