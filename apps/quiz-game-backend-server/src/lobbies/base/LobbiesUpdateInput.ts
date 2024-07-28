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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { QuizPackagesWhereUniqueInput } from "../../quizPackages/base/QuizPackagesWhereUniqueInput";
import { Type } from "class-transformer";
import { UserLobbiesUpdateManyWithoutLobbiesItemsInput } from "./UserLobbiesUpdateManyWithoutLobbiesItemsInput";

@InputType()
class LobbiesUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  host?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hostId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hostUser?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lobbiesQuizPackage?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => QuizPackagesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuizPackagesWhereUniqueInput)
  @IsOptional()
  @Field(() => QuizPackagesWhereUniqueInput, {
    nullable: true,
  })
  quizPackage?: QuizPackagesWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserLobbiesUpdateManyWithoutLobbiesItemsInput,
  })
  @ValidateNested()
  @Type(() => UserLobbiesUpdateManyWithoutLobbiesItemsInput)
  @IsOptional()
  @Field(() => UserLobbiesUpdateManyWithoutLobbiesItemsInput, {
    nullable: true,
  })
  userLobbiesItems?: UserLobbiesUpdateManyWithoutLobbiesItemsInput;
}

export { LobbiesUpdateInput as LobbiesUpdateInput };
