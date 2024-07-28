/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Topics as PrismaTopics,
  Questions as PrismaQuestions,
  QuizPackages as PrismaQuizPackages,
} from "@prisma/client";

export class TopicsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TopicsCountArgs, "select">): Promise<number> {
    return this.prisma.topics.count(args);
  }

  async topicsItems(args: Prisma.TopicsFindManyArgs): Promise<PrismaTopics[]> {
    return this.prisma.topics.findMany(args);
  }
  async topics(
    args: Prisma.TopicsFindUniqueArgs
  ): Promise<PrismaTopics | null> {
    return this.prisma.topics.findUnique(args);
  }
  async createTopics(args: Prisma.TopicsCreateArgs): Promise<PrismaTopics> {
    return this.prisma.topics.create(args);
  }
  async updateTopics(args: Prisma.TopicsUpdateArgs): Promise<PrismaTopics> {
    return this.prisma.topics.update(args);
  }
  async deleteTopics(args: Prisma.TopicsDeleteArgs): Promise<PrismaTopics> {
    return this.prisma.topics.delete(args);
  }

  async findQuestionsItems(
    parentId: string,
    args: Prisma.QuestionsFindManyArgs
  ): Promise<PrismaQuestions[]> {
    return this.prisma.topics
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .questionsItems(args);
  }

  async getQuizPackage(parentId: string): Promise<PrismaQuizPackages | null> {
    return this.prisma.topics
      .findUnique({
        where: { id: parentId },
      })
      .quizPackage();
  }
}
