import { Module } from "@nestjs/common";
import { TopicsModuleBase } from "./base/topics.module.base";
import { TopicsService } from "./topics.service";
import { TopicsController } from "./topics.controller";
import { TopicsResolver } from "./topics.resolver";

@Module({
  imports: [TopicsModuleBase],
  controllers: [TopicsController],
  providers: [TopicsService, TopicsResolver],
  exports: [TopicsService],
})
export class TopicsModule {}
