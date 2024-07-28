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
import { QuestionsWhereUniqueInput } from "./QuestionsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QuestionsUpdateInput } from "./QuestionsUpdateInput";

@ArgsType()
class UpdateQuestionsArgs {
  @ApiProperty({
    required: true,
    type: () => QuestionsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionsWhereUniqueInput)
  @Field(() => QuestionsWhereUniqueInput, { nullable: false })
  where!: QuestionsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QuestionsUpdateInput,
  })
  @ValidateNested()
  @Type(() => QuestionsUpdateInput)
  @Field(() => QuestionsUpdateInput, { nullable: false })
  data!: QuestionsUpdateInput;
}

export { UpdateQuestionsArgs as UpdateQuestionsArgs };
