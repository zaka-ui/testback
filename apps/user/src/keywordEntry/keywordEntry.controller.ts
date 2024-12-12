import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KeywordEntryService } from "./keywordEntry.service";
import { KeywordEntryControllerBase } from "./base/keywordEntry.controller.base";

@swagger.ApiTags("keywordEntries")
@common.Controller("keywordEntries")
export class KeywordEntryController extends KeywordEntryControllerBase {
  constructor(
    protected readonly service: KeywordEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
