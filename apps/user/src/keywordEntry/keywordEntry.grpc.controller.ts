import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KeywordEntryService } from "./keywordEntry.service";
import { KeywordEntryGrpcControllerBase } from "./base/keywordEntry.grpc.controller.base";

@swagger.ApiTags("keywordEntries")
@common.Controller("keywordEntries")
export class KeywordEntryGrpcController extends KeywordEntryGrpcControllerBase {
  constructor(protected readonly service: KeywordEntryService) {
    super(service);
  }
}
