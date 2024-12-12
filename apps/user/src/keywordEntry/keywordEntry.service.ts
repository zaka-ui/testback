import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KeywordEntryServiceBase } from "./base/keywordEntry.service.base";

@Injectable()
export class KeywordEntryService extends KeywordEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
