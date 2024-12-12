import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EditHistoryService } from "./editHistory.service";
import { EditHistoryControllerBase } from "./base/editHistory.controller.base";

@swagger.ApiTags("editHistories")
@common.Controller("editHistories")
export class EditHistoryController extends EditHistoryControllerBase {
  constructor(
    protected readonly service: EditHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
