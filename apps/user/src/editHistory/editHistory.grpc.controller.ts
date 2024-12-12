import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EditHistoryService } from "./editHistory.service";
import { EditHistoryGrpcControllerBase } from "./base/editHistory.grpc.controller.base";

@swagger.ApiTags("editHistories")
@common.Controller("editHistories")
export class EditHistoryGrpcController extends EditHistoryGrpcControllerBase {
  constructor(protected readonly service: EditHistoryService) {
    super(service);
  }
}
