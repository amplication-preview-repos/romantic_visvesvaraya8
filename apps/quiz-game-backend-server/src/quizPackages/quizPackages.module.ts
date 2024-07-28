import { Module } from "@nestjs/common";
import { QuizPackagesModuleBase } from "./base/quizPackages.module.base";
import { QuizPackagesService } from "./quizPackages.service";
import { QuizPackagesController } from "./quizPackages.controller";
import { QuizPackagesResolver } from "./quizPackages.resolver";

@Module({
  imports: [QuizPackagesModuleBase],
  controllers: [QuizPackagesController],
  providers: [QuizPackagesService, QuizPackagesResolver],
  exports: [QuizPackagesService],
})
export class QuizPackagesModule {}
