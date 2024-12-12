import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EditHistoryServiceBase } from "./base/editHistory.service.base";

@Injectable()
export class EditHistoryService extends EditHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
