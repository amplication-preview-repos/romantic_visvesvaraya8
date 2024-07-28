import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuizPackagesServiceBase } from "./base/quizPackages.service.base";

@Injectable()
export class QuizPackagesService extends QuizPackagesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
