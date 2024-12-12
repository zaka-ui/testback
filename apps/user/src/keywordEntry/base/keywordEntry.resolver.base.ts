/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { KeywordEntry } from "./KeywordEntry";
import { KeywordEntryCountArgs } from "./KeywordEntryCountArgs";
import { KeywordEntryFindManyArgs } from "./KeywordEntryFindManyArgs";
import { KeywordEntryFindUniqueArgs } from "./KeywordEntryFindUniqueArgs";
import { CreateKeywordEntryArgs } from "./CreateKeywordEntryArgs";
import { UpdateKeywordEntryArgs } from "./UpdateKeywordEntryArgs";
import { DeleteKeywordEntryArgs } from "./DeleteKeywordEntryArgs";
import { Project } from "../../project/base/Project";
import { KeywordEntryService } from "../keywordEntry.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => KeywordEntry)
export class KeywordEntryResolverBase {
  constructor(
    protected readonly service: KeywordEntryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "KeywordEntry",
    action: "read",
    possession: "any",
  })
  async _keywordEntriesMeta(
    @graphql.Args() args: KeywordEntryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [KeywordEntry])
  @nestAccessControl.UseRoles({
    resource: "KeywordEntry",
    action: "read",
    possession: "any",
  })
  async keywordEntries(
    @graphql.Args() args: KeywordEntryFindManyArgs
  ): Promise<KeywordEntry[]> {
    return this.service.keywordEntries(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => KeywordEntry, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "KeywordEntry",
    action: "read",
    possession: "own",
  })
  async keywordEntry(
    @graphql.Args() args: KeywordEntryFindUniqueArgs
  ): Promise<KeywordEntry | null> {
    const result = await this.service.keywordEntry(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => KeywordEntry)
  @nestAccessControl.UseRoles({
    resource: "KeywordEntry",
    action: "create",
    possession: "any",
  })
  async createKeywordEntry(
    @graphql.Args() args: CreateKeywordEntryArgs
  ): Promise<KeywordEntry> {
    return await this.service.createKeywordEntry({
      ...args,
      data: {
        ...args.data,

        project: args.data.project
          ? {
              connect: args.data.project,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => KeywordEntry)
  @nestAccessControl.UseRoles({
    resource: "KeywordEntry",
    action: "update",
    possession: "any",
  })
  async updateKeywordEntry(
    @graphql.Args() args: UpdateKeywordEntryArgs
  ): Promise<KeywordEntry | null> {
    try {
      return await this.service.updateKeywordEntry({
        ...args,
        data: {
          ...args.data,

          project: args.data.project
            ? {
                connect: args.data.project,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => KeywordEntry)
  @nestAccessControl.UseRoles({
    resource: "KeywordEntry",
    action: "delete",
    possession: "any",
  })
  async deleteKeywordEntry(
    @graphql.Args() args: DeleteKeywordEntryArgs
  ): Promise<KeywordEntry | null> {
    try {
      return await this.service.deleteKeywordEntry(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Project, {
    nullable: true,
    name: "project",
  })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "any",
  })
  async getProject(
    @graphql.Parent() parent: KeywordEntry
  ): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}