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
import { FormInputWhereUniqueInput } from "./FormInputWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FormInputUpdateInput } from "./FormInputUpdateInput";

@ArgsType()
class UpdateFormInputArgs {
  @ApiProperty({
    required: true,
    type: () => FormInputWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FormInputWhereUniqueInput)
  @Field(() => FormInputWhereUniqueInput, { nullable: false })
  where!: FormInputWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FormInputUpdateInput,
  })
  @ValidateNested()
  @Type(() => FormInputUpdateInput)
  @Field(() => FormInputUpdateInput, { nullable: false })
  data!: FormInputUpdateInput;
}

export { UpdateFormInputArgs as UpdateFormInputArgs };
