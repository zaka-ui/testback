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
import { GrpcMethod } from "@nestjs/microservices";
import { KeywordEntryService } from "../keywordEntry.service";
import { KeywordEntryCreateInput } from "./KeywordEntryCreateInput";
import { KeywordEntryWhereInput } from "./KeywordEntryWhereInput";
import { KeywordEntryWhereUniqueInput } from "./KeywordEntryWhereUniqueInput";
import { KeywordEntryFindManyArgs } from "./KeywordEntryFindManyArgs";
import { KeywordEntryUpdateInput } from "./KeywordEntryUpdateInput";
import { KeywordEntry } from "./KeywordEntry";

export class KeywordEntryGrpcControllerBase {
  constructor(protected readonly service: KeywordEntryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: KeywordEntry })
  @GrpcMethod("KeywordEntryService", "createKeywordEntry")
  async createKeywordEntry(
    @common.Body() data: KeywordEntryCreateInput
  ): Promise<KeywordEntry> {
    return await this.service.createKeywordEntry({
      data: {
        ...data,

        project: data.project
          ? {
              connect: data.project,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        keywordText: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [KeywordEntry] })
  @ApiNestedQuery(KeywordEntryFindManyArgs)
  @GrpcMethod("KeywordEntryService", "keywordEntries")
  async keywordEntries(
    @common.Req() request: Request
  ): Promise<KeywordEntry[]> {
    const args = plainToClass(KeywordEntryFindManyArgs, request.query);
    return this.service.keywordEntries({
      ...args,
      select: {
        createdAt: true,
        id: true,
        keywordText: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: KeywordEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("KeywordEntryService", "keywordEntry")
  async keywordEntry(
    @common.Param() params: KeywordEntryWhereUniqueInput
  ): Promise<KeywordEntry | null> {
    const result = await this.service.keywordEntry({
      where: params,
      select: {
        createdAt: true,
        id: true,
        keywordText: true,

        project: {
          select: {
            id: true,
          },
        },

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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: KeywordEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("KeywordEntryService", "updateKeywordEntry")
  async updateKeywordEntry(
    @common.Param() params: KeywordEntryWhereUniqueInput,
    @common.Body() data: KeywordEntryUpdateInput
  ): Promise<KeywordEntry | null> {
    try {
      return await this.service.updateKeywordEntry({
        where: params,
        data: {
          ...data,

          project: data.project
            ? {
                connect: data.project,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          keywordText: true,

          project: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: KeywordEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("KeywordEntryService", "deleteKeywordEntry")
  async deleteKeywordEntry(
    @common.Param() params: KeywordEntryWhereUniqueInput
  ): Promise<KeywordEntry | null> {
    try {
      return await this.service.deleteKeywordEntry({
        where: params,
        select: {
          createdAt: true,
          id: true,
          keywordText: true,

          project: {
            select: {
              id: true,
            },
          },

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
