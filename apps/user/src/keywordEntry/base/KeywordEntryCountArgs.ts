/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { KeywordEntryWhereInput } from "./KeywordEntryWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class KeywordEntryCountArgs {
  @ApiProperty({
    required: false,
    type: () => KeywordEntryWhereInput,
  })
  @Field(() => KeywordEntryWhereInput, { nullable: true })
  @Type(() => KeywordEntryWhereInput)
  where?: KeywordEntryWhereInput;
}

export { KeywordEntryCountArgs as KeywordEntryCountArgs };