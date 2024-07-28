/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TopicsWhereUniqueInput } from "../../topics/base/TopicsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TopicsUpdateManyWithoutQuizPackagesItemsInput {
  @Field(() => [TopicsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TopicsWhereUniqueInput],
  })
  connect?: Array<TopicsWhereUniqueInput>;

  @Field(() => [TopicsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TopicsWhereUniqueInput],
  })
  disconnect?: Array<TopicsWhereUniqueInput>;

  @Field(() => [TopicsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TopicsWhereUniqueInput],
  })
  set?: Array<TopicsWhereUniqueInput>;
}

export { TopicsUpdateManyWithoutQuizPackagesItemsInput as TopicsUpdateManyWithoutQuizPackagesItemsInput };
