import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { KeywordEntryResolverBase } from "./base/keywordEntry.resolver.base";
import { KeywordEntry } from "./base/KeywordEntry";
import { KeywordEntryService } from "./keywordEntry.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => KeywordEntry)
export class KeywordEntryResolver extends KeywordEntryResolverBase {
  constructor(
    protected readonly service: KeywordEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
