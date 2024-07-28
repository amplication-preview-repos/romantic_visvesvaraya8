import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserLobbiesServiceBase } from "./base/userLobbies.service.base";

@Injectable()
export class UserLobbiesService extends UserLobbiesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
