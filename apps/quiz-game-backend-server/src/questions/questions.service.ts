import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestionsServiceBase } from "./base/questions.service.base";

@Injectable()
export class QuestionsService extends QuestionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
