/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EditHistoryWhereInput } from "./EditHistoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EditHistoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EditHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => EditHistoryWhereInput)
  @IsOptional()
  @Field(() => EditHistoryWhereInput, {
    nullable: true,
  })
  every?: EditHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => EditHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => EditHistoryWhereInput)
  @IsOptional()
  @Field(() => EditHistoryWhereInput, {
    nullable: true,
  })
  some?: EditHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => EditHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => EditHistoryWhereInput)
  @IsOptional()
  @Field(() => EditHistoryWhereInput, {
    nullable: true,
  })
  none?: EditHistoryWhereInput;
}
export { EditHistoryListRelationFilter as EditHistoryListRelationFilter };