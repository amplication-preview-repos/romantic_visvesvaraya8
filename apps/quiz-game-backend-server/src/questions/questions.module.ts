import { Module } from "@nestjs/common";
import { QuestionsModuleBase } from "./base/questions.module.base";
import { QuestionsService } from "./questions.service";
import { QuestionsController } from "./questions.controller";
import { QuestionsResolver } from "./questions.resolver";

@Module({
  imports: [QuestionsModuleBase],
  controllers: [QuestionsController],
  providers: [QuestionsService, QuestionsResolver],
  exports: [QuestionsService],
})
export class QuestionsModule {}
