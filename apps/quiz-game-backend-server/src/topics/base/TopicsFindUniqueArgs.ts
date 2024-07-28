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
import { TopicsWhereUniqueInput } from "./TopicsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class TopicsFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => TopicsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TopicsWhereUniqueInput)
  @Field(() => TopicsWhereUniqueInput, { nullable: false })
  where!: TopicsWhereUniqueInput;
}

export { TopicsFindUniqueArgs as TopicsFindUniqueArgs };
