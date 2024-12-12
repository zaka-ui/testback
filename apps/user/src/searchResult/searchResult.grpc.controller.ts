import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SearchResultService } from "./searchResult.service";
import { SearchResultGrpcControllerBase } from "./base/searchResult.grpc.controller.base";

@swagger.ApiTags("searchResults")
@common.Controller("searchResults")
export class SearchResultGrpcController extends SearchResultGrpcControllerBase {
  constructor(protected readonly service: SearchResultService) {
    super(service);
  }
}
