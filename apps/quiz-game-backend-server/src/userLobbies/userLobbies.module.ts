import { Module } from "@nestjs/common";
import { UserLobbiesModuleBase } from "./base/userLobbies.module.base";
import { UserLobbiesService } from "./userLobbies.service";
import { UserLobbiesController } from "./userLobbies.controller";
import { UserLobbiesResolver } from "./userLobbies.resolver";

@Module({
  imports: [UserLobbiesModuleBase],
  controllers: [UserLobbiesController],
  providers: [UserLobbiesService, UserLobbiesResolver],
  exports: [UserLobbiesService],
})
export class UserLobbiesModule {}
