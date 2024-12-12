/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SearchResultService } from "../searchResult.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SearchResultCreateInput } from "./SearchResultCreateInput";
import { SearchResult } from "./SearchResult";
import { SearchResultFindManyArgs } from "./SearchResultFindManyArgs";
import { SearchResultWhereUniqueInput } from "./SearchResultWhereUniqueInput";
import { SearchResultUpdateInput } from "./SearchResultUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SearchResultControllerBase {
  constructor(
    protected readonly service: SearchResultService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SearchResult })
  @nestAccessControl.UseRoles({
    resource: "SearchResult",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SearchResultCreateInput,
  })
  async createSearchResult(
    @common.Body() data: SearchResultCreateInput
  ): Promise<SearchResult> {
    return await this.service.createSearchResult({
      data: data,
      select: {
        associatedKeyword: true,
        createdAt: true,
        id: true,
        resultContent: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SearchResult] })
  @ApiNestedQuery(SearchResultFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SearchResult",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async searchResults(@common.Req() request: Request): Promise<SearchResult[]> {
    const args = plainToClass(SearchResultFindManyArgs, request.query);
    return this.service.searchResults({
      ...args,
      select: {
        associatedKeyword: true,
        createdAt: true,
        id: true,
        resultContent: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SearchResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SearchResult",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async searchResult(
    @common.Param() params: SearchResultWhereUniqueInput
  ): Promise<SearchResult | null> {
    const result = await this.service.searchResult({
      where: params,
      select: {
        associatedKeyword: true,
        createdAt: true,
        id: true,
        resultContent: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SearchResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SearchResult",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SearchResultUpdateInput,
  })
  async updateSearchResult(
    @common.Param() params: SearchResultWhereUniqueInput,
    @common.Body() data: SearchResultUpdateInput
  ): Promise<SearchResult | null> {
    try {
      return await this.service.updateSearchResult({
        where: params,
        data: data,
        select: {
          associatedKeyword: true,
          createdAt: true,
          id: true,
          resultContent: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SearchResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SearchResult",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSearchResult(
    @common.Param() params: SearchResultWhereUniqueInput
  ): Promise<SearchResult | null> {
    try {
      return await this.service.deleteSearchResult({
        where: params,
        select: {
          associatedKeyword: true,
          createdAt: true,
          id: true,
          resultContent: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
