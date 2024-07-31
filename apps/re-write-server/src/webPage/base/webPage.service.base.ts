/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, WebPage as PrismaWebPage } from "@prisma/client";

export class WebPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.WebPageCountArgs, "select">): Promise<number> {
    return this.prisma.webPage.count(args);
  }

  async webPages(args: Prisma.WebPageFindManyArgs): Promise<PrismaWebPage[]> {
    return this.prisma.webPage.findMany(args);
  }
  async webPage(
    args: Prisma.WebPageFindUniqueArgs
  ): Promise<PrismaWebPage | null> {
    return this.prisma.webPage.findUnique(args);
  }
  async createWebPage(args: Prisma.WebPageCreateArgs): Promise<PrismaWebPage> {
    return this.prisma.webPage.create(args);
  }
  async updateWebPage(args: Prisma.WebPageUpdateArgs): Promise<PrismaWebPage> {
    return this.prisma.webPage.update(args);
  }
  async deleteWebPage(args: Prisma.WebPageDeleteArgs): Promise<PrismaWebPage> {
    return this.prisma.webPage.delete(args);
  }
}