import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EditHistoryModuleBase } from "./base/editHistory.module.base";
import { EditHistoryService } from "./editHistory.service";
import { EditHistoryController } from "./editHistory.controller";
import { EditHistoryGrpcController } from "./editHistory.grpc.controller";
import { EditHistoryResolver } from "./editHistory.resolver";

@Module({
  imports: [EditHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [EditHistoryController, EditHistoryGrpcController],
  providers: [EditHistoryService, EditHistoryResolver],
  exports: [EditHistoryService],
})
export class EditHistoryModule {}
