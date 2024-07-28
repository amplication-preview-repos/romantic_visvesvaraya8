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
import { UserLobbiesWhereInput } from "./UserLobbiesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserLobbiesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserLobbiesWhereInput,
  })
  @ValidateNested()
  @Type(() => UserLobbiesWhereInput)
  @IsOptional()
  @Field(() => UserLobbiesWhereInput, {
    nullable: true,
  })
  every?: UserLobbiesWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserLobbiesWhereInput,
  })
  @ValidateNested()
  @Type(() => UserLobbiesWhereInput)
  @IsOptional()
  @Field(() => UserLobbiesWhereInput, {
    nullable: true,
  })
  some?: UserLobbiesWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserLobbiesWhereInput,
  })
  @ValidateNested()
  @Type(() => UserLobbiesWhereInput)
  @IsOptional()
  @Field(() => UserLobbiesWhereInput, {
    nullable: true,
  })
  none?: UserLobbiesWhereInput;
}
export { UserLobbiesListRelationFilter as UserLobbiesListRelationFilter };
