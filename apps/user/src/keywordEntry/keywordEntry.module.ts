import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { KeywordEntryModuleBase } from "./base/keywordEntry.module.base";
import { KeywordEntryService } from "./keywordEntry.service";
import { KeywordEntryController } from "./keywordEntry.controller";
import { KeywordEntryGrpcController } from "./keywordEntry.grpc.controller";
import { KeywordEntryResolver } from "./keywordEntry.resolver";

@Module({
  imports: [KeywordEntryModuleBase, forwardRef(() => AuthModule)],
  controllers: [KeywordEntryController, KeywordEntryGrpcController],
  providers: [KeywordEntryService, KeywordEntryResolver],
  exports: [KeywordEntryService],
})
export class KeywordEntryModule {}
