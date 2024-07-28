import { Module } from "@nestjs/common";
import { LobbiesModuleBase } from "./base/lobbies.module.base";
import { LobbiesService } from "./lobbies.service";
import { LobbiesController } from "./lobbies.controller";
import { LobbiesResolver } from "./lobbies.resolver";

@Module({
  imports: [LobbiesModuleBase],
  controllers: [LobbiesController],
  providers: [LobbiesService, LobbiesResolver],
  exports: [LobbiesService],
})
export class LobbiesModule {}
