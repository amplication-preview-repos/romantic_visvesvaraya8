import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TopicsServiceBase } from "./base/topics.service.base";

@Injectable()
export class TopicsService extends TopicsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
