import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LobbiesServiceBase } from "./base/lobbies.service.base";

@Injectable()
export class LobbiesService extends LobbiesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
