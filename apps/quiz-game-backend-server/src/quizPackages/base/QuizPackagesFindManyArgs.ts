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
import { QuizPackagesWhereInput } from "./QuizPackagesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { QuizPackagesOrderByInput } from "./QuizPackagesOrderByInput";

@ArgsType()
class QuizPackagesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QuizPackagesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => QuizPackagesWhereInput, { nullable: true })
  @Type(() => QuizPackagesWhereInput)
  where?: QuizPackagesWhereInput;

  @ApiProperty({
    required: false,
    type: [QuizPackagesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [QuizPackagesOrderByInput], { nullable: true })
  @Type(() => QuizPackagesOrderByInput)
  orderBy?: Array<QuizPackagesOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { QuizPackagesFindManyArgs as QuizPackagesFindManyArgs };
